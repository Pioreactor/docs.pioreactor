---
title: Introduction to background jobs
slug: /intro-background-jobs
hide_table_of_contents: true
---

The core unit of "work" in the Pioreactor software is a background job (called _activities_ in the web interface). Background jobs include `od_reading`, `monitor`, automation controllers, all the _automations_ themselves, etc. Often, a community plugin is a background job (or multiple jobs) that gives your bioreactor new abilities. There are a few important features of background jobs to be highlighted if you intend on working with them.

### Inheritance and file structure

All background jobs inherit from the base class `pioreactor.background_jobs.base.BackgroundJob`. This class controls most of the behind-the-scenes behaviour of the class.

Typically, we structure background job code such that the Python file has a single background job class and a command-line interface. See examples [here](https://github.com/Pioreactor/pioreactor/tree/master/pioreactor/background_jobs).

### Logging

All subclasses of `BackgroundJob` have the `logger` attribute that can be used to log messages. These messages are printed to the console, sent to MQTT, _sometimes_ displayed in the UI, and all are stored permanently in the Pioreactor database. Here's how:

```python

# use for debugging
job.logger.debug("A debug message - displayed in the console")

# use for providing relevant updates
job.logger.info("An info message - this is display in the Recent Logs table in the UI")

# use for successes or important updates
job.logger.notice("A notice message - this is displayed in the UI in a green popup")

# use for when something doesn't look correct, but will continue.
job.logger.warning("A debug message - this is displayed in the UI in a yellow popup")

# use for when something is wrong and you take over control from the user
job.logger.error("A debug message - this is displayed in the UI in a red popup")
```

### State of a job
A background job can be in one of five different states:

 - `init`: the job is initializing. The job starts in this state.
 - `ready`: the job is prepared to do "work", or currently doing "work"
 - `sleeping`: the job's work is paused (ex: when the stirring job is in state `sleeping`, it turns off its power.) This state is called "paused" in the web interface.
 - `disconnected`: the job has disconnected from services (MQTT, databases, etc.) and cleaned itself up successfully.
 - `lost`: the job did not disconnect gracefully. Something may be wrong.

Here's how the states can transition to each other:

```
                                        ┌──────────┐
                                        │          │
         ┌──────────────────────┬───────►   lost   ◄────────┐
         │                      │       │          │        │
         │                      │       └─────▲────┘        │
         │                      │             │             │
    ┌────┴─────┐          ┌─────┴──────┐      │     ┌───────┴──────┐
    │          │          │            │      │     │              │
    │   init   ├──────────►    ready   ├──────┼─────► disconnected │
    │          │          │            │      │     │              │
    └──────────┘          └────┬──▲────┘      │     └──────▲───────┘
                               │  │           │            │
                               │  │           │            │
                               │  │           │            │
                          ┌────▼──┴────┬──────┘            │
                          │            │                   │
                          │  sleeping  ├───────────────────┘
                          │            │
                          └────────────┘
```

The author can optionally define hooks when a job moves between states, and when it enters a new state. For example, the method `.on_ready_to_sleeping()` is called when the job moves from `ready` to `sleeping`. Similarly, the method `.on_sleeping()` is called when the jobs enters state `sleeping`. By default, these methods are empty.

The recommended way to move a job between states is with `job.set_state(job.READY)`. This will invoke any hooks that exist between the states. State can also be changed remotely over MQTT - we'll get to that point later.

### Publish & subscribe, also known as pub/sub

On job creation, the job will connect to [MQTT](/developer-guide/important-concepts#mqtt) to allow for publishing and subscribing. The attribute `sub_client` is for subscribing from MQTT, and `pub_client` is for publishing to MQTT. Internally, `sub_client` and `pub_client` are [Paho client objects](https://github.com/eclipse/paho.mqtt.python/blob/master/src/paho/mqtt/client.py).

Since publishing is so common, we also expose a `.publish` method:

```python
job = SomeBackgroundJob(unit, experiment)
job.publish(f"pioreactor/{job.unit}/{job.experiment}/...", payload)
```

Another common pattern is to subscribe to a MQTT topic, and execute a threaded callback whenever a message comes in from that topic. This is done with the `.subscribe_and_callback` method. By convention, this is most often used in a `.start_passive_listeners` method:

```python
from pioreactor.background_jobs.base import BackgroundJob

class SomeBackgroundJob(BackgroundJob):

    def __init__(self, ...):
        ...

        self.start_passive_listeners()


    def response_to_dosing_event(self, msg):
        # change self in response, etc.
        ...

    def start_passive_listeners(self):
        self.subscribe_and_callback(
            self.response_to_dosing_event,
            f"pioreactor/{self.unit}/{self.experiment}/dosing_events",
        )

```

### Publishing attributes to MQTT

A common task is when we have a job running, say stirring job, and we want to dynamically update an attribute, like the target RPM, without restarting the job.

We also want to know the value of a job's attribute when it changes. For example, in the stirring job, we'd like to know what the _actual_ RPM is. This can't be edited externally (it's a measured value...), but we want the value available for other jobs to use, for the web interface to display, or to sink it into a database.

These two tasks, updating attributes and reading attributes in real-time, are so common that we've wrapped the logic into the parent `BackgroundJob` class, and allow job authors to tell us what attributes they wish to update and/or read.

In the class definition, the attribute `published_settings` defines which class attributes they would like to track. For example, the job responsible for stirring looks like:

```python
class Stirrer(BackgroundJob):

    published_settings = {
        "target_rpm":   {"datatype": "json",  "settable": True,  "unit": "RPM"},
        "measured_rpm": {"datatype": "json",  "settable": False, "unit": "RPM"},
        "duty_cycle":   {"datatype": "float", "settable": True,  "unit": "%"},
    }

    ...

```

Thus the attributes `target_rpm`, `measured_rpm`, `duty_cycle` are all published to MQTT when they change, but only `duty_cycle` and `target_rpm` are able to be updated over MQTT (as defined by `settable`).

 - The `"datatype"` field is normally one of: `"string"`, `"float"`, `"integer"`, `"json"`, `"boolean"` (full list in `pioreactor/types.py`).
 - The `"settable"` field sets whether this attribute can be changed externally.
 -  The `"unit"` field is the unit of measurement, if any. This key is optional, and can be omitted.
 -  Also, there is an optional `"persist"` key (not shown above), which contains a boolean describing if the value should be kept in MQTT after the job exits, default `False`.


When a class' attribute that's present in `published_settings` changes, a MQTT message is published under the topic `pioreactor/{self.unit}/{self.experiment}/{self.job_name}/{attr}` with payload equal to the new value of the attribute. This is how the web interface is provided real-time data.

For updating an attribute, the `BackgroundJob` parent class listens to the MQTT topic:
```
pioreactor/{self.unit}/{self.experiment}/{self.job_name}/+/set
```

(the `+` is a MQTT wildcard), and when a message comes in, the class will check if the attribute (defined by `+`) is `settable`. If so, a lookup is done to see if a class method called `set_<attr>` is defined, and if present, calls that, with the only argument the message's payload. Otherwise, a simple assignment is done: `self.<attr> = payload`. The utility of a `set_<attr>` method is when changing the attribute requires more logic (ex: changing a PID controller's set point, see [example here](https://github.com/Pioreactor/pioreactor/blob/2d26082b85e06114b1847f11ffd28fd86453cf7f/pioreactor/background_jobs/stirring.py#L382-L385)).

:::info
`state` is special attribute that is automatically appended to `published_settings` (with `settable: True` and `persist: True`) so the state of the job can always be updated and read from MQTT. Over MQTT, the field is called referenced as `pioreactor/{unit}/{experiment}/{job_name}/$state` - note the `$`.
:::

When the job disconnects and cleans up, the published settings in MQTT are removed by sending an empty payload to the respective topics (unless `persist: True`, see above.)


### Uniqueness

Only a single instance of a background job, indexed by the job's name, can be running on a Raspberry Pi. For example, only a single `Monitor` background job can run, likewise only a single `ODReading` can run. (It's not clear what running multiple `ODReading`s means, or how they will interact with the hardware - poorly we expect).

The uniqueness is across processes, too. So if a script is running `ODReading`, then `pio run od_reading` will fail.

:::note
This uniqueness constraint is enforced in the current version of the software. It's possible we will see a reason to remove the uniqueness constraint in a future version - let us know if you want to see this, too!
:::


### Entry & exit

Background jobs make lots of connections to MQTT, GPIOs, hardware, and other external systems. It's important to treat background jobs as objects that need to be cleaned up these connections properly.

If your jobs needs to clean up something, you can put it into the `on_disconnected` function:

```python
from pioreactor.background_jobs.base import BackgroundJob
from pioreactor.actions.led_intensity import led_intensity

class HappyJob(BackgroundJob):

    def __init__(self, ...):
        # connect to a hardware
        self.hardware_connection = Hardware()
        self.hardware_connection.connect()

        # set LED on, too
        led_intensity({"A": 10})


    def on_disconnected(self):
        self.hardware_connection.disconnect()
        led_intensity({"A": 0})
```

`on_disconnected` is called and connections are closed when the job exits (see below).


There are two ways to use a background job that will ensure jobs are cleaned up correctly on exit:

```python
job = SomeBackgroundJob(unit, experiment)
...
job.clean_up()
# all cleaned up - state is set to disconnected
```

alternatively, with a context manager:
```python
with SomeBackgroundJob(unit, experiment) as job:
  ...

# all cleaned up - state is set to disconnected
```

The job is also cleaned up when the Python process exits.

:::caution
The following will cause problems:

```python
#❌ don't do this
def function_that_doesnt_clean_up():
    job = SomeBackgroundJob(unit, experiment)
    # job not cleaned up
    return True

value = function_that_doesnt_clean_up()
...
```
In the above, the job `SomeBackgroundJob` isn't disconnected, and state hasn't changed - nor can you access the job anymore (no accessible references). Do this instead:

```python
# ✅ this is okay
def function_that_does_clean_up():
    with SomeBackgroundJob(unit, experiment) as job:
        ...
    return True

value = function_that_does_clean_up()
```


### Blocking

Often we want the job to wait and blocks, so as to wait for user commands or MQTT messages. We can accomplish this with

```python
job.block_until_disconnected()
```

This blocks the execution until the job is disconnected (either a MQTT state change, or a signal from the OS).

---
title: Writing a new automation
slug: /writing-automations-1
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

An automation is a hands-off way to adjust the environment for the microbes. We currently support three types of automations: dosing, LED, and temperature.

In this section, we'll develop a simple dosing automation.

### Creating our first custom automation

Writing an automation involves creating a Python class and overriding specific methods. It would be helpful to be somewhat familiar with [Python classes](https://realpython.com/python3-object-oriented-programming/) before beginning. Here's an example of a (naive) turbidostat automation, i.e. it will add fresh media and remove old media when an optical density threshold is exceeded. The full code is below, and we'll go through each line of code after:

```python
# -*- coding: utf-8 -*-
from pioreactor import types as pt
from pioreactor.automations.dosing.base import DosingAutomationJobContrib

class NaiveTurbidostat(DosingAutomationJobContrib):

    automation_name = "naive_turbidostat"
    published_settings = {
        "target_normalized_od": {"datatype": "float", "settable": True, "unit": "AU"},
        "exchange_volume_ml": {"datatype": "float", "settable": True, "unit": "mL"},
    }
    def __init__(self, target_normalized_od, exchange_volume_ml=1.0, **kwargs):
        self._event_trigger_ready = False
        super().__init__(**kwargs)
        self.target_normalized_od = float(target_normalized_od)
        self.exchange_volume_ml = float(exchange_volume_ml)
        self._event_trigger_ready = True

    def _set_normalized_od(self, message: pt.MQTTMessage):
        super()._set_normalized_od(message)
        if message.payload and not message.retain and self._event_trigger_ready:
            self.trigger_run_once_from_event()

    def execute(self):
        if self.latest_normalized_od > self.target_normalized_od:
            self.execute_io_action(
                media_ml=self.exchange_volume_ml,
                waste_ml=self.exchange_volume_ml,
            )
```

First important thing is to subclass from `DosingAutomationJobContrib`:

```python
from pioreactor.automations.dosing.base import DosingAutomationJobContrib

class NaiveTurbidostat(DosingAutomationJobContrib):
   ...
```

The `DosingAutomationJobContrib` is a subclass of a `BackgroundJob`. The `-Contrib` part is a small detail to specify that it's a third-party automation (i.e. _you_ are developing it, not us.)

We need a "key" to i) distinguish this from other automations, and ii) be able to be communicate between systems (think: the web UI in JavaScript to Python, and back). The `automation_name` attribute does this for us. Normally, it's the [snakecase](https://en.wikipedia.org/wiki/Snake_case) of the class name.

```python
    automation_name = "naive_turbidostat"
```

The `published_settings` tells the Pioreactor software what class attributes are published to MQTT, and if they are editable via MQTT (we will try editing over MQTT later). This is important if you wish to dynamically change attributes of an automation during an experiment, for example: from the web interface. Our class has the following:

```python
...
    published_settings = {
        "target_normalized_od": {"datatype": "float", "settable": True, "unit": "AU"},
        "exchange_volume_ml": {"datatype": "float", "settable": True, "unit": "mL"},
    }
...
```

The associated metadata says that the class attributes `target_normalized_od` and `exchange_volume_ml` are floats, are editable via MQTT (so they can be changed using the web interface), and have units.

Next, we define how to initialize our automation class. Here we can add settings we want to accept from the user: what is our initial target optical density. Note the boilerplate `**kwargs`, and `super()` are important.

```python
    def __init__(self, target_normalized_od, exchange_volume_ml=1.0, **kwargs):
        self._event_trigger_ready = False
        super().__init__(**kwargs)
        self.target_normalized_od = float(target_normalized_od)
        self.exchange_volume_ml = float(exchange_volume_ml)
        self._event_trigger_ready = True
```

Automations now choose their own trigger model. This example should react to new normalized OD readings, so it overrides the passive normalized-OD listener. The parent class stores the latest reading first. Then, for a fresh non-retained MQTT message, `trigger_run_once_from_event()` schedules one non-overlapping call to `execute()`.

```python
    def _set_normalized_od(self, message: pt.MQTTMessage):
        super()._set_normalized_od(message)
        if message.payload and not message.retain and self._event_trigger_ready:
            self.trigger_run_once_from_event()
```

Finally, the `execute` method contains one decision/action. In our simple case, we want to dilute the vial if the latest normalized OD exceeds the target:

```python
    def execute(self):
        if self.latest_normalized_od > self.target_normalized_od:
            self.execute_io_action(
                media_ml=self.exchange_volume_ml,
                waste_ml=self.exchange_volume_ml,
            )
```

Since we are working with a fixed volume, `media_ml` must equal `waste_ml`, else an error will be thrown. What is the `latest_normalized_od` attribute? Our class, when active, is listening to new normalized OD values being published by the growth-rate calculator. Hence when `execute` runs, we'll have access to the most up-to-date value. Likewise, there are also `latest_growth_rate`, `latest_od`, and `latest_od_fused` attributes that update when new values are calculated or published. These attributes are defined and maintained in the parent class.

:::tip
For periodic automations, call `self.run_every(...)` in `__init__` instead of overriding a passive listener. For example, a chemostat-style automation might accept `duration` and `skip_first_run`, then call `self.run_every(duration, skip_first_run=skip_first_run, run_after_seconds=2.0)`.
:::

:::tip
Prefer `self.execute_io_action(...)` inside `execute`. If you need to call `add_media_to_bioreactor(...)` directly, remember to forward `mqtt_client=self.pub_client` and `logger=self.logger`:

```python
def execute(self):
    if self.latest_growth_rate < self.target_mu:
        self.add_media_to_bioreactor(
            ml=self.dosing_volume,
            source_of_event=f"{self.job_name}:{self.automation_name}",
            unit=self.unit,
            experiment=self.experiment,
            mqtt_client=self.pub_client,
            logger=self.logger,
        )
```

:::

### Running the automation

How do we run this automation now? Let's copy the code into a file called `naive_turbidostat.py` and place it into the folder `~/.pioreactor/plugins`.

:::info
You can create this file on your Pioreactor's Raspberry Pi: after [accessing the Raspberry Pi's command line](https://docs.pioreactor.com/user-guide/accessing-raspberry-pi), typing `nano ~/.pioreactor/plugins/naive_turbidostat.py`, and pasting in the code below.
:::

```python
# -*- coding: utf-8 -*-
from pioreactor import types as pt
from pioreactor.automations.dosing.base import DosingAutomationJobContrib

class NaiveTurbidostat(DosingAutomationJobContrib):

    automation_name = "naive_turbidostat"
    published_settings = {
        "target_normalized_od": {"datatype": "float", "settable": True, "unit": "AU"},
        "exchange_volume_ml": {"datatype": "float", "settable": True, "unit": "mL"},
    }
    def __init__(self, target_normalized_od, exchange_volume_ml=1.0, **kwargs):
        self._event_trigger_ready = False
        super().__init__(**kwargs)
        self.target_normalized_od = float(target_normalized_od)
        self.exchange_volume_ml = float(exchange_volume_ml)
        self._event_trigger_ready = True

    def _set_normalized_od(self, message: pt.MQTTMessage):
        super()._set_normalized_od(message)
        if message.payload and not message.retain and self._event_trigger_ready:
            self.trigger_run_once_from_event()

    def execute(self):
        if self.latest_normalized_od > self.target_normalized_od:
            self.execute_io_action(
                media_ml=self.exchange_volume_ml,
                waste_ml=self.exchange_volume_ml,
            )

```

Run the script with `pio run dosing_automation --automation-name naive_turbidostat --target-normalized-od 0.5 --exchange-volume-ml 1.0`. This will start the job. After a moment, you may notice that warnings are thrown - that's because there are no normalized optical density measurements being produced! You can use ctrl-c to stop the job.

#### Editing attributes over MQTT (optional)

We'll demonstrate the ability to dynamically change the `target_normalized_od` attribute using MQTT. For each member of `published_settings`, the `DosingAutomationJobContrib` class listens to the MQTT topic:
```
pioreactor/<unit name>/<experiment>/dosing_automation/<attribute>/set
```

We'll use `mosquitto_pub` to publish a message to this topic. So, with the Python script running, open a new command line, and enter the following:

```
mosquitto_pub -t "pioreactor/test_unit/test_experiment/dosing_automation/target_normalized_od/set" -m 5.0 -u pioreactor -P raspberry
```

You should see some logs in the Python console report that the `target_normalized_od` was changed. Also, the value of 5.0 is published and retained to the topic `pioreactor/test_unit/test_experiment/dosing_automation/target_normalized_od`

Why is this useful?

1. This is how the web interface updates settings in running activities.
2. Other Pioreactor activities can update each other's settings.
3. External programs or apps can monitor and update settings this way, too.


### Adding the automation to the UI

To add your automation to the UI so it appears in the automation drop-down, follow the the steps [here](/developer-guide/adding-plugins-to-ui#adding-a-custom-automation-to-the-drop-down-of-automations).



### Extensions of our custom automation

Below are some extensions. Keep the event-triggering `_set_normalized_od` method from the complete example above; these snippets focus on the changed settings and decision logic.

#### Changing the volume exchanged

Exchanging 1ml each time may not be enough, so the example includes `exchange_volume_ml` in `published_settings`. Since it is settable, the UI or MQTT can dynamically adjust the volume while the automation is running.

#### Using `latest_growth_rate`

If our growth rate is high, we may want to modify the volume exchanged to keep up. A naive solution: we can bump up the exchanged volume if the growth rate is high. Much better would be a dynamic solution, or a feedback loop.


```python {3-6}
    def execute(self):
        if self.latest_normalized_od > self.target_normalized_od:
            if self.latest_growth_rate > 0.2:
                self.execute_io_action(media_ml=2 * self.exchange_volume_ml, waste_ml=2 * self.exchange_volume_ml)
            else:
                self.execute_io_action(media_ml=self.exchange_volume_ml, waste_ml=self.exchange_volume_ml)

```

# Writing new automations

An automation is a hands-off way to adjust the environment for the microbes. We currently support three types of automations: dosing, LED, and temperature. A dosing automation involves when to add media (ex: a turbidostat). A LED automation uses the additional LED pockets, and user-supplied LEDs, to modify light into the vial (ex: a photobioreactor or optogenetics experiments). A temperature automation is how users can preprogram the temperature of the vial.

In this section, we'll develop a simple dosing automation.

### Creating our first custom automation

Writing an automation involves creating a Python class and overriding specific methods. It would be helpful to be familiar with [Python classes](https://realpython.com/python3-object-oriented-programming/) before beginning. Here's an example of a (naive) turbidostat automation, i.e. it will add fresh media and remove old media when an optical density threshold is exceeded. The full code is below, and we'll go through each line of code after:

```python
from pioreactor.automations import DosingAutomationJobContrib

class NaiveTurbidostat(DosingAutomationJobContrib):

    automation_name = "naive_turbidostat"
    published_settings = {
        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},
    }
    def __init__(self, target_od, **kwargs):
        super().__init__(**kwargs)
        self.target_od = target_od

    def execute(self):
        if self.latest_od > self.target_od:
            self.execute_io_action(media_ml=1.0, waste_ml=1.0)
```

First important thing is to subclass from `DosingAutomationJobContrib`:

```python
from pioreactor.automations import DosingAutomationJobContrib

class NaiveTurbidostat(DosingAutomationJobContrib):
   ...
```

The `DosingAutomationContrib` is a subclass of a `BackgroundJob`. The `Contrib` part is a small detail to specify that it's a third-party automation (i.e. _you_ are developing it, not us.)

We need a "key" to i) distinguish this from other automations, and ii) be able to be communicate between systems (think: the web UI in JavaScript to Python, and back). The `automation_name` attribute does this for us. Normally, it's the [snakecase](https://en.wikipedia.org/wiki/Snake_case) of the class name.

```python
    ...
    automation_name = "naive_turbidostat"
    ...
```

The `published_settings` tells the Pioreactor software what class attributes are published to MQTT, and if they are editable via MQTT (we will try editing over MQTT later). This is important if you wish to dynamically change attributes of an automation during an experiment, say from the web interface. Our class has the following:

```python
...
    published_settings = {
        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},
    }
...
```

This says that the class attribute `target_od` is a float, is editable via MQTT (so it can be changed using the web interface), and it has units AU ("arbitrary units").

Next, we define how to initialize our class. Here we can add settings we want to accept from the user: what is our target optical density. Note the boilerplate `**kwargs`, and `super()` are important.

```python
    def __init__(self, target_od, **kwargs):
        super().__init__(**kwargs)
        self.target_od = target_od
```

Finally, every `duration` (specified in the controller, later in this section) minutes, the function `execute` will run. The `execute` contains the core logic of the automation. In our simple case, we want to dilute the vial if we have exceed the `latest_od`:

```python
    def execute(self):
        if self.latest_od > self.target_od:
            self.execute_io_action(media_ml=1.0, waste_ml=1.0)
```

Since we are working with a fixed volume, `media_ml` must equal `waste_ml`, else an error will be thrown. What is `latest_od`? Our class, when active, is listening to the growth-rate-calculating job's output of normalized optical density. Hence when `execute` runs, we'll have access to the most up-to-date value of normalized optical density. Likewise, there is a `latest_growth_rate` that updates when a new growth-rate value is produced. Both are defined and maintained in the parent class.

### Running the script

How do we run this automation now? Let's put the following code in to a file called `naive_turbidostat.py`

```python
# -*- coding: utf-8 -*-
"""
run on the command line with
$ python3 naive_turbidostat.py

Exit with ctrl-c
"""
from pioreactor.automations import DosingAutomationJobContrib

class NaiveTurbidostat(DosingAutomationJobContrib):

    automation_name = "naive_turbidostat"
    published_settings = {
        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},
    }
    def __init__(self, target_od, **kwargs):
        super().__init__(**kwargs)
        self.target_od = target_od

    def execute(self):
        if self.latest_od > self.target_od:
            self.execute_io_action(media_ml=1.0, waste_ml=1.0)

if __name__=="__main__":
    from pioreactor.background_jobs.dosing_control import DosingController

    dc = DosingController(
        "naive_turbidostat",
        target_od=2.0,
        duration=1, # check every 1 minute
        unit="test_unit",
        experiment="test_experiment"
    )
    dc.block_until_disconnected()

```
This uses the dosing controller class, `DosingController`, which controls which dosing automation is running. By using `DosingAutomationJobContrib`, our new `NaiveTurbidostat` class is automatically discovered by `DosingController` and referenced by the `automation_name` we chose, `naive_turbidostat`.

:::info
If you have Pioreactor installed locally, you can save this file on your system. Otherwise, you can create this file on your Pioreactor's Raspberry Pi: after accessing the Raspberry Pi's command line, typing `nano naive_turbidostat.py`, and pasting in the code above.
:::

Run the script with `python3 naive_turbidostat.py`. This will start the job. After a minute, you may notice that errors are thrown - that's because there's no optical density measurements being sent!

#### Editing attributes over MQTT (optional)

We'll demonstrate the ability to dynamically change the `target_od` attribute using MQTT. For each member of `published_settings`, the `DosingAutomationJobContrib` class listens to the MQTT topic:
```
pioreactor/<unit name>/<experiment>/dosing_automation/<attribute>/set
```

We'll use `mosquitto_pub` to publish a message to this topic. So, with the python script running, open a new command line, and enter the following:

```
mosquitto_pub -t "pioreactor/test_unit/test_experiment/dosing_automation/target_od/set" -m 5.0
```

You should see some logs in the Python console report that the `target_od` was changed. Also, a the value of 5.0 is published and retained to the topic `pioreactor/test_unit/test_experiment/dosing_automation/target_od`

Why is this useful?

1. This is how the web interface updates settings in running activities.
2. Other Pioreactor activities can update each other's settings.
3. External programs or apps can monitor and update settings this way, too.


### Extensions of our custom automation

Below are some extensions, with additions highlighted

#### Dynamic volume exchanged

Exchanging 1ml each time may not be enough, so we add `volume` to the `published_settings`. Now, from the UI, we can dynamically adjust the volume.

```python {8,10,13,17}
from pioreactor.automations import DosingAutomationJobContrib

class NaiveTurbidostat(DosingAutomationJobContrib):

    automation_name = "naive_turbidostat"
    published_settings = {
        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},
        "volume": {"datatype": "float", "settable": True, "unit": "mL"},
    }
    def __init__(self, target_od, volume, **kwargs):
        super().__init__(**kwargs)
        self.target_od = target_od
        self.volume = volume

    def execute(self):
        if self.latest_od > self.target_od:
            self.execute_io_action(media_ml=self.volume, waste_ml=self.volume)
```



#### Using `latest_growth_rate`

If our growth rate is high, we may want to modify the volume exchanged to keep up. A naive solution: we can bump up the exchanged volume if the growth rate is high. Much better would be a dynamic solution, or a feedback loop (like a PID controller, see [`pid_turbidostat`](https://github.com/Pioreactor/pioreactor/blob/master/pioreactor/automations/dosing/pid_turbidostat.py))


```python {8,10,13,17}
from pioreactor.automations import DosingAutomationJobContrib

class NaiveTurbidostat(DosingAutomationJobContrib):

    automation_name = "naive_turbidostat"
    published_settings = {
        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},
        "volume": {"datatype": "float", "settable": True, "unit": "mL"},
    }
    def __init__(self, target_od, volume, **kwargs):
        super().__init__(**kwargs)
        self.target_od = target_od
        self.volume = volume

    def execute(self):
        if self.latest_od > self.target_od:
            if self.latest_growth_rate > 0.2:
                self.execute_io_action(media_ml=2 * self.volume, waste_ml=2 * self.volume)
            else:
                self.execute_io_action(media_ml=self.volume, waste_ml=self.volume)

```

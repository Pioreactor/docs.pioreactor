---
title: Another example of automation design
slug: /writing-automations-2
---

Let's design a simple LED automation for Light/Dark cycles. The basic idea is that the LED automation "wakes up" (specifically: it runs its `execute` method) every hour, and on specific hours, turns on or turns off the white light LEDs.

### The Code

1. Imports at the top of the file!
```python
# -*- coding: utf-8 -*-
from __future__ import annotations
from pioreactor.automations import LEDAutomationJobContrib
from pioreactor.whoami import get_unit_name, get_latest_experiment_name
from pioreactor.automations import events
```

2. Define a new class as a subclass of `LEDAutomationJobContrib`. We use `LEDAutomationJobContrib` since this is a 3rd party automation. We give the new class a descriptive name. The `automation_name` attribute is necessary - and is often just the camel case version of the class name.
```python
class LightDarkCycle(LEDAutomationJobContrib):
    automation_name = "light_dark_cycle"
```

3. Define our `published_settings` for this class. This is a dictionary of `LightDarkCycle` attributes that we can modify/inspect from MQTT (and hence from the UI, or from the leader Pioreactor). Not all attributes need to go in here - only the ones that users may want to modify mid-experiment. 

Later in this post, we'll see what each of these attributes does. 

```python
    published_settings = {
        "duration": {"datatype": "float", "settable": False, "unit": "min"},
        "light_intensity": {"datatype": "float", "settable": True, "unit": "%"},
        "light_duration_hours": {"datatype": "float", "settable": True, "unit": "h"},
        "dark_duration_hours": {"datatype": "float", "settable": True, "unit": "h"},
    }
```

4. Create the `__init__`, with the attributes we'll need. 
```python
    def __init__(self, light_intensity: float, light_duration_hours: int, dark_duration_hours: int, **kwargs):
        super().__init__(**kwargs)
        self.hours_online = -1
        self.light_active = False
        self.channels = ["B", "C"]
        self.set_light_intensity(light_intensity)
        self.light_duration_hours = float(light_duration_hours)
        self.dark_duration_hours = float(dark_duration_hours)
```

- `hours_online` will keep track of how many elapsed hours have gone by. 
- `light_active` keeps track of whether the LEDs are currently on or off
- `channels` refers to which LED channels on the Pioreactor HAT we are using.
- `light_duration_hours`: the number of hours to keep the light on for, typically 16
- `dark_duration_hours`: the number of hours to keep the light off for, typically 8
- `light_intensity`: the level of intensity, as a percent, of the LEDs when turned on.


5. We define the `execute` function, which is what runs every `duration` minutes. In the function, we increment `hours_online` by 1 (since it runs every 60 minutes), and ask a separate function, `trigger_leds`, to handle turning on and off LEDs. The `execute` can return an `Event`, which is useful for logging and testing purposes.
```python
    def execute(self):
        self.hours_online += 1
        event = self.trigger_leds(self.hours_online)
        return event
```

The other class function, `trigger_leds`, role is to:

1. determine if we should turn on LEDs, turn off LEDs, or do nothing.
2. If we are changing LEDs status (on to off, or off to on), perform that task.
3. return an `Event`, with some description of what occurred (even if nothing changed).

To do 1., we think about the total hours passed _modulo_ how long our cycle is. That is, if our cycle lasts 24 hours (which might be the result of choosing 16h light + 8h dark), then the hour 33 is really the same as hour 9, likewise the hour 123 is the same as hour 3: we take the hour modulo the duration. 

We then ask, is this hour in the dark period, or the light period, of the cycle? We also ask if the `lights_active` is on, or off, respectively? If so, we change the status of the LEDs. For example, if we _should_ be in the dark period, but our LEDs are on, well, we turn them off, and return a `ChangeLEDIntensity` event. The function `set_led_intensity` is from the parent class, and is a helper function. 

```python
    def trigger_leds(self, hours: int) -> events.Event:
        cycle_duration: int = self.light_duration_hours + self.dark_duration_hours

        if ((hours % cycle_duration) < self.light_duration_hours) and (not self.light_active):
            self.light_active = True
            for channel in self.channels:
                self.set_led_intensity(channel, self.light_intensity)
            return events.ChangedLedIntensity(f"{hours}h: turned on LEDs")
        elif ((hours % cycle_duration) >= self.light_duration_hours) and (self.light_active):
            self.light_active = False
            for channel in self.channels:
                self.set_led_intensity(channel, 0)
            return events.ChangedLedIntensity(f"{hours}h: turned off LEDs")
        else:
            return events.NoEvent(f"{hours}h: no change")

```

We also need to define that `set_light_intensity` function above. This function is automatically called whenever we change `light_intensity` (see note below). We need additional logic to immediately change the `light_intensity` when asked, otherwise, the LEDs wouldn't actually update until the _next_ `execute` is called, which could be an hour away.

```python
    def set_light_intensity(self, intensity) -> None:
        self.light_intensity = float(intensity)
        if self.light_active:
            # update now!
            for channel in self.channels:
                self.set_led_intensity(channel, self.light_intensity)
        else:
            pass
```

:::info

Updates over MQTT either update the attribute directly, i.e. :`self.<attr> = new_value`, or, if defined, the method `set_<attr>(new_value)` is called instead. This is what is happening with `set_light_intensity`. Using `set_<attr>` methods is useful when you have additional logic that needs to be accomplished when an attribute changes.
:::


That's the end of the class! We turn it into a runnable script with the following, at the end of the file:

```python
if __name__ == "__main__":
    from pioreactor.background_jobs.led_control import LEDController
    from pioreactor.whoami import get_unit_name, get_latest_experiment_name

    lc = LEDController(
        led_automation="light_dark_cycle",
        light_intensity=45.0,
        light_duration_hours=16,
        dark_duration_hours=8,
        duration=60, # every 60min we "wake up" and decide what to do.
        skip_first_run=False,
        unit=get_unit_name(),
        experiment=get_latest_experiment_name()
    )

    lc.block_until_disconnected()
```

In total, our file looks like:

```python
# -*- coding: utf-8 -*-
from __future__ import annotations
from pioreactor.automations import LEDAutomationJobContrib
from pioreactor.automations import events

class LightDarkCycle(LEDAutomationJobContrib):
    """
    Follows as h light / h dark cycle. Starts dark.
    """

    automation_name = "light_dark_cycle"
    published_settings = {
        "duration": {"datatype": "float", "settable": False, "unit": "min"}, # doesn't make sense to change duration.
        "light_intensity": {"datatype": "float", "settable": True, "unit": "%"},
        "light_duration_hours": {"datatype": "int", "settable": True, "unit": "h"},
        "dark_duration_hours": {"datatype": "int", "settable": True, "unit": "h"},
    }

    def __init__(self, light_intensity: float, light_duration_hours: int, dark_duration_hours: int, **kwargs):
        super().__init__(**kwargs)
        self.hours_online: int = -1
        self.light_active: bool = False
        self.channels = ["B", "C"]
        self.set_light_intensity(light_intensity)
        self.light_duration_hours = float(light_duration_hours)
        self.dark_duration_hours = float(dark_duration_hours)


    def trigger_leds(self, hours: int) -> events.Event:
        cycle_duration: int = self.light_duration_hours + self.dark_duration_hours

        if ((hours % cycle_duration) < self.light_duration_hours) and (not self.light_active):
            self.light_active = True
            for channel in self.channels:
                self.set_led_intensity(channel, self.light_intensity)
            return events.ChangedLedIntensity(f"{hours}h: turned on LEDs")
        elif ((hours % cycle_duration) >= self.light_duration_hours) and (self.light_active):
            self.light_active = False
            for channel in self.channels:
                self.set_led_intensity(channel, 0)
            return events.ChangedLedIntensity(f"{hours}h: turned off LEDs")
        else:
            return events.NoEvent(f"{hours}h: no change")


    def set_light_intensity(self, intensity) -> None:
        self.light_intensity = float(intensity)
        if self.light_active:
            # update now!
            for channel in self.channels:
                self.set_led_intensity(channel, self.light_intensity)
        else:
            pass


    def execute(self) -> events.Event:
        self.hours_online += 1
        event = self.trigger_leds(self.hours_online)
        return event



if __name__ == "__main__":
    from pioreactor.background_jobs.led_control import LEDController
    from pioreactor.whoami import get_unit_name, get_latest_experiment_name

    lc = LEDController(
        led_automation="light_dark_cycle",
        light_intensity=45.0,
        light_duration_hours=16,
        dark_duration_hours=8,
        duration=60, # every 60min we "wake up" and decide what to do.
        skip_first_run=False,
        unit=get_unit_name(),
        experiment=get_latest_experiment_name()
    )

    lc.block_until_disconnected()
```

### Setting up the Pioreactor

Setting up your Pioreactor is easy: attach LEDs to LED channels `B` and `C`, and stick them in pockets `X2` and `X3`.


### Running the automation

Let's save this file to our Pioreactor, by accessing the Pioreactor's command line, typing `nano light_dark_cycle.py`, and pasting in the code above. 

You can test the automation from the Pioreactor's command line by executing (you may want to change the `duration` to something like 0.5, so you're not waiting hours to see it change):
```
python3 light_dark_cycle.py
```
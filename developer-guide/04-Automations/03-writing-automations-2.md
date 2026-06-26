---
title: Another example writing a new automation
slug: /writing-automations-2
hide_table_of_contents: true
---

Let's design a simple LED automation for Light/Dark cycles. The basic idea is that the LED automation applies the current light or dark phase, then schedules the next phase boundary. This is different from a periodic dosing automation: there is no global `duration` loop for every automation anymore. Each automation chooses its own trigger model.

### The Code

1. Imports at the top of the file!

```python
# -*- coding: utf-8 -*-
from __future__ import annotations

from threading import Timer

from pioreactor.automations import events
from pioreactor.automations.led.base import LEDAutomationJobContrib
from pioreactor.types import LedChannel
from pioreactor.utils.timing import current_utc_datetime
```

2. Define a new class as a subclass of `LEDAutomationJobContrib`. We use `LEDAutomationJobContrib` since this is a 3rd party automation. We give the new class a descriptive name. The `automation_name` attribute is necessary - and is often just the snake case version of the class name.

```python
class LightDarkCycle(LEDAutomationJobContrib):
    automation_name = "light_dark_cycle"
```

3. Define our `published_settings` for this class. This is a dictionary of attributes that we can modify or inspect from MQTT, and hence from the UI or from the leader Pioreactor. Only include settings that users may want to inspect or modify mid-experiment.

```python
    published_settings = {
        "light_intensity": {"datatype": "float", "settable": True, "unit": "%"},
        "light_duration_minutes": {"datatype": "float", "settable": True, "unit": "min"},
        "dark_duration_minutes": {"datatype": "float", "settable": True, "unit": "min"},
    }
```

4. Create the `__init__`, with the attributes we'll need.

```python
    def __init__(
        self,
        light_intensity: float | str,
        light_duration_minutes: float | str,
        dark_duration_minutes: float | str,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self._cycle_started_at = current_utc_datetime()
        self._phase_timer: Timer | None = None
        self.light_active = False
        self.channels: tuple[LedChannel, ...] = ("D", "C")
        self.set_light_intensity(light_intensity)
        self.light_duration_minutes = float(light_duration_minutes)
        self.dark_duration_minutes = float(dark_duration_minutes)
        self._automation_strategy_start_callback = self._start_phase_schedule
```

- `_cycle_started_at` anchors the light/dark cycle.
- `_phase_timer` stores the pending timer for the next phase boundary.
- `light_active` keeps track of whether the LEDs are currently on or off.
- `channels` refers to which LED channels on the Pioreactor HAT we are using.
- `light_duration_minutes`: the number of minutes to keep the light on.
- `dark_duration_minutes`: the number of minutes to keep the light off.
- `light_intensity`: the level of intensity, as a percent, of the LEDs when turned on.

`_automation_strategy_start_callback` tells the base automation runtime what should start once the job is fully initialized. For periodic automations, this is usually handled by `self.run_every(...)`. For this phase-based automation, we install our own callback instead.

5. Define `execute`. It calculates where we are in the cycle and delegates to `trigger_leds`.

```python
    def execute(self):
        elapsed_minutes = (current_utc_datetime() - self._cycle_started_at).total_seconds() / 60
        return self.trigger_leds(elapsed_minutes)
```

The other class function, `trigger_leds`, role is to:

1. determine if we should turn on LEDs, turn off LEDs, or do nothing.
2. if we are changing LED status, perform that task.
3. return an `Event` when something changed, or `None` when there is no change.

To decide the phase, we think about total minutes passed _modulo_ how long our cycle is. If our cycle lasts 24 hours (which is 1440 minutes), then minute 1500 is really minute 60 in the next cycle.

```python
    def trigger_leds(self, elapsed_minutes: float):
        if self.light_duration_minutes <= 0:
            light_should_be_on = False
        elif self.dark_duration_minutes <= 0:
            light_should_be_on = True
        else:
            cycle_duration_minutes = self.light_duration_minutes + self.dark_duration_minutes
            light_should_be_on = (elapsed_minutes % cycle_duration_minutes) < self.light_duration_minutes

        if light_should_be_on == self.light_active:
            return None

        self.light_active = light_should_be_on
        intensity = self.light_intensity if light_should_be_on else 0
        for channel in self.channels:
            self.set_led_intensity(channel, intensity)

        action = "on" if light_should_be_on else "off"
        return events.ChangedLedIntensity(f"{elapsed_minutes:.1f}min: turned {action} LEDs.")
```

We also need to define `set_light_intensity`. This function is automatically called whenever we change `light_intensity` (see note below). We need additional logic to immediately change the `light_intensity` when asked, otherwise the LEDs would not update until the next phase callback.

```python
    def set_light_intensity(self, intensity: float | str):
        self.light_intensity = float(intensity)
        if self.light_active:
            for channel in self.channels:
                self.set_led_intensity(channel, self.light_intensity)
```

:::info

Updates over MQTT either update the attribute directly, i.e. `self.<attr> = new_value`, or, if defined, the method `set_<attr>(new_value)` is called instead. This is what is happening with `set_light_intensity`. Using `set_<attr>` methods is useful when you have additional logic that needs to be accomplished when an attribute changes.
:::

Finally, we schedule the next phase boundary. `run_once(wait_for_ready=False)` is preferred over calling `execute()` directly because it handles shared automation bookkeeping like state checks, non-overlap, event logging, and `latest_event`.

```python
    def _start_phase_schedule(self):
        self._run_and_schedule_next_phase()

    def _run_and_schedule_next_phase(self):
        self.run_once(wait_for_ready=False)
        self._schedule_next_phase_boundary()

    def _seconds_until_next_phase_boundary(self):
        if self.light_duration_minutes <= 0 or self.dark_duration_minutes <= 0:
            return None

        elapsed_minutes = (current_utc_datetime() - self._cycle_started_at).total_seconds() / 60
        cycle_duration_minutes = self.light_duration_minutes + self.dark_duration_minutes
        position_minutes = elapsed_minutes % cycle_duration_minutes
        if position_minutes < self.light_duration_minutes:
            next_boundary_minutes = self.light_duration_minutes
        else:
            next_boundary_minutes = cycle_duration_minutes

        return max((next_boundary_minutes - position_minutes) * 60, 0.05)

    def _schedule_next_phase_boundary(self):
        self._cancel_phase_timer()
        seconds_until_boundary = self._seconds_until_next_phase_boundary()
        if seconds_until_boundary is None or self.state != self.READY:
            return

        self._phase_timer = Timer(seconds_until_boundary, self._run_and_schedule_next_phase)
        self._phase_timer.daemon = True
        self._phase_timer.start()

    def _cancel_phase_timer(self):
        if self._phase_timer is not None:
            self._phase_timer.cancel()
            self._phase_timer = None
```

When settings that affect the schedule change, recompute the current phase and reschedule the next boundary:

```python
    def set_dark_duration_minutes(self, minutes: float):
        self.dark_duration_minutes = float(minutes)
        self._run_and_schedule_next_phase()

    def set_light_duration_minutes(self, minutes: float):
        self.light_duration_minutes = float(minutes)
        self._run_and_schedule_next_phase()
```

And cancel any pending timer when the automation sleeps or disconnects:

```python
    def on_sleeping(self):
        super().on_sleeping()
        self._cancel_phase_timer()

    def on_sleeping_to_ready(self):
        super().on_sleeping_to_ready()
        self._run_and_schedule_next_phase()

    def on_disconnected(self):
        self._cancel_phase_timer()
        super().on_disconnected()
```

That's the end of the class! In total, our file looks like:

```python
# -*- coding: utf-8 -*-
from __future__ import annotations

from threading import Timer

from pioreactor.automations import events
from pioreactor.automations.led.base import LEDAutomationJobContrib
from pioreactor.types import LedChannel
from pioreactor.utils.timing import current_utc_datetime


class LightDarkCycle(LEDAutomationJobContrib):
    """
    Follows a light / dark cycle. Starts with the light phase.
    """

    automation_name = "light_dark_cycle"
    published_settings = {
        "light_intensity": {"datatype": "float", "settable": True, "unit": "%"},
        "light_duration_minutes": {"datatype": "float", "settable": True, "unit": "min"},
        "dark_duration_minutes": {"datatype": "float", "settable": True, "unit": "min"},
    }

    def __init__(
        self,
        light_intensity: float | str,
        light_duration_minutes: float | str,
        dark_duration_minutes: float | str,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self._cycle_started_at = current_utc_datetime()
        self._phase_timer: Timer | None = None
        self.light_active = False
        self.channels: tuple[LedChannel, ...] = ("D", "C")
        self.set_light_intensity(light_intensity)
        self.light_duration_minutes = float(light_duration_minutes)
        self.dark_duration_minutes = float(dark_duration_minutes)
        self._automation_strategy_start_callback = self._start_phase_schedule

    def execute(self):
        elapsed_minutes = (current_utc_datetime() - self._cycle_started_at).total_seconds() / 60
        return self.trigger_leds(elapsed_minutes)

    def trigger_leds(self, elapsed_minutes: float):
        if self.light_duration_minutes <= 0:
            light_should_be_on = False
        elif self.dark_duration_minutes <= 0:
            light_should_be_on = True
        else:
            cycle_duration_minutes = self.light_duration_minutes + self.dark_duration_minutes
            light_should_be_on = (elapsed_minutes % cycle_duration_minutes) < self.light_duration_minutes

        if light_should_be_on == self.light_active:
            return None

        self.light_active = light_should_be_on
        intensity = self.light_intensity if light_should_be_on else 0
        for channel in self.channels:
            self.set_led_intensity(channel, intensity)

        action = "on" if light_should_be_on else "off"
        return events.ChangedLedIntensity(f"{elapsed_minutes:.1f}min: turned {action} LEDs.")

    def set_light_intensity(self, intensity: float | str):
        self.light_intensity = float(intensity)
        if self.light_active:
            for channel in self.channels:
                self.set_led_intensity(channel, self.light_intensity)

    def set_dark_duration_minutes(self, minutes: float):
        self.dark_duration_minutes = float(minutes)
        self._run_and_schedule_next_phase()

    def set_light_duration_minutes(self, minutes: float):
        self.light_duration_minutes = float(minutes)
        self._run_and_schedule_next_phase()

    def _start_phase_schedule(self):
        self._run_and_schedule_next_phase()

    def _run_and_schedule_next_phase(self):
        self.run_once(wait_for_ready=False)
        self._schedule_next_phase_boundary()

    def _seconds_until_next_phase_boundary(self):
        if self.light_duration_minutes <= 0 or self.dark_duration_minutes <= 0:
            return None

        elapsed_minutes = (current_utc_datetime() - self._cycle_started_at).total_seconds() / 60
        cycle_duration_minutes = self.light_duration_minutes + self.dark_duration_minutes
        position_minutes = elapsed_minutes % cycle_duration_minutes
        if position_minutes < self.light_duration_minutes:
            next_boundary_minutes = self.light_duration_minutes
        else:
            next_boundary_minutes = cycle_duration_minutes

        return max((next_boundary_minutes - position_minutes) * 60, 0.05)

    def _schedule_next_phase_boundary(self):
        self._cancel_phase_timer()
        seconds_until_boundary = self._seconds_until_next_phase_boundary()
        if seconds_until_boundary is None or self.state != self.READY:
            return

        self._phase_timer = Timer(seconds_until_boundary, self._run_and_schedule_next_phase)
        self._phase_timer.daemon = True
        self._phase_timer.start()

    def _cancel_phase_timer(self):
        if self._phase_timer is not None:
            self._phase_timer.cancel()
            self._phase_timer = None

    def on_sleeping(self):
        super().on_sleeping()
        self._cancel_phase_timer()

    def on_sleeping_to_ready(self):
        super().on_sleeping_to_ready()
        self._run_and_schedule_next_phase()

    def on_disconnected(self):
        self._cancel_phase_timer()
        super().on_disconnected()
```

### Setting up the Pioreactor

Setting up your Pioreactor is easy: attach LEDs to LED channels `D` and `C`, and stick them in pockets `X2` and `X3`.

### Running the automation

Let's save this file to our Pioreactor plugin folder, by accessing the Pioreactor's command line, typing `nano ~/.pioreactor/plugins/light_dark_cycle.py`, and pasting in the code above.

You can test the automation from the Pioreactor's command line by executing:

```
pio run led_automation --automation-name light_dark_cycle --light-intensity 45 --light-duration-minutes 960 --dark-duration-minutes 480
```

### Adding the automation to the UI

To add your automation to the UI so it appears in the automation drop-down, follow the the steps [here](/developer-guide/plugins/jobs-and-automations-to-ui#adding-a-custom-automation-to-the-drop-down-of-automations).

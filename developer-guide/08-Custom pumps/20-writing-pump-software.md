---
title: Custom & additional pumps for dosing automations
slug: /writing-pump-software
---

The following provides solutions to:

- using a different pumping system for the Pioreactor instead of our peristaltic pumps
- adding additional pumps to the Pioreactor (i.e., more than media and alt-media). These additional pumps
may be provided via another system, for example an Arduino.

### Using external pumps with a custom automation

The first thing to do is to add a hook to your custom pump into Pioreactor's software. To do this, we attach new functions to a dosing automation that are invoked when `execute_io_action` is called. These functions will call your logic that runs the external pump. Specifically, if we wish to overwrite the `media` pump, we create a function called `add_media_to_bioreactor`, with signature

```
(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float)
```

To see this in an example:


```python {10-16}
from pioreactor.automations import DosingAutomationJob

class CustomPumper(DosingAutomationJob):

    automation_name = "custom_pumper"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def add_media_to_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
        # overrides the built in add_media_to_bioreactor
        # add your custom logic here. Example could be interfacing with i2c, serial, PWM, etc.
        ...
        pwm = PWM(...)
        self.logger.info(f"pumping {ml}")
        return ml

    def execute(self):
        self.execute_io_action(media_ml=1.0, waste_ml=1.0)
```

Whenever `execute_io_action` is called upon to add media, the custom function `add_media_to_bioreactor` is invoked. Similar logic applies to `alt_media`. Overriding `waste` uses a different name, as the next example shows:

```python {15-18}
class CustomPumper(DosingAutomationJob):

    automation_name = "custom_pumper"

    def add_media_to_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
        # overrides the built in add_media_to_bioreactor
        ...
        return ml

    def add_alt_media_to_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
        # overrides the built in remove_waste_from_bioreactor
        ...
        return ml

    def remove_waste_from_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
        # overrides the built in remove_waste_from_bioreactor
        ...
        return ml

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def execute(self):
        self.execute_io_action(media_ml=1.0, alt_media_ml=1.0, waste_ml=2.0)

```


### Adding additional pumps beyond media and alt-media


In general, we can use this same pattern to add even more pumps to the Pioreactor software, beyond media and alt-media. Let's say we have a third pump, salty-media, that we wish to also use along with media and alt-media. We define the function `add_salty_media_to_bioreactor` with the same signature above:

```python {5-8}
class ThreePumps(DosingAutomationJob):

    automation_name = "three_pumps"

    def add_salty_media_to_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
        # call an external pump, via i2c, serial, GPIO, etc.,
        # or pumping_functions.add_salt_media
        ...
        return ml

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
```

With this function defined, we can invoke `execute_io_action` with an additional kwarg, `salty_media_ml`:

```python
    def execute(self):
        results = self.execute_io_action(waste_ml=3.0, media_ml=1.0, alt_media_ml=1.0, salty_media_ml=1.0)
```

Notice the `salty_media_ml=1.0` kwarg: this represents how much salty-media volume to add (your pump is responsible to dosing the correct volume). (Note in the above example, media and alt-media are not overwritten, so would use the "traditional" peristaltic pump system provided.)

:::info
In general, `execute_io_action` will try to call a function called `add_<name>_to_bioreactor` if provided with a kwarg `<name>_ml`.
:::




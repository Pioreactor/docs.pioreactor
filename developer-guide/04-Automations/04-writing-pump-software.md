---
title: Adding custom pumps to dosing automations
slug: /writing-pump-software
---

You may want to use a different pumping system for the Pioreactor (or, if you are using the Pioreactor software with a different vessel, you may require different pumps). You can add code for different pumps like so:


```python
# -*- coding: utf-8 -*-
import time
from pioreactor.logging import create_logger
from pioreactor.automations import DosingAutomationJob
from pioreactor.whoami import get_unit_name, get_latest_experiment_name


def custom_add_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
    # add your custom logic here: could be interfacing with i2c, etc.
    # Signature should look like:
    # function(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
    ...
    pwm = PWM(...)
    cls.logger.info(f"pumping {ml}")
    time.sleep(ml * 2)
    return ml

def custom_alt_add_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
    ...
    return ml

def custom_remove_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:
    ...
    return ml



class CustomPumper(DosingAutomationJob):

    automation_name = "custom_pumper"

    published_settings = {
        "duration": {"datatype": "float", "settable": True, "unit": "min"},
    }

    # overwrite the following variables (all optional) with custom pumping logic
    add_media_to_bioreactor = custom_add_media_program
    add_alt_media_to_bioreactor = custom_add_alt_media_program
    remove_waste_from_bioreactor = custom_remove_media_program

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def execute(self):
        self.execute_io_action(media_ml=1.0, alt_media_ml=1.0, waste_ml=2.0)


if __name__ == "__main__":

    from pioreactor.background_jobs.dosing_control import DosingController

    dc = DosingController(
        "custom_pumper",
        duration=1, # execute every 1 minute
        unit="test_unit",
        experiment="test_experiment"
    )
    dc.block_until_disconnected()
```


You can also omit the `cls` argument:

```python
def custom_add_media_program(ml: float, unit: str, experiment: str, source_of_event: str) -> float:
    # add your custom logic here: could be interfacing with i2c, etc.
    ...
    create_logger("custom_add_media_program").info(f"pumping {ml}")
    time.sleep(ml * 2)
    return ml
```

but then you need to add `staticmethod`:

```python

class CustomPump(DosingAutomationJob):

    automation_name = "custom_pump"

    published_settings = {
        "duration": {"datatype": "float", "settable": True, "unit": "min"},
    }

    add_media_to_bioreactor = staticmethod(custom_add_media_program)
    ...
```

The function signature should look like:

```python
function(ml: float, unit: str, experiment: str, source_of_event: str) -> float:
```
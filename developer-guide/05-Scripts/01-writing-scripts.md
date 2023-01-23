---
title: Writing scripts
slug: /writing-scripts
---

Since the behaviour of the Pioreactor is controlled by Python objects, you can write Python scripts that use those objects. Here's a simple example of starting the stirring by creating the `Stirrer` object:

```python
from pioreactor.background_jobs.stirring import Stirrer, RpmFromFrequency
from pioreactor.whoami import get_unit_name
from pioreactor.whoami import get_latest_experiment_name

unit = get_unit_name()
experiment = get_latest_experiment_name()

st = Stirrer(
    target_rpm=300,
    unit=unit,
    experiment=experiment,
    rpm_calculator=RpmFromFrequency()
)

st.start_stirring()

st.block_until_disconnected() # pauses the execution, but stirring continues

```

Save this code to a local file on your Pioreactor's Raspberry Pi called `stirring_script.py`. Then, running `python stirring_scripy.py`, you should see that stirring on the Pioreactor starts. With the script running, you should also updates on the Pioreactor UI (ex: see [pioreactor.local/pioreactors](http://pioreactor.local/pioreactors) page). Typing `ctrl-c` will exit the script.

:::info
What is `get_unit_name` and `get_latest_experiment_name`? These are helper functions that get the current name of the Pioreactor, and the current experiment name, respectively. Using the current experiment name will ensure that your data shows up in the UI, and is correctly stored in the database.
:::


#### Automations

Using automations requires you to invoke them with a `Controller`. For example, below we start a chemostat with some specific parameters, and set the target temperature to 30C.

```python
from pioreactor.background_jobs.dosing_control import DosingController
from pioreactor.background_jobs.temperature_control import TemperatureController
from pioreactor.whoami import get_latest_experiment_name

unit = get_unit_name()
experiment = get_latest_experiment_name()

dc = DosingController(
    "chemostat", # automation name
    duration=1, # every minute,
    volume=1, # dose 1mL
    unit=unit,
    experiment=experiment,
)

tc = TemperatureController(
    "thermostat",
    target_temperature=30,
    unit=unit,
    experiment=experiment
)

dc.block_until_disconnected()
```


### Starting a long-running script

On the command line, you can run your script with

```
python your_script.py
```

If you want to run the script in the background (so you can close terminal and the job continues in the background), use

```

python your_script.py >/dev/null 2>&1 & disown

```

You can also use the [Pioreactor's plugin architecture](https://docs.pioreactor.com/developer-guide/intro-plugins#scripts) to control the start and stop of the script.

### Useful utility objects

 - [RepeatedTimer](https://github.com/Pioreactor/pioreactor/blob/60875ebe5a35d7ed5c930d46ed7c755eadcb4b74/pioreactor/utils/timing.py#L40): this class allows you to scheduale a function to run every N seconds in a non-blocking manner.

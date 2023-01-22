---
title: Introduction to plugins
slug: /intro-plugins
---

Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface.

There are two ways to distribute a plugin:

## 1. Adding Python files to `plugins` folder

On each Pioreactor's Raspberry Pi is a folder at `/home/pioreactor/.pioreactor/plugins`. When the Pioreactor software starts, any Python files in this folder are read and loaded into memory. If you were to include an automation in here, or a background job (with the `click` CLI component), they would be available globally.

:::info
Why would you want to distribute code this way? It's a great way to test or develop your code instead of committing to other distribution methods: short iterations times, tight feedback loop, and code runs in the production environment. Two downsides are that it's harder to distribute your code to the rest of the community, and that it doesn't have the same deployment pipeline (adding configs, etc.)
:::

### Custom background jobs

Here's an example: place the following code into the file `/home/pioreactor/.pioreactor/plugins/demo_job.py`

```python
# -*- coding: utf-8 -*-
import click
from pioreactor.whoami import get_unit_name, get_latest_experiment_name
from pioreactor.background_jobs.base import BackgroundJob

__plugin_summary__ = "Just a demo job"
__plugin_version__ = "0.0.1"
__plugin_name__ = "Demo job"
__plugin_author__ = "Cam Davidson-Pilon"
__plugin_homepage__ = "https://docs.pioreactor.com"


class DemoJob(BackgroundJob):

    job_name="demo_job"

    def __init__(self, unit, experiment, **kwargs):
        super().__init__(unit=unit, experiment=experiment)

    def on_ready(self):
        self.logger.debug("Hello, world!")

    def on_disconnect(self):
        self.logger.debug("Goodbye, world!")


@click.command(name="demo_job", help=__plugin_summary__)
def click_demo_job():
    job = DemoJob(
        unit=get_unit_name(),
        experiment=get_latest_experiment_name(),
    )
    job.block_until_disconnected()
```

You should be able to execute the following from the command line now: `pio run demo_job`.

Finally, in your [web interface under plugins](http://pioreactor.local/plugins), you should see "Demo Job" installed.

:::info
[A full introduction to writing jobs](/developer-guide/writing-background-jobs) is available.
:::

:::info
How do you add this to your /pioreactors page in the UI? See [here](/developer-guide/adding-plugins-to-ui).
:::

### Scripts

If you are interested in creating a Python script to control multiple jobs, like in a [previous Python scripting example](/user-guide/intro-python-scripting), you can create a file called `example_script.py` in the `/home/pioreactor/.pioreactor/plugins/` folder:

```python
import time
import click
from pioreactor.background_jobs.stirring import start_stirring
from pioreactor.background_jobs.od_reading import start_od_reading
from pioreactor.actions.led_intensity import led_intensity
from pioreactor.background_jobs.temperature_control import start_temperature_control


__plugin_summary__ = "My example script to control stirring, OD and temperature"
__plugin_version__ = "0.0.1"
__plugin_name__ = "Example Script"
__plugin_author__ = "Cam Davidson-Pilon"
__plugin_homepage__ = "https://docs.pioreactor.com"


@click.command(name="my_script", help=__plugin_summary__) # the name field is used in the invocation `pio run X`
def click_my_script():

    led_intensity({"B": 50})

    stirrer = start_stirring(target_rpm=400)
    od_reader = start_od_reading("90", "REF")
    temp_controller = start_temperature_control("thermostat", target_temperature=32)

    time.sleep(10)
    stirrer.set_target_rpm(300)

    stirrer.block_until_disconnected()

```

You should be able to execute the following from the command line now: `pio run my_script`. (The `my_script` is from the `@click.command` line, you can change it there).

:::important
The `click` function's name should be prepended by `click_`. Ex: `def click_my_script` is okay, but `def my_script` is not.
:::

:::info
How do you add this to your /pioreactors page in the UI? Create a custom .yaml in `/var/www/pioreactorui/contrib/jobs` with contents like:
```
---
display_name: Example Script
display: true
job_name: my_script
source: Example Script
description: Run my custom script.
published_settings: []

```
:::

### Custom automations

Here's an example of adding a custom automation: place the following code into the file `/home/pioreactor/.pioreactor/plugins/demo_automation.py`

```python
# -*- coding: utf-8 -*-
from pioreactor.automations.dosing.base import DosingAutomationContrib

__plugin_summary__ = "A demo dosing automation"
__plugin_version__ = "0.0.1"
__plugin_name__ = "Demo Dosing Automation"
__plugin_author__ = "Cam Davidson-Pilon"
__plugin_homepage__ = "https://docs.pioreactor.com"

class DemoAutomation(DosingAutomationContrib):

    automation_name = "demo"

    def __init__(self, volume, **kwargs):
        super().__init__(**kwargs)
        self.volume = volume

    def execute(self):
        self.logger("Here I would execute...")

```

You should be able to execute the following from the command line now:
```
pio run dosing_control --automation-name demo --volume 10
```


:::info
[A full introduction to writing automations](/developer-guide/writing-automations-1) is available.
:::

:::info
How do you add this to your /pioreactors page in the UI? See [here](/developer-guide/adding-plugins-to-ui).
:::

## 2. `pip`-installable plugins

An alternative to placing Python files in the `plugins` folder is to bundle your code into a Python package that can be installed over the internet. This is the best way to ship your code to many users, and is pretty easy! We have a full guide on how to [create a Pioreactor Python package](/developer-guide/plugin-as-python-package).

# Introduction to plugins

Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface.

There are two ways to distribute a plugin:

### Adding Python files to `plugins` folder

On each Pioreactor's Raspberry Pi is a folder at `/home/pi/.pioreactor/plugins`. When the Pioreactor software starts, any Python files in this folder are read and loaded into memory. If you were to include an automation in here, or a background job (with the `click` CLI component), they would be available globally.

:::info
Why would you want to distribute code this way? It's a great way to test or develop your code instead of committing to other distribution methods: short iterations times, tight feedback loop, and code runs in the production environment. Two downsides are that it's harder to distribute your code to the rest of the community, and that it doesn't have the same deployment pipeline (adding configs, etc.)
:::

#### Custom background jobs

Here's an example: place the following code into the file `/home/pi/.pioreactor/plugins/demo_job.py`

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

    def __init__(self, unit, experiment, **kwargs):
        super().__init__(job_name="demo_job", unit=unit, experiment=experiment)

    def on_ready(self):
        self.logger.debug("Hello, world!")

    def on_disconnect(self):
        self.logger.debug("Goodbye, world!")


@click.command(name="demo_job")
def click_demo_job():
    job = DemoJob(
        unit=get_unit_name(),
        experiment=get_latest_experiment_name(),
    )
    job.block_until_disconnected()
```

You should be able to execute the following from the command line now: `pio run demo_job`.

Further more, in your [web interface under plugins](http://pioreactor.local/plugins), you should see "Demo Job" installed.

:::info
[A full introduction to writing jobs](/developer_guide/Background%20Jobs/Writing%20a%20custom%20background%20job) is available.
:::


#### Custom automations

Here's an example of adding a custom automation: place the following code into the file `/home/pi/.pioreactor/plugins/demo_automation.py`

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

You should be able to execute the following from the command line now: `pio run dosing_control --automation-name demo --volume 10`.


:::info
[A full introduction to writing automations](/developer_guide/Automations/Writing%20new%20automations) is available.
:::


### Distributing the code as a Python package


Coming soon!
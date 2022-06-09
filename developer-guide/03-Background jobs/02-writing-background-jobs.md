---
title: Writing a custom background job
slug: /writing-background-jobs
---

## Introductory example

For this introductory example, we'll create a background job that controls an LED in channel `A` on the Pioreactor HAT. When the job ends (either by us exiting, or via a MQTT signal), the LED will turn off.

We start with some imports, and a class definition:

```python
from pioreactor.background_jobs.base import BackgroundJob
from pioreactor.actions.led_intensity import led_intensity

class IntroJob(BackgroundJob):

```

We've given the class the simple name of `IntroJob`. Our background job must inherit from `BackgroundJob`. Next we'll define some initial attributes:



```python {6-10}
from pioreactor.background_jobs.base import BackgroundJob
from pioreactor.actions.led_intensity import led_intensity

class IntroJob(BackgroundJob):

    published_settings = {
        'intensity': {'datatype': float, "unit": "%", "settable": True}
    }
    intensity = 0
    LED_channel = "A"
```

We declare that the `intensity` attribute is to be published and controllable over MQTT. We'll see this in action later. We also set `intensity` to be 0 initially, and use channel `A` to control.

Next we add the `__init__`, which should always accept at least `unit` and `experiment` (as strings). `unit` refers to the name of the Pioreactor (the hostname), and `experiment` is the experiment the job is associated to.

```python {12,13}
from pioreactor.background_jobs.base import BackgroundJob
from pioreactor.actions.led_intensity import led_intensity

class IntroJob(BackgroundJob):

    published_settings = {
        'intensity': {'datatype': float, "unit": "%", "settable": True}
    }
    intensity = 0
    LED_channel = "A"

    def __init__(self, unit, experiment):
        super().__init__(job_name="intro_job", unit=unit, experiment=experiment)

```

We call `super` to initialize the super class, `BackgroundJob`, with the unit, experiment, and `job_name`: the `job_name` is usually the snake-case of the class name.

Next, we define a function, `set_intensity`m that will be called whenever `intensity` is changed remotely (we'll do this later). The `set_intensity` function updates `intensity` _and_ will change the onboard LED power for channel `A`. Remember, whenever the attribute `intensity` changes, it's published to MQTT.


```python {15,16,17}
from pioreactor.background_jobs.base import BackgroundJob
from pioreactor.actions.led_intensity import led_intensity

class IntroJob(BackgroundJob):

    published_settings = {
        'intensity': {'datatype': float, "unit": "%", "settable": True}
    }
    intensity = 0
    LED_channel = "A"

    def __init__(self, unit, experiment):
        super().__init__(job_name="intro_job", unit=unit, experiment=experiment)

    def set_intensity(self, intensity):
        self.intensity = intensity
        led_intensity(channels=self.LED_channel, intensities=self.intensity)
```

Next, we create the "on exit" behaviour (turn off LED) by overwriting the `on_disconnected` function.


```python {19-20}
from pioreactor.background_jobs.base import BackgroundJob
from pioreactor.actions.led_intensity import led_intensity

class IntroJob(BackgroundJob):

    published_settings = {
        'intensity': {'datatype': float, "unit": "%", "settable": True}
    }
    intensity = 0
    LED_channel = "A"

    def __init__(self, unit, experiment):
        super().__init__(job_name="intro_job", unit=unit, experiment=experiment)

    def set_intensity(self, intensity):
        self.intensity = intensity
        led_intensity(channels=self.LED_channel, intensities=self.intensity)

    def on_disconnected(self):
        self.set_intensity(0)
```

Finally, we add a small script at the bottom to run our new job when the Python file is invoked:

```python {22-30}
from pioreactor.background_jobs.base import BackgroundJob
from pioreactor.actions.led_intensity import led_intensity

class IntroJob(BackgroundJob):

    published_settings = {
        'intensity': {'datatype': float, "unit": "%", "settable": True}
    }
    intensity = 0
    LED_channel = "A"

    def __init__(self, unit, experiment):
        super().__init__(job_name="intro_job", unit=unit, experiment=experiment)

    def set_intensity(self, intensity):
        self.intensity = intensity
        led_intensity(channels=self.LED_channel, intensities=self.intensity)

    def on_disconnected(self):
        self.set_intensity(0)

if __name__ == "__main__":
    from pioreactor.whoami import get_unit_name
    from pioreactor.whoami import get_latest_experiment_name

    job = IntroJob(unit=get_unit_name(), experiment=get_latest_experiment_name())


    job.block_until_disconnected()
```

If you save this code in a file called `intro_job.py`, we can run it from the command line: `python3 intro_job.py`.

In another terminal window, try the following:

```
pio mqtt -t "pioreactor/+/+/intro_job/#"
```

You should see some metadata about this job (`$state` is `ready`, some info about `intensity`), but also you should see the current value of `intensity`, namely 0. You can cancel the job with `ctrl-c` in the original terminal window.

Adding an additional line in `intro_job.py`:

```python {6}
if __name__ == "__main__":
    from pioreactor.whoami import get_unit_name
    from pioreactor.whoami import get_latest_experiment_name

    job = IntroJob(unit=get_unit_name(), experiment=get_latest_experiment_name())
    job.set_intensity(10)

    job.block_until_disconnected()
```

And rerunning the job, you should see MQTT have updated `intensity` data.


## More advanced example

We'll explain how a more advanced background job is written using the example application of a job that controls an external motor (the load). This motor may control a larger stirrer, or shaker, or air-pump, but is regulated by the amount of voltage applied - that is, the more voltage applied, the more output from the motor.

The Pioreactor HAT has four available pulse-width modulation (PWM) outputs, with programmable frequency and duty cycle (DC). For this example, we'll set a frequency that works for the motor. We also wish to increase the DC in proportion to the normalized optical density (this may represent needing to add more air, or shaking, as the culture's oxygen requirements increase). Let's start with the some imports and the class' `__init__`:

```python

from pioreactor.background_jobs.base import BackgroundJob


class MotorDriver(BackgroundJob):

    def __init__(self, hz, initial_duty_cycle, unit, experiment, **kwargs):
        super().__init__(job_name="motor_driver", unit=unit, experiment=experiment)
        self.hz = hz
        self._initial_duty_cycle = initial_duty_cycle
        self.duty_cycle = initial_duty_cycle
        ...

```

We see that the `__init__` requires the two parameters for PWM: `hz` and an `inital_duty_cycle`. One rarely changes the hertz of PWM, so its fixed - but we do often change the duty cycle, so we create a variable `self.duty_cycle` and assign it the `initial_duty_cycle`. We also need to supply the unit name (the hostname), and the experiment name. We'll populate these at run time later. Finally, we need a `job_name` to pass to the super class, `BackgroundJob`. This should be unique from other jobs that may run. Often we use the "snake_case" of the class name as the job name. We give it the job name `motor_driver`.


We next initialize the PWM code (this is still in the `__init__`) that controls the PWM outputs on the HAT, and add more imports:

```python
from pioreactor.hardware_mappings import PWM_TO_PIN
from pioreactor.utils.pwm import PWM
from pioreactor.config import config

...


    def __init__(...)
        ...

        pwm_pin = PWM_TO_PIN[config.getint("PWM_reverse", "motor_driver")]
        self.pwm = PWM(pwm_pin, self.hz)
        self.pwm.lock()

        ...

```

The `PWM_TO_PIN` is lookup that maps settings in your config.ini to the Raspberry Pi's GPIO pins (which we use for the output PWM). Which means we also need update the `[PWM]` section in your config.ini:


```
[PWM]
1=motor_driver
2=media
3=alt_media
4=waste
5=heater
```

In the above code, we next initialize the `PWM` class. This is an abstraction to make working with the PWM hardware easier. For example, the next line, `self.pwm.lock()`, will put a lock on that Raspberry Pi GPIO pin, making it difficult for other processes to use it by mistake. We haven't started the PWM yet, we'll do that later.


Next, we want to include the behavior to update the duty cycle when we get new normalized OD readings. This is typically done with a callback when a new MQTT message is received. See code below:

```python
    def __init__(...)
        ...
        ...

        self.start_passive_listeners()

    ...

    def start_passive_listeners(self):
        self.logger.debug("Listening for od_filtered topics")
        self.subscribe_and_callback(
            self.update_duty_cycle_by_normalized_od,
            f"pioreactor/{self.unit}/{self.experiment}/growth_rate_calculating/od_filtered",
        )
```

Note the `self.logger.debug(...)` line. Each background job has a Python logger that will log to four places: MQTT, the SQLite3 database, the terminal, and the log file on disk. See Python's [logging module](https://docs.python.org/3/library/logging.html) for more.

The callback, `update_duty_cycle_by_normalized_od`, needs to be written:

```python
import json

...

    def update_duty_cycle_by_normalized_od(self, message):
        payload = json.loads(message.payload)

        if self.state == self.READY:
            self.set_duty_cycle(payload["od_filtered"] * self._initial_duty_cycle)

    def set_duty_cycle(self, new_duty_cycle):
        self.duty_cycle = clamp(0, float(new_duty_cycle), 100)
        self.pwm.change_duty_cycle(self.duty_cycle)
        self.logger.debug(f"new dc: {self.duty_cycle}")

```

In the callback, `update_duty_cycle_by_normalized_od`, we accept the message object. The message has two important properties: `topic` and `payload`. We only care about the payload, which is a string of json. We de-serialize the json to a dict.

We only want to update the duty cycle if the job is in state `READY` (read about states [here](/developer-guide/intro-background-jobs#state-of-a-job)). If this is true, we call `set_duty_cycle` to update our duty cycle. This method handles the logic of clamping the value to be between 0 and 100, and we've stuck a `debug` in there so we can watch it change.

What is the relationship between normalized OD and duty cycle. We do something naive, and just multiple the initial duty cycle by the normalized OD. So if the `initial_duty_cycle` is 10%, and the culture has 3.5x, then our new duty cycle is 35%. It _is_ very naive.

Finally, we need to think about changing states. What should our job do when the user pauses the job? How do we safely disconnect from the PWM? We use the state callback methods to handle these changes:

```python
    def on_init_to_ready(self):
        self.pwm.start(self.duty_cycle)

    def on_ready_to_sleeping(self):
        self._previous_duty_cycle = self.duty_cycle
        self.set_duty_cycle(0)

    def on_sleeping_to_ready(self):
        self.set_duty_cycle(self._previous_duty_cycle)

    def on_disconnected(self):
        self.pwm.cleanup()
```
After the job moves from `init` to `ready` (implicitly done after the `__init__` finishes), the function `on_init_to_ready` is called. This starts the PWM, which starts the motor.

When we sleep (pause), we record the last `duty_cycle` value, and use that to populate the `duty_cycle` when we re-start the job.

Let's recap what we have so far, and save this to a file called `motor_driver.py` (ideally we save it in `/home/pioreactor/.pioreactor/plugins/`:

```python
# -*- coding: utf-8 -*-
import json

from pioreactor.config import config
from pioreactor.background_jobs.base import BackgroundJob
from pioreactor.hardware_mappings import PWM_TO_PIN
from pioreactor.utils.pwm import PWM
from pioreactor.utils import clamp


class MotorDriver(BackgroundJob):

    published_settings = {
        "duty_cycle": {"datatype": "float", "settable": False, "unit": "%"},
    }
    _previous_duty_cycle: None

    def __init__(self, hz, initial_duty_cycle, unit, experiment, **kwargs):
        super().__init__(job_name="motor_driver", unit=unit, experiment=experiment)
        self.hz = hz
        self._initial_duty_cycle = initial_duty_cycle
        self.duty_cycle = initial_duty_cycle

        self.pwm_pin = PWM_TO_PIN[config.getint("PWM_reverse", "motor_driver")]

        self.pwm = PWM(self.pwm_pin, self.hz)
        self.pwm.lock()

        self.start_passive_listeners()

    def update_duty_cycle_by_normalized_od(self, message):
        payload = json.loads(message.payload)

        if self.state == self.READY:
            self.set_duty_cycle(payload["od_filtered"] * self._initial_duty_cycle)

    def set_duty_cycle(self, new_duty_cycle):
        self.duty_cycle = clamp(0, float(new_duty_cycle), 100)
        self.pwm.change_duty_cycle(self.duty_cycle)
        self.logger.debug(f"new dc: {self.duty_cycle}")

    def start_passive_listeners(self):
        self.logger.debug("Listening for od_filtered topics")
        self.subscribe_and_callback(
            self.update_duty_cycle_by_normalized_od,
            f"pioreactor/{self.unit}/{self.experiment}/growth_rate_calculating/od_filtered",
        )

    def on_init_to_ready(self):
        self.pwm.start(self.duty_cycle)

    def on_ready_to_sleeping(self):
        self._previous_duty_cycle = self.duty_cycle
        self.set_duty_cycle(0)

    def on_sleeping_to_ready(self):
        self.set_duty_cycle(self._previous_duty_cycle)

    def on_disconnected(self):
        self.logger.debug("disconnecting... will clean up PWM")
        self.pwm.cleanup()
```


This class works as is, but we also want to develop a command line interface for it so we can run it like `pio run motor_driver`.

At the bottom of the file, we add:

```python
import click

@click.command(name="motor_driver")
@click.option(
    "--initial-dc",
    default=config.getfloat("motor_driver", "initial_duty_cycle"),
    show_default=True,
    type=click.FloatRange(0, 100, clamp=True),
)
@click.option(
    "--hz",
    default=config.getfloat("motor_driver", "hz"),
    show_default=True,
    type=click.FloatRange(1, 10_000, clamp=True),
)
def click_motor_driver(initial_dc, hz):
    """
    Start the external motor
    """
    from pioreactor.whoami import get_unit_name, get_latest_experiment_name

    job = MotorDriver(
        hz=hz,
        initial_duty_cycle=initial_dc,
        unit=get_unit_name(),
        experiment=get_latest_experiment_name(),
    )
    job.block_until_disconnected()
```

Note the helper functions `get_unit_name` and `get_latest_experiment_name` to get the metadata for the class. The method `block_until_disconnected` will halt the program at that line (and only continue when a keyboard interrupt is detected).

If you save it in the `plugins` folder, you can now execute: `pio run motor_driver --initial-dc 10` and it should just work! You can exit with ctrl-c, and note that the `on_disconnect` is called when you do this.

#### Adding `published_settings`

Suppose we wish to monitor, or log, or just otherwise publish the `duty_cycle` from the `MotorDriver` class. We can "register" the attribute `duty_cycle` in the `published_settings`:

```python {4,5,6}
class MotorDriver(BackgroundJob):
    ...

    published_settings = {
        "duty_cycle": {"datatype": "float", "settable": False, "unit": "%"},
    }

    def __init__(...)

```

If you open up the MQTT stream using `pio mqtt`, you should see `duty_cycle` appear under the topic `pioreactor/<unit>/<experiment>/motor_driver/duty_cycle`.
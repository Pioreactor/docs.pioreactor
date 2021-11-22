# Writing a custom background job

We'll explain how a background job is written using the example application of a job that control an external motor (the load). This motor may control a larger stirrer, or shaker, or air-pump, but is regulated by the amount of voltage applied - that is, the more voltage applied, the more output from the motor. 

The Pioreactor HAT has four available pulse-width modulation (PWM) outputs, with programmable frequency and duty cycle (DC). We'll set a frequency that works for the motor, but also increase the DC in proportion to the normalized optical density (this may represent needing to add more air, or shaking, as the culture's oxygen requirements increase). Let's start with the some imports and the class' `__init__`:

```python

from pioreactor.config import config
from pioreactor.background_jobs.base import BackgroundJob


class MotorDriver(BackgroundJob):

    def __init__(self, hz, initial_duty_cycle, unit, experiment, **kwargs):
        super().__init__(job_name="motor_driver", unit=unit, experiment=experiment)
        self.hz = hz
        self._initial_duty_cycle = initial_duty_cycle
        self.duty_cycle = initial_duty_cycle
        ...

```

We see that the `__init__` requires the two parameters for PWM: `hz` and an `inital_duty_cycle`. One rarely changes the hertz of PWM, so its fixed - but we do often change the duty cycle, so we create a variable `self.duty_cycle` and assign it the `initial_duty_cycle`. We also need to supply the unit name (the hostname), and the experiment name. We'll populate these at run time later. Finally, we need a `job_name` to pass to the super class, `BackgroundJob`. This should be unique from other jobs that may run. Often we use the "snake_case" of the class name as the job name. We give it the jon name `motor_driver`.


We next initialize the PWM code (this is still in the `__init__`) that controls the PWM outputs on the HAT, and add more imports:

```python
from pioreactor.hardware_mappings import PWM_TO_PIN
from pioreactor.utils.pwm import PWM
...


    def __init__(...)
        ...

        pwm_pin = PWM_TO_PIN[config.getint("PWM_reverse", "motor_driver")]
        self.pwm = PWM(pwm_pin, self.hz)
        self.pwm.lock()
        self.pwm.start(self.duty_cycle)

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

In the above code, we next initialize the `PWM` class. This is an abstraction to make working with the PWM hardware easier. For example, the next line, `self.pwm.lock()`, will put a lock on that Raspberry Pi GPIO pin, making it difficult for other processes to use it inadvertently. The final line above starts the PWM output, and hence starts the motor, at `duty_cycle` level.


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

We only want to update the duty cycle if the job is in state `READY` (read about states [here](/developer_guide/Background%20Jobs/How%20background%20jobs%20work#state-of-a-job)). If this is true, we call `set_duty_cycle` to update our duty cycle. This method handles the logic of clamping the value to be between 0 and 100, and we've stuck a `debug` in there so we can watch it change.

What is the relationship between normalized OD and duty cycle. We do something naive, and just multiple the initial duty cycle by the normalized OD. So if the `initial_duty_cycle` is 10%, and the culture has 3.5x, then our new duty cycle is 35%. It _is_ very naive.

Finally, we need to think about changing states. What should our job do when the user pauses the job? How do we safely disconnect from the PWM? We use the state callback methods to handle these changes:

```
    def on_ready_to_sleeping(self):
        self._previous_duty_cycle = self.duty_cycle
        self.set_duty_cycle(0)

    def on_sleeping_to_ready(self):
        self.set_duty_cycle(self._previous_duty_cycle)

    def on_disconnect(self):
        self.pwm.cleanup()
```

When we sleep (pause), we record the last `duty_cycle` value, and use that to populate the `duty_cycle` when we re-start the job.

Let's recap what we have so far, and save this to a file called `motor_driver.py` (ideally we save it in `/home/pi/.pioreactor/plugins/`:

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
        self.pwm.start(self.duty_cycle)

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

    def on_ready_to_sleeping(self):
        self._previous_duty_cycle = self.duty_cycle
        self.set_duty_cycle(0)

    def on_sleeping_to_ready(self):
        self.set_duty_cycle(self._previous_duty_cycle)

    def on_disconnect(self):
        self.logger.debug("disconnecting... will clean up PWM")
        self.pwm.cleanup()
```


This class works as is, but we also want to develop a command line interface for it so we can run it like `pio run motor_driver` (this command line interface is needed even if we don't want to use the command line directly).

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
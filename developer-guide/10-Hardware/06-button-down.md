---
title: Adding behaviour to the HAT's button
slug: /hat-button
---


You can add a hook to what happens when the button is pressed on the Pioreactor HAT. For example, you could do things like:

 - Flash an LED on when the button is pressed 
 - Cycle media: turn on both media and waste pumps for as long as the button is compressed for
 - Pause a job, example: pause OD reading so you can take the vial out of the sleeve to inspect
 - Spike the culture via dosing

To do this, you need to write a small plugin that can be placed in the Pioreactor's `/home/pioreactor/.pioreactor/plugins` folder. Here's an example on how to turn on LED channel B for as long as the button is compressed:

```python
"""
The background job Monitor is the job that listens to button state changes. There are hooks in that class
to add callbacks for button down and button up.
"""
from pioreactor.background_jobs.monitor import  Monitor
from pioreactor.actions.led_intensity import led_intensity

def on(*args):
    led_intensity({'B': 20}, verbose=False, source_of_event="button")

def off(*args):
    led_intensity({'B': 0}, verbose=False, source_of_event="button")

Monitor.add_pre_button_callback(on)
Monitor.add_post_button_callback(off)
```

An example to pause a job over MQTT:

```python
from pioreactor.background_jobs.monitor import  Monitor
from pioreactor.pubsub import publish
from pioreactor.whoami import get_assigned_experiment_name, get_unit_name

target="od_reading"

def pause(*args):
    unit = get_unit_name()
    experiment = get_assigned_experiment_name(unit)

    publish(f"pioreactor/{unit}/{experiment}/{target}/$state/set", "sleeping")

def unpause(*args):
    publish(f"pioreactor/{unit}/{experiment}/{target}/$state/set", "ready")

Monitor.add_pre_button_callback(pause)
Monitor.add_post_button_callback(unpause)
```

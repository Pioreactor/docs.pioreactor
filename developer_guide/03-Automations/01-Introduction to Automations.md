# Automations architecture 

Automations are specialized [background jobs](/developer_guide/Background%20Jobs/How%20background%20jobs%20work) with a simplified interface for controlling some part of the Pioreactor. Whereas there is really only one way to control stirring in the Pioreactor (on, off, and constant), there are many ways to modify dosing to get different microbiological outcomes. Similarly with LEDs: there are many ways researchers want to control LEDs to change microorganisms. Same with temperature. For that reason, we've built an automation interface to make developing automations easier. You'll see an example of this simplified automation in the next section.

Because we often want to change automations during an experiment, there is a `Controller` class that initializes and tears-down automations during an experiment. For each automation type, dosing, temperature, and LED, there is a corresponding controller: `DosingController`, 'TemperatureController', and `LEDController`. Running these looks like:


```
from pioreactor.background_jobs.dosing_control import DosingController


dc = DosingController(
    dosing_automation="turbidostat", # name of the automation, see next section
    duration=30,                     # how often `execute` runs, in minutes
    target_od=2.0,                   # kwarg that turbidostat needs
    volume=0.5,                      # kwarg that turbidostat needs
    )

dc.block_until_disconnected()
```


Since controllers publish their automations,

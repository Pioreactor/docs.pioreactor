# Automations architecture 

### Automations

Automations are specialized [background jobs](/developer_guide/Background%20Jobs/How%20background%20jobs%20work) with a simplified interface for controlling some part of the Pioreactor. Whereas there is really only one way to control stirring in the Pioreactor (on, off, and constant), there are many ways to modify dosing to get different microbiological outcomes. Similarly with LEDs: there are many ways researchers want to control LEDs to change microorganisms. Same with temperature. For that reason, we've built an automation interface to make developing automations easier. You'll see an example of this simplified design when we build one in the next page.


### Controllers

Because we often want to change automations during an experiment, there is a `Controller` object (a background job) that initializes and tears-down automations during an experiment. For each automation type, dosing, temperature, and LED, there is a corresponding controller: `DosingController`, `TemperatureController`, and `LEDController`. Running these looks like:


```python
from pioreactor.background_jobs.dosing_control import DosingController

dc = DosingController(
    dosing_automation="turbidostat", # name of the automation, see next section
    duration=30,                     # how often `execute` runs, in minutes
    target_od=2.0,                   # kwarg that the turbidostat automation needs
    volume=0.5,                      # kwarg that the turbidostat automation needs
    )
```

The controller will start the automation (and publish information about to MQTT via `published_settings`), and if requested, will stop the automation and start a new one. Using the controllers is the preferred way to start and stop automations, rather than invoking the automations directly.

Since the automation in the controller is part of `published_settings`, you can change the automation over MQTT by publishing to a MQTT topic. For example, if you wish to change the dosing automation from `turbidostat` to `chemostat`, publish the following JSON payload to `pioreactor/<unit>/<experiment>/dosing_control/automation/set`

```
{
   "automation_name":"chemostat",
   "volume: 1,
   "duration": 20
}
```

The payload is a JSON of the parameters needed for the automation, and the `automation_name` field population with the name of the automation.
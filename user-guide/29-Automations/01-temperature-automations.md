---
title: Temperature automations
slug: /temperature-automations
---

The heater in the Pioreactor wetware can be programmed to control the temperature of the vial in automated ways. Pioreactor is pre-programmed with the following temperature automations. In the below automations, values highlighted `like so` are configurable.


## Available temperature automations


### Thermostat

The Thermostat automation will try to maintain a `target temperature` using a feedback loop. You can select a `target temperature` (between ambient temperature and 50℃), and the automation will vary the onboard heater to maintain that temperature in the vial. At room temperature, the Pioreactor will be able to achieve up to about 43℃.

### Only record temperature

This automation is the simplest automation: do not apply any external heating. Reading and logging of temperature will still occur.


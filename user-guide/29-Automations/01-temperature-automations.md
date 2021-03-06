---
title: Temperature automations
slug: /temperature-automations
---

The heater in the Pioreactor wetware can be programmed to control the temperature of the vial in automated ways. Pioreactor is pre-programmed with the following temperature automations. In the below automations, values highlighted `like so` are configurable.

### Stable

The Stable automation will try to maintain a `target temperature` using a feedback loop. You can select a `target temperature` (between ambient temperature and 50℃), and the automation will vary the onboard heater to maintain that temperature in the vial. At room temperature, the Pioreactor will be able to achieve up to about 43℃.

### Silent

The Silent automation is the simplest automation: do not control the temperature in any way. Reading and logging of temperature will still occur.


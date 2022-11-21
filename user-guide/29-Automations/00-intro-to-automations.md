---
title: Introduction to automations
slug: /intro-to-automations
---

So far, we have worked with basic activities that you can directly set as a one time thing, typically at the beginning of your experiment (starting stirring, OD readings, etc.). For more advanced experiments, we introduce automations.

Automations are preset functions that are _automated_, or performed by the Pioreactor without the need of your intervention. This is great for when you want to change the environment of your experiment in some way, whether periodically or at a given time  — and you don't want to change your settings each time!

Some examples:  
*	Every 15 minutes, you want to introduce new media and remove old media using [pumps](/user-guide/dosing-automations#chemostat).
*	When working with phototrophs (such as algae), you want to create “day/night” cycles by [turning on/off your LEDs](/user-guide/led-automations). 

Setting automations can be done so that the Pioreactor performs these tasks automatically. These automations can be found under _Activities_, when you _Manage_ your Pioreactor. 

![](/img/user-guide/automations.png)


### `Skip first run`?

When starting an automation, like chemostat, a ambiguity is whether to start dosing (or checking whether to dose) _immediately_, or delay N minutes to start. Checking `Skip first run` will choose the latter: delay N minutes.
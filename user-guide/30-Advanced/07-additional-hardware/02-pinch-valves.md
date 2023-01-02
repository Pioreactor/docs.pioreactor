---
title: Pinch valves
slug: /pinch-valves
---


Pinch valves are useful for controlling gas into the Pioreactor by "pinching" a gas line closed (or keeping it open). This could used be for injecting gas periodically into the headspace, or acting as a bubbler by putting the injection tube directly into the culture. Below is a diagram of using a pinch valve to periodically provide CO₂ into the head space of the Pioreactor's vial:

<img src="/img/user-guide/pinch_valves_in_pioreactor.png" width="335" style={{margin: "auto", display:"block"}}/>

The pinch valve opens and closes, controlled by the Pioreactor, to allow gas from the CO₂ source into the headspace. The Pioreactor controls the pinch valve via the PWM channels and software (plugins).

### Pinch valve options

Some options for pinch valves that will be useful for your application:

1. **Normally open / normally closed**. When no power is provided to the pinch valve, a **normally closed** pinch valve will force the tube to be closed. Conversely, a **normally open** pinch valve will keep the tube open when no power is provided. We suggest a normally closed most of the time, since if the Pioreactor loses power, or an experiment ends and power is turned off, we would like the tube to be closed to avoid losing gas.

2. **PWM**: safest option is "continously" (or "continous"). This means that we can power the pinch valve continuously without it overheating.

3. **Voltage**: The Pioreactor normally operates at 5V, and there are pinch valves that work at this voltage. More common though are pinch valves that work at 12V. To use a 12V pinch valve, you'll need to supply 12V to the [auxiliary power input on your Pioreactor](/user-guide/external-power).

4. **Tube size**: this is dependent on your system.

### Software

To control the pinch valve, we suggest using the [pioreactor relay plugin](https://github.com/camdavidsonpilon/pioreactor-relay-plugin). This plugin will turn the PWM channel for the pinch valve (specified in your config.ini) on and off at your control. You can [install this plugin from the Pioreactor UI](/user-guide/using-community-plugins#installing-plugins).


### Recommended pinch valves

1. [Takasago Fluidics](https://www.takasago-fluidics.com/collections/pinch-valve-ps-series) have a quality product with lots of options. However, the distribution is from Japan, and is quite expensive though, and they require buying through a sales person. We've also designed a [simple housing](https://www.printables.com/model/356918-dovetail-pinch-valve-holder) to attach it to our [Pioreactor dosing platform](https://www.printables.com/model/298240-pioreactor-platform-with-dovetails).



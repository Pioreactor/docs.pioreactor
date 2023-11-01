---
title: Power troubleshooting
slug: /troubleshooting-power
---

#### Brown-outs

If you find that your Pioreactor is halting jobs (eg: the UI says _lost_ and stirring/motors have stopped), or you find that your Pioreactor is restarting itself often, this could be due to _brown-outs_.

Brown-outs are when your power supply is momentarily reduced to the point that the Raspberry Pi shuts down. When the power comes back up, the Raspberry Pi will start up again. This is most likely caused by:


1. An inadequate power supply unit (PSU). You need to use a proper PSU (5V, at least 2.5 Amps), and certainly not a phone charger. We like the Raspberry Pi's official PSU.
2. If you are running a lot of power: high temperature, stirring, pumping often, additional LEDs (or some combination) and you are experiencing brown-outs, we suggest adding an [external power supply for the PWM outputs](https://docs.pioreactor.com/user-guide/external-power).


#### Pioreactor restarts when a PWM output is turned on

If your Pioreactor restarts with a pump, stirring fan, etc. turns out, it's possible there is a short in the connectors. Email us at help@pioreactor.com

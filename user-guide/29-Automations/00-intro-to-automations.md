---
title: Introduction to automations
slug: /intro-to-automations
description: Automations let Pioreactor run dosing, temperature, LED, and growth workflows for you.
hide_table_of_contents: true
---

Automations are Pioreactor’s presets for running repeatable tasks without babysitting every step. Instead of manually toggling stirring, repeatedly starting a pump, or scheduling LED cycles, you can hand those decisions to an automation and focus on interpreting the experiment.

Use an automation when:

* You need to maintain a culture state (for example, chemostat or turbidostat modes).
* The experiment requires timed cycles such as day/night lighting or periodic dosing.
* You want Pioreactor to react to sensor data (growth rate calculations, temperature feedback loops, etc.).

## Start an automation from the UI

1. Open **Pioreactors** → choose the reactor you want to configure.
2. Click **Manage** (or **Control**) to open the activities drawer.
3. In **Activities**, locate the automation you need and use **Start**.

![Activities drawer showing available automations](/img/user-guide/29-automations/00-intro-to-automations/automations-panel.png)
_Highlighted rows show where temperature, dosing, and LED automations live inside the Activities dialog._

Each automation runs as its own background job, so you can mix and match—for example, keep stirring and growth-rate measurements active while only dosing automatically.

## Available automation types

The three most common automation families live in this drawer:

* **Temperature automation** – closes the loop on vial temperature using the heater. Options include thermostat-style control or logging-only mode. See [Temperature automations](/user-guide/temperature-automations).
* **Dosing automation** – runs pumps in chemostat, turbidostat, or fed-batch patterns and logs media usage automatically. See [Dosing automations](/user-guide/dosing-automations).
* **LED automation** – coordinates LED intensity and scheduling (for example day/night cycles for phototrophs). See [LED automations](/user-guide/led-automations).

You can also create custom automations or profiles (see [Writing automations](/developer-guide/writing-automations-1)) when your experiment requires bespoke logic.

## `Skip first run`

When you start an automation, Pioreactor needs to know whether it should execute immediately or after the first interval. Selecting **Skip first run** delays the initial action by one full interval (_N_ minutes) before beginning the loop. Use this when the culture needs to equilibrate before the automation intervenes, or when you schedule automations ahead of time and do not want them to fire right away.

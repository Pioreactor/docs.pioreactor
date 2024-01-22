---
title: Activities
slug: /activities
---

Below is a list of activities that come available with the Pioreactor. Additionally, you can add activities using plugins. [Read more about using plugins](/user-guide/using-community-plugins).

- **Stirring**: this starts the stirring in the Pioreactor. After starting to stir, you can change the stirring speed in the Settings tab. You can modify the default stirring speed in the configuration settings. We recommend keeping the stirring range of 150 RPM to 600 RPM.

- **Optical density**: this turns on the system that measures culture density. Readings will start to populate the _Experiment Overview_ page. It's useful to inspect the first few minutes of readings to ensure the readings are as expected (e.g., the readings aren't erratic, and the stirring speed is appropriate, etc.).

- **Growth Rate**: this activity requires that stirring and optical density be running as well. This starts the calculation of a normalized optical density, and the implied growth rate. Both calculations will populate the _Experiment Overview_ page.

- **Temperature automation**: turning on a temperature automation will start collecting temperature readings. For example, the **Thermostat** automation will use a feedback loop to stabilize the Pioreactor to a set temperature. Pausing an automation will cease both any active heating and temperature data collection. Stopping an automation will stop the heating and temperature collection. To change a running temperature automation, use the "Change Temperature Automation" button. Read more about specific [temperature automations](/user-guide/temperature-automations).

- **Dosing automation**: turning on a dosing automation to start listening periodically for dosing triggers. A dosing automation requires at least 1 pump to be available and calibrated. [More about using pumps](/user-guide/using-pumps). Pausing a dosing automation will stop any currently, and future, dosing occurring until the automation is unpaused. Read more about the different types of [dosing automations](/user-guide/dosing-automations).

- **LED automation**: turning on a LED automation to start listening periodically for LED change triggers. Read more about [LED automations](/user-guide/led-automations).
---
title: Activities
slug: /activities
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

Below is a list of built-in activities that come with the Pioreactor. Additionally, you can add activities using plugins. [Read more about using plugins](/user-guide/using-community-plugins).

- **Stirring**: starts the stirring in the Pioreactor. After starting, you can change the stirring speed in the **Settings** tab. You can modify the default stirring speed in the configuration settings. We recommend keeping the stirring range between 150 RPM and 600 RPM. You can also [use different RPM targets during and between OD snapshots](#stirring-around-od-snapshots).

- **Optical density**: turns on the system that measures culture density. Readings will start to populate the **Experiment Overview** page. It's useful to inspect the first few minutes to ensure the readings look reasonable (for example, they aren't erratic and the stirring speed is appropriate). Read more about [optical density and normalization](/user-guide/od-normal-growth-rate).

- **Growth Rate**: this activity requires that stirring and optical density be running as well. It starts the calculation of a normalized optical density and the implied growth rate. Both calculations will populate the **Experiment Overview** page. Read more about [growth-rate modelling](/user-guide/growth-rate-modelling).

- **Temperature automation**: turning on a temperature automation will start collecting temperature readings. For example, the **Thermostat** automation will use a feedback loop to stabilize the Pioreactor to a set temperature. Pausing an automation will cease both any active heating and temperature data collection. Stopping an automation will stop the heating and temperature collection. To change a running temperature automation, use the "Change Temperature Automation" button. Read more about specific [temperature automations](/user-guide/temperature-automations).

- **Dosing automation**: turning on a dosing automation starts listening periodically for dosing triggers. A dosing automation requires at least 1 pump to be available and calibrated. [More about using pumps](/user-guide/using-pumps). Pausing a dosing automation will stop any current and future dosing until the automation is unpaused. Read more about the different types of [dosing automations](/user-guide/dosing-automations).

- **LED automation**: turning on an LED automation starts listening periodically for LED change triggers. Read more about [LED automations](/user-guide/led-automations).

## Stirring around OD snapshots

Stirring can automatically switch between two RPM targets: one for mixing between optical density (OD) snapshots, and another during each snapshot. This is called **OD dodging**. For example, you can mix at 1200 RPM between snapshots, then slow to 500 RPM for each measurement to let the vortex settle. You can also set the during-snapshot target to zero to stop stirring while measuring.

![Target stirring RPM drops from 1200 RPM to 500 RPM well before each OD snapshot, stays at 500 RPM through the snapshot and a short post-delay, then returns to 1200 RPM.](/img/user-guide/02-experiment-basics/05-activities/stirring-od-timing.svg)

The diagram shows the **target** RPM. The motor and liquid take time to respond. `pre_delay_duration` provides time before the snapshot for stirring to settle; `post_delay_duration` keeps the during-snapshot target briefly after the snapshot before returning to the mixing target.

In this example, most of the timing margin comes before the measurement: a 1.5-second pre-delay lets the vortex settle, followed by a short 0.25-second post-delay before returning to 1200 RPM.

### Configure the two RPM targets

On the **Configuration** page, edit the existing `[stirring.config]` section in the shared configuration, or in a unit's configuration for a per-Pioreactor override. See [how configuration overrides work](/user-guide/configuration).

```ini
[stirring.config]
use_rpm=1
enable_dodging_od=True
initial_target_rpm=1200
target_rpm_outside_od_reading=1200
target_rpm_during_od_reading=500
pre_delay_duration=1.5
post_delay_duration=0.25
```

| Setting | Purpose |
| --- | --- |
| `enable_dodging_od` | Enables switching RPM around OD snapshots. With this disabled, stirring uses a single target. |
| `target_rpm_outside_od_reading` | The mixing target applied after each snapshot and its post-delay. |
| `target_rpm_during_od_reading` | The target applied before each snapshot and held through the measurement and post-delay. Set to `0` to stop stirring. |
| `initial_target_rpm` | The default startup target. This is separate from the two snapshot targets. |
| `pre_delay_duration`, `post_delay_duration` | Timing margins in seconds before and after each snapshot. |

Save the configuration and restart stirring to load the changed RPM settings. OD dodging needs RPM feedback (`use_rpm=1`) and the **Optical density** activity running. Without OD reading running, stirring operates continuously.

:::note Choose the mixing target explicitly
After each snapshot, stirring applies `target_rpm_outside_od_reading`, rather than restoring whichever RPM was selected at startup or changed in **Settings**. For example, if you start stirring at 600 RPM but configure the outside-snapshot target as 1200 RPM, stirring will switch to 1200 RPM after the snapshot. Changing the live `target_rpm` alone does not change either snapshot target.
:::

### Allow time for RPM changes

Run a [stirring calibration](/user-guide/hardware-calibrations#stirring-calibrations) and make it active before using OD dodging. Calibration helps the motor reach each target more quickly and can reduce OD noise during RPM transitions.

Use an OD sampling rate of **0.12 samples per second or slower** (about one snapshot every 8.3 seconds or longer) to leave time for stirring to change speed. For example, set the following in the existing OD configuration section and restart **Optical density**:

```ini
[od_reading.config]
samples_per_second=0.1
```

This records one snapshot every 10 seconds. If RPM transitions still disturb the readings, allow more time between snapshots or increase the settling delay before each snapshot.

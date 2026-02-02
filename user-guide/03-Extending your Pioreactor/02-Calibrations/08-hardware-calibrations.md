---
title: Hardware calibrations
slug: /hardware-calibrations
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

Hardware calibrations serve as a method to get accurate performance from your Pioreactor.


### Stirring calibrations

:::tip
This is optional, but can really help stirring performance. Creating a stirring calibration is also very easy, so we recommend it.
:::

You'll need:

1. A vial
2. A stir bar
3. Liquid (water is fine)

![DC-based stirring calibration protocol in the Protocols page.](/img/user-guide/03-extending-your-pioreactor/08-hardware-calibrations/stirring-calibration-protocol.png)

1. In the **Protocols** page, choose your Pioreactor and select the **stirring** device.
2. Click **Run protocol** for **DC-based stirring calibration**.
3. Follow the on-screen flow:
    1. Insert a vial with a stir bar and the liquid volume you plan to use.
    2. Confirm stirring is off before starting.
    3. Let the protocol step through duty cycles while it records RPM.
4. When the protocol finishes, save the calibration as active if prompted. Otherwise, set it active later from the **Calibrations** page.

You're done! Your stirring RPM should be much more responsive now.

-----

### Pump calibration

Calibrating a pump, like a low-volume peristaltic pump, is very important to accurately dispense or remove a target volume. There is no liquid feedback loop in the Pioreactor (unlike in the stirring & RPM relationship), so this calibration curve is important.

There are three pumps on the Pioreactor: media, alt-media, and waste. You don't need to have all three available, and can calibrate them one at a time. For calibration, you'll need the following:

1. A pump, with power connection to Pioreactor's PWM outputs
2. An accurate weighing scale, with accuracy of 0.1g or better.
3. Container of water

![Duration-based pump calibration protocol in the Protocols page.](/img/user-guide/03-extending-your-pioreactor/08-hardware-calibrations/pump-calibration-protocol.png)


:::tip
[Supplying external power](/user-guide/external-power)? Make sure to plug in your external power **before** pump calibration!
:::


1. In the **Protocols** page, choose your Pioreactor and select the pump device you want to calibrate (for example `media_pump`, `waste_pump`, or `alt_media_pump`).
2. Click **Run protocol** for **Duration-based pump calibration**.
3. Follow the on-screen flow:
    1. Review the safety steps for keeping liquids away from the Pioreactor hardware.
    2. Name the calibration.
    3. Enter the target volumes to calibrate around (comma-separated values, in mL).
    4. Optionally adjust PWM settings.
    5. Place both tubing ends in the water container and prime the pump until the tubing is fully filled.
    6. For each dispense step, hold the outflow tube above your vial or graduated cylinder, run the pump for the prompted duration, and record the measured volume. Repeat until the protocol completes.
4. When the protocol finishes, save the calibration as active if prompted. Otherwise, set it active later from the **Calibrations** page.

## Managing calibrations

For setting active calibrations, editing YAML, and sharing backups, see [Managing calibrations](/user-guide/managing-calibrations).

---
title: Hardware calibrations
slug: /hardware-calibrations
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';


Hardware calibrations serve as a method to get accurate performance from your Pioreactor.


### Stirring calibrations

:::tip
This is optional, but can really help stirring performance. Creating a stirring calibration is also very easy, so we recommend it.
:::

1. Start by filling a Pioreactor vial about 3/4th with water, and place the stirbar inside. Close with lid. Place into the Pioreactor.
1. We'll perform this routine through your computer's command line. Need help [accessing it](/user-guide/accessing-raspberry-pi)?
2.  Enter **`ssh pioreactor@<insert unit name>.local`**.
    *   For example, to calibrate on our Pioreactor named _worker3_, we typed **`ssh pioreactor@worker3.local`**.
    *   The default password is `raspberry`.
2. After SSHing into your Pioreactor, enter `pio calibrations run --device stirring`.
4. The Pioreactor will increment the voltage applied to the motor, and record the RPM. After it's done, it will collect this data into a calibration curve, and store it locally.
4. At the end, you'll be prompted to set this as the "active" calibration. Select "Yes".

You're done! Your stirring RPM should be much more responsive now.

-----

### Pump calibration

Calibrating a pump, like a low-volume peristaltic pump, is very important to accurately dispense or remove a target volume. There is no liquid feedback loop in the Pioreactor (unlike in the stirring & RPM relationship), so this calibration curve is important.

There are three pumps on the Pioreactor: media, alt-media, and waste. You don't need to have all three available, and can calibrate them one at a time. For calibration, you'll need the following:

1. A pump, with power connection to Pioreactor's PWM outputs
2. An accurate weighing scale, with accuracy of 0.1g or better.
3. Container of water


:::tip
[Supplying external power](/user-guide/external-power)? Make sure to plug in your external power **before** pump calibration!
:::


<AssemblyInstructionBlock title="Calibrating the pumps" images={["experiments/turbidostat/ssh_into_unit.png","experiments/turbidostat/run_pump_calc.png"]}>


1. We'll perform this routine through your computer's command line. Need help [accessing it](/user-guide/accessing-raspberry-pi)?
2.  Enter **`ssh pioreactor@<insert unit name>.local`**.
    *   For example, to calibrate on our Pioreactor named _worker3_, we typed **`ssh pioreactor@worker3.local`**.
    *   The default password is `raspberry`.
3. To calibrate the `media_pump`, enter `pio calibrations run --device media_pump`. Likewise for `waste_pump` and `alt_media_pump.`
4. Follow the prompts to calibrate your pump.
4. At the end, you'll be prompted to set this as the "active" calibration. Select "Yes".

</AssemblyInstructionBlock>

## Managing calibrations

From both the UI and the command line, you can manage your Pioreactor's calibrations.

![Calibrations page showing filters, table, and chart.](/img/user-guide/calibrations-page.png)

**In the UI**
- Use the `Pioreactor` and `Device` filters at the top of the Calibrations page to focus on a specific unit and hardware type. Toggle **Only Active calibrations** to hide everything except the curve currently in use.
- Click any calibration row to open its detail view. Use **Set active** to mark that calibration as the one the Pioreactor will use for that device (only one calibration can be active per device per Pioreactor). Use **Set inactive** to clear it and disable calibration for that device.
- The chart in both the list view and detail view has a download icon—click it to export a PNG of the calibration curve for lab notes. The top-level **Download all calibrations** button grabs all calibration YAML files for backup.
- To edit a calibration, open its detail view and choose **View YAML**. Make small changes, save the YAML, and re-upload it via **Upload calibration** (or edit the YAML on-disk and use `pio calibrations display` to confirm before setting it active).

**From the command line**
- List what you have with `pio calibrations list` or scope to a single device with `pio calibrations list --device <device>`.
- Set which calibration is active with `pio calibrations set-active --device <device> --name <calibration_name>`. Omit `--name` to clear the active calibration for that device.

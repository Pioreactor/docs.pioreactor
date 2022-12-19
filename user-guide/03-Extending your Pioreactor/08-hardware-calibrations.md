---
title: Hardware calibrations
slug: /hardware-calibrations
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';


Hardware calibrations serve as a method to get accurate performance from your Pioreactor.


### Stirring calibration (optional)

:::info
You'll need the following:
1. Pioreactor HAT
2. Pioreactor sleeve
3. Vial and stirbar
:::

Internally, the Pioreactor will vary the amount of voltage to apply to the stirring motor to reach the desired RPM, however, this can take a few minutes. We can significantly improve this by asking the Pioreactor to create a "map" between voltage and RPM beforehand. Then the Pioreactor only needs to perform a lookup in the map to hit the desired RPM.

:::note
This is optional, but can really help stirring performance. Creating a stirring calibration is also very easy, so we recommend it.
:::

-----

<AssemblyInstructionBlock title="Calibrating the stirring on the UI site" images={["user-guide/calibrate.png","user-guide/calibrate_stirring.png"]}>

1. Start by filling a Pioreactor vial about 3/4th with water, and place the stirbar inside. Close with lid. Place into the Pioreactor.
2. From the web interface, in _Pioreactors_, find the Pioreactor you wish to calibrate. Click _Calibrate_.
3. Click _stirring_.
4. Click _Start_. The Pioreactor will increment the voltage applied to the motor, and record the RPM. After it's done, it will collect this data into a calibration curve, and store it locally.

</AssemblyInstructionBlock>

You're done! Your stirring RPM should be much more responsive now.

-----

### Pump calibration

Calibrating a pump, like a low-volume peristaltic pump, is very important to accurately dispense or remove a target volume. There is no liquid feedback loop in the Pioreactor (unlike in the stirring & RPM relationship), so this calibration curve is important.

There are three pumps on the Pioreactor: media, alt-media, and waste. You don't need to have all three available, and can calibrate them one at a time.


:::info
You'll need the following:
1. A Pioreactor
2. A pump, with power connection to Pioreactor's PWM outputs
3. An accurate weighing scale
4. Container of water
:::


:::tip
[Supplying external power](/user-guide/external-power)? Make sure to plug in your external power **before** pump calibration!
:::


<AssemblyInstructionBlock title="Calibrating the pumps" images={["experiments/turbidostat/ssh_into_unit.png","experiments/turbidostat/run_pump_calc.png"]}>


1. We'll perform this routine through your computer's command line. Need help [accessing it](/user-guide/accessing-raspberry-pi)?
2.	Enter **`ssh pioreactor@<insert unit name>.local`**.
	*	For example, to calibrate on our Pioreactor named _worker3_, we typed **`ssh pioreactor@worker3.local`**.
	*	The default password is `raspberry`.
3. Enter **`pio run pump_calibration`**.
4. Follow the prompts to calibrate your media, waste, and/or alternate media pumps.
5. Calibrations can be performed depending on the frequency of your Pioreactor use.

</AssemblyInstructionBlock>

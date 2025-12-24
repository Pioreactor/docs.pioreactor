---
title: Stirring
slug: /troubleshooting-stirring
hide_table_of_contents: true
---

import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

### Stirring is making a grinding noise.

Likely the fan's magnets are striking the 4mm screws above it. See [this section](/user-guide/troubleshooting-stirring#the-magnets-rub-against-the-plastic-screws-above-them-causing-the-stirring-performance-to-be-degraded--stop) if so.


### UI is reporting "Stirring RPM is 0", or stirring self-test failed.

First, with the stirring activity running, carefully examine if the fan below is spinning.
 - If the fan is not spinning,
    - Check to confirm that the fan's cable is in the right PMW channel. You can find the right PWM channel to use in the config.ini, under `[PWM]` (also check that it is not [overwritten in the unit specific config.ini](https://docs.pioreactor.com/user-guide/configuration#how-configuration-works-across-pioreactors))
    - Does the fan start to spin momentarily, but then stop? You may need to increase the target RPM in the UI. The lower limit of RPM is around 125. Target RPMs below 125 have a tendency to stall. Alternatively, increase the `initial_duty_cycle` by 10 units or so and try again.
    - for Pioreactor 20ml 1.0:
       - Visually inspect the top of the fan from the side. If you rotate the fan with a pen, is it touching (or nearly touching) the <Highlight color={colors.magenta}>screws above it</Highlight> (see image below)? See [this section](/user-guide/troubleshooting-stirring#the-magnets-rub-against-the-plastic-screws-above-them-causing-the-stirring-performance-to-be-degraded--stop) if so.
    - for Pioreactor 20ml 1.1:
       - you may need to _increase_ the distance between the fan and the vial holder. You can unscrew the M3 30mm screws slightly to increase the distance.
    - Very gently wiggle the connection between the stirring wires and the HAT - does the fan start? It may be a bad connection. Contact us at support@pioreactor.com
    - The fan may be damaged. Contact us at support@pioreactor.com
- If the fan is spinning:
    - This issue may occur if the fan is positioned too far from the RPM sensors on the heater PCB above it.
       - There should be no-to-very-little visible metal from the screw at the <Highlight color={colors.blue}>interface between the vial holder and the top faceplate's arms</Highlight>. See image below.
       - Try pushing the fan only slightly higher up using a pen, pencil or thin rod. Avoid moving the fan _too_ high up and hitting the <Highlight color={colors.magenta}>vial holder's screws</Highlight>.
       - Try _moderately_ tightening the screws on the bottom of the top faceplate.
    - Try lowering the `initial_duty_cycle` in the config.ini to a value like ~20.
    - Are the two magnets still present on the fan? Visually inspect from the side, or unscrew the top faceplate from the vial holder to see better.
    - The heater PCB may be damaged. Contact us at support@pioreactor.com.
    - You can turn off the feedback loop by setting `use_rpm=0` in the `[stirring.config]` section of your configuration. Set the `initial_duty_cycle` to some appropriate value (20 to 40), as well.


<img src="/img/user-guide/hardware-assembly/vial_holder_alignment.jpg" width="465" style={{margin: "auto", display:"block"}} />

### The magnets rub against the plastic screws above them, causing the stirring performance to be degraded / stop.

Detach the top faceplate. Under the faceplate, slightly unscrew each of the four metal screws. This action will create more space between the magnets and the plastic screws.

<img src="/img/user-guide/hardware-assembly/vial_holder_alignment.jpg" width="465" style={{margin: "auto", display:"block"}} />

### Stir bar is not spinning

1. Check that the vial is pushed down all the way.
2. Try moving the fan closer to the vial holder by _gently_ tightening the screws on the bottom of the top faceplate.
2. The liquid in the vial may be too viscous for the mixing to work.

### Stir bar goes out of balance during OD dodging (RPM changes)

If the stir bar stops, vibrates, or starts orbiting the vial when OD dodging changes the target RPM:
1. Make sure a stirring calibration is active. Re-run it if you recently updated software or changed power/hardware. See [stirring calibration](/user-guide/hardware-calibrations#stirring-calibration-optional).
2. Check that the vial is fully seated on the heating pad. A small gap (for example, from an o-ring or debris) can make the bar lose sync during RPM transitions.

### Stirring is not able to keep a steady RPM

1. Consider decreasing the value of `Kp` in the section `stirring.pid` in the config.ini by 50%.
2. Are you trying to target a very low RPM? The lower limit of RPM is around 125. Target RPMs below 125 have a tendency to stall.
3. Try performing a [stirring calibration](/user-guide/hardware-calibrations#stirring-calibration-optional).


### My stir bar keeps skipping. How can I reduce that?

1. Consider reducing your target RPM.
2. Check if the vial is pushed all the way down.
3. From the side profile, check that no metal from the screws is showing ⇒ the vial is straight vertically.
4. Try another stir bar design, like a cross shape.


### Raspberry Pi shuts off or restarts when stirring is turned on

This is likely caused by a short circuit in the fan's cable assembly. Remove the fan's power cable, and remove the plastic housing by applying pressure on the exposed metal tabs and gently pulling the wires out. Check for any stray wire strands and remove them. Carefully put the plastic housing back on until it clicks (red wire should be positioned closer to the GPIO pins), and try  again.

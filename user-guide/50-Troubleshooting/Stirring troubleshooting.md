---
title: Stirring
slug: /troubleshooting-stirring
---

import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';


### UI is reporting "Stirring RPM is 0", or stirring self-test failed.

First, with the stirring activity running, carefully examine if the fan below is spinning.
 - If it's not spinning,
    - Check to confirm that the fan's cable is in the right PMW channel. You can find the right PWM channel to use in the config.ini, under `[PWM]` (also check that it is not [overwritten in the unit specific config.ini](https://docs.pioreactor.com/user-guide/configuration#how-configuration-works-across-pioreactors))
    - Is the fan starting to spin momentarily, but then stopping? You may need to increase the target RPM in the UI. The lower limit of RPM is around 125. Target RPMs below 125 have a tendency to stall.
    - Visually inspect the fan. Is it touching the <Highlight color={colors.magenta}>screws above it (see image below)</Highlight>? Can you spin freely if you spin it with a pen or pencil?
    - The fan may be damaged. Contact us at support@pioreactor.com
- If it is spinning:
    - Most likely the fan is a bit too far away from the sensors on the PCB above it.
       - There should be no visible metal from the screw at the <Highlight color={colors.blue}>interface between the vial holder and the top faceplate's arms</Highlight>. See image below.
       - Try pushing the fan only slightly higher up using a pen, pencil or thin rod. Avoid moving the fan _too_ high up and hitting the <Highlight color={colors.magenta}>vial holder's screws</Highlight>.
       - Try _moderately_ tightening the screws on the bottom of the top faceplate.
    - Are the two magnets still present on the fan? Visually inspect from the side, or unscrew the top faceplate from the vial holder to see better.
    - The heater PCB may be damaged. Contact us at support@pioreactor.com


<img src="/img/user-guide/hardware-assembly/vial_holder_alignment.jpg" width="465" style={{margin: "auto", display:"block"}} />

### The magnets rub against the plastic screws above them, causing the stirring performance to be degraded / stop.

Dis-attach the top faceplate. Under the faceplate, slightly unscrew each of the four metal screws. This will add more space between the magnets and the plastic screws.

### Stir bar is not spinning

1. Check that the vial is pushed down all the way.
2. Try moving the fan closer to the vial holder by _moderately_ tightening the screws on the bottom of the top faceplate.
2. The liquid in the vial may be too viscous for the mixing to work.

### Stirring is not able to keep a steady RPM

1. Try decreasing the value of `Kp` in the section `stirring.pid` in the config.ini by 50%.
2. Are you trying to target a very low RPM? The lower limit of RPM is around 125. Target RPMs below 125 have a tendency to stall.
3. Try performing a [stirring calibration](/user-guide/hardware-calibrations#stirring-calibration-optional).


### My stir bar keeps skipping. How can I reduce that?

1. Try reducing your target RPM.
2. Check if the vial is pushed all the way down.
3. From the side profile, check that no metal from the screws is showing ⇒ the vial is straight vertically.


### Raspberry Pi shuts off or restarts when stirring is turned on from the UI

Likely this is caused by a short in the fan's cable assembly. Remove the fan's power cable, and remove the plastic housing by applying pressure on the exposed metal tabs and gently pulling the wires out. Examine for any stray wire strands.

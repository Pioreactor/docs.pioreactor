---
title: Adding the temperature expansion kit to your Pioreactor
slug: /temperature-expansion-kit
hide_table_of_contents: true

---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';


You can improve your Pioreactor temperature sensing capabilities with the Temperature Expansion Kit. This kit allows for faster temperature response times, more granular temperature data, and increasing the maximum culture temperature. Below are instructions on how to assemble the new hardware to your existing Pioreactor.


<AssemblyInstructionBlock title="Step 0: before you begin" images={["user-guide/add-teh/00_teh_parts.jpeg"]}>

What's needed to upgrade your Pioreactor with the Pioreactor Expansion Kit:

1. <Highlight color={colors.blue}> Pioreactor Temperature Expansion HAT</Highlight>
2. <Highlight color={colors.green}> 12mm nylon stand-offs </Highlight>
3. <Highlight color={colors.orange}> thermowell </Highlight>
4. <Highlight color={colors.red}> Pt1000 probe </Highlight>
5. A powered-off Pioreactor.
6. A philips head screwdriver

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 1: Expose the Pioreactor HAT" images={["user-guide/add-teh/01_teh_unplug_from_hats.jpeg","user-guide/add-teh/02_teh_unscrew_top.jpeg","user-guide/add-teh/03_teh_remove_top.jpeg"]}>

1. Unplug all wires and cables attached to the Pioreactor HAT.
2. Unscrew the four <Highlight color={colors.blue}>6mm nylon screws</Highlight> on the top faceplate. Keep these screws nearby.
3. Remove the top assembly. Keep this nearby.

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 2: Attach the new HAT" images={["user-guide/add-teh/04_teh_place_hat_1.jpeg","user-guide/add-teh/05_teh_place_hat_2.jpeg","user-guide/add-teh/06_teh_place_standoffs_1.jpeg","user-guide/add-teh/07_teh_place_standoffs_2.jpeg","user-guide/add-teh/08_teh_place_top_back.jpeg","user-guide/add-teh/09_teh_screw_top_on.jpeg",]}>

1. Place the new Temperature Expansion HAT onto the existing HAT, making sure the GPIO pins are lined up. It will fit snug, and you can apply pressure onto the corners of the boards.
2. Tip: if the HAT is still hard to put on, you can screw in the <Highlight color={colors.orange}>12mm standoffs</Highlight> to help force the new HAT down further.
3. Finish placing the <Highlight color={colors.orange}>12mm standoffs</Highlight> in.
4. Place the Pioreactor top assembly back on, and screw back in the 6mm screws.
5. Replug in the cables and wires into the original HAT. Normally:
   - 90° -> PD channel 2
   - REF -> PD channel 1
   - IR -> LED channel A
   - Stirring fan -> PWM 1 (unlabelled)
   - Heater PCB flat-flex cable -> flat-flex connector (unlabelled)

</AssemblyInstructionBlock>



<AssemblyInstructionBlock title="Step 3: Attach the Pt1000" images={["user-guide/add-teh/11_teh_insert_pt1000.jpeg","user-guide/add-teh/12_teh_screw_in_thermowell.jpeg","user-guide/add-teh/13_teh_insert_pt1000_vial.jpeg","user-guide/add-teh/14_teh_finished.jpeg",]}>

1. Attach the <Highlight color={colors.magenta}>Pt1000 probe's connector</Highlight> to the new Temperature Expansion HAT. The connector only has one orientation that works.
2. In your Pioreactor's vial, screw in the <Highlight color={colors.red}>thermowell</Highlight>.

:::info
Make sure when the thermowell is **straight** when being screwed in (that is, perpendicular to the surface of the cap).

It may be a tight squeeze. To help screw it in if it's difficult:
 - Once a few threads are inserted, rotate the thermowell back and forwards a few times slowly to provide more clearance.
 - You can use a pair of needle-nose pliers to hold secure the female end of the thermowell (i.e. one tip is inside the thermowell, and one outside), then twist the vial cap.

:::

3. If not already done so, screw in the <Highlight color={colors.blue}>Pt1000 into the thermowell</Highlight>.
4. You're done the assembly! Next is to install the software.
5. Power up the Pioreactor.


</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 4: Install the software" images={["user-guide/add-teh/install_from_ui.png", "user-guide/add-teh/config.png"]}>

** 1. If you install the Kit across your entire Pioreactor cluster**

 -  In your PioreactorUI, you can <Highlight color={colors.green}>install the plugin</Highlight> to all Pioreactors.


** 2. If you installed the Kit on individual Pioreactors**

 - [SSH](/user-guide/accessing-raspberry-pi) into the individual Pioreactor, and type `pio install-plugin temperature-expansion-kit-plugin`


** Important:** in either case,

Confirm in your <Highlight color={colors.magenta}>configuration</Highlight> that the `[temperature_automation.thermostat]` values have been updated for the Pioreactors with the new hardware to be (exact values may vary slightly):

```
Kp=0.017
Ki=0.0
Kd=4.0
```

You can also update the following configuration:
```
[temperature_automation.config]
# 50 or 60 only, depending on geographic location. This improves the accuracy.
local_ac_hz=60
```

</AssemblyInstructionBlock>


## Tips



## Troubleshooting


### I'm seeing "Record null temperature. Is the Pt1000 probe connected?" and the wire is connected.

 - Try unplugging and plugging the probe back into the HAT.
 - Try restarting the Pioreactor.
 - If the error persists, contact us at `hello@pioreactor.com`


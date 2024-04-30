---
title: Upgrading to Version 1.1
slug: /hardware-setup-upgrade-version
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Upgrade to v1.1 from v1.0

<AssemblyInstructionBlock title="Step 1: Upgrade parts" images={["user-guide/hardware-assembly/upgrade-version/upgrade-parts.png"]}>

You will need:
1. The parts provided in your upgrade kit: 
* <Highlight color={colors.blue}>the top vial holder</Highlight>
* <Highlight color={colors.red}>the bottom vial holder</Highlight>
* <Highlight color={colors.magenta}>#024 o-ring</Highlight>
* <Highlight color={colors.green}>#121 o-ring</Highlight>
* <Highlight color={colors.orange}>top faceplate</Highlight>
* <Highlight color={colors.teal}>flat headed 5mm screws (2x)</Highlight>
* <Highlight color={colors.purple}>4mm screws (2x)</Highlight>
* <Highlight color={colors.aqua}>10mm screw (1x)</Highlight>

2. Your version 1.0 Pioreactor, to be upgraded. 
3. A Philip's head screwdriver. 

</AssemblyInstructionBlock>

## Disassembling the old Pioreactor

<AssemblyInstructionBlock title="Step 2: Disassemble the optics system" images={["user-guide/hardware-assembly/upgrade-version/remove-vial.png", "user-guide/hardware-assembly/upgrade-version/remove-leds-and-pds.png", "user-guide/hardware-assembly/upgrade-version/set-aside-leds-and-pds.png"]}>

1. Remove any vial placed in the vial holder. 
2. Carefuly remove the LED caps. Set these aside.
3. Remove LED + PDs from their sockets. 

:::note
If the LEDs/PDs are stuck in the socket, **do not pull!** Gently twist the bulb until it loosens from the socket to safely remove it.  
:::

4. Set aside the LED and PD cables for later. 

</AssemblyInstructionBlock>



<AssemblyInstructionBlock title="Step 2: Remove the vial holder from the base" images={["user-guide/hardware-assembly/upgrade-version/remove-6mm-screws.png", "user-guide/hardware-assembly/upgrade-version/set-aside-6mm-screws.png", "user-guide/hardware-assembly/upgrade-version/remove-vial-holder-from-hat.png", "user-guide/hardware-assembly/upgrade-version/untighten-30mm-screws.png", "user-guide/hardware-assembly/upgrade-version/remove-vial-holder.png"] }>

1. Unplug the fan and the heater flex cable from the HAT.

2. Remove the four 6mm screws from the top faceplate. Set screws aside. The top assembly of your Pioreactor should now be separate from the HAT and Raspberry Pi. 

3. Unscrew the silver 30mm screws from the bottom of the faceplate, separating it from the vial holder. Remove the fan from the fanplate. Set aside for later.


</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 3: Remove the heater PCB from the vial holder" images={["user-guide/hardware-assembly/upgrade-version/unscrew-4mm-screws.png", "user-guide/hardware-assembly/upgrade-version/set-aside-heater.png"]}>

1. Unscrew the two 4mm screws from the bottom of the vial holder. Set these screws aside for later. 

2. Remove the heater PCB and wire from the vial holder. Set aside for later. 

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 4: Items to be reused" images={["user-guide/hardware-assembly/upgrade-version/set-aside-materials.png"]}>

The following items should be set aside from the disassembled v1.0 Pioreactor, to be used for the upgrade: 
* <Highlight color={colors.blue}>LED cable (1x) and PD cables (2x)</Highlight>
* <Highlight color={colors.red}>vial caps (6x or more)</Highlight>
* <Highlight color={colors.magenta}>6mm screws (4x)</Highlight>
* <Highlight color={colors.green}>4mm screws (2x)</Highlight>
* <Highlight color={colors.orange}>fan PCB</Highlight>
* <Highlight color={colors.purple}>heater PCB</Highlight>

</AssemblyInstructionBlock>


## Assembling the v1.1 Pioreactor 

<AssemblyInstructionBlock title="Step 1: Inserting the o-rings" images={["user-guide/hardware-assembly/upgrade-version/oring-to-vial-holder.png", "user-guide/hardware-assembly/upgrade-version/oring-groove.png", "user-guide/hardware-assembly/upgrade-version/thin-oring-on-top.png", "user-guide/hardware-assembly/upgrade-version/thick-oring-on-bottom.png",
"user-guide/hardware-assembly/upgrade-version/vial-holders-with-orings.png"]}>

The vial holder of the v1.1 now comes in two halves; a top vial holder and a bottom vial holder. Both have sections to insert o-rings for a more secure hold on your vials and increased protection against leaks. 

:::note
The o-rings are lubricated with a silicone-based lube. 
:::

1. The top vial holder has a groove within the body where the #024 o-ring sits. Carefully insert the o-ring using your fingers. Make sure to not twist the o-ring.
2. Run your finger inside the vial holder, pushing the o-ring into place to ensure a snug fit. 
3. The bottom vial holder has a groove for the #121 o-ring, which will sit between the base of the holder and the heater PCB. Carefully insert the o-ring using your fingers. Make sure to not twist the o-ring.
4. Push the o-ring into place to ensure a snug fit. 

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 2: Attach the window cover" images={["user-guide/hardware-assembly/upgrade-version/window-cover-parts.png", "user-guide/hardware-assembly/upgrade-version/window-screw.png"]}>

1. Place the window cover over the window. It should fit snuggly.
2. Attach it using four 4mm screws (2 provided in the upgrade kit, and 2 previously used in the old 1.0 version). 

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 2: Place and secure the heater PCB" images={["user-guide/hardware-assembly/upgrade-version/remove-thermal-pad.png", "user-guide/hardware-assembly/upgrade-version/heater-cable-hole.png", "user-guide/hardware-assembly/upgrade-version/pull-heater-cable.png", "user-guide/hardware-assembly/upgrade-version/apply-pressure.png", "user-guide/hardware-assembly/upgrade-version/screw-in-flat-5mm.png", "user-guide/hardware-assembly/upgrade-version/replace-thermal-pad.png"]}>

1. Remove the thermal pad from the heater PCB assembly from your previous pioreactor. 
2. Place it aside so that the sticky side is upward. Take care to not dirty the thermal pad. 
3. Insert the flex cable below the o-ring and into the groove. Pull it through. 
4. Apply pressure on the back of the heater PCB so that it lies flat on the o-ring. Maintain this pressure for the next steps. 
5. Flip the holder and insert the two flat M2.5-CS 5mm screws into the holes. 
6. While maintaining pressure, take turns screwing each in until both are secure, and the heater pcb is securely attached to the bottom vial holder. 
7. Stick the thermal pad back onto the heater PCB. 

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 4: Create the top assembly" images={["user-guide/hardware-assembly/upgrade-version/twist-vial-holders-together.png", "user-guide/hardware-assembly/upgrade-version/fan-onto-top-faceplate.png", "user-guide/hardware-assembly/upgrade-version/completed-fan-assembly.png", "user-guide/hardware-assembly/upgrade-version/join-vial-holder-and-fan.png", "user-guide/hardware-assembly/upgrade-version/flat-flex-follows-arrow.png", "user-guide/hardware-assembly/upgrade-version/tighten-30mm-screws.png"] }>

1. Screw the top and bottom vial holder sections together.

2. Push the fan onto the top faceplate, orienting it such that the wire is pointing towards the button. 

3. Place the vial holder on top of the four ends of the 30mm screws. The screw ends should fit into four holes on the bottom of the vial holder. The flat flex cable should follow the arrow on the faceplate.

4. Holding it together, finish screwing the silver screws on bottom of the faceplate. The screws will enter square nuts in the vial holder. Do not overtighten.

:::note 
You should not feel resistance when tightening the screws into the square nuts. If you encounter resistance, unscrew and inspect the screw for any plastic debris. 
:::

5. The screw heads will be flush with the faceplate, and there should be no screw threads showing between the vial holder and the faceplate.


</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 5: Button extension" images={["user-guide/hardware-assembly/upgrade-version/apply-force-button-extension.png", "user-guide/hardware-assembly/upgrade-version/completed-button-extension.png"]}>

The top faceplate now comes with a button extension to provide easier access when pushing the button. 

1. Flip over the assembly 
2. Insert the 10mm screw into the hole under the button extension. 
3. Place one finger behind the extension and apply torque with the other hand until the screw is secure in the hole. This may require a lot of force.


</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 5: Putting it all together, part 1" images={["user-guide/hardware-assembly/upgrade-version/attach-assembly-to-hat.png", "user-guide/hardware-assembly/upgrade-version/screw-assembly-to-hat.png",
"user-guide/hardware-assembly/upgrade-version/fasten-heater-cable.png", "user-guide/hardware-assembly/upgrade-version/connect-pwm-one.png"]}>

1. Place the vial holder assembly onto the Raspberry Pi/HAT. The GPIO pins align with the side notch of the faceplate.
2. Using the 6mm screws, attach the top and bottom pieces in each corner.

3. Check that the screw for the button extension is in the right position. 

4. Open the flat flex cable connector on the HAT by pulling the tabs outward, like done previously. Insert the flex cable copper-side up.
5. Push the tabs inward to secure the flex cable.
6. Insert the stirring power connector into PWM channel 1 (unlabelled). 

Your new v1.1 Pioreactor is now assembled! 


</AssemblyInstructionBlock>



<AssemblyInstructionBlock title="Step 5: Putting it all together, part 2" images={["user-guide/hardware-assembly/upgrade-version/attach-assembly-to-hat.png"]}>

1. Insert the connector of either PD cable into PD channel 1 (labelled on the faceplate).
2. Place the connector of the other PD cable into PD channel 
3. Insert the connector of the IR cable into channel A (labelled on the faceplate).

4. Insert the bulb of the IR cable in channel A into the pocket labeled IR. Secure with an LED cap.
5. Insert the bulb of the PD cable in channel 1 into the pocket labeled REF. Secure with an LED cap.
6. Insert the bulb of the PD cable in channel 2 into the pocket labeled 90°. Secure with an LED cap.

:::caution
Avoid over-stressing the leads, or applying too much force too quickly. After bending once, it's ill-advised to bend them again.
:::

7. Push all remaining LED pocket caps onto each pocket.

Your new v1.1 Pioreactor is now assembled! 


</AssemblyInstructionBlock>
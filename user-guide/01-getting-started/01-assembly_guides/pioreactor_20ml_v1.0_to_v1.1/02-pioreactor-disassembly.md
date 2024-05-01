---
title: Disassembling the old Pioreactor
slug: /pioreactor-disassembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<AssemblyInstructionBlock title="Step 1: Unplug and disassemble the optics system" images={["user-guide/hardware-assembly/upgrade-version/remove-vial.png", "user-guide/hardware-assembly/upgrade-version/remove-leds-and-pds.png", "user-guide/hardware-assembly/upgrade-version/set-aside-leds-and-pds.png"]}>

1. Remove any vial placed in the vial holder. 
2. Carefuly remove the LED caps. Set these aside.
3. Remove LED + PDs from their sockets. 

:::caution
If the LEDs/PDs are stuck in the socket, **do not pull!** Gently twist the bulb until it loosens from the socket to safely remove it.  
:::

4. Set aside the LED and PD cables for later. 
5. Unplug the fan and the heater flex cable from the HAT.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 2: Remove the top assembly from the base" images={["user-guide/hardware-assembly/upgrade-version/remove-6mm-screws.png", "user-guide/hardware-assembly/upgrade-version/set-aside-6mm-screws.png", "user-guide/hardware-assembly/upgrade-version/remove-vial-holder-from-hat.png", "user-guide/hardware-assembly/upgrade-version/untighten-30mm-screws.png", "user-guide/hardware-assembly/upgrade-version/remove-vial-holder.png"] }>

1. Remove the <Highlight color={colors.red}>four 6mm screws</Highlight> from the top faceplate. Set screws aside. The top assembly of your Pioreactor should now be separate from the HAT and Raspberry Pi. 
2. Unscrew the <Highlight color={colors.green}>silver 30mm screws</Highlight> from the bottom of the faceplate, <Highlight color={colors.blue}>separating it from the vial holder</Highlight>.
3. Remove the fan from the fanplate. Set aside for later.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 3: Remove the heater PCB from the vial holder" images={["user-guide/hardware-assembly/upgrade-version/unscrew-4mm-screws.png", "user-guide/hardware-assembly/upgrade-version/set-aside-heater.png"]}>

1. Unscrew the <Highlight color={colors.red}>two 4mm screws</Highlight> from the bottom of the vial holder. Set these screws aside for later. 
2. Remove the heater PCB and wire from the vial holder. Set aside for later. 

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 4: Items to be reused" images={["user-guide/hardware-assembly/upgrade-version/set-aside-materials.png"]}>

The following items from the disassembled v1.0 Pioreactor should be set aside to be used for the upgrade: 
* <Highlight color={colors.blue}>LED cable (1x) O-ring PD cables (2x)</Highlight>
* <Highlight color={colors.red}>Vial caps (6x or more)</Highlight>
* <Highlight color={colors.magenta}>6mm screws (4x)</Highlight>
* <Highlight color={colors.green}>4mm screws (2x)</Highlight>
* <Highlight color={colors.orange}>Fan PCB</Highlight>
* <Highlight color={colors.purple}>Heater PCB</Highlight>

Proceed to the next page to continue. 

</AssemblyInstructionBlock>
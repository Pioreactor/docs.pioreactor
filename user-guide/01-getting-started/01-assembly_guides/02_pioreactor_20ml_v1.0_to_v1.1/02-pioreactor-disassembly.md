---
title: Disassembling the old Pioreactor
slug: /v11-upgrade-pioreactor-disassembly
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
3. Remove LED and PDs from their sockets.

:::caution
If the LEDs/PDs are stuck in the socket, **do not pull!** Gently twist the bulb until it loosens from the socket to safely remove it.  
:::

4. Unplug the LED ans PDs from the HAT. Set aside the LED and PDs for later.
5. Unplug the fan and the heater flat-flex cable from the HAT.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 2: Remove the top assembly from the base" images={["user-guide/hardware-assembly/upgrade-version/remove-6mm-screws.png", "user-guide/hardware-assembly/upgrade-version/set-aside-6mm-screws.png", "user-guide/hardware-assembly/upgrade-version/remove-vial-holder-from-hat.png", "user-guide/hardware-assembly/upgrade-version/untighten-30mm-screws.png", "user-guide/hardware-assembly/upgrade-version/remove-vial-holder.png"] }>

1. Remove the four <Highlight color={colors.red}>6mm screws</Highlight> from the top faceplate. Set screws aside. The top assembly of your Pioreactor should now be separate from the HAT and Raspberry Pi.
2. Partially unscrew the <Highlight color={colors.green}>30mm screws</Highlight> from the bottom of the faceplate, <Highlight color={colors.blue}>separating it from the vial holder</Highlight>.
3. Remove the fan from the fanplate. If required, use the screwdriver to **carefully** lever the fan out, applying force alternatively from all four sides. Set the fan aside for later.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 3: Remove the heater PCB from the vial holder" images={["user-guide/hardware-assembly/upgrade-version/unscrew-4mm-screws.png", "user-guide/hardware-assembly/upgrade-version/set-aside-heater.png"]}>

1. Unscrew the two <Highlight color={colors.red}>4mm screws</Highlight> from the bottom of the vial holder. Set these screws aside for later.
2. Remove the heater PCB and wire from the vial holder. Set aside for later. 

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 4: Remove the window cover" images={["user-guide/hardware-assembly/upgrade-version/unscrew-window-cover.png", "user-guide/hardware-assembly/upgrade-version/set-aside-window-cover.png"]}>

1. Unscrew the <Highlight color={colors.red}>6mm screws</Highlight> that secure the window cover to the vial holder. 
2. Set aside the window cover. 

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 5: Items to be reused" images={["user-guide/hardware-assembly/upgrade-version/set-aside-materials.png"]}>

The following items from the disassembled v1.0 Pioreactor should be set aside to be used for the upgrade: 
* <Highlight color={colors.blue}>LED (1x) and PDs (2x)</Highlight>
* <Highlight color={colors.red}>Vial caps (6x or more)</Highlight>
* <Highlight color={colors.magenta}>6mm screws (4x)</Highlight>
* <Highlight color={colors.green}>4mm screws (2x)</Highlight>
* <Highlight color={colors.orange}>Fan PCB</Highlight>
* <Highlight color={colors.purple}>Heater PCB</Highlight>
* <Highlight color={colors.brown}>Window cover</Highlight>

Proceed to the next page to continue. 

</AssemblyInstructionBlock>
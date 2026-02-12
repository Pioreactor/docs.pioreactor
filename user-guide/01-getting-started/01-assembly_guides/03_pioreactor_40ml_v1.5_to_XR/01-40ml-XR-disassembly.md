---
title: Disassembly of the v1.5
slug: /40ml-v15-to-XR-upgrade-disassembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<AssemblyInstructionBlock title="Step 1: Unplug and disassemble the optics system
" images={["user-guide/hardware-assembly/upgrade_XR/remove-stemma-qt.jpg","user-guide/hardware-assembly/upgrade_XR/remove-optics.jpg","user-guide/hardware-assembly/upgrade_XR/remove-ir-bulb.jpg", "user-guide/hardware-assembly/upgrade_XR/twist-top-off-bottom.jpg"]}>

1. Remove any vial placed in the Pioreactor.
2. Unplug all STEMMA-QT wires from the eye-spys. Note that the <Highlight color={colors.red}>100mm wire</Highlight> remains plugged into the HAT. Set the 5mm wire aside.
3. Unscrew the optics covers and eye-spys from the top vial holder. Set all covers and eye-spys aside.
4. Remove the LED caps, and then remove the <Highlight color={colors.teal}>LED bulb</Highlight> from the IR socket. Note that the LED cable remains plugged into the HAT. Set one LED cap aside.

    :::caution
    If the LED is stuck in the socket, **do not pull!** Gently twist the bulb until it loosens from the socket to safely remove it.
    :::

5. Twist the v1.5 top vial holder <Highlight color={colors.orange}>counterclockwise</Highlight> to remove it. 

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 2: Items to reuse in the XR" images={["user-guide/hardware-assembly/upgrade_XR/removed-pieces.jpg", "user-guide/hardware-assembly/upgrade_XR/removed-pieces-2.jpg"]}>

1. You should have the following items set aside for use in the XR: 

* <Highlight color={colors.red}>1x LED cap</Highlight>
* <Highlight color={colors.orange}>1x 50mm STEMMA-QT</Highlight>
* <Highlight color={colors.blue}>2x Eye-Spys</Highlight>
* <Highlight color={colors.teal}>12x 8mm screws</Highlight>
* <Highlight color={colors.magenta}>3x Optics covers</Highlight>

2. The <Highlight color={colors.purple}>LED cable</Highlight> and the <Highlight color={colors.green}>100mm STEMMA-QT</Highlight> should remain plugged into the HAT.


</AssemblyInstructionBlock>






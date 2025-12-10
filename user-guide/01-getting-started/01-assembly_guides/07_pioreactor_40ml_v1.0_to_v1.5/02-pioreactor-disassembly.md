---
title: Disassembly
slug: /40ml-v10-upgrade-v15-upgrade-disassembly
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<AssemblyInstructionBlock title="Step 1: Unplug and disassemble the optics system
" images={["user-guide/hardware-assembly/upgrade_kits/remove_pds_leds.jpg","user-guide/hardware-assembly/upgrade_kits/disconnect_pds.jpg"]}>

1. Remove any vial placed in the Pioreactor.
2. Remove the <Highlight color={colors.teal}>LED caps</Highlight> from **REF**, **IR** and **90°** sockets.
3. Remove the LED and PDs from their sockets.
    :::caution
    If the LEDs/PDs are stuck in the socket, **do not pull!** Gently twist the bulb until it loosens from the socket to safely remove it.
    :::
4. Unplug the <Highlight color={colors.red}>PDs only</Highlight> from the HAT. Leave the LED attached - this will be reused in the v1.5.

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 2: Replace the top vial holder
" images={["user-guide/hardware-assembly/40ml-v15/oring-groove.jpg", "user-guide/hardware-assembly/40ml-v15/oring-in-top.jpg", "user-guide/hardware-assembly/upgrade_kits/remove_old_vial_holder.jpg", "user-guide/hardware-assembly/upgrade_kits/attach_new_vial_holder.jpg",]}>

1. The new top v1.5 vial holder has <Highlight color={colors.blue}>a groove within the body</Highlight> where the #024 O-ring sits. Carefully insert the O-ring using your fingers. Make sure to not twist the O-ring.
2. Run your finger inside the vial holder, pushing the O-ring into place to ensure a snug fit.
3. Screw off the existing top vial holder by twisting it counter-clockwise. This old top isn't needed anymore.
4. Screw on the new v1.5 vial holder.

</AssemblyInstructionBlock>



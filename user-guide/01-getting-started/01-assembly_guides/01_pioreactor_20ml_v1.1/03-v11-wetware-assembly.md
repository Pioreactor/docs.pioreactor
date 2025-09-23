---
title: Wetware assembly
slug: /20ml-v11-wetware-assembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<AssemblyInstructionBlock title="Step 1: Inserting the O-rings" images={["user-guide/hardware-assembly/upgrade-version/oring-to-vial-holder.png", "user-guide/hardware-assembly/upgrade-version/oring-groove.png", "user-guide/hardware-assembly/upgrade-version/thin-oring-into-top.png", "user-guide/hardware-assembly/upgrade-version/thick-oring-into-bottom.png",
"user-guide/hardware-assembly/upgrade-version/vial-holders-with-orings.png"]}>

:::note
The vial holder of the v1.1 comes in two halves; a top vial holder and a bottom vial holder. Both have sections to insert O-rings for a more secure hold on your vials and increased protection against leaks. The <Highlight color={colors.magenta}>thinner O-ring (#024)</Highlight> fits into the top piece. The <Highlight color={colors.orange}>thicker O-ring (#121)</Highlight> lines the bottom piece.

**The <Highlight color={colors.magenta}>#024 O-ring</Highlight> has been switched to a version with an X-shaped cross section in recently shipped v1.1 Pioreactors.**
:::

1. The O-rings are pre-lubricated with a silicone-based lubricant. If needed, remove any excess lubricant from the O-rings.
2. The top vial holder has <Highlight color={colors.blue}>a groove within the body</Highlight> where the <Highlight color={colors.magenta}>thinner #024 O-ring</Highlight> sits. Carefully insert the O-ring using your fingers. Make sure to not twist the O-ring.
3. Run your finger inside the vial holder, pushing the O-ring into place to ensure a snug fit.
4. The bottom vial holder has a groove for the <Highlight color={colors.orange}>thicker #121 O-ring</Highlight>. The O-ring will sit between the base of the holder and the heater PCB. Carefully insert the O-ring using your fingers. Make sure to not twist the O-ring.
5. Push the O-ring into place to ensure a snug fit.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 2: Attach the window cover" images={["user-guide/hardware-assembly/upgrade-version/window-cover-parts.png", "user-guide/hardware-assembly/upgrade-version/window-screw.png"]}>

1. Place the window cover over the window. It should fit snugly.
2. Attach it using four <Highlight color={colors.red}>M2.5 4mm screws</Highlight>.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 3: Connect the flex cable" images={["user-guide/hardware-assembly/upgrade-version/non-attached-heater-pcb.png","user-guide/hardware-assembly/upgrade-version/attached-heater-pcb.png"]}>


1.	On the heater PCB, locate the white-&-beige cable connector, <Highlight color={colors.red}>pull the beige-colored tabs outward</Highlight> to open it.
2.	<Highlight color={colors.green}>Insert the flex cable</Highlight> blue side down, copper side up, into the cable connector.
3.  Then <Highlight color={colors.orange}>push the beige tabs back in</Highlight> to secure the flex cable.


</AssemblyInstructionBlock>

------

<AssemblyInstructionBlock title="Step 4: Place and secure the heater PCB" images={["user-guide/hardware-assembly/upgrade-version/heater-cable-hole.png", "user-guide/hardware-assembly/upgrade-version/pull-heater-cable.png", "user-guide/hardware-assembly/upgrade-version/apply-pressure.png", "user-guide/hardware-assembly/upgrade-version/screw-in-flat-5mm.png", "user-guide/hardware-assembly/upgrade-version/replace-thermal-pad.png"]}>



1. Insert the other end of the flex cable below the O-ring and into <Highlight color={colors.red}>the groove</Highlight>. Pull it through.
2. <Highlight color={colors.magenta}>Apply pressure</Highlight> on the back of the heater PCB so that it lies flat on the O-ring. Maintain this pressure for the next steps.
3.  **While maintaining pressure**, flip the holder and insert the two <Highlight color={colors.green}>M2.5-CS 5mm screws</Highlight> into the holes - **don't tighten fully yet**.

:::info
Newer versions may come with brass M2.5-CS 5mm screws.
:::

4. **While maintaining pressure**, take turns screwing each in until both are reasonably tight, and the heater PCB is securely attached to the bottom vial holder.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 5: Placing the heating pad" images={["user-guide/hardware-assembly/upgrade-version/sticky-side.png","user-guide/hardware-assembly/upgrade-version/remove-blue.png","user-guide/hardware-assembly/upgrade-version/remove-blue-2.png"]}>

1.	Remove the _clear_ plastic from one side of the thermal pad. This exposes a sticky side on the thermal pad.
2.	Place on the flat (aluminum) part of the heating PCB. Lightly apply downwards pressure to secure it and remove any air bubbles trapped..
3.	Remove the blue protective plastic on top of the thermal pad.


</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 6: Complete the vial holder" images={["user-guide/hardware-assembly/upgrade-version/twist-vial-holders-together.png"]}>

1. Screw the top and bottom vial holder sections together so that the IR label is positioned above the flat-flex-cable.
2. Set this aside and proceed to the next page. 

</AssemblyInstructionBlock>

---
title: Attaching the wetware to the HAT asssembly
slug: /putting-it-together
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/stirring_parts.jpg"]}>

*	<Highlight color={colors.blue}>Fan</Highlight>
*	<Highlight color={colors.red}>Top faceplate</Highlight> (will have 4 x 30mm screws in it)

:::info
These come assembled - leave them together. If they are not assembled, attach the fan onto the faceplate with the cable oriented toward the side labelled "PWM".
:::

</AssemblyInstructionBlock>


-----

<AssemblyInstructionBlock title="Step 2: Securing the vial holder" images={["user-guide/hardware-assembly/vial_holder_on_fan.jpg","user-guide/hardware-assembly/cable_orientation.jpg","user-guide/hardware-assembly/screw_vial_holder_faceplate.jpg","user-guide/hardware-assembly/vial_holder_alignment.jpg"]}>

1.	Place the vial holder on top of the four ends of the 30mm screws. The screw ends should fit into four holes on the bottom of the vial holder. The flat flex cable should follow the <Highlight color={colors.red}>arrow on the faceplate</Highlight>.
2.	Holding it together, finish screwing the bottom of the faceplate. The screws will enter square nuts in the vial holder. Do not overtighten.
3. The screw heads will be flush with the faceplate, and there should be <Highlight color={colors.blue}>no screw threads</Highlight> showing between the vial holder and the faceplate.
4. Use the screwdriver to check that the fan can spin freely without rubbing against the <Highlight color={colors.magenta}>screws above</Highlight>. **Important: If there is contact or _near_-contact, slightly unscrew the 30mm screws underneath to provide more clearance**.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Attaching the vial holder to the HAT" images={["user-guide/hardware-assembly/screw_top_bottom_gpio.jpg", "user-guide/hardware-assembly/screw_top_bottom.jpg"]}>

1.	Place the vial holder assembly onto the Raspberry Pi/HAT.
	*	The <Highlight color={colors.blue}>GPIO pins</Highlight> align with the side notch of the faceplate.
2.	Using the <Highlight color={colors.orange}>6mm screws</Highlight>, attach the top and bottom pieces in each corner.


</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 4: Connecting heater and stirring to the HAT" images={["user-guide/hardware-assembly/heating_connection.jpg","user-guide/hardware-assembly/stirring_connection.jpg"]}>

1.  Open the <Highlight color={colors.orange}>flat flex cable connector</Highlight> on the HAT by pulling the tabs outward, like done previously.
2.  Insert the flex cable copper-side up.
3.  Push the tabs inward to secure the flex cable.
4.  Insert the stirring power connector into <Highlight color={colors.green}>PWM **channel 1**</Highlight> (unlabelled).
3.	Continue to the [next page](/user-guide/optics-assembly).

</AssemblyInstructionBlock>

-----
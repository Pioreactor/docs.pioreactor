---
title: Putting it all together
slug: /putting-it-together
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/stirring_parts.jpg"]}>

*	<Highlight color={colors.blue}>Fan</Highlight>
*	<Highlight color={colors.red}>Top faceplate</Highlight> (note the long indent where the GPIO will pins go)
*	<Highlight color={colors.green}>30mm M3 screws</Highlight> (they may already be in the top faceplate)
*	<Highlight color={colors.orange}>6mm screws</Highlight>

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Assembling the stirring apparatus" images={["user-guide/hardware-assembly/top_faceplate_screws.jpg","user-guide/hardware-assembly/top_faceplate_screws_2.jpg","user-guide/hardware-assembly/fan_on_faceplate.jpg"]}>

1.	Only if not already completed: from the bottom of the faceplate, insert the 30mm M3 screws. Do not screw in all the way &#151 just enough that the <Highlight color={colors.orange}>screws poke out</Highlight> the other end.
2.	Push the fan on top of the screws. The wire should be oriented towards the side labeled <Highlight color={colors.teal}>PWM</Highlight>. You may need to wiggle the screw ends a bit to align everything well, and apply some *careful* force.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Securing the vial holder" images={["user-guide/hardware-assembly/vial_holder_on_fan.jpg","user-guide/hardware-assembly/cable_orientation.jpg","user-guide/hardware-assembly/screw_vial_holder_faceplate.jpg","user-guide/hardware-assembly/vial_holder_alignment.jpg"]}>

1.	Place the vial holder on top of the faceplate piece. The flat cable should follow the <Highlight color={colors.red}>arrow on the faceplate</Highlight>.
2.	Holding it together, finish screwing the bottom of the faceplate. The Screws will enter the square nuts you placed into the vial holder. **Do not overtighten**. The screw heads should be flush with the faceplate. Use the screwdriver to check that the fan can spin freely without rubbing against anything.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Attaching the vial holder to the HAT" images={["user-guide/hardware-assembly/screw_top_bottom_gpio.jpg", "user-guide/hardware-assembly/screw_top_bottom.jpg"]}>

1.	Place the vial holder assembly onto the Raspberry Pi/HAT.
	*	The <Highlight color={colors.blue}>GPIO pins</Highlight> align with the side notch of the faceplate.
2.	Using the <Highlight color={colors.orange}>6mm screws</Highlight>, attach the top and bottom pieces in each corner.
3.	Continue to the [next page](/user-guide/optics-assembly).


</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 5: Connecting heater and stirring to the HAT" images={["user-guide/hardware-assembly/heating_connection.jpg","user-guide/hardware-assembly/stirring_connection.jpg"]}>

1.  Open the <Highlight color={colors.orange}>flat flex cable connector</Highlight> on the HAT by pulling the tabs outward, like done previously.
2.  Insert the flex cable copper-side up.
3.  Push the tabs inward to secure the flex cable.
4.  Insert the stirring power connector into <Highlight color={colors.green}>PWM **channel 1**</Highlight> (unlabelled).

</AssemblyInstructionBlock>

-----
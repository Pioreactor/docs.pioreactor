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
*	<Highlight color={colors.green}>30 mm M3 screws</Highlight>
*	<Highlight color={colors.orange}>6 mm M2.5 nylon screws</Highlight>

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Assembling the stirring apparatus" images={["user-guide/hardware-assembly/top_faceplate_screws.jpg","user-guide/hardware-assembly/top_faceplate_screws_2.jpg","user-guide/hardware-assembly/fan_on_faceplate.jpg"]}>

1.	From the bottom of the faceplate, insert the 30 mm M3 screws. Do not screw in all the way &#151 just enough that the <Highlight color={colors.orange}>screws poke out the other</Highlight> end.
2.	Push the fan on top of the screws. Make sure the <Highlight color={colors.teal}>wire is oriented towards the side labeled PWM.</Highlight>

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Securing the vial holder" images={["user-guide/hardware-assembly/vial_holder_on_fan.jpg","user-guide/hardware-assembly/cable_orientation.jpg","user-guide/hardware-assembly/screw_vial_holder_faceplate.jpg","user-guide/hardware-assembly/vial_holder_alignment.jpg"]}>

1.	Place the vial holder on top of the faceplate piece. The <Highlight color={colors.red}>flat cable should follow the arrow on the faceplate.</Highlight>
2.	Holding it together, finish screwing the bottom of the faceplate. 
	*	Screws should enter the square nuts you placed into the vial holder.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Putting it all together" images={["user-guide/hardware-assembly/screw_top_bottom_gpio.jpg", "user-guide/hardware-assembly/screw_top_bottom.jpg"]}>

1.	Place the top assembly onto the bottom Raspberry Pi/HAT. 
	*	The <Highlight color={colors.blue}>GPIO pins</Highlight> align with the side notch of the faceplate.
2.	Using the <Highlight color={colors.orange}>6 mm nylon screws</Highlight>, attach the top and bottom pieces in each corner.
3.	Continue to the [next page](/user-guide/optics-assembly).


</AssemblyInstructionBlock>
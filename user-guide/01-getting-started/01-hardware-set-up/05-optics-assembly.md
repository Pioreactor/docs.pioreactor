---
title: Connect the optics system
slug: /optics
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';

import * as colors from '@site/src/components/constants';

<AssemblyInstructionBlock title="Step 1: Connecting heater and stirring to the HAT" images={["heating_connection.jpg","stirring_connection.jpg"]}>

1.	Open the <Highlight color={colors.orange}>flat flex cable connector on the HAT</Highlight> by pulling the tabs outward, like previously.
2.	Insert the flex cable copper-side up. 
3.	Push the tabs inward to secure the flex cable.
4.	Insert the <Highlight color={colors.green}>stirring power connector into PWM channel 1</Highlight>.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Optic cables assembly" images={["three_bulbs.jpg","cable_channels.jpg"]}>

1.	You will need PD cables (2x; dark bulbs) and IR cable (1x; clear bulb). 
2.	Insert the connector of either <Highlight color={colors.blue}>PD cable into PD channel 1</Highlight>.
3.	Place the connector of the <Highlight color={colors.blue}>other PD cable into PD channel 2</Highlight>.
4.	Insert the connector of the <Highlight color={colors.red}>IR cable into channel A</Highlight>.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Inserting the bulbs into the vial holder" images={["pocket_caps.jpg", "bulb_in_pocket.jpg"]}>

1.	Insert the bulb of the PD cable in **channel 1** into the <Highlight color={colors.red}>pocket labeled **REF**,</Highlight> as seen in the image. 
	*	Bend the bulb's leads 90 degrees, as seen.
	*	If needed, secure it in place with one of the <Highlight color={colors.blue}>8 pocket caps.</Highlight> 
2.	Insert the bulb of the PD cable in **channel 2** into the <Highlight color={colors.magenta}>pocket labeled **90°.**</Highlight>
3.	Insert the bulb of the IR cable in **channel A** into the pocket labeled **IR**.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Add the rest of the pocket caps" images={["pockets_with_caps.jpg","finished_pio.jpg"]}>

1.	Push all remaining LED pocket caps onto each pocket.
2.	Your Pioreactor is complete! 🚀 You can now insert your vial and begin installing the [software](/user-guide/software-set-up).

</AssemblyInstructionBlock>

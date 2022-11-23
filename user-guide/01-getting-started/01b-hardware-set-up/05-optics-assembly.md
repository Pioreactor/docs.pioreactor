---
title: Connect the optics system
slug: /optics-assembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';

import * as colors from '@site/src/components/constants';

<AssemblyInstructionBlock title="Step 1: Connecting heater and stirring to the HAT" images={["user-guide/hardware-assembly/heating_connection.jpg","user-guide/hardware-assembly/stirring_connection.jpg"]}>

1.  Open the <Highlight color={colors.orange}>flat flex cable connector</Highlight> on the HAT by pulling the tabs outward, like previously.
2.  Insert the flex cable copper-side up.
3.  Push the tabs inward to secure the flex cable.
4.  Insert the stirring power connector into <Highlight color={colors.green}>PWM **channel 1**</Highlight> (unlabelled).

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Optic cables assembly" images={["user-guide/hardware-assembly/three_bulbs.jpg","user-guide/hardware-assembly/cable_channels.jpg"]}>

1.  You will need PD cables (2x; dark bulbs) and IR cable (1x; clear bulb).
2.  Insert the connector of either <Highlight color={colors.blue}>PD cable into PD **channel 1**</Highlight>.
3.  Place the connector of the <Highlight color={colors.blue}>other PD cable into PD **channel 2**</Highlight>.
4.  Insert the connector of the <Highlight color={colors.red}>IR cable into **channel A**</Highlight>.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Inserting the bulbs into the vial holder" images={["user-guide/hardware-assembly/pocket_caps.jpg", "user-guide/hardware-assembly/bulb_in_pocket.jpg"]}>

1.  Insert the bulb of the PD cable in **channel 1** into the <Highlight color={colors.red}>pocket labeled **REF**</Highlight>, as seen in the image.
2. Bend the bulb's leads 90 degrees, as seen.
    *   If needed, secure it in place with one of the 8 <Highlight color={colors.blue}>pocket caps</Highlight>.
3.  Insert the bulb of the PD cable in **channel 2** into the <Highlight color={colors.magenta}>pocket labeled **90°**</Highlight>. Bend the leads 90 degrees.
4.  Insert the bulb of the IR cable in **channel A** into the pocket labeled **IR**. Bend the leads 90 degrees.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Add the rest of the pocket caps" images={["user-guide/hardware-assembly/pockets_with_caps.jpg","user-guide/hardware-assembly/finished_pio.jpg"]}>

1.  Push all remaining LED pocket caps onto each pocket.
2.  Your Pioreactor is complete! 🚀 You can now insert your vial and begin installing the [software](/user-guide/software-set-up).

</AssemblyInstructionBlock>

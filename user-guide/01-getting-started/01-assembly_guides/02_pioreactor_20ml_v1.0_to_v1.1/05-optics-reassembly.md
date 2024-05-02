---
title: Connecting the optics
slug: /v11-upgrade-optics-assembly
hide_table_of_contents: true
pagination_next: null
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';

import * as colors from '@site/src/components/constants';


<AssemblyInstructionBlock title="Step 1: Insert optic cables into channels" images={["user-guide/hardware-assembly/upgrade-version/led-and-pd.jpg","user-guide/hardware-assembly/upgrade-version/led-to-channel-a.png", "user-guide/hardware-assembly/upgrade-version/pds-to-channel.png"]}>

1.  You will need both PD cables (dark bulbs) and IR cable (clear bulb).
2.  Insert the connector of the <Highlight color={colors.magenta}>IR cable</Highlight> into **channel A** (labelled on the faceplate).
3.  Insert the connector of either <Highlight color={colors.red}>PD cable</Highlight> into **PD channel 1** (labelled on the faceplate).
4.  Place the connector of the other <Highlight color={colors.blue}>PD cable</Highlight> into **PD channel 2**.

</AssemblyInstructionBlock>

-----


<AssemblyInstructionBlock title="Step 2: Secure bulbs into pockets" images={[ "user-guide/hardware-assembly/upgrade-version/led-to-ir.png", "user-guide/hardware-assembly/upgrade-version/pd-to-ref-and-90.png", "user-guide/hardware-assembly/upgrade-version/fasten-with-caps.png"]}>

1. Insert the bulb of the <Highlight color={colors.magenta}>IR cable</Highlight> into the pocket labeled <Highlight color={colors.magenta}>IR</Highlight>.
2. Insert the bulb of the <Highlight color={colors.red}>PD cable</Highlight> in channel 1 into the pocket labeled <Highlight color={colors.red}>REF</Highlight>.
3. Insert the bulb of the <Highlight color={colors.blue}>PD cable</Highlight> in channel 2 into the pocket labeled <Highlight color={colors.blue}>90°</Highlight>.

:::caution
Avoid over-stressing the leads, or applying too much force too quickly. After bending once, it's ill-advised to bend them again.
:::

7. Secure all bulbs with LED caps. 
8. Push all remaining LED caps onto each pocket.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 3: You're done!" images={["user-guide/hardware-assembly/upgrade-version/finished-upgraded-version.png", "user-guide/hardware-assembly/upgrade-version/config.png"]}>

Your new v1.1 Pioreactor is now assembled! Let's configure the software, too.

1. Plug in your Pioreactor.
2. In the Pioreactor's specific config.ini (not the shared one), add the following configuration:
   ```
   [pioreactor]
   model=pioreactor_20ml
   version=1.1
   ```
3. Optional: we recommend rebooting the Pioreactor.
4. Optional: perform a [self-test](/user-guide/running-self-test) to confirm everything works as expected.

</AssemblyInstructionBlock>
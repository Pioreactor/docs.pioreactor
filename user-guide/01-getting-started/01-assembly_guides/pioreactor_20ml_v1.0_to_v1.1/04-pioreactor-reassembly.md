---
title: Reassembling the Pioreactor
slug: /pioreactor-reassembly
hide_table_of_contents: true
pagination_next: null

---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<AssemblyInstructionBlock title="Step 1: Complete the top assembly" images={[ "user-guide/hardware-assembly/upgrade-version/fan-onto-top-faceplate.png", "user-guide/hardware-assembly/upgrade-version/completed-fan-assembly.png", "user-guide/hardware-assembly/upgrade-version/join-vial-holder-and-fan.png", "user-guide/hardware-assembly/upgrade-version/flat-flex-follows-arrow.png", "user-guide/hardware-assembly/upgrade-version/tighten-30mm-screws.png"] }>

1. Push the <Highlight color={colors.red}>fan onto the top faceplate</Highlight>, orienting it such that the wire is pointing towards the button. 
2. Place the vial holder on top of the <Highlight color={colors.green}>ends of the M3 30mm screws</Highlight>. The screw ends should fit into four holes on the bottom of the vial holder. The flat flex cable should follow the <Highlight color={colors.orange}>arrow on the faceplate</Highlight>.
3. Holding it together, finish screwing the <Highlight color={colors.blue}>M3 30mm screws</Highlight> on the bottom of the faceplate. The screws will enter square nuts in the vial holder. Do not overtighten.

:::caution
You should not feel resistance when tightening the screws into the square nuts. If you encounter resistance, unscrew and inspect the screw for any plastic debris. 
:::

4. The screw heads will be flush with the faceplate, and there should be no screw threads showing between the vial holder and the faceplate.


</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 2: Button extension" images={["user-guide/hardware-assembly/upgrade-version/apply-force-button-extension.png", "user-guide/hardware-assembly/upgrade-version/completed-button-extension.png"]}>

The top faceplate now comes with a button extension to provide easier access when pushing the button. 

1. Flip over the assembly.
2. Insert the 10mm screw into the hole under the button extension.
3. Place <Highlight color={colors.red}>one finger behind the extension</Highlight> and <Highlight color={colors.magenta}>apply force and torque</Highlight> with the other hand until the screw is secure in the hole. Once established, a screwdriver can finish the job. Tightening until you feel resistance.

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 3: Putting it all together" images={["user-guide/hardware-assembly/upgrade-version/attach-assembly-to-hat.png", "user-guide/hardware-assembly/upgrade-version/screw-assembly-to-hat.png",
"user-guide/hardware-assembly/upgrade-version/fasten-heater-cable.png", "user-guide/hardware-assembly/upgrade-version/connect-pwm-one.png"]}>

1. Place the vial holder assembly onto the <Highlight color={colors.blue}>Raspberry Pi/HAT's corners</Highlight>. The GPIO pins align with the side notch of the faceplate.
2. Using the <Highlight color={colors.red}>M2.5 6mm screws</Highlight>, attach the top and bottom pieces in each corner.
3. Check that the screw for the button extension is in the right position, and not compressing the button below prematurely. You should feel a "click" when you depress the button extension.
4. Open the <Highlight color={colors.orange}>flat flex cable connector</Highlight> on the HAT by pulling the tabs outward, like done previously. Insert the flex cable copper-side up.
5. <Highlight color={colors.green}>Push the tabs inward</Highlight> to secure the flex cable.
6. Insert the stirring power connector into <Highlight color={colors.magenta}>PWM channel 1</Highlight> (unlabelled).


</AssemblyInstructionBlock>



<AssemblyInstructionBlock title="Step 4: Assembling the optics system" images={["user-guide/hardware-assembly/upgrade-version/led-to-channel-a.png", "user-guide/hardware-assembly/upgrade-version/pds-to-channel.png", "user-guide/hardware-assembly/upgrade-version/led-to-ir.png", "user-guide/hardware-assembly/upgrade-version/pd-to-ref-and-90.png", "user-guide/hardware-assembly/upgrade-version/fasten-with-caps.png"]}>

1. Insert the connector of the <Highlight color={colors.magenta}>IR cable</Highlight> into <Highlight color={colors.magenta}>channel A</Highlight> (labelled on the faceplate).
2. Insert the connector of <Highlight color={colors.red}>either PD cable</Highlight> into <Highlight color={colors.red}>PD channel 1</Highlight> (labelled on the faceplate).
3. Place the connector of the <Highlight color={colors.blue}> other PD cable</Highlight> into <Highlight color={colors.blue}>PD channel 2.</Highlight>
4. Insert the bulb of the <Highlight color={colors.magenta}>IR cable</Highlight> into the pocket labeled <Highlight color={colors.magenta}>IR</Highlight>.
5. Insert the bulb of the <Highlight color={colors.red}>PD cable</Highlight> in channel 1 into the pocket labeled <Highlight color={colors.red}>REF</Highlight>.
6. Insert the bulb of the <Highlight color={colors.blue}>PD cable</Highlight> in channel 2 into the pocket labeled <Highlight color={colors.blue}>90°</Highlight>.

:::caution
Avoid over-stressing the LED/PD leads, or applying too much force too quickly.
:::

7. Secure all bulbs with LED caps. 
7. Push all remaining LED caps onto each pocket.

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 5: You're done!" images={["user-guide/hardware-assembly/upgrade-version/finished-upgraded-version.png", "user-guide/hardware-assembly/upgrade-version/config.png"]}>

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

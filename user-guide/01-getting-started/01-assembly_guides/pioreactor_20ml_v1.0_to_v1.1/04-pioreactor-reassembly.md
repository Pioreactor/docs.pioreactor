---
title: Reassembling the Pioreactor
slug: /pioreactor-reassembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<AssemblyInstructionBlock title="Step 1: Complete the top assembly" images={[ "user-guide/hardware-assembly/upgrade-version/fan-onto-top-faceplate.png", "user-guide/hardware-assembly/upgrade-version/completed-fan-assembly.png", "user-guide/hardware-assembly/upgrade-version/join-vial-holder-and-fan.png", "user-guide/hardware-assembly/upgrade-version/flat-flex-follows-arrow.png", "user-guide/hardware-assembly/upgrade-version/tighten-30mm-screws.png"] }>

1. Push the <Highlight color={colors.red}>fan onto the top faceplate</Highlight>, orienting it such that the wire is pointing towards the button. 
2. Place the vial holder on top of the <Highlight color={colors.green}>four ends of the 30mm screws</Highlight>. The screw ends should fit into four holes on the bottom of the vial holder. The flat flex cable should follow the <Highlight color={colors.orange}>arrow on the faceplate</Highlight>.
3. Holding it together, finish screwing the <Highlight color={colors.blue}>silver screws</Highlight> on the bottom of the faceplate. The screws will enter square nuts in the vial holder. Do not overtighten.

:::caution
You should not feel resistance when tightening the screws into the square nuts. If you encounter resistance, unscrew and inspect the screw for any plastic debris. 
:::

4. The screw heads will be flush with the faceplate, and there should be no screw threads showing between the vial holder and the faceplate.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 2: Button extension" images={["user-guide/hardware-assembly/upgrade-version/apply-force-button-extension.png", "user-guide/hardware-assembly/upgrade-version/completed-button-extension.png"]}>

The top faceplate now comes with a button extension to provide easier access when pushing the button. 

1. Flip over the assembly.
2. Insert the 10mm screw into the hole under the button extension.
3. Place <Highlight color={colors.red}>one finger behind the extension</Highlight> and <Highlight color={colors.magenta}>apply torque with the other hand</Highlight> until the screw is secure in the hole. This may require a lot of force.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 3: Putting it all together" images={["user-guide/hardware-assembly/upgrade-version/attach-assembly-to-hat.png", "user-guide/hardware-assembly/upgrade-version/screw-assembly-to-hat.png",
"user-guide/hardware-assembly/upgrade-version/fasten-heater-cable.png", "user-guide/hardware-assembly/upgrade-version/connect-pwm-one.png"]}>

1. <Highlight color={colors.blue}>Place the vial holder assembly onto the Raspberry Pi/HAT</Highlight>. The GPIO pins align with the side notch of the faceplate.
2. Using the <Highlight color={colors.red}>6mm screws</Highlight>, attach the top and bottom pieces in each corner.
3. Check that the screw for the button extension is in the right position. 
4. Open the <Highlight color={colors.orange}>flat flex cable connector</Highlight> on the HAT by pulling the tabs outward, like done previously. Insert the flex cable copper-side up.
5. <Highlight color={colors.green}>Push the tabs inward</Highlight> to secure the flex cable.
6. Insert the stirring power connector into <Highlight color={colors.magenta}>PWM channel 1</Highlight> (unlabelled).

</AssemblyInstructionBlock>

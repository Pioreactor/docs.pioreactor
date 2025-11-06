---
title: Attaching the wetware to the HAT asssembly
slug: /20ml-v15-putting-it-together
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/40ml-v15/fan-pieces.jpg"]}>

1. For this version, you will need:

  * <Highlight color={colors.red}>Fan and top faceplate</Highlight> (will have 4x 30mm screws in it)
  * <Highlight color={colors.orange}>M2.5 10mm screw (1x)</Highlight>

</AssemblyInstructionBlock>


-----

<AssemblyInstructionBlock title="Step 2: Securing the vial holder" images={["user-guide/hardware-assembly/20ml-v15/align-fan-and-holder.jpg", "user-guide/hardware-assembly/20ml-v15/direction-of-flex.jpg", "user-guide/hardware-assembly/20ml-v15/screw-in-fan.jpg"]}>


1. Place the vial holder on top of the <Highlight color={colors.green}>four ends of the 30mm screws</Highlight>. The screw ends should fit into four holes on the bottom of the vial holder. The flat flex cable should follow the <Highlight color={colors.orange}>arrow on the faceplate</Highlight>.
2. Holding it together, finish screwing the <Highlight color={colors.blue}>M3 30mm screws</Highlight> on the bottom of the faceplate. The screws will enter square nuts in the vial holder. Do not overtighten.

   :::caution
   You should not feel resistance when tightening the screws into the square nuts. If you encounter resistance, unscrew partially and inspect the end of the screw for any plastic debris.
   :::

3. The screw heads will be flush with the faceplate, and there should be no screw threads showing between the vial holder and the faceplate.


</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Button extension" images={["user-guide/hardware-assembly/upgrade-version/apply-force-button-extension.png", "user-guide/hardware-assembly/upgrade-version/completed-button-extension.png"]}>

The top faceplate comes with a button extension to provide easier access to pushing the button.

1. Flip over the assembly.
2. Insert the 10mm screw into the hole under the button extension.
3. Place <Highlight color={colors.red}>one finger behind the extension</Highlight> and <Highlight color={colors.magenta}>apply torque with the other hand</Highlight> until the screw is secure in the hole. This may require some force. Once established, you can use a screwdriver to finish screwing it in until you feel sufficient resistance. Don't over-tighten!

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Putting it all together" images={["user-guide/hardware-assembly/40ml-v15/place-top-on-hat.jpg", "user-guide/hardware-assembly/40ml-v15/connect-top-and-hat.jpg", "user-guide/hardware-assembly/upgrade-version/fasten-heater-cable.png", "user-guide/hardware-assembly/40ml-v15/fan-pwm.jpg"]}>

1. Place the vial holder assembly onto the <Highlight color={colors.blue}>Raspberry Pi/HAT's corners</Highlight>. The GPIO pins align with the side notch of the faceplate.
2. Using the <Highlight color={colors.red}>M2.5 6mm screws</Highlight>, attach the top and bottom pieces in each corner.
3. Check that the screw for the button extension is in the right position and not prematurely compressing the button under it (you should feel a "click" when pressing the button extension). Remove the top and screw in the M2.5 10mm screw more if you detect a problem.
4. Open the <Highlight color={colors.orange}>flat flex cable connector</Highlight> on the HAT by pulling the tabs outward, like done previously. Insert the flex cable copper-side up.
5. <Highlight color={colors.green}>Push the tabs inward</Highlight> to secure the flex cable.
6. Insert the stirring power connector into <Highlight color={colors.magenta}>PWM channel 1</Highlight> (unlabelled).
7. Continue to the next page. 


</AssemblyInstructionBlock>
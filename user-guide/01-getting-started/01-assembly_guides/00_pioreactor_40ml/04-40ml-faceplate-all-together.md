---
title: Attaching the wetware to the HAT asssembly
slug: /40ml-putting-it-together
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="a_or_b" label="Top faceplate version 1" default>

<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/upgrade-version/stirring-parts.png"]}>

:::note
Newer versions of the top faceplate will come with <Highlight color={colors.magenta}>risers (2x)</Highlight> to secure the fan to the faceplate. See _Version 2_ tab for assembly instructions.
:::

1. For this version, you will need:

  * <Highlight color={colors.blue}>Fan</Highlight>
  * <Highlight color={colors.red}>Top faceplate</Highlight> (will have 4x 30mm screws in it)
  * <Highlight color={colors.orange}>M2.5 10mm screw (1x)</Highlight>


:::info
The fan and top faceplate come assembled - leave them together. If they are not assembled, attach the fan onto the faceplate with the cable oriented toward the side labelled "PWM".
:::

</AssemblyInstructionBlock>


-----

<AssemblyInstructionBlock title="Step 2: Securing the vial holder" images={["user-guide/hardware-assembly/upgrade-version/fan-onto-top-faceplate.png", "user-guide/hardware-assembly/upgrade-version/completed-fan-assembly.png", "user-guide/hardware-assembly/40ml/align-fan-and-holder.png", "user-guide/hardware-assembly/40ml/direction-of-flex.png", "user-guide/hardware-assembly/40ml/screw-in-fan.png"]}>

1. Push the <Highlight color={colors.red}>fan onto the top faceplate</Highlight>, orienting it such that the wire is pointing towards the button. 
2. Place the vial holder on top of the <Highlight color={colors.green}>four ends of the 30mm screws</Highlight>. The screw ends should fit into four holes on the bottom of the vial holder. The flat flex cable should follow the <Highlight color={colors.orange}>arrow on the faceplate</Highlight>.
3. Holding it together, finish screwing the <Highlight color={colors.blue}>M3 30mm screws</Highlight> on the bottom of the faceplate. The screws will enter square nuts in the vial holder. Do not overtighten.

   :::caution
   You should not feel resistance when tightening the screws into the square nuts. If you encounter resistance, unscrew partially and inspect the end of the screw for any plastic debris.
   :::

4. The screw heads will be flush with the faceplate, and there should be no screw threads showing between the vial holder and the faceplate.


</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Button extension" images={["user-guide/hardware-assembly/upgrade-version/apply-force-button-extension.png", "user-guide/hardware-assembly/upgrade-version/completed-button-extension.png"]}>

The top faceplate comes with a button extension to provide easier access to pushing the button.

1. Flip over the assembly.
2. Insert the 10mm screw into the hole under the button extension.
3. Place <Highlight color={colors.red}>one finger behind the extension</Highlight> and <Highlight color={colors.magenta}>apply torque with the other hand</Highlight> until the screw is secure in the hole. This may require some force. Once established, you can use a screwdriver to finish screwing it in under you feel sufficient resistance. Don't over-tighten!

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Putting it all together" images={["user-guide/hardware-assembly/40ml/connect-top-and-hat.png", "user-guide/hardware-assembly/upgrade-version/screw-assembly-to-hat.png",
"user-guide/hardware-assembly/upgrade-version/fasten-heater-cable.png", "user-guide/hardware-assembly/upgrade-version/connect-pwm-one.png"]}>

1. Place the vial holder assembly onto the <Highlight color={colors.blue}>Raspberry Pi/HAT's corners</Highlight>. The GPIO pins align with the side notch of the faceplate.
2. Using the <Highlight color={colors.red}>M2.5 6mm screws</Highlight>, attach the top and bottom pieces in each corner.
3. Check that the screw for the button extension is in the right position and not prematurely compressing the button under it (you should feel a "click" when pressing the button extension). Temove the top and screw in the M2.5 10mm screw more if you detect a problem.
4. Open the <Highlight color={colors.orange}>flat flex cable connector</Highlight> on the HAT by pulling the tabs outward, like done previously. Insert the flex cable copper-side up.
5. <Highlight color={colors.green}>Push the tabs inward</Highlight> to secure the flex cable.
6. Insert the stirring power connector into <Highlight color={colors.magenta}>PWM channel 1</Highlight> (unlabelled).
7. Continue to the next page. 


</AssemblyInstructionBlock>


  </TabItem>
  <TabItem value="zero" label="Top faceplate version 2">

<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/upgrade-version/necessary-parts-riser.png"]}>

1. For this version, you will need:

  * <Highlight color={colors.blue}>Fan</Highlight>
  * <Highlight color={colors.red}>Top faceplate</Highlight>
  * <Highlight color={colors.orange}>M2.5 10mm screw (1x)</Highlight>
  * <Highlight color={colors.green}>30mm screws (4x)</Highlight>
  * <Highlight color={colors.magenta}>Risers (2x)</Highlight>

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Attaching the fan to the top faceplate" images={["user-guide/hardware-assembly/upgrade-version/screws-halfway.png", "user-guide/hardware-assembly/upgrade-version/fan-to-faceplate-orientation.png", "user-guide/hardware-assembly/upgrade-version/riser-placement.png", "user-guide/hardware-assembly/upgrade-version/riser-sandwich.png", "user-guide/hardware-assembly/upgrade-version/completed-fan-v2.png"]}>

1. Screw the <Highlight color={colors.green}>30mm screws</Highlight> about halfway into the bottom of the top faceplate.
2. Push the <Highlight color={colors.red}>fan onto the top faceplate</Highlight>, orienting it such that the wire is pointing towards the button. 
3. Align a <Highlight color={colors.magenta}>riser</Highlight> onto the edge of the fan, such that the fan is sandwiched between it and the top faceplate. Place it along the same edge as the PWM labels. 
4. Holding the stack firmly, screw the 30mm screws into the risers such that screws poke through the top of the riser by ~2-3 mm. Repeat for the second riser on the opposite side of the fan. 

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Securing the vial holder" images={["user-guide/hardware-assembly/40ml/align-fan-and-holder.png", "user-guide/hardware-assembly/40ml/direction-of-flex.png", "user-guide/hardware-assembly/40ml/screw-in-fan.png"]}>


1. Place the vial holder on top of the <Highlight color={colors.green}>four ends of the 30mm screws</Highlight>. The screw ends should fit into four holes on the bottom of the vial holder. The flat flex cable should follow the <Highlight color={colors.orange}>arrow on the faceplate</Highlight>.
2. Holding it together, finish screwing the <Highlight color={colors.blue}>M3 30mm screws</Highlight> on the bottom of the faceplate. The screws will enter square nuts in the vial holder. Do not overtighten.

   :::caution
   You should not feel resistance when tightening the screws into the square nuts. If you encounter resistance, unscrew partially and inspect the end of the screw for any plastic debris.
   :::

3. The screw heads will be flush with the faceplate, and there should be no screw threads showing between the vial holder and the faceplate.


</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Button extension" images={["user-guide/hardware-assembly/upgrade-version/apply-force-button-extension.png", "user-guide/hardware-assembly/upgrade-version/completed-button-extension.png"]}>

The top faceplate comes with a button extension to provide easier access to pushing the button.

1. Flip over the assembly.
2. Insert the 10mm screw into the hole under the button extension.
3. Place <Highlight color={colors.red}>one finger behind the extension</Highlight> and <Highlight color={colors.magenta}>apply torque with the other hand</Highlight> until the screw is secure in the hole. This may require some force. Once established, you can use a screwdriver to finish screwing it in under you feel sufficient resistance. Don't over-tighten!

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 5: Putting it all together" images={["user-guide/hardware-assembly/40ml/connect-top-and-hat.png", "user-guide/hardware-assembly/upgrade-version/screw-assembly-to-hat.png",
"user-guide/hardware-assembly/upgrade-version/fasten-heater-cable.png", "user-guide/hardware-assembly/upgrade-version/connect-pwm-one.png"]}>

1. Place the vial holder assembly onto the <Highlight color={colors.blue}>Raspberry Pi/HAT's corners</Highlight>. The GPIO pins align with the side notch of the faceplate.
2. Using the <Highlight color={colors.red}>M2.5 6mm screws</Highlight>, attach the top and bottom pieces in each corner.
3. Check that the screw for the button extension is in the right position and not prematurely compressing the button under it (you should feel a "click" when pressing the button extension). Temove the top and screw in the M2.5 10mm screw more if you detect a problem.
4. Open the <Highlight color={colors.orange}>flat flex cable connector</Highlight> on the HAT by pulling the tabs outward, like done previously. Insert the flex cable copper-side up.
5. <Highlight color={colors.green}>Push the tabs inward</Highlight> to secure the flex cable.
6. Insert the stirring power connector into <Highlight color={colors.magenta}>PWM channel 1</Highlight> (unlabelled).
7. Continue to the next page. 


</AssemblyInstructionBlock>

  </TabItem>
</Tabs>
---
title: Assembly of the XR
slug: /40ml-v15-to-XR-upgrade-assembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<AssemblyInstructionBlock title="Step 1: Parts needed" images={["user-guide/hardware-assembly/upgrade_XR/parts-needed-1.jpg", "user-guide/hardware-assembly/upgrade_XR/parts-needed-2.jpg"]}>

1. You will receive the following items in your upgrade kit:

* <Highlight color={colors.magenta}>1x Eye-spy</Highlight> (address: 0x48)
* <Highlight color={colors.green}>1x Eye-spy</Highlight> (address: 0x4B)
* <Highlight color={colors.red}>1x 50mm STEMMA-QT wire</Highlight>
* <Highlight color={colors.blue}>1x 100mm STEMMA-QT wire</Highlight>
* <Highlight color={colors.orange}>1x Optics cover</Highlight>
* <Highlight color={colors.teal}>4x 8mm screws</Highlight>


</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 2: Insert the o-ring" images={["user-guide/hardware-assembly/upgrade_XR/o-ring-groove.jpg", "user-guide/hardware-assembly/upgrade_XR/insert-o-ring.jpg"]}>

1. The XR top vial holder has <Highlight color={colors.green}>a groove within the body</Highlight> where the #024 O-ring sits. Carefully insert the O-ring using your fingers. Make sure to not twist the O-ring.
2. Run your finger inside the vial holder, pushing the O-ring into place to ensure a snug fit.



</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 2: Attach the eye-spys" images={["user-guide/hardware-assembly/upgrade_XR/4B-top-solder-to-45.jpg", "user-guide/hardware-assembly/upgrade_XR/white-mark-to-ref.jpg", "user-guide/hardware-assembly/upgrade_XR/no-mark-to-90.jpg", "user-guide/hardware-assembly/upgrade_XR/48-bottom-solder-to-135.jpg","user-guide/hardware-assembly/upgrade_XR/twist-top-onto-bottom.jpg",]}>

1. Identify the <Highlight color={colors.red}>eye-spy with the address 0x4B</Highlight>. Look for the soldered bulb next to the top address. 
2. Place the optics cover over the eye-spy, and secure it in the 45 degree pocket with 4x 8mm screws.
3. Identify the <Highlight color={colors.blue}>eye-spy with white mark in the upper left corner</Highlight>. Secure it into the REF pocket with the cover and 4x 8mm screws.
4. Identify the <Highlight color={colors.magenta}>unmarked eye-spy with no soldered address</Highlight>. Secure it into the 90 degree pocket with the cover and 4x 8mm screws. 
5. Last, the <Highlight color={colors.orange}>eye-spy with the address 0x48</Highlight> goes into the 135 degree pocket. Look for the soldered bulb next to the bottom address. Secure it with the cover and 4x 8mm screws.
6. Twist the top vial holder onto the bottom assembly. 

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 4: Attach the LED bulb" images={["user-guide/hardware-assembly/upgrade_XR/flat-side-of-bulb.jpg", "user-guide/hardware-assembly/upgrade_XR/insert-bulb-into-ir.jpg", "user-guide/hardware-assembly/upgrade_XR/twist-bulb-into-place.jpg"]}>

1. Notice the <Highlight color={colors.green}>flat side of the LED bulb</Highlight>.
2. In the top vial holder, there is a <Highlight color={colors.teal}>flat protrusion</Highlight> in front of the IR pocket.
3. With the IR cable <Highlight color={colors.magenta}>pointing downward</Highlight>, gently insert the IR bulb into the pocket. 
3. Gently <Highlight color={colors.red}>twist</Highlight> the LED cable to the left. The LED bulb should feel secured in the pocket. Cover it with the LED cap. 

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 5: Connect the eye-spys" images={["user-guide/hardware-assembly/upgrade_XR/connect-100mm-to-45.jpg", "user-guide/hardware-assembly/upgrade_XR/connect-100mm-45-to-ref.jpg", "user-guide/hardware-assembly/upgrade_XR/connect-50mm-ref-to-90.jpg", "user-guide/hardware-assembly/upgrade_XR/connect-50mm-90-to-135.jpg"]}>

1. A 100mm STEMMA-QT wire should be still connected to the HAT. <Highlight color={colors.magenta}>Connect the other end to the leftmost, 45 degree eye-spy</Highlight>. Pay attention to the wire orientation: the yellow wire should be at the bottom.

:::caution
Do not push the wire connector in at an angle, as it can bend the metal leads in the eye-spy connector. 
:::

2. Using the other 100mm STEMMA-QT wire, <Highlight color={colors.blue}>connect the 45 degree eye-spy to REF</Highlight>. Note the wire orientation. 

3. Use a 50mm STEMMA-QT wire to connect the <Highlight color={colors.red}>REF eye-spy to the 90 degree eye-spy</Highlight>.

3. Finally, use the last 50mm STEMMA-QT to connect the <Highlight color={colors.green}>90 degree eye-spy to the 135 degree eye-spy</Highlight>. All eye-spys should now be daisy chained to each other. 

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 6: XR assembly completed" images={["user-guide/hardware-assembly/upgrade_XR/completed-40ml-xr.jpg"]}>

Your new 40ml Pioreactor XR is now assembled!

1. Power on your Pioreactor again.
2. Next, we need to adjust some settings in the software.

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 7: Software" images={["user-guide/hardware-assembly/upgrade_XR/choose_xr_model.png", "user-guide/hardware-assembly/upgrade_XR/update_xr_config.png"]}>

1. The required software version is 26.1.30 or later. [Here's how to update](/user-guide/updating-software).

2. On the _Inventory_ page, find the Pioreactor you upgraded, select _Model_, and choose the XR version.

3. On the _Edit Config_ page, add the following to section `[od_config.photodiode_channel]`

   ```
   1=REF
   2=90
   3=135
   4=45
   ```
4. Next, read the docs on how to [fuse the sensors into a single biomass signal](/user-guide/od-fused-biomass).


</AssemblyInstructionBlock>


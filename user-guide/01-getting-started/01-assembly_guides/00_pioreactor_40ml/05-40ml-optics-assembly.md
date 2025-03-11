---
title: Connect the optics system
slug: /40ml-optics-assembly
hide_table_of_contents: true
pagination_next: null
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';

import * as colors from '@site/src/components/constants';


<AssemblyInstructionBlock title="Step 1: Connect the IR cable (IR → Channel A) " images={["user-guide/hardware-assembly/upgrade-version/led-and-pd.jpg","user-guide/hardware-assembly/upgrade-version/led-to-channel-a.png", "user-guide/hardware-assembly/40ml/led-to-ir.png", "user-guide/hardware-assembly/40ml/ir-with-cap.png"]}>

1.  You will need both PD cables (dark bulbs) and IR cable (clear bulb). _Note that PD cables are now 3.5" long instead of 4"_. 

:::tip
Inspect each LED and PD to confirm that their leads are not touching each other.
:::

2.  Insert the connector of the <Highlight color={colors.magenta}>IR cable</Highlight> into **channel A** (labelled on the faceplate).
3. Insert the bulb of the IR cable into the **pocket labeled IR**. 
4. _Slowly_ bend the bulb's leads 90 degrees, as seen. 

:::caution
Avoid over-stressing the leads, or applying too much force too quickly. After bending once, it's ill-advised to bend them again. 
:::

5. Secure the bulb in place with an LED cap. 


</AssemblyInstructionBlock>

-----


<AssemblyInstructionBlock title="Step 2: Connect PD cable (REF → Channel 1) " images={[ "user-guide/hardware-assembly/40ml/pd-1.png", "user-guide/hardware-assembly/40ml/pd-in-ref.png", "user-guide/hardware-assembly/40ml/ref-with-cap.png"]}>

1. Plug the connector of <Highlight color={colors.red}>one PD cable</Highlight> into **channel 1**.
2. Insert the bulb of that cable into the **REF pocket**. 
3. _Slowly_ bend the bulb's leads 90 degrees, as seen.

:::caution
Avoid over-stressing the leads, or applying too much force too quickly. After bending once, it's ill-advised to bend them again.
:::

4. Secure the bulb with an LED cap.

</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 3: Connect PD cable (90° → Channel 2)" images={["user-guide/hardware-assembly/40ml/direction-of-pd-2.png", "user-guide/hardware-assembly/40ml/secure-90-bend-cable.png", "user-guide/hardware-assembly/40ml/completed-optics.png", "user-guide/hardware-assembly/40ml/40ml.png"]}>

1. Take a moment to orient the <Highlight color={colors.blue}>other PD cable</Highlight> such that it bends in the right direction for the black connector to insert into **channel 2**. See the image for more detail. 
2. In this orientation, **_but without connecting the cable to the channel_**, insert the bulb into the pocket labeled 90°. 
3. Bend the leads gently in the direction of the channel. 
4. Secure the bulb with an LED cap. 
5. Plug the connector into **channel 2**. 
6. Push all remaining LED caps onto each pocket.


</AssemblyInstructionBlock>

-------------------

<AssemblyInstructionBlock title="Step 4: You're done!" images={["user-guide/hardware-assembly/40ml/40ml-and-vial.png"]}>


Your new 40ml Pioreactor is now assembled! 🚀

Next: begin installing the [software](/user-guide/software-set-up).


</AssemblyInstructionBlock>
---
title: Connect the optics system
slug: /40ml-optics-assembly
hide_table_of_contents: true
pagination_next: null
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';

import * as colors from '@site/src/components/constants';


<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/40ml/optics/optic-parts-needed.png"]}>

1.  You will need:
* <Highlight color={colors.blue}>PD cables (2x)</Highlight>
* <Highlight color={colors.magenta}>IR cable (1x)</Highlight>
* <Highlight color={colors.orange}>LED caps</Highlight>

:::tip
Inspect each IR and PD to confirm that their leads are not touching each other.
:::


</AssemblyInstructionBlock>


-------


<AssemblyInstructionBlock title="Step 2: Connect the IR cable (IR → Channel A) " images={["user-guide/hardware-assembly/40ml/optics/x1-x2.png", "user-guide/hardware-assembly/40ml/optics/ir-bulb.png", "user-guide/hardware-assembly/40ml/optics/ir-bend-90.png", "user-guide/hardware-assembly/40ml/optics/ir-connected.png"]}>

1. Secure LED caps over the <Highlight color={colors.orange}>X1 and X2 pockets</Highlight> on the vial holder. 
2. With the tab of the black connector pointed left, insert the bulb of the IR cable into the <Highlight color={colors.magenta}>pocket labeled IR</Highlight>. See image.
3. _Slowly_ bend the bulb's leads 90 degrees towards the left. The black connector tab should be facing away. 

:::caution
Avoid over-stressing the leads, or applying too much force too quickly. After bending once, it's ill-advised to bend them again. 
:::

4. Secure the bulb with an LED cap.
5. Insert the connector of the IR cable into <Highlight color={colors.magenta}>channel A</Highlight> (labelled on the faceplate).


</AssemblyInstructionBlock>

-----


<AssemblyInstructionBlock title="Step 3: Connect PD cable (REF → Channel 1) " images={[ "user-guide/hardware-assembly/40ml/optics/ref-bend-90.png", "user-guide/hardware-assembly/40ml/optics/ref-connected.png", "user-guide/hardware-assembly/40ml/optics/ref-capped.png"]}>


1. With the tab of the black connector pointed left, insert the bulb of one PD cable into the <Highlight color={colors.red}>pocket labeled REF</Highlight>. See image.
2. _Slowly_ bend the bulb's leads 90 degrees towards the left. The black connector tab should be facing away. 
3. Secure the bulb with an LED cap.
4. Insert the connector of the IR cable into <Highlight color={colors.red}>PD channel 1</Highlight> (labelled on the faceplate).


</AssemblyInstructionBlock>

-------

<AssemblyInstructionBlock title="Step 4: Connect PD cable (90° → Channel 2)" images={["user-guide/hardware-assembly/40ml/optics/90-bend-90.png", "user-guide/hardware-assembly/40ml/optics/90-connected.png", "user-guide/hardware-assembly/40ml/completed-optics.jpg", "user-guide/hardware-assembly/40ml/optics/135-capped.png", "user-guide/hardware-assembly/40ml/40ml.jpg"]}>

1. Take the other PD cable and insert the bulb into the <Highlight color={colors.blue}>pocket labeled 90°</Highlight>. 
3. Bend the leads gently to the left. The tab of the black connector should be facing away. 
4. Secure the bulb with an LED cap. 
5. Plug the connector into <Highlight color={colors.blue}>channel 2</Highlight>. 
6. Push the remaining LED cap onto the pocket <Highlight color={colors.green}>labeled 135°</Highlight>.


</AssemblyInstructionBlock>

-------------------

<AssemblyInstructionBlock title="Step 4: You're done!" images={["user-guide/hardware-assembly/40ml/40ml-and-vial.jpg"]}>


Your new 40ml Pioreactor is now assembled! 🚀

Next: begin installing the [software](/user-guide/software-set-up).


</AssemblyInstructionBlock>
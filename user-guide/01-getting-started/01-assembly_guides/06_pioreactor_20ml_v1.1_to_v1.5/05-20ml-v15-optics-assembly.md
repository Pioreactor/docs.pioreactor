---
title: Connect the optics system
slug: /20ml-v11-upgrade-v15-optics-assembly
hide_table_of_contents: true
pagination_next: null
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';

import * as colors from '@site/src/components/constants';

<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/40ml-v15/eye-spy-parts.jpg", "user-guide/hardware-assembly/40ml-v15/identify-ref.jpg", "user-guide/hardware-assembly/40ml-v15/led-and-caps.jpg"]}>

1.  You will need:
* <Highlight color={colors.blue}>Eye-spy covers (3x)</Highlight>
* <Highlight color={colors.red}>8mm screws (12x)</Highlight>
* <Highlight color={colors.magenta}>Eye-spies (2x)</Highlight>

:::tip
Each eye-spy is unique. The one used for REF has a white mark in the upper-left corner. 
:::

* <Highlight color={colors.teal}>100mm Stemma-QT wire</Highlight>
* <Highlight color={colors.orange}>50mm Stemma-QT wire</Highlight>
* <Highlight color={colors.green}>LED cable</Highlight>
* <Highlight color={colors.purple}>LED caps (4x)</Highlight>



</AssemblyInstructionBlock>


-------


<AssemblyInstructionBlock title="Step 2: Install the eye-spys" images={["user-guide/hardware-assembly/40ml-v15/eye-spy-cover.jpg", "user-guide/hardware-assembly/20ml-v15/eye-spy-into-ref.jpg", "user-guide/hardware-assembly/20ml-v15/secure-ref.jpg", "user-guide/hardware-assembly/20ml-v15/secure-all-eye-spy.jpg"]}>

1. Place an eye-spy cover over the REF eye-spy. 
:::tip
Each eye-spy is unique. The one used for REF has a white mark in the upper-left corner.
:::
2. With the tan connectors towards the top, place the eye-spy into the REF socket on the vial holder. Secure it with <Highlight color={colors.red}>4x 8mm screws</Highlight>.
3. Place an eye-spy cover over the other eye-spy. 

:::note
The measuring eye-spy can be placed in either the 90 or 135 degree pocket. For most applications, 90 degrees is the standard. 
:::

4. Place the eye-spy into the desired pocket (90 or 135). Secure with <Highlight color={colors.red}>4x 8mm screws</Highlight>.
5. Cover the remaining pocket with the last eye-spy cover. Secure with the remaining 8mm screws.


</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Connect eye-spys to HAT" images={["user-guide/hardware-assembly/40ml-v15/connect-stemma-to-hat.jpg", "user-guide/hardware-assembly/20ml-v15/connect-stemma-on-eye-spy.jpg"]}>

1. Locate the <Highlight color={colors.teal}>Stemma-QT connector</Highlight> on the HAT and connect the 100mm Stemma-QT wire, with the yellow wire furthest from the heater flat flex cable. 
2. Connect the other end to the leftmost eye-spy. Use the colors of the wire to orient the connector correctly. 
3. Use the <Highlight color={colors.magenta}>50mm Stemma-QT wire</Highlight> to connect each eye-spy. 


:::tip
It does not matter which wires are connected to either eye-spy sockets. However, organize the wires neatly and avoid crossing over when possible.
:::



</AssemblyInstructionBlock>

-------------------


<AssemblyInstructionBlock title="Step 4: Connect LED cable (Channel A → IR pocket)" images={[ "user-guide/hardware-assembly/20ml-v15/led-and-caps-in-place.jpg", "user-guide/hardware-assembly/20ml-v15/led-in-ir.jpg", "user-guide/hardware-assembly/20ml-v15/secure-ir.jpg"]}>


1. Connect the LED cable to the <Highlight color={colors.green}>Channel A connector</Highlight>.
2. Secure an<Highlight color={colors.purple}>LED cap over the unused pocket</Highlight>. 
3. Insert the LED bulb into the pocket labeled **IR**. _Slowly_ bend the bulb's leads 90 degrees towards the left such that the bend is near the LED bulb.
4. Secure the bulb with an LED cap. 


</AssemblyInstructionBlock>

-------



<AssemblyInstructionBlock title="Step 5: You're done!" images={["user-guide/hardware-assembly/20ml-v15/20ml-and-vial.jpg"]}>


Your new 20ml Pioreactor v1.5 is now assembled! 🚀

Next: begin installing the [software](/user-guide/software-set-up).


</AssemblyInstructionBlock>
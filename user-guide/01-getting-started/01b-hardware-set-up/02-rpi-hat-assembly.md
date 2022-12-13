---
title: Assembling the Raspberry Pi and the HAT
slug: /rpi-hat-assembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/hat_pieces.jpg"]}>

You will need:
*	A Raspberry Pi of your choosing
*	<Highlight color={colors.blue}>Hex nuts (4x)</Highlight>
*	<Highlight color={colors.red}>12mm hex standoffs (4x)</Highlight>
*	<Highlight color={colors.magenta}>12mm hex standoffs-with-6mm-screws (4x)</Highlight>
*	<Highlight color={colors.green}>10mm screws (4x)</Highlight>
*	<Highlight color={colors.orange}>Bottom faceplate</Highlight>
*	<Highlight color={colors.teal}>HAT PCB</Highlight>

:::note
Depending on if you are using a Raspberry Pi Zero (the right-most Raspberry Pi displayed), or Raspberry Pi A or B (the full and 3/4 size), the placement of the hex nuts will be slightly different. See below:
:::

</AssemblyInstructionBlock>

-----

<Tabs>
  <TabItem value="a_or_b" label="Raspberry Pi A or B" default>


<AssemblyInstructionBlock title="Step 2: Assemble the bottom faceplate" images={["user-guide/hardware-assembly/bottom_faceplate.jpg","user-guide/hardware-assembly/bot_faceplate_screwed.jpg","user-guide/hardware-assembly/rpi_no_standoffs.jpg"]}>

:::tip
The 40 GPIO pins (standing for general-purpose input/output) form a distinct row on one side of the Raspberry Pi. Note the orientation of these pins to help you assemble correctly!
:::

1.	Orientation: the base will have a flat edge and an edge with an indent. The GPIO pins sit along the <Highlight color={colors.blue}>indent</Highlight>, seen on the left in the images.
2.	Insert the <Highlight color={colors.red}>10mm screws</Highlight> into the holes.
3.	Hand screw a <Highlight color={colors.magenta}>hexnut</Highlight> onto each screw.
4.	Place the Raspberry Pi on top, aligning the holes, with the <Highlight color={colors.green}>GPIO pins</Highlight> on the left. Note: your Raspberry Pi may look different than the one displayed.


</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Placing the HAT PCB on top" images={["user-guide/hardware-assembly/rpi_with_standoffs.jpg","user-guide/hardware-assembly/gpio_unpushed.jpg","user-guide/hardware-assembly/gpio_pushed.jpg", "user-guide/hardware-assembly/standoff_on_hat.jpg"]}>

1.	Hand screw on the <Highlight color={colors.blue}>hex standoffs-with-screw</Highlight> in each corner.
2.	Place the HAT PCB on top. <Highlight color={colors.red}>Push down *from the corners*</Highlight> to secure it in place.

:::note
The HAT PCB's GPIO connector will line up with the RPi's GPIO pins, and may require a slight force to compress down. Careful not to apply too much force.
:::

3.	Hand screw the <Highlight color={colors.green}>hex standoffs</Highlight> in each corner, on top of the HAT.
4.	Put this aside and proceed to the next page.

</AssemblyInstructionBlock>



  </TabItem>
  <TabItem value="zero" label="Raspberry Pi Zero">
<AssemblyInstructionBlock title="Step 2: Assembly the bottom faceplate" images={["user-guide/hardware-assembly/bottom_faceplate.jpg","user-guide/hardware-assembly/hex_one_side.jpg","user-guide/hardware-assembly/rpi_zero.jpg"]}>
The 40 GPIO pins (standing for general-purpose input/output) form a distinct row on one side of the RPi. Note the orientation of these pins to help you assemble correctly!

1.  Orientation: the base will have a flat edge and an edge with an indent. The GPIO pins sit along the <Highlight color={colors.blue}>indent</Highlight>, seen on the left in the images.
2.  Insert the 10mm screws into the <Highlight color={colors.red}>holes</Highlight>.
3.  Hand screw the <Highlight color={colors.magenta}>hexnuts</Highlight> on the screws along the flat edge of the bottom faceplate. Hexnuts are only needed on one side because of the size of the Raspberry Pi Zero.
4.  Place the Raspberry Pi along the indented edge of the faceplate, with the <Highlight color={colors.green}>GPIO pins</Highlight> on the left.
5.  Hand screw on the <Highlight color={colors.blue}>hex standoffs-with-screw</Highlight> in each corner.

</AssemblyInstructionBlock>


-----

<AssemblyInstructionBlock title="Step 3: Placing the HAT PCB ontop" images={["user-guide/hardware-assembly/gpio_unpushed.jpg","user-guide/hardware-assembly/gpio_pushed.jpg", "user-guide/hardware-assembly/standoff_on_hat.jpg"]}>

2.	Place the HAT on top. <Highlight color={colors.red}>Push down</Highlight> to secure it in place.

:::note
The HAT's GPIO connector will line up with the RPi's GPIO pins, and may require a slight force to compress down. Careful not to apply too much force.
:::

3.	Hand screw the <Highlight color={colors.green}>hex standoffs</Highlight> in each corner, on top of the HAT.
4.	Put this aside and proceed to the next page.

</AssemblyInstructionBlock>

  </TabItem>
</Tabs>

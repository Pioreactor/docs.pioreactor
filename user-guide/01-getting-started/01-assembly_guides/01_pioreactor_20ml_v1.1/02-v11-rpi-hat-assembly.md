---
title: Assembling the Raspberry Pi and the HAT
slug: /20ml-v11-rpi-hat-assembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/upgrade-version/hat-pieces.png", "user-guide/hardware-assembly/gpio_check_A.jpg", "user-guide/hardware-assembly/gpio_check_B.jpg"]}>

1. You will need:
* A Raspberry Pi of your choosing. Displayed are three options - you just need one.
* <Highlight color={colors.blue}>Hex nuts (4x)</Highlight>
* <Highlight color={colors.red}>M2.5 12mm hex standoffs (4x)</Highlight>
* <Highlight color={colors.magenta}>M2.5 12mm hex standoffs-with-6mm-screws (4x)</Highlight>
* <Highlight color={colors.green}>M2.5 10mm screws (4x)</Highlight>
* <Highlight color={colors.orange}>Bottom faceplate</Highlight>
* <Highlight color={colors.teal}>HAT PCB</Highlight>


2. Check the GPIO pins on the <Highlight color={colors.teal}>HAT PCB</Highlight> to confirm that they are straight and not touching another GPIO pin.

</AssemblyInstructionBlock>

-----

<Tabs>
  <TabItem value="a_or_b" label="Raspberry Pi A or B instructions" default>


<AssemblyInstructionBlock title="Step 2: Assemble the bottom faceplate" images={["user-guide/hardware-assembly/upgrade-version/bottom-faceplate.png","user-guide/hardware-assembly/upgrade-version/bottom-faceplate-screwed.png","user-guide/hardware-assembly/upgrade-version/rpi-no-standoffs.png"]}>


1.  If using a half-size Raspberry Pi (aka a Zero model), switch to the tab above called "Raspberry Pi Zero" to see Zero specific instructions.

:::tip
The 40 GPIO pins (standing for general-purpose input/output) form a distinct row on one side of the Raspberry Pi. Note the orientation of these pins to help you assemble correctly!
:::

2.  Orientation: the base will have a flat edge and an edge with an indent. The GPIO pins sit along the <Highlight color={colors.blue}>indent</Highlight>, seen on the left in the images.
3.  Insert the <Highlight color={colors.red}>M2.5 10mm screws</Highlight> into the holes.
4.  Hand screw a <Highlight color={colors.magenta}>hex nut</Highlight> onto each screw.
5.  Place the Raspberry Pi on top, aligning the holes, with the <Highlight color={colors.green}>GPIO pins</Highlight> on the left. Note: your Raspberry Pi may look different than the one displayed.


</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Placing the HAT PCB on top" images={["user-guide/hardware-assembly/upgrade-version/rpi-with-standoffs.png","user-guide/hardware-assembly/upgrade-version/gpio-unpushed.png","user-guide/hardware-assembly/upgrade-version/gpio-pushed.png", "user-guide/hardware-assembly/upgrade-version/standoff-on-hat.png"]}>

1.  Hand screw on the <Highlight color={colors.blue}>M2.5 12mm hex standoffs-with-6mm-screw</Highlight> in each corner.
2.  Place the HAT PCB on top. <Highlight color={colors.red}>Push down *from the corners*</Highlight> to secure it in place. The HAT PCB's GPIO connector will line up with the RPi's GPIO pins and may require a slight force to compress down. You can also use the next Tip below to help apply force.

3.  Hand screw the <Highlight color={colors.green}>M2.5 12mm hex standoffs</Highlight> in each corner, on top of the HAT.

:::tip
By screwing down the standoffs, they'll help compress the HAT onto the RPi, too.
:::

4.  Put this aside and proceed to the next page.

</AssemblyInstructionBlock>

-----

  </TabItem>
  <TabItem value="zero" label="Raspberry Pi Zero / Zero 2 instructions">
<AssemblyInstructionBlock title="Step 2: Assemble the bottom faceplate" images={["user-guide/hardware-assembly/upgrade-version/bottom-faceplate.png","user-guide/hardware-assembly/upgrade-version/hex-one-side.png","user-guide/hardware-assembly/upgrade-version/rpi-zero.png"]}>

:::tip
The 40 GPIO pins (standing for general-purpose input/output) form a distinct row on one side of the Raspberry Pi. Note the orientation of these pins to help you assemble correctly!
:::

1.  Orientation: the base will have a flat edge and an edge with an indent. The GPIO pins sit along the <Highlight color={colors.blue}>indent</Highlight>, seen on the left in the images.
2.  Insert the 10mm screws into the <Highlight color={colors.red}>holes</Highlight>.
3.  Hand screw the <Highlight color={colors.magenta}>hexnuts</Highlight> on the screws along the flat edge of the bottom faceplate. Hexnuts are only needed on one side because of the size of the Raspberry Pi Zero.
4.  Place the Raspberry Pi along the indented edge of the faceplate, with the <Highlight color={colors.green}>GPIO pins</Highlight> on the left.
5.  Hand screw on the <Highlight color={colors.blue}>M2.5 12mm hex standoffs-with-6mm-screw</Highlight> in each corner.

</AssemblyInstructionBlock>


-----

<AssemblyInstructionBlock title="Step 3: Placing the HAT PCB ontop" images={["user-guide/hardware-assembly/upgrade-version/gpio-unpushed.png","user-guide/hardware-assembly/upgrade-version/gpio-pushed.png", "user-guide/hardware-assembly/upgrade-version/standoff-on-hat.png"]}>

1.  Place the HAT on top. <Highlight color={colors.red}>Push down</Highlight> to secure it in place. The HAT PCB's GPIO connector will line up with the RPi's GPIO pins, and may require a slight force to compress down. You can also use the next Tip below to help apply force.

2.  Hand screw the <Highlight color={colors.green}>M2.5 12mm hex standoffs</Highlight> in each corner, on top of the HAT.

:::tip
By screwing down the standoffs, you can use these standoffs to help compress the HAT onto the RPi, too.
:::

3.  Put this aside and proceed to the next page.

</AssemblyInstructionBlock>

  </TabItem>
</Tabs>

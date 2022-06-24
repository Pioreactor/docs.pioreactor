---
title: Assembling the Raspberry Pi and the HAT
slug: /rpi-hat-assembly
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';

Depending on if you are using a Raspberry Pi Zero (the tinier Raspberry Pi), or Raspberry Pi A or B (the full and 3/4 size), the placement of the hex nuts will be slightly different. See below:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="a_or_b" label="Raspberry Pi A or B" default>
  
<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["hat_pieces.jpg"]}>

You will need:
*	A Raspberry Pi of your choosing
*	Hex nuts (4x)
*	12 mm hex standoffs (4x) 
*	12 mm hex standoffs-with-screws (4x)
*	10 mm plastic nylon screws (4x) 
*	Bottom faceplate
*	HAT
	
</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Bottom faceplate" images={["bottom_faceplate.jpg","bot_faceplate_screwed.jpg","rpi_no_standoffs.jpg"]}>

This faceplate will protect the Pioreactor from potential spills. 

1.	Orientation: the base will have a flat edge and an edge with an indent. The GPIO pins sit along the indent, seen on the left in the images. 
2.	Insert the 10 mm screws into the holes. 
3.	Screw the hexnuts on each screw, sandwiching the faceplate. 
4.	Place the Rpi on top, with the GPIO pins on the left. 

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Placing the HAT" images={["rpi_with_standoffs.jpg","gpio_unpushed.jpg","gpio_pushed.jpg"]}>

1.	Screw on the hex standoffs-with-screw in each corner.
2.	Place the HAT on top. 

:::note
The HAT's GPIO connector will line up with the RPi's GPIO pins, and may require a slight force to compress down. Careful note to apply too much force and bend any pins.
:::
3.	Screw the hex standoffs in each corner, on top of the HAT.
4.	Put this aside and proceed to the next page. 

</AssemblyInstructionBlock>

  </TabItem>
  <TabItem value="zero" label="Raspberry Pi Zero">

<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["hat_pieces.jpg"]}>

You will need:
*	A Raspberry Pi of your choosing
*	Hex nuts (4x)
*	12 mm hex standoffs (4x)
*	12 mm hex standoffs-with-screws (4x)
*	10 mm plastic nylon screws (4x)
*	Bottom faceplate
*	The HAT

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Bottom faceplate" images={["hat_pieces.jpg"]}>

This faceplate will protect the Pioreactor from potential spills. 

1.	Orientation: the base will have a flat edge and an edge with an indent. The GPIO pins sit along the indent, seen on the left in the images. 
2.	Insert the 10 mm screws into the holes. 
3.	Screw the hexnuts on the screws along the flat edge of the bottom faceplate. In this case, hexnuts are only needed on one side because of differences in the Raspberry Pi spacing. 
4.	Place the Rpi along the indented edge of the faceplate, with the GPIO pins on the left. See the image. 

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Placing the HAT" images={["hat_pieces.jpg"]}>

1.	Screw on the hex standoffs-with-screw in each corner.
2.	Place the HAT on top. 

:::note
The HAT's GPIO connector will line up with the RPi's GPIO pins, and may require a slight force to compress down. Careful note to apply too much force and bend any pins.
:::
3.	Screw the hex standoffs in each corner, on top of the HAT.
4.	Put this aside and continue to the next page.

</AssemblyInstructionBlock>


  
  </TabItem>
</Tabs>

---
title: Using additional LEDs
slug: /using-leds
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';


You can add your own LEDs to the Pioreactor. You might want to do this for the following reasons:

1. Adding white LEDs (or red + blue LEDs) to turn grow algae
2. Adding a while LED to illuminate the culture so you can easily see growth through the window
3. Opto-genetic experiments to add LEDs to trigger expressions


:::info
You don't have to worry about your LED interfering with optical density measurements. When the OD Reading job is running, it forces all other LEDs off (setting intensity to 0%) before taking a reading.
:::


<AssemblyInstructionBlock title="Adding LEDs to your Pioreactor" images={["user-guide/adding-leds/led_hardware1.jpg", "user-guide/adding-leds/led_hardware2.jpg", "user-guide/adding-leds/attach3.JPG", "user-guide/adding-leds/attached4.JPG", "user-guide/adding-leds/channelD5.JPG", "user-guide/adding-leds/plugin6.JPG", "user-guide/adding-leds/close7.JPG"]}>

1. You'll need a 5mm LED of your choice, and either two female jumper cables, or our [LED cables](https://pioreactor.com/collections/accessories/products/5mm-led-cables).
2. Attach the LED to the cables, making sure the positive end of the LED connects to the positive cable end (red, for our LED cables).
3. Attach the other end of the cable to an open LED channel on the Pioreactor's HAT. We've chosen channel D in the image.
4. The pockets labelled X2 and X3 on the Pioreactor are designed to distribute light into the vial, so we suggest using either, or both, of these (they are identical).
5. Just like adding PD LED and IR LEDs to your Pioreactor, any additional 5mm LED fits tight into the pocket. To put the cap on, bend the leads 90°.

</AssemblyInstructionBlock>



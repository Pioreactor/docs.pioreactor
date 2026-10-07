---
title: Pioreactor aeration kit
slug: /pioreactor-aeration-kit
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

<AssemblyInstructionBlock title="Step 1: Necessary parts" images={["user-guide/hardware-assembly/aeration-kit/1-finished-pioreactor.png", "user-guide/hardware-assembly/aeration-kit/1-aeration-items.png"]}>

You will need the following items:

* A fully assembled 20ml or 40ml Pioreactor
* <Highlight color={colors.purple}>40ml vial</Highlight>
* <Highlight color={colors.orange}>Vial Cap P2</Highlight> with influx and efflux stainless steel ports
* <Highlight color={colors.green}>12V air pump</Highlight>
* <Highlight color={colors.teal}>One 8-inch length of tubing</Highlight> with barb x male luer locks on either end
* <Highlight color={colors.blue}>One 10-inch length of tubing</Highlight> with inline air filter and check valve
* <Highlight color={colors.magenta}>Sintered sparger with short tubing attached</Highlight>
* <Highlight color={colors.red}>Dovetail holders</Highlight> for the 12V air pump and bubble humidifier

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 2: Prepare the bubble humidifier" images={["user-guide/hardware-assembly/aeration-kit/2-bubble-humidifier.png", "user-guide/hardware-assembly/aeration-kit/2-place-humidifier-in-holder.png"]}>

1. Fill your 40ml vial with DI water, about 60% full.
2. Screw on the Vial Cap P2. Ensure that the <Highlight color={colors.red}>lower (longer) port</Highlight> is submerged in the water.
3. Place the vial in the dovetail holder for the bubble humidifier.

:::note
The dovetail holders for the aeration kit can stand on their own or be attached to an existing pumping dovetail platform.
:::

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 3: Prepare the sample vial" images={["user-guide/hardware-assembly/aeration-kit/3-remove-vial-and-cap.png", "user-guide/hardware-assembly/aeration-kit/3-place-sparger-on-port.png", "user-guide/hardware-assembly/aeration-kit/3-sparger-submerged.png", "user-guide/hardware-assembly/aeration-kit/3-vial-with-sparger-in-pio.png"]}>

1. Remove the vial situated in the Pioreactor. Remove the Vial Cap S.
2. Attach the <Highlight color={colors.green}>tubing end of the sintered sparger</Highlight> to influx port 1, 2, or 3.
3. Make note of <Highlight color={colors.blue}>which port was chosen</Highlight>.
4. Screw the cap back onto the vial. Check that the sparger is submerged in the media. If it isn't, gently push the port into the vial.
5. Place the vial back into the Pioreactor.

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 4: Connect it all together" images={["user-guide/hardware-assembly/aeration-kit/4-air-pump-to-pwm3.png", "user-guide/hardware-assembly/aeration-kit/4-air-pump-into-dovetail.png", "user-guide/hardware-assembly/aeration-kit/4-air-pump-to-4mmID-tubing.png", "user-guide/hardware-assembly/aeration-kit/4-10-inch-tubing-to-humidifier.png", "user-guide/hardware-assembly/aeration-kit/4-8-inch-tubing-connection.png"]}>

1. Plug the 12V air pump into <Highlight color={colors.magenta}>PWM channel 3</Highlight> on the Pioreactor HAT. Route the cable next to the metal body of the pump, and gently push the pump into the dovetail holder.
2. On one end of the 10-inch tubing is an air filter with a 1-inch length of 4mm ID tubing. Attach this end to the <Highlight color={colors.orange}>efflux port of the air pump</Highlight>, marked with an arrow. Leave the other port on the pump open.
3. Connect the other end of the 10-inch tubing to the <Highlight color={colors.purple}>submerged metal port</Highlight> on the bubble humidifier.
4. Use the 8-inch tubing to connect the <Highlight color={colors.teal}>open metal port</Highlight> on the bubble humidifier to the <Highlight color={colors.teal}>port on the Pioreactor's Vial Cap S with the sintered sparger</Highlight>.

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 5: You're done!" images={["user-guide/hardware-assembly/aeration-kit/5-assembled-aeration-kit.png"]}>

Your new aeration kit is now assembled!

Next: [install the plugin](/user-guide/using-community-plugins) and start experimenting.

</AssemblyInstructionBlock>

---
title: Using a peristaltic pump with your Pioreactor
slug: /using-pumps
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

### Viewing pump configuration in config.ini

You can attach up to three peristaltic pumps to your Pioreactor, typically used for: adding fresh media to the vial, removing effluent from the vial, and adding an alternative media to the vial.


First decided what you want this pump to do: add media, remove waste, or add alternative media. Pumps that are supplied by us will have a polarized connector that connects to the PWM outputs on the Pioreactor hat. Which PWM you use is determined by your `PWM` settings in config.ini.

![](/img/user-guide/pwm_config.png)

In our case, if we were to use the pump as a media pump, we would connect the pump to PWM channel 2.



<AssemblyInstructionBlock title="Setting up the dosing platform" images={["user-guide/dosing_platform/pump1.JPG", "user-guide/dosing_platform/pump2.JPG", "user-guide/dosing_platform/pump3.JPG", "user-guide/dosing_platform/pump4.JPG", "user-guide/dosing_platform/pump5.JPG", "user-guide/dosing_platform/pump6.JPG", "user-guide/dosing_platform/pump7.JPG"]}>

The dosing platform isn't needed, but helps organize your pumps. It's [open source](https://www.printables.com/model/298240-pioreactor-platform-with-dovetails) - so you can 3D print your own!

1. Set the dosing platform on a level surface.
2. Place your Pioreactor in the platform, as shown. Note: a Raspberry Pi B model won't fit.
3. Attach your two pumps' wires to <Highlight color={colors.orange}>media and waste PWMs</Highlight> on the Pioreactor (your config.ini has the PWM channels these should attach to, [see section above](/user-guide/using-pumps#viewing-pump-configuration-in-configini)).
4. Vertically place each pump into the platform. Note the following:
   - Check the orientation of the pump head: the tubes should be <Highlight color={colors.green}>facing out</Highlight>.
   - Each pump's wire should travel up one of the <Highlight color={colors.blue}>grooves in the side</Highlight> of the holder. The pump will feel snug in the holder.
 5. Do this for both pumps.
 6. The pumps should be have some gap between them and the Pioreactor, facing opposite directions, and not interfering with each other.

</AssemblyInstructionBlock>




<AssemblyInstructionBlock title="Connecting the tubes" images={["user-guide/dosing_platform/pump8.JPG",  "user-guide/dosing_platform/pump10.JPG", "user-guide/dosing_platform/pump9.JPG"]}>


1. For both pumps, the tube that is closer to the Pioreactor's vial is the tube that will connect to the vial.
2. **Optional**: If the pump→vial tubes seem too long, you can cut them to a preferable length. In the pictures shown, we cut the 9" tube down to 6". This reduces media waste and makes the platform more compact.
3. For each pump, attach this tube to the Pioreactor's vial via the <Highlight color={colors.blue}>luer lock connection</Highlight>.
4. You're done! Note the picture demonstrating the flow of liquid in and out of the Pioreactor's vial.

</AssemblyInstructionBlock>


:::tip
If using your pumps for the first time, we suggest letting them run continuously for 10 minutes or so to "loosen" the tubing up and check for any problems. Place both ends (source and sick) into a beaker of water, and use the UI to run them continuously.

![](/img/user-guide/dosing_in_ui.png)

:::



<AssemblyInstructionBlock title="Calibrating the pumps" images={["experiments/turbidostat/ssh_into_unit.png","experiments/turbidostat/run_pump_calc.png"]}>

You can run your pump to dose exact mL volumes after calibrating. Here's how to calibrate your pump(s):

:::tip
[Supplying external power](/user-guide/external-power)? Make sure to plug in your external power **before** pump calibration!
:::

1. [Calibrate your pumps](/user-guide/hardware-calibrations#pump-calibration) through your computer's command line. 
2.	Enter **`ssh pioreactor@<insert unit name>.local`**.
	*	For example, to calibrate on our Pioreactor named _worker3_, we typed **`ssh pioreactor@worker3.local`**.
	*	The default password is `raspberry`.
3. Enter **`pio run pump_calibration`**.
4. Follow the prompts to calibrate your media, waste, and/or alternate media pumps. 
5. Calibrations can be performed depending on the frequency of your Pioreactor use. 

</AssemblyInstructionBlock>

### Sterilizing the pumps before and after experiments

To avoid cross contamination, pumps should be sterilized before and after use. 

1. Create a 10% bleach dilution, or high concentration alcohol, in a container. Place the sink and source tubes of each pump you're sterilizing in the beaker.
2. On the UI, in the _Pioreactors_ tab, click _Manage_ and go to the _Dosing_ tab. 
3. _Run continuously_ to cycle the disinfectant solution through each pump that you're using. 
![](/img/user-guide/dosing_in_ui.png)
4. _Interrupt_ after sufficient cycling. In another beaker with DI water, place the tubes in and repeat the cycling to rinse out the pumps.
5. Your pumps are now ready to be attached to media, waste, or vials for your experiments. 

## Using pumps

### Running pumps from the web interface

![](/img/user-guide/manage_ui.png)
![](/img/user-guide/dosing_ui.png)
![](/img/user-guide/add_media_ui.png)


### Running pumps from the command line

```
pio run add_media --ml 3
```

or, if you wish to run continuously until interrupted.

```
pio run add_media --continuously
```

### Programmatically run pumps using automations

Dosing automations, like turbidostats, chemostats, fed-batch and more, are available to run once your pumps are attached and calibrated. [Read more about automations](/user-guide/dosing-automations).




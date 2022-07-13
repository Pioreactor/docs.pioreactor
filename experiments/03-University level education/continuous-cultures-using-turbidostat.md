---
title: Continuous cultures using a turbidostat
slug: /continuous-cultures-using-turbidostat
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal
Your Pioreactor can be transformed into a [turbidostat](/user-guide/dosing-automations#pid-turbidostat), where pumps are used to replenish media around a target OD to create a continuous culture. This maximizes the growth rate while all other variables are held constant. 

This setup is a powerful tool that tests the limits of population growth. Students can use this system to assess the following questions: What is a species' maximum growth rate? What are the limiting factors? And how can we change the environment (added media) to affect the maximum growth? 
:::

## Requirements

* One available Pioreactor
* Two peristaltic pumps: 
	*	One media pump
	*	One waste pump
* Two liquid containers with luer attachments:
	*	One labelled "media"
	*	One labelled "waste" 
* Measuring scale
* Culture of choice (ex. Baker's Yeast)
* Media of choice (ex. YPD)

## Protocol

<AssemblyInstructionBlock title="Step 1: Setting up the pumps" images={["experiments/turbidostat/pump_to_pwm.png","experiments/turbidostat/sink_and_source.png"]}>

1. Insert the cable of one peristaltic pump into <Highlight color={colors.magenta}>PWM channel 2.</Highlight> This is your **media pump.** 
2. Insert the cable of the other pump into <Highlight color={colors.blue}>PWM channel 4.</Highlight>  This is your **waste pump.**

More details on attaching pumps can be found [here](/user-guide/using-pumps). 

:::note
The peristaltic pump has two tubes: a <Highlight color={colors.red}>source</Highlight> and a <Highlight color={colors.blue}>sink.</Highlight> Source tubes take up liquid, and sink tubes expell liquid. You can label your tubes with coloured tape as we have in the images.  
:::

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Calibrating the pumps" images={["experiments/turbidostat/ssh_into_unit.png","experiments/turbidostat/run_pump_calc.png"]}>

1. [Calibrate your pumps](/user-guide/hardware-calibrations#pump-calibration) through the command line.
2.	Type **`ssh pioreactor@<insert unit name>.local`**. For example, to calibrate on our Pioreactor named worker2, we typed **`ssh pioreactor@worker2.local`**.
3. Type **pio run pump_calibration**. 
4. Follow the promts to calibrate your media pump.
5. Repeat for your waste pump. 

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Vial, media and waste container setup" images={["experiments/turbidostat/adjusting_tubes.png","experiments/turbidostat/media_flow.png"]}>

1. Add media into your media container. Sterilize by autoclaving.
2. Adjust the tube lengths on the cap of your small sterile vial such that <Highlight color={colors.green}>one just touches the media,</Highlight> while another <Highlight color={colors.magenta}>sits above the media.</Highlight>
3. Inoculate your small sterile vial with drops of your culture. 
4. Wipe vial and place in the Pioreactor. 
5. <Highlight color={colors.red}>For your media pump:</Highlight>
  *	Attach the source tube to your media container.
  *	Attach the sink tube to the vial cap tube that sits above the media. 
6. <Highlight color={colors.blue}>For your waste pump:</Highlight>  
*	Attach the source tube to the vial cap tube that touches the media.  
*	Attach the sink tube to your waste container. 

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Start activities and automations" images={["experiments/turbidostat/dosing_automation.png","experiments/turbidostat/PID_turbidostat.png","experiments/turbidostat/turbidostat_settings.png","experiments/turbidostat/overview_settings.png"]}>

6.	Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7.	Select _Manage_, and start _Stirring_ activity and _OD reading_ activity.
8.	Confirm everything looks correct, then start the _Growth rate_ activity. 
9.	Start the _Dosing automation_. Change automation to _PID Turbidostat_. Set your _Time between dosing_ and _Target OD_. 

</AssemblyInstructionBlock>

## Example 


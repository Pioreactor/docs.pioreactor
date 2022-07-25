---
title: Temperature cycling of continuous cultures
slug: /temp-cycle
---
import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success Goal
Apply turbidostat functions with temperature cycling. We created a plugin that cycles the temperature between 30°C and 40°C sinusoidally over a 24 hour period. Together with turbidostat media cycling, the maximum specific growth rate can be characterized between a culture held at a static temperature versus a culture undergoing temperature cycling. This experiment explores concepts described in Knutson et al., (2018). 
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/turbidostat/turbido_mats_1.jpg"]}>

* Two available Pioreactors
* Four peristaltic pumps: 
	*	Two media pumps
	*	Two waste pumps
* Two liquid containers:
	*	One labelled "media"
	*	One labelled "waste" 
* Scale to calibrate, if needed
* Culture of choice (ex. Baker's Yeast)
* Media of choice (ex. YPD)

</AssemblyInstructionBlock>

## Protocol

<AssemblyInstructionBlock title="Step 1: Setting up the pumps" images={["experiments/turbidostat/pump_to_pwm.png","experiments/turbidostat/sink_and_source.png"]}>

Repeat the pump setup steps for both Pioreactors. 

1. Insert the cable of one peristaltic pump into <Highlight color={colors.magenta}>PWM channel 2.</Highlight> This is your **media pump.** 
2. Insert the cable of the other pump into <Highlight color={colors.orange}>PWM channel 4.</Highlight>  This is your **waste pump.**

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

<AssemblyInstructionBlock title="Step 3: Vial, media and waste container setup" images={["experiments/turbidostat/adjusting_tubes.png","experiments/turbidostat/luer_attach.png","experiments/turbidostat/media_flow.png"]}>

1. Add media into your media container. Sterilize by autoclaving.
2. Adjust the tube lengths on the cap of your small sterile vial such that <Highlight color={colors.green}>one just touches the media,</Highlight> while another <Highlight color={colors.magenta}>sits above the media.</Highlight>
3. Inoculate your small sterile vial with drops of your culture. 
4. Wipe vial and place in the Pioreactor. 
5. For your media pump:
	*	Attach the <Highlight color={colors.teal}>source tube to your media container.</Highlight>
	*	Attach the <Highlight color={colors.orange}>sink tube to the vial cap tube</Highlight> that sits **above** the media. 
6. For your waste pump:
	*	Attach the <Highlight color={colors.red}>source tube to the vial cap tube</Highlight> that **touches** the media.  
	*	Attach the <Highlight color={colors.blue}>sink tube to your waste container.</Highlight>  

The flow of liquid is summarized in the third picture, using <Highlight color={colors.red}>red arrows.</Highlight> 

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Start activities and automations" images={["experiments/turbidostat/general_automations.png","experiments/turbidostat/dosing_automation.png","experiments/turbidostat/PID_turbidostat.png","experiments/turbidostat/turbidostat_settings.png","experiments/turbidostat/overview_settings.png","experiments/turbidostat/dosing_settings.png"]}>

6.	Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7.	Select _Manage_, and start _Stirring_ activity and _OD reading_ activity.
8.	Confirm everything looks correct, then start the _Growth rate_ activity. 
9.	Start the _Dosing automation_. Change automation to _PID Turbidostat_. Set your _Time between dosing_ and _Target OD_. 

:::note
_Target OD_ refers to the normalized optical density. 

To change the _Time between dosing_ and/or _Target OD_ while the experiment is running, go to the _Settings_ tab instead of the _Activities_ tab.
:::

</AssemblyInstructionBlock>

## References

Knutson, C. M., McLaughlin, E. M., & Barney, B. M. (2018). Effect of temperature control on green algae grown under continuous culture. _Algal research_, _35_, 301-308. [https://doi.org/10.1016/j.algal.2018.08.020](https://www.osti.gov/pages/servlets/purl/1613542)
---
title: Continuous cultures using a turbidostat
slug: /continuous-cultures-using-turbidostat
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal
Your Pioreactor can be transformed into a [turbidostat](/user-guide/dosing-automations#pid-turbidostat), where pumps are used to replenish media around a target OD, creating a continuous culture. Due to the abundance of resources and lack of rate-limiting nutrients, the specific growth rate of a species is maximized. _Learn more about the differences in bioreactor strategies [here](https://pioreactor.com/blogs/pioreactor-blog/the-many-different-environments-of-bioreactors-chemostat-turbidostat-stressostat-and-more)._

This setup is a powerful tool that tests the limits of population growth. Students can investigate the specific maximum growth rate of a species and evaluate what innate biological processes are limiting growth. 
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/turbidostat/turbido_mats_1.jpg","experiments/turbidostat/turbido_mats_2.jpg"]}>

* One available Pioreactor
* Two peristaltic pumps: 
	*	One media pump
	*	One waste pump
* Two liquid containers:
	*	One labelled "media"
	*	One labelled "waste" 
* Scale to calibrate, if needed

</AssemblyInstructionBlock>

## Protocol

<AssemblyInstructionBlock title="Step 1: Setting up the pumps" images={["experiments/turbidostat/pump_to_pwm.png","experiments/turbidostat/sink_and_source.png"]}>

1. Insert the cable of one peristaltic pump into <Highlight color={colors.magenta}>PWM channel 2.</Highlight> This is your **media pump.** 
2. Insert the cable of the other pump into <Highlight color={colors.orange}>PWM channel 4.</Highlight>  This is your **waste pump.**

More details on attaching pumps can be found [here](/user-guide/using-pumps). 

:::note
The peristaltic pump has two tubes: a <Highlight color={colors.red}>source</Highlight> and a <Highlight color={colors.blue}>sink.</Highlight> Source tubes take up liquid, and sink tubes expel liquid. You can label your tubes with coloured tape as we have in the images.
:::

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="(Optional) Step 2: Calibrating the pumps" images={["experiments/turbidostat/ssh_into_unit.png","experiments/turbidostat/run_pump_calc.png"]}>

1. If you haven't done so, [calibrate your pumps](/user-guide/hardware-calibrations#pump-calibration) through your computer's command line.
2.	Type **`ssh pioreactor@<insert unit name>.local`**. For example, to calibrate on our Pioreactor named _worker3_, we typed **`ssh pioreactor@worker3.local`**.
3. Type **pio run pump_calibration**. 
4. Follow the prompts to calibrate your media pump.
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

<AssemblyInstructionBlock title="Step 4: Start activities and automations" images={["experiments/turbidostat/general_automations.png","experiments/turbidostat/dosing_automation.png","experiments/turbidostat/PID_turbidostat.png","experiments/turbidostat/turbidostat_settings.png","experiments/turbidostat/overview_settings.png"]}>

6.	Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7.	Select _Manage_, and start _Stirring_ activity and _OD reading_ activity.
8.	Confirm everything looks correct, then start the _Growth rate_ activity. 
9.	Start the _Dosing automation_. Change automation to _PID Turbidostat_. Set your _Time between dosing_ and _Target OD_. 

:::note
_Target OD_ refers to the normalized optical density. 

To change the _Time between dosing_ and/or _Target OD_ while the experiment is running, go to the _Settings_ tab instead of the _Activities_ tab.
:::

</AssemblyInstructionBlock>


<AssemblyInstructionBlock title="Step 5: Changing parameters" images={["experiments/turbidostat/dosing_settings.png"]}>

1. You can change the parameters of the turbidostat automation in the _Settings_ tab.
2. Changes will take effect immediately.


</AssemblyInstructionBlock>



## Example 

In our turbidostat system, we studied a small vial of YPD media inoculated with 4 drops of a yeast slurry. The culture was replenished every **10 minutes** (time between dosing) with fresh YPD media when the target OD was reached.

We initially set our turbidostat target OD to **2 AU**. To demonstrate how quickly our system can adapt, we changed our target OD to **3.5 AU after 6 hours**. A higher target OD allows the culture to become more turbid. 

After 16 hours, the following results are recorded: 

![](/img/experiments/turbidostat/turbidostat_results.png)

:::tip FYI: _Why does normalized OD look like that?_
After the time period set by you (the _Time between dosing_), the system assesses the normalized OD. As the normalized OD approaches the target OD, an automated amount of new media is added and waste is removed. The next time the system "wakes up", the OD will equals/be close to the set target OD.
:::

![](/img/experiments/turbidostat/turbidostat_gr_results.png)

Over time, we expect faster growing yeast to out-compete slower growing yeast, resulting in an increase in maximum growth rate. As seen above, the growth rate improves from **0.30 h⁻¹** to **0.41 h⁻¹** in the span of 15 hours. 

There are a myriad of further applications for turbidostats, such as characterization of species, directed evolution, responses to stimuli (gene regulating metabolites) and so much more. 

We encourage you to choose species and media compositions to suit your interests. Have fun! 
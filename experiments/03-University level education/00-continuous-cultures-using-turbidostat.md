---
title: Continuous cultures using a turbidostat
slug: /continuous-cultures-using-turbidostat
tags: 
  - Yeast
  - Turbidostat
  - Continuous culture
  - University education
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal
Determine the maximum specific growth rate of your culture using turbidostat strategies and pump extentions of the Pioreactor. 
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/turbidostat/turbido_mats_1.jpg"]}>

* One available Pioreactor
* Two peristaltic pumps: 
	*	One media pump
	*	One waste pump
* Two liquid containers:
	*	One labelled "media"
	*	One labelled "waste" 
* Scale to calibrate, if needed

</AssemblyInstructionBlock>


## Introduction 

Your Pioreactor can be transformed into a [turbidostat](/user-guide/dosing-automations#pid-turbidostat), where pumps are used to replenish media around a target OD, creating a continuous culture. Due to the abundance of resources and lack of rate-limiting nutrients, the specific growth rate of a species is maximized. _Learn more about the differences in bioreactor strategies [here](https://pioreactor.com/blogs/pioreactor/the-many-different-environments-of-bioreactors-chemostat-turbidostat-stressostat-and-more)!_

This setup is a powerful tool that tests the limits of population growth. Students can investigate the specific maximum growth rate of a species and evaluate what innate biological processes are limiting growth. 

## Experiment 

In our turbidostat system, we studied a small vial of YPD media inoculated with 4 drops of a yeast slurry. We set our volume to be exchanged to be 1 mL when the target OD was reached. This means at our target OD, 1 mL of media in the vial would be removed, and 1 mL of fresh media is added. 

We initially set our turbidostat target OD to **2 AU**. To demonstrate how quickly our system can adapt, we changed our target OD to **3.5 AU after 6 hours**. A higher target OD allows the culture to become more turbid. 

### Results

After 16 hours, the following results are recorded: 

![](/img/experiments/turbidostat/turbidostat_results.png)

:::tip FYI: _Why does normalized OD look like that?_
After the time period set by you (the _Time between dosing_), the system assesses the normalized OD. As the normalized OD approaches the target OD, an automated amount of new media is added and waste is removed. The next time the system "wakes up", the OD will equals/be close to the set target OD.
:::

![](/img/experiments/turbidostat/turbidostat_gr_results.png)

Over time, we expect faster growing yeast to out-compete slower growing yeast, resulting in an increase in maximum growth rate. As seen above, the growth rate improves from **0.30 h⁻¹** to **0.41 h⁻¹** in the span of 15 hours. 

## Recommendations 

There is a myriad of further applications for turbidostats, such as characterization of species, directed evolution, responses to stimuli (gene-regulating metabolites) and so much more. 

We encourage you to choose species and media compositions to suit your interests. Have fun! 

-----

## Detailed procedure

1. Add media into your media container. Sterilize by autoclaving.
2. Adjust the tube lengths on the cap of your small sterile vial such that one just touches the media, while another sits above the media.
3. Inoculate your small sterile vial with drops of your culture. 
4. Wipe vial and place in the Pioreactor. 
5. For your media pump:
	*	Attach the source tube to your media container. 
	*	Attach the sink tube to the vial cap tube that sits **above** the media. 
6. For your waste pump:
	*	Attach the source tube to the vial cap tube that **touches** the media.  
	*	Attach the sink tube to your waste container.
7.	Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
8.  On the left menu, select the _Pioreactors_ page.
9.	Select _Manage_, start _Stirring_ activity and _OD reading_ activity.
10.	Confirm everything looks correct, then start the _Growth rate_ activity.
11.	Start the _Dosing automation_. 
12. Change automation to _Turbidostat_. Set your _Volume_ and _Target OD_. 
13. You can change the parameters of the turbidostat automation in the _Settings_ tab.
14. Changes will take effect immediately.

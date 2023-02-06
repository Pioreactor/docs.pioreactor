---
title: Temperature cycling of continuous cultures
slug: /temp-cycle
---
import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success Goal
Apply turbidostat functions with temperature cycling to study yeast behaviour in a more natural temperature environment. 
:::

## Requirements

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

## Introduction 

Observations of cultures in lab settings are often disconnected from real world behaviours. In nature, cultures are subjected to many cyclic changes tied to the day and night cycle. We can mimic these cycled environments using plugins on our Pioreactor.

We created a plugin that cycles the temperature between 30°C and 40°C sinusoidally over a 24 hour period. Together with turbidostat media cycling, the maximum specific growth rate can be characterized between a culture held at a static temperature versus a culture undergoing temperature cycling. This experiment explores concepts described in Knutson et al., (2018). 

## Experiment 



Check out our [blog post](https://pioreactor.com/blogs/pioreactor/using-custom-automations-to-control-your-pioreactor) for an in-depth evaluation of our experiment!

### Results 

Once we [exported our data](/user-guide/export-data), we charted our yeast growth rate against the temperature readings to generate the following graph:

![](/img/experiments/yeast_growth_vs_temp.png)

## Recommendations 



-----

## Detailed procedure

1. Add media into your media container. Sterilize by autoclaving.
2. Adjust the tube lengths on the cap of your small sterile vial such that **one just touches the media**, while another **sits above the media**.
3. Inoculate your small sterile vial with drops of your culture. 
4. Wipe vial and place in the Pioreactor. 
5. For your media pump:
	*	Attach the source tube to your media container. 
	*	Attach the sink tube to the vial cap tube that sits **above** the media. 
6. For your waste pump:
	*	Attach the source tube to the vial cap tube that **touches** the media. 
7.	Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
8.  On the left menu, select the _Pioreactors_ page.
9.	Select _Manage_, start _Stirring_ activity and _OD reading_ activity.
10. Install the **cycle_temp** plugin from the _Plugins_ tab. This will give you a new option in your _Temperature automation_ activity. 
11. Under _Manage_ > _Activities_ > _Temperature automation_, select _Cycle Temp_ from the drop down menu. Click _Start_. 
12.	Confirm everything looks correct, then start the _Growth rate_ activity.
13.	Start the _Dosing automation_. 
14. Change automation to _Turbidostat_. Set your _Volume_ and _Target OD_. 
15. You can change the parameters of the turbidostat automation in the _Settings_ tab.
16. Changes will take effect immediately.


## References

Knutson, C. M., McLaughlin, E. M., & Barney, B. M. (2018). Effect of temperature control on green algae grown under continuous culture. _Algal research_, _35_, 301-308. [https://doi.org/10.1016/j.algal.2018.08.020](https://www.osti.gov/pages/servlets/purl/1613542)
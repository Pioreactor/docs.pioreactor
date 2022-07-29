---
title: Directed evolution of salt-tolerant yeast 
slug: /directed-evolution-salt-tolerance
tags:
  - Yeast
  - Turbidostat
  - Continuous culture
  - University education
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal
Use a turbidostat system with selective pressures to study evolutionary principles. 
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/turbidostat/turbido_mats_1.jpg"]}>

*   Two available Pioreactors
*   Dry baker's yeast
*	Table salt
*	YPD media
*	Scale (accurate to 0.1)
*	Two peristaltic pumps: 
	*	One media pump
	*	One waste pump
*	Two liquid containers:
	*	One labelled "media"
	*	One labelled "waste"

</AssemblyInstructionBlock>

## Introduction 

Let's consider how we can combine our Pioreactor abilities to explore more complex ideas:

Our turbidostat allows us to perform long-term experiments without the concern of limiting nutrients or space. By itself, there are no selective pressures to stop our cultures from reaching their maximum specific growth rate. We can introduce a selective pressure (like salt) that would reduce the growth rate. Over time, we will see our cultures **adapt** to the new salt conditions. 

## Experiment

Turbidostats remove and add media periodically to keep our culture size low and nutrient availability high. We inoculated some drops of baker's yeast into a vial, then set the turbidostat pumps to add and remove 1 mL of media to achieve our target OD of 2 AU. 

Once your culture has acclimated, inoculate new vials to compare the newly-grown salt-tolerant strain to the wild type strain. 

### Results

The following normalized OD graph resulted from our turbidostat using salted media: 

![](/img/experiments/turbidostat/salt_turbidostat.png)

A maximum growth rate of **0.6 h⁻¹** was reached. In contrast, when you look back at our [secondary level salt experiment](/experiments/salt-stress-on-yeast), the 4.5% w/v salt vial only reached **0.29 h⁻¹** before the stationary phase occured. This is because our previous experiment **selected** for salt tolerant yeast, but the culture reached stationary phase before any **long term adaptation** could be observed. 

Using the turbidostat system to supply new nutrients and keep the population low, we were able to _double_ the maximum growth rate! 

Our yeast culture exhibited an adaptation to grow in high salt, indicating our turbidostat yeast culture has gained a **higher fitness** in 4% w/v salted media.  

We then grew batch cultures of our new, salt-tolerant yeast, alongside our original (wildtype) yeast culture in 2 Pioreactors using 4% w/v salt media. Here's our result:  

![](/img/experiments/turbidostat/salt_vs_wt_gr.png)

You can see just how effective our turbidostat system was in creating an environment that pushed yeast into becoming more salt tolerant. 

-----

## Detailed procedure

#### Part 1: Growing your turbidostat culture
1. Prepare one liquid container of 5% w/v YPD broth with 4% w/v salt. 
2. Sterilize by autoclaving, along with your sample vial. 
3. [Sterilize and setup your pumps.](/user-guide/using-pumps)
4. Once cooled, fill your sample vial with the autoclaved media by setting the _Add media_ value to 14 mL. 
5. Inoculate the sample vial with baker's yeast.  
6. Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7. Click _Manage_ and _Start_ the _Dosing automation_. Change the automation type to _Turbidostat_. 
8. Set your _Volume_ and _Target OD_. 
9. End the experiment once the maximum specific growth rate has increased suffienctly. This may take a day or more.  

:::note
The maximum specific growth rate will increase over time, as faster-growing yeast outcompete slow-growing yeast. 
:::

#### Part 2: Comparing batch cultures
1. Inoculate one vial of sterile salted YPD media with the new, salt-tolerant yeast. 
2. Inoculate a second vial of sterile salted YPD media with the wild type yeast. 
3. Determine their growth rates using two Pioreactors. 

You should be able to observe that the yeast from the turbidostat are quicker to grow in the salt heavy media. 

---
title: Osmotic pressure induced by salt
slug: /salt-stress-on-yeast
tags: 
  - Yeast
  - Salt
  - Secondary education
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success Goal
Use your Pioreactor to model how cells are affected by high salt (hypertonic) solutions.
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/02-secondary-level-education/salt-stress-on-yeast/salt_materials.jpg"]}>

*	At least two available Pioreactors
*	Dry baker's yeast
*   YPD broth mix, or any other media mix
*	Table salt 
*	Scale (accurate to 0.1)

</AssemblyInstructionBlock>

## Introduction

In early biology classes, students learn the core concepts of osmolarity across a cell's membrane. The cell's environment can contain different concentrations of impermeable molecules, creating osmotic pressure and resulting in water entering or leaving the cell. You can quantitatively measure this effect on growth rate using your Pioreactor!

The inside and outside of a cell are separated by the cell's **semi-permeable** membrane. Only water and certain molecules can pass through via active or passive transport (diffusion). All other molecules are **impermeable** and cannot pass through the membrane. We'll refer to these as **solutes**. 

Through the process of osmosis, water (our **solvent**) is drawn across a cell's membrane towards higher concentrations of solutes, until an equilibrium is reached. If the concentration of solutes inside and outside a cell is the same, then the cell is in an **isotonic** solution. Less external solutes or more solutes create **hypotonic** and **hypertonic** solutions, respectively. 

Increasing salt content to create a hypertonic solution will slow the yeast's fermentation or reproductive activities, leading to slower growth. As salt is added in excess, yeast cells will fail to grow; yeast needs water and their cell volume eventually becomes too small for growth.  

## Experiment

We performed this experiment using five Pioreactors and vials containing 15 mL of sterile YPD stock and salt concentrations of 0%, 1.5%, 3%, 4.5%, and 6% w/v. 
A sample calculation is as follows:
$$
\text{w/v \%} = \frac{\text{mass}}{\text{volume}}
$$
To create a salt concentration of **3% w/v** for **15 mL** of media:
$$
0.03 = \frac{\text{mass}}{15 \text{ mL}}
$$
$$
\text{mass} = 0.45 \text{ g}
$$
Therefore, **0.45 grams** of table salt is needed for 3% w/v of salt.
To each vial, 0g, 0.225g, 0.45g, 0.675g and 0.9g of table salt were added, respectively. They were then inoculated with one drop of rehydrated active yeast (0.500 g of dry yeast in a 15 mL YPD broth vial). The _Temperature automation_ was set on _Thermostat_ at 32.5°C.

### Results

After approximately 26 hours, the following growth rates were recorded: 

![](/img/experiments/02-secondary-level-education/salt-stress-on-yeast/salt_growth_rate.png)

We can summarize our results in the following table to highlight our data: 

|Salt percent (w/v)|Peak growth rate (h⁻¹)|Time to reach stationary phase|
|------------------|--------------|----------------------|
|0% (control) |0.78|8 hours|
|1.5%|0.67|8.3 hours|
|3%|0.49|11.5 hours|
|4.5%|0.29|17 hours|
|6%|0.22|24 hours|

The highest growth was recorded in the vial at 0% salt w/v (no salt stress), at approximately **0.78 h⁻¹**. The phases of growth (lag, log phase) occurred quickly and the stationary phase was reached in the smallest time frame of about **8 hours**. 

As the salt percentage increased, the peak growth rate decreased and the time to reach the stationary phase was extended. These time increases are non-linear; between 0% and 1.5% salt, the stationary phase was reached within an increment of half an hour &#151 however 4.5% and 6% salt had a large increment of 7 hours (from 17 to 24 hours). 

##  Recommendations 

The flexibility of the Pioreactor means you can do much more with this simple concept! Here are some recommendations: 
* performing the experiment over a longer period of time, or with higher salt percentages; papers commonly go up to 10%. 
* exploring pretreated cells (by growing one culture in a saltier environment, then comparing a non-treated culture to the treated culture under the same conditions). See our [experiment on directed evolution](/experiments/directed-evolution-salt-tolerance). 
* considering different species and how they react to the same salt conditions.

-----

## Detailed procedure

1. Prepare a stock of 50g YPD / 1L distilled water. Aim for 20ml × the number of Pioreactors you are using, as each Pioreactor will require about 15mL of media.
2. Divide this stock into small vials, then sterilize by autoclaving. Allow stock to cool.
2. Weigh table salt to add to your media. This amount can be calculated as per the example above.
4. Divide the stock into the sterilized vials and add salt.
5. Mix the salt with gentle shaking or by using the _Stirring_ function on the Pioreactor. 
6. Dilute a small amount of yeast in 15mL of YPD stock media. This can be stored in a fridge for future use.
7. Using sterile techniqes, add 3-4 drops of this yeast solution to your vials. 
8. Wipe the vials and place them in the Pioreactor.
9.  Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
10. On the left menu, select the _Pioreactors_ page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)). Select _Control all Pioreactors_, and start:
     * _Stirring_ activity
     * _OD reading_ activity
     * _Temperature automation_ activity 
11.  Confirm that everything looks normal on the _Overview_ page (ex: receiving optical density signal).
12.	Back on the _Pioreactors_ page, select _Control all Pioreactors_ and start _Growth rate_. 
13.  Watch the growth progress on the _Overview_ page! 

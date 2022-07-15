---
title: Osmotic pressure induced by salt
slug: /salt-stress-on-yeast
tags: 
  - Yeast
  - Salt
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success Goal
The addition of salt in media causes growth stress for yeast. Classes can quantify the linear differences in growth rate over time as salt content increases. 

Topic discussions for this experiment can range from introducing osmotic pressures (hypotonicity and hypertonicity of a cell) to discussing the effectiveness of salt as a food curing agent. Teachers can also consider exploring different species and their reactivity to salt content.  
:::tip

## Requirements

*	At least two available Pioreactors
*	Dry baker's yeast
*   YPD broth mix, or any other media mix
*	Table salt 
*	Scale (accurate to 0.1)

## Steps

<AssemblyInstructionBlock title="Step 1: Preparing the media" images={["user-guide/calibrate.png","user-guide/calibrate_stirring.png"]}>

1. Prepare a stock of 50g YPD / 1L distilled water. Aim for 20ml × the number of Pioreactors you are using, as each Pioreactor will require about 15mL of media.
2. Divide this stock into small vials, then sterilize by autoclaving. Allow stock to cool.
2. Weigh table salt to add to your media. This amount can be calculated as per the example below.
4. Divide the stock into the sterilized vials and add salt.
5. Mix the salt with gentle shaking or by using the _Stirring_ function on the Pioreactor. 


</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Inoculate your vials" images={["user-guide/calibrate.png","user-guide/calibrate_stirring.png"]}>

6. Dilute a small amount of yeast in 15mL of YPD stock media. 
7. Sterily add 3-4 drops of this yeast solution to your vials. 
8. Wipe the vials and place them in the Pioreactor.

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Step 3: Start your experiment" images={["user-guide/calibrate.png","user-guide/calibrate_stirring.png"]}>

6.  Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7.  On the left menu, select the _Pioreactors_ page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)). Select _Manage all Pioreactors_, and start:
	*	_Stirring_ activity
	*	_OD reading_ activity
	*	_Temperature automation_ activity 
8.  Confirm that everything looks normal on the _Overview_ page (ex: receiving optical density signal).
9.	Back on the _Pioreactors_ page, select _Manage all Pioreactors_ and start _Growth rate_. 
	* Optional: you can change the names of the Pioreactor in the UI to display the target temperature.
11.  Students can watch growth progress on the _Overview_ page. 


</AssemblyInstructionBlock>





## Example

We replicated this experiment using five Pioreactors and vials containing 15 mL of sterile YPD stock and salt concentrations of 0%, 1.5%, 3%, 4.5%, and 6% w/v. 
A sample calculation is as follows:
$$
\text {w/v \%}= \frac {\text{mass}}{\text {volume}} 
$$
To create a salt concentration of **3% w/v** for **15 mL** of media:
$$
0.03 = \frac {\text{mass}}{15 mL} 
$$
$$
\text {mass} = 0.45 g
$$
Therefore, **0.45 grams** of table salt is needed for 3% w/v of salt.
To each vial, 0g, 0.225g, 0.45g, 0.675g and 0.9g of table salt were added, repectively. They were then innoculated with one drop of rehydrated active yeast (0.500 g of dry yeast in a 15 mL YPD broth vial). The _Temperature automation_ was set on _Stable_ at 32.5°C. 

### Results

After approximately 26 hours, the following implied growth rates were recorded: 

![](/img/experiments/salt_growth_rate.png)

We can summarize our results in the following table to highlight the non-linearity of our data: 

|Salt percent (w/v)|Peak growth rate (h⁻¹)|Time to reach stationary phase|
|------------------|--------------|----------------------|
|0% (control) |0.78|8 hours|
|1.5%|0.67|8.3 hours|
|3%|0.49|11.5 hours|
|4.5%|0.29|17 hours|
|6%|0.22|24 hours|

The highest growth was recorded in the vial at 0% salt w/v (no salt stress), at approximately 0.78 h⁻¹. We conclude that the phases of growth (lag, log phase) occured quickest with no salt stress and the stationary phase was reached in the smallest time frame of about 8 hours. 

As the salt percentage increases, the peak growth rate decreases and the time to reach the stationary phase was extended. These time increases are non-linear; between 0% and 1.5% salt, the stationary phase was reached within an increment of half an hour &#151 however 4.5% and 6% salt had a large increment of 7 hours (from 17 to 24 hours). 

Teachers can consider expanding on this experiment. Suggestions include:  
* performing the experiment over a longer period of time, or with higher salt percentages; papers commonly go up to 10%. 
* exploring pretreated cells (by growing one culture in a saltier environment, then comparing a non-treated culture to the treated culture under the same conditions).
* considering different species and how they react to the same salt conditions.
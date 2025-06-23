---
title: Comparing concentrations of media
slug: /low-vs-high-conc-media
tags: 
  - Yeast
  - nutrient
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

:::tip Success Goal 
Conduct a simple comparison of yeast growth between a low percent and high percent YPD media.
:::

## Requirements

<AssemblyInstructionBlock images={['experiments/media_exp.jpg']}>

*   At least two available Pioreactors
*   Dry baker's yeast
*   YPD broth mix, or any other media mix

</AssemblyInstructionBlock>

## Introduction

The most accessible introductory experiment you can conduct with basic supplies is comparing concentrations of media. In this particular example, we will use YPD media and grow yeast cultures, but any media/culture you have readily available will work! 

YPD is a common complete media used to propagate yeast cultures, containing peptone and sugars necessary for yeast growth. Now consider creating two YPD media compositions: one with 1% YPD w/v, and one with 5% YPD w/v. We can easily infer that a culture grown in 5% YPD will flourish more than one grown in 1% &#151 but let's explore our hypothesis further! 

Discuss with your students the following ideas: 
*	How would both cultures start off? Will one have a faster rate than another? Why?
*	Will one reach a higher growth rate? Why or why not? 
*	How long will it take for the culture in 5% YPD to slow in growth? Compared to the culture in 1% YPD? 

## Experiment

We created 1% YPD by adding 0.15 grams of YPD broth powder to 15 mL:

$$\text \{w/v \%\}= \frac \{\text\{mass\}\}\{\text \{volume\}\}$$

$$
\text \{mass\} = \{0.01\} \times \{15 \:\text \{mL\}\}
$$

$$
\text \{mass\} = 0.15 \:\text \{grams\}
$$

Using the same logic, 5% YPD was created by adding 0.75 grams to 15 mL.

We inoculated both with 100 uL of a yeast slurry using a micropipette. If this is unavailable, a dropper will work as well!  

### Results 

As expected, growth diminished earlier for the culture inoculated in 1% YPD: 

![](/img/experiments/ypd-conc-exp.png)


## Recommendations 

Consider lower or higher bounds for your media compositions. How much sooner will yeast stop growing in 0.5% YPD? Can we test when yeast growth is halted by YPD concentration versus reaching a peak turbidity? 

## Detailed procedure

1. Prepare a sterile stock of two different concentrations of your media of choice.
	* If the media appears different before inoculation, we recommend you [blank](/user-guide/set-up-an-experiment#blanking) your vials before adding your culture. 
2. Inoculate each vial with a very small amount of your microorganism, using best practices to avoid other contamination.
	* In our example, a yeast stock solution can be made by diluting a small amount of yeast in 15mL of YPD stock media, then a drop of this stock solution can be added to your vials.
3. Wipe the vials and place them in the Pioreactors. 
4. Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
5. On the left menu, select the _Pioreactors_ page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)).
6. Select _Calibrate_ for each Pioreactor and under the _Blanks_ tab, click _Start_.
7. Select _Manage all Pioreactors_, and start _Stirring_ activity, _Temperature automation_ activity (set to an optimal temperature; ex. 30°C) and _OD reading_ activity.
8. Confirm that everything looks normal (ex: receiving optical density signal).
9.	Back on the _Pioreactors_ page, select _Manage all Pioreactors_ and start _Growth rate_. It will take a minute for results to begin showing up. 
10. Optional: you can change the names of the Pioreactor in the UI to display the percent of media. 
11. Students can watch growth progress on the _Overview_ page.


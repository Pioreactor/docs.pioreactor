---
title: Osmotic pressure induced by salt
slug: /salt-stress-on-yeast
tags: 
  - Yeast
  - Salt
---

:::tip Success Goal
Observe differences yeast cell viability by introducing osmotic pressures with increasing salt concentrations. This experiment explores the topic of hypo- and hypertonicity. Salty environments create osmotic pressure gradients across the cell membrane. This introduces cellular stress, resulting in differences in cell growth rates. 
:::tip

## Requirements

*	At least two available Pioreactors
*	Dry baker's yeast
*   YPD broth mix, or any other media mix
*	Table salt 
*	Scale (accurate to 0.1)

## Steps

1.  Prepare a sterile stock of 50g YPD / 1L distilled water. Aim to make 20ml × the number of Pioreactors you are using, as each Pioreactor will require about 15mL of media.
2.  Weigh table salt to add to your media. This amount can be calculated (as per the example below), or decided by the teacher beforehand. 
3. Once stock is cool, divide the stock into the sterilized vials and add salt. You can mix the salt with gentle shaking or by using the stirring function on the Pioreactor. 
4. When the salt is diluted into the media, inoculate the stock with a very small amount of baker's yeast using best practices to avoid other contamination. 
	* A yeast stock solution can be made by diluting a small amount of yeast in 15mL of YPD stock media, then a drop of this stock solution can be added to your vials.
6.  Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7.  On the left menu, select the _Pioreactors_ page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)). Select _Manage all Pioreactors_, and start _Stirring_ activity and _OD reading_ activity.
	* Optional: you can  start the _Temperature automation_ activity set on an optimal temperature.
8.  Confirm that everything looks normal on the _Overview_ page (ex: receiving optical density signal).
9.	Back on the _Pioreactors_ page, select _Manage all Pioreactors_ and start _Growth rate_. It will take a minute for results to begin showing up. 
10.  Optional: you can change the names of the Pioreactor in the UI to display the target temperature.
11.  Students can watch growth progress on the _Overview_ page.
12.  After 24 or so hours (even sooner in some cases),
    the students can explore maximum growth rates achieved, duration of lag phases, and overall yield of the cultures. 


## Example

We replicated this experiment using four Pioreactors and vials containing 15 mL of sterile YPD stock and salt concentrations of 0%, 2%, 4%, and 6% w/v. 
A sample calculation is as follows:
$$
\text {w/v \%}= \frac {\text{mass}}{\text {volume}} 
$$
To create a salt concentration of **2% w/v** for **15 mL** of media:
$$
0.02 = \frac {\text{mass}}{15 mL} 
$$
$$
\text {mass} = 0.3 g
$$
Therefore, **0.3 grams** of table salt is needed for 2% w/v of salt.
To each vial, 0g, 0.3g, 0.6g, and 0.9g of table salt were added, repectively. They were then innoculated with one drop of rehydrated active yeast (0.500 g of dry yeast in a 15 mL YPD broth vial). The _Temperature automation_ was set on _Stable_ at 30°C. 

### Results

After approximately 20 hours, the following implied growth rates were recorded: 

![](/img/experiments/salt_growth_rate.png)

We can summarize our results in the following table to highlight the non-linearity of our data: 

<center>

|Salt percent (w/v)|Peak growth rate (h⁻¹)|Time to reach stationary phase|
|------------------|---------------------|--------------------|
|0%|0.68|9 hours|
|2%|0.37|14 hours|
|4%|0.11|30 hours|
|6%|0.07|N/A|

</center>

The highest growth was recorded in the vial at 0% salt w/v (no salt stress), at approximately 0.68 h⁻¹. We conclude that the phases of growth (lag, log phase) occured quickest with no salt stress and the stationary phase was reached in the smallest time frame of about 9 hours. 

As the salt percentage increases, the peak growth rate decreases in a non-linear manner &#151 2% having a little over half of the maximum growth rate as 0% salt w/v, while 4% reached a peak of 1/3 of 2%'s peak.  

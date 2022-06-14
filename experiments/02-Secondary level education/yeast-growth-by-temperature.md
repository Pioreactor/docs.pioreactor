---
title: Yeast growth at varying temperatures
slug: /yeast-growth-by-temperature
tags: 
  - Yeast
  - Temperature
---

:::tip Success Goal
Demonstrate the effect of temperature on yeast growth. Students may have a prior belief that temperature effects are linear, ex: a culture at 10℃ will grow at half the rate compared to a culture at 20℃, and a third the rate at 30℃. This experiment would show the non-linear effect of temperature on growth (and relate it to how refrigerators halt spoilage for so long). Students and the teacher can pick temperatures to test beforehand.
:::tip

## Requirements

*   At least two available Pioreactors
*   Dry baker's yeast
*   YPD broth mix, or any other media mix

:::info
The Pioreactor doesn't cool samples, so it can't achieve temperatures below your ambient temperature. If you want to test low temperatures, you can place the Pioreactor in a fridge, or in a cooler with ice packs (making sure the electronics won't get wet).
:::


## Steps

1.  Prepare a sterile stock of 50g YPD / 1L distilled water. Aim to make 20ml × the number of Pioreactors you are using, as each Pioreactor will require about 15mL of media.
2.  Distribute up to 15mL of liquid into each clean and sterilized Pioreactor vial.
3.  Once stock is cool, inoculate the stock with a very small amount of baker's yeast using best practices to avoid other contamination. 
	* A yeast stock solution can be made by diluting a small amount of yeast in 15mL of YPD stock media, then a drop of this stock solution can be added to your vials. Add 3-4 drops of this yeast slurry. 
4.  Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
5.  On the left menu, select the _Pioreactors_ page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)). Select _Manage all Pioreactors_, and start _Stirring_ activity, and _OD reading_ activity.
6.  For each Pioreactor in use, select _Manage_ and start the _temperature automation_, select _Stable_ and provide the target temperature for that Pioreactor.
7.  Confirm that everything looks normal on the _Overview_ page (ex: receiving optical density signal).
8.  Optional: you can change the names of the Pioreactor in the UI to display the target temperature. This can also be done at the start of your experiment.
9.	Back on the _Pioreactors_ page, select _Manage all Pioreactors_ and start _Growth rate_. It will take a minute for results to begin showing up. 
10.  Students can watch growth progress on the _Overview_ page.

## Example

The following experiment was performed using four Pioreactors. Four vials containing 15 mL of the sterile YPD stock were inoculated with 1 drop of rehydrated active yeast (0.500 g of dry yeast in a 15mL YPD broth vial). They were subjected to different temperatures of 28°C, 32°C, 36°C and 40°C. 

![](/img/experiments/temperature_temp.png)

Over the course of 12 hours, the following graphs were recorded: 

![](/img/experiments/temperature_growth_rate.png)

Though subtle, non-linear patterns of growth rate are observed between the temperatures. Key data points are summarized in the following table: 

|Temperature|Peak growth rate (h⁻¹)|Percent of highest peak|Time to reach stationary phase|
|------------------|----------------|-----|--------------------|
|28°C|0.65|85.5%|9 hours|
|32°C|0.73|96.1%|8.5 hours|
|36°C|0.76|100%|7.5 hours|
|40°C|0.59|77.6%|9.5 hours|

Rather than increasing as temperature increases, the higherst growth rates form a slight bell-curve, with the highest overall growth rate of **0.76 h⁻¹** occuring at 36°C. It tapers off at 40°C, since this temperature lies outside of the ideal temperature range for yeast. 

The time it takes for each culture to reach the stationary phase is also related to the peak growth rates. Cultures that peaked higher did so in a quicker time frame, thus reaching the stationary phase sooner. 

We chose a relatively small temperature range that mostly aligned with optimal temperatures for yeast growth. We encourage you to explore temperatures outside of this range, whether by cooling the Pioreactor externally (using ice/a cooler) or increasing the temperature (the maximum that can be reached is approximately ambient plus 20°C). 

## References


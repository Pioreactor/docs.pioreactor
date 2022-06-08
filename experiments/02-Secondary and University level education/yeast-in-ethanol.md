---
title: Yeast growth in ethanol
slug: /yeast-in-ethanol
---
:::tip Success goal 
Ethanol, along with carbon dioxide, are waste products of yeast fermentation. High concentrations of ethanol can inhibit yeast cell division and growth. Students can explore the ethanol fermentation process and practice dilution calculations for media preparation. We've included two methods to calculate ethanol precentages; teachers can prepare this beforehand or allow their students to calculate it themselves.
:::


## Requirements 
*   At least two available Pioreactors
*   Dry baker's yeast
*	Ethanol (95% rubbing alcohol) 
*	Distilled water 

## Steps 
1. Prepare a sterile stock of 50g YPD / 1L distilled water. Aim to make 20 mL × the number of Pioreactors you are using, as each Pioreactor will require about 15 mL of media.
2. Prepare 1 mL of each ethanol concentration you would like to use.  
   * Detailed calculations are found in the example below. Aim for an end ethanol concentration between 0-10%. 
3. Evenly divide the YPD stock into the vials you’d like to use (ie. 15 mL in each vial). 
4. Add the mililitre of ethanol solution into the respective vial. Mix with gentle shaking. 
5. Inoculate the stock with a very small amount of baker's yeast using best practices to avoid other contamination. Wait for the yeast granules to dissolve, aided by gentle rocking or stirring.
   * Alternatively, a yeast stock solution can be made by diluting a small amount of yeast in 15 mL of YPD stock, then 1 drop of this stock solution can be added to your vials.
6. Place the vials in your Pioreactors. 
7. Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
8. On the left menu, select the Pioreactors page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)). Select Manage all Pioreactors, and start _Stirring_ activity and _OD reading_ activity.
9. Optional: you can turn on the Temperature automation activity and set it on _Stable_ at an optimal temperature (ex. 30C). 
10. Confirm that everything looks normal (ex: receiving optical density signal).
11.	Back on the _Pioreactors_ page, select _Manage all Pioreactors_ and start _Growth rate_. It will take a minute for results to begin showing up. 
12. Optional: you can change the names of the Pioreactor in the UI to display the target temperature.
13. Students can watch growth progress on the _Overview_ page.

## Example

We conducted an experiment using 4 Pioreactors and vials with ethanol concentrations of 0%, 2%, 4%, and 6%. After adding 15 mL YPD stock into each vial, we calculated the amount of ethanol to use per vial using **Method 1** below. **Method 2** can be done instead to simplify the procedure. 

### Method 1

The first concentration of 0% ethanol is easy &#151 we just add 1 mL of distilled water. For the rest, the following calculations were done to determine the volume of ethanol to add to each vial: 

$$
\frac{[\text{ethanol}]}{\text{media\thickspace volume + ethanol\thickspace volume}}=\text{ethanol \%}
$$ 

In our case, we have **15 mL** of YPD broth per vial, and want to add **1 mL** of diluted ethanol; we want to determine our final concentration of ethanol **in 1 mL** to get an overall 2% concentration in our complete, 16 mL of media. 

For 2%: 
$$
\frac{[\text{ethanol}]}{\text{15 mL + 1 mL}}=\text{2\%}
$$
$$
[\text{ethanol}]=32\%
$$

Now, we know we want our 1 mL of dilute ethanol concentration to equal 32%. Since we're starting with an initial concentration of 95%, we can apply the following dilution equation to figure out the concentration of 95% ethanol to use: 
  
Initial volume (V<sub>i</sub>)= ?  
Initial concentration (C<sub>i</sub>)= 95%  
Final volume (V<sub>f</sub>)= 1 mL  
Final concentration (C<sub>f</sub>)= 32%  

Now we substitute our variables into the equation C<sub>i</sub> V<sub>i</sub> = C<sub>f</sub> V<sub>f</sub>

$$
V_i = \frac{(32\%)(\text{1 mL})}{95\%}
$$ 
$$
V_i = \text{0.34 mL} 
$$

So the composition to create 2% ethanol media is: 
*	15 mL YPD stock 
*	0.34 mL of 95% ethanol 
*	0.66 mL distilled water (1 mL - 0.34 mL)

:::tip
If you don't have a small enough resolution on your measuring tools, you can increase the total amount of ethanol dilution. For example, instead of making 1 mL diluted ethanol, we used **3.4 mL** of 95% ethanol and **6.6 mL** of distilled water measured in a graduated cylindar to create a total 10 mL diluted ethanol. From that, we mixed well and added 1 mL into our vial.
:::

We repeated this for 4% and 6% ethanol concentrations. 

### Method 2

Instead of finding the exact ethanol amounts to add to create a specific ethanol percentage, we can keep halving the ethanol solution and calculate the ethanol percentage afterwards. For example:

Vial 1: 1 mL of 95% ethanol  
Vial 2: 0.5 mL of 95% ethanol; 0.5 mL distilled water  
Vial 3: 0.25 mL of 95% ethanol; 0.75 mL distilled water  
Vial 4: 1 mL distilled water  

To calculate the resulting ethanol percentage: 
$$
\frac{[\text{ethanol}]}{\text{media\thickspace volume + ethanol\thickspace volume}}=\text{ethanol \%}
$$ 

Substitute the [ethanol] value for half of 95% (or 47.5%):

$$
\frac{47.5\%}{\text{15 mL + 1 mL}} = \text{ethanol \%}
$$
$$
\text{ethanol \%} \approx 3\%
$$

This technique produces halving ethanol percentages of 0%, 1.5%, 3%, and 6% to be studied on a cluster of 4 Pioreactors. 

### Results 
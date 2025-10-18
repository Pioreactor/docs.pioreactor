---
title: Control testing
slug: /control-testing
tags: 
  - Yeast
  - Control
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

:::tip Success Goal 
Conduct a simple control test to evaluate results between Pioreactors, using the same media composition, culture, and activities. 
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/three_pioreactors.jpg"]}>

*   At least two available Pioreactors
*   Dry baker's yeast
*   YPD broth mix, or any other media mix

</AssemblyInstructionBlock>

## Introduction

Like any biotechnology, sources of error exist due to slight differences between Pioreactors. This can include bulb intensity variations, minute differences in the Pioreactor plastics, and even slight differences between vials! We can minimize how these differences affect our experiment through calibrations (check out [available calibrations](/user-guide/calibrate-od600)) and test these differences by conducting control tests.

Control tests for the Pioreactor, unlike typical experiments, look at two or more instruments under the same conditions to determine any variances. This is an important statistical consideration when comparing data between several Pioreactors for research purposes. Ideally, we'd expect Pioreactors run under the same conditions to have very similar results. If results are dissimilar, we can begin to investigate sources of error by manipulating internal factors (such as configurations).

## Experiment

The experiment is simple: place identical sterile vials into your Pioreactors, inoculated with the same amount of culture. Set stirring at the same RPM, temperature, and turn on OD reading and growth rate. 

With all factors the same, you should see similar normalized OD and growth rate graphs being generated. 

### Results 

Here are graphs we generated though our A/A test: 

![](/img/experiments/aa-test-results.png)

These kinds of tests make it easy to identify any unusual activity occurring in a specific Pioreactor (i.e, if it is missing an LED, temperature malfunctions, etc). In our case, though, both ran almost identically! Thus, we conclude that reliable comparisons can be drawn between these Pioreactors. 

## Detailed procedure

1. Prepare identical sterile stocks in vials with your media of choice.
2. Inoculate each vial with a very small amount of your microorganism, using best practices to avoid other contamination.
	* In our example, a yeast stock solution can be made by diluting a small amount of yeast in 15mL of YPD stock media, then a drop of this stock solution can be added to your vials.
3. Wipe the vials and place them in the Pioreactors. 
4. Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
5. On the left menu, select the _Pioreactors_ page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)).
6. Select _Manage all Pioreactors_, and start _Stirring_ activity, _Temperature automation_ activity (set to an optimal temperature; ex. 30°C) and _OD reading_ activity.
7. Confirm that everything looks normal (ex: receiving optical density signal).
8.	Back on the _Pioreactors_ page, select _Manage all Pioreactors_ and start _Growth rate_. It will take a minute for results to begin showing up. 
9. Watch growth progress on the _Overview_ page.
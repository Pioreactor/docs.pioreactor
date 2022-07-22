---
title: Directed evolution of salt-tolerant yeast 
slug: /directed-evolution-salt-tolerance

---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal
Use a turbidostat system with selective pressures to study evolutionary principles. Turbidostats remove and add salted media periodically, so cultures grown in this environment will become salt-tolerant over time. Once your culture has acclimated, inoculate new vials to compare the newly-grown salt-tolerant strain to the wild type strain. 
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/turbidostat/turbido_mats_1.jpg","experiments/turbidostat/turbido_mats_2.jpg"]}>

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

-----

## Steps

<AssemblyInstructionBlock title="Step 1: Preparing the media" images={["experiments/turbidostat/turbido_mats_1.jpg","experiments/turbidostat/turbido_mats_2.jpg"]}>

1. Prepare one liquid container of 5% w/v YPD broth with 4% w/v salt. 
2. Sterilize by autoclaving, along with your sample vial. 
3. [Sterilize and setup your pumps.](/user-guide/using-pumps)
4. Once cooled, fill your sample vial with the autoclaved media by setting the _Add media_ value to 14 mL. 
5. Inoculate the sample vial with baker's yeast.  

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Running the turbidostat" images={["experiments/turbidostat/turbido_mats_1.jpg","experiments/turbidostat/turbido_mats_2.jpg"]}>

1. Click _Manage_ and _Start_ the _Dosing automation_. Change the automation type to _Turbidostat_. 
2. Set your _Target OD_ and _Volume_, then _Start_. 
3. End the experiment once the maximum specific growth rate has increased suffienctly. This may take a day or more.  

:::note
The maximum specific growth rate will increase over time, as faster-growing yeast outcompete slow-growing yeast. 
:::

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3. Comparison of salt-tolerant and wild type cells" images={["experiments/turbidostat/turbido_mats_1.jpg","experiments/turbidostat/turbido_mats_2.jpg"]}>

1. Inoculate one vial of sterile salted YPD media with the new, salt-tolerant yeast. 
2. Inoculate a second vial of sterile salted YPD media with the wild type yeast. 
3. Determine their growth rates using two Pioreactors. 

You should be able to observe that the yeast from the turbidostat are quicker to grow in the salt heavy media. 

</AssemblyInstructionBlock>

-----

## Example

The following normalized OD graph resulted from our turbidostat using salted media: 

![](/img/experiments/turbidostat/salt_turbidostat.png)

A maximum growth rate of **0.6 h⁻¹** was reached. In contrast, when you look back at our [secondary level salt experiment](/experiments/salt-stress-on-yeast), the 4.5% w/v salt vial only reached **0.29 h⁻¹**. This is because our previous experiment _selected_ for salt tolerant yeast cells, but not enough time passed for the yeast to _adapt_ before nutrients ran out. 

Using the turbidostat system, we were able to _double_ the maximum growth rate! 

Our yeast culture exhibited an adaptation to grow in high salt, indicating our turbidostat yeast culture has gained a **higher fitness** in 4% w/v salted media.  

We then grew batch cultures of our new, salt-tolerant yeast, alongside our original (wildtype) yeast culture in 2 Pioreactors using 4% w/v salt media. Here's our result:  

![](/img/experiments/turbidostat/salt_vs_wt_gr.png)

You can see just how effective our turbidostat system was in creating an environment that pushed yeast into becoming more salt tolerant. 


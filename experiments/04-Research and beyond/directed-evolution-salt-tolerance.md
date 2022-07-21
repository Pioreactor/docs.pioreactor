---
title: Directed evolution of salt-tolerant yeast 
slug: /directed-evolution-salt-tolerance
hide_table_of_contents: true
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

1. Click _Manage_ and _Start_ the _Dosing automation_. Change the automation type to a turbidostat. 




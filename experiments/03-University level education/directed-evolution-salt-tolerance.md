---
title: Directed evolution of salt-tolerant yeast 
slug: /directed-evolution-salt-tolerance
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal/overview?
Explore the concepts of evolution in a turbidostat system where salt is the selective pressure. Turbidostats remove and add salted media periodically, so cultures grown in this environment will become salt-tolerant over time. Once your culture has acclimated, inoculate new vials to compare the newly-grown salt-tolerant strain to the wild type strain. 


:::

## Requirements

<AssemblyInstructionBlock images={["experiments/turbidostat/turbido_mats_1.jpg","experiments/turbidostat/turbido_mats_2.jpg"]}>

*   Two available Pioreactors
*   Dry baker's yeast
*	YPD media
*	Scale (accurate to 0.1)
*	Two peristaltic pumps: 
	*	One media pump
	*	One waste pump
*	Two liquid containers:
	*	One labelled "media"
	*	One labelled "waste" 

</AssemblyInstructionBlock>

## Steps

<AssemblyInstructionBlock title="Step 1: Setting up the pumps" images={["experiments/turbidostat/pump_to_pwm.png","experiments/turbidostat/sink_and_source.png"]}>

1. Insert the cable of one peristaltic pump into <Highlight color={colors.magenta}>PWM channel 2.</Highlight> This is your **media pump.** 
2. Insert the cable of the other pump into <Highlight color={colors.orange}>PWM channel 4.</Highlight>  This is your **waste pump.**

More details on attaching pumps can be found [here](/user-guide/using-pumps). 

:::note
The peristaltic pump has two tubes: a <Highlight color={colors.red}>source</Highlight> and a <Highlight color={colors.blue}>sink.</Highlight> Source tubes take up liquid, and sink tubes expel liquid. You can label your tubes with coloured tape as we have in the images.
:::

</AssemblyInstructionBlock>
---
title: Yeast nutrient enrichment
slug: /yeast-nutrient-enrichment
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal
Dried malt extract, or DME, is a precursor used in beer production.  + YL or just DME in a turbidostat system. 
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/turbidostat/turbido_mats_1.jpg","experiments/turbidostat/turbido_mats_2.jpg"]}>

*   Two available Pioreactors
*   Dry baker's yeast
*	YPD media
*	Yeast nutrients (Yeast Lightning) 
*	Scale (accurate to 0.1)
*	Four peristaltic pumps: 
	*	One media pump
	*	One nutrient pump
	*	Two waste pumps
*	Three liquid containers:
	*	One labelled "media"
	*	One labelled "nutrients"
	*	One labelled "waste" 

</AssemblyInstructionBlock>

## Steps

-----

<AssemblyInstructionBlock title="Step 3: Vial, media and waste container setup" images={["experiments/turbidostat/adjusting_tubes.png","experiments/turbidostat/luer_attach.png","experiments/turbidostat/media_flow.png"]}>

1. Add media into your media container. Sterilize by autoclaving.
2. Adjust the tube lengths on the cap of your small sterile vial such that <Highlight color={colors.green}>one just touches the media,</Highlight> while another <Highlight color={colors.magenta}>sits above the media.</Highlight>
3. Inoculate your small sterile vial with drops of your culture. 
4. Wipe vial and place in the Pioreactor. 
5. For your media pump:
	*	Attach the <Highlight color={colors.teal}>source tube to your media container.</Highlight>
	*	Attach the <Highlight color={colors.orange}>sink tube to the vial cap tube</Highlight> that sits **above** the media. 
6. For your waste pump:
	*	Attach the <Highlight color={colors.red}>source tube to the vial cap tube</Highlight> that **touches** the media.  
	*	Attach the <Highlight color={colors.blue}>sink tube to your waste container.</Highlight>  

The flow of liquid is summarized in the third picture, using <Highlight color={colors.red}>red arrows.</Highlight> 
</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Start activities and automations" images={["experiments/turbidostat/general_automations.png","experiments/turbidostat/dosing_automation.png","experiments/turbidostat/PID_turbidostat.png","experiments/turbidostat/turbidostat_settings.png","experiments/turbidostat/overview_settings.png"]}>

6.	Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7.  On the left menu, select the _Pioreactors_ page. Add the additional Pioreactor (more information [here](/user-guide/create-cluster)). 
8.	Select _Manage all Pioreactors_, and start _Stirring_ activity and _OD reading_ activity.
9.	Confirm everything looks correct, then start the _Growth rate_ activity for all Pioreactors. 
10.	Start separate _Dosing automation_ for both Pioreactors. Change automation to _PID Turbidostat_. Set your _Time between dosing_ and _Target OD_. 

:::note
_Target OD_ refers to the normalized optical density. 

To change the _Time between dosing_ and/or _Target OD_ while the experiment is running, go to the _Settings_ tab instead of the _Activities_ tab.
:::

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 5: Changing parameters" images={["experiments/turbidostat/dosing_settings.png"]}>

1. You can change the parameters of the turbidostat automation in the _Settings_ tab.
2. Changes will take effect immediately.


</AssemblyInstructionBlock>


## Example 


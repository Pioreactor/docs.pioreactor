---
title: Algae day and night cycles
slug: /algae-day-night-cycle
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal
This experiment will show the growth curve of algae over a 20h:4h day/night cycle, at two different intensities (4% and 8%). 
:::

## Requirements

<AssemblyInstructionBlock images={["experiments/03-university-level-education/01-algae-day-night-cycle/algae_exp.jpg"]}>

* At least one available Pioreactor
* Algae
* Media for algae; for ex. Bold's Basal Medium (BBM)
* Two LED cables per Pioreactor.

</AssemblyInstructionBlock>

## Introduction

Adding two LED bulbs onto your base Pioreactor will transform it into a _photo_-bioreactor, giving you the ability to grow species that require light! In this experiment, we will monitor algae using our [Day/Night plugin](/user-guide/using-community-plugins#installing-plugins). 

There are two main phases that will be observed between the light being on ("day") and off ("night"). **Exponential growth** will occur during the “day” as algae biomass is accumulated through photosynthesis), and **stalled growth** will occur “overnight”, where algae reproduce, but don't accumulate biomass. This should make for some interestingly patterned OD readings! 

## Experiment

We started off with a culture of _Chlorella vulgaris_ that we grew in a tissue culture flask using Bold's Basal Medium. We then used 10 mL of BBM per vial, then inoculated with 1 mL of our culture. With two Pioreactors, we started our experiment using the Day/Night plugin and chose light intensities of 4% and 8%. We kept stirring high to avoid formation of flocculants that could impede our OD readings. 

Typical experiments use a 16h:8h day night cycle, but we've adjusted the time period to 20h:4h. The experiment takes place over a few days, so results were seen after a week.  

## Results 

For this style of experiment, let's investigate our normalized OD results: 

![](/img/experiments/03-university-level-education/01-algae-day-night-cycle/nod_algae_intensity.png)

Adjusting just one factor (light intensity) where one is twice as high as the other yielded an approximate doubling of growth in the vial subjected to higher light intensity! 

## Recommendations

Your Pioreactor is capable of controling a wide diversity of lighting effects on algae or other photosynthesizing microorganisms. The addition of the Day/Night cycle plugin and the ability to use LEDs opens a range of photobioreactor experiments! You can adjust intensities, photoperiods, and even switch out types of bulbs across the light spectrum to study effects of colours or UV lights. 

## Detailed procedure

1.	Attach two LED cables into channels C and D. 
2.	Insert the bulbs into the X2 and X3 pockets and secure them in place with the pocket caps. While on, some light leaking is acceptable. 
3.	Prepare a sterile stock of media for algae. We used Bold’s Basal Medium (BBM). Aim for 10 to 12 mL of media per each vial/Pioreactor you will be using. This is to allow more headspace for oxygen!  
4.	Add 1 mL of your algae culture to each vial. 
5.	Wipe the vials and place them in the Pioreactor.
6.	Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7.	Click the _Plugins_ tab on the left and install the _led_cycle_ plugin. This will add the Day/Night feature when you begin LED automations. 
8.	On the left menu, select the Pioreactors page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)). Select _Manage all Pioreactors_, and start _Stirring_ activity and _OD reading_ activity.

:::note Optional
Start the _Temperature automation_ activity set on an optimal temperature. 
:::

9.	Start the _LED automation_ at the bottom of the _Activities_ list in _Manage_. Select _Day/Night Cycle_ from the drop down menu, and set your desired _Intensity_ (no more than 12% works best!) or _Light_ and _Dark duration_ (16h:8h is optimal). 
	*	This automation creates a day/night cycle ideal for algae growth. 
10.	Confirm that everything looks normal on the Overview page (ex: receiving optical density signal).
11.	Back on the Pioreactors page, select _Manage all Pioreactors_ and start _Growth rate_. It will take a minute for results to begin showing up.

:::note Optional
Change the names of the Pioreactor in the UI to organize your vials.
:::

12.	Watch the growth progress on the Overview page.



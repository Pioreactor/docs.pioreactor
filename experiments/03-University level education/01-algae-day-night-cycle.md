---
title: Algae day and night cycles
slug: /algae-day-night-cycle
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

:::tip Success goal
This experiment will show the basic growth curve of algae over a 16h:8h day/night cycle. Students can observe exponential growth during the “day” hours, and stalled growth “overnight”. 
:::

## Requirements

* At least one available Pioreactor
* Algae
* Media for algae; for ex. Bold's Basal Medium (BBM)
* Two LED cables (supplied?) 

## Protocol

<AssemblyInstructionBlock title="Step 1: Attaching the LEDs" images={["user-guide/hardware-assembly/rpi_types.jpg"]}>

1.	Attach two LED cables into channels C and D. 
2.	Insert the bulbs into the X2 and X3 pockets and secure them in place with the pocket caps. While on, some light leaking is acceptable. 

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 2: Preparing the vials" images={["user-guide/hardware-assembly/rpi_types.jpg"]}>

3.	Prepare a sterile stock of media for algae. We used Bold’s Basal Medium (BBM). Aim for approximately 14 mL of media per each vial/Pioreactor you will be using. 
4.	Add 1 mL of your algae culture to each vial. 

:::note Optional
You can separate an opaque, grown algae culture between your Pioreactors. This is especially useful if your algae culture is particularly transparent.
:::

5.	Wipe the vials and place them in the Pioreactor.

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 3: Start activities and automations" images={["user-guide/hardware-assembly/rpi_types.jpg"]}>

6.	Visit [pioreactor.local](http://pioreactor.local) and start a new experiment.
7.	On the left menu, select the Pioreactors page. Add any additional Pioreactors that you would like to use (more information [here](/user-guide/create-cluster)). Select _Manage all Pioreactors_, and start _Stirring_ activity and _OD reading_ activity.

:::note Optional
Start the _Temperature automation_ activity set on an optimal temperature. 
:::

8.	Start the _LED automation_ at the bottom of the _Activities_ list in _Manage all Pioreactors_. Set _Intensity_ to 10%. 
	*	This automation creates a day/night cycle ideal for algae growth (16 hours on, and 8 hours off). 

</AssemblyInstructionBlock>

-----

<AssemblyInstructionBlock title="Step 4: Monitoring your experiment" images={["user-guide/hardware-assembly/rpi_types.jpg"]}>

9.	Confirm that everything looks normal on the Overview page (ex: receiving optical density signal).
10.	Back on the Pioreactors page, select _Manage all Pioreactors_ and start _Growth rate_. It will take a minute for results to begin showing up.

:::note Optional
Change the names of the Pioreactor in the UI to display the target temperature.
:::

11.	Students can watch growth progress on the Overview page.

</AssemblyInstructionBlock>

## Example



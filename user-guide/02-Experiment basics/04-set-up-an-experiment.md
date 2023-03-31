---
title: Setting up an experiment
slug: /set-up-an-experiment
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

### Creating an experiment

1. To create a new experiment, use the "New experiment" button at the top of the _Experiment Overview_ page.

![](/img/user-guide/start_new_experiment.png)

2. On the next screen, enter your new experiment name. This name should be unique from prior experiment names. Enter optional metadata about your experiment. The description can be changed later, too. Click "Save" when done.

![](/img/user-guide/create_new_experiment_page.png)

3. (Optional) If working with more than one Pioreactor in your cluster, it's useful to assign experiment-specific labels to them. These labels show up in the user interface, and make progress checking and updating easier. The labels can be changed later. Click "Assign" when done.

:::tip
Use these labels to keep track of treatments on multiple Pioreactors. For example, labels '15C', '25C' and '35C' can be used to differentiate temperature treatments. These labels will be shown on graphs generated in the _Overview_ page on the website. They can be changed in the UI later, too.
::: 

![](/img/user-guide/assign_labels_bulk.png)

:::tip
When starting, it's useful to run a _self test_ to confirm that your Pioreactors are all working as expected. [How to run a self-test.](/user-guide/running-self-test)
:::

### (Optional) Blanking

When working with **small amounts** of a microorganism, or very turbid media, you can obtain more accurate growth rates by [blanking the vial](/user-guide/od-normal-growth-rate#blanking) before inoculation.

<AssemblyInstructionBlock title="How to record a blank" images={["experiments/calibrate.png","experiments/blank.png"]}>

1. Insert your sterile vial containing media into the Pioreactor before inoculating with your species of interest.
2. On the website, click the _Pioreactors_ tab on the left-hand menu, and choose one of the active Pioreactors.
3. Select _Calibrate_, and under the _Blanks_ tab, click _Start_. The Pioreactor will now record the optical density of the blank vial.
4. Repeat for all the Pioreactors to be used. 
	*	A notification will appear when a Pioreactor has finished blanking. 
6. You can now inoculate your vials and begin your experiment.

</AssemblyInstructionBlock>

## Start activities from the Pioreactors page.

On the _Pioreactors_ page, you should see at least one Pioreactor under _Active Pioreactors_. Using the "Manage" button, you can start an [activity](/user-guide/activities) . Once started, jobs can also be _paused_ (and then _resumed_) or _stopped_. Clicking the "Manage all Pioreactors" button will give you control to start and stop activities on all active Pioreactors.


![](/img/user-guide/pioreactor_page_manage.png)
![](/img/user-guide/pioreactor_page_activities.png)


The typical sequence of activities to start is:

1. **Stirring**
2. **Temperature automation**, and selecting **Thermostat**
3. **Optical density**
4. After observing that the optical density looks normal on the _Experiment Overview page_, **Growth rate**
5. Any other activities. Any of the automations can be started, or [custom jobs](/user-guide/using-community-plugins) you've added to your Pioreactor.


## Changing settings

If you'd like to **change the settings** of your activities after you start, navigate back to the _Pioreactors_ tab. Under _Manage_ for a single Pioreactor or _Manage all Pioreactors_, click the _Settings_ tab.

![](/img/user-guide/manage_ui.png)

Here you can change the settings of your activities (such as temperature, RPM, and dosing volume) without pausing or stopping the activity.

![](/img/user-guide/settings.png)


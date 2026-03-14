---
title: Setting up an experiment
slug: /set-up-an-experiment
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

### Creating an experiment

To create your first experiment, open the experiment selector in the top-left corner of the UI and choose **Start a new experiment**. This appears as the first item in the dropdown above your other experiments.

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/start-new-experiment-dropdown-framed.png)

On **Start a new experiment**:

1. Enter a unique experiment name.
2. Optionally add a description. This can be edited later.
3. Optionally add tags. Press `Enter` or type a comma after each tag to save it.
4. If you want to reuse setup details from a previous run, click **Populate with previous experiment**.
5. Click **Save**.

Tags are useful for grouping related experiments across time. For example, you might tag experiments by strain, media, operator, protocol, or project name.

After saving, you can come back to the experiment later from **Experiments**. Tags make it easier to find related runs when your list grows.


### Assigning Pioreactors to your experiment

The _Pioreactors_ tab will display any active and inactive Pioreactors assigned to the experiment. Click on "Assign Pioreactors" to assign pioreactors to the current experiment. 

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/pioreactors-tab.png)


![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/assign-pios-to-another-experiment.png)



## Start activities from the Pioreactors page


On the _Pioreactors_ page, you should see at least one Pioreactor under _Active Pioreactors_. You can start an [activity](/user-guide/activities) by clicking the "Off" label under an activity, or by using the "Control" menu. Once started, you can pause (and then resume) or stop jobs. Clicking the "Control all Pioreactors" button will give you control to start and stop activities on all active Pioreactors.


![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/pioreactor_page_manage.png)

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/pioreactor_page_activities.png)


The typical sequence of activities to start is:

1. **Stirring**
2. **Temperature automation**, and selecting **Thermostat**
3. **Optical density**
4. After observing that the optical density looks normal on the _Experiment Overview page_, **Growth rate**
5. Any other activities. Any of the automations can be started, or [custom jobs](/user-guide/using-community-plugins) you've added to your Pioreactor.


## Changing settings

If you'd like to **change the settings** of your activities after you start, navigate back to the _Pioreactors_ tab. You can click a setting directly in a Pioreactor card to jump to that control. For example, click `Target stir RPM` in the card's _Settings_ row to open the settings panel at stirring.

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/pioreactor_page_manage.png)

You can also open settings from _Control_ for a single Pioreactor or _Control all Pioreactors_, then click the _Settings_ tab.

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/manage_ui.png)

Here you can change the settings of your activities (such as temperature, RPM, and dosing volume) without pausing or stopping the activity.

(Optional) If working with more than one Pioreactor in your cluster, it's useful to assign experiment-specific labels in these settings. These labels appear in the user interface, making progress checking and updating easier. The labels can be changed later. Click "Assign" when done.

:::tip
Use these labels to keep track of treatments on multiple Pioreactors. For example, labels '15C', '25C' and '35C' can be used to differentiate temperature treatments. These labels will be shown on graphs generated in the _Overview_ page on the website. They can be changed in the UI later, too.
::: 

#### Ending your experiment

On the _Overview_, _Pioreactors_, and _Profiles_ tabs, the option to _Control experiment_ is located in the top left corner.

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/end-or-delete-experiment.png)

The option _End experiment_ will stop all running activities and unassign all Pioreactors from the experiment. 

:::warning
The option _Delete experiment_ will do the same, while also deleting all experiment data. Note that you will not be able to export any data from a deleted experiment. 
:::

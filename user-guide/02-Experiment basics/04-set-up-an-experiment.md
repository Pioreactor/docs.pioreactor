---
title: Setting up an experiment
slug: /set-up-an-experiment
hide_table_of_contents: true
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

### Creating an experiment

1. To create a new experiment, click on the drop-down menu on the top of the left-hand bar. Click the "New experiment" button.

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/start_new_experiment.png)

2. On the next screen, enter your new experiment name. This name should be unique from prior experiment names. Enter optional metadata about your experiment; you can modify the description later, if necessary. Click "Save" when done.

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/create_new_experiment_page.png)


### Assigning Pioreactors to your experiment

The _Pioreactors_ tab will display any active and inactive Pioreactors assigned to the experiment. Click on "Assign Pioreactors" to assign pioreactors to the current experiment. 

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/pioreactors-tab.png)

Pioreactors that are assigned to another experiment will be unavailable, unless unassigned through the _Inventory_ tab or through it's assigned experiment's _Pioreactors_ tab. 

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/assign-pios-to-another-experiment.png)


## Start activities from the Pioreactors page

:::tip
When starting, it's useful to run a _self test_ to confirm that your Pioreactors are all working as expected. [How to run a self-test.](/user-guide/running-self-test)
:::

On the _Pioreactors_ page, you should see at least one Pioreactor under _Active Pioreactors_. You can start an [activity](/user-guide/activities) using the "Control" button. Once started, you can pause (and then resume) or stop jobs. Clicking the "Control all Pioreactors" button will give you control to start and stop activities on all active Pioreactors.


![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/pioreactor_page_manage.png)

![](/img/user-guide/02-experiment-basics/04-set-up-an-experiment/pioreactor_page_activities.png)


The typical sequence of activities to start is:

1. **Stirring**
2. **Temperature automation**, and selecting **Thermostat**
3. **Optical density**
4. After observing that the optical density looks normal on the _Experiment Overview page_, **Growth rate**
5. Any other activities. Any of the automations can be started, or [custom jobs](/user-guide/using-community-plugins) you've added to your Pioreactor.


## Changing settings

If you'd like to **change the settings** of your activities after you start, navigate back to the _Pioreactors_ tab. Under _Control_ for a single Pioreactor or _Control all Pioreactors_, click the _Settings_ tab.

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

---
title: Setting up an experiment
slug: /set-up-an-experiment
---


### Creating an experiment

1. To create a new experiment, use the "New experiment" button at the top of the _Experiment Overview_ page.

![](/img/user-guide/start_new_experiment.png)

2. On the next screen, enter your new experiment name, unique from prior experiments. This cannot be changed. Enter optional metadata about your experiment. The description can be changed later. Click "Create" when done.

![](/img/user-guide/create_new_experiment_page.png)

3. (Optional) If working with more than one Pioreactor in your cluster, it's useful to assign experiment-specific labels to them. These labels show up in the user interface, and make progress checking and updating easier. The labels can be changed later. Click "Assign" when done.

:::tip
Use these labels to keep track of treatments on multiple vials. For example, labels '15C', '25C' and '35C' can be used to differentiate temperature treatments. These labels will be shown on graphs generated in the _Overview_ page on the website. 
::: 

![](/img/user-guide/assign_labels_bulk.png)



## Start activities from the Pioreactors page.

:::info
Before starting an experiment, it's useful to run a _self test_ to confirm that your Pioreactors are all working as expected. [How to run a self-test.](/user-guide/running-self-test)
:::

On the _Pioreactors_ page, you should see at least one Pioreactor under _Active Pioreactors_. Using the "Manage" button (Or "Manage all Pioreactors" button above), you can start an [activity](/user-guide/activities). Once started, jobs can also be _paused_ (and then _resumed_) and _stopped_.



![](/img/user-guide/pioreactor_page_manage.png)
![](/img/user-guide/pioreactor_page_activities.png)


The typical sequence of activities to start is:

1. **Stirring**
2. **Temperature automation → Stable**
3. **Optical density**
4. **Growth rate**
5. Any other activities. Any of the automations can be started, or [custom jobs](/user-guide/using-community-plugins) you've added to your Pioreactor.

Once your activities are started, you're ready to [monitor your experiment](/user-guide/monitor-experiment)! 
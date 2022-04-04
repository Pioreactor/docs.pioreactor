# Setting up an experiment

### Creating an experiment

1. To create a new experiment, use the "New experiment" button at the top of the _Experiment Overview_ page.

![](/img/user_guide/start_new_experiment.png)

2. On the next screen, enter your new experiment name (must be unique from prior experiments), and enter an optional metadata about your experiment. The description can be changed later (the experiment name cannot be changed later, however). Click "Create" when done.

![](/img/user_guide/create_new_experiment_page.png)

3. (Optional) If working with more than one Pioreactor in your cluster, it's useful to assign experiment-specific labels to them. These labels show up in the user interface, and make progress checking and updating easier. The labels can be changed later. Click "Assign" when done.

![](/img/user_guide/assign_labels_bulk.png)


The next pages will guide you through setting up heating, stirring and optical density reading for your Pioreactor.



### Alternative: Start activities from the Pioreactors page.

:::info
Before starting any activities, it's useful to run a _self test_ to confirm that your Pioreactors are all working as expected. [How to run a self-test.](http://docs.pioreactor.com)
:::

On the _Pioreactors_ page, you should see at least one Pioreactor under _Active Pioreactors_. Using the "Manage" button, you can start an [activity](/user_guide/Experiment%20preparation/Activities). Once started, jobs can also be _paused_ (and then _resumed_) and _stopped_.

![](/img/user_guide/pioreactor_page_manage.png)
![](/img/user_guide/pioreactor_page_activities.png)


The typical sequence of activities to start is:

1. **Stirring**
2. **Temperature automation**
3. **Optical density**
4. **Growth Rate**
5. Any other activities. Any of the automations can be started, or custom jobs you've added to your Pioreactor.
# Setting up an Experiment

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

On the _Pioreactors_ page, you should see at least one Pioreactor under _Active Pioreactors_. Using the "Manage" button, you can start an activity. Once started, jobs can also be _paused_ (and then _resumed_) and _stopped_.

![](/img/user_guide/pioreactor_page_manage.png)
![](/img/user_guide/pioreactor_page_activities.png)


The typical sequence of activities to start is:

1. **Stirring**: this starts the stirring in the Pioreactor. After starting stirring, you can change the stirring speed in the Settings tab. (And default stirring speed can be changed in the configuration).

2. **Temperature automation**: turning on a temperature automation will start collecting temperature readings, and, if enabled, start heating the culture.


3. **Optical density**: this activity turns on the system that measures culture density. Readings will start to populate the _Experiment Overview_ page. It's useful to inspect the first few minutes to readings to ensure things look okay (ex: nothing appears too wild, stirring is not too fast or slow, etc.)

:::info
You can also perform a blank optical density reading first, which is especially useful if your media is already turbid.
:::

4. **Growth Rate**: this activity requires that stirring and optical density be running as well. This starts the calculation of a normalized optical density, and the implied growth rate.

5. Any other activities. Any of the automations can be started, or custom jobs you've added to your Pioreactor.
# Starting an experiment, activities, and collecting data

### Starting an experiment

To start a new experiment, use the "New experiment" button at the top of the _Experiment Overview_ page.

![](https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-09-22_at_4.26.25_PM.png?v=1632342428)

On the next screen, enter your new experiment name (must be unique from prior experiments), and enter an optional description. This description can be changed later (the experiment name cannot be changed later, however). Click "Create"

![](https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-09-22_at_4.31.03_PM.png?v=1632342732)

If you plan on running an experiment with dosing pumps, the Next screen will help you clean and prepare your pumps. Otherwise, you can leave this page. Let's go to _Pioreactors_ page.

### Start activities

On the _Pioreactors_ page, you should see at least one Pioreactor under _Active Pioreactors_. Using the "Manage" button, you can start an activity. Once started, jobs can also be _paused_ (and then _resumed_) and _stopped_.

![](https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-09-22_at_4.27.55_PM.png?v=1632342567)

![](https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-09-22_at_4.27.59_PM.png?v=1632342601)

The typical sequence of activities to start is:

1. **Stirring**: this starts the stirring in the Pioreactor. After starting stirring, you can change the stirring speed in the Settings tab. (And default stirring speed can be changed in the configuration).

2. **Temperature automation**: turning on a temperature automation will start collecting temperature readings, and, if enabled, start heating the culture.


3. **Optical density**: this activity turns on the system that measures culture density. Readings will start to populate the _Experiment Overview_ page. It's useful to inspect the first few minutes to readings to ensure things look okay (ex: nothing appears too wild, stirring is not too fast or slow, etc.)

:::info
You can also perform a blank optical density reading first, which is especially useful if your media is already turbid.
:::

4. **Growth Rate**: this activity requires that stirring and optical density be running as well. This starts the calculation of a normalized optical density, and the implied growth rate.

5. Any other activities. Any of the automations can be started, or custom jobs you've added to your Pioreactor.
---
title: Adding your plugins to the web interface
slug: /adding-plugins-to-ui
---

With custom background jobs or automations, the goal is to have it available in the web interface, so you and your users don't need to use the command line at all. We've built support for easily adding to the web interface.

### Adding a custom automation to the drop-down of automations

Suppose we wish to add our new automation, either installed from a package or via the `plugins` folder, to the drop-down list of automations users can choose from:

![](/img/developer-guide/dropdown_automations.png)

This list is sourced from yaml files located on the leader's Raspberry Pi, in either of two directories:
 - `/var/www/pioreactorui/contrib/automations/`, is the source of the "default" automations
 - `/user/pioreactor/.pioreactor/plugins/ui/automations`, is a directory to put custom plugins.

 Placing a new yaml file in the correct folder there will populate the list with your new automation. Here's an example `example.yaml` file:

```yaml
---
display_name: My Automations Name  # human readable name
automation_name: my_automations_name   # the corresponding name of the automation from the Python code.
description: Provide a meaningful description of what the automation does, when to use it, how it works...
published_settings:
  - key: duration  # key is the same as the keyword in the Python code.
    default: 30
    unit: min
    label: Duration between events
  - key: target_od
    default: 1.5
    unit: AU
    label: Target OD
  - key: volume
    default: 0.75
    unit: mL
    label: Max volume
  - key: intensity
    default: 50
    unit: "%"  # note: percent signs needs to be quoted.
    label: Intensity of PWM
```

If this file was saved to the folder `/user/pioreactor/.pioreactor/plugins/ui/automations/dosing`, we would see the following in the web interface (after refreshing):

![](/img/developer-guide/dropdown_automations_with_example.png)

![](/img/developer-guide/automations_example.png)


### Adding a custom background job to the list of activities

![](/img/developer-guide/activities.png)


The list of activities, among other things, is sourced from either of two directories:
 - `/var/www/pioreactorui/contrib/jobs/`, is the source of the "default" jobs
 - `/user/pioreactor/.pioreactor/plugins/ui/jobs`, is a directory to put custom plugins.

Placing a new yaml file in either of these folders will populate the UI dropdown with your new automation. Here's an example `example.yaml` file:

```yaml
---
display_name: Name
job_name: job_name_as_defined_in_Python
display: true  # true to display on the /Pioreactors card
source: your_plugin_name
description: This description is displayed with the start/stop buttons in Manage / Activities.
published_settings:
  - key: rpm   # as defined in Python
    unit: RPM  #
    label: Stirring speed # human readable name
    description: This description is displayed with an editable field in Manage / Settings.
    type: numeric  # not used atm, but one of numeric, bool, text
    default: null
    display: true # true to display on the /Pioreactors card
  - key: something_else
    unit: lb
    label: Something else
    description: This description is displayed with an editable field in Manage / Settings.
    type: numeric # not used atm, but one of numeric, bool, text
    default: null
    display: true # true to display on the /Pioreactors card
```

Saving it to this folder, and refreshing the page:

![](/img/developer-guide/activities_with_example.png)

![](/img/developer-guide/settings_with_example.png)

![](/img/developer-guide/card_with_example.png)



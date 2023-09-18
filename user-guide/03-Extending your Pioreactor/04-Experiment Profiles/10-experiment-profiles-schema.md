---
title: Experiment profiles schema
slug: /experiment-profiles-schema
---



```yaml
# Main structure
experiment_profile_name: <string> # Name of the experiment profile

metadata: # Optional
  author: <string> # Author of the experiment profile
  description: <string> # Description of the experiment profile

plugins: # Optional
  - name: <string> # Name of the plugin
    min_version: <string> # Minimum required version of the plugin

aliases: # Optional: provide aliases
    <pioreactor_unit_name>: <alias_name> # Optional: aliases for Pioreactors

common: # Optional: jobs that are common for all Pioreactors
  <job_name>:
    actions:
      - type: <string> # Type of action: "start", "pause", "resume", "stop", or "update"
        hours_elapsed: <float> # When the action is scheduled (in hours after experiment start)
        options: # Optional: parameters for the action
          <option_name>: <value>
        arguments: <list> # Optional: arguments for the action

pioreactors: # Optional: jobs that are specific to some Pioreactors
  <alias_name or pioreactor_unit_name>:
    jobs:
      <job_name>:
        actions:
          - type: <string> # Type of action: "start", "pause", "resume", "stop", or "update"
            hours_elapsed: <float> # When the action is scheduled (in hours after experiment start)
            options: # Optional: parameters for the action
              <option_name>: <value>
```

### Max number of actions

Currently, the max number of total actions is **248**. This may be relaxed in a future software version. Contact us if you need this done.

### Examples

See examples of experiment profiles [here](https://github.com/Pioreactor/experiment_profile_examples).
---
title: Experiment profiles schema
slug: /experiment-profiles-schema
---

```yaml
# Main structure
experiment_profile_name: <string> # Name of the experiment profile

metadata:
  author: <string> # Author of the experiment profile
  description: <string> # Description of the experiment profile

plugins:
  - name: <string> # Name of the plugin
    min_version: <string> # Minimum required version of the plugin

aliases:
  <alias_name>: <bioreactor_name> # Optional: aliases for bioreactors

common: # Optional: jobs that are common for all bioreactors
  <job_name>:
    actions:
      - type: <string> # Type of action: "start", "pause", "resume", "stop", or "update"
        hours_elapsed: <float> # When the action is scheduled (in hours after experiment start)
        options: # Optional: parameters for the action
          <option_name>: <value>
        arguments: <list> # Optional: arguments for the action

pioreactors:
  <alias_name or bioreactor_name>:
    jobs:
      <job_name>:
        actions:
          - type: <string> # Type of action: "start", "pause", "resume", "stop", or "update"
            hours_elapsed: <float> # When the action is scheduled (in hours after experiment start)
            options: # Optional: parameters for the action
              <option_name>: <value>
```

### Examples

See examples of experiment profiles [here](https://github.com/Pioreactor/experiment_profile_examples)
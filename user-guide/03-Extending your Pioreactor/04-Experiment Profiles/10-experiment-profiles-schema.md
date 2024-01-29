---
title: Experiment profiles schema
slug: /experiment-profiles-schema
---


Below is a schema for experiment profiles. We also do a run-time check

```yaml
# Main structure of the experiment profile
experiment_profile_name: <string>  # Name of the experiment profile

# Metadata section (optional)
metadata:
  author: <string>      # Author of the experiment profile
  description: <string> # Description of the experiment profile

# Plugins section (optional)
plugins:
  - name: <string>        # Name of the plugin
    min_version: <string> # Minimum required version of the plugin

# Common jobs section (optional)
# Jobs that are common for all Pioreactors
common:
  jobs:
    <job_name>:
      actions:
        - type: <string>     # Type of action: "start", "pause", "resume", "stop", "update", or "log"
          hours_elapsed: <float> # Time when the action is scheduled (in hours after experiment start)
          # Options for the action (optional)
          # If type is 'log', a 'message' parameter is required here
          options:
            <option_name>: <value>
          # Arguments for the action (optional)
          arguments: <list>

# Pioreactors section (optional)
# Jobs that are specific to some Pioreactors
pioreactors:
  <pioreactor_unit_name>:
    # Optional label for the Pioreactor
    label: <string>
    jobs:
      <job_name>:
        actions:
          - type: <string>     # Type of action: "start", "pause", "resume", "stop", or "update"
            hours_elapsed: <float> # Time when the action is scheduled (in hours after experiment start)
            # Optional 'if' directive for conditional execution of actions
            if: <string> # Can be an expression
            # Options for the action (optional)
            # Values can be expressions, denoted with ${{ }}
            options:
              <option_name>: <value>
```

### Examples

See examples of experiment profiles [here](https://github.com/Pioreactor/experiment_profile_examples).
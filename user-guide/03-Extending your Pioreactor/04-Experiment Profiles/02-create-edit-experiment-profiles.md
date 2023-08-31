---
title: Creating and editing experiment profiles
slug: /create-edit-experiment-profiles
---

As we develop support for experiment profiles, we'll be changing how to create and edit them. For now, you'll need to add the yaml file to the folder `~/.pioreactor/experiment_profiles` on your leader Pioreactor.

### Example: starting jobs on all Pioreactors

```yaml
experiment_profile_name: complex_example

metadata:
  author: Cam Davidson-Pilon
  description: A profile to immediately start stirring, heating to 30C, and (after 15m) od_reading and (later) growth_rate_calculating.

common:
  stirring:
    actions:
      - type: start
        hours_elapsed: 0.0
        options:
          target_rpm: 500.0
  temperature_control:
    actions:
      - type: start
        hours_elapsed: 0.0
        options:
          automation_name: thermostat
          target_temperature: 30
  od_reading:
    actions:
      - type: start
        hours_elapsed: 0.25
  growth_rate_calculating:
    actions:
      - type: start
        hours_elapsed: 0.33
```

### Example: updating jobs on all Pioreactors

```yaml
experiment_profile_name: updating_jobs

metadata:
  author: Cam Davidson-Pilon
  description: A profile to immediately start stirring, heating to 30C, and, after 2h, update temperature to 35C.

common:
  stirring:
    actions:
      - type: start
        hours_elapsed: 0.0
        options:
          target_rpm: 500.0
  temperature_control:
    actions:
      - type: start
        hours_elapsed: 0.0
        options:
          automation_name: thermostat
          target_temperature: 30
  temperature_automation: # pinging thermostat
    actions:
      - type: update
        hours_elapsed: 2.0
        options:
          target_temperature: 35
```

### Example: Pioreactors have common and different settings


```yaml
experiment_profile_name: specifying_pioreactors

metadata:
  author: Cam Davidson-Pilon
  description: A profile to immediately start stirring on three Pioreactors, but different temperatures. Also have aliases

labels:
  worker1: cool_32_5
  worker2: control_35_0
  worker3: hot_37_5

common:
  stirring:
    actions:
      - type: start
        hours_elapsed: 0.0
        options:
          target_rpm: 500.0

worker1:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat
            target_temperature: 32.5

worker2:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat
            target_temperature: 35

worker3:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat
            target_temperature: 37.5

```

---
title: Creating and editing experiment profiles
slug: /create-edit-experiment-profiles
---


### Using the UI

Experiment profiles can be managed in the UI at `/experiment-profiles`. See video below for a demonstration.


<iframe width="560" height="315" src="https://www.youtube.com/embed/yxxj0ncTxws?si=42eGY8yIt5D84qUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### On the command line

All profiles are stored on the leader's disk under `~/.pioreactor/experiment_profiles/`. You can create and edit profiles in this directory, as well.


## Tips to writing profiles


### How the `if` directive works

:::info
Currently the `if` directive is only available in the `pioreactors` block, and _not_ the `common` block.
:::

The `if` directive can be included in any action to conditionally execute it or not. The `if` statement is evaluated _when the action is to be executed_ (i.e., when `elapsed_hours` has passed).

The `if` directive is a general boolean expression, and to common operators can be used:
 - `and`
 - `or`
 - `not`
 - `True` and `False`
 - `(` and `)`

Also included are numbers (floats), and strings (examples later). The comparison operators are:

 - `==`
 - `>=` and `<=`
 - `>` and `<`

The operators addition `+`, subtraction `-`, multiplication `*`, and division `/` are allowed on floats, as well.

Also available is dynamic data, provided from jobs. For example, the following:

```
pio1::stirring::target_rpm
```

will fetch the `target_rpm` from `pio1`'s `stirring` job _at the time the action is to be executed_. To use this in an example:

```yaml
    stirring:
     ...
     - type: update
       hours_elapsed: 6.0
       if: pio1::stirring::target_rpm >= 500
       options:
         target_rpm: 400

```

will check, after 6 hours, if the `target_rpm` is above 500, and if true, will update the target RPM to 400.

You can also compare against strings. For example, to stop a job if the temperature automation running is equal to `thermostat`, use:

```yaml
    temperature_control:
     ...
     - type: stop
       hours_elapsed: 6.0
       if: pio1::temperature_control::automation_name == thermostat


```

Where do these dynamic values come from? Each job has `published_settings` that can be referenced (refer to the job's source code to all `published_settings` for a job, or they are published in MQTT).

Some published settings have are actually nested json blobs, but we need either numbers or strings to compare in our boolean expression. You can index these json blobs in the boolean expression using `.`, for example:

```yaml
    temperature_automation:
     ...
     - type: update
       hours_elapsed: 6.0
       if: pio1::temperature_control::temperature.temperature <= 30
       options:
         target_temperature: 32
```


We use `temperature.temperature` because the `temperature` published setting is a json blob that looks like the following, and we wish to reference the "temperature" field in the blob:
```
    {
        "temperature": <float>,
        "timestamp": <ISO 8601 timestamp>
    }
```

### Expressions in options

Similar to an `if` directive using dynamic data, options can also have dynamic data (see notes above for syntax, too). However, to distinguish between a string and an expression, an expression **must** be wrapped in `${{ ... }}`. For example, consider the following `update` action:

```yaml
pioreactors:
  worker1:
    jobs:
      stirring:
        actions:
          - type: start
            hours_elapsed: 0
            options:
              target_rpm: 500
          - type: update
            hours_elapsed: 12
            options:
              target_rpm: ${{ worker1:stirring:target_rpm + 50 }}

```

This will update the value of `target_rpm` to whatever its current value is (after 1 hour), and add 50 to it.

You can use the any pioreactor and any job in an expression - you aren't limited to the `job` your editing. For example, the `update` below will dynamically set the `target_rpm` to a function of optical density.

```yaml
pioreactors:
  worker1:
    jobs:
      stirring:
        actions:
          - type: start
            hours_elapsed: 0
            options:
              target_rpm: 500
          - type: update
            hours_elapsed: 12
            options:
              target_rpm: ${{ worker1:stirring:target_rpm + worker1:od_reading:od1.od * 10 }}
```



### Start/stop controllers instead of automations

A common task is to start the thermostat, and you may want to do something like:


```yaml
# wrong, this won't work  ❌
common:
  jobs:
    thermostat:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            target_temperature: 30

```


However, to start (and stop) automations (which the `thermostat` is), you actually need to use the controllers:

```yaml
# correct ✅
common:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat
            target_temperature: 30

```


Likewise, to _stop_ a automation, you need to stop the controller:


```yaml
# correct ✅
common:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat
            target_temperature: 30
        - type: stop
          hours_elapsed: 12.0

```

How do you update `target_temperature`, see below.

### Update automations instead of controllers

A setting like `target_temperature` or `volume` is attached to the automation, not a controller, so you need to update the automation:

```yaml
# correct  ✅
common:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat
            target_temperature: 30
        - type: stop
          hours_elapsed: 12.0
    temperature_automation: # this is thermostat
        - type: update
          hours_elapsed: 1.0
          options:
            target_temperature: 32
        - type: update
          hours_elapsed: 2.0
          options:
            target_temperature: 34

```


### YAML syntax check, and indentation problems

1. Check your YAML syntax with a tool like: https://www.yamllint.com/
2. Note that indentation matters! For example, these mean different things, and only the second one is correct:

```yaml
# wrong ❌
common:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
          automation_name: thermostat # this should be indented to align with options
          target_temperature: 30      # this should be indented to align with options

```

```yaml
# correct ✅
common:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat # lined up!
            target_temperature: 30

```


###  ``` Expected `object`, got `array` - at ` ... .options` ```

This is likely because you are using `-` where you shouldn't:

```yaml
# wrong ❌
common:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            - automation_name: thermostat # don't put - here
            - target_temperature: 30 # don't put - here
```

```yaml
# correct ✅
common:
  jobs:
    temperature_control:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat # don't put - here
            target_temperature: 30 # don't put - here
```
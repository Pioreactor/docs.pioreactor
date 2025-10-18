---
title: Experiment profile schema and syntax
slug: /experiment-profiles-schema
hide_table_of_contents: true
---

Experiment profiles are YAML files that choreograph jobs across your Pioreactor cluster. This page documents the syntax the UI validates against and the constructs available when you are editing a profile directly.

## Add profile metadata

It's a good idea to give your profile a descriptive and unique name. This way it will be easier to find later. Also providing a detailed description will help your colleagues (and future self!) understand what the profile accomplishes.

```yaml
experiment_profile_name: stirring with different temperatures

metadata:
  author: Cameron DP
  description: Turn on stirring for all workers, but set the temperature to be different between them.
```

## `common` and `pioreactors` blocks

Any tasks in the `common` block will execute that task for _all_ workers assigned to the current experiment. The `pioreactors` block is where you can write tasks for specific workers. For example, you may want the stirring to be on for all Pioreactors, but you want the temperature to be different for two workers:

```yaml
common:
  jobs:
    stirring:
      actions:
        - type: start
          hours_elapsed: 0

pioreactors:
  pio001:
    jobs:
      temperature_automation:
        actions:
          - type: start
            hours_elapsed: 0.0
            options:
              automation_name: thermostat
              target_temperature: 35
  pio002:
    jobs:
      temperature_automation:
        actions:
          - type: start
            hours_elapsed: 0.0
            options:
              automation_name: thermostat
              target_temperature: 32
```

### `hours_elapsed` refers to the profile start time

When writing a profile, note that the `hours_elapsed` field refers to when the experiment profile started, and not when the experiment started.

## Conditionals and expressions

### How the `if` directive works

The `if` directive can be included in any action to conditionally execute it or not. The expression is evaluated _when the action is scheduled_ (that is, after `hours_elapsed` hours have passed since the profile started).

The `if` directive supports the boolean operators `and`, `or`, and `not`, parentheses, the literals `True` and `False`, comparisons (`==`, `>=`, `<=`, `>`, `<`), and basic arithmetic on floats (`+`, `-`, `*`, `/`). Strings must be bare words without spaces.

### How expressions work

Expressions are our way to fetch dynamic data, provided from jobs, during execution of profiles. For example, the following:

```
pio1:stirring:target_rpm >= 500
```

fetches the `target_rpm` from `pio1`'s stirring job at execution time, compares it to `500`, and returns true or false. You can use that inside an action:

```yaml
    stirring:
      actions:
        - type: update
          hours_elapsed: 6.0
          if: pio1:stirring:target_rpm >= 500
          options:
            target_rpm: 400
```

You can also compare against strings. For example, to stop a job if the temperature automation currently running equals `thermostat`:

```yaml
    temperature_automation:
      actions:
        - type: stop
          hours_elapsed: 6.0
          if: pio1:temperature_automation:automation_name == thermostat
```

Many published settings are nested JSON blobs. Use `.` to index into them:

```yaml
    temperature_automation:
      actions:
        - type: update
          hours_elapsed: 6.0
          if: pio1:temperature_automation:temperature.temperature <= 30
          options:
            target_temperature: 32
```

### Expressions in options

Options can interpolate expressions as well. Wrap them in `${{ ... }}` so the parser can distinguish expressions from literal strings:

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

You can reference other jobs, too. The example below adjusts stirring based on optical density:

```yaml
          - type: update
            hours_elapsed: 12
            options:
              target_rpm: ${{ worker1:stirring:target_rpm + worker1:od_reading:od2.od * 10 }}
```

### Expressions in the `common` block

Expressions can reference individual Pioreactors (for example `worker1:stirring:target_rpm`), but sometimes you want the aggregate across all workers. Use the `::<job>:setting` syntax inside the `common` block:

```
::<job_name>:setting
```

For example, to conditionally change the stirring RPM for all workers:

```yaml
common:
  jobs:
    stirring:
      actions:
        - type: update
          hours_elapsed: 6
          if: ${{ ::stirring:target_rpm <= 500 }}
          options:
            target_rpm: 500
```

You can also use this syntax when building options:

```yaml
common:
  jobs:
    stirring:
      actions:
        - type: update
          hours_elapsed: 6
          if: ${{ ::stirring:target_rpm <= 500 }}
          options:
            target_rpm: ${{ ::stirring:target_rpm + 10 * ::od_reading:od2.od }}
```

### Built-in functions in expressions

There are a few helper functions you can call inside `${{ ... }}`:

- `random()` produces a random number between 0 and 1.
- `unit()` returns the unit the expression is evaluated for.
- `job_name()` returns the job the expression is evaluated for.
- `experiment()` returns the name of the current experiment.

## Action reference

### `start` and `stop`

`start` launches a job or automation, and `stop` halts it.

### `pause` and `resume`

`pause` temporarily suspends a job or automation, and `resume` restarts it from the paused state.

### `update`

`update` mutates settings on a running job. Provide the new values inside `options`:

```yaml
  actions:
    - type: update
      options:
        volume: 0.75
        duration: 15
```

### `log`

`log` writes a message to the event log. `options.message` is required, and `options.level` defaults to `info`.

```yaml
  actions:
    - type: log
      options:
        message: "This is a message, and it can contain expressions like ${{ unit() }}."
        level: info
```

### `when`

`when` triggers one or more actions the first time a condition becomes true. For example, start a chemostat when OD exceeds a threshold:

```yaml
common:
  jobs:
    od_reading:
      actions:
        - type: start
    dosing_automation:
      actions:
        - type: when
          condition: ${{ ::od_reading:od2.od > 2.0 }}
          hours_elapsed: 0
          actions:
            - type: start
              hours_elapsed: 0
              options:
                automation_name: chemostat
                volume: 0.6
                duration: 10
```

`hours_elapsed` delays evaluation until the specified time. Once the condition fires, the `when` action is exhausted and will not run again.

### `repeat`

`repeat` loops a block of actions. It requires two fields:

- `actions`: the actions to perform each iteration. Their `hours_elapsed` values are relative to the start of the loop.
- `repeat_every_hours`: how long, in hours, between iterations.

```yaml
- type: repeat
  hours_elapsed: 6.0 # start looping after 6 hours
  repeat_every_hours: 0.5 # run every 30 minutes
  actions:
    - type: update
      hours_elapsed: 0.0
      ...
    - type: update
      hours_elapsed: 0.1
      ...
```

Optional fields provide stricter control:

- `max_hours`: total runtime of the loop. With `repeat_every_hours: 0.5` and `max_hours: 6`, the loop runs 12 times.
- `while`: an expression evaluated at the start of each iteration. If it returns `False`, the loop exits.
- `if`: skip the entire `repeat` block when the expression is `False`.

A coarse turbidostat example:

```yaml
add_media:
  actions:
    - type: repeat
      hours_elapsed: 6.0
      repeat_every_hours: 0.0025 # every 9 seconds
      while: ${{ worker1:od_reading:od2.od > 3.0 }}
      actions:
        - type: start
          options:
            volume: 1
remove_waste:
  actions:
    - type: repeat
      hours_elapsed: 6.0
      repeat_every_hours: 0.0025
      while: ${{ worker1:od_reading:od2.od > 3.0 }}
      actions:
        - type: start
          options:
            volume: 1.5
```

## Defining top-level parameters with `inputs`

Surface key constants in an `inputs` section so collaborators can tweak them. Use the names in expressions anywhere in the profile:

```
inputs:
  growth_phase_temp: 37.0
  stationary_phase_temp: 30.0
  od_threshold: 1.6

common:
  jobs:
    temperature_automation:
      actions:
        - type: update
          hours_elapsed: 12.0
          if: ${{ ::od_reading:od2.od < od_threshold }}
          options:
            target_temperature: ${{ stationary_phase_temp }}
        - type: update
          hours_elapsed: 12.0
          if: ${{ ::od_reading:od2.od >= od_threshold }}
          options:
            target_temperature: ${{ growth_phase_temp }}
```

## YAML syntax check and indentation tips

1. Validate your YAML with a tool such as https://www.yamllint.com/.
2. Mind indentation—YAML uses spaces to convey structure. For example, only the second example below is correct:

```yaml
# correct ✅
common:
  jobs:
    temperature_automation:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
            automation_name: thermostat
            target_temperature: 30
```

```yaml
# wrong ❌
common:
  jobs:
    temperature_automation:
      actions:
        - type: start
          hours_elapsed: 0.0
          options:
          automation_name: thermostat
          target_temperature: 30
```

If you see an error such as `Expected "object", got "array" at ...options`, make sure you are not prefixing option keys with `-`:

```yaml
# wrong ❌
options:
  - automation_name: thermostat
  - target_temperature: 30
```

```yaml
# correct ✅
options:
  automation_name: thermostat
  target_temperature: 30
```

## Schema reference

The UI validates profiles against this schema and performs an additional run-time check.

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

# inputs for variables that can be used in expressions (optional)
inputs:
  var1: value1
  var2: value2


# Common jobs section (optional)
# Jobs that are common for all Pioreactors
common:
  jobs:
    <job_name>:
      actions:
        - type: <string>     # Type of action: "start", "pause", "resume", "stop", "update", "repeat", "when", or "log"
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
          - type: <string>     # Type of action: "start", "pause", "resume", "stop", "update", "repeat", "when", or "log"
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

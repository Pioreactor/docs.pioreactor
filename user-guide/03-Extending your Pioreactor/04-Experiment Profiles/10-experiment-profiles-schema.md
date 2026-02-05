---
title: Experiment profile schema and syntax
slug: /experiment-profiles-schema
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
          t: 0s

pioreactors:
  pio001:
    jobs:
      temperature_automation:
        actions:
          - type: start
            t: 0s
            options:
              automation_name: thermostat
              target_temperature: 35
  pio002:
    jobs:
      temperature_automation:
        actions:
          - type: start
            t: 0s
            options:
              automation_name: thermostat
              target_temperature: 32
```

### Times refer to the profile start time

When writing a profile, note that any `t` field refers to when the experiment profile started, and not when the experiment started. Use either a bare number (interpreted in hours) or a string with a unit suffix (`s`, `m`, `h`, or `d`, such as `30s`, `0.5h`, or `2d`); negative values are rejected.

## Conditionals and expressions

### How the `if` directive works

The `if` directive can be included in any action to conditionally execute it or not. The expression is evaluated _when the action is scheduled_ (that is, after `t` time has passed since the profile started).

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
          t: 6h
          if: pio1:stirring:target_rpm >= 500
          options:
            target_rpm: 400
```

You can also compare against strings. For example, to stop a job if the temperature automation currently running equals `thermostat`:

```yaml
    temperature_automation:
      actions:
        - type: stop
          t: 6h
          if: pio1:temperature_automation:automation_name == thermostat
```

Many published settings are nested JSON blobs. Use `.` to index into them:

```yaml
    temperature_automation:
      actions:
        - type: update
          t: 6h
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
            t: 0s
            options:
              target_rpm: 500
          - type: update
            t: 12h
            options:
              target_rpm: ${{ worker1:stirring:target_rpm + 50 }}
```

You can reference other jobs, too. The example below adjusts stirring based on optical density:

```yaml
          - type: update
            t: 12h
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
          t: 6h
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
          t: 6h
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
- `hours_elapsed()` returns the time (in hours) since the profile began.

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

`log` writes a message to the event log. `options.message` is required, and `options.level` defaults to `notice`.

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
          wait_until: ${{ ::od_reading:od2.od > 2.0 }}
          t: 0s
          actions:
            - type: start
              t: 0s
              options:
                automation_name: chemostat
                volume: 0.6
                duration: 10
```

`t` delays evaluation until the specified time. Once the condition fires, the `when` action is exhausted and will not run again.

### `repeat`

`repeat` loops a block of actions. It requires two fields:

- `actions`: the actions to perform each iteration. Their `t` values are relative to the start of the loop.
- `every`: how long between iterations.

```yaml
- type: repeat
  t: 6h # start looping after 6 hours
  every: 0.5h # run every 30 minutes
  actions:
    - type: update
      t: 0s
      ...
    - type: update
      t: 0.1h
      ...
```

Optional fields provide stricter control:

- `max_time`: total runtime of the loop. With `every: 0.5h` and `max_time: 6h`, the loop runs 12 times.
- `while`: an expression evaluated at the start of each iteration. If it returns `False`, the loop exits.
- `if`: skip the entire `repeat` block when the expression is `False`.

A coarse turbidostat example:

```yaml
add_media:
  actions:
    - type: repeat
      t: 6h
      every: 9s
      while: ${{ worker1:od_reading:od2.od > 3.0 }}
      actions:
        - type: start
          options:
            volume: 1
remove_waste:
  actions:
    - type: repeat
      t: 6h
      every: 9s
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
          t: 12h
          if: ${{ ::od_reading:od2.od < od_threshold }}
          options:
            target_temperature: ${{ stationary_phase_temp }}
        - type: update
          t: 12h
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
          t: 0s
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
          t: 0s
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


# Metadata (optional)
metadata:
  author: <string>
  description: <string>

# Plugins (optional)
plugins:
  - name: <string>
    version: <string>  # version or constraint, e.g. "1.2.3" or ">=1.2.3"

# Inputs available to expressions (optional)
inputs:
  <input_name>: <value>


# Jobs common to all Pioreactors (optional)
common:
  jobs:
    <job_name>:
      description: <string>
      actions:
        - # see Action definitions below

# Jobs per Pioreactor (optional)
pioreactors:
  <pioreactor_unit_name>:
    label: <string>
    jobs:
      <job_name>:
        description: <string>
        actions:
          - # see Action definitions below


# Action definitions
- type: log
  t: <time_string_or_float>
  if: <bool_or_expression>
  options:
    message: <string>
    level: DEBUG|debug|WARNING|warning|INFO|info|NOTICE|notice|ERROR|error (default: notice)

- type: start
  t: <time_string_or_float>
  if: <bool_or_expression>
  options: {<option_name>: <value>}  # expressions allowed via ${{ }}
  args: [<string>, ...]
  config_overrides: {<config_name>: <value>}

- type: update
  t: <time_string_or_float>
  if: <bool_or_expression>
  options: {<option_name>: <value>}  # expressions allowed via ${{ }}

- type: pause
  t: <time_string_or_float>
  if: <bool_or_expression>

- type: resume
  t: <time_string_or_float>
  if: <bool_or_expression>

- type: stop
  t: <time_string_or_float>
  if: <bool_or_expression>

- type: repeat
  t: <time_string_or_float>
  if: <bool_or_expression>
  every: <time_string_or_float>
  while: <bool_or_expression>       # optional stop condition
  max_time: <time_string_or_float>  # optional cap on total time loops run for
  actions:
    - # basic action only (log, start, pause, resume, stop, update)

- type: when
  t: <time_string_or_float>
  if: <bool_or_expression>
  wait_until: <bool_or_expression>
  actions:
    - # any action (including repeat/when)


# Profile expression syntax (used in ${{ ... }} in options/conditions)
#
# Literals
# - Numbers: integer or float (e.g., 1, -2.5)
# - Booleans: true, false (case-insensitive)
# - Names resolve to values provided in the expression environment (inputs, etc.); otherwise they remain strings.
#
# Operators
# - Arithmetic: +, -, *, / (raises on division by zero), ** (exponent)
# - Comparisons: <, <=, ==, >=, >
# - Logical: and, or, not
# - Parentheses for precedence
#
# Functions
# - random(): float in [0,1)
# - unit(): current unit name
# - hours_elapsed(): current action time
# - experiment(): current experiment name
# - job_name(): current job name
#
# MQTT lookups
# - <unit>:<job>:<setting>[.<nested_key>]*
# - ::<job>:<setting>[.<nested_key>]* (uses current unit)
#   Examples: unit():od_reading:od600, ::stirring:setting.target_rpm
#   Fails if worker is inactive or topic missing.
#
# Conversion rules
# - Numeric strings become floats; "true"/"false" become booleans; otherwise strings stay strings.
# 
# Time strings
# Accepted formats are either a number (float/int) meaning hours, or a string that is a number immediately followed by a unit:
#    s, m, h, or d (case-insensitive). Examples: 0.5 (30min), "30s", "2m", "1.5h", "2d". Whitespace or extra text is rejected, and
#    negative values are disallowed

```

### Examples

See examples of experiment profiles [here](https://github.com/Pioreactor/experiment_profile_examples).

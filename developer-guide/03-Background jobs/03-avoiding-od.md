---
title: Avoiding when optical density is run
slug: /avoiding-od
hide_table_of_contents: true
---

It's common to want a feature to turn off, or more generally change behaviour, when a sensitive optical density reading is taken. For example, if running an air bubbler, you may want to turn it off before an OD reading is taken, and then turn if back on after.

This behaviour is so common, we've added a helper class to take care of it for you. In `pioreactor.background_jobs.base` is the class `BackgroundJobWithDodgingContrib` that implements most of the "dodging" behaviour for you. you'll only need to do three things:

1. Inherit from `BackgroundJobWithDodgingContrib`, instead of `BackgroundJobContrib`

```python
from pioreactor.background_jobs.base import BackgroundJobWithDodgingContrib

class JustPause(BackgroundJobWithDodgingContrib):
    ...
```

2. Fill in what to do before, and after, an OD reading takes place by implementing method `action_to_do_before_od_reading` and `action_to_do_after_od_reading`, respectively.

```python
class JustPause(BackgroundJobWithDodgingContrib):

    def __init__(self, ...):
        super().__init__(..., enable_dodging_od=False, plugin_name="just-pause") # set to True if you want the dodging behaviour right away.


    def action_to_do_before_od_reading(self):
        # example
        self.logger.debug("Pausing")
        self.stop_pumping()

    def action_to_do_after_od_reading(self):
        # example
        self.logger.debug("Unpausing")
        self.start_pumping()

```

3. You should also consider what the job should do if OD reading isn't turned on. That is, what should the default behaviour be without OD reading. Also, what should occur when the OD reading is turned on _late_.

You can handle the "dodging" case and "continuous" with the `initialize_*` methods:

```python
class JustPause(BackgroundJobWithDodgingContrib):

    def __init__(self, ...):
        super().__init__(..., enable_dodging_od=False, plugin_name="just-pause") # set to True if you want the dodging behaviour right away.

    ...

    def initialize_dodging_operation(self):
        self.logger.debug("OD reading is ON and I'm enabled for dodging, so set up what I need...")

    def initialize_continuous_operation(self):
        self.logger.debug("OD reading is off, or being ignored, so set up what I need for that...")

    def action_to_do_before_od_reading(self):
        # example
        self.logger.debug("Pausing")
        self.stop_pumping()

    def action_to_do_after_od_reading(self):
        # example
        self.logger.debug("Unpausing")
        self.start_pumping()
```

4. We also want some "buffer" time before and after an OD reading. For example, if using a bubbler, we want the bubbles to dissipate completely before taking an OD reading. We should stop bubbling early then. To set these times, add the following to your config.ini:

```
[<job_name>.config]
pre_delay_duration=<float>
post_delay_duration=<float>
enable_dodging_od=1
```

The diagram of timing, actions, and OD reading, looks like the following:

![](/img/developer-guide/background_job_dodging_timing.png)

And you're done!
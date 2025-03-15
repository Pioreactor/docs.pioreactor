---
title: Running and stopping experiment profiles
slug: /start-stop-experiment-profiles
---

### Running an experiment profile

Once you've created your profile to your satisfaction, you can run it from the UI's Profile page. Select your profile from the dropdown, and choose to run it. You can run multiple experiment profiles at once, including multiple instances of the same profile.

The profile begins immediately, and you should see it running in the right-most box (refresh the page if you don't see it).

:::tip
Alternatively, you can run a profile in "dry-run" mode, which doesn't perform any actions, just prints out what would occur instead.
:::

You can also run profiles from the leader's command line. To run a profile, use:

```bash
pio run experiment_profile execute </path/to/experiment_profile/.yaml> <experiment_name>
```
For example:

```bash
pio run experiment_profile execute /home/pioreactor/.pioreactor/experiment_profiles/chemostat_in_out_2.yaml 'level tests'
```


### Stopping experiment profiles

From the same page, you can stop any running experiment profile. This will halt any jobs that were started by the profile, and stop executing any new actions in the queue.

From the command line, you can run:

```bash
pio kill --job-name experiment_profiles
```

This will actually kill _all_ experiment profiles running. To specify a specific profile, use it's job-id:

```bash
pio kill --job-id <job-id>
```


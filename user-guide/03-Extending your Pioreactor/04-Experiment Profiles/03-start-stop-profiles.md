---
title: Running and stopping experiment profiles
slug: /start-stop-experiment-profiles
---

Experiment profiles let you automate repeatable routines across your Pioreactor cluster. The UI is the fastest way to launch, monitor, and stop those routines.

## Start a profile from the UI

1. **Open the Profiles tab.** In the sidebar, choose **Profiles** under the current experiment.

   ![Profiles tab highlighted in the sidebar](/img/user-guide/experiment-profiles/profiles-sidebar.png)

2. **Pick the profile to run.** Use the dropdown to select the YAML profile you want to execute.

   ![Profile dropdown highlighted in the Available profiles section](/img/user-guide/experiment-profiles/profile-dropdown.png)

3. **Start the profile.** Click **Run profile** to launch it immediately.

   ![Run profile button highlighted](/img/user-guide/experiment-profiles/profile-start-button.png)

:::tip Dry-run mode
Open the button's chevron menu to choose **Dry-run profile**. Dry-run executes the schedule without touching hardware; it emits the planned actions so you can confirm timing or sequencing before running the real thing.
:::

You can run multiple profiles—even multiple copies of the same profile—at the same time.

## Monitor and stop running profiles

Once started, profiles appear in **Profiles Running** with a link back to their definition and elapsed time.

![Profiles Running table highlighted with an active profile](/img/user-guide/experiment-profiles/profile-running.png)

When you need to stop a profile early, use the **Stop** button in that table. Confirming the dialog terminates all actions the profile started and prevents any queued steps from running.

![Stop button highlighted in the Profiles Running table](/img/user-guide/experiment-profiles/profile-stop.png)

## Run profiles from the CLI

You can also launch profiles from the leader's terminal:

```bash
pio run experiment_profile execute </path/to/experiment_profile/.yaml> <experiment_name>
```

For example:

```bash
pio run experiment_profile execute /home/pioreactor/.pioreactor/experiment_profiles/chemostat_in_out_2.yaml 'level tests'
```

Stop all running profiles from the CLI with:

```bash
pio kill --job-name experiment_profiles
```

Or target a specific profile by its job ID:

```bash
pio kill --job-id <job-id>
```

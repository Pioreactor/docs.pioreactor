---
title: Creating and editing experiment profiles
slug: /create-edit-experiment-profiles
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

Experiment profiles choreograph everything that happens across your cluster: which jobs start, when they update, and when they stop. This page walks through creating your first "hello world" profile in the UI, explains how to edit it, and points you to the raw files if you prefer the command line.

## Before you begin

- Open the experiment you want to control in the UI. Profiles always run in the context of the currently selected experiment.
- Make sure every Pioreactor that should receive actions is assigned to that experiment and is online.
- Decide on a short, descriptive filename (for example `hello-world.yaml`). The file is stored on the leader under `~/.pioreactor/experiment_profiles/`.

## Build your first profile in the UI

1. In the sidebar, select **Profiles → Create new profile**.
2. Enter the filename (omit the `.yaml` extension—Pioreactor adds it for you).
3. Replace the placeholder YAML with the following starter profile, then customize the commented lines for your cluster:

```yaml
experiment_profile_name: hello-world-stirring
metadata:
  author: "Your name"
  description: Kick off stirring everywhere and record OD on a specific worker.

common:
  jobs:
    stirring:
      actions:
        - type: start
          t: 0
          options:
            target_rpm: 600

pioreactors:
  pio001:  # Replace with your worker id
    jobs:
      od_reading:
        actions:
          - type: start
            t: 0
          - type: stop
            t: 1h
```

4. Click **Search jobs and automations** if you want to insert additional sample actions—results paste directly into the editor.
5. Choose **Save**. The profile appears immediately under **Available profiles**, ready to run with **Start profile**.

![Creating a hello-world profile in the Pioreactor UI](/img/user-guide/experiment-profiles/create-profile-hello-world.png)

### How the example works

- `common` tasks run for **every** worker in the experiment. Here we start the stirring job everywhere at `0` time elapsed.
- `pioreactors` lets you target individual workers. Swap `pio001` for your unit name (the UI autocompletes known workers) to start and stop OD readings only on that Pioreactor.
- `t` is relative to when the profile starts. Use hours by default (`1` means "one hour after launch") or add units like `30s`, `2m`, `1h`, or `2d`.
- You can add as many jobs as you like. Keep related actions in chronological order so they are easy to read later.

## Edit and iterate on a profile

1. Go back to **Profiles**, pick the file from **Available profiles**, and click **Edit**.
2. Adjust the YAML—validation hints appear directly under the editor if you break the schema.
3. Select **Save**. The file in `~/.pioreactor/experiment_profiles/<filename>.yaml` is overwritten.
4. Use **Duplicate profile** when you want to branch an idea without touching the original, or **View source code** for a read-only copy in a new tab.

![Editing an existing profile showing the Save button](/img/user-guide/experiment-profiles/edit-profile-highlight.png)

## Prefer the command line?

Profiles are plain text. You can edit them locally on the leader with any editor:

```bash
nano ~/.pioreactor/experiment_profiles/hello-world.yaml
```

After saving, return to the UI and refresh the Profiles page—your changes load instantly. Keep the [Experiment profile schema and syntax](/user-guide/experiment-profiles-schema) reference open for the full list of jobs, actions, and options.

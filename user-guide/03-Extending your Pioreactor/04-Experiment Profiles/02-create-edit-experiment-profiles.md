---
title: Creating and editing experiment profiles
slug: /create-edit-experiment-profiles
hide_table_of_contents: true
---


### Create a profile in the UI

1. In the sidebar, open **Profiles** for your current experiment and choose **Create new profile**.
2. Enter a filename.
3. Use the YAML editor to define the profile. The starter template includes metadata and empty `common` / `pioreactors` blocks. Click **Search jobs and automations** to discover sample tasks for common jobs.
4. Select **Save** to write the profile to the leader. Saved profiles appear in the **Available profiles** list immediately.

![Filename field and Save button highlighted in the Create Experiment Profile form](/img/user-guide/experiment-profiles/create-profile-highlight.png)

### Edit a profile in the UI

1. On the **Profiles** page, pick the profile from the **Available profiles** dropdown and select **Edit**.
2. Update the YAML directly in the editor. The same validation rules apply—fix any schema errors surfaced below the editor before saving.
3. Choose **Save** to persist the update. The file stored at `~/.pioreactor/experiment_profiles/<filename>.yaml` is overwritten with your new contents.

Use **Duplicate profile** when you want to branch a profile without overwriting the original, and **View source code** to open a read-only preview in a new tab.

![YAML editor and Save button highlighted in the Edit Experiment Profile view](/img/user-guide/experiment-profiles/edit-profile-highlight.png)

### Alternatively: On the command line

All profiles are stored on the leader's disk under `~/.pioreactor/experiment_profiles/`, allowing you to create and edit profiles in this directory, as well.

Need the full syntax reference? See [Experiment profile schema and syntax](/user-guide/experiment-profiles-schema).

---
title: Intro to experiment profiles
slug: /experiment-profiles
hide_table_of_contents: true
---

### What are experiment profiles?

Experiment profiles are another way to automatically control your Pioreactor(s). Think of them as "scripts" (in the "movie script" sense) that you can write, and the Pioreactor will perform. For example, you can use experiment profiles to automatically start stirring and start temperature control when an experiment begins, and then automatically turn off stirring and temperature control hours later. They can be used to update activity settings, without you needing to be around. We think of them as "clicking in the UI, but headless".


### How do I use experiment profiles?

In your UI, visit Profiles page on the left-hand sidebar. Here, you can choose an experiment profile to run, start it, stop it (if running), and edit an existing or create a new profile.

There's also a "dry-run" option, which won't actually execute any actions, but instead will log the action that would have occurred. This is useful to testing a profile first.


### What do they look like?

Experiment profiles are written as a YAML file (rhymes with "camel"). A YAML file is a structured way to describe data, and we use that to define our experiments.

You can browse experiment profile examples below.


### Looks great! Where do I start?

Visit our docs on writing experiment profiles [here](/user-guide/create-edit-experiment-profiles).

### Examples

See examples of experiment profiles [here](https://github.com/Pioreactor/experiment_profile_examples).
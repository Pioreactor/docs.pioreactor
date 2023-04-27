---
title: Updating the Pioreactor software
slug: /updating-software
---

We publish new software occasionally that fixes bugs, adds new features, and improves performance. You can update your Pioreactor(s) to the latest software from the UI. **We highly recommend keeping your Pioreactor software up to date!**

### How to update your software from the UI

When a new software version is released by our team, you will see a red "badge" in your UI's sidebar:

![a red badge is beside the Update link](/img/user-guide/badge.png)

Upon visiting the _Updates_ page, you can see what version you have installed, and the latest version published by us. You can also read the changelog to see what improvements we've made in the latest releases.

![](/img/user-guide/version_installed_vs_latest.png)


If you'd like to update, click on the "Update to next release" button. Updating software doesn't interrupt experiments or activities, but we suggest waiting until between experiments to update.

![](/img/user-guide/click_update.png)

Updating from the UI will update all the Pioreactors in your cluster.

:::info

The updating process will update to the _next_ release, after your current version. So if your current version is 23.4.1, and there are _two_ more recent releases, say 23.5.1 and 23.6.1, then the update process will update to 23.5.1. You can run the update process _again_ to update to 23.6.1. We do this so that you will get changes folded in from each release we make.

:::

### Installing previous versions or development versions

From the [command line](https://docs.pioreactor.com/user-guide/accessing-raspberry-pi), you can install specific versions. See `pio update app --help` for more.
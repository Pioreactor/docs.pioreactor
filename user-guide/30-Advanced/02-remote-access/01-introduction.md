---
title: Setting up remote access
slug: /remote-access
---


## Introduction to remote access

The Pioreactor connects to your local network, and the UI is hosted locally on the Raspberry Pi. _A priori_, there's no access to view the UI from outside your local network (this is a good thing for security reasons). Let's change that.

With some extra free services, we can safely connect to our Pioreactor cluster remotely. We've documented `2` ways to do this. Both require [command-line access](/user-guide/accessing-raspberry-pi) to the leader Pioreactor and some external services.


 - [Option 1: Ngrok](/user-guide/ngrok-remote-access). Remotely access your UI behind a simple username / password.
 - [Option 2: Tailscale](/user-guide/tailscale-remote-access). Spin up a simple VPN, and expose your UI to users of your VPN. Also allows for Pioreactors in _different locations_ to be used together over the VPN.


## Security

By allowing remote access to your Pioreactor, you are providing a possible vector for malicious folks to access the UI, and possibly your network. We've built the Pioreactor to minimize these holes, but there are **two more additional changes you should make**:

1. To disallow users to upload files onto your server, enter the following into your leader:
```
touch /home/pioreactor/.pioreactor/DISALLOW_UI_UPLOADS
```

2. To disallow users to add plugins to your cluster, enter the following into your leader:
```
touch /home/pioreactor/.pioreactor/DISALLOW_UI_INSTALLS
```

**We highly recommend doing both these actions.**


To remove these blocks, simply delete the files.
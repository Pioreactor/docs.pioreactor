---
title: Setting up remote access
slug: /remote-access
---


## Introduction to remote access

The Pioreactor connects to your local network, and the UI is hosted locally on the Raspberry Pi. _A priori_, there's no access to view the UI from outside your local network (this is a good thing for security reasons). Let's change that.

With some extra free software, we can safely connect to our Pioreactor cluster remotely. We've documented `2` ways to do this, but both require [command-line access](/user-guide/accessing-raspberry-pi) to the leader Pioreactor.


 - [Option 1: Ngrok](/user-guide/ngrok-remote-access). Expose your UI publicly behind a simple username / password.
 - [Option 2: Tailscale](/user-guide/tailscale-remote-access). Spin up a VPN, and expose your UI to users of your VPN. Also allows for Pioreactors in _different locations_ to be used together over the VPN.



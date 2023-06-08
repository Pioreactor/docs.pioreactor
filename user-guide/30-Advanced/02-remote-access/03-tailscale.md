---
title: Tailscale
slug: /tailscale-remote-access
---


Unlike using Ngrok, this method does not expose your UI to the public internet. To access the UI remotely, you need to join an authenticated VPN. This greatly improves security, but adds a bit of additional work for users.

:::info
Tailscale is a really really cool service! You may find yourself using it for other projects, too.
:::


1. Sign up for an account at [Tailscale](https://tailscale.com/). The free account is fine for now.
2. Once signed up and logged in, visit the [Tailscale admin](https://login.tailscale.com/admin/machines).
3. Install [Tailscale on your computer](https://tailscale.com/download).
4. [SSH into your leader Pioreactor](/user-guide/accessing-raspberry-pi). Install Tailscale for Raspberry Pi with the following: `curl -fsSL https://tailscale.com/install.sh | sh`. You don't need to install anything on the workers.
5. Back in your [Tailscale admin](https://login.tailscale.com/admin/machines), you should see two machines: your computer and the leader Pioreactor. Make note of the ipv4 address for the leader - we will use it below.
6. You should still be able to access `http://pioreactor.local` without any problems.
8. In your config.ini, add:
```
[remote]
ws_url=<ip4 address>:9001
```
7. Now, when you leave the local network, and if you have internet access, you can turn your VPN on and still access `http://<ip4 address>`. Troubleshooting: try `http://<hostname>`, but confirm that magicDNS is on, too.
8. You can use the Tailscale admin to add users to your VPN, too.

---
title: Tailscale
slug: /tailscale-remote-access
hide_table_of_contents: true
---


To access the UI remotely, you can join an authenticated VPN using Tailscale. This greatly improves security, but adds a bit of additional work for users.

:::info
Tailscale is a really cool service! You may find yourself using it for other projects, too.
:::


1. Sign up for an account at [Tailscale](https://tailscale.com/). The free account is fine for now.
2. Once signed up and logged in, visit the [Tailscale admin](https://login.tailscale.com/admin/machines).
3. Install [Tailscale on your computer](https://tailscale.com/download).
4. [SSH into your leader Pioreactor](/user-guide/accessing-raspberry-pi). Install Tailscale for Raspberry Pi with the following: `curl -fsSL https://tailscale.com/install.sh | sh`. Don't miss that you also need to run `sudo tailscale up`. _You don't need to install anything on the workers_.
5. Back in your [Tailscale admin](https://login.tailscale.com/admin/machines), you should see two machines: your computer and the leader Pioreactor. Make note of the ipv4 address for the leader - we will use it below.
6. You should still be able to access `http://pioreactor.local` without any problems.
8. 1. In your **shared config.ini**, add your ipv4 address to the `[mqtt]` section:
      ```
      broker_address=<ipv4 address>
      ```
   2. If you have other Pioreactors in your cluster: you likely won't be adding those to tailscale (only adding the leader is necessary for remote access), so in each of the **workers' config** files, add the new `[mqtt]` section like so:
      ```
      [mqtt]
      broker_address=<leader name>.local
      ```
      And save. This means that your workers will connect "locally" (over the local network), but the UI  will connect "remotely".
   3. Your **leader's config** file should stay the same (confirm it's `localhost`)

7. Now, when you leave the local network, and if you have internet access, you can turn your VPN on and still access `http://<ipv4 address>`. Troubleshooting: try `http://<hostname>`, but confirm that magicDNS is on, too.
8. You can use the Tailscale admin to add users to your VPN, too.

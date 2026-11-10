---
title: Tailscale
slug: /tailscale-remote-access
hide_table_of_contents: true
---

import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';

To access the UI remotely, you can join an authenticated VPN using Tailscale. This greatly improves security, but adds a bit of additional work for users.

:::info
Tailscale is a really cool service! You may find yourself using it for other projects, too.
:::


1. Sign up for an account at [Tailscale](https://tailscale.com/). The free account is fine for now.
2. Once signed up and logged in, visit the [Tailscale admin](https://login.tailscale.com/admin/machines).
3. Install [Tailscale on your computer](https://tailscale.com/download).
4. [SSH into your leader Pioreactor](/user-guide/accessing-raspberry-pi).
   1. Install Tailscale for Raspberry Pi with the following: `curl -fsSL https://tailscale.com/install.sh | sh` <CopyToClipboardButton content="curl -fsSL https://tailscale.com/install.sh | sh" label="Copy" style={{ marginLeft: '0.5rem' }} />
   2. Don't miss that you also need to run `sudo tailscale up` <CopyToClipboardButton content="sudo tailscale up" label="Copy" style={{ marginLeft: '0.5rem' }} />
   3. _You don't need to install anything on the workers_.
5. Back in your [Tailscale admin](https://login.tailscale.com/admin/machines), you should see your computer and the leader Pioreactor. Make note of the leader's Tailscale IPv4 address.
6. With Tailscale connected on your computer, open `http://<leader Tailscale IPv4 address>`. You can also use `http://<leader hostname>` if MagicDNS is enabled in Tailscale.
7. No MQTT configuration changes are needed for a standard installation. The browser connects through the leader's web server at the same address you opened. Workers continue connecting to the leader over your local network and do not need Tailscale.
8. When you leave the local network, connect your computer to Tailscale and use the same Tailscale address. On the local network, the leader's usual address, such as `http://pioreactor.local` or its local IP address, still works.
9. You can use the Tailscale admin to add users to your VPN, too.

:::note Existing clusters and custom MQTT setups

If you previously configured Tailscale broker-address overrides, you can leave them in place. Pioreactor jobs still use those settings, so do not remove them without checking how your cluster connects to its broker.

The setting `[mqtt] ui_use_proxy=false` is for an external MQTT broker or a custom WebSocket setup. It makes the browser use `broker_address`, `broker_ws_port`, and `ws_protocol` directly. It is not needed for ordinary Tailscale access with the leader's built-in broker.

:::

## Security

Before sharing remote access, we recommend disabling file uploads and plugin changes from the UI. [SSH into the leader](/user-guide/accessing-raspberry-pi) and create these files:

```bash
touch ~/.pioreactor/DISALLOW_UI_UPLOADS
touch ~/.pioreactor/DISALLOW_UI_INSTALLS
```

To allow these actions again, remove the corresponding files over SSH.

See [**Security hardening**](/user-guide/security-hardening) for cluster-wide plugin restrictions, passwords, and other protections.

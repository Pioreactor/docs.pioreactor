---
title: Security hardening
slug: /security-hardening
description: Practical steps for reducing security risk on a Pioreactor cluster.
hide_table_of_contents: true
---

Pioreactor is usually operated on a trusted lab or classroom network. If other people can reach that network, or if you are enabling remote access, take a few minutes to reduce what can be changed from the UI and from default credentials.

## Keep the cluster off the public internet

Do not expose the Pioreactor UI directly to the public internet. If you need remote access, use a private network option like [Tailscale](/user-guide/tailscale-remote-access) instead of router port forwarding.

Use a network you control when possible. A dedicated lab network, router, or [local access point](/user-guide/local-access-point) limits who can reach the UI, SSH, and MQTT broker.

## Change default passwords

During Raspberry Pi Imager setup, use a password that is not the default `raspberry`. If a Pioreactor is already installed, SSH into each Pioreactor and change the `pioreactor` Linux user's password:

```bash
passwd
```

If you use the built-in local access point, change its SSID and password in `config.ini` under `[local_access_point]`. See [Changing SSID name or password for your local access point](/user-guide/local-access-point#changing-ssid-name-or-password-for-your-local-access-point).

## Add a UI password

If you want the UI to ask for a username and password, install the [`pioreactor-basic-auth-for-ui`](https://github.com/Pioreactor/pioreactor-basic-auth-for-ui/tree/main/pioreactor_basic_auth_for_ui) plugin on the leader:

```bash
pio plugins install pioreactor-basic-auth-for-ui
pio run change_ui_credentials <username> <password>
```

Add the generated API key to `config.ini` under `[ui_basic_auth]`, then restart the leader.

This adds a password prompt, but it does not encrypt traffic. The UI still uses HTTP, so someone else on the same network may be able to read traffic. For remote access, use a private network option like [Tailscale](/user-guide/tailscale-remote-access).

## Disable plugin changes from the UI

Plugins run code on your Pioreactors. If you do not want users with UI access to install plugins, install plugins from USB, or uninstall plugins from the **Plugins** page, create a `DISALLOW_UI_INSTALLS` file on the leader:

```bash
touch ~/.pioreactor/DISALLOW_UI_INSTALLS
```

For stronger protection, create the same file on every Pioreactor in the cluster:

```bash
pios cp ~/.pioreactor/DISALLOW_UI_INSTALLS
```

This also blocks direct plugin install API calls to worker units.

After this file is present, make plugin changes over SSH instead:

```bash
pio plugins install <plugin-name>
pio plugins uninstall <plugin-name>
```

To allow UI plugin changes again, SSH into the Pioreactor and remove the file:

```bash
rm ~/.pioreactor/DISALLOW_UI_INSTALLS
```

## Keep software updated

Install Pioreactor updates from **Updates** when they are available. Updates include bug fixes and security improvements for the UI, API, and cluster tooling.

If your Pioreactor does not have internet access, use [USB software updates](/user-guide/using-usb-drives#update-software-from-usb) or another offline update method.

## Limit who can SSH

Only share the `pioreactor` username and password with people who should be able to control the machine. SSH access can install software, edit configuration, and run commands directly on the Pioreactor.

For shared environments, consider using a separate router or local access point for the Pioreactor cluster so the machines are not reachable from a broad guest network.

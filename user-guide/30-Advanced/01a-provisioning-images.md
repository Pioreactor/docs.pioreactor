---
title: Provisioning images
slug: /provisioning-images
description: Prepare a Pioreactor SD card with Wi-Fi credentials, configuration overrides, plugins, and custom files before booting.
sidebar_class_name: sidebar-item--updated
---

import WifiConfigForm from '@site/src/components/WifiConfigForm';

You can customize a Pioreactor image after writing it to an SD card. Place configuration files, plugin wheels, and supported YAML assets on the card's boot partition, and the Pioreactor imports them when it boots. This is useful for preparing several Pioreactors or setting up a unit without SSH.

## Prepare the SD card

1. Write the appropriate Pioreactor image using the [software installation guide](/user-guide/software-set-up).
2. Reinsert the SD card into your computer. For a card already in use, shut down the Pioreactor before removing it.
3. Open the boot partition, usually shown as **boot** or **bootfs**. Add the files described below as plain-text files or plugin wheels, preserving their exact names and extensions.
4. Safely eject the card, insert it into the Pioreactor, and power it on.

On the running Pioreactor, this partition is mounted at `/boot/firmware/`. A file placed at the root of **bootfs**, such as `wifi.ini`, is therefore available as `/boot/firmware/wifi.ini`.

An example layout is:

```text
bootfs/
├── config.ini
├── wifi.ini
└── pioreactor/
    ├── plugins/
    │   ├── my_plugin-1.0.0-py3-none-any.whl
    │   └── dependency-1.0.0-py3-none-any.whl
    ├── experiment_profiles/
    │   └── culture.yaml
    ├── models/
    │   └── custom_100ml.yaml
    └── hardware/
        └── models/
            └── custom_100ml/
                └── 1.0/
                    └── pwm.yaml
```

Only add the files you need. Existing boot files, such as Raspberry Pi's `config.txt`, stay in place.

## Configuration overrides with `config.ini`

Create `config.ini` at the root of the boot partition. Include only the sections and settings you want to change, for example:

```ini title="config.ini"
[stirring.config]
initial_target_rpm=400
```

At startup, the Pioreactor merges these settings into `/home/pioreactor/.pioreactor/unit_config.ini` and deletes the boot-partition `config.ini` after the merge succeeds. Matching settings are overwritten; other local settings are preserved.

These settings apply to this Pioreactor and override the cluster's shared configuration. To change settings for the whole cluster, use the shared configuration on the leader instead. See [Configuration via config.ini](/user-guide/configuration) for how shared and unit-specific settings interact.

## Wi-Fi credentials with `wifi.ini`

On images that support boot-partition Wi-Fi setup, use the form below to create and download `wifi.ini`:

<WifiConfigForm />

You can also create `wifi.ini` manually at the root of the boot partition:

```ini title="wifi.ini"
[wifi]
ssid=Your network name
passphrase=Your Wi-Fi password
```

On boot, the Pioreactor tries to connect to that network. After a successful connection, it deletes `wifi.ini`. If connecting fails or either value is missing, the file remains so you can correct it and reboot. Keep your Wi-Fi password private while the file is on the SD card.

You can use this procedure after initial setup as well. For a running, reachable Pioreactor, [networking tools](/user-guide/networking) explain how to manage connections with `nmcli`. To have a leader host its own network, follow the separate [local access point instructions](/user-guide/local-access-point).

## Install plugins

Copy plugin `.whl` files into `pioreactor/plugins/` on the boot partition. Include any dependency wheels needed for an offline installation in the same folder. The plugin is installed on the Pioreactor whose SD card contains the files.

Successful installs are removed from the boot partition. Failed or invalid plugin wheels and their diagnostic `.log` files are moved into `pioreactor/plugins/failed/`. After correcting the problem, move the wheel back into `pioreactor/plugins/` and reboot to retry. Dependency wheels are removed once all plugin installations succeed.

For other installation methods, see [Using community plugins](/user-guide/using-community-plugins).

## Import experiment profiles, models, and hardware

Use these boot-partition folders to import YAML assets:

| Folder on the boot partition | Files | Destination on the Pioreactor |
| --- | --- | --- |
| `pioreactor/experiment_profiles/` | `.yaml` or `.yml` experiment profiles; leaders only | `~/.pioreactor/experiment_profiles/` |
| `pioreactor/models/` | `.yaml` or `.yml` model definitions | `~/.pioreactor/models/` |
| `pioreactor/hardware/` | `.yaml` or `.yml` hardware definitions, preserving subfolders | `~/.pioreactor/hardware/` |

Place experiment profiles and model definitions directly in their respective folders. Hardware files can use nested folders, as shown in the example above. See [experiment profiles](/user-guide/experiment-profiles), [custom models](/developer-guide/custom-bioreactor-models), and [custom hardware](/developer-guide/custom-hardware) for their file formats.

Imported YAML files replace destination files with the same path, without creating backups. Successful imports are removed from the boot partition. Failed files remain beside a `.log` file explaining the failure; correct them and reboot to retry.

Plugin and YAML imports wait until the Pioreactor has its shared configuration. A new worker keeps these staged files until [joining a cluster](/user-guide/create-cluster) supplies its configuration and reboots it.

## Where files live after provisioning

The SD card also contains a Linux root filesystem, which holds the operating system, installed software, and persistent Pioreactor data. Your computer may only show the boot partition. The boot folders above provide a way to import supported files into that filesystem.

By default, Pioreactor data lives under `/home/pioreactor/.pioreactor/`:

| Path | Purpose |
| --- | --- |
| `config.ini` | Shared cluster configuration, supplied by the leader to workers |
| `unit_config.ini` | This Pioreactor's configuration overrides |
| `experiment_profiles/` | Experiment profile YAML files on the leader |
| `models/` and `hardware/` | Model and hardware definitions |
| `storage/` | Persistent databases, calibrations, estimators, and other stored data |

Packaged plugins are installed into the Pioreactor Python environment at `/opt/pioreactor/venv/`; copying a wheel onto the boot partition stages its installation. If you customize the data root, YAML imports use `DOT_PIOREACTOR`. See [Important locations on the filesystem](/developer-guide/filesystem-locations) for the full path reference.

## Check the result

After booting, check the Pioreactor UI for the imported plugins, profiles, or models. If a file was not imported, shut down the Pioreactor and inspect the boot partition for the retained file and any diagnostic log. For Wi-Fi problems, `network_info.txt` on the boot partition reports the hostname, IP addresses, connected network, and recent NetworkManager logs from the last boot.

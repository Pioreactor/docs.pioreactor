---
title: Camera snapshots (experimental)
slug: /camera-snapshots
description: Configure a Raspberry Pi or USB camera to capture and review experiment snapshots.
hide_table_of_contents: true
---

Pioreactor can use a Raspberry Pi camera or a V4L2/USB camera to photograph cultures during an experiment. The camera feature is experimental and disabled by default.

Camera snapshots are stored on the Pioreactor that captured them. In the Pioreactor UI, you can:

- see the latest image from each Pioreactor in the current experiment;
- take a snapshot immediately or capture one automatically on a schedule;
- review, enlarge, download, or delete earlier snapshots; and
- download all snapshots from one Pioreactor as a ZIP file.

## Enable camera snapshots

Open **Configuration**, select the shared `config.ini`, and add or update the following section:

```ini
[camera]
enabled=1
snapshot_interval_minutes=5
ir_led_intensity=25
```

`snapshot_interval_minutes` is the number of whole minutes between automatic snapshots. Set it to `0` to disable scheduled captures while keeping manual captures available.

Next, configure the type of camera connected to each Pioreactor.

For a Raspberry Pi camera:

```ini
capture_backend=rpicam
camera_index=0
```

For a V4L2/USB camera:

```ini
capture_backend=v4l2
device_path=/dev/video0
```

The shared settings apply to every Pioreactor. If your cluster uses different camera types or device paths, put those camera-specific overrides in each Pioreactor's `unit_config.ini`. After saving the configuration, reload the Pioreactor UI.

:::tip Reducing condensation with a Raspberry Pi camera
Set `keep_camera_active=1` to keep a Raspberry Pi camera sensor warm between captures. This can reduce coverslip fogging when the culture or headspace is warm. This setting does not apply to USB cameras and takes effect after the affected Pioreactor's Huey service restarts (a reboot also applies it).
:::

## Capture and review snapshots

Once camera snapshots are enabled, open **Cameras** in the sidebar. Each assigned Pioreactor with a detected camera has a camera card.

- Use **Capture snapshots automatically** to enable or disable scheduled captures for an individual Pioreactor. The interval still comes from `snapshot_interval_minutes`.
- Open the snapshot history to take an immediate snapshot, browse earlier images, delete individual images, or choose **Download all**.
- You can also take an immediate snapshot from that Pioreactor's command line with `pio run camera_snapshot`.

Automatic captures only run while the Pioreactor is active and assigned to an experiment. Each Pioreactor retains up to 500 scheduled snapshots per experiment, spread across the experiment timeline. Manually captured snapshots are retained until you delete them or delete the experiment.

:::warning
Deleting an experiment also deletes its stored camera snapshots from the Pioreactors that were assigned to it. Download any images you want to keep before deleting the experiment.
:::

## Focus a Raspberry Pi camera

For a manually focused camera, stop running optical-density, stirring, dosing-automation, and LED-automation activities on the Pioreactor. Then open **Protocols**, select that Pioreactor and **Device = camera**, and run **Manual camera focus**. The protocol shows successive preview images and guides you while you turn the camera's focus control.

## If a camera is not detected

Check that the camera is connected to the selected Pioreactor and that `capture_backend`, `camera_index`, or `device_path` matches the camera. For USB cameras, a stable path under `/dev/v4l/by-id/` is preferable to `/dev/video0` when one is available.

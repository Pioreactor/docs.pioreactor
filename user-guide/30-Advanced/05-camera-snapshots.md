---
title: Camera snapshots
slug: /camera-snapshots
description: Configure a Raspberry Pi or USB camera to capture and review experiment snapshots.
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
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
use_ir_led=1
ir_led_intensity=25
```

`snapshot_interval_minutes` is the number of whole minutes between automatic snapshots. Set it to `0` to disable scheduled captures while keeping manual captures available.

With `use_ir_led=1` (the default), captures use the Pioreactor's IR LED at `ir_led_intensity`. Set `use_ir_led=0` to capture using your own lighting without changing the IR LED. In that mode, `ir_led_intensity` is not used for camera captures.

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
- Open the snapshot history to **Capture snapshot**, browse earlier images, delete individual images, or choose **Download all snapshots**.
- Use the pencil icon (**Rename photo**) beside an image to change its name, then click **Rename**.
- You can also take an immediate snapshot from that Pioreactor's command line with `pio run camera_snapshot`.

### Naming snapshots

The UI assigns a name automatically when it captures an image. Rename the photo afterward, or supply a name when capturing from that Pioreactor's command line:

```bash
pio run camera_snapshot --name culture-before-dosing
```

Use letters (`A–Z`, `a–z`), digits, dots, dashes, or underscores, without spaces or the `.jpg` extension. Names must be unique across stored photos on that Pioreactor, including photos from other experiments. An existing photo is not overwritten. Renaming changes the image's filename and identifier, while preserving its capture time and whether it was captured manually or automatically.

### Storage and retention

Automatic captures only run while the Pioreactor is active and assigned to an experiment. Each Pioreactor retains up to 500 scheduled snapshots per experiment, spread across the experiment timeline. Manually captured snapshots are retained until you delete them or delete the experiment.

:::warning
Deleting an experiment also deletes its stored camera snapshots from the Pioreactors that were assigned to it. Download any images you want to keep before deleting the experiment.
:::

## Raspberry Pi capture profiles

Raspberry Pi captures use the native `rpicam-still` profile at `$DOT_PIOREACTOR/camera/viewing.conf` (normally `/home/pioreactor/.pioreactor/camera/viewing.conf`). It controls image settings such as resolution, tuning, exposure, and JPEG quality. The default profile uses JPEG quality `75` to keep file sizes small while retaining the image dimensions.

Editing `viewing.conf` affects snapshots and focus previews on that Pioreactor. If `keep_camera_active=1`, restart the affected Pioreactor's Huey service or reboot it to apply profile edits to the persistent camera process.

For a single manual capture, pass a different native configuration file:

```bash
pio run camera_snapshot --name culture-fixed-exposure \
  --config /home/pioreactor/.pioreactor/camera/stable_cv.conf
```

The 26.9.0 upgrade installs `stable_cv.conf`, which fixes exposure and white balance for repeatable image analysis. It is configured for the OV5647 NoIR camera; check the sensor mode and tuning file before using it with another camera model. A custom file can be used instead. Relative paths inside the profile resolve from the profile's directory; environment variables inside native config files are not expanded.

`--config` is supported only with `capture_backend=rpicam` and requires the camera warmer to be stopped. If it is enabled, set `keep_camera_active=0` and restart Huey or reboot the affected Pioreactor before using a custom profile. This override applies only to that capture; automatic snapshots continue to use `viewing.conf`.

## Focus a Raspberry Pi camera

For a manually focused camera, stop running optical-density, stirring, dosing-automation, and LED-automation activities on the Pioreactor. Then open **Protocols**, select that Pioreactor and **Device = camera**, and run **Manual camera focus**. The protocol shows successive preview images and guides you while you turn the camera's focus control.

## If a camera is not detected

Check that the camera is connected to the selected Pioreactor and that `capture_backend`, `camera_index`, or `device_path` matches the camera. For USB cameras, a stable path under `/dev/v4l/by-id/` is preferable to `/dev/video0` when one is available.

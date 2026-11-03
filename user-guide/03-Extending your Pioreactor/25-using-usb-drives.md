---
title: Using USB drives
slug: /using-usb-drives
hide_table_of_contents: true
---

Pioreactor can use an attached USB drive for offline software updates, plugin installs, and large data exports.

## Supported drives

Use a USB drive formatted as exfat, vfat / FAT32, or ext4. Pioreactor mounts supported removable drives under `/run/pioreactor/usb/`.

In the Pioreactor UI, open **Inventory** and find the **USB drive** card. If a supported drive is detected, click **Mount**. You can also mount and eject the drive directly from **Plugins**. After you are finished, click **Eject** before removing the drive.

![Leader page USB drive card showing a mounted USB drive](/img/user-guide/03-extending-your-pioreactor/25-using-usb-drives/usb-drive-card.png)


## Files Pioreactor looks for

Pioreactor scans the mounted USB drive for known artifacts:

- Software update archives named like `release_26.5.0.zip` at the root of the drive.
- Plugin wheel files ending in `.whl` at the root of the drive or in `pioreactor/plugins/`.

Exports saved to USB are written to:

```bash
pioreactor/exports/
```

## Update software from USB

1. On another computer, download the Pioreactor release archive from the [Updating the Pioreactor software](/user-guide/updating-software#method-2-update-using-a-zip-file-and-the-ui) page.
2. Copy the `release_*.zip` file to the root of the USB drive.
3. Attach the drive to the leader Pioreactor and mount it from the **USB drive** card.
4. Open **Updates**, select **Update from USB**, choose the archive, choose the Pioreactors to update, and click **Update**.

![Updates page showing the Update from USB option](/img/user-guide/03-extending-your-pioreactor/20-updating-software/update-from-usb.png)

Official release archives include a signed manifest. Pioreactor verifies the archive before running update scripts.

## Install plugins from USB

1. On another computer, download the plugin's `.whl` file from [PyPI](https://pypi.org/) or from the plugin author.
2. Copy the `.whl` file to the USB drive root, or to `pioreactor/plugins/`.
3. Attach the drive to the leader, open **Plugins**, and click **Mount** if needed.
4. Plugins found on the mounted USB drive appear above the usual plugin list. Read-only drives are supported for plugin installation.
5. Choose a target Pioreactor or the cluster target, then click **Install**.

![Plugins page showing plugins found on a USB drive](/img/user-guide/03-extending-your-pioreactor/06a-using-community-plugins/plugins-from-usb.png)

For worker installs, the leader copies the wheel to the worker and installs it from the staged file.

## Export data to USB

1. Attach and mount a writable USB drive on the leader.
2. Open **Export data**.
3. Select the experiment, datasets, and date range.
4. Choose **Export to USB** and start the export.

![Export data page showing Export to USB](/img/user-guide/02-experiment-basics/08-export-data/export-to-usb.png)

Large exports can take a while. Keep the page open until the export finishes.

## Command line

You can also manage USB drives over SSH:

```bash
pio usb list
pio usb mount
pio usb scan
pio usb path
pio usb eject
```

If more than one removable partition is detected, pass the device explicitly:

```bash
pio usb mount --device /dev/sda1
pio usb eject --device /dev/sda1
```

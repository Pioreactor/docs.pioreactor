---
title: Verified Stemma QT hardware we like
slug: /verified-stemma-qt-hardware
description: Third-party Stemma QT / Qwiic devices we have tested with the Pioreactor.
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

These Stemma QT / Qwiic devices have been tested with the Pioreactor HAT and are known to work over I2C at 3.3V. For wiring and a sample script, see [Using the StemmaQT/Qwiic connector](/user-guide/using-stemma-qt).

:::note
“Verified” means we were able to power the device and read data from it. It does not guarantee a dedicated Pioreactor plugin or any specific automation.
:::

| Device | What we like it for | Link |
| --- | --- | --- |
| Adafruit MLX90632 FIR Remote Thermal Temperature Sensor | Non-contact temperature measurement, useful for incubators or warm surfaces | https://www.adafruit.com/product/6403 |
| Adafruit AS7341 10-Channel Light / Color Sensor | Tracking light spectra or checking LED output stability | https://www.adafruit.com/product/4698 |
| Monochrome 1.3" 128x64 OLED Graphic Display | Quick local readouts without the web UI | https://www.adafruit.com/product/938 |
| Adafruit SCD-30 - NDIR CO2 Temperature and Humidity Sensor | CO2 and humidity monitoring in incubators | https://www.adafruit.com/product/4867 |

:::tip
If you connect multiple I2C devices, check their address settings to avoid conflicts.
:::

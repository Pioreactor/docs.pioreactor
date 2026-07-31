---
title: I2C addresses
slug: /i2c-addresses
description: Reference the I2C device addresses used by Pioreactor hardware profiles.
hide_table_of_contents: true
---

Pioreactor hardware uses the Raspberry Pi's I2C bus on GPIO2 (SDA) and GPIO3 (SCL). Device addresses are defined in the hardware YAML profiles under `~/.pioreactor/hardware/`, not hard-coded into plugins or jobs.

The hardware loader layers files in this order:

1. `~/.pioreactor/hardware/hats/<hat_version>/<mod>.yaml`
2. `~/.pioreactor/hardware/models/<model_name>/<model_version>/<mod>.yaml`

Model files override HAT files. This matters most for optical density ADCs: a HAT can provide default ADC wiring, while a model can replace the `pd1` and `pd2` entries with model-specific optics.

## Bundled defaults

These are the I2C addresses in the bundled hardware profiles.

| Hardware profile | Device | Address | Defined in |
| --- | --- | --- | --- |
| HAT 1.0 | ADS1115 ADC (`aux`, `version`, `pd1`, `pd2`) | `0x48` | `hats/1.0/adc.yaml` |
| HAT 1.0 | DAC | `0x49` | `hats/1.0/dac.yaml` |
| HAT 1.0 | Heating PCB temperature sensor | `0x4F` | `hats/1.0/temp.yaml` |
| HAT 1.1 | RP2040 / Pico ADC and DAC | `0x2C` | `hats/1.1/adc.yaml`, `hats/1.1/dac.yaml` |
| HAT 1.1 | Heating PCB temperature sensor | `0x4F` | `hats/1.1/temp.yaml` |
| HAT 1.2 | RP2040 / Pico ADC and DAC | `0x2C` | `hats/1.2/adc.yaml`, `hats/1.2/dac.yaml` |
| HAT 1.2 | Heating PCB temperature sensor | `0x4F` | `hats/1.2/temp.yaml` |
| Pioreactor 20 mL model 1.5 | Optical density ADC `pd1` | `0x48` | `models/pioreactor_20ml/1.5/adc.yaml` |
| Pioreactor 20 mL model 1.5 | Optical density ADC `pd2` | `0x49` | `models/pioreactor_20ml/1.5/adc.yaml` |
| Pioreactor 40 mL model 1.5 | Optical density ADC `pd1` | `0x48` | `models/pioreactor_40ml/1.5/adc.yaml` |
| Pioreactor 40 mL model 1.5 | Optical density ADC `pd2` | `0x49` | `models/pioreactor_40ml/1.5/adc.yaml` |

## Common STEMMA QT hardware

These addresses are for the third-party devices listed on [Verified Stemma QT hardware we like](/user-guide/verified-stemma-qt-hardware). They do not conflict with the bundled Pioreactor addresses above, but two devices with the same address cannot share the bus unless one device supports changing its address or you add an I2C multiplexer.

| Device | Default address | Alternate addresses | Notes |
| --- | --- | --- | --- |
| [Adafruit MLX90632 FIR Remote Thermal Temperature Sensor](https://www.adafruit.com/product/6403) | `0x3A` | `0x3B` | The address can be changed with the `ADDR` / `A0` jumper. |
| [Adafruit AS7341 10-Channel Light / Color Sensor](https://www.adafruit.com/product/4698) | `0x39` | None | Fixed address. |
| [Monochrome 1.3" 128x64 OLED Graphic Display](https://www.adafruit.com/product/938) | `0x3C` | `0x3D` | Selectable with the address jumper. |
| [Adafruit SCD-30 NDIR CO2 Temperature and Humidity Sensor](https://www.adafruit.com/product/4867) | `0x61` | None | Fixed address. |

## Reading addresses from Python

Use `pioreactor.hardware` instead of duplicating addresses in your code:

```python
from pioreactor import hardware

temp_address = hardware.get_temp_address()
dac_address = hardware.get_dac_address()
adc_curriers = hardware.get_adc_curriers()

for channel, currier in adc_curriers.items():
    print(channel, hex(currier.i2c_address), currier.adc_channel)
```

This keeps plugins compatible with custom HAT and model profiles.

## Checking the live bus

To check whether a configured device is present, use the helper that Pioreactor uses internally:

```python
from pioreactor.hardware import get_temp_address, is_i2c_device_present

if is_i2c_device_present(get_temp_address()):
    print("Heating PCB temperature sensor detected")
```

For broader hardware customization, see [Customize the hardware interface](/developer-guide/custom-hardware).

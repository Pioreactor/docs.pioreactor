---
title: Customize the hardware interface
slug: /custom-hardware
description: Extend or override Pioreactor hardware definitions by layering YAML files that hardware.py reads.
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

Pioreactor's hardware layer is intentionally data-driven. Everything in [`core/pioreactor/hardware.py`](https://github.com/pioreactor/pioreactor/blob/main/core/pioreactor/hardware.py) loads user-editable YAML files from `~/.pioreactor/hardware/` (or the folder pointed to by the `DOT_PIOREACTOR` env var). By editing these files you can rewire pins, add new peripherals, or describe an entirely new bioreactor model without touching the Python code. Pair these configs with [custom bioreactor model definitions](/developer-guide/custom-bioreactor-models) so the UI, safety limits, and wiring stay in sync.

## How the loader works

`hardware.py` deep-merges two directories for each **mod** (subsystem):

1. `~/.pioreactor/hardware/hats/<hat_version>/<mod>.yaml` – physical wiring that ships with a specific HAT revision (`hardware_version_info`).
2. `~/.pioreactor/hardware/models/<model>/<version>/<mod>.yaml` – intent for a particular bioreactor model returned by `get_pioreactor_model()`.

Later layers override earlier ones. Missing files are allowed; missing keys throw `HardwareError`s when helpers such as `get_pwm_to_pin_map()` run.

Common mods defined inside `hardware.py` are:

- `pwm.yaml` (`get_pwm_controller`, `get_heater_pwm_channel`, `get_pwm_to_pin_map`)
- `gpio.yaml` (`get_pcb_led_pin`, `get_hall_sensor_pin`, `get_sda_pin`, `get_scl_pin`)
- `temp.yaml` (`get_temp_address`, used by `is_heating_pcb_present`)
- `adc.yaml` (`get_adc_curriers`, which subsequently powers PD channel helpers)
- `dac.yaml` (`get_dac_address`)

You can add additional mods with any key/value structure—`get_layered_mod_config("my_mod")` will still combine the YAML files.

## Step-by-step: add a custom hardware profile

1. **Create directories** for your HAT and model version.
   ```bash
   mkdir -p ~/.pioreactor/hardware/hats/<hat_version>
   mkdir -p ~/.pioreactor/hardware/models/<model_name>/<model_version>
   ```
   Use `pioreactor.version.hardware_version_info` (for hats) and your `pioreactor.models` entry for models.

2. **Describe the wiring** (hat layer). Example `~/.pioreactor/hardware/hats/0.2/pwm.yaml`:
   ```yaml
   controller: hat_mcu
   heater_pwm_channel: "5"
   pwm_to_pin:
     "1": 17
     "2": 13
     "5": 18
   ```
   These keys map directly to `_load_pwm_cfg()` in `hardware.py`.

3. **Describe the capabilities** (model layer). Suppose you added a new auxiliary photodiode ADC:
   ```yaml title="~/.pioreactor/hardware/models/my_model/v1.0/adc.yaml"
   pd1:
     driver: ADS1115
     address: 0x48
     channel: 0
   aux:
     driver: pico
     address: 0x40
     channel: 0
   salty:
     driver: ADS1115
     address: 0x49
     channel: 2
   ```
   `get_adc_curriers()` will automatically expose `.keys()` for every entry (`pd1`, `aux`, `salty`). Downstream helpers, like `get_available_pd_channels()`, treat `pd*` names as photodiode channels.

4. **Reference new mods in code**. Anywhere in your plugin/automation you can import:
   ```python
   from pioreactor.hardware import get_layered_mod_config

   stir_cfg = get_layered_mod_config("stirrer")  # merges hats/<hat>/stirrer.yaml and models/<model>/stirrer.yaml
   if stir_cfg.get("controller") == "pico":
       ...
   ```
   This keeps custom hardware logic outside Pioreactor core.

## Tips for customization

- Use integers for all addresses and pins; `hardware.py` casts everything via `int()` and will raise if parsing fails.
- Keep YAML minimal—only override keys that differ from the hat defaults to take advantage of deep-merge layering.
- The helper predicates (`is_ADC_present`, `is_heating_pcb_present`, etc.) are safe ways to gate optional hardware in your jobs.


Once you describe the hardware this way, the rest of the stack—jobs, automations, plugins—just asks `hardware.py` for the capabilities it needs, so new hardware becomes a configuration exercise instead of a fork of the core codebase.

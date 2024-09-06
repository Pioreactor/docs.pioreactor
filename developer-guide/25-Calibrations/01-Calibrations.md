---
title: Adding a new calibration type
slug: /adding-calibration-type
---

:::info
This is subject to change! Currently we don't like how much a developer has to implement (or copy and paste) to create a new calibration. We want to make it easier to design new calibrations.
:::

Ideally, all calibrations, including od_calibration and pump_calibration, should behave similarly:

1. Interface should have the following:
   - `pio run <x>_calibration` starts the calibration and saves it keyed by a unique name (see 2. for storage)
   - `pio run <x>_calibration list` lists all saved calibrations, keyed by their unique name.
   - `pio run <x>_calibration display "<name>"` displays information about the current calibration to be used, or the calibration ?name? if provided
   - `pio run <x>_calibration change_current "<name>"` changes the current calibration to `<name>` calibration.
   - `pio run <x>_calibration publish "<name>"` publishes the calibration to the leader.

2. On disk, all run calibrations should be stored in local persistent storage under `<x>_calibrations` keyed by a unique name, and the current calibration
should be stored in `<x>_current_calibration`, with appropriate key (can use `<calibration_type>`) that is not the unique name, but something consistent. Note: The name cannot be `current`.
3. A struct should be created / sub-classed from structs.Calibration that will encode / decode the calibration data blob.
4. When a new calibration is created, a PUT request to `/api/calibrations/` should be sent. The body is the json-encoded Calibration struct.
5. When a new calibration is set as current (change_current), a PATCH request to `/api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>` should be sent.
6. Creating a new calibration should both publish to leader and set as current.

For example, for `pump_calibration`, the three default calibration types are: `media_pump_calibration`, `alt_media_pump_calibration`, and `waste_pump_calibration`.
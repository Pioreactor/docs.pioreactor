---
title: Custom bioreactor models
slug: /custom-bioreactor-models
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

:::tip
This feature is actively under development - let us know what else you would like to see!
:::

If you are building a novel bioreactor on top of our software, you can use the `~/.pioreactor/models` dir to add your own bioreactors. This metadata flows into the Inventory UI, safety interlocks, analytics, and can be consumed from Python via `pioreactor.whoami.get_pioreactor_model()`.

## Directory layout

1. Create the models folder if it does not exist:
   ```bash
   mkdir -p ~/.pioreactor/models
   ```
2. Add one YAML file per model+version, for example `~/.pioreactor/models/custom_100ml__v1_0.yaml`.
3. Restart the Pioreactor UI to pick up the new definition.
4. Assign pioreactors to this new model on the Inventory UI page or via `pio workers update-model ...` tool.

## Required fields

Each YAML is validated against `pioreactor.structs.Model`, so include at least:

- `model_name`: slug-style identifier (`custom_100ml`).
- `model_version`: semantic-ish version (`"1.0"`).
- `display_name`: friendly label shown in the Inventory.
- `reactor_capacity_ml`: physical vessel size.
- `reactor_max_fill_volume_ml`: operational maximum before spilling.
- `reactor_diameter_mm`: used by stirring + growth-rate heuristics.
- `max_temp_to_reduce_heating`, `max_temp_to_disable_heating`, `max_temp_to_shutdown`: temperature safety thresholds in °C.

## Example definition

```yaml title="~/.pioreactor/models/custom_100ml.yaml"
model_name: custom_100ml
model_version: "1.0"
display_name: "Custom 100 mL, v1.0"
reactor_capacity_ml: 100.0
reactor_max_fill_volume_ml: 95.0
reactor_diameter_mm: 50.0
max_temp_to_reduce_heating: 80.0
max_temp_to_disable_heating: 85.0
max_temp_to_shutdown: 90.0
```

After saving the file, the Inventory page will list “Custom 100 mL, v1.0” in each unit’s model dropdown. The same data becomes available to jobs and plugins:

```python
from pioreactor.whoami import get_pioreactor_model

model = get_pioreactor_model()
print(model.display_name)
print(model.reactor_capacity_ml)
```

## Coordinating with hardware profiles

Model definitions describe intent (volumes, limits), while the hardware loader handles wiring, pin assignments, and sensor addresses. When you introduce a new model, you usually need a matching directory under `~/.pioreactor/hardware/models/<model_name>/<model_version>/` so [`hardware.py` can layer the right YAMLs](/developer-guide/custom-hardware). Keeping the names and versions identical lets software map UI selections → hardware capabilities.

If you are basing your custom model off an existing Pioreactor model, can reuse the hardware for our Pioreactor models:

```
mkdir -p ~/.pioreactor/hardware/models/<model_name>/<model_version>
cp ~/.pioreactor/hardware/models/pioreactor_40ml/1.5/* ~/.pioreactor/hardware/models/<model_name>/<model_version>

```

## Validation and troubleshooting

- Run `python -m pioreactor.models` to ensure your YAML parses; validation errors are also logged via the `models` logger.
- If a model is missing from the dropdown, confirm the filename ends with `.yaml`/`.yml`, the process has read permissions, and the Pioreactor services have restarted.
- Treat this directory like code: commit the YAMLs to version control alongside any CAD notes or lab SOPs so teammates understand the assumptions behind each model.

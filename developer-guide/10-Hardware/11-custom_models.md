---
title: Custom bioreactor models
slug: /custom-bioreactor-models
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

If you are building a novel bioreactor on top of our software, you can use the `~/.pioreactor/models` dir to add your own bioreactors. This metadata flows into the Inventory UI, safety interlocks, analytics, and can be consumed from Python via `pioreactor.whoami.get_pioreactor_model()`.

## Directory layout

1. Create the models folder if it does not exist:
   ```bash
   mkdir -p ~/.pioreactor/models
   ```
2. Add one YAML file per model+version, for example `~/.pioreactor/models/custom_100ml__v1_0.yaml`. Any filename ending in `.yaml` or `.yml` works. The file must be on the leader (so the model appears in the Inventory dropdown) and on every Pioreactor that will use it. From the leader, copy it to all workers with:
   ```bash
   pios cp ~/.pioreactor/models/custom_100ml__v1_0.yaml
   ```
3. Restart the web UI on the leader to pick up the new definition:
   ```bash
   sudo systemctl restart pioreactor-web.target
   ```
4. Stop activities on the target Pioreactor, then assign the model from Inventory or with the commands below. Update workers before changing their models through the leader.

You can also import model YAML files from the [SD card's boot partition](/user-guide/provisioning-images#import-experiment-profiles-models-and-hardware).

## Assigning a model

Each Pioreactor stores its own model assignment. It survives reboots and remains available when the leader is unreachable. To inspect or change the local assignment, run these commands on that Pioreactor:

```bash
pio model get
pio model set custom_100ml 1.0
```

The model definition must be installed locally, and activities must be stopped before changing the model. A custom model defined only on a worker can be assigned with `pio model set` on that worker.

From the leader, inspect or change a worker's assignment with:

```bash
pio workers model get worker01
pio workers model set worker01 custom_100ml 1.0
```

Both `get` commands print JSON with `model_name` and `model_version`. Changing a model through the leader requires the worker to be reachable and its activities to be stopped.

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
- If a model is missing from the dropdown, confirm the file is in `/home/pioreactor/.pioreactor/models/` on the leader, the filename ends with `.yaml`/`.yml`, and you restarted `pioreactor-web.target`. Invalid files are skipped and logged to `pioreactor.log`.
- Treat this directory like code: commit the YAMLs to version control alongside any CAD notes or lab SOPs so teammates understand the assumptions behind each model.

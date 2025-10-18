---
title: Custom bioreactor models
slug: /custom-bioreactor-models
hide_table_of_contents: true
---

:::tip
This feature is actively under development - let us know what else you would like to see!
:::

If you are building a novel bioreactor on top of our software, you can use the `~/.pioreactor/models` dir to add your own bioreactors. For example, add the following to `custom_100ml.yaml` in `~/.pioreactor/models`:

```yaml
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

The UI's Inventory page should now show a this option in the model-selection dropdowns. 

These values can be accessed throughout our software via `pioreactor.whoami.get_pioreactor_model()`.


---
title: Adding datasets to the Export Data page
slug: /dataset-to-ui
---

You can  allow users to export your data from the UI's Export Data page. To do this, add a YAML file to `~/.pioreactor/plugins/exportable_datasets` with the following information:

```yaml
dataset_name: some_unique_dataset_name
default_order_by: timestamp # for example
description: A lovely description which shows up in the UI
display_name: A lovely name which shows up in the UI
has_experiment: true # does your SQL table have an experiment column.?
has_unit: true # does your SQL table have an pioreactor_unit column.?
source: app
table: the_target_table # see also query below
timestamp_columns:
- timestamp
always_partition_by_unit: false
query: SELECT * FROM the_target_table WHERE reading < 4 AND ... # optional: you can specify a query.
```

After adding this file, visit the Export Page in the UI.
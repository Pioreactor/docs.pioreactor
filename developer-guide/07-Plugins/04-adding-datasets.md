---
title: Adding exportable datasets
slug: /plugins/datasets
hide_table_of_contents: true
---

You can allow users to export your data from the UI's **Export Data** page.

:::important
Exportable dataset YAML files go on the leader. They describe data that the leader UI can export from the leader's database. They do not start the job that produces the data.
:::

To add an exportable dataset, add a YAML file on the leader in `~/.pioreactor/plugins/exportable_datasets` with the following information:

```yaml
dataset_name: some_unique_dataset_name
default_order_by: timestamp # for example
description: A lovely description which shows up in the UI
display_name: A lovely name which shows up in the UI
has_experiment: true # does your SQL table have an experiment column.?
has_unit: true # does your SQL table have an pioreactor_unit column.?
source: app
table: the_target_table # optional: see note below
timestamp_columns:
- timestamp
always_partition_by_unit: false
query: SELECT * FROM the_target_table WHERE reading < 4 AND ...  # optional: see note below
```

:::note
Either `table` or `query` is required. If you provide a `table`, the `query` field is ignored. The usecase for `query` is when you need to join multiple tables, use `WHERE` clauses, or do some other complex SQL operation.
:::

After adding this file, visit the **Export Data** page in the UI.

You can see more examples [here](https://github.com/Pioreactor/CustoPiZer/tree/pioreactor/workspace/scripts/files/pioreactor/exportable_datasets) and [here](https://github.com/Pioreactor/spectrometer-reading-plugin/tree/main/spectrometer_reading_plugin/exportable_datasets)

---
title: Exporting data
slug: /export-data
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

Experiment data can be exported using the _Export data_ tab on the Pioreactor site.


![](/img/user-guide/02-experiment-basics/08-export-data/export_data_default.png)


Each export contains data from one experiment. Select the experiment from the dropdown menu, or select `<System>` for system-level datasets such as logs that are not associated with a user experiment.

![](/img/user-guide/02-experiment-basics/08-export-data/export_data_choose_dataset.png)

Select the datasets you would like to download.

![](/img/user-guide/02-experiment-basics/08-export-data/export_data_selections.png)

Under **Export options**, you can split CSV files by Pioreactor or restrict timestamped datasets to a time range. Times entered in the UI use your browser's timezone and are converted to UTC for the export.

Click the _Export_ button to download a **.zip** archive containing the selected CSV files.

## What's in an export archive

Every archive includes:

- `manifest.json`, which records the Pioreactor version, selected experiment and datasets, time filters, partition settings, CSV paths, and row counts.
- One folder per selected dataset, containing its CSV files and a `schema.json` file.
- Each `schema.json` describes the dataset and its columns, including descriptions and units when the dataset provides them.

The metadata format is versioned independently from the Pioreactor software. In 26.7.0, `manifest.json` and each `schema.json` use schema version `1`.

## Exporting from the command line or an integration

On the leader, `pio run export_experiment_data` requires exactly one `--experiment`. Repeat `--dataset-name` to select more than one dataset:

```bash
pio run export_experiment_data \
  --experiment "my experiment" \
  --dataset-name od_readings \
  --start-time 2026-07-01T00:00:00-04:00 \
  --end-time 2026-07-02T00:00:00-04:00 \
  --output ./my-experiment.zip
```

Time bounds are inclusive. CLI, API, and MCP clients must supply offset-aware ISO-8601 timestamps: include `Z` for UTC or a numeric UTC offset such as `-04:00`. API and MCP clients should send one `experiment` string, not an `experiments` list.


:::note
Is a dataset not available in the list? Is there a specific data point you'd like but can't find? Feel free to ask about it on our [forums](https://forum.pioreactor.com/).
:::

## Exporting to a USB drive

If a writable USB drive is mounted on the leader Pioreactor, the export page can save the export directly to the drive instead of downloading it through the browser. See [Using USB drives](/user-guide/using-usb-drives) for mounting and ejecting the drive.

After selecting your experiment and datasets, choose **Export to USB** from the export destination menu and click **Export to USB**.

![Export data page showing Export to USB](/img/user-guide/02-experiment-basics/08-export-data/export-to-usb.png)

USB exports are saved as a `.zip` file under `pioreactor/exports/` on the drive. Keep the page open until the export finishes.

## Pioreactor Unit Activity Data

When exporting datasets, most csv files will include a single metric against a time series. If you'd like to compare many datasets using a single time series, we recommend export of the _Pioreactor Unit Activity_ dataset.

This dataset summarizes all activities from one Pioreactor against a single time series to make working with data easier. The dataset will follow a running timeseries (column A) and include metrics for OD, temperature, stirring, LED updates and dosing. 

Consider this example where we turned on temperature and stirring: 

![](/img/user-guide/02-experiment-basics/08-export-data/temp-vs-stirring-separate-csv.png)

Temperature and stirring datasets are exported on separate .csv files and follow their unique time series. In comparison, the Pioreactor Unit dataset compiles both against the same time series, making it much more accessible:

![](/img/user-guide/02-experiment-basics/08-export-data/pio-unit-data-example.png)



<!-- insert images of example export data once implemented --> 

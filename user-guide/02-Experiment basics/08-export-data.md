---
title: Exporting data
slug: /export-data
hide_table_of_contents: true
---

Experiment data can be exported using the _Export data_ tab on the Pioreactor site.


![](/img/user-guide/02-experiment-basics/08-export-data/export_data_default.png)


You can retrieve datasets from any previous experiments, including from _all_ experiments simultaneously using the `<All experiments>` option at the bottom of the list.

Select your experiment from the drop down menu.

![](/img/user-guide/02-experiment-basics/08-export-data/export_data_choose_dataset.png)

Select the datasets you would like to download. 

![](/img/user-guide/02-experiment-basics/08-export-data/export_data_selections.png)

Click the _Export_ button to download the raw data as **.csv** files.


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

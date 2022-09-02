---
title: Exporting data
slug: /export-data
---

Experiment data can be exported using the _Export data_ tab on the Pioreactor site.

You can retrieve datasets from any previous experiments, including from _all_ experiments simultaneously using the `<All experiments>` option at the bottom of the list.

Select your experiment from the drop down menu.

![](/img/user-guide/export_data.png)

Select the datasets you would like to download. 

![](/img/user-guide/export_data_sets.png)

Scroll to the bottom and click the _Export_ button to download the raw data as **.csv** files. Each dataset on the list will export as its own .csv file, for each Pioreactor in your cluster.  

![](/img/user-guide/export_button.png)


:::note
Is a dataset not available in the list? Is there a specific data point you'd like but can't find? Feel free to ask about it on our [forums](https://forum.pioreactor.com/).
:::

## Pioreactor Unit Activity Data

When exporting datasets, most csv files will include a single metric against a time series. If you'd like to compare many datasets using a single time series, we recommend export of the _Pioreactor Unit Activity_ dataset.

This dataset summarizes all activities from one Pioreactor against a single time series to make extrapolation easier. As an experiment runs, activity metrics will be continuously saved. The dataset will follow a running timeseries (column A) and include metrics for OD, temperature, stirring, LED updates and dosing. 

<!-- insert images of example export data once implemented --> 

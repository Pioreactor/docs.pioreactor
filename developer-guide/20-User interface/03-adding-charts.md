---
title: Adding basic time series charts
slug: /chart-to-ui
---


#### Step 1
Create a yaml file with the following fields, and place it in `/home/pioreactor/.pioreactor/plugins/ui/charts`. (Plugins can put the yaml file under `ui/contrib/charts` in there project folder - it will be added upon installation.)

- `chart_key`: a unique identifier for the chart being added. 
- `data_source`: the SQL table to read historical data from. The data source must have a `timestamp`, `pioreactor_unit`, and `experiment` column, along with a numeric column to plot (see below). 
- `data_source_column`: the column in `data_source` to read and display.
- `title`: title on the chart
- `y_axis_label`: the y-axis label
- `fixed_decimals`: How many decimals to display.
- `mqtt_topic`: (Optional) a truncated MQTT topic to read live data from - stripped of the `pioreactor/<unit>/<experiment>` part. Ex: `co2_readings/ppm` if the entire MQTT topic is `pioreactor/<unit>/<experiment>/co2_readings/ppm`
- `payload_key`: (Optional) If the MQTT topic is json blobs, use the `payload_key` to retrieve the data from the blob. 
- `interpolation`: (Optional) the interpolation to use between points, default is `stepAfter`. 
- `y_axis_domain`: (Optional) specify a starting y-axis domain. Must be an array, like `[0.0, 0.5]`.
- `y_transformation`: (Optional) an inline JS function to transform the y data. Default is the identity function.

See examples of yaml files [here](https://github.com/Pioreactor/pioreactorui/tree/master/contrib/charts).



#### Step 2

In your config.ini, add your chart key under `[ui.overview.charts]` and assign it 1. Example:

```
[ui.overview.charts]
# show/hide charts on the PioreactorUI dashboard
# 1 is show, 0 is hide
...
co2_readings=1
...
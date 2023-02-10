---
title: Adding basic time series charts
slug: /chart-to-ui
---

You can add custom charts to the UI. Below is an example of adding a chart that displays historical and real-time CO2 sensor data.

![custom chart of CO2 reading](/img/developer-guide/custom_chart.png)

### Step 1
Create a yaml file with the following fields, and place it in `/home/pioreactor/.pioreactor/plugins/ui/charts`. (Plugins can put the yaml file under `ui/contrib/charts` in there project folder - it will be added upon installation.)

- `chart_key`: a unique identifier for the chart being added, string.
- `data_source`: the SQL table to read historical data from. The data source must have a `timestamp`, `pioreactor_unit`, and `experiment` column, along with a numeric column to plot (see below), string.
- `data_source_column`: the column in `data_source` to read and display, string.
- `title`: title on the chart, string
- `y_axis_label`: the y-axis label, string
- `fixed_decimals`: How many decimals to display, integer.
- `mqtt_topic`: a truncated MQTT topic to read live data from - stripped of the `pioreactor/<unit>/<experiment>` part. Ex: `co2_readings/ppm` if the entire MQTT topic is `pioreactor/<unit>/<experiment>/co2_readings/ppm`, string.
- `payload_key`: (Optional) If the MQTT topic is json blobs, use the `payload_key` to retrieve the data from the blob, string.
- `interpolation`: (Optional) the interpolation to use between points, default is `stepAfter`, string.
- `y_axis_domain`: (Optional) specify a starting y-axis domain. Must be an array, like `[0.0, 0.5]`.
- `y_transformation`: (Optional) an inline JS function to transform the y data. Default is the identity function, string.

See examples of yaml files [here](https://github.com/Pioreactor/pioreactorui/tree/master/contrib/charts).



### Step 2

In your config.ini, add your chart key under `[ui.overview.charts]` and assign it 1. Example:

```
[ui.overview.charts]
# show/hide charts on the PioreactorUI dashboard
# 1 is show, 0 is hide
...
co2_readings=1
...
```

![](/img/developer-guide/adding_chart_to_config.png)

### Troubleshooting

 - If the UI stops displaying data, you may have introduced a yaml file that is not being read correctly. Check out the Pioreactor UI logs by sshing into the leader, and running:
  ```
  tail /var/log/pioreactorui.log
  ```
  The last few lines should tell you about if a field is missing, a wrong type, etc.
 - There is a 30sec cache, so it may take up to 30sec to see new changes in the UI.



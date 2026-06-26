---
title: Adding charts to the Overview page
slug: /plugins/charts
hide_table_of_contents: true
---

You can add custom charts to the UI. Below is an example of adding a chart that displays historical and real-time CO2 sensor data.

![custom chart of CO2 reading](/img/developer-guide/20-user-interface/04-adding-charts/custom_chart.png)

:::important
Chart YAML files go on the leader. The leader serves the dashboard, subscribes to live MQTT data for the UI, and reads historical data from the SQLite database.
:::

If your data comes from a worker, you usually need three pieces:

1. Worker-side code that publishes the reading to MQTT.
2. Leader-side persistence that stores readings in a SQLite table, if the chart should show historical data.
3. Leader-side chart YAML and `[ui.overview.charts]` config so the **Overview** page knows how to display the data.

### Step 1
Create a YAML file with the following fields, and place it on the leader in `/home/pioreactor/.pioreactor/plugins/ui/charts/`. Plugins can put the YAML file under `ui/charts` in their project folder; it will be copied to `~/.pioreactor/plugins/ui/charts` upon installation. The installer also accepts `ui/contrib/charts` for legacy plugins.

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
- `down_sample`: (Optional) A boolean to down-sample the data points from the server or not.

See examples of YAML files [here](https://github.com/Pioreactor/pioreactor/tree/master/packaging/shared-assets/pioreactor/ui/charts) and [here](https://forum.pioreactor.com/t/creating-stirring-rpm-and-pwm-duty-cycle-charts-on-the-ui/339).



### Step 2

On the leader, add your chart key under `[ui.overview.charts]` in `config.ini` and assign it 1. Example:

```
[ui.overview.charts]
# show/hide charts on the PioreactorUI dashboard
# 1 is show, 0 is hide
...
co2_readings=1
...
```

![](/img/developer-guide/20-user-interface/04-adding-charts/adding_chart_to_config.png)

### Troubleshooting

 - If the UI stops displaying data, you may have introduced a YAML file that is not being read correctly. Check out the Pioreactor UI logs by sshing into the leader, and running:
  ```
  tail /var/log/pioreactor.log
  ```
  The last few lines should tell you about if a field is missing, a wrong type, etc.
 - There is a 30 second cache, so it may take up to 30 second to see new changes in the UI.

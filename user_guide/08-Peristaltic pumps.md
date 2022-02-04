# Attaching a peristaltic pump to your Pioreactor

You can attach up to three peristaltic pumps to your Pioreactor, typically used for: adding fresh media to the vial, removing effluent from the vial, and adding an alternative media to the vial.

:::info
Pump calibrations must be run first, see [section on calibrating a pump](/user_guide/Hardware%20calibrations#pump-calibration)
:::

First decided what you want this pump to do: add media, remove waste, or add alternative media. Pumps that are supplied by us will have a polarized connector that connects to the PWM outputs on the Pioreactor hat. Which PWM you use is determined by your `PWM` settings in config.ini.

![](/img/user_guide/pwm_config.png)

In our case, if we were to use the pump as a media pump, we would connect the pump to PWM channel 2.

## Running the pump

Once finished calibrating, you can run your pump manually and programmatically.

### Manually from the web interface

![](/img/user_guide/manage_ui.png)
![](/img/user_guide/dosing_ui.png)
![](/img/user_guide/add_media_ui.png)


### Manually from the command line

```
pio run add_media --ml 3
```

or, if you wish to run continuously until interrupted.

```
pio run add_media --continuously
```






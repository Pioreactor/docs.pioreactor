---
title: Using a peristaltic pump with your Pioreactor
slug: /using-pumps
---

## Attaching the pump

You can attach up to three peristaltic pumps to your Pioreactor, typically used for: adding fresh media to the vial, removing effluent from the vial, and adding an alternative media to the vial.


First decided what you want this pump to do: add media, remove waste, or add alternative media. Pumps that are supplied by us will have a polarized connector that connects to the PWM outputs on the Pioreactor hat. Which PWM you use is determined by your `PWM` settings in config.ini.

![](/img/user-guide/pwm_config.png)

In our case, if we were to use the pump as a media pump, we would connect the pump to PWM channel 2.

## Running the pump

:::info
Pump calibrations must be run first, see [section on calibrating a pump](/user-guide/hardware-calibrations#pump-calibration)
:::

Once finished calibrating, you can run your pump manually and programmatically.

### Manually from the web interface

![](/img/user-guide/manage_ui.png)
![](/img/user-guide/dosing_ui.png)
![](/img/user-guide/add_media_ui.png)


### Manually from the command line

```
pio run add_media --ml 3
```

or, if you wish to run continuously until interrupted.

```
pio run add_media --continuously
```

## Programmatically run pumps using automations

Dosing automations, like turbidostats, chemostats, fed-batch and more, are available to run once your pumps are attached and calibrated. [Read more about automations](https://docs.pioreactor.com/user-guide/Automations/Dosing%20Automations).




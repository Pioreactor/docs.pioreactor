---
title: Using a peristaltic pump with your Pioreactor
slug: /using-pumps
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

## Adding pumps in configuration

You can attach up to three peristaltic pumps to your Pioreactor, typically used for: adding fresh media to the vial, removing effluent from the vial, and adding an alternative media to the vial.


First decided what you want this pump to do: add media, remove waste, or add alternative media. Pumps that are supplied by us will have a polarized connector that connects to the PWM outputs on the Pioreactor hat. Which PWM you use is determined by your `PWM` settings in config.ini.

![](/img/user-guide/pwm_config.png)

In our case, if we were to use the pump as a media pump, we would connect the pump to PWM channel 2.

<AssemblyInstructionBlock title="Attaching the pumps" images={["experiments/turbidostat/pump_to_pwm.png","experiments/turbidostat/sink_and_source.png"]}>

1. Insert the cable of one peristaltic pump into <Highlight color={colors.magenta}>PWM channel 2.</Highlight> This is your **media pump.** 
2. Insert the cable of the other pump into <Highlight color={colors.orange}>PWM channel 4.</Highlight>  This is your **waste pump.**

More details on attaching pumps can be found [here](/user-guide/using-pumps). 

:::note
The peristaltic pump has two tubes: a <Highlight color={colors.red}>source</Highlight> and a <Highlight color={colors.blue}>sink.</Highlight> Source tubes take up liquid, and sink tubes expel liquid. You can label your tubes with coloured tape as we have in the images.
:::

</AssemblyInstructionBlock>

<AssemblyInstructionBlock title="Calibrating the pumps" images={["experiments/turbidostat/ssh_into_unit.png","experiments/turbidostat/run_pump_calc.png"]}>

1. [Calibrate your pumps](/user-guide/hardware-calibrations#pump-calibration) through your computer's command line. 
2.	Type **`ssh pioreactor@<insert unit name>.local`**. For example, to calibrate on our Pioreactor named _worker3_, we typed **`ssh pioreactor@worker3.local`**.
3. Type **pio run pump_calibration**. 
4. Follow the prompts to calibrate your media, waste, and/or alternate media pumps. 
5. Calibrations can be performed depending on the frequency of your Pioreactor use. 

</AssemblyInstructionBlock>

## Sterilizing the pumps

To avoid cross contamination, pumps should be sterilized before and after use. 

<AssemblyInstructionBlock title=" " images={["experiments/turbidostat/ssh_into_unit.png","experiments/turbidostat/run_pump_calc.png"]}>

1. Create a 10% bleach dilution in a beaker. Place the sink and source tubes of each pump you're using in the beaker. 
2. On the UI, in the _Pioreactors_ tab, click _Manage_ and go to the _Dosing_ tab. 
3. _Run continuously_ to cycle the disinfectant solution through each pump that you're using. 
4. _Interrupt_ after sufficient cycling. In another beaker with deionized water, place the tubes in and repeat the cycling to rinse out the pumps. 
5. Your pumps are now ready to be attached to media, waste, or vials for your experiments. 

</AssemblyInstructionBlock>

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




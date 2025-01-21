---
title: Standard curves for OD600 readings
slug: /calibrate-od600
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import Admonition from '@theme/Admonition';

import * as colors from '@site/src/components/constants';

## Calibrating your OD600 readings 

Depending on the purposes of your research, you may want to calibrate your Pioreactor against known samples and OD600 values. We've given you the option to do this through the command line, similar to how pump calibrations currently work. _Calibrations using the UI are coming soon!_

OD600 calibrations are straightforward, and only require one vial, your sample of interest, and an accurate way to measure liquids. We recommend a micropipette of volume range 100 to 1000 uL. 

The calibration works by reading a dilution series. You will start with 10mL of your sample of interest cultivated in your media, at the highest density you expect to observe. During the calibration, you will specify and add an amount of your media to dilute your sample. To avoid overflowing, the program will prompt you to reduce the volume in your vial to 10mL at set intervals. 

Calibrations should be specific to your experiment setup. Any changes to your media, culture, or optical setup (i.e. changing IR intensity, replacing pieces, or changing the angle) may require a new calibration. If everything remains consistent, then we recommend running calibrations every 6 months, or whatever suits your purposes.

:::info
All your OD calibrations are saved to disk, and can be edited afterwards.
:::

## Running the calibration

Connect to your Pioreactor by typing *`ssh pioreactor@<insert unit name>.local`*. For example, to calibrate on our Pioreactor named worker3, we typed *`ssh pioreactor@worker3.local`*. The default password is `raspberry`. To begin calibrations, type `pio calibrations run --device od`.

Start off by inputting some metadata of your calibration. Provide a descriptive and unique name to make it easier to find your calibration again, if needed. Follow the rest of the questions.

:::info
One of your photodiodes will be located in the 90° or 135° pocket on the vial holder. You will be prompted to confirm the angle of your PD cable. If this is incorrect, go to the _Configuration_ tab on the Pioreactor UI and under _od_config.photodiode_channel_, change to your angle of choice, then restart your OD calibration.
![Change the angle through the UI configuration tab.](/img/user-guide/change_angle.png)
:::


Following the questions, stirring and optical density reading will begin. A graph is generated as you calibrate so you can see your progress.

![Graph generated as you measure.](/img/user-guide/generating_graph.png)
 
Depending on your number of measurements, you may be prompted to reduce your vial volume to 10 mL. _OPTIONAL_: At this point, you may take the OD600 reading of your vial on a different instrument and input this OD600 value for the current measurement.

![Input an external OD600 value.](/img/user-guide/add_new_od600.png) 

Once you complete all your measurements, a calibration curve will appear over your graph. If you are satisfied with this, save your calibration. 

:::info
By default, we fit the calibration curve with a polynomial. You can choose the degree of the polynomial if you wish, but we found that degree 4 works well for wide OD600 calibrations, and degree 1 (a linear model) works will for narrow calibrations near 0.
:::

![Final data points on OD calibration.](/img/user-guide/od_cal_45_deg.png)

![Final data points with generated curve.](/img/user-guide/od_cal_45_deg_with_curve.png)

## Using calibrations in your experiments

Calibrations are applied automatically during OD Readings. That is, after performing a calibration, your future experiments that use optical density readings will use the post-calibration values and be displayed in the UI and saved to the database.

To change the OD calibration you wish to use for an experiment, visit the Calibrations page, select the calibration you wish to use, and select "Set Active". Only one calibration can be Active at a time.

![Final data points on OD calibration.](/img/user-guide/od_cal_active.png)


You can disable calibrations by changing the OD device to have no _Active_ calibration in the Calibrations page.

## Editing your previous calibrations

The calibrations are saved as a YAML file on your Pioreactor. You can edit these files directly on the command line. If you want to re-analyze the dataset, you can use the following tool:
```
pio calibrations analyze --device od --name <name of your calibration>
```

## Sharing calibrations

Since the calibrations are just YAML files, you can easily share existing calibrations to other Pioreactors.
```



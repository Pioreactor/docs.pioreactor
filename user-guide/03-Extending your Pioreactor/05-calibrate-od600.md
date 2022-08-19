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

Calibrations should be specific to your experiment setup. Any changes to your media, culture, or optical setup (i.e. changing IR intensity, replacing pieces, or changing the angle) will require a new calibration. If everything remains consistant, then we recommend running calibrations every 6 months, or whatever suits your purposes. 

## Running the calibration

Calibrations should, on average, take approximately 10 minutes or less. 

Connect to your Pioreactor by typing *`ssh pioreactor@<insert unit name>.local`*. For example, to calibrate on our Pioreactor named worker3, we typed *`ssh pioreactor@worker3.local`*. To begin calibrations, type *`pio start od_calibration`*

![Input the metadata of your calibration.](/img/user-guide/metadata.png)

:::info
One of your PD cables will be located in the 45°, 90°, or 135° pocket on the vial holder. You will be prompted to confirm the angle of your PD cable. If this is incorrect, typing `n` will exit the OD calibration. Go to the _Configuration_ tab on the Pioreactor UI and under _od_config.photodiode_channel_, change to your angle of choice. Then restart your OD calibration. 
:::

![Change the angle through the UI configuration tab.](/img/user-guide/change_angle.png)

Follow the prompts given. A graph is generated as you calibrate so you can see your progress. 

![Graph generated as you measure.](/img/user-guide/generating_graph.png)
 
Depending on your number of measurements, you may be prompted to reduce your vial volume to 10 mL. 

OPTIONAL: At this point, you may take the OD600 reading of your vial on a different instrument and input this OD600 value for the current measurement. 

![Input an external OD600 value.](/img/user-guide/add_new_od600.png) 

Once you complete all your measurements, a calibration curve will appear over your graph. If you are satisfied with this, save your calibration. 

![Final data points on OD calibration.](/img/user-guide/od_cal_45_deg.png)

![Final data points with generated curve.](/img/user-guide/od_cal_45_deg_with_curve.png)

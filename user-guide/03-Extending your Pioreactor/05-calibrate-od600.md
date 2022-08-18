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

Calibrations should be specific to your media and culture. Any changes to media or culture call for a new calibration. If these remain consistant, then we recommend redoing calibrations every 6 months, or whatever suits your purposes. 

## Running the calibration

Calibrations should, on average, take approximately 10 minutes. 

Connect to your Pioreactor by typing *`ssh pioreactor@<insert unit name>.local`*. For example, to calibrate on our Pioreactor named worker3, we typed *`ssh pioreactor@worker3.local`*. To begin calibrations, type *`pio start od_calibration`*




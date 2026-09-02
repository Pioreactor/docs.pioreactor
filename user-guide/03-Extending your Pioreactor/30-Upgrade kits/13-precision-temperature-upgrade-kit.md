---
title: Adding the Precision Temperature Upgrade Kit
sidebar_label: Precision Temperature Upgrade Kit
description: Install and configure the Precision Temperature Upgrade Kit on a Pioreactor 40ml.
slug: /precision-temperature-upgrade-kit
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

import AssemblyInstructionBlock from '@site/src/components/AssemblyInstructionBlock';
import Highlight from '@site/src/components/Highlight';
import * as colors from '@site/src/components/constants';

The [Precision Temperature Upgrade Kit](https://pioreactor.com/collections/accessories-and-parts/products/precision-temperature-upgrade-kit) adds a faster, more accurate external temperature sensor to a Pioreactor 20ml and 40ml.


<AssemblyInstructionBlock title="Step 1: Install the FIR temperature sensor" images={["user-guide/03-extending-your-pioreactor/13-precision-temperature-upgrade-kit/installed-pioreactor.jpg", "user-guide/03-extending-your-pioreactor/13-precision-temperature-upgrade-kit/sensor-orientation.jpg"]}>

1. Use a flat-head screwdriver or thin shim to gently lift and remove the plastic cover from the SPEC position.
2. Connect one end of the provided STEMMA QT cable to the FIR temperature sensor PCB.
3. Connect the other end of the cable to the nearest Eye-spy PCB.
4. Place the sensor PCB into the open position. Match the orientation shown in the photos: <Highlight color={colors.blue}>the LED "pad" faces the right-hand side</Highlight>, and the 6 holes face the left-hand side.
5. Optionally, secure the PCB with the provided 8mm M2.5 screws.

</AssemblyInstructionBlock>

## Step 2: Install the plugin

Power on the Pioreactor, open **Plugins** in the Pioreactor UI, and install `pioreactor-precision-temperature-plugin` on the Pioreactor with the new sensor.

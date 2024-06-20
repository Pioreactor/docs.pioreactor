---
title: Powering your Pioreactor cluster
slug: /powering-cluster
---

### Powering your Pioreactor

Each Pioreactor requires a Raspberry Pi, so you'll need to provide power to each Raspberry Pi. For small clusters, this can be accomplished by buying individual power supply units that connect from the wall or power-bar to each Raspberry Pi. We really like the [official Raspberry Pi Power Supply](https://www.raspberrypi.com/products/#power-supplies-and-cables), available at most places you can purchase a Raspberry Pi. In general, look for 5V and _at least_ 2.25 A (or _atleast 12 W_).


### Powering 2 to ~6 Pioreactors

Individual PSUs don't scale very well, so below are some other options for powering many Pioreactors with a single PSU.

You can purchase USB hubs from sites like Amazon. They may look something like below:

![Example of a USB hub with 6 ports](/img/user-guide/usb_hub.png)

**Important**: use the following guidelines before making a purchase. 

 - Advertised max wattage: each Pioreactor requires up to 15 W, so  [number of Pioreactors] * 15 W should be less than the max wattage (plus some extra).
 - Wattage per port: Make sure each port can supply at least 15 W.  **Do not get 5V 1A power supplies**.
 - Connection type: Raspberry Pis models have different power connectors. RPi 4 and 5 use USB-C, and everything else uses microUSB. You may need to purchase USB-C to microUSB wires.
 - Speaking of the wires from the PSU to the Raspberry Pi: make them **as short as possible**. Longer cables increase resistance, leading to unnecessary power loss. 

### More than ~6 Pioreactors

For more than 6 Pioreactors, we recommend looking into more reputable and reliable power supply unit. TBD




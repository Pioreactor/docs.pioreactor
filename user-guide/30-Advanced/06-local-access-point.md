---
title: Local access points
slug: /local-access-point
---

:::tip
This is a relatively new feature, and if you have problems with using it, or questions, please contact us at info@pioreactor.com ❤️
:::

For some use cases, you may want to create a local WiFi network just for your Pioreactors (this is called a local access point). Why might you want to do this?

 - If you want to get started right away, without dealing with WiFi credentials.
 - If your usual WiFi network is restrictive (doesn't allow Raspberry Pis, or requires IT support to host them).
 - If you want to take the Pioreactor, or cluster of Pioreactors, out into the field where there is no network.

The Pioreactor comes with the ability to create its own local access point, which other Pioreactors can connect to. This new network is not connected to any other broader network (including the internet). See image below:

![Using the leader Pioreactor to create a local access point](/img/user-guide/local_access_point.png)

## Starting a local access point

The leader Pioreactor has the necessary software to create the local access point. To start the access point, there are two methods:

 - During set up of your leader Pioreactor, in the Raspberry Pi Imager, uncheck "Configure wireless LAN". This leaves WiFi credentials blank, and so the Pioreactor will start a local access point on boot.
 - If you have an existing Pioreactor with WiFi credentials, and still want to start the local access point: remove power from the Pioreactor, pull GPIO pin 20 HIGH, and return power to the Pioreactor. (To do this: connect a jumper wire between a 3.3V pin and GPIO pin 20. See pins [here](https://pinout.xyz/)). Upon boot, the Pioreactor will initialize the local access network.


## Access the local access point

After starting the local access point, you should see a new network called `pioreactor`, with password `raspberry`. You should be able to connect to this new access point with any computer, phone, tablet, etc.

<img src="/img/user-guide/pioreactor_ap.png" width="325" />

Once connected, the usual urls should work: http://pioreactor.local will bring up the Pioreactor interface (having trouble? Try http://your_leaders_name.local).

### Connecting workers to your local access point

Worker Pioreactors will need to be reconfigured to connect to this new access point:

1. During worker set up in the Raspberry Pi Imager, using the credentials ssid: `pioreactor` and password `raspberry` in the wireless LAN section.
1. Or, by editing the `/etc/wpa_supplicant/wpa_supplicant.conf` with the correct credentials.

:::note
Since this network is not connected to the internet, you won't be able to upgrade any software on the Pioreactors.
:::

 ## Turning off a local access point

 If you wish to stop the local access point, rebooting the leader Pioreactor while pulling the GPIO pin 26 HIGH. You just need to do this once.


 ## Changing SSID name or password for your local access point

In the `config.ini`, the SSID and password are editable under the section `local_access_point`. Requires a power-cycle to take effect.
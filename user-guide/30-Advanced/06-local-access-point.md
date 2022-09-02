---
title: Local access points
slug: /local-access-point
---

:::tip
This is a relatively new feature, and if you have problems with using it, or questions, please contact us at info@pioreactor.com ❤️
:::


:::caution
This many not work if your leader is a Raspberry Pi Zero W or Raspberry Pi Zero 2 W
:::

For some use cases, you may want to create a local WiFi network just for your Pioreactors (this is called a local access point). Why might you want to do this?

 - If you want to get started right away, without dealing with WiFi credentials.
 - If your usual WiFi network is restrictive (doesn't allow Raspberry Pis, or requires IT support to host them).
 - If you want to take the Pioreactor, or cluster of Pioreactors, out into the field where there is no network.

The Pioreactor comes with the ability to create its own local access point, which other Pioreactors can connect to. This new network is not connected to any other broader network (including the internet). See image below:

![Using the leader Pioreactor to create a local access point](/img/user-guide/local_access_point.png)

## Starting a local access point

The leader Pioreactor has the necessary software to create the local access point. To start the access point:

 - If starting with a fresh Pioreactor: after the image has been added to the SD card, remove the SD card from your computer, and insert it back in. Add a file named `local_access_point` to the `/boot/` directory on the card. In this new file, add a two letter country code (ex: `CA`, `US`, `GB`, etc.). Remove the SD card safely, and insert back into the Pioreactor.
 - If starting from an existing Pioreactor: with the power off, remove the SD card from the leader and insert it into a computer. Add a file named `local_access_point` to the `/boot/` directory on the card. In this new file, add a two letter country code (ex: `CA`, `US`, `GB`, etc.). Remove the SD card safely, and insert back into the Pioreactor.

## Access the local access point

After plugging in the Pioreactor, the local access point will start and you should see a new network called `pioreactor`, with password `raspberry`. You should be able to connect to this new access point with any computer, phone, tablet, etc.

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

Simply delete the `local_access_point` file in the `/boot/` directory.


 ## Changing SSID name or password for your local access point

In the `config.ini`, the SSID and password are editable under the section `local_access_point`. This requires a power-cycle to take effect.
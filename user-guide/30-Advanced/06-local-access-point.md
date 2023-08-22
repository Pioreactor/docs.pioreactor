---
title: Local access points
slug: /local-access-point
---

import ButtonDownloadLocalAccessPointFile from '@site/src/components/ButtonDownloadLocalAccessPointFile';


:::info

This feature is currently experimental
:::

For some use cases, you may want to create a local WiFi network just for your Pioreactors (this is called a local access point). Why might you want to do this?

 - If you want to get started right away, without dealing with WiFi credentials.
 - If your usual WiFi network is restrictive (doesn't allow Raspberry Pis, or requires IT support to host them).
 - If you want to take the Pioreactor, or cluster of Pioreactors, out into the field where there is no network.

The Pioreactor comes with the ability to create its own local access point, which other Pioreactors can connect to. This new network is not connected to any other broader network (including the internet). See image below:

![Using the leader Pioreactor to create a local access point](/img/user-guide/local_access_point.png)

## Starting a local access point



The leader Pioreactor has the necessary software to create the local access point. To start the access point:

 - If starting with a new Pioreactor, during software set up:
    1. Leave the "Configure wireless LAN" unchecked. Continue with the instructions at [Setting up your Raspberry Pi](/user-guide/software-set-up#setting-up-your-raspberry-pi).
    2. After the SD card has been written to, remove the SD card from your computer, and immediately insert it back in. A `boot` (or `bootfs`) device should be present now that is your SD card. If asked to reformat the SD card, select NO.
    3. <ButtonDownloadLocalAccessPointFile/>
    3. Drag/move the downloaded `local_access_point` file to the SD card directory.
    4. Eject the SD card safely, and continue with instructions at [Setting up your Raspberry Pi](/user-guide/software-set-up#setting-up-your-raspberry-pi).
 - If starting from an existing Pioreactor leader:
    1. with the power off remove the SD card from the leader and insert it into a computer.
    2. <ButtonDownloadLocalAccessPointFile/>
    3. Drag/move the downloaded `local_access_point` file to your SD card (called `boot` or `bootfs`).
    4. Eject the SD card safely, and put back into the Pioreactor.

## Access the local access point

After plugging in the Pioreactor, the local access point will start and you should see a new network called `pioreactor`, with password `raspberry`. You should be able to connect to this new access point with any computer, phone, tablet, etc.

<img src="/img/user-guide/pioreactor_ap.png" width="325" />

Once connected, the usual urls should work: http://pioreactor.local will bring up the Pioreactor interface (having trouble? Try `http://<your_leaders_hostname>.local`. Still not working? Try `http://10.3.141.1`)

### Connecting workers to your local access point

Worker Pioreactors will need to be reconfigured to connect to this new access point:

1. During worker set up in the Raspberry Pi Imager, using the credentials ssid: `pioreactor` and password `raspberry` in the wireless LAN section.
1. Or, by editing the `/etc/wpa_supplicant/wpa_supplicant.conf` with the correct credentials.

:::note
Since this network is not connected to the internet, you won't be able to upgrade any software on the Pioreactors.
:::

 ## Turning off a local access point

After SSH-ing into your Pioreactor, simply delete the `local_access_point` file in the `/boot/` directory.


 ## Changing SSID name or password for your local access point

In the `config.ini`, the SSID and password are editable under the section `local_access_point`. This requires a power-cycle to take effect.


## Hidden site: `raspap.pioreactor.local`

The software we use, RaspAP, exposes it's own website to view statistics and configuration for the local access point. You can view this website at [http://raspap.pioreactor.local](http://raspap.pioreactor.local). Username: `admin`, password: `secret`

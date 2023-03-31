---
title: User interface
slug: /troubleshooting-ui
---

#### I'm not able to access `http://pioreactor.local`


*   In your browser's address bar, add the `http://` infront of the url, like so: `http://pioreactor.local`.
*   The UI is hosted on **http**, not **http_s_**. Check if you are accessing `http` `://pioreactor.local`, and _not_ `https` `://pioreactor.local`.
*   Try accessing using the url `http://<the permanent name of your Pioreactor aka hostname>.local`
*   If you know your Raspberry Pi's IP, try `http://<IP address of your Raspberry Pi>`
*   When pressing the button on the HAT, does the blue LED show up? If not, installation may have failed. Try installing the image again, and double check the settings.
*   In your Raspberry Pi Imager settings, confirm that you clicked "Set username and password", and used the username `pioreactor`. If not, try [reinstalling the image](/user-guide/software-set-up#setting-up-your-raspberry-pi).
*   Are you on an older Windows machine? You may need to install a DNS [service](https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview#microsoft-windows-914263-8), but also see workarounds [here](https://github.com/OutsourcedGuru/octoprint-name-resolution-hacks).

Also, see question below.


#### When I click an action in the UI, I don't see any response. Or it just spins and does nothing.

 - Is there a green icon in the top-left of the Pioreactor card? If not, or it's grey, either the Pioreactor is powered off, or the `monitor` job is not running. Try power-cycling the Pioreactor.
 - It's possible that the current experiment has changed - try refreshing the page.
 - If you had trouble accessing the UI (see question above), in your config.ini, change the `leader_address` field to whatever worked above, an IP for example.
 - Possibly the web server is off. Try logging into your leader and typing `sudo systemctl status lighttpd.service`




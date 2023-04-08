---
title: User interface
slug: /troubleshooting-ui
---

#### I'm not able to access `http://pioreactor.local`


- In your browser's address bar, add the `http://` infront of the url, like so: `http://pioreactor.local`.
- The UI is hosted on **http**, not **http_s_**. Check if you are accessing `http` `://pioreactor.local`, and _not_ `https` `://pioreactor.local`.
- Try accessing using the url `http://<the permanent name of your Pioreactor aka hostname>.local`
- If you know your Raspberry Pi's IP, try `http://<IP address of your Raspberry Pi>`
- When pressing the button on the HAT, does the blue LED show up? If not, installation may have failed. Try installing the image again, and double check the settings.
- In your Raspberry Pi Imager settings, confirm that you clicked "Set username and password", and used the username `pioreactor`. If not, try [reinstalling the image](/user-guide/software-set-up#setting-up-your-raspberry-pi).
 - Are you on an older Windows machine? You may need to install a DNS [service](https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview#microsoft-windows-914263-8), but also see workarounds [here](https://github.com/OutsourcedGuru/octoprint-name-resolution-hacks).


#### I see "Failed to connect to MQTT. Is configuration for leader_address correct? Currently set to ..." in a pop-up - what can I do?

This error occurs because your UI can't connect to an internal system, MQTT, that is used for displaying data and actions. Likely you also weren't able to access the UI with `http://pioreactor.local`, but had to use an IP address as the url.

To fix this:

1. Navigate to the `Configuration` page in the side bar.
2. Find the `[cluster.topology]` section, and change the `leader_address` configuration to your Pioreactor's IP. Ex:

```
[cluster.topology]
leader_hostname=leader
leader_address=192.168.0.10
```

Your IP may be different than the one above.

3. Hit `Save`.
4. [Power-cycle the Pioreactor](/user-guide/common-questions#how-can-i-restart-my-pioreactor-is-pulling-the-power-plug-out-safe).


#### When I click an action in the UI, I don't see any response. Or the button just spins and does nothing.

 - Is there a green icon in the top-left of the Pioreactor card? If not, or it's grey, either the Pioreactor is powered off, or the `monitor` job is not running. Try power-cycling the Pioreactor.
 - It's possible that the current experiment has changed - try refreshing the page.
 - If you had trouble accessing the UI (see question above), in your config.ini, change the `leader_address` field to whatever worked above, an IP for example.
 - Possibly the web server is off. Try logging into your leader and typing `sudo systemctl status lighttpd.service`
 - Do you also see a "Failed to connect to MQTT. Is configuration for leader_address correct?" error pop-up? If so, see question above.




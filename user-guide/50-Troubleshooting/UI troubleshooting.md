---
title: User interface
slug: /troubleshooting-ui
---

### I'm not able to access `http://pioreactor.local`


- In your browser's address bar, add the `http://` infront of the url, like so: `http://pioreactor.local`.
- The UI is hosted on **http**, not **http_s_**. Check if you are accessing `http` `://pioreactor.local`, and _not_ `https` `://pioreactor.local`.
- Try accessing using the url `http://<the permanent name of your Pioreactor aka hostname>.local`
- If you know your Raspberry Pi's IP, try `http://<IP address of your Raspberry Pi>`. Here's [information to determine the IP address](/user-guide/common-questions#how-can-i-determine-the-pioreactors-ip-address)
- Errors during installation:
    - When pressing the button on the HAT, does the blue LED show up? If not, installation may have failed. See notes [here](/user-guide/software-set-up#my-pioreactor-never-flashes-the-blue-led).
    - In your Raspberry Pi Imager settings, confirm that you clicked "Set username and password", and used the username `pioreactor`. If not, try [reinstalling the image](/user-guide/software-set-up#setting-up-your-raspberry-pi).
 - Are you on an older Windows machine? You may need to install a DNS [service](https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview#microsoft-windows-914263-8), but also see workarounds [here](https://github.com/OutsourcedGuru/octoprint-name-resolution-hacks).
 - Try SSHing in and restarting the webserver: `sudo systemctl restart lighttpd.service && sudo systemctl status lighttpd.service`.


### No information is shown on the Inventory page / no green dot / no response when I click some buttons.

See [question below](#i-see-failed-to-connect-to-mqtt--in-a-pop-up---what-can-i-do).

### I see "Failed to connect to MQTT. ..." in a pop-up - what can I do?

This error likely occurs because your browser can't connect to an internal system, MQTT, that is used for displaying data and actions. Possibly you also weren't able to access the UI with `http://pioreactor.local`, but had to use an IP address as the url.

To fix this:

1. Navigate to the Configuration page in the side bar.
2. Find the `[mqtt]` section, and change the `broker_address` configuration to your Pioreactor's IP. Ex:

```
[mqtt]
broker_address=192.168.0.10
```

Your IP may be different than the one above.

3. Hit `Save`.
4. Power-cycle the Pioreactor by rebooting it from the Inventory page.

:::note

Another reason might be that your institution's firewall is blocking port 9001. Ask your IT department about this. The web UI requires port 80 and port 9001 open to use.

:::

#### If you are using a remote access service, like tailscale

Likely you didn't fill out the `mqtt` `broker_address` parameter in the configuration correctly. See the [remote access instructions](https://docs.pioreactor.com/user-guide/remote-access) again.


### When I click an action in the UI, I don't see any response. Or the button just spins and does nothing.

Any of the following could solve your problem:

 - Is there a green icon in the top-left of the Pioreactor card? If not, or it's grey, either the Pioreactor is powered off, or the `monitor` job is not running. If so, [try power-cycling the Pioreactor](/user-guide/common-questions#how-can-i-restart-my-pioreactor-is-pulling-the-power-plug-out-safe).

![Left image is green, right image is grey](/img/user-guide/monitor_on_off.png)


 - It's possible that the experiment has changed while the page has been left open - try refreshing the page and try again.
 - If you had trouble accessing the UI ([see question above](/user-guide/troubleshooting-ui#i-see-failed-to-connect-to-mqtt-is-configuration-for-leader_address-correct-currently-set-to--in-a-pop-up---what-can-i-do)), in your config.ini, change the `leader_address` field to whatever worked above, an IP for example.
 - Possibly the web server is off. Try logging into your leader and typing `sudo systemctl status lighttpd.service`
 - Do you also see a "Failed to connect to MQTT. Is configuration for leader_address correct?" error pop-up? If so, [see question above](/user-guide/troubleshooting-ui#i-see-failed-to-connect-to-mqtt-is-configuration-for-leader_address-correct-currently-set-to--in-a-pop-up---what-can-i-do0).
 - Try power-cycling the Pioreactor.



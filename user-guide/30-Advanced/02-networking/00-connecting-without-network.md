---
title: Connecting to the Pioreactor without any networks
slug: /zeroconf-networking
---


info
:::

This is still a bit experimental and may not work on all systems

:::



### Connecting to your single Pioreactor on a Mac

This might work on Windows, too.

1. You'll need an ethernet cord to connect from your RPi to your Mac. Most Macs don't have an ethernet port, but you can purchase simple USB-C to Ethernet dongles. 
2. Flash the image using RPi imager, but uncheck the box "Configure Wireless LAN".
3. With your RPi powered down, connect to your Mac via the ethernet port. Insert the SD card, and power up.
4. After a while, the blue light should come on, and then probably some more flashing. This is attempting a connection, but will fail the first few times. After a minute or so, the flashing should stop.
5. Open up your terminal, and try the following:
    
   ```
   ssh pioreactor@your leaders name.local
   ``` 
   
   example:
    
   ```
   ssh pioreactor@leader01.local
   ```
    
   Enter "Yes", then the password "raspberry", and you should be on the Pi's command line. Try:
    
   
   ```
   hostname -I
   ```
    
   This should provide an IP address. Try that in your browser's URL bar. Example: http://169.254.189.106. Then try: http://your leaders name.local.
    
 
6. You can disconnect your Mac from the Pi's ethernet whenever and things will keep running on it, but note, when you reconnect, it may take a minute again to establish a connection. You should be able then view the UI and also SSH in.


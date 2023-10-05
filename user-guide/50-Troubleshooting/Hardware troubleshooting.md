---
title: Hardware troubleshooting
slug: /troubleshooting-Hardware
---


### I often see a "Pioreactor HAT must be present" error, but the HAT is definitely attached. 

Try the following: 

 - [SSH](/user-guide/accessing-raspberry-pi) into the Pioreactor that's causing problems. Run `pio version -v`. Does the `firmware` section say `0.0`? If so, run `sudo systemctl restart load_rp2040.service`. This should fix the problem.

### I see "Heating PCB must be attached to Pioreactor HAT" or Heating PCB must be present to measure RPM." errors. 

Check the connection between the 3" flat-flex-cable and the HAT, and the connection on the heater PCB. It's possible that the connector can be pulled out, by accident. 
---
title: Hardware (PCBs)
slug: /troubleshooting-Hardware
---


### I often see a "Pioreactor HAT must be present" error, but the HAT is definitely attached. 

Try the following, in order:

 - [SSH](/user-guide/accessing-raspberry-pi) into the Pioreactor that's causing problems. Run `pio version -v`. Does the `firmware` section say `0.0`? If so, run `sudo systemctl restart load_rp2040.service`. Try `pio version -v` again. Move on if `firmware` still says `0.0`.
 - Disconnect the heater PCB's flat-flex cable from the HAT (unlock, and pull straight out). Try `pio version -v` again. If this shows something other than `0.0` beside firmware, there could be a problem with your heater PCB. Email us at help@pioreactor.com.

### I see "Heating PCB must be attached to Pioreactor HAT" or Heating PCB must be present to measure RPM." errors. 

Check the connection between the 3" flat-flex-cable and the HAT, and the connection on the heater PCB. It's possible that the connector could have been pulled out by accident.

### I'm having trouble with Pioreactor's stirring.

See our [stirring troubleshooting docs](/user-guide/troubleshooting-stirring).




---
title: Blue LED flashing & error codes
slug: /error-codes
hide_table_of_contents: true
---

When a Pioreactor successfully boots, the onboard blue LED will flash quickly for 2 seconds, and then stop. However, there are times when the Pioreactor encounters an error, and will use the LED to alert to you that something is wrong. By counting the number of _short_ flashes (per cycle), you can diagnose what might be wrong.

| Number of flashes | Error                      |
|-------------------|----------------------------|
| 1                 | Can't connect to network   |
| 2                 | Can't connect to leader    |
| 3                 | SD card is almost full     |
| 4                 | Stirring RPM is 0          |
| 5                 | ADC input is very high     |
| 6                 | Heating PCB is above 60 ℃  |
| 7                 | Voltage problem            |
| 8                 | Webserver offline          |



-----

### The blue LED is constantly on?

If your blue LED is constantly on, it suggests either an hardware error, or that your Pioreactor is missing it's config.ini. Try a reboot, and if it persists, SSH in and check for the file `~/.pioreactor/config.ini`. If that file is missing, it's either a worker that hasn't been connected to a cluster, or some part of the installation has gone wrong.
---
slug: /error-codes
---
# Blue LED flashing & error codes

When a Pioreactor successfully boots, the onboard blue LED will flash quickly for 2 seconds, and then stop. However, there are times when the Pioreactor encounters an error, and will use the LED to alert to you that something is wrong. By counting the number of _short_ flashes (per cycle), you can diagnose what might be wrong.

| Number of flashes | Error                      |
|-------------------|----------------------------|
| 1                 | Can't connect to network (wifi)    |
| 2                 | Can't connect to leader    |
| 3                 | SD card is almost full     |
| 4                 | Stirring RPM is 0          |
| 5                 | ADC input is very high     |
| 6                 | Heating PCB is above 60 ℃  |



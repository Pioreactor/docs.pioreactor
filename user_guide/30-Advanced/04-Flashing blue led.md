# Blue LED flashing & error codes

When a Pioreactor successfully boots, the onboard blue LED will flash for 2 seconds, and then stop. However, there are times when the Pioreactor encounters an error, and will use the LED to alert to you that something is wrong. These flashes will continue until the problem is resolved. By counting the number of flashes (per cycle), you can diagnose what might be wrong.

| Number of flashes | Error                      |
|-------------------|----------------------------|
| 2                 | Can't connect to leader    |
| 3                 | SD card is almost full     |
| 4                 | Stirring failed (RPM is 0) |



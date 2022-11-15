---
title: Supplying external power to the Pioreactor's PWM channels
slug: /external-power
---

Some applications require more power to your Pioreactor if it is heavily using lots of peripherals. This may include using more powerful pumps, more powerful external LEDs, etc. Or, if you see warning messages that reference under voltage or throttling, you probably are asking the Pioreactor to do too much given its default power supply.

You can supply a higher voltage / amp power using the barrel jack connection. The barrel jack connection allows for (positive polarity) power supply units of up to 18V to the PWM channels 1 through 4 (PWM channel 5, used for onboard heating, is not effected, and always tied to the 5V rail).

Finally, to enable the PWM channels to use the new power supply, **you need to move the shunt connector to the position closest to the LED outputs**.

:::note
When changing the default power supply, any stirring calibration and pump calibrations will need to be updated. Also, the `initial_duty_cycle` under `stirring` in the configuration may need to change.
:::

:::caution
Be mindful that the default stirring motor provided with the Pioreactor has a maximum voltage of 12V.
:::


### Power supply for Pioreactor peristaltic pumps.

When using multiple of Pioreactor's [peristaltic pumps](https://pioreactor.com/products/peristaltic-pump), we recommend a 12V power supply, with at least 1 amp (this is the same as a 12W power supply). Our pumps use maximum 0.4A, and the stirring motor uses 0.1A.

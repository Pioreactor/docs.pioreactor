---
slug: /external-power
---

# Supplying external power to the Pioreactor's PWM channels

Some applications require more power to your Pioreactor if it is heavily using lots of peripherals. This may include using a more powerful pumps, more powerful external LEDs, etc. Or, if you see warning messages that reference under voltage or throttling, you probably are asking the Pioreactor to do too much given its default power supply.

You can supply a higher voltage / amp power using the barrel jack connection. The barrel jack connection allows for power supply units of up to 18V to the PWM channels 1 through 4 (PWM channel 5, used for onboard heating, is not effected, and always tied to the 5V rail).

Finally, to enable the PWM channels to use the new power supply, **you need to move the shunt connector to the position closest to the LED outputs**.

:::note
When changing the default power supply, any stirring calibration and pump calibrations will need to be updated.
:::

:::caution
Be mindful that the default stirring motor provided with the Pioreactor is has a maximum voltage of 12V.
:::




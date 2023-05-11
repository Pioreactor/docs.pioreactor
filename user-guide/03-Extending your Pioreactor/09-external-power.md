---
title: Supplying auxiliary power to the Pioreactor's PWM channels
slug: /external-power
---

Some applications require more power to your Pioreactor if it is using lots of peripherals. This may include using more powerful pumps, more powerful external LEDs, etc. Or, if you see warning messages that reference under voltage or throttling, you probably are asking the Pioreactor to do too much given its default 5V power supply.

You can supply a higher voltage / amp power to the peripherals using the barrel jack connection. The barrel jack connection allows for power supply units of up to 18V to the PWM channels 1 through 4 (PWM channel 5, used for onboard heating, is not effected, and always tied to the 5V rail). **Please make sure your barrel jack connector is positive center. See notes below.**.

Finally, to enable the PWM channels to use the new auxiliary power supply, **you need to move the shunt connector to the position closest to the LED outputs**. (If the shunt connector is not present, the PWM rail is powered by the RPi's power supply, minus a diode drop. It's recommend to replace the shunt, however.)


![left image shows the shunt connector in the ON position, right image shows shunt connector in the OFF position](/img/user-guide/aux_position.png)


:::note
When changing the default power supply, any stirring calibration and pump calibrations will need to be updated. Also, the `initial_duty_cycle` under `stirring` in the configuration may need to change.
:::

:::caution
Be mindful that the default stirring motor provided with the Pioreactor has a maximum voltage rating of 12V.
:::


### Power supply for using Pioreactor peristaltic pumps

When using multiple of Pioreactor's [peristaltic pumps](https://pioreactor.com/products/peristaltic-pump), we recommend a 12V power supply, with at least 1 amp (this is the same as a 12W power supply). Our pumps use maximum 0.4A, and the stirring motor uses 0.1A.


### More details on power supply

 - **positive center**
 - barrel size: 2.1mm I.D. x 5.5mm O.D.
 - Maximum voltage: 18V


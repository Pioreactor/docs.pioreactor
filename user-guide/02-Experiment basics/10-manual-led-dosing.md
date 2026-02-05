---
title: Dosing and LED updates
slug: /manual-dosing-leds
hide_table_of_contents: true
---



### Dosing

You can run the pumps from the Pioreactor UI. These are not automations, but simple actions used to set up an experiment, perform cleaning, or intervene mid-run. For automated workflows, see [dosing automations](/user-guide/dosing-automations).

#### Cycling

Under the **Dosing** tab, you run the media pump or the alt-media pump _and concurrently the waste pump_. This is called _cycling_. Running the waste pump simultaneously helps avoid overflow. You can cycle for a set duration of time.

![UI showing how to cycle media.](/img/user-guide/02-experiment-basics/10-manual-led-dosing/cycle_media.png)

Cycling is good for cleaning pumps, priming tubes with media, or filling your vial with media.

#### Specific control of pumps

Under the **Dosing** tab, you can also run specific pumps (media, waste, and alt-media) for a set duration, volume (if calibrated), or continuously. The latter will run until the *Stop* button is pressed. Read more about [using pumps](/user-guide/using-pumps).

:::caution
Careful not to overflow your vial! The Pioreactor doesn't know how much liquid is currently in the vial. Stay well below the max volume of the vial for safety.
:::

![UI showing how to add media.](/img/user-guide/02-experiment-basics/10-manual-led-dosing/add_media.png)

#### Adjustments from manual changes

Sometimes you may want to add or remove liquid from the vial manually. These changes can be recorded by using the **Manual adjustments** form under the **Dosing** tab. This does not run the pumps, but logs the adjustments. This keeps metrics accurate.

----


### LEDs

Under the **LED** tab, you can update specific intensities of the LEDs. For automated light schedules, see [LED automations](/user-guide/led-automations).

![UI showing how to change LEDs.](/img/user-guide/02-experiment-basics/10-manual-led-dosing/change_leds.png)

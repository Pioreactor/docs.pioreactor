---
title: Dosing and LED updates
slug: /manual-dosing-leds
hide_table_of_contents: true
---



### Dosing

You can run the pumps from the Pioreactor UI. These are NOT automations, but rather simple actions to use to set up an experiment, perform cleaning, or intervene in an experiment.

#### Cycling

Under the _Dosing_ tab, you run the media pump or the alt-media pump _and concurrently the waste pump_. This is called _cycling_. By running the waste pump simultaneously, the vial will avoid overflow. You can cycle for a set duration of time.

![UI showing how to cycle media.](/img/user-guide/cycle_media.png)

Cycling is good for cleaning pumps, priming tubes with media, or filling your vial with media.

#### Specific control of pumps

Under the _Dosing_ tab, you can also run specific pumps (media, waste, and alt-media) for a specific duration, volumes (if calibrated), or continuously. The latter will run until the *Stop* button is pressed.

:::caution
Careful not to overflow your vial! The Pioreactor doesn't know how much liquid is currently in the vial. Stay well below the max volume of the vial for safety.
:::

![UI showing how to add media.](/img/user-guide/add_media.png)

#### Adjustments from manual changes

Sometimes you may want to add or remove liquid from the vial manually. These changes can be recorded by using the _Manual adjustments_ form under the _Dosing_ tab. These do not run the pumps, but will log the adjustments. This is useful for recording adjustments into the database, and keeping metrics accurate.

----


### LEDs

Under the _LED_ tab, you can update specific intensities of the LEDs.

![UI showing how to change LEDs.](/img/user-guide/change_leds.png)
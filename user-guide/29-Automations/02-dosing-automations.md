---
title: Dosing automations
slug: /dosing-automations
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---


When pairing the Pioreactor with dosing pumps, there are new capabilities and experiments you can run. The Pioreactor is pre-programmed with the following dosing automations. In the below automations, values highlighted `like so` are configurable.

Before starting a dosing automation from the UI, review the `Current volume` and `Max working volume` fields in the automation dialog. `Current volume` should match the liquid currently in the vial, and `Max working volume` should match the volume set by the height of your waste / efflux tube.

## Available dosing automations


### Silent

**Requires:** None

The silent automation is the simplest automation: doing nothing. The automation will still "wake up" every `duration` minutes, but does nothing.

### Chemostat

**Requires:**

* 2 peristaltic pumps:

    * one media pump
    * one waste pump

* 2 liquid containers with luer attachments

    * one labelled "waste"
    * one labelled "media"

The chemostat automation is the second simplest dosing automation. Every `duration` minutes, the media and waste pumps run and exchange `volume` (mL) of liquid inside the Pioreactor. Initially, the culture is growing and consuming nutrients and energy. Eventually, a nutrient will become scarce and will stall growing. Upon a pump refresh, this _growth-limiting_ nutrient becomes abundant once again, and the culture can grow, up until consuming all of it again and stalling growth. Thus, the bioreactor enters into a nutrient _near_\-equilibrium (hence the term "chemostat", for "chemical-static"). However, more long-term, because the culture is under an evolutionary pressure to grow, adaptions will occur that will improve the acquisition or utilization of the growth-limiting nutrient.

### Turbidostat

**Requires:**

* 2 peristaltic pumps:

    * one media pump
    * one waste pump

* 2 liquid containers with luer attachments

    * one labelled "waste"
    * one labelled "media"


A turbidostat ("turbidity-static") tries to keep the biomass constant over time. This is usually accomplished by taking frequent measurements (every 15 seconds), and performing a set media / waste pump cycle if the selected `biomass signal` exceeds the `target biomass`. The amount exchanged each time is the `exchange volume` parameter (mL). For very fast growing cultures, we recommend an `exchange volume` between 1.0 mL and 2.0 mL.

This automation will always move the full `exchange volume`, even if it's not enough for the measured biomass to drop below the `target biomass`. If that happens, the automation will trigger again after the next check.

The current turbidostat fields in the UI are:

 - `exchange volume`: how much media and waste to move in each dilution cycle, in mL.
 - `target biomass`: the biomass threshold that triggers a dilution cycle.
 - `biomass signal`: which biomass estimate to monitor. The UI defaults this to `auto`.

When `biomass signal` is set to:

 - `normalized_od`: the automation compares against normalized OD.
 - `od_fused`: the automation compares against the fused OD estimator.
 - `od`: the automation compares against calibrated OD from the resolved OD channel.
 - `auto`: the automation chooses the most specific available signal automatically.

When `biomass signal` is `auto`, the selection order is:

1. `od_fused`, when an active `od_fused` estimator is available.
2. `od`, when an active OD calibration is available for the resolved photodiode angle.
3. `normalized_od`, when neither of the above is available.

What "active" means:

 - An active `od_fused` estimator is the estimator currently marked active in **Estimators** for the `od_fused` device.
 - An active `od` calibration is the calibration currently marked active for the OD device that matches the photodiode angle Turbidostat resolves for your setup, such as `od90` or `od135`.
 - If you have multiple non-reference OD signal channels configured, Turbidostat resolves `od` using the lowest-numbered signal channel and logs a warning. In that case, `od_fused` or `normalized_od` is usually a better choice.

If the selected biomass signal is not publishing fresh data, Turbidostat cannot make a dosing decision. In practice this means:

 - `od_reading` must be running.
 - `od` and `od_fused` data must be fresh. Readings older than 5 minutes are treated as stale, and the automation will warn instead of continuing with a dilution based on old data.

### Overriding the biomass signal

Most users can leave the UI default at `auto`. Override it only when you want to force Turbidostat to use a specific biomass estimate.

To set a persistent default in `config.ini`, use the per-automation section:

```ini
[dosing_automation.turbidostat]
biomass_signal=od_fused
```

Legacy versions used:

```ini
[turbidostat.config]
biomass_signal_override=od_fused
```

Current releases use `biomass_signal` under `[dosing_automation.turbidostat]` instead. During software updates, legacy values are migrated when present, and systems without a prior setting are seeded with `biomass_signal=auto`.

You can also override this per run:

 - In the UI, the Turbidostat form starts with `biomass signal = auto`. You can change it before launching the automation.
 - In the advanced config UI, automation-specific overrides now use section names like `[dosing_automation.turbidostat]`.

### PID Morbidostat

**Requires:**

* 3 peristaltic pumps:

    * one media pump
    * one waste pump
    * one alt media pump

* 3 liquid containers with luer attachments

    * one labelled "waste"
    * one labelled "media"
    * one labelled "alt media"


By introducing another pump (labelled "alt media"), another dimension of experiments opens up. We can exploit the short-time scale of adaption in microbes to evolve the culture from thriving in the original media to thriving in the alternative media, or some point in between the two. Think of it as slowly shifting the environment between the two media stocks so that the microbes are under constant evolutionary pressure. This is where the name morbidostat is from: "morbid-static".

In the Pioreactor software, the transition between environments is controlled by observing the growth rate, and artificially keeping it suppressed (set to be `target growth rate`) by dynamically adjusting the ratio between the original media and the alternative media when a pump cycle is run. A pump cycle is run every `duration` minutes. Another parameter is the `target OD`, which should be low to keep the culture in a state of nutrient abundance (so that the _primary_ evolutionary pressure is the alternative media adaptation).

### Fed batch

**Requires:**

*   1 peristaltic pump
*   A source and sink, with the pump in-between.

This automation moves a preset amount of `volume` every `duration` minutes using a pump. You choose the start and end points of the tube!


## Useful information for all dosing automations


### How does the vial maintain a constant volume throughout operation?

When liquid is added, say 1ml, the volume rises an additional 1ml. Then 1ml of liquid is removed via efflux, but **then the efflux pump runs again for an additional few seconds**. The efflux pump is run for an additional few seconds to eliminate any volume deltas (for example, if the volume added is greater than the volume removed due to pumping errors). Otherwise, the deltas accumulate and the vial can overflow. This additional step helps guarantee that that volume of liquid never exceeds the end of the efflux tube. See `waste_removal_multiplier` parameter below.

### Why does my influx pump only partially add the amount of liquid required? What are subdoses?

To further avoid overflow, we limit how much liquid is added in a single pump cycle. If the amount of liquid to be added is greater than the `max_dose_volume`, then the liquid is divided into smaller doses (halved until those new doses are less than `max_subdose` parameter), with the waste-pump run in between to avoid overflow. These small doses are called _subdoses_. You can change the maximum subdose value with the parameter `max_subdose`, see below.

###  Volume parameters


 - **Current volume**: this is how much liquid is currently in the vial when you start the automation.
 - **Max working volume**: the efflux tube's position determines the maximum volume your liquid volume will reach.


###  Configuration parameters

You can edit these parameters in your config.ini files. For dosing runs started from the UI, `Current volume` and `Max working volume` can also be adjusted directly in the automation dialog before starting.


#### Section `[dosing_automation.config]`

 - `pause_between_subdoses_seconds`: time to wait between doses - this is useful if you want to be sure the newly added liquid is sufficiently mixed before running the waste pump.
 - `waste_removal_multiplier`: the amount of additional time to run the waste pump after the influx pump has run. This is to ensure that the volume of liquid in the vial never exceeds the end of the efflux tube. Ex: if media ran for `0.75` seconds, then the waste will run for `waste_removal_multiplier * 0.75 seconds`
 - `max_subdose`: the maximum volume to add in a single dose. If the volume to add is greater than this value, the volume will be divided into smaller doses.


#### Section `[dosing_automation.turbidostat]`

 - `biomass_signal`: the default biomass signal used by Turbidostat when you don't pass an explicit per-run value. Valid values are `auto`, `normalized_od`, `od_fused`, and `od`.


#### Section `[bioreactor]`

 - `efflux_tube_volume_ml`: determined by the volume that just touches the outflow tube. I.e. if you were to keep running the waste pump, what would the stable volume be.
 - `initial_volume_ml`: the initial volume of liquid in the vial. In the UI this is surfaced as `Current volume`, and is used to calculate the volume of liquid in the vial at any given time.
 - `initial_alt_media_fraction`: the initial fraction of the alternative media in the vial. This is used to calculate the volume of alternative media in the vial at any given time.

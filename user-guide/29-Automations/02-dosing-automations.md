---
title: Dosing automations
slug: /dosing-automations
---

import TOCInline from '@theme/TOCInline';

When pairing the Pioreactor with dosing pumps, there are new capabilities and experiments you can run. The Pioreactor is pre-programmed with the following dosing automations. In the below automations, values highlighted `like so` are configurable.

<TOCInline toc={toc} />

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


A turbidostat ("turbidity-static") tries to keep the turbidity (the optical density, or OD), constant over time. This is usually accomplished by taking frequent measurements of the turbidity (every 30 seconds), and performing a set media/waste pump cycle if the optical density (or normalized optical density) exceeds a `target OD` (or `target nOD`). The amount exchanged is the `volume` parameter (mL). For very fast growing cultures, we recommend a `volume` between 1.0 ml and 2.0 ml.

This automation will always dose the `volume` parameter, even if it's not enough for the OD to drop below the `target OD`. If that happens, then `OD > target OD`, and so the automation will trigger after the next check (30 seconds).

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

### Why does my influx pump only partially add what's required? What are subdoses?

To further avoid overflow, we limit how much liquid is added in a single pump cycle. If the amount of liquid to be added is greater than the `max_dose_volume`, then the liquid is divided into smaller doses (halved until those new doses are less than `max_subdose` parameter), with the waste-pump run in between to avoid overflow. These small doses are called _subdoses_. You can change the maximum subdose value with the parameter `max_subdose`, see below.

### Useful configuration parameters

#### `dosing_auomation.config`

 - `pause_between_subdoses_seconds`: time to wait between doses - this is useful if you want to be sure the newly added liquid is sufficiently mixed before running the waste pump.
 - `waste_removal_multiplier`: the amount of additional time to run the waste pump after the influx pump has run. This is to ensure that the volume of liquid in the vial never exceeds the end of the efflux tube. Ex: if media ran for `0.75` seconds, then the waste will run for `waste_removal_multiplier * 0.75 seconds`
 - `max_volume_to_stop`: if the internally tracked volume (the `liquid_volume` setting) exceeds this value, the automation will stop. This is a safety feature to prevent overflow.
 - `max_subdose`: the maximum volume to add in a single dose. If the volume to add is greater than this value, the volume will be divided into smaller doses.


#### `bioreactor`

 - `max_volume_ml`: determined by the volume that just touches the outflow tube. I.e. if you where to keep running the waste pump, what would the stable volume be.
 - `initial_volume_ml`: the initial volume of liquid in the vial. This is used to calculate the volume of liquid in the vial at any given time.
 - `initial_alt_media_fraction`: the initial fraction of the alternative media in the vial. This is used to calculate the volume of alternative media in the vial at any given time.
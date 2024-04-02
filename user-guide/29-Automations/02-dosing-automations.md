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


:::info

How does the vial maintain a constant volume throughout operation? When liquid is added, say 1ml, the volume rises an additional 1ml. Then 1ml of liquid is removed via efflux, but **then the efflux pump runs again for an additional few seconds**. The efflux pump is run for an additional few seconds to eliminate any volume deltas (for example, if the volume added is greater than the volume removed due to pumping errors). Otherwise, the deltas accumulate and the vial can overflow. This additional step helps guarantee
 that that volume of liquid never exceeds the end of the efflux tube.

:::
import TOCInline from '@theme/TOCInline';

# Dosing Automations

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

### PID Turbidostat

**Requires:**

* 2 peristaltic pumps:

    * one media pump
    * one waste pump

* 2 liquid containers with luer attachments

    * one labelled "waste"
    * one labelled "media"


First, what is a turbidostat? A turbidostat ("turbidity-static") tries to keep the turbidity (also called optical density, or OD), constant over time. This is usually accomplished by taking frequent measurements of the turbidity, and performing a set media/waste pump cycle when the optical density exceeds some `target OD`. The Pioreactor improves upon this simple procedure by introducing a dynamic controller that will control _how much_ volume to exchange upon each cycle. This means that there needs to be no manual tuning after starting the automation. (Traditional turbidostats need to be tuned to adapt to the growth of the culture: either the volume exchanged or the frequency of exchanges). A `max volume` parameter needs to be set, and the PID Turbidostat automation will choose some value between 0 and `max volume`, and run a cycle every `duration` minutes.

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


By introducing another pump (labelled "alt media"), another dimension of experiments opens up. We can exploit the short-time scale of adaption in microbes to evolve the culture from thriving in the original media to thriving in the alternative media, or some point inbetween the two. Think of it as slowly shifting the environment between the two media stocks so that the microbes are under constant evolutionary pressure. This is where the name morbidostat is from: "morbid-static". There are many use cases of this, outlined in our documentation on [directed evolution](https://github.com/Pioreactor/pioreactor/wiki/Use-cases:-directed-evolution).

In the Pioreactor software, the transition between environments is controlled by observing the growth rate, and artificially keeping it suppressed (set to be `target growth rate`) by dynamically adjusting the ratio between the original media and the alternative media when a pump cycle is run. A pump cycle is run every `duration` minutes. Another parameter is the `target OD`, which should be low to keep the culture in a state of nutrient abundance (so that the _primary_ evolutionary pressure is the alternative media adaptation).

### Continuous Cycle

**Requires:**

*   1 pump (not peristaltic: it will break, something like centrifugal pump is preferred)
*   The Pioreactor inline sensor insert
*   Another vessel, like a bioreactor or fermenter

This automation is different than the others as there is no reservoirs of fresh media, or a waste container. Instead, a pump cycles between the larger vessel (ex: a larger bioreactor, or fermenter) and the Pioreactor. In this configuration, the Pioreactor is more like an _inline sensor_ than a bioreactor.

![](https://cdn.shopify.com/s/files/1/0515/1824/3002/files/inline_sensor_general.png?v=1620833718)


### Fed batch

**Requires:**

*   1 peristaltic pump
*   A source and sink, with the pump in-between.

This automation moves a preset amount of `volume` every `duration` minutes using a pump. You choose the start and end points of the tube!
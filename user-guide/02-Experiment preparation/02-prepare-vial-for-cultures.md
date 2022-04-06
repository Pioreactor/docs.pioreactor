---
slug: /prepare-vial-for-cultures
---

# Preparing your vial for cultures

### Media volume

We suggest using between **10ml to 15ml** volume of liquid in the vial.

:::tip
Some things to consider when selecting a volume: lower volume will provide more aeration per ml (since the liquid-air interface is fixed). A lower volume will also be more responsive to changes in temperature. Too low and a vortex may start interfering with the Pioreactor's optical system.
:::

### Sterilization


#### Using heat

The 20ml vial, stirbar and vial cap that come with your Pioreactor are all fully autoclavable, and heat resistant up to 125℃. The luer lock ends can be covered with tin foil, or attached to air filters.

:::tip
Don't have an autoclave? A kitchen pressure cooker works just as well. Still don't have that? You can use a stove top or hotplate: heat on a medium-low heat until boiling, and let boil for a few minutes. An autoclave and pressure cooker is a much more effective sterilizer though.
:::


#### Using sterile filtration

Filtered media can be directly added to a sterilized glass vial, or via the male luer lock ports.



### Inoculation

Ideally in a sterile environment, the vial's lid can be removed and the inoculant can be added. Alternatively, for additional sterility, a needle can be sent down a tube, without removing the cap at all.


### Using pumps: influx and efflux.

When using the Pioreactor with pumps, you'll be using the four luer lock tubes as influx and efflux. The tubes, which are identical lengths, can be moved up and down, and we suggest using this as a way to "label" tubes, and to control the maximum volume in the vial. Here's how (do this post-cleaning, before any sterilization):

One tube can be pulled high up, so that about a millimeter is showing on the underside of the cap. This will be our air influx and efflux (recall that when liquid is added or removed, air is needs to be removed or added respectively to not create a pressure difference).

Two tubes can be pulled such they are aligned with the bottom rim of the cap. These two tubes will be the influx tubes (for some operations, like a chemostat, you'll only be using one of these tubes, but some operations require more than one influx).

The final tube is the efflux tube. It will be positioned such that it controls the final amount of volume in the vial. Fill your vial to the desired final volume using water. Pull the final tube down such that its end just touches the top of the water when the cap is fully screwed on. It may take some minor adjustments to achieve this.

:::info
How does this maintain a constant volume throughout operation? When liquid is added, say 1ml, the volume rises an additional 1ml. Then 1ml of liquid is removed via efflux, but then the efflux runs for an additional few seconds (this is hard coded into the software).

This guarantees that that volume of liquid never exceeds the end of the efflux tube. (We run the efflux pump for an additional few seconds to eliminate any delta if the volume added is greater than the volume removed due to pumping errors, otherwise the deltas accumulate and the vial can overflow.)
:::

During your experiment set up, the length of the tubes out of the cap provide information about their "roles": longest tube is air exchange, shortest tube is efflux, and middle two tubes are influx.




---
title: Preparing your vial for cultures
slug: /prepare-vial-for-cultures
---

### 1. Preparing the vial

#### Choosing a volume for your culture

We suggest using between **10ml to 15ml** volume of liquid in the vial.

:::tip
Some things to consider when selecting a volume: a lower volume will provide more aeration per mL since the liquid-air interface is fixed. A lower volume will also be more responsive to changes in temperature. But too low and a vortex may start interfering with the Pioreactor's optical system.
:::

#### Position of tubes in cap

Keep _at least_ 1 cap tube out of the liquid and well away from potential bubbles / foam that may occur. This will prevent gas pressure from building up. Something also to keep in mind: more tubes out of the liquid means more gas transfer with the ambient atmosphere.

If using pumps with your Pioreactor, see the note [below](/user-guide/prepare-vial-for-cultures#using-pumps-influx-and-efflux).

### 2. Preparing media 

Prepare your media as your protocol suggests. For example: in the our experiments, we typically showcase yeast grown in YPD broth. To create YPD broth, dissolve 50 grams YPD powder per 1 litre distilled water. Divide the mixture into the vials.

### 3. Sterilization


#### Using heat

The glassware vial, stirbar and vial cap that come with your Pioreactor are all fully autoclavable, and heat resistant up to 125℃. The luer lock ends can be covered with tin foil, or attached to air filters, or neither. Since the volume in the vial is so little, the autoclave only needs to be at its maximum temperature for a very short duration.

:::tip
Don't have an autoclave? A kitchen pressure cooker works just as well. Still don't have that? You can use a stove top or hotplate: heat on a medium-low heat until boiling, and let boil for a few minutes. An autoclave and pressure cooker is a much more effective sterilizer though.
:::


#### Using sterile filtration

Filtered media can be directly added to a sterilized glass vial, or via the (sterilized) male luer lock ports.


### 4. Inoculation

Ideally in a sterile environment, the vial's lid can be removed and the inoculant can be added. Alternatively, for additional sterility, a needle can be sent down a tube, without removing the cap at all.

How much inoculant should you add? That depends on how concentrated your inoculant is. From our experience, we create a dense culture/slurry, add a few drops to sterile media or water, and then inoculate our vials from this stock. If you are using a dropper, hold it vertically for more accurate, consistent drops. 


### 5. Cleaning glassware

Since light will be traveling through the glass, we recommend handling the vial with gloves, or at least minimizing touching the glass much. Before placing in the Pioreactor sleeve, wiping the surface of the glass with a wipe or ethanol is a great idea!

### 6. Adjusting tube length

Keep the bottoms of the tubes in the cap from being submerged in your media to avoid creating a pressured, anaerobic environment. Carbon dioxide bubbles can form due to excess CO₂ production, and this will impede the OD readings. Pull the luer lock ends until the ends of the tubes are above liquid level.

### 7. Positioning glassware in the Pioreactor sleeve

Place the glassware vial into the Pioreactor sleeve. The outside of the glassware vial must be dry. Ensure that the vial is pressed all the way down into the sleeve. The rotation of the vial doesn't matter.


Next, you can [start your experiment](http://localhost:3001/user-guide/set-up-an-experiment) in the browser.


### Extra
#### Using pumps: influx and efflux.

When using the Pioreactor with pumps, you'll be using the four luer lock tubes as influx and efflux. The tubes, which are identical lengths, can be moved up and down, and we suggest using this as a way to "label" tubes, and to control the maximum volume in the vial. This can be done before sterilization. Here's how:

One tube can be pulled high up, so that about a millimeter is showing on the underside of the cap. This will be our air influx and efflux (recall that when liquid is added or removed, air is needs to be removed or added respectively to not create a pressure difference).

Two tubes can be pulled such they are aligned with the bottom rim of the cap. These two tubes will be the liquid influx tubes. For some operations, like a chemostat, you'll only be using one of these tubes, but some operations require more than one influx.

The final tube is the liquid efflux tube. It will be positioned such that it controls the final amount of volume in the vial. Fill your vial to the desired final volume using water. Pull the final tube down such that its end just touches the top of the water when the cap is fully screwed on. It may take some minor adjustments to achieve this.

:::info
How does this maintain a constant volume throughout operation? When liquid is added, say 1ml, the volume rises an additional 1ml. Then 1ml of liquid is removed via efflux, but then the efflux runs for an additional few seconds. This is hard coded into the software.

This guarantees that that volume of liquid never exceeds the end of the efflux tube. The efflux pump is run for an additional few seconds to eliminate any volume differences or deltas (for example, if the volume added is greater than the volume removed due to pumping errors). Otherwise, the deltas accumulate and the vial can overflow.
:::

During your experiment set up, the length of the tubes out of the cap can provide information about their "roles": longest tube is air exchange, shortest tube is efflux, and middle two tubes are influx.




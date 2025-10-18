---
title: Preparing your vial for cultures
slug: /prepare-vial-for-cultures
hide_table_of_contents: true
---

### 1. Preparing the vial

#### Cleaning the vial

It's recommend to clean your vial and vial cap before every use. The vial and cap can be cleaned with water and detergent. Rinse vial and cap to remove any soap residue.

:::tip
Two useful accessories for cleaning:

1. small bottle brush / test tube brush.
2. ~10ml syringe with luer lock attachment to pump soapy water in and out of the vial cap connectors.

:::

#### Choosing a volume for your culture

We suggest using between **8ml to 16ml** volume of liquid in the 20ml vials, and **10ml to 30ml** for 40ml vials.

:::tip
Some things to consider when selecting a volume: a lower volume will provide more aeration per mL since the liquid-air interface is fixed. A lower volume will also be more responsive to changes in temperature, and be able to achieve a higher maximum temperature. But too low and the vortex caused by stirring may start interfering with the Pioreactor's optical system (a lower RPM can fix this though).
:::

#### Position of tubes/needles in cap

Keep _at least_ 1 cap tube/needle out of the liquid and well away from potential bubbles / foam that may occur. This will prevent gas pressure from building up. Something also to keep in mind: more tubes/needles out of the liquid means more gas transfer with the ambient atmosphere.

If using pumps with your Pioreactor, see the note [below](/user-guide/prepare-vial-for-cultures#using-pumps-influx-and-efflux).

### 2. Preparing media 

Prepare your media as your protocol suggests. For example: in the our experiments, we typically showcase yeast grown in YPD broth. To create YPD broth, mix YPD and water at a ratio of 50 grams YPD powder to 1 liter distilled water.


### 3. Sterilization


#### Using heat

Divide the mixture into the vials to the correct volume, and add the stir bar in the vial.

The glassware vial, stir bar and vial cap that come with your Pioreactor are all fully autoclavable, and heat resistant up to 125℃. The luer lock ends can be covered with tin foil, or attached to air filters, or neither. Since the volume in the vial is so little, the autoclave only needs to be at its maximum temperature for a very short duration.

:::tip
Don't have an autoclave? A kitchen pressure cooker works just as well. Still don't have that? You can use a stove top or hotplate: heat on a medium-low heat until boiling, and let boil for a few minutes. However, an autoclave or a pressure cooker is a more effective sterilizer.
:::


#### Using sterile filtration

Filtered media can be directly added to a sterilized glass vial, or via the (sterilized) male luer lock ports.


### 4. Inoculation

Ideally in a sterile environment, the vial's lid can be removed and the inoculant can be added. Alternatively, for additional sterility, a needle can be sent down a tube/needle, without removing the cap at all.

How much inoculant should you add? That depends on the concentration of your inoculant. From our experience, we create a dense culture/stock culture by adding some amount of culture to sterile media or water, and then inoculate our vials from this stock. 

For example, we add 0.5 grams of dried Baker's yeast to 15 mL of YPD broth, then store it in a fridge for further use. 

We recommend measuring with a micropipette. If you are using a dropper, hold it vertically for more accurate, consistent drops.

### 5. Adjusting tube/needle lengths (Optional)

Keep the bottoms of the tubes/needles in the cap from being submerged in your media to avoid creating a pressured environment. Adjust each luer lock end until the other end of the tube/needle is above liquid level.

### 6. Handling the glass

We recommend handling the vial with gloves, or handling only the cap. Minimize touching the glass as much as possible to avoid getting oils and fingerprints on the glass. Before placing in the Pioreactor sleeve, wiping the surface of the glass with a kimwipe is a great idea!

### 7. Positioning glassware in the Pioreactor sleeve

:::danger
The outside of the glassware vial should be **dry**. If the vial is wet, even with single droplet, it can damage the electronics underneath.
:::

Place the glassware vial into the Pioreactor sleeve. Ensure that the vial is pressed all the way down and is touching the bottom of the vial holder. This ensures correct temperature regulation of the culture.


Next, you can [start your experiment](/user-guide/set-up-an-experiment) in the browser.


### Extra
#### Using pumps: influx and efflux.

When using the Pioreactor with pumps, you'll be using the four luer lock tubes/needle as influx and efflux. The tubes/needles, which are identical lengths, can be moved up and down, and we suggest using this as a way to "label" tubes, and to control the maximum volume in the vial. This can be done before sterilization. Here's how:

Two tubes/needles can be pulled such they are aligned high, near the tapered "shoulder" of the vial, and out of the vial's liquid. These two tubes/needles will be the liquid influx. For some operations, like a chemostat, you'll only be using one of these, but some operations require more than one influx.

The third tube is the liquid efflux tube. It will be positioned such that it controls the final amount of volume in the vial. Fill your vial to the desired final volume using water. Pull the tube down such that its end just touches the top of the liquid when the cap is fully screwed on. It may take some minor adjustments to achieve this.

The fourth tube is the air exchange tube. This tube should be positioned such that it is above the liquid level, and not touching the liquid. This will allow for gas exchange with the ambient atmosphere.


:::info
How does this maintain a constant volume throughout operation? When liquid is added, say 1ml, the volume rises an additional 1ml. Then 1ml of liquid is removed via efflux, but **then the efflux pump runs again for an additional few seconds**.  The efflux pump is run for an additional few seconds to eliminate any volume differences or deltas (for example, if the volume added is greater than the volume removed due to pumping errors). Otherwise, the deltas accumulate and the vial can overflow. This additional step guarantees that that volume of liquid never exceeds the end of the efflux tube.
:::

During your experiment set up, the length of the tubes out of the cap can provide information about their "roles": longest tube is air exchange, shortest tube is efflux, and middle two tubes are influx.




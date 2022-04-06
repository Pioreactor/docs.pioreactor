# Hardware calibrations

Hardware calibrations serve as a method to get accurate performance from your Pioreactor.


### Stirring calibration (optional)

:::info
You'll need the following:
1. Pioreactor HAT
2. Pioreactor sleeve
3. Vial and stirbar
:::

Internally, the Pioreactor will vary the amount of voltage to apply to the stirring motor to reach the desired RPM, however, this can take a few minutes. We can significantly improve this by asking the Pioreactor to create a "map" between voltage and RPM beforehand. Then the Pioreactor only needs to perform a lookup in the map to hit the desired RPM.

:::note
This is optional, but can really help stirring performance. Creating a stirring calibration is also very easy, so we recommend it.
:::

1. Start by filling a Pioreactor vial about 3/4th with water, and place the stirbar inside. Close with lid. Place into the Pioreactor.

2. From the web interface, in _Pioreactors_, find the Pioreactor you wish to calibrate. Click _Calibrate_.

![calibrate in interface](/img/user-guide/calibrate.png)

3. Click _stirring_

![calibrate in interface](/img/user-guide/calibrate_stirring.png)

4. Click _Start_. The Pioreactor will increment the voltage applied to the motor, and record the RPM. After it's done, it will collect this data into a calibration curve, and store it locally.

You're done! Your stirring RPM should be much more responsive now!


### Pump calibration

:::info
You'll need the following:
1. Pioreactor HAT
2. A pump per liquid input/output, with power connection to Pioreactor's PWM outputs
3. An accurate scale, or accurate graduated cylinder
4. Container of water
:::

Calibrating a pump, like a low-volume peristaltic pump, is very important to accurately dispense or remove a target volume. There is no liquid feedback loop in the Pioreactor (unlike in the stirring & RPM relationship), so this calibration curve is important.

There are three pumps on the Pioreactor: media, alt-media, and waste. You don't need to have all three available, and can calibrate them one at a time.


:::note
There currently is no web interface for this calibration, and must be done on the command line. Maybe in a future release!
:::


From the command line, run `pio run pump_calibration`. You'll be shown a command-line application that will guide your through the pump calibration.

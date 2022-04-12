---
slug: /using-stemma-qt
---
# Using the StemmaQT / Qwiic connector


The Pioreactor HAT comes with a connector for the StemmaQT / Qwiic connector that can be used to attack additional hardware for your Pioreactor. See image below:

 ![](/img/user-guide/stemma_qt.png)


:::info
What is StemmaQT / Qwiic? It's simply a standardized physical connector, the JST SH, with electronic connections to 3.3V, GND and I²C. Many other hardware design companies, like Adafruit and SparkFun, implement StemmaQT / Qwiic on their boards, which expands the StemmaQT / Qwiic ecosystem. 
:::


### Example

Suppose you are placing your Pioreactor in a CO₂ incubator, and want to record the CO₂ concentration of the incubator. The incubator does monitor the CO₂ concentration, but generally this isn't accessible to other tools. What you can do is purchase an external CO₂ sensor with StemmaQT / Qwiic connectors, like the [SCD-40](https://www.adafruit.com/product/5187), and attach it to your Pioreactor. The Pioreactor can now read from the CO₂ sensor, and build logging, event-loops, plotting, etc. around the measurements. 

To read from the sensor, a [plugin](/user-guide/using-community-plugins) may be available for it, or you can write a simple Python script like so:

:::note
You'll first need to install the Python library:
`sudo pip3 install adafruit-circuitpython-scd4x`
:::


```python
import sleep
import board
import adafruit_scd4x

from pioreactor.pubsub import publish
from pioreactor.whoami import get_unit_name, get_latest_experiment_name

i2c = board.I2C()
scd4x = adafruit_scd4x.SCD4X(i2c)

exp = get_latest_experiment_name()
unit = get_unit_name()

scd4x.start_periodic_measurement()

while True:
    if scd4x.data_ready:
        
        print("CO2: %d ppm" % scd4x.CO2)
        publish(f"pioreactor/{unit}/{exp}/scd4x/co2", scd4x.CO2, retain=True)

        print("Temperature: %0.1f *C" % scd4x.temperature)
        publish(f"pioreactor/{unit}/{exp}/scd4x/temperature", scd4x.temperature, retain=True)

        print("Humidity: %0.1f %%" % scd4x.relative_humidity)
        publish(f"pioreactor/{unit}/{exp}/scd4x/relative_humidity", scd4x.relative_humidity, retain=True)

        print()
    time.sleep(1)

```


Running this on your Pioreactor will publish the data to MQTT, and thus be available to any other bioreactor job. 

You could also turn this into a [background job](/developer-guide/intro-background-jobs) to make it even easier to use!

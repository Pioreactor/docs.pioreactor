# Writing Pioreactor scripts with Python

:::note
This article isn't intended as a crash course in Python, or Pioreactor software, but some helpful ways to write small scripts for your Pioreactor. If interested in learning more, check out the [developer docs](/developer-guide/developer-guide-intro) for detailed information.
:::

For some testing and playing purposes, it's really easy to get started writing scripts to automate parts of your Pioreactor. For this tutorial, you'll need to be able to SSH into your Raspberry Pi.

### 1. SSHing into your Raspberry Pi

SSHing means to connect to a computer remotely, and interact with its command line. In our case, we wish to interact with the Raspberry Pi remotely. SSH software depends on your operating system:

 - **Windows users**: install [PuTTY](https://www.putty.org/), or install the [Secure Shell App](https://chrome.google.com/webstore/detail/secure-shell-app/pnhechapfaindjhompbnflcldabbghjo?hl=en) for Google Chrome.
 - **macOS users**: open up the terminal app: `command`+`space`, search for "terminal".
 - **linux users**: y'all don't need my help :)


We need to connect to the Raspberry Pi:

1. hostname: your Pioreactor's name (see web interface) also-known-as your Raspberry Pi's _hostname_.
2. user: `pi`
3. password: the one you used when you installed the Pioreactor, by default it's `raspberry`.

One your online, you can have some fun and type `pio blink` to have your Pioreactor blink!

### 2. Writing our first script.

We'll start with something simple: writing a script to turn on the Pioreactor's stirring. To create a file called `script_test.py` and edit it on the Raspberry Pi command line, type `nano script_test.py`. You'll be shown an editor. Let's enter the following Python code:

```python
import time
from pioreactor.background_jobs.stirring import start_stirring

stirrer = start_stirring(target_rpm=400)
time.sleep(10)

```

Hit `crtl-x`, and then `Y` to save our file.

### 3. Running our Python script

To run our script, type `python3 script_test.py` in the command line. If everything works correctly, your Pioreactor's stirring will start, and then finish after 10 seconds. You're a hacker now :)

To make stirring run _forever_, let's edit the file again: `nano script_test.py`, and replace `time.sleep(10)` with:

```python {5}
import time
from pioreactor.background_jobs.stirring import start_stirring

stirrer = start_stirring(target_rpm=400)
stirrer.block_until_disconnected()
```

Save the file with `crtl-x`, and then `Y`, and run the script again. Now, the job will run until you log off, or exit the program with `ctrl-c`. This is because `block_until_disconnected` will block to program at that line (so keep this at the end of scripts!)


### 4. Extending our script: more jobs, changing RPM, and adding lights.

Let's add some more to our script. Let's say we also want to:
1. turn on an LED in channel B,
2. turn on optical density reading (with 45° photodiode in channel 1 and reference in channel 2).
3. After 10 seconds, slow down the stirring RPM

```python {3,4,6,9,11,12}
import time
from pioreactor.background_jobs.stirring import start_stirring
from pioreactor.background_jobs.od_reading import start_od_reading
from pioreactor.actions.led_intensity import led_intensity

led_intensity("B", 50)

stirrer = start_stirring(target_rpm=400)
od_reader = start_od_reading("45", "REF")

time.sleep(10)
stirrer.set_target_rpm(300)

stirrer.block_until_disconnected()
```

You should see data coming into to your experiment overview in the web interface!

### 5. Adding an automation

Next, we'd like to start heating and keep our vial at a constant temperature. Recall that all temperature tasks are actually temperature automations. In this case, we require the `pid_stable` temperature automation, invoked from a temperature controller:

```python {5,11}
import time
from pioreactor.background_jobs.stirring import start_stirring
from pioreactor.background_jobs.od_reading import start_od_reading
from pioreactor.actions.led_intensity import led_intensity
from pioreactor.background_jobs.temperature_control import start_temperature_control

led_intensity("B", 50)

stirrer = start_stirring(target_rpm=400)
od_reader = start_od_reading("45", "REF")
temp_controller = start_temperature_control("pid_stable", target_temperature=32)

time.sleep(10)
stirrer.set_target_rpm(300)

stirrer.block_until_disconnected()
```

### Conclusion

This is just a small example of scripts you can make. If you need to learn more, we suggest checking out the [developer guide](/developer-guide/developer-guide-intro).


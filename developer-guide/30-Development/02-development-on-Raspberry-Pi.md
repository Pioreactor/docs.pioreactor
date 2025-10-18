---
title: Development on a Raspberry Pi
slug: /pi-development
hide_table_of_contents: true
---

### Developing without hardware

If you have a Raspberry Pi available, you can quickly boot up a near-exact environment to a Pioreactor. We can mock out the hardware needed, but everything else will work: networking, the Pioreactor UI, MQTT, running jobs, plugins, etc.

1. Install the Pioreactor software on to a microSD card by following the instructions [here](/user-guide/software-set-up).
2. Power the Raspberry Pi. Since there's no HAT hardware, there won't be a blue blinking LED. The Raspberry Pi will still connect to the network you provided in the setup.
3. SSH into the Raspberry Pi. [Instructions on how to SSH in](/user-guide/accessing-raspberry-pi).
    - You should also be able to visit http://pioreactor.local
4. Once SSH'ed in, we need to add some "mocking" packages. Enter the following:
    - `sudo pip3 install fake-rpi`


The environment variable `TESTING` will determine if the Pioreactor should run in "testing" mode (i.e. mock out hardware required, and fake some data). We also need to specify the location of the `config.ini` file with the `GLOBAL_CONFIG` env variable. For example, we can mock the stirring job by entering:
```

TESTING=1 GLOBAL_CONFIG=/home/pioreactor/.pioreactor/config.ini pio run stirring

```

However, the experiment needs to be mocked out too:

```
TESTING=1 \
GLOBAL_CONFIG=/home/pioreactor/.pioreactor/config.ini \
EXPERMENT="Demo Experiment" \
pio run stirring
```

That's a lot of typing variables, so you could move these environment variables to `~/.profile`:
```
nano ~/.profile
```

And add anywhere:

```
export TESTING=1
export GLOBAL_CONFIG=/home/pioreactor/.pioreactor/config.ini
export EXPERMENT="Demo Experiment"
```

And finally enter:
```
source ~/.profile
```


Now you can do `pio run stirring` without having to enter in the environment variables.



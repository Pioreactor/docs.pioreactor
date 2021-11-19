# Develop on Pioreactor locally


#### Local development

To install the Pioreactor codebase locally, it should be enough to clone the repo [pioreactor/pioreactor](https://github.com/pioreactor/pioreactor) and run:

```
pip3 install -e .
pip3 install -r requirements/requirements_dev.txt
```

#### MQTT

You will need to set up MQTT locally. On OSX, homebrew can be used to install the MQTT broker `mosquitto`. Also enable logging in `/usr/local/etc/mosquitto/mosquitto.conf`, ex:

`log_dest file path/to/somewhere/.mosquitto/log`

`mosquitto_pub` and `mosquitto_sub` work as well.

#### Testing

Paho MQTT uses lots of sockets, and running all tests at once can overload the max allowed open files. Try something
like `ulimit -Sn 10000` if you receive `OSError: [Errno 24] Too many open files`

```
py.test pioreactor/tests
```

#### Running jobs locally

```
TESTING=1 pio run <job name>
```

You can also modify to hostname and experiment with

```
TESTING=1 \
HOSTNAME=<whatever> \
EXPERIMENT=<up to you> \
pio run <job name>
```

#### Raspberry Pi Images

Raspberry Pi images are built in the [Pioreactor/CustoPizer](https://github.com/Pioreactor/CustoPiZer/tree/pioreactor) repo, though these aren't needed for development.
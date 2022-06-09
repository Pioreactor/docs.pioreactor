---
title: Local development of Pioreactor
slug: /local-development
---

#### Local development

To install the Pioreactor codebase locally, it should be enough to clone the repo [pioreactor/pioreactor](https://github.com/pioreactor/pioreactor) and run:

```
pip3 install -e .
pip3 install -r requirements/requirements_dev.txt
```

#### MQTT

You will need to set up MQTT locally. On OSX, homebrew can be used to install the MQTT broker `mosquitto`. Also enable logging in `/usr/local/etc/mosquitto/mosquitto.conf` by adding a line like:

```
log_dest file path/to/somewhere/.mosquitto/log
```

The CLI tools `mosquitto_pub` and `mosquitto_sub` should work as well.

#### Testing

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
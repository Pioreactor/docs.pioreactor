---
title: Local development of Pioreactor
slug: /local-development
---

### Local development
1. Confirm that Python3 is installed, and is greater or equal to version 3.9. `python3 --version` will print the version.
2. To install the Pioreactor codebase locally, it should be enough to clone the repo [pioreactor/pioreactor](https://github.com/pioreactor/pioreactor).
    ```
    git clone https://github.com/Pioreactor/pioreactor.git && cd pioreactor
    ```
3. Install the core software are necessary packages (useful to do this in a virtualenv!):
    ```
    pip3 install -e .
    pip3 install -r requirements/requirements_dev.txt
    ```
4. In the pioreactor folder, create a folder called `.pioreactor/` and other important subdirectories.
    ```
    mkdir .pioreactor
    mkdir .pioreactor/storage .pioreactor/plugins .pioreactor/exportable_datasets
    ```
5. The configuration file that is used is `config.dev.ini`, and is provided  in the repository. Move this to `.pioreactor/`.

### MQTT

You will need to install MQTT and have a broker running locally. On OSX, homebrew can be used to install the MQTT broker _mosquitto_. On Windows, it can be installed [from this download page](https://mosquitto.org/download/).

:::info

The _mosquitto_ broker should be running whenever you invoke the Pioreactor software locally, else you'll likely get some _connection refused_ error.
:::

The CLI tools `mosquitto_pub` and `mosquitto_sub` should work as well.


### Running jobs locally

**With `pio`**

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


**With `python`**

```
TESTING=1 python <your script>.py
```

You can also modify to hostname and experiment with

```
TESTING=1 \
HOSTNAME=<whatever> \
EXPERIMENT=<up to you> \
python <your script>.py
```


:::info
If invoking from a different directory from `pioreactor/`, you'll need to have a `config.dev.ini` file locally. I usually copy my `pioreactor/config.dev.ini` to wherever I am working. Or you can use an environment argument `GLOBAL_CONFIG=./config.dev.ini pio ...`
:::


### Testing

```
py.test pioreactor/tests
```


### Plugins development

Create a folder in the `pioreactor` folder called `plugins_dev`. In this folder, you can place python files that will run whenever `pio` is invoked (similar to the `plugins` folder at `.pioreactor/plugins` on the Raspberry Pi, see [docs here](/developer-guide/intro-plugins#1-adding-python-files-to-plugins-folder))


### Raspberry Pi Images

Raspberry Pi images are built in the [Pioreactor/CustoPizer](https://github.com/Pioreactor/CustoPiZer/tree/pioreactor) repo. Nightly builds are available at [nightly.pioreactor.com](https://nightly.pioreactor.com).
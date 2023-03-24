---
title: Turning your plugins into a Python package to share
slug: /plugin-as-python-package
---

If you'd like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPi. Let's walk through this!

## Choosing a plugin name

Your plugin name should be _all lowercase_, and have _underscores_ divide any words. Ex: `pioreactor_gas_plugin` is fine, but `pioreactor-gas-plugin` is not, nor is `Pioreactor-gas-plugin`.

## Organizing your files

:::tip
Note that the way files are organized may depend on if your plugin is an **automation** or a **job**. Plugins can install both automations and jobs.
:::

Consider an example plugin: a **job** called _Relay_, which just turns on or off anything that is plugged into a channel of your choosing. Follow the file organization here: [CamDavidsonPilon/pioreactor-relay-plugin](https://github.com/CamDavidsonPilon/pioreactor-relay-plugin).

Here's a general schematic of how your files should be organized for a job:

```
📁 <PLUGIN_NAME>
├─ 📁 <PLUGIN_NAME>
│  ├─ 📁 ui
│  │  ├─ 📁 contrib
│  │  │  ├─ 📁 jobs
│  │  │  │  ├─ 📝 <PLUGIN_NAME>.yaml
│  ├─ 📝 __init__.py
│  ├─ 📝 additional_config.ini
│  ├─ 📝 my_plugin_code.py
├─ 📝 LICENSE.txt
├─ 📝 MANIFEST.in
├─ 📝 README.md
├─ 📝 setup.py
```

The schematic is very similar for an **automation plugin** &#151 the only difference is the location of the `.yaml` file.

```
📁 <PLUGIN_NAME>
├─ 📁 <PLUGIN_NAME>
│  ├─ 📁 ui
│  │  ├─ 📁 contrib
│  │  │  ├─ 📁 automations
│  │  │  │  ├─ 📁 <AUTOMATION TYPE (one of {dosing, led, temperature})>
│  │  │  │  │  ├─ 📝 <PLUGIN_NAME>.yaml
│  ├─ 📝 __init__.py
│  ├─ 📝 additional_config.ini
│  ├─ 📝 my_plugin_code.py
├─ 📝 LICENSE.txt
├─ 📝 README.md
├─ 📝 MANIFEST.in
├─ 📝 setup.py
```

Start by creating a new folder for your plugin. In our case, we named it `pioreactor_relay_plugin`. This **top level folder** will contain 4 important parts:

#### 1. A license text file, named `LICENSE.txt`

A common license for software is the [MIT license](https://opensource.org/licenses/MIT).

#### 2. A MANIFEST file, named `MANIFEST.in`

When creating a Python package, there's a default set of files that are included. To assure that our additional configuration and yaml files are included, create a `MANIFEST.in` file and paste the following:

```
recursive-include <PLUGIN_NAME>/ui/ *.yaml
include <PLUGIN_NAME>/additional_config.ini
```

#### 3. A `README.md`

Write a few notes with general information on your plugin to guide users. 

#### 4. A Python `setup.py` file

Create a Python file and paste the following. Make changes based on your own plugin information.

```python
# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

setup(
    name="<PLUGIN_NAME>",
    version="<VERSION>",
    license_files = ('LICENSE.txt',),
    description="<DESCRIPTION OF PLUGIN>",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    author_email="<EMAIL>",
    author="<NAME>",
    url="<A HOMEPAGE>",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[], # PROVIDE OTHER PYTHON REQUIREMENTS
    entry_points={
        "pioreactor.plugins": "<PLUGIN_NAME> = <PLUGIN_NAME>"
    },
)
```

#### 5. The subfolder `<PLUGIN_NAME>` containing your plugin's code

Within the top level directory, we created a sub-directory called `<PLUGIN_NAME>`.

### Contents of the subfolder, `<PLUGIN_NAME>`

#### 1. Your plugins Python files

This Python file contains the core code for your plugin. If your plugin is implementing a background job, then there should be a
function decorated with `@click.command` at the bottom of the file. See example [here](https://github.com/CamDavidsonPilon/pioreactor-relay-plugin/blob/e25b46997d6e6b3b1b2e2bf1141299ddba4eaa49/pioreactor_relay_plugin/relay.py#L79-L93). For discovery reasons, this function's name **should start with `click_`**.

#### 2. A Python `__init__.py` file

- **If implementing an automation:**
  Import the Class of your automation file:

  ```
  from <SUBFOLDER CONTAINING PLUGIN>.<PYTHON FILE NAME> import <CLASS NAME>
  ```

 - **If implementing a job:**
  This will contain an `import` statement such as the following:

  ```python
  from <PLUGIN_NAME>.<PYTHON FILE NAME> import <PLUGIN CLICK FUNCTION>
  ```
  This imports the function within our plugin file that executes our plugin action.

  Example for the relay plugin:

  ```python
  from pioreactor_relay_plugin.relay import click_relay
  ```

  where `click_relay` is the function decorated with `@click.command`.

#### 3. Optional: A configuration file, named `additional_config.ini`

This configuration file will contain additional configs that we want to add to our list of existing Configurations on the Pioreactor web interface. This file will be merged with the existing `config.ini` when the plugin is installed. 

![](/img/developer-guide/python-package-new-config.png)

:::tip
A convention we've tried to follow is to use the section name convention of `[<job_name>.config]` or `[<automation_name>.config]` in the configuration files. For example, our relay job has `[relay.config]` in its `additional_config.ini` and settings under it.
:::

#### 4. Optional: Adding details for the UI

##### If implementing a job:

Within `<PLUGIN_NAME>` folder, create subfolders named `ui/contrib/jobs`. For a job, create a `.yaml` file that looks like the following format. The name of the yaml can be anything, but convention is to use the `<job_name>.yaml`:

```
---
display_name:  # human readable name
job_name: # job name
display: # bool; true to display on the /Pioreactors card
source: # name of your plugin
description: # description of what your plugin does
published_settings:
  - key:  # as defined in Python
    unit: # unit (ml, lux, AU, etc.)
    label: # human readable name
    description: # description of your setting
    type:  # one of numeric, boolean, string, json
    default: # provide a default value, often null
    display: # bool; true to display on the /Pioreactors card
  - key: ...
    unit: ...
  ...
```

There are lots of examples of job yaml files [here](https://github.com/Pioreactor/pioreactorui/tree/master/contrib/jobs).



##### If implementing an automation:

In the case of creating an **automation plugin**, create subfolder(s) with `ui/contrib/automations/<AUTOMATION TYPE>`, where `AUTOMATION TYPE` is one of `dosing`, `led`, or `temperature` depending on your automation type. Create a yaml file with the following convention. The name of the yaml file can be anything, but by convention it's `<automation_name>.yaml`.

```
---
display_name:  # human readable name
automation_name: # automation name
source: # folder that contains your plugin
description: # description of your plugin
fields:
  - key:  # as defined in Python
    unit: # unit of your key
    label: # human readable name
    description: # description of your key
  - key: ...
    unit: ...
```

There are lots of examples of automation yaml files [here](https://github.com/Pioreactor/pioreactorui/tree/master/contrib/automations).

#### 5. Optional: adding tables to the SQL store

You can also add a file called `additional_sql.sql` that will run against the SQLite database. For example, a CO₂ sensor may want to create a new table in the database to store its sensor data. It's `additional_sql.sql` may look like:

```sql
CREATE TABLE IF NOT EXISTS co2_readings (
    experiment               TEXT NOT NULL,
    pioreactor_unit          TEXT NOT NULL,
    timestamp                TEXT NOT NULL,
    co2_reading_ppm          REAL
);
```

You also need to tell Pioreactor software how to populate this table from your source of data. Include the following in your code such that it executes when the plugin is loaded:

 1. a parser function that accepts a MQTT topic and payload, and returns a dictionary that maps to the new tables schema.
 2. a `TopicToParserToTable` object is created with the MQTT topics to listen to, the parser, and the table name to load to. This `TopicToParserToTable` is provided to `register_source_to_sink`.

 Example below for a CO2 sensor:

```python
...
from pioreactor.background_jobs.leader.mqtt_to_db_streaming import produce_metadata
from pioreactor.background_jobs.leader.mqtt_to_db_streaming import register_source_to_sink
from pioreactor.background_jobs.leader.mqtt_to_db_streaming import TopicToParserToTable

...

def parser(topic, payload) -> dict:
    metadata = produce_metadata(topic)
    return {
        "experiment": metadata.experiment,
        "pioreactor_unit": metadata.pioreactor_unit,
        "timestamp": timing.current_utc_timestamp(),
        "co2_reading_ppm": float(payload),
    }


register_source_to_sink(
    TopicToParserToTable(
        ["pioreactor/+/+/scd_reading/co2", "pioreactor/+/+/co2_reading/co2"],
        parser,
        "co2_readings",
    )
)

...
```

:::note
You also need to add the following to your `MANIFEST.in`:
```
...
include <PLUGIN_NAME>/additional_sql.sql
```
:::


See an example plugin that uses this idea [here](https://github.com/Pioreactor/co2-reading-plugin).


#### 6. Optional: adding a custom chart to the UI

To add a chart that display real-time and historical data (provided by MQTT and SQL store respectively), you can do the following:

1. In a new folder named `ui/contrib/charts` in your project, add a YAML file as described [here](/developer-guide/chart-to-ui). The name of the file can by the `chart_key` field, append with `.yaml`.
2. In your `additional_config.ini`, add a new entry to be merged:

```
[ui.overview.charts]
<your chart key>=1
```

:::info
You'll need to make sure your database table has the necessary fields. See details under `data_source` in the [docs here](/developer-guide/chart-to-ui).
:::


See an example plugin that uses this idea [here](https://github.com/Pioreactor/co2-reading-plugin).


## Create a Python package on PyPi

Create an account on [https://pypi.org/](https://pypi.org/). Make sure to verify your email.

On your command line, type the following:

```
pip install twine
pip install --upgrade build
python -m build --wheel		
twine upload dist/<.WHL FILE>
```

You will then be prompted for a username and password. Use the credentials for your PyPi account. Then, your package is uploaded and viewable at the link provided in the output!

:::tip Note
Before you build a new wheel, it's good practice to clean up your previous build.  
This can be done using `python setup.py clean --all` on the command line. 
:::

## Installing your Python package on your cluster

A plugin can be installed individually through the command line on a leader using `pio`:

:::tip

If your plugin name has underscores, Python packaging will convert the underscores to dashes. Ex: `pioreactor_relay_plugin` is converted to `pioreactor-relay-plugin` when you install it.

:::


```
pios install-plugin <PLUGIN-NAME>
```

To install a given plugin on the leader and all workers connected to the leader in a cluster, `pios install-plugin` can be used. 
 
```
pios install-plugin <PLUGIN-NAME>
```

## Sharing your plugin with the community

To give your plugin further reach, we've provided an option to add it to the web interface. You will need to edit the **plugins.json** file within our [Pioreactor repository, list-of-plugins](https://github.com/Pioreactor/list-of-plugins).

There are two ways to do this: 

1.	Create an issue to have us edit the plugins.json file for you. 
2.	Fork from our repository to edit the plugins.json file, then create a pull request. 

![](/img/developer-guide/python-package-pull-or-issue.png)

In both cases, we will evaluate your plugin to ensure code quality and all requirements are met (tests are included). 

Once your plugin is accepted, it will appear on the Plugins tab on the Pioreactor web interface. Users in the community can now easily click _Install_ to download your plugin onto their Pioreactors!

![](/img/developer-guide/python-package-plugins.png)

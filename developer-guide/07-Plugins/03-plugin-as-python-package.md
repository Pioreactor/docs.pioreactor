---
title: Turning your plugins into a Python package to share
slug: /plugin-as-python-package
hide_table_of_contents: true
---

If you'd like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPI. Let's walk through this!

## Choosing a plugin name

Your plugin name should be _all lowercase_, and have _underscores_ divide any words. Example: `pireactor_relay_plugin` is fine, but `pioreactor-relay-plugin` is not, nor is `Pioreactor-Relay-Plugin`.

However, your _distribution package_ name should be lowercase and have _dashes_ instead of underscores (it's a Python thing: I agree, this is confusing, I'll walk you through it). You can just replace any underscores with dashes: so our example distribution package name is `pioreactor-relay-plugin`.

Later in these steps, we'll reference these names as follows:

- `PLUGIN_NAME`: should be the name in all lowercase with underscores. Example: `pioreactor_relay_plugin`
- `DISTRIBUTION-NAME`: should be the name in all lowercase with dashes. Example: `pioreactor-relay-plugin`


## Organizing your files

:::tip
Note that the way files are organized may depend on if your plugin is an **automation** or a **background job**. Plugins can install both automations and jobs.
:::

Consider an example plugin: a plugin named `pioreactor_relay_plugin` that implements a _background job_ which just turns on or off a PWM channel. Follow the file organization here: [CamDavidsonPilon/pioreactor-relay-plugin](https://github.com/CamDavidsonPilon/pioreactor-relay-plugin).

Here's a general directory outline of how your files should be organized for a job:

```
📁 <DISTRIBUTION-NAME (with dashes)>
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

The directory outline is very similar for an **automation plugin**, the only difference is the location of the `.yaml` file.

```
📁 <DISTRIBUTION-NAME with dashes>
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

Start by creating a new folder for your plugin, equal to the distribution name (the name with dashes). In our case, we named it `pioreactor-relay-plugin`. This **top level folder** will contain five important parts:

#### 1. The subfolder `<PLUGIN_NAME>` containing your plugin's code

Within the top level directory, we created a sub-directory called `<PLUGIN_NAME>`.


#### 2. A license text file, named `LICENSE.txt`

A common license for software is the [MIT license](https://opensource.org/licenses/MIT).

#### 3. A MANIFEST file, named `MANIFEST.in`

When creating a Python package, there's a default set of files that are included. To assure that our additional configuration and yaml files are included, create a `MANIFEST.in` file and paste the following:

```
recursive-include <PLUGIN_NAME>/ui/ *.yaml
include <PLUGIN_NAME>/additional_config.ini
```

#### 4. A `README.md`

Write a few notes with general information on your plugin to guide users. Call out any additional installation steps, or hardware required. This is a markdown document.

#### 5. A Python `setup.py` file

Create a Python file called `setup.py` and copy & paste the following. Make changes based on your own plugin information.

```python
# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

setup(
    name="<DISTRIBUTION-NAME (with dashes)>",
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
    install_requires=[], # PROVIDE OTHER PYTHON REQUIREMENTS, ex: "pioreactor>=23.6.0", "numpy>=1.0"
    entry_points={
        "pioreactor.plugins": "<PLUGIN_NAME> = <PLUGIN_NAME>"
    },
)
```

### Contents of the subfolder, `<PLUGIN_NAME>`

#### 1. Your plugins Python files

This Python file contains the core code for your plugin. If your plugin is implementing a background job, then there should be a
function decorated with `@run.command` at the bottom of the file. See example [here](https://github.com/CamDavidsonPilon/pioreactor-relay-plugin/blob/e25b46997d6e6b3b1b2e2bf1141299ddba4eaa49/pioreactor_relay_plugin/relay.py#L79-L93).

#### 2. A Python `__init__.py` file

- **If implementing an automation:**
  Import the Class of your automation file:

  ```python
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
   from pioreactor_relay_plugin.relay import start_relay
   ```

   where `start_relay` is the function decorated with `@run.command`.


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
job_name: # `job_name` as defined in your Python file
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
automation_name: # automation name as defined in your Python files
source: # name of your plugin
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

#### 5. Optional: adding tables to the SQL database and exposing them on the Export Data page

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
from pioreactor.utils import timing

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

----

Now that you've added the code for adding to the database, you can also allow users to export your data from the UI's Export Data page. To do this, added a new folder `/exportable_datasets` to your project's source folder (along side the `__init__.py` file), and add a YAML file:

```yaml
dataset_name: some_unique_dataset_name
default_order_by: timestamp # for example
description: A lovely description which shows up in the UI
display_name: A lovely name which shows up in the UI
has_experiment: true # does your SQL table have an experiment column.?
has_unit: true # does your SQL table have an pioreactor_unit column.?
source: your_plugin_name
table: the_target_table # see also query below
timestamp_columns:
- timestamp
always_partition_by_unit: false
query: SELECT * FROM the_target_table WHERE reading < 4 AND ... # optional: you can specify a query.
```

You can add multiple dataset YAML files, too.

:::note
Include the following in your MANIFEST.IN:
```
recursive-include your_plugin_name/exportable_datasets *.yaml
```
:::

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


#### 7. Optional: adding post_install and pre_uninstall bash scripts.

If your plugin needs to edit the operating system, you can include either of the following files: `post_install.sh`, or `pre_uninstall.sh`. We have used these files to enable systemd services such that the job being installed will start at startup. Example [post_install.sh](https://github.com/Pioreactor/pioreactor-logs2slack/blob/master/pioreactor_logs2slack/post_install.sh) and [pre_uninstall.sh](https://github.com/Pioreactor/pioreactor-logs2slack/blob/master/pioreactor_logs2slack/pre_uninstall.sh).

You'll need to append to your MANIFEST.in, too:

```
include <PLUGIN_NAME>/post_install.sh
include <PLUGIN_NAME>/pre_uninstall.sh
```

For an example, see the [logs2slack](https://github.com/Pioreactor/pioreactor-logs2slack) plugin's repository.

#### 8. Optional: only installing on leader Pioreactor.

Some plugins may only want to be installed on the leader. For example, if they are changing the UI or database. To signal that a plugin should only be installed on the leader (and no-op on workers), add an empty file named `LEADER_ONLY` to the folder.

You'll need to append to your MANIFEST.in, too:

```
include <PLUGIN_NAME>/LEADER_ONLY
```

For an example, see the [logs2slack](https://github.com/Pioreactor/pioreactor-logs2slack) plugin's repository.

## Install package from source

It isn't enough to just `pip install` your package, as this will only add the script to the pioreactor system, not any extra configs you may have added. 
If you want to install the whole package from source you can simply run:

```
pio plugins install <PLUGIN_NAME> --source <PLUGIN_FOLDER>
```

## Create a Python package on PyPI

Create an account on [https://pypi.org/](https://pypi.org/). Make sure to verify your email.

On your command line, type the following:

```
pip install twine
pip install --upgrade build
python -m build --wheel		
```

This creates a `.whl` file in a `dist/` folder (that will be created). Next, we upload the `whl` file to PyPI:

```
twine upload dist/<THE .WHL FILE>
```

You will then be prompted for a username and password. Use the credentials for your PyPI account. Then, your package is uploaded and viewable at the link provided in the output!

:::tip Note
Before you build a new wheel, it's good practice to clean up your previous build.  
This can be done using `python setup.py clean --all` on the command line. 
:::

## Installing your Python package on your cluster

A plugin can be installed through the command line on a leader using `pio`:


```
pio plugin install <DISTRIBUTION-NAME OR PLUGIN_NAME>
```

To install a given plugin on the leader and all workers connected to the leader in a cluster, `pios plugins install` can be used.
 
```
pios plugin install <DISTRIBUTION-NAME OR PLUGIN_NAME>
```

## Sharing your plugin with the community

To give your plugin further reach, we've provided an option to add it to the web interface. You will need to edit the **plugins.json** file within our [Pioreactor repository, list-of-plugins](https://github.com/Pioreactor/list-of-plugins).

There are two ways to do this: 

1.	Create an issue to have us edit the plugins.json file for you. 
2.	Fork from our repository to edit the plugins.json file, then create a pull request. 

![](/img/developer-guide/python-package-pull-or-issue.png)

In both cases, we will evaluate your plugin to ensure code quality and all requirements are met.

Once your plugin is accepted, it will appear on the Plugins tab on the Pioreactor web interface. Users in the community can now easily click _Install_ to download your plugin onto their Pioreactors!

![](/img/developer-guide/python-package-plugins.png)


### Troubleshooting

 - Do you see an error like?
   ```
   WARNING: Skipping /usr/local/lib/python3.11/site-packages/X due to invalid metadata entry 'Y'
   ```
   Try the following:
   ```
   sudo rm -rf /usr/local/lib/python3.11/site-packages/X
   ```

   and then reinstall the plugin.


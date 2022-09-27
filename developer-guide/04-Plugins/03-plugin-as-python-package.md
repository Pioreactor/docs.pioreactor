---
title: Turning your plugins into a Python package to share
slug: /plugin-as-python-package
---

If you'd like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPi. Let's walk through this!

Note that in that template package, there are ways to add fields to the configuration (see `additional_config.ini`, which gets merged with `config.ini` on installation), and adding your automation to the web UI (see the specific folder structure in the `ui` folder).

## Organizing your files

:::tip
Note that the way files are organized depends on if your plugin is an **automation** or a **background job**. 
:::

Consider an example plugin: a **background job** called _Relay_, which just turns on or off anything thats plugged into a channel of your choosing. Follow the file organization here: [https://github.com/kellytr/pioreactor-relay-plugin](https://github.com/kellytr/pioreactor-relay-plugin).

Here's a general schematic of how your files should be organized for a background job: 

```
📁 my-plugin-name
├─ 📁 my_plugin_name
│  ├─ 📁 ui
│  │  ├─ 📁 contrib
│  │  │  ├─ 📁 jobs
│  │  │  │  ├─ 📝 my_plugin.yaml
│  ├─ 📝 __init__.py
│  ├─ 📝 additional_config.ini
│  ├─ 📝 my_plugin.py
├─ 📝 LICENSE.txt
├─ 📝 MANIFEST.in
├─ 📝 README.md
├─ 📝 setup.py
```

The schematic is very similar for an **automation plugin** &#151 the only difference is the location of the `.yaml` file. Follow the template here for automation specific plugins:[https://github.com/Pioreactor/pioreactor\_custom\_dosing\_automation](https://github.com/Pioreactor/pioreactor_custom_dosing_automation).

```
📁 my-plugin-name
├─ 📁 my_plugin_name
│  ├─ 📁 ui
│  │  ├─ 📁 contrib
│  │  │  ├─ 📁 automations
│  │  │  │  ├─ 📁 <SPECIFIC AUTOMATION (ex. either dosing, led, or temperature)>
│  │  │  │  │  ├─ 📝 my_plugin.yaml
│  ├─ 📝 __init__.py
│  ├─ 📝 additional_config.ini
│  ├─ 📝 my_plugin.py
├─ 📝 LICENSE.txt
├─ 📝 README.md
├─ 📝 MANIFEST.in
├─ 📝 setup.py
```

Start by creating a new file for your plugin. In our case, we named it `pioreactor-relay-plugin`. This **main file** will contain 4 important parts: 

#### 1. A license text file, named `LICENSE.txt`

A common license for software is the [MIT license](https://opensource.org/licenses/MIT).

#### 2. A MANIFEST file, named `MANIFEST.in`

When creating a Python package, there's a default set of files that are included. To assure that our additional configuration and yaml files are included, create a `MANIFEST.in` file and paste the following:

```
include <MAIN FOLDER>/additional_config.ini
recursive-include <MAIN FOLDER>/ui/ *.yaml
```

#### 3. A README file, named `README.md` 

Write a few notes with general information on your plugin to guide users. 

#### 4. A setup Python file, named `setup.py`

Create a Python file and paste the following. Make changes based on your own plugin information.

```python
# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

setup(
    name="pioreactor_relay_plugin",
    version="<VERSION>",
    license_files = ('LICENSE.txt',),
    description="<DESCRIPTION OF PLUGIN>",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    author_email="<EMAIL>",
    author="<NAME>",
    url="<YOUR HOMEPAGE>",
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        "pioreactor.plugins": "<SUBFOLDER CONTAINING PLUGIN> = <SUBFOLDER CONTAINING PLUGIN>"
    },
)
```

#### 5. A subfolder containing your plugin

Within the main file `pioreactor-relay-plugin`, we created a subfile `pioreactor_relay_plugin`. 

### Contents of the subfolder: 

#### 1. Your plugin file

This Python file contains the core code for your plugin. If your plugin is implementing a background job, then there should be a
function decorated with `@click.command` at the bottom of the file. See example [here](https://github.com/kellytr/pioreactor-relay-plugin/blob/d3fd10dab2bd3b460e2b00223d7d9dd9ae3165d8/pioreactor_relay_plugin/relay.py#L60-L83).

#### 2. An initial Python file, named `__init__.py`

##### If implementing an automation:
Import the Class of your automation file:  

```
from <SUBFOLDER CONTAINING PLUGIN>.<PYTHON FILE NAME> import <CLASS NAME>
```

##### If implementing a background job:

This will contain an `import` statement such as the following: 

```python
from <SUBFOLDER CONTAINING PLUGIN>.<PYTHON FILE NAME> import <PLUGIN CLICK FUNCTION>
```
This imports the function within our plugin file that executes our plugin action. 

Example for the relay plugin:

```python
from pioreactor_relay_plugin.relay import click_relay
```

where `click_relay` is the function decorated with `@click.command`.

#### 3. A configuration file, named `additional_config.ini`

This configuration file will contain additional configs that we want to add to our list of existing Configurations on the Pioreactor web interface. This file will be merged with the existing `config.ini` when the plugin is installed. 

![](/img/developer-guide/python-package-new-config.png)

#### 4. More subfolders

##### If implementing a background job:

Within our main subfolder, create a subfolder named `ui`. Within that, create a subfolder `contrib`, then `jobs`. Move your `.yaml` file to the final subfolder.

##### If implementing an automation:

In the case of creating an **automation plugin** instead of a **background job**, the subfolders are `ui/contrib/automations/<SPECIFIC AUTOMATION>`, where `SPECIFIC_AUTOMATION` is one of `dosing`, `led`, or `temperature`. Move your `.yaml` file to the final subfolder.


## Create a Python package on PyPi

Create an account on [https://pypi.org/](https://pypi.org/). Make sure to verify your email.

On your command line, type the following:

```
pip install twine
pip install --upgrade build
python -m build --wheel		
twine upload dist/<.WHL FILE>
```

You will then be prompted for a username and password. Use the credentials for your PyPi account. Then, your package is uploaded and viewable at the link provided! 

:::tip Note
Before you build a new wheel, it's good practice to clean up your previous build.  
This can be done using `python setup.py clean --all` on the command line. 
:::

## Installing your Python package on your cluster

A plugin can be installed individually through the command line on a leader using `pio`:

```
pios install-plugin <PACKAGE NAME>
```

To install a given plugin on the leader and all workers connected to the leader in a cluster, `pios install-plugin` can be used. 
 
```
pios install-plugin <PACKAGE NAME>
```

## Sharing your plugin with the community

To give your plugin futher reach, we've provided an option to add it to the web interface. You will need to edit the **plugins.json** file within our [Pioreactor repository, list-of-plugins](https://github.com/Pioreactor/list-of-plugins). 

There are two ways to do this: 

1.	Create an issue to have us edit the plugins.json file for you. 
2.	Fork from our repository to edit the plugins.json file, then create a pull request. 

![](/img/developer-guide/python-package-pull-or-issue.png)

In both cases, we will evaluate your plugin to ensure code quality and all requirements are met (tests are included). 

Once your plugin is accepted, it will appear on the Plugins tab on the Pioreactor web interface. Users in the community can now easily click _Install_ to download your plugin onto their Pioreactors!

![](/img/developer-guide/python-package-plugins.png)

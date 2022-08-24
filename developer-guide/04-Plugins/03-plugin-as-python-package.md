---
title: Turning your plugins into a Python package to share
slug: /plugin-as-python-package
---

The plugin and yaml files are all you need to use your plugin on your local Pioreactors. If you'd like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPi. Let's walk through this! 

Note that in that template package, there are ways to add fields to the configuration (see `additional_config.ini`, which gets merged with `config.ini` on installation), and adding your automation to the web UI (see the specific folder structure in the `ui` folder).

## Organizing your files

:::tip
Note that the way files are organized depends on if your plugin is an **automation** or a **background job**. 
:::

Consider an example plugin: a **background job** called _Relay_, which just turns on or off anything thats plugged into a channel of your chosing. Follow the file organization here: [https://github.com/kellytr/pioreactor-relay-plugin](https://github.com/kellytr/pioreactor-relay-plugin). 

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
│  │  │  │  ├─ 📁 <SPECIFIC AUTOMATION (ex. dosing)>
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

#### 1. A license (MIT) text file, `named LICENSE.txt`

Create a text document and paste the following: 
```
Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
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
    license="MIT",
    description="<DESCRIPTION OF PLUGIN>",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    author_email="<EMAIL>",
    author="<NAME>",
    url="https://github.com/<USERNAME>/<MAIN FOLDER>",
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

#### 2. An initial Python file, named `__init__.py`

This will contain an `import` statement such as the following: 

```python
from <SUBFOLDER CONTAINING PLUGIN>.<PLUGIN> import <PLUGIN FUNCTION>
```
This imports the function within our plugin file that executes our plugin action. 

#### 3. A configuration file, named `additional_config.ini`

This configuration file will contain additional configs that we want to add to our list of existing Configurations on the Pioreactor web interface. This file will be merged with the existing `config.ini` when the plugin is installed. 

![](/img/developer-guide/python-package-new-config.png)

#### 4. More subfolders

Within our main subfolder, create a subfolder named `ui`. Within that, create a subfolder `contrib`, then `jobs`.

In the case of creating an **automation plugin** instead of a **background job**, the subfolders are `ui/contrib/automations/<SPECIFIC AUTOMATION>`: 

 In both cases, move your `.yaml` file to the final subfolder.

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

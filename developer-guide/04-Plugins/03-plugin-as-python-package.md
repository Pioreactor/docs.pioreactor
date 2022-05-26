---
title: Turning your automation into a Python package to share
slug: /plugin-as-python-package
---

Following the template here: [https://github.com/Pioreactor/pioreactor\_custom\_dosing\_automation](https://github.com/Pioreactor/pioreactor_custom_dosing_automation), you can package and deploy your automation to your Pioreactor cluster, or for others to use.

Note that in that template package, there are ways to add fields to the configuration (see `additional_config.ini`, which gets merged with `config.ini` on installation), and adding your automation to the web UI (see the specific folder structure in the `ui` folder).
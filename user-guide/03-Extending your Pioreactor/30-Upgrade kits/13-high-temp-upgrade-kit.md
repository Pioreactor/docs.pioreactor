---
title: Adding the High Temp Upgrade kit
slug: /high-temp-upgrade-kit
hide_table_of_contents: true
---


If you purchased the High Temp Upgrade kit, you'll be replacing a few of your plastic components with the improved high-temp plastics. Once this is done, you'll also need to install some software:

### Software changes

You will need to "unlock" your Pioreactor's higher temperature settings. To do this, you can either

 - install the `pioreactor-high-temp-plugin` (internet required) using the command `pio install-plugin pioreactor-high-temp-plugin` on their Pioreactors with the new pieces, _or_
 - create a new Python file, `high_temp_plugin.py` in `~/.pioreactor/plugins` with the [content here](https://raw.githubusercontent.com/Pioreactor/pioreactor-high-temp-plugin/main/pioreactor_high_temp_plugin/__init__.py).

Remember: **_only install these changes on Pioreactors with the high temp upgrade kit._**
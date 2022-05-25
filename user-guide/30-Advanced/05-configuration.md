---
title: Configuration via config.ini
slug: /configuration
---

### How configuration works across Pioreactors

Configuration of the Pioreactors is through configuration files, prefixed by `.ini`. There are two types of `.ini` files: a shared `config.ini`, which is the same across all units, and a worker-specific `unit_config.ini` file, which can have settings that overwrite those found in the shared `config.ini`. See image below:

![](https://i.imgur.com/g8dDdhZ.png)


This overriding lets you customize specific behavior *per* Pioreactor, without having to duplicate lots of configuration over and over again.


### How to edit the configuration files from the web interface

In the web interface, pioreactor.local, the sidebar contains a link to _Configuration_. From there, any `.ini` file can be edited. Clicking \[Save\] will save the new configuration and will deploy the new configuration to the proper Pioreactor unit(s).

### How to edit the configuration files from the command line

All the `.ini` files come from the leader unit. They are stored in `/home/pi/.pioreactor` - one `config.ini` and a `config_<unitName>.ini` for each Pioreactor unit. The command `pios sync-configs` will deploy the `.ini` files to their correct unit. Editing the `.ini` files on the leader is correct workflow, as any edits on the worker units will be overwritten on the next `pios sync-configs`.

One can programmatically, or by hand, edit the `config_<unitName>.ini` files to create varying parameters in an experiment. Running `pios sync-configs` will deploy the config files.


### Example config.ini

If you need a reference config.ini, or to replace parts of yours, here's our [default one](https://raw.githubusercontent.com/Pioreactor/CustoPiZer/pioreactor/workspace/scripts/files/config.example.ini) ships with the Raspberry Pi image. To use it, you'll need to make some changes, specifically to \`network.leader\` and \`inventory\`.
---
title: Configuration via config.ini
slug: /configuration
---

### How configuration works across Pioreactors

Configuration of the Pioreactors is through configuration files, prefixed by `.ini`. There are two types of `.ini` files: a shared `config.ini`, which is the same across all units, and a unit-specific `unit_config.ini` file, which can have settings that overwrite those found in the shared `config.ini`.

For example (and see image below), each unit will use the shared config.ini setting of `target_rpm=500`, unless an alternative setting is present in their specific `unit_config.ini` files (like `target_rpm=400` found in `unit1_config.ini`) . This overriding lets you customize specific behavior *per* Pioreactor, without having to duplicate lots of configuration over and over again.

![](/img/user-guide/configini.png)


### Editing the configuration files from the web interface

At [pioreactor.local](http://pioreactor.local), navigate to the _Configuration_ page in the sidebar.

![Edit configuration page](/img/user-guide/edit_config_page.png)

Select the configuration file you wish to edit from the dropdown:

![Choose the config.ini you wish to edit](/img/user-guide/find_config_to_edit.png)


Clicking \[Save\] will save the new configuration and will deploy the new configuration to the proper Pioreactor unit(s).

![Save the edited config.ini using the Save button](/img/user-guide/save_config.png)

Pioreactor also stores a history of changes to each configuration file. You can view previous versions of configuration files in the dropdown. Clicking \[Revert\] will save the displayed configuration file.

![Select historical versions of config.ini's](/img/user-guide/choose_config_version2.png)



### Editing the configuration files from the command line

All the `.ini` files come from the leader unit. They are stored in `/home/pioreactor/.pioreactor` - one `config.ini` and a `config_<unitName>.ini` for each Pioreactor unit. The command `pios sync-configs` will deploy the `.ini` files to their correct unit. Editing the `.ini` files on the leader is correct workflow, as any edits on the worker units will be overwritten on the next `pios sync-configs`.

One can programmatically, or by hand, edit the `config_<unitName>.ini` files to create varying parameters in an experiment. Running `pios sync-configs` will deploy the config files.


### Editing the `config.ini` before booting

Sometimes it's desirable to make changes to the `config.ini` without having to boot the Pioreactor first. You can do this by plugging the micro SD card into your computer, and adding a `config.ini` to the `boot/` folder on it. This `config.ini` doesn't need to have all the fields, only the fields you wish to change. At start up, the Pioreactor will merge `/boot/config.ini` into the Pioreactor's `config.ini`, and then delete `/boot/config.ini`.


### Example `config.ini`

If you need a reference config.ini, or to replace parts of yours, here's our [default one](https://raw.githubusercontent.com/Pioreactor/CustoPiZer/pioreactor/workspace/scripts/files/config.example.ini) that ships with the Raspberry Pi image. To use it, you'll need to make some changes, specifically to \`cluster.leader\` and \`inventory\`.

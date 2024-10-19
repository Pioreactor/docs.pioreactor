---
title: Command line interface
slug: /cli
---

For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the [leader or worker](/user-guide/create-cluster) and you can execute the following commands. Full options and up-to-date documentation are available with `pio <command> --help`.

### Worker commands

Interacting with the Pioreactor on the command line are through the `pio` tool. Available arguments are:

*   `pio logs` will produce a stream of recent logs events. Logs are stored in `/var/log/pioreactor.log`.
*   `pio kill --name <job> --experiment <exp>` or `pio kill --all-jobs` to end jobs.
*   `pio run <job> <options>` will run the `<job>`. Each job may have specific command line arguments.
*   `pio version` print the version of the PioreactorApp software.
*   `pio update app` will update the software to the latest version.
*   `pio update ui` will update the ui to the latest version.
*   `pio update` will update both the app and ui to the latest version.
*   `pio plugins install <plugin name>` will install a plugin
*   `pio plugins uninstall <plugin name>` will uninstall a plugin
*   `pio plugins list` will list the currently installed plugins
*   `pio blink` will blink the Pioreactor's onboard LED.
*   `pio log -m <message>` will log a message
*   `pio cache view <cache>` will print out the contents of the specified cache.
*   `pio cache clear <cache> <key>` will remove `<key>` from cache `<cache>`.


### Leader-only commands

The leader also has their own unique set of `pio` commands (these commands do not interact with the workers):

*   `pio db`: open the sqlite3 CLI of the Pioreactor database.
*   `pio mqtt`: tail the MQTT broker.
*   `pio workers` has many subcommands for manager your cluster. For example:
    *   `pio workers add <hostname>`: add a Pioreactor to your cluster, with given (unique) name. Need a worker Pioreactor on the network first. See instructions [here](https://github.com/Pioreactor/pioreactor/wiki/Installation).
    *   `pio workers remove <hostname>`: remove a Pioreactor from your cluster.
    *   `pio workers discover` will return a list of workers on the network (may be a superset of the current cluster.)
    *   `pio workers status` will report to the user each Pioreactor in the cluster, and metadata like status, IP, and state.

#### Leader-only commands to control workers

The leader Pioreactor interacts with the worker computers using the `pios` command. Unless otherwise noted, the `pios` will target all worker computers. Available `pios` commands on the leader Pioreactor are the following:

*   `pios kill --name <job>` terminate the job `<job>` on the workers. Ex: `pios kill --name dosing_automation`.
*   `pios run <job>` on each worker, run the job `<job>` in the background. Job specific arguments can be specified after. Ex: `pios run add_media --ml 1`.
*   `pios update` install the latest Pioreactor software on each worker.
*   `pios sync-configs` deploy the config.ini files to workers.
*   `pios plugins install <plugin name>` will install the plugin on each worker _and_ the leader.
*   `pios plugins uninstall <plugin name>` will uninstall the plugin on each worker _and_ the leader.
*   `pios reboot` will reboot all workers, by default, in the cluster. See `--units` arg below.
*   `pios shutdown` will shut down all workers, by default, in the cluster. See `--units` arg below.
*   `pios cp <filepath>` will copy (and overwrite) `filepath` on the leader to all the workers.
*   `pios rm <filepath>` will remove `filepath` on all the workers.

:::tip
In each of the above commands, specific workers can be invoked with `--units` (which can be used multiple times. Ex: `pios run stirring --units pio1 --units pio2`.
:::

:::tip
`-y` will skip user confirmation of the command to run.
:::

:::tip
`--json` will display json output of the callbacks to each worker.
:::
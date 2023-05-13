---
title: Accessing the Raspberry Pi
slug: /accessing-raspberry-pi
---


For more customization and control of your Pioreactor, you can access the Raspberry Pi's command line. From the command line, you can view more logs, control individual Pioreactors, and more.

## Access from Windows

There are two simple ways to access the Raspberry Pi from a Windows desktop.

### 1. Using the Command Prompt

1. [Open the command prompt](https://support.kaspersky.com/common/windows/14637#block0).
2. Type `ssh pioreactor@<insert unit name>.local`. For example, to access on our Pioreactor named _worker3_, we typed `ssh pioreactor@worker3.local`. The default password is `raspberry`.

:::info
When typing in the password, it may not show up as you type (this is a security feature)
:::


  ![](/img/experiments/turbidostat/ssh_into_unit.png)

If successful, try entering `pio blink` - your Pioreactor's blue LED should starting blinking. See [more commands here](/user-guide/cli).


### 2. Using PuTTY

Start by installing the program [PuTTY](https://www.putty.org/). Once downloaded, open PuTTY. Enter your Pioreactor's name as the hostname (if working with a cluster, enter your leader's hostname). Click "Open". If this is the first time to connect to the Raspberry Pi, you will have to accept its SSH certificate. On the next screen, use the username / password: `pioreactor` / `raspberry`.

If successful, try entering `pio blink` - your Pioreactor's blue LED should starting blinking. See [more commands here](/user-guide/cli).


## Access from a Mac

1. [Open the Terminal application](https://www.makeuseof.com/open-terminal-on-mac/).
2. From the command line, enter `ssh pioreactor@<name of pioreactor>.local`. If this is the first time to connect to the Raspberry Pi, you will have to accept its SSH certificate. When prompted, enter the password `raspberry`.

:::info
When typing in the password, it may not show up as you type (this is a security feature)
:::

If successful, try entering `pio blink` - your Pioreactor's blue LED should starting blinking. See [more commands here](/user-guide/cli).


## Access from Linux

You don't need my help. Try entering `pio blink` - your Pioreactor's blue LED should starting blinking. See [more commands here](/user-guide/cli).


## Troubleshooting

If the above steps aren't working for your system, try the following:

1. Instead if using the `<unit name>.local`, try using the IP address (if available). Example, `ssh pioreactor@192.168.1.30` for a Raspberry Pi at IP address 192.168.1.30.
2. Try power-cycling the Pioreactor.


---
title: Accessing the Raspberry Pi
slug: /accessing-raspberry-pi
---


For more customization and control of your Pioreactor, you can access the Raspberry Pi's command line. From the command line, you can view more logs, control individual Pioreactors, and more.

## Access from Windows

### Using the Command Prompt

Open the command prompt and SSH into your Pioreactor: 

![](/img/experiments/turbidostat/ssh_into_unit.png)

Type `ssh pioreactor@<insert unit name>.local`. For example, to calibrate on our Pioreactor named _worker3_, we typed `ssh pioreactor@worker3.local`. The default password is `raspberry`.

### Using PuTTY

Start by installing the program [PuTTY](https://www.putty.org/). Once downloaded, open PuTTY. Enter your Pioreactor's name as the hostname (if working with a cluster, enter your leader's hostname). Click "Open". If this is the first time to connect to the Raspberry Pi, you will have to accept its SSH certificate. On the next screen, use the username / password: `pioreactor` / `raspberry`.

If successful, try entering `pio blink` - your Pioreactor's blue LED should starting blinking. See [more commands here](/user-guide/cli).


## Access from a Mac

Open the Terminal application. From the command line, enter `ssh pioreactor@<name of pioreactor>.local`. If this is the first time to connect to the Raspberry Pi, you will have to accept its SSH certificate. When prompted, enter the password `raspberry`.

If successful, try entering `pio blink` - your Pioreactor's blue LED should starting blinking. See [more commands here](/user-guide/cli).


## Access from Linux

You don't need my help.
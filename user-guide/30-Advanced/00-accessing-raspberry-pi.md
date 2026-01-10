---
title: Accessing the Pioreactor via SSH
slug: /accessing-raspberry-pi
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

For more customization and control of your Pioreactor, you can access the Pioreactor's (Raspberry Pi's) command line. From the command line, you can view more logs, control individual Pioreactors, and more.

:::tip
If you are new to SSH: SSH is a secure way to open a text-only session to another computer. You'll type commands in a terminal window and see responses directly from the Pioreactor.
:::

### What you will see

- **Terminal / command prompt**: the app that shows a text window (no mouse needed).
- **Prompt**: the line waiting for input, often ending with `$`. Example: `pioreactor@worker3:~ $`.
- **Command**: the text you type at the prompt, then press Enter to run.

## Access from Windows

There are two simple ways to access the Raspberry Pi from a Windows desktop.

### 1. Using the Command Prompt

1. [Open the command prompt](https://support.kaspersky.com/common/windows/14637#block0).
2. Type `ssh pioreactor@<insert unit name or ip>.local`. For example, to access on our Pioreactor named _worker3_, we typed `ssh pioreactor@worker3.local` or via it's IPv4: `ssh pioreactor@192.168.0.11`.
3. If asked "The authenticity of host...", enter "yes". This is a one-time trust check for that specific Pioreactor.
4. The default password is `raspberry` (see note below).

   :::note
   If the `.local` address doesn't resolve, use the Pioreactor's IPv4 address instead (for example, `ssh pioreactor@192.168.0.11`).
   :::

   :::info
   When typing in the password, characters may not appear up as you type - that's expected. This is a security feature.
   :::


  ![A computer console with `ssh pioreactor@worker3.local` typed in, and the resulting active console on the Raspberry Pi.](/img/experiments/turbidostat/ssh_into_unit.png)

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

:::note
If the `.local` address doesn't resolve, use the Pioreactor's IPv4 address instead (for example, `ssh pioreactor@192.168.0.11`).
:::

If successful, try entering `pio blink` - your Pioreactor's blue LED should starting blinking. See [more commands here](/user-guide/cli).


## Access from Linux

1. Open your Terminal app.
2. Enter `ssh pioreactor@<name of pioreactor>.local` and accept the host key if prompted.
3. Enter the password `raspberry`.

:::note
If the `.local` address doesn't resolve, use the Pioreactor's IPv4 address instead (for example, `ssh pioreactor@192.168.0.11`).
:::

If successful, try entering `pio blink` - your Pioreactor's blue LED should starting blinking. See [more commands here](/user-guide/cli).


## Troubleshooting

If the above steps aren't working for your system, try the following:

1. Instead if using the `<unit name>.local`, try using the IP address (if available). Example, `ssh pioreactor@192.168.1.30` for a Raspberry Pi at IP address 192.168.1.30.
2. Try power-cycling the Pioreactor.
3. Make sure your computer is on the same network as the Pioreactor (the `.local` name only works on the same network).

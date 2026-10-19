---
title: Internet sharing between a PC and a Pioreactor
slug: /internet-sharing
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

Below is a way to physically connect your PC to your Pioreactor and be able to control the Pioreactor from your PC, without needing any wifi or external router. This is called _internet sharing_. Note that this method _does_ scale to larger clusters (see below).


Below is a simple diagram of how this might look (these are random IPs, yours may be different).
```

+---------------------+
|  Sharing PC         |
|  IP: 192.168.137.1  |
+----------+----------+
           |
           | Ethernet Cable
           |
+----------+----------+
|  leader             |
|  IP: 192.168.137.2  |
+---------------------+

```

### Requirements

1. The Pioreactor requires an ethernet port. Any Raspberry Pi B models have this, but also you can purchase inexpensive (micro)USB-to-ethernet dongles.
2. You can use a freshly installed Pioreactor, or an existing Pioreactor.
3. An ethernet cable
4. A PC with an available ethernet connector (again, you can purchase dongles to connect ethernet to PC's that don't have an available ethernet port).

### Steps

1. Power off the Pioreactor.
2. Connect the ethernet cable to the Pi.
3. Connect the other end of the ethernet cable to the PC.
4. If using a **mac / OSX**: turn on internet sharing with the following:
    1. Go to System Preferences -> Internet sharing.
    2. In "Share your connection from", choose the source of your internet. Ex: if connected over Wi-Fi, choose that.
    3. "To devices using": select the USB10/100/1000 LAN.
    4. Set "Internet Sharing" to "On".
    5. Click "Done"

5. If using a **Windows**,  turn on internet sharing with the following:
    1. Open search bar and search for "View Network Connections"
    2. Find the interface that has your Internet connection on (green symbol), right click and select 'Properties'
    3. Select the sharing tab and in 'Home networking connection' select the interface the Pi is connected to (something like "Ethernet").
    4. Tick the box 'Allow other network users to connect through this computer's Internet connection' and click on 'OK'
6. Power up the Pioreactor. After a few minutes, you should be able to `ping your-leaders-hostname.local` and get back an address like `192.168.xx.xx`.
7. Open the UI in your browser using your leader's hostname (for example, `your-leaders-hostname.local`).


And you're done! Your Pioreactor should be able to be both accessed by the local PC, and be able to ping the internet (for updates, plugins, etc). You can also disconnect the ethernet cable as well, and your Pioreactor will still function (albeit it will lose internet connectivity).


### Connecting multiple Pioreactors

From here, there are two ways to add more Pioreactors:

1. A simple way to set up a cluster of Pioreactor is to use internet sharing between your PC and the leader Pioreactor (see above), and use a [local access point](/user-guide/local-access-point) between the leader Pioreactor and the worker Pioreactors. Note this will not provide internet access to the other Pioreactors (by default).

2. Alternatively, you can extend the above technique to multiple Pioreactors. Instead of connecting the ethernet directly to the Pioreactor, you can connect it to a network switch, and connect your Pioreactors to that switch (via ethernet).

![Two cluster layouts: a leader local access point provides Wi-Fi to workers without internet access by default; an Ethernet switch connects all units to the computer’s shared network.](/img/user-guide/30-advanced/01-internet-sharing/internet-sharing-topologies.svg)

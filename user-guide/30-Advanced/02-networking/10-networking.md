---
title: Networking tools
slug: /networking
---

:::info
Previously, Raspberry Pis used a file called `wpa_supplicant.conf` to handle wifi network connections. **This is not longer the case**. Modern Raspberry Pi software, including the Pioreactor, doesn't use `wpa_supplicant.conf` at all. Instead, the tool `nmcli` replaces it. Don't follow tutorials that use `wpa_supplicant.conf`.
:::


## General networking tools

The main "entry point" for networking on the Pioreactor (and Raspberry Pi's in general) is the tool `nmcli`. This controls discovering networks, connecting to them, and editing connections. For example, running `nmcli con` will diplay a list of possible networking connections, and connected ones in green.

### Connecting to a wifi network using `nmcli`

You can first discover all the visible networks with:

```
sudo nmcli d wifi list
```

If you see your network on the list, then run:


```
sudo nmcli device wifi connect <ssid name> password <ssid password> ifname wlan0
```

(If you get a "Can't find" error, try running the above `list` command again.)

### Connecting to multiple networks simultaneously

First, some terminology and understanding for us: a computer, like a Pi, has networking interfaces. For example, the onboard wifi on RPi’s is one such interface. The larger, model Bs, have an ethernet connector, which is another interface. Each interface can connect to 0 or 1 networks.

In order to connect to multiple networks, you need a Raspberry Pi with multiple interfaces. You can add interfaces with devices like a [USB wifi device](https://forum.pioreactor.com/t/connecting-more-workers-to-cluster/330/3).

To see what your current interfaces are doing, use:
```
nmcli device
```

The right hand side shows your connected interfaces. For example, if have a ethernet connection to a router, you'll see an `eth0` connection active. If you have an additional wifi hardware device attached to your Pi, you'll see `wlan1`.

:::tip
To connect to another wifi network using an external `wlan1` interface, use:

```
sudo nmcli device wifi connect <ssid name> password <ssid password> ifname wlan1
```
:::

If your leader is connected to multiple networks `A` and `B`, and you access the UI over network `A`, but your workers access over network `B`, the leader is in the position called a "gateway". You'll need to make some configuration changes to your cluster. Since the leader is attached to networks `A` and `B`, it has two IPs (use `hostname -I` to see all the ips), let's call them `ipA` and `ipB` respectively.

1. Access the configuration in the UI.
2. In the _shared_ config.ini, edit the `[mqtt]` `broker` field to be equal to `ipA`. Also edit the `leader_address` to be `ipB`.
3. In each of the workers (including the leader's config.ini, if it's a worker), add the following:
   ```
   [mqtt]
   broker=ipB
   ```

You may need to restart your cluster for these to take full effect.



### Starting the [Pioreactor local access](/user-guide/local-access-point) point using `nmcli`

Note that you can only have one network connection for each network interface. So if you have only one wifi device (by default, RPi's only have one wifi device on them, which implies only one wifi interface), the following will replace any existing wifi connection.

```
sudo nmcli con up PioreactorAP
```

If have a second wifi device with interface `wlan1`, you can change the interface of the local access point using:

```
sudo nmcli con modify PioreactorAP ifname wlan1
sudo nmcli con up PioreactorAP
```


#### Changing `leader_address` and MQTT `broker` in your config.ini

You may need to change the `leader_address` in your config.ini: this is the address where workers will communicate with your leader.

Likewise, you may need to change the mqtt `broker` in your config.ini for the same reason. It may be required to change it in the unit specific config.inis.

```ini title="config_worker01.ini"
[mqtt]
broker=leader.local
```


### Changing web UI port from `80` to something else

To change the web UI port from the default of `80`, following these instructions:

:::note
This will change the web server port for all leaders and workers. There is currently not a way to have different ports on different Pioreactors. See [this issue](https://github.com/Pioreactor/pioreactor/issues/526).
:::

1. SSH into each Pioreactor in your cluster, leader and workers.
2. We'll edit the lighttpd configuration first: 
   ```
   sudo nano /etc/lighttpd/lighttpd.conf
   ```

   and find the line starting with `server.port`. Change this to something else (preferably not a value below 1024). Save and exit.

3. Restart lighttpd with:
   ```
   sudo systemctl restart lighttpd.service
   ```
   You should be able to access the web UI only on http://`leader name`:`new port`, for example: http://leader.local:8080

4. In your configuration, under the `[ui]` section, change the `port` option from `80` to your new port value. Save. You may need to restart your cluster for this new port to propagate to all Pioreactors correctly.




## Connecting to eduroam

This is a work-in-progress, but here's [one example](https://forum.pioreactor.com/t/connecting-more-workers-to-cluster/330/3#connecting-to-eduroam-2).


## Common questions

### My Pioreactor activities start very slowly from the UI

It is possible that your mDNS is being blocked or restricted. If possible, log into your router and enable settings that allow "multicast", or "mDNS", or "IGMP proxing". If you are using a the builtin [local access point](/user-guide/local-access-point), this solution is not the correct one.

Also, if you are able to provide a permanent IPv4 address to your leader, you can get a significant performance boost by setting the configuration some config parameters to the IPv4 address.

```
[cluster.topology]
# below is an example, your IPv4 may differ:
leader_address=192.168.0.3

[mqtt]
broker_address=192.168.0.3

```

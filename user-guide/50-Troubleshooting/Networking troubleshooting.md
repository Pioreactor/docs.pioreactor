---
title: Networking
slug: /troubleshooting-networks
---

### My Pioreactor activities start very slowly from the UI

It is possible that your mDNS is being blocked or restricted. If possible, log into your router and enable settings that allow "multicast", or "mDNS", or "IGMP proxing". If you are using a the builtin [local access point](/user-guide/local-access-point), this solution is not the correct one. 

Also, if you are able to provide a permanent IPv4 address to your leader, you can get a significant performance boost by setting the configuration parameter `leader_address` in section `[cluster.topology]` to the IPv4 address.

```
[cluster.topology]
# below is an example, your IPv4 may differ:
leader_address=192.168.0.3
```

### I can't connect to my Pioreactor's local access point anymore (previously I could)



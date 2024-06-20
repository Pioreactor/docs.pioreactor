---
title: Creating a Pioreactor cluster
slug: /create-cluster
---

Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, a Pioreactor needs to be assigned as a _leader_. The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware. A leader will communicate and control all the _workers_ (non-leader Pioreactors) in the _inventory_.

:::info
When you set up your first Pioreactor using our [software installation guide](/user-guide/software-set-up), your Pioreactor was set up to be a leader already. You only need one leader in a Pioreactor cluster.
:::


### Adding Pioreactors to your cluster

After installing the worker image onto your additional Pioreactor (see the instructions [here](/user-guide/software-set-up#adding-additional-workers-to-your-cluster)), visit the Inventory page.

On the _Inventory_ page, you can search for and add worker Pioreactors to your cluster. Click "Add new Pioreactor" at the top right corner of this tab.

![](/img/user-guide/inventory-tab.png)

In the popup, add the name of your worker and click "Add Pioreactor".

![](/img/user-guide/add-new-pioreactor.png)

Once a new Pioreactor is added, you may need to refresh the page to see the new worker in the cluster.

This Inventory tab will display metadata pertaining to each of your Pioreactors. You can use this page to identify a Pioreactor (causes the blue LED on the HAT to blink), unassign a Pioreactor from any experiment, reboot a Pioreactor, or remove it from your cluster. This page also provides a summary of which Pioreactors are assigned to which experiment, as highlighted in yellow in the image below.

![](/img/user-guide/inventory-multiple-pios.png)


### Active and inactive

Workers can be *active* (available for running activities and cultures), or inactive. Inactive Pioreactors can still be assigned to experiments, but won't response to commands to run activities or participate in experiment profiles.

Turning a worker to inactive will halt all it's activities.


### Possible cluster topologies

A cluster can be made up of a single Pioreactor, or can be scaled to as many Pioreactors as you have. This gives us a few different possible topologies of what your cluster of Pioreactor(s) might look like.

#### Single Pioreactor

The simplest topology is when you have a single Pioreactor, and so by default the Pioreactor is both the leader and the only worker.

<img src="/img/user-guide/single_pioreactor_cluster.png" width="335" style={{margin: "auto", display:"block"}}/>


#### Cluster, and leader is a worker

When you have multiple Pioreactors, you can nominate one to be the leader, and retain it as a worker, too:

![leader is also a worker in the cluster](/img/user-guide/leader_as_worker_cluster.png)


#### Cluster, and leader is _not_ a worker

You can also choose not to have the leader be a worker. This is useful if you have a spare Raspberry Pi without the Pioreactor hardware, or the number of Pioreactors grows large and you wish to keep one out of the inventory to focus on being a leader only.

![leader not worker](/img/user-guide/leader_cluster.png)


### Common questions


#### Can I change the name of a _worker_?

Yes, so long as that worker isn't the leader. Note: this doesn't change historical data.

1. Remove the worker from your cluster using the Inventory page.
2. SSH into the worker (it should still be on your network, even if not part of the cluster).
3. Run `sudo hostnamectl set-hostname <new-worker-name> && sudo reboot`
4. After a moment, the worker will turn back on with the new name. You can then use the Inventory page to add the worker again.

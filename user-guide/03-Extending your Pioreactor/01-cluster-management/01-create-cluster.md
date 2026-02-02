---
title: Creating a Pioreactor cluster
slug: /create-cluster
hide_table_of_contents: true
---

Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, a Pioreactor needs to be assigned as a _leader_. The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware. A leader will communicate and control all the _workers_ (non-leader Pioreactors) in the _inventory_.

:::info
When you set up your first Pioreactor using our [software installation guide](/user-guide/software-set-up), your Pioreactor was set up to be a leader already. You only need one leader in a Pioreactor cluster.
:::


### Adding Pioreactors to your cluster

After installing the _worker_ image onto your additional Pioreactor (see the instructions [here](/user-guide/software-set-up#adding-additional-workers-to-your-cluster)), visit the Inventory page.

On the _Inventory_ page, you can search for and add worker Pioreactors to your cluster. Click "Add new Pioreactor" at the top right corner of this tab.

![Inventory tab with the Add new Pioreactor button highlighted](/img/user-guide/03-extending-your-pioreactor/01-create-cluster/inventory-add-pioreactor.png)

In the popup, add the name of your worker and click "Add Pioreactor".

![Add Pioreactor modal with hostname and Add Pioreactor button highlighted](/img/user-guide/03-extending-your-pioreactor/01-create-cluster/inventory-add-modal.png)

Once a new Pioreactor is added, you may need to refresh the page to see the new worker in the cluster.

This Inventory tab will display metadata pertaining to each of your Pioreactors. You can use this page to identify a Pioreactor (causes the blue LED on the HAT to blink), unassign a Pioreactor from any experiment, reboot a Pioreactor, or remove it from your cluster. This page also provides a summary of which Pioreactors are assigned to which experiment, as shown in the image below.

![Inventory card with action buttons highlighted](/img/user-guide/03-extending-your-pioreactor/01-create-cluster/inventory-actions.png)


#### From the command line with an ipv4 address

Sometimes, you need to pass in an ipv4 instead of discovering a worker via it's hostname. To do this, SSH into your leader and run:
```
pio workers add <hostname> -a <ipv4>
```

### Active and inactive

Workers can be *active* (available for running activities), or inactive. Inactive Pioreactors can still be assigned to experiments, but won't respond to commands to run activities or participate in experiment profiles. Inactive is a useful tool for taking a Pioreactor temporarily out of an experiment or cluster.

Turning a worker to inactive will halt all its activities.


### Possible cluster topologies

A cluster can be made up of a single Pioreactor, or can be scaled to as many Pioreactors as you have. This gives us a few different possible topologies of what your cluster of Pioreactor(s) might look like.

#### Single Pioreactor

The simplest topology is when you have a single Pioreactor, and by default it is both the leader and the only worker.

<img src="/img/user-guide/03-extending-your-pioreactor/01-cluster-management/01-create-cluster/single_pioreactor_cluster.png" width="335" style={{margin: "auto", display:"block"}}/>


#### Cluster, and leader is a worker

When you have multiple Pioreactors, you can nominate one to be the leader, and retain it as a worker, too:

![leader is also a worker in the cluster](/img/user-guide/03-extending-your-pioreactor/01-create-cluster/leader_as_worker_cluster.png)


#### Cluster, and leader is _not_ a worker

You can also choose not to have the leader be a worker. This is useful if you have a spare Raspberry Pi without the Pioreactor hardware, or the number of Pioreactors grows large and you wish to keep one out of the inventory to focus on being a leader only. We provide custom images for this [here](/user-guide/software-set-up#id-like-to-have-the-leader-not-be-a-worker-and-only-a-standalone-leader-can-i-do-that).

![leader not worker](/img/user-guide/03-extending-your-pioreactor/01-create-cluster/leader_cluster.png)


### Common questions


#### Can I change the name of a _worker_?

Yes, so long as that worker isn't the leader. Note: this doesn't change historical data.

1. Remove the worker from your cluster on the Inventory page.
2. SSH into the worker (it should still be on your network, even if not part of the cluster).
3. Run `sudo hostnamectl set-hostname <new-worker-name> && sudo reboot`
4. After a moment, the worker will turn back on with the new name. You can then use the Inventory page to add the worker again.

#### Can I change the name of a _leader_?

This is more difficult, and our suggestion is to restart the cluster.

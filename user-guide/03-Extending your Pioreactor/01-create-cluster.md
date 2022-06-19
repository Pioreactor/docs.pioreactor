---
title: Creating a Pioreactor cluster
slug: /create-cluster
---

Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, a Pioreactor needs to be assigned as a _leader_. The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware.

A leader will communicate and control all the _workers_ (non-leader Pioreactors) in the _inventory_. The inventory is a list of workers in your cluster, defined in the section `cluster.inventory` in the `config.ini`.

![](https://user-images.githubusercontent.com/884032/103158311-5316e380-478a-11eb-9425-6bb0df079d58.png)


Workers can be *active* (available for running activities and housing cultures), or inactive. This is set with `1` or `0` respectively in the `cluster.inventory` section.

When you want to remove a Pioreactor from your cluster, you can remove it from the list in available inventory in `cluster.inventory` section in `config.ini`.


### Possible cluster topologies

A cluster can be made up of a single Pioreactor, or can be scaled to as many Pioreactors as you have. This gives us a few different possible topologies of what your cluster of Pioreactor(s) might look like.

1.  The simplest topology is when you have a single Pioreactor, and so the leader is the only worker.

<img src="/img/user-guide/single_pioreactor_cluster.png" width="335" style={{margin: "auto", display:"block"}}/>



2\.  When you have multiple Pioreactors, you can nominate one to be the leader node, and retain it as a worker, too:

![leader is also a worker in the cluster](/img/user-guide/leader_as_worker_cluster.png)

3\.  You can also choose not to have the leader be a worker. This is useful if you have a spare Raspberry Pi without the Pioreactor hardware, or the number of Pioreactors grows large and you wish to keep one out of the inventory to focus on being a leader only.

![leader not worker](/img/user-guide/leader_cluster.png)

### How to edit roles

To tell the cluster which computer is the leader, you edit the `config.ini`'s `leader_hostname` section (under `cluster.topology`):

![where to edit the leader](https://user-images.githubusercontent.com/884032/103158348-b43eb700-478a-11eb-80d9-883458107f31.png)

Inventory is assigned in `config.ini` under `cluster.inventory`:

![](https://user-images.githubusercontent.com/884032/103158311-5316e380-478a-11eb-9425-6bb0df079d58.png)

### Adding new workers

See the instructions [here](/user-guide/software-set-up#adding-workers-to-your-cluster) to add new workers to your cluster.
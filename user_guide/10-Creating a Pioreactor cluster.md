# Creating a Pioreactor cluster

Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, some Pioreactor needs to be assigned as a _leader_. The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware.

A leader will communicate and control the all _workers_ (non-leader Pioreactors) in the _inventory_. The inventory is a list, defined in `config.ini`, of available workers. For example, when you want to remove a Pioreactor from your cluster temporarily, you can disable it as part of your available inventory in `config.ini`.

![](https://user-images.githubusercontent.com/884032/103158311-5316e380-478a-11eb-9425-6bb0df079d58.png)

For solo Pioreactors, the leader is also the (only) worker. When used in concert with others, a leader can be assigned (and need not be a worker).

### Possible cluster topologies

This gives us a few different possible topologies of what your cluster of Pioreactor(s) might look like.

1.  The simplest topology is when you have a single Pioreactor, and so the leader is the only worker.

![single pioreactor](https://user-images.githubusercontent.com/884032/103158118-69bc3b00-4788-11eb-8a32-a5580896a3a9.png)

1.  When you have multiple Pioreactors, you can nominate one to be the leader node, and retain it as a worker, too:

![leader and worker](https://user-images.githubusercontent.com/884032/103158257-c0764480-4789-11eb-8c83-6fb87f807a49.png)

1.  You can also choose not to have the leader be a worker. This is useful if you have a spare Raspberry Pi without the Pioreactor hardware, or the number of Pioreactors grows large and you wish to keep one out of the worker inventory.

![leader not worker](https://user-images.githubusercontent.com/884032/103158281-eac80200-4789-11eb-9acc-4fc680d180b9.png)

### How to edit roles

To tell the cluster which computer is the leader, you edit the `config.ini`'s `leader_hostname` section (under `network.topology`):

![where to edit the leader](https://user-images.githubusercontent.com/884032/103158348-b43eb700-478a-11eb-80d9-883458107f31.png)

Inventory is assigned in `config.ini` under `network.inventory`:

![](https://user-images.githubusercontent.com/884032/103158311-5316e380-478a-11eb-9425-6bb0df079d58.png)

### Adding new workers

See the instructions [here](/user_guide/Raspberry%20Pi%20set%20up%20and%20software%20installation#adding-workers-to-your-cluster) to add new workers to your cluster.
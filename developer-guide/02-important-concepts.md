---
title: Important concepts
slug: /important-concepts
---

### An initial mental model of Pioreactor software

The Pioreactor software works as follows:

1. Different jobs, like stirring, OD reading, dosing, etc. are controlled by separate Python objects. Some jobs will passively listen for events from other jobs, and change their behavior in response, for example, dosing automations listen to OD readings, and may respond by dosing (or not dosing).

2. The main "control plane" for the Pioreactor software is the command line interface, `pio`. For example, when the user starts a activity from the UI, the web server will run `pio run <some activity> --arguments`, which launches a Python process that will instantiate the object the controls the activity.

3. Because each activity is a separate Python process, we can modify an activity before running it by changing files on the filesystem.


### Cluster topology

One of the Raspberry Pi's is assigned as the "leader", and this hosts most of the services: web server, MQTT broker, database, etc. It also sends commands to any "workers". Together, the leader and all the workers are called a "cluster". See more information about clusters [here](/user-guide/create-cluster).


### Networking

The Raspberry Pis communicate through the local network (in more advanced cases, this network is hosted on the leader).

### MQTT

MQTT is message-broker system that the Pioreactor uses to communicate between Pioreactors and between processes. Think of it as an in-memory event log, and any software in the cluster can interact with it. The leader Pioreactor hosts the message-broker (using the software [Mosquitto](https://mosquitto.org/)), and worker Pioreactors (which are called MQTT _clients_) will read and write to it. On the leader's command line, you can view the event log with `pio mqtt`.

The Pioreactor UI also connects to MQTT, and uses it to push and pull live data from the activities in each Pioreactor (states of activities, settings, graphs, etc).


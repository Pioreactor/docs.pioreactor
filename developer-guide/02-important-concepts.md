# Some important details first

### Cluster topology

One of the Raspberry Pi's is assigned as the "leader", and this hosts most of the services: web server, MQTT broker, database, etc. It also sends commands to any "workers". Together, the leader and all the workers are called a "cluster". See more information about clusters [here](/user-guide/Extending%20your%20Pioreactor/Creating%20a%20Pioreactor%20cluster).

### Networking

The Raspberry Pis communicate through the local network (in more advanced cases, this network is hosted on the leader). Each RPi broadcasts its hostname through mDNS, and the leader also broadcasts an alias (default: \`pioreactor.local\`).

### MQTT

MQTT is messaging system that the Pioreactor uses to communicate between Pioreactors and between processes. Think of it as an in-memory event log, and any Pioreactor in the cluster can interact with it. The leader Pioreactor hosts the event log (using the software [Mosquitto](https://mosquitto.org/)), and worker Pioreactors (which are called MQTT _clients_) will read and write to it. On the leader's command line, you can view the event log with `pio mqtt`.




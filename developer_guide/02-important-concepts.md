# Some important details first

### Cluster topology

One of the Raspberry Pi's is assigned as the "leader", and this hosts most of the services: web server, MQTT broker, database, etc. It also sends commands to any "workers". Together, the leader and all the workers are called a "cluster". See more information about clusters [here](/user_guide/Creating%20a%20Pioreactor%20cluster).

### Networking

The Raspberry Pis communicate through the local network (in more advanced cases, this network is hosted on the leader). Each RPi broadcasts its hostname through mDNS, and the leader also broadcasts an alias (default: \`pioreactor.local\`).

### MQTT

TODO!



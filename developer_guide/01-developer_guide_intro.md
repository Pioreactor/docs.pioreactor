# Start here

### Topology

One of the Raspberry Pi's is assigned as the "leader", and this hosts most of the services: web server, MQTT broker, database, etc. It also sends commands to any "workers". Together, the leader and all the workers are called a "cluster". See more information about clusters [here](/user_guide/Creating%20a%20Pioreactor%20cluster).

### Networking

The Raspberry Pis communicate through the local network (in more advanced cases, this network is hosted on one of the leader). Each RPi broadcasts its hostname through mDNS, and the leader also broadcasts an alias (default: \`pioreactor.local\`). The use of mDNS is fine if devices support it: currently Apple, Linux and Windows 10 products do.

The PioreactorUI is hosted on the leader and exposes port 80, hence users on the local network can view the website at \`pioreactor.local\`.

### Background Jobs

A background job (labelled activities in the web interface) is a Python process that controls some element of the Pioreactor. For example, the `stirring.py` background job controls whether the stirring should be turned on, how fast it should spin, and reports its state to the cluster leader. Communication between the job and the leader / user is through MQTT. Specifically, the job subscribes to the topic `pioreactor/<unit>/<experiment>/<job name>/<attribute>/set`. For example, to change the stirring duty cycle to 50 on `unit1`, we send a message to `pioreactor/unit1/my experiment/stirring/set/duty_cycle` with payload `50`. The job knows how to update it self. Similarly, to retrieve the current value of a job attribute (like `$state`), one can listen to the topic: `pioreactor/<unit>/<experiment>/<job name>/<attribute>`.

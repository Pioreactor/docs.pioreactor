# Temperature Automations

The heater in the Pioreactor wetware can be programmed to control the temperature of the vial in automated ways. Pioreactor is preprogrammed with the following temperature automations. In the below automations, values highlighted `like so` are configurable.

### Sleep

The sleep automation is the simplest automation: do not control the temperature in any way. Reading and logging of temperature will still occur.

### PID Stable

The PID Stable automation will try to maintain a `target temperature` using a feedback loop. You can select a `target temperature` (between ambient temperature and about 43℃), and the automation will vary the onboard heater to maintain that temperature in the vial.


How to change the temperature automation?
-----------------------------------------

In order to change the temperature automation, the _Temperature control_ activity must first be started. You can see this on the Pioreactor's Edit modal:

![](https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-04-14_at_9.11.47_AM.png?v=1618406009)

_Start the job if not already started_

![](https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-04-14_at_9.14.04_AM.png?v=1618406055)

Next, in the _Settings_ tab, under the heading _Temperature automation_, click on _Change temperature automation_:

![](https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-04-14_at_9.15.01_AM.png?v=1618406135)

From this model, you can start a new temperature automation with given settings.
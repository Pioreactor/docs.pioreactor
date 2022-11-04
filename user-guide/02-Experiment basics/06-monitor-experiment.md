---
title: Monitoring your experiment
slug: /monitor-experiment
---

Navigate to the _Overview_ page on the Pioreactor web interface. Here you can view live charts for growth rate, OD, normalized OD, and temperature. These overview graphs are used to monitor collected data during the experiment runtime.

:::note
Optical density can decrease early => growth rates can dip negative early on &#151 this is an artifact of turbidity measurements!
:::

## Changing settings

If you'd like to **change the settings** of your activities after you start, navigate back to the _Pioreactors_ tab. Under _Manage_ for a single Pioreactor or _Manage all Pioreactors_, click the _Settings_ tab.

![](/img/user-guide/manage_ui.png)

Here you can change the settings of your activities (such as temperature, RPM, and dosing volume) without pausing or stopping the activity.

![](/img/user-guide/settings.png)



## Event logs

**Recent event logs** are found along the right side of the main _Overview page_. These logs document any errors, processes, or updates for each Pioreactor. 

![](/img/user-guide/example-event-logs.png)

## Identifying Pioreactors in your cluster

To locate your Pioreactor, click _Identify_ on the _Pioreactors_ tab. This will cause the Pioreactor to blink blue light. 

You can also find your Pioreactor name by pressing the small white button on the Pioreactor. This causes a blue tag to come up on the interface:

![](/img/user-guide/blue-tag.png)

## Troubleshooting 

Keep an eye on the optical density graph in the _Overview_ page. Initially, you can expect the the OD to be relatively stable. The following are some common issues: 

### Gradual increase in noise in OD 

![](/img/user-guide/bubble-noise.png)

This type of noise is typically caused by bubbling in the media due to metabolism. Noise gradually gets worse as the culture grows, where more metabolism leads to more CO2 bubbles. Thus, you would notice noise build up gradually as the culture becomes larger. To reduce the noise made by bubbles, we recommend allowing more airflow by **raising the tubing** enough so they **aren't submerged in your media**.

### Initial noise in OD 

![](/img/user-guide/forgot-stirbar.png)

For variations in OD at the beginning, make sure that your **stirbar is in the vial!** This is a common mistake we experienced after several experiments. 

### Random spikes in OD

![](/img/user-guide/floaty-in-vial.png)

**Random, large spikes in OD readings** are indicative of **solid debris in your vial**. Remove the vial and inspect the media for any debris. You may need to remake your vials and start over. Be sure to thoroughly wash and autoclave your vials and rinse any pumps (if being used). 

If clumps are to be expected (and unavoidable), you can **increase your stirring RPM** if allowed in your experiment protocol. This will cause larger clumps to aggregate in the center of the vial, due to a mini "vortex" formed by stirring. 

### Temperature fluctuations 

If your target temperature is **close to room temperature**, it can be subject to **fluctuations based on changes in room temperature.** For example, we set our target to 26 degrees C, and worked in a room with no AC: 

![](/img/user-guide/warming-room.png)

Each Pioreactor had an increase in temperature since the target fell below ambient. Note that the leader unit Pioreactor in the cluster was more sensitive to increases in ambient temperature since it requires more processing power.

## Looking for further help? 

If none of these issues apply to your data, feel free to contact us at support@pioreactor.com or post to our [forums](https://forum.pioreactor.com/) for further assistance.
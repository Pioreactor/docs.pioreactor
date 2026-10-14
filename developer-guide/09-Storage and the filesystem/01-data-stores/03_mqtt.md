---
title: More about MQTT on the Pioreactor
slug: /mqtt
hide_table_of_contents: true
---

You can view the MQTT data using
```
pio mqtt
```

And to follow a specific topic, use:
```
pio mqtt -t "pioreactor/{unit}/{experiment}/..."
```


### How do you structure topics for MQTT?

We suggest using the following prefix:

```
pioreactor/{unit name or $broadcast}/{experiment name or $experiment}/...
```


### Bioreactor values and PWM duty cycles

Bioreactor topics use `pioreactor/<unit>/<experiment>/bioreactor/<variable>`. Their JSON payload contains the worker's event timestamp and the numeric value, for example:

```json
{"timestamp": "2026-10-14T12:00:00Z", "value": 14.0}
```

Read the `value` field when consuming these topics. In experiment profile expressions, use `${{ ::bioreactor:current_volume_ml.value }}` to read the current unit's volume.

PWM duty cycles use `pioreactor/<unit>/<experiment>/pwms/channel_dc`. The JSON payload is keyed by PWM channel in `channels`, with duty cycles expressed as percentages:

```json
{"timestamp": "2026-10-14T12:00:00Z", "channels": {"1": 50.0, "2": 0.0}}
```

The `pwms/channel_dc` topic replaces `pwms/dc`, whose keys were GPIO pins. Update plugins and scripts that consume the old topic. For the 26.11.0 upgrade, update the leader and all workers together, then reload browser tabs.

Jobs buffer up to 10,000 outgoing MQTT messages while the broker is unreachable, reducing lost readings during short network interruptions or leader reboots. This buffer is bounded and belongs to the running job; it is not a persistent archive.

### How do I publish data to MQTT?

1. If you're writing code for `Job`, you can simply use `Job`'s methods:

   ```python
       def some_method(self, ...):
           ...

           self.publish(f"pioreactor/{self.unit}/{self.experiment}/{self.job_name}/more/topics", payload)

   ```

2. If writing a script:

    ```python
    from pioreactor.pubsub import publish


    publish(f"pioreactor/{unit}/{experiment}/more/topics", payload)

    ```


### How do I subscribe to data on MQTT?

1. If you're writing code for `Job`, you can simply use `Job`'s methods:

   ```python
       def callback(self, msg):
           ...

       def some_method(self, ...):
           ...

           self.subscribe_and_callback(self.callback, f"pioreactor/{self.unit}/{self.experiment}/{self.job_name}/more/topics")

   ```

2. If writing a script:

    ```python
    from pioreactor.pubsub import subscribe, subscribe_and_callback

    ```

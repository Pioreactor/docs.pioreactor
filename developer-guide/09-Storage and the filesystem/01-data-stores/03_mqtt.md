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
pio mqtt -t "pioreactor/unit/experiment/..."
```


### How do you structure topics for MQTT?

We suggest using the following prefix:

```
pioreactor/{unit name or $broadcast}/{experiment name or $experiment}/...
```


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

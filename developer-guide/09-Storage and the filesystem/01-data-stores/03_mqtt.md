---
title: More about MQTT on the Pioreactor
slug: /mqtt
---

### How do you structure topics for MQTT?

We suggest using the following prefix:

```bash
pioreactor/{unit name or $broadcast}/{experiment name or $experiment}/ ...
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
from pioreactor.utils import publish


publish(f"pioreactor/{unit}/{experiment}/more/topics", payload)

```

---
title: More about local storage on the Pioreactor
slug: /local-storage
hide_table_of_contents: true
---

### How do I write and read from the local storage?

Here's an example:

```python
from pioreactor.utils import local_intermittent_storage, local_peristant_storage


with local_intermittent_storage("my_namespace") as cache:
    cache['key'] = "value"
    print(cache['key'])

    cache.get("retrieval_key")


with local_peristant_storage("my_other_namespace") as cache:
    cache['key'] = "value"
    print(cache['key'])

    assert cache.get("retrieval_key") is None


```

You can use `pio cache view <name>` to view the contents of `<name>`, and `pio cache purge <name> <key>` to clear contents.

### What's the difference between `local_intermittent_storage` and `local_peristent_storage`?

`local_intermittent_storage` is data that won't, or shouldn't, exist after a reboot. For example: the state of GPIO pins. At a hardware level, this is reset after each reboot, and so should data associated with it. 

Whereas `local_peristant_storage` is data that should exist between reboots. This is data like some calibration data, or OD blank data.
---
title: Automation events
slug: /events
hide_table_of_contents: true
---

The `execute` method attached to any automation can return either `None`, or an `AutomationEvent`. If the latter, the event will be published to MQTT as a published setting, i.e under the topic `pioreactor/<unit>/<experiment>/dosing_automation/latest_event`. This can be used by downstream jobs that want to know what events are occurring.

It may make more sense to look at a specific `execute`. This is from the builtin `Turbidostat` automation:

```python
class Turbidostat(DosingAutomationJob):
    ...

    def execute(self) -> events.DilutionEvent | None:
        latest_biomass = self.latest_biomass_value(
            self.resolved_biomass_signal,
            od_channel=self._od_channel,
        )

        if latest_biomass >= self.target_biomass:
            results = self.execute_io_action(
                media_ml=self.exchange_volume_ml,
                waste_ml=self.exchange_volume_ml,
            )
            return events.DilutionEvent(
                f"Latest biomass = {latest_biomass:.2f} >= target biomass = {self.target_biomass:.2f}; cycled {results['media_ml']:.2f} mL",
                {
                    "latest_biomass": latest_biomass,
                    "target_biomass": self.target_biomass,
                    "resolved_biomass_signal": self.resolved_biomass_signal,
                    "exchange_volume_ml": self.exchange_volume_ml,
                    "volume_actually_moved_ml": results["media_ml"],
                },
            )
        else:
            return
```


When `execute` runs, either a `DilutionEvent` or nothing is returned. All events take up two (optional) arguments: a message, and a dictionary of arbitrary data. In this case, we've included a small message of _why_ the dosing did or did not occur, and included some metadata about the optical densities.

After `execute` returns an event, it will be published to MQTT. For example:
```
pioreactor/unit/demo_exp/dosing_automation/latest_event   {"event_name":"DilutionEvent","message":"Latest biomass = 1.12 >= target biomass = 1.00; cycled 1.00 mL","data":{"latest_biomass":1.12,"target_biomass":1.0,"resolved_biomass_signal":"normalized_od","exchange_volume_ml":1.0,"volume_actually_moved_ml":1.0}}
```

This can be listed in other jobs, and acted on, if needed.

### Using events, and creating your own

Pioreactor ships with some default events. They are located in `pioreactor.automations.events`. Events are simple subclasses of `events.AutomationEvent`, so events behave and look the same, except for their name.

You can create custom automations, too:

```python
from pioreactor.automations.events import AutomationEvent

class MyExampleEvent(AutomationEvent):
    pass


class MyAutomation(...):
    ...

    def execute(self):
        ...
        event = MyExampleEvent("my message", {'some_data': 1.0})
        return event
```

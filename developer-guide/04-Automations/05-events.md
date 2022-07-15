---
title: Automation events
slug: /events
---

The `execute` method attached to any automation can return either `None`, or a `AutomationEvent`. If the latter, the event will be published to MQTT as a published setting, i.e under the topic `pioreactor/<unit>/<experiment>/dosing_automation/latest_event`. This can be used to downstream events that want to know about what events are occurring.

It may make more sense to look at a specific `execute`. This is from the builtin `Turbidostat` automation:

```python
class Turbidostat(DosingAutomationJob):
    ...

    def execute(self) -> Optional[events.DilutionEvent]:
        if self.latest_od >= self.target_od:
            self.execute_io_action(media_ml=self.volume, waste_ml=self.volume)
            return events.DilutionEvent(
                f"latest OD={self.latest_od:.2f} >= target OD={self.target_od:.2f}",
                {'latest_od': self.latest_od, 'target_od': self.target_od}
            )
        else:
            return
```


When `execute` runs, either a `DilutionEvent` or nothing is returned. All events take up two (optional) arguments: a message, and a dictionary of arbitrary data. In this case, we've included a small message of _why_ the dosing did or did not occur, and included some metadata about the optical densities.

After `execute` returns an event, it will be published to MQTT. For example:
```
pioreactor/unit/demo_exp/dosing_automation/latest_event   {"event_name":"NoEvent","message":"latest OD=0.98 < target OD=1.00","data":{"latest_od":0.98,"target_od":1.0}}
```

This can be listed in other jobs, and acted on, if needed.

### Using events, and creating your own

Pioreactor ships with some default events. They are located in `pioreactor.automation.events`. Events are simple subclass of `events.AutomationEvent`, so events behave and look the same, except for their name.

You can create custom automations, too:

```python
From pioreactor.automations.events import AutomationEvent

class ExampleEvent(AutomationEvent):
    pass


event = ExampleEvent("my message", {'some_data': 1.0})



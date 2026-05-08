---
title: Automations architecture
slug: /intro-automations
hide_table_of_contents: true
---

### Automations

Automations are specialized [background jobs](/developer-guide/intro-background-jobs) with a simplified interface for controlling some part of the Pioreactor. Whereas there is really only one way to control stirring in the Pioreactor (on, off, and constant), there are many ways to modify dosing to get different microbiological outcomes. Similarly with LEDs: there are many ways researchers want to control LEDs to change microorganisms. Same with temperature. For that reason, we've built an automation interface to make developing automations easier. You'll see an example of this simplified design when we build one in the next page.

Each automation now owns its execution strategy. A periodic automation, like a chemostat, can call `run_every(...)`. A measurement-triggered automation, like a turbidostat, can listen for MQTT readings and call `trigger_run_once_from_event(...)`. A schedule-boundary automation, like a light/dark cycle, can install its own one-shot timer. This keeps dosing, LED, and temperature base classes focused on their hardware-specific helpers instead of forcing every automation through the same `duration` loop.


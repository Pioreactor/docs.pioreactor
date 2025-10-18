---
title: Automations architecture
slug: /intro-automations
hide_table_of_contents: true
---

### Automations

Automations are specialized [background jobs](/developer-guide/intro-background-jobs) with a simplified interface for controlling some part of the Pioreactor. Whereas there is really only one way to control stirring in the Pioreactor (on, off, and constant), there are many ways to modify dosing to get different microbiological outcomes. Similarly with LEDs: there are many ways researchers want to control LEDs to change microorganisms. Same with temperature. For that reason, we've built an automation interface to make developing automations easier. You'll see an example of this simplified design when we build one in the next page.



---
title: LED automations
slug: /led-automations
hide_table_of_contents: true
---

LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors.


## Available LED automations


### Silent

**Requires:** None

The silent automation is the simplest automation: doing nothing. It does not schedule LED actions.

### Light/Dark cycle

**Requires:** up to 2 LEDs, in channels C and D.

This automation will turn the LEDs in channels C & D on and off on a predetermined schedule, specified by `light_duration_minutes` and `dark_duration_minutes`. The intensity of the LED is given by `light_intensity`. The LEDs start ON. The automation schedules each light/dark boundary directly, so there is no `duration` field.

The LEDs should go in pockets X2 and X3 on the Pioreactor.


:::tip

If using the Light/Dark cycle on an older installation that does not yet show these fields, you can add the settings to be displayed in the UI by editing the following file on your leader:

```
nano ~/.pioreactor/ui/automations/led/light_dark_cycle.yaml
```

And using the following field definitions:
```
  - key: light_intensity
    type: numeric
    unit: "%"
    label: Light ON intensity
    description: The intensity when light is ON.
  - key: light_duration_minutes
    type: numeric
    unit: min
    label: "Light ON for"
    description: How long should the light be ON for?
  - key: dark_duration_minutes
    type: numeric
    unit: min
    label: "Light OFF for"
    description: How long should the light be OFF for?
```

Save and exit, and refresh the UI.
:::

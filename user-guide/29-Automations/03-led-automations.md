---
title: LED automations
slug: /led-automations
---

LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors.

### Silent

**Requires:** None

The silent automation is the simplest automation: doing nothing. The automation will still "wake up" every `duration` minutes, but does nothing.

### Light/Dark cycle

**Requires:** up to 2 LEDs, in channels C and D.

This automation will turn the LEDs in channels C & D on and off on a predetermined scheduale, specified by `light_duration_minutes` and `dark_duration_minutes`. The intensity of the LED is given by `light_intensity`. The LEDs start ON. Note: `duration` is permanently set to be 1 minute.

The LEDs should go in pockets X2 and X3 on the Pioreactor.


:::tip

If using the Light/Dark cycle, you can add the settings to be displayed in the UI by editing the following file on your leader:

```
nano /var/www/pioreactorui/contrib/jobs/06_led_automation.yaml
```

And adding the following to the bottom of that file:
```
  - key: light_intensity
    type: numeric
    display: true
    unit: "%"
    label: Light intensity
    description: The light intensity when light is ON.
  - key: light_duration_minutes
    type: numeric
    display: true
    unit: m
    label: "Light ON for"
  - key: dark_duration_minutes
    type: numeric
    display: true
    unit: m
    label: "Light OFF for"
```

Save and exit, and refresh the UI.
:::

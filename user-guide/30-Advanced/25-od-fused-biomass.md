---
title: Fused OD biomass (XR)
sidebar_label: Fused OD (XR)
description: Learn how the od_fused biomass signal combines XR multi-angle sensors into one robust estimate.
slug: /od-fused-biomass
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

The `od_fused` biomass signal is a fused optical density estimate produced from the 45°, 90°, and 135° OD sensors on Pioreactor XR. It is designed to stay informative across a wide range of turbidity without you manually switching between angles.

:::note
`od_fused` is available only on Pioreactor XR models.
:::

## Why multiple angles help

Scattering changes with angle and concentration. Each angle has a different sensitivity range, which means the most informative sensor can change as turbidity increases. The figure below shows how the three angles respond across a concentration sweep.

![OD sensitivity by angle across a yeast concentration sweep.](/img/user-guide/30-advanced/25-od-fused-biomass/od-angle-sensitivity.jpg)

In practice, the 135° channel is more sensitive at low-to-mid turbidity, the 45° channel becomes more informative at higher turbidity, and the 90° channel tends to sit in between. The fusion model uses all three so it can stay reliable across the full range.

## How the fusion model works (high level)

The fusion model treats the triplet of angle readings as a signature for biomass. It fits a curve and variance model for each angle using your standards, then estimates the most likely concentration for each observed triplet. Regions that are flat or noisy contribute less to the estimate, so the model naturally downweights weak signal regimes instead of relying on a single angle.

## Create a fused estimator

In the UI, this shows up as **Fusion OD using standards** in **Protocols**.

:::note
Fusion calibration requires XR photodiodes configured for 45°, 90°, and 135° and a fixed (numeric) IR LED intensity value.
:::

1. Prepare at least four OD600 standards in Pioreactor vials (no blank required).
2. Open **Protocols** and start **Fusion OD using standards**.
3. Follow the steps to record each standard.
4. When the protocol completes, a fused estimator is saved.
5. Open **Estimators** and set the new estimator active for `od_fused`.

The protocol fits in log-space across the three angles and stores a reusable estimator so future experiments can publish `od_fused` automatically.

## Use `od_fused` as the biomass signal

When **OD reading** is running and an `od_fused` estimator is active, the fused signal is published alongside the standard OD channels. To use it in automations, select `od_fused` wherever a `biomass_signal` is accepted (for example in a **Turbidostat** automation or **Experiment profiles**).

Example experiment profile snippet:

```yaml
jobs:
  dosing_automation:
    actions:
      - type: start
        options:
          automation_name: turbidostat
          target_biomass: 2.0
          biomass_signal: od_fused
```

## Related documentation

- [Estimators](/user-guide/estimators)
- [Protocols](/user-guide/protocols)
- [Standard curves for OD600 readings](/user-guide/calibrate-od600)

---
title: Estimators
slug: /estimators
sidebar_label: Estimators
description: Learn how Pioreactor estimators turn raw sensor signals into derived measurements.
sidebar_class_name: sidebar-item--updated
hide_table_of_contents: true
---

Estimators turn raw sensor signals into derived measurements that are more useful for experiments. They are similar to calibrations in lifecycle (created through a protocol, saved to disk, optionally set active), but they solve a different problem: they combine or transform measurements from multiple sensors into a single estimate.

## When to use an estimator

Estimators are useful when you want:

- A derived signal that blends multiple sensors into one measurement.
- A method that can be re-run when optics, hardware, or media change, without replacing core calibrations.
- A stored, versioned artifact that the Pioreactor can reuse across experiments.

## Example: fused optical density

The `od_fused` estimator combines the 45°, 90°, and 135° optical density sensor readings into a single fused OD value. This estimator is created by the OD fusion protocols and saved to disk so future experiments can use the fused signal automatically.

## Where estimators live

Estimators are stored on each Pioreactor at:

`$DOT_PIOREACTOR/storage/estimators/<device>/<estimator_name>.yaml`

The active estimator for a device is tracked in local persistent storage. Estimators are not listed in the Calibrations UI or CLI, but they are visible in the Estimators page in the UI.

## Managing estimators in the UI

![Estimators page showing filters, table, and active toggle.](/img/user-guide/30-advanced/20-estimators/estimators.png)

Use the **Estimators** page to:

- Filter by Pioreactor or device.
- See which estimator is active for a device.
- Focus on active estimators only using the toggle.

## Related documentation

- [Calibrations](/user-guide/calibrations)
- [Protocols](/user-guide/protocols)
- [OD normalization and growth rate](/user-guide/od-normal-growth-rate)

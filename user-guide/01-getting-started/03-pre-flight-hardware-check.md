---
id: pre-flight-hardware-check
title: Hardware pre-flight check
sidebar_label: Hardware pre-flight check
slug: /pre-flight-hardware-check
description: Run a self-test and a stirring calibration before your first experiment.
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

Before your first experiment, let's do a quick hardware pre-flight. You'll complete two short checks:

1. Run a hardware self-test.
2. Create a stirring calibration.

Both steps are safe to repeat.

## Step 1: Run a self-test

This self-test catches wiring or hardware issues early, before you run your first culture.

1. Insert a **closed vial with water and a stir bar** into the Pioreactor.
2. Open the **Inventory** page in the UI.
3. Click **Self-test** on your Pioreactor card, then click **Start**.

![](/img/user-guide/02-experiment-basics/11-running-self-test/inventory-self-test-button.png)
![](/img/user-guide/02-experiment-basics/11-running-self-test/inventory-self-test-pre.png)

The Pioreactor will run a short series of checks and report back with passes and failures.

![](/img/user-guide/02-experiment-basics/11-running-self-test/inventory-self-test-running.png)

When the results arrive, you'll see a list of successes and failures:

![](/img/user-guide/02-experiment-basics/11-running-self-test/self_test_results.png)

:::info
The self-test is optional, but we **strongly recommend** running it after your initial setup. Even if a test fails, your Pioreactor may still be usable - it just helps you catch issues early.

Want details on each check and how to interpret failures? See [Self-test reference](/user-guide/self-test-reference).
:::


## Step 2: Create a stirring calibration

A stirring calibration helps the Pioreactor hit the RPM you ask for quickly.

Keep the same vial (water + stir bar) in place for this step.

1. Open the **Protocols** page in the UI.
2. Set **Pioreactor** to the unit you're calibrating, and **Device** to **stirring**.
3. Click **Run protocol** to begin the calibration.

![](/img/user-guide/01-getting-started/03-pre-flight-hardware-check/protocols-stirring-calibration-modal.png)

4. Let it finish - it takes about **1 minute**.

![](/img/user-guide/01-getting-started/03-pre-flight-hardware-check/protocols-stirring-calibration-complete.png)

When it's done, the calibration is saved automatically. If anything looks off, you can run the calibration again.

---

You're done with pre-flight checks. Next up: [set up your first experiment](/user-guide/prepare-vial-for-cultures).

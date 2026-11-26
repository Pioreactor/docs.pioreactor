---
title: Protocols
sidebar_label: Protocols
description: Use the Protocols page to run calibration workflows in the Pioreactor UI.
slug: /protocols
hide_table_of_contents: true
---

Protocols are step-by-step workflows for calibrations. Use the Protocols page in the UI to run a calibration protocol, enter the required metadata, and follow the guided prompts.

![Protocols page in the Pioreactor UI](/img/user-guide/03-extending-your-pioreactor/03-protocols/protocols.png)

## Run a calibration protocol

1. Open **Protocols** from the left navigation.
2. Choose the protocol that matches your calibration goal.
3. Enter a clear name and any metadata requested by the flow.
4. Follow the on-screen steps to collect measurements.
5. At the review step, check the measurements and the fitted curve or fit summary. Where the protocol allows it, correct entered values or uncheck measurements to exclude them. Use **Recalculate curve** when shown to preview the fit before saving.
6. Save the calibration and set it active if needed.

![Pump calibration review with editable volumes, the calculated flow rate, and the Recalculate curve and Save calibration buttons](/img/user-guide/03-extending-your-pioreactor/03-protocols/calibration-review.png)

Review is available for OD600 standards, duration-based pump, DC-based stirring, and fusion OD protocols. Stirring calibrations run on all Pioreactors at once keep every reading; CLI calibrations save as before.

The available protocols depend on connected hardware and the calibration type you select. For optical density calibrations, see [Standard curves for OD600 readings](/user-guide/calibrate-od600).

---
title: Adding a new calibration type
slug: /adding-calibration-type
---

Calibrations went through a major rewrite in the 25.1.x release of Pioreactor. The current design is much more adaptable and simple than the previous design. Let's discuss the key points of the current calibration design:

0. A _calibration_ relates two variables together. One of the variables is what we can vary (in theory), and the other quantity is the target.
1. The calibration relates the two via a _calibration curve_, which is just a mapping between the two variables.
1. The Pioreactor has many _devices_ that can be calibrated. For example, the OD system, media pump, waste pump, or stirring, can all be improved with a calibration being given. A device can have multiple calibrations, but only one can be _active_ at a time. The device looks for the _active_ calibration, and uses that in practice.
2. A _protocol_ can be used to create a calibration for a device. Devices could have multiple protocols that can create calibrations.
1. A calibration can be given to possible multiple devices. Example: the same calibration can be used for waste and media pumps.

In practice, calibrations are stored as YAML files on the Pioreactor, in `~/.pioreactor/storage/calibrations` , divided into directories by the associated device. By keeping the calibrations as files (instead of in a database) makes moving, sharing, and editing calibrations really easy.

### CLI tools

There is a useful CLI available to manage calibrations, too: `pio calibrations --help`.

## Creating a new device

Create a new device is easy: just add a new folder to `~/.pioreactor/storage/calibrations` with the device name. This device name is used elsewhere, so keep it simple and easy to use.

For example, let's create a pH device, named `ph`. SSH into your Pioreactor and run
```
mkdir ~/.pioreactor/storage/calibrations/ph
chown pioreactor:www-data ~/.pioreactor/storage/calibrations/ph
```

The `chown` is required so that the webserver can access that folder to read from it.


## Creating a new calibration type

A device can be calibrated by different _types_ of calibrations. For example, you many want to relate the volume that pumps move to the duration the pump is ON for, *or* relate the volume to the amount of power applied in 1 second interval. These are different calibration _types_. To create a new calibration type, you need to define its unique schema.

Continuing our pH example, the calibration type for it might look like:

```python
from pioreactor.structs import CalibrationBase # see this class for the full list of fields

class PHCalibration(CalibrationBase, kw_only=True, tag="ph"):
    x: str = "pH"       # required
    y: str = "Voltage"  # required

    # add some optional metadata fields
    buffer_solution: t.Literal["4.01", "7.00", "10.01"]
    electrode_type: str

    # not required, but helpful
    def voltage_to_ph(self, voltage: float) -> float:
        return self.y_to_x(voltage)

    def ph_to_voltage(self, ph: float) -> float:
        return self.x_to_y(ph)
```

The `predict` and `ipredict` functions are used to convert between the two variables. The `i` in `ipredict` stands for "inverse".



## (Optional) Creating a new protocol for an existing device

If you want to add a custom script to create a calibration on the Pioreactor, you can do that by creating a new protocol.


Define a `CalibrationProtocol` subclass that will hold metadata for your protocol. It should have a `run` method that returns a calibration (a subclass of `CalibrationBase` - see above).

```python
from pioreactor.calibration import CalibrationProtocol
from pioreactor.utils.timing import current_utc_datetime

class BufferBasedPHProtocol(CalibrationProtocol):
    target_device = "ph"
    protocol_name = "buffer_based"
    description = "Calibrate the pH sensor using buffer solutions"

    def run(self, target_device: str) -> PHCalibration:
        return run_ph_calibration()


def run_ph_calibration() -> PHCalibration:
    # run the calibration, look at other calibration examples to re use code.
    ...

    return PHCalibration(
        calibration_name="ph_calibration",
        calibrated_on_pioreactor_unit="unit1",
        created_at=current_utc_datetime(),
        curve_data_=[2, 3, 5],
        curve_type="poly",
        x="Voltage",
        y="pH",
        recorded_data={"x": [0.1, 0.2, 0.3], "y": [1.0, 2.0, 3.0]},
        buffer_solution="10.01",
        electrode_type="glass"
    )
```


## Adding it to the plugins folder

You can add your code to the `~/.pioreactor/plugins` folder on the Pioreactor, it will auto-magically populate the CLI
and UI. To complete our pH example, add the following to a new Python file in the `~/.pioreactor/plugins` folder:

```python
from pioreactor.calibration import CalibrationProtocol
from pioreactor.structs import CalibrationBase
from pioreactor.utils.timing import current_utc_datetime

class PHCalibration(CalibrationBase, kw_only=True, tag="ph"):
    buffer_solution: t.Literal["4.01", "7.00", "10.01"]
    electrode_type: str
    x: str = "pH"
    y: str = "Voltage"

    def voltage_to_ph(self, voltage: float) -> float:
        return self.y_to_x(voltage)

    def ph_to_voltage(self, ph: float) -> float:
        return self.x_to_y(ph)

class BufferBasedPHProtocol(CalibrationProtocol):
    target_device = "ph"
    protocol_name = "buffer_based"
    description = "Calibrate the pH sensor using buffer solutions"

    def run(self, target_device: str) -> PHCalibration:
        return run_ph_calibration()


def run_ph_calibration() -> PHCalibration:
    # run the calibration
    ...

    return PHCalibration(
        calibration_name="ph_calibration",
        calibrated_on_pioreactor_unit="unit1",
        created_at=current_utc_datetime(),
        curve_data_=[2, 3, 5],
        curve_type="poly",
        x="Voltage",
        y="pH",
        recorded_data={"x": [0.1, 0.2, 0.3], "y": [1.0, 2.0, 3.0]},
        buffer_solution="default",
        electrode_type="glass"
    )

```

And run it with:
```
pio calibrations run --device ph
```

## Tips

 - use the Python library `click` to create an interactive CLI for your calibration protocol.
 - the pair `(device, calibration_name)` must be unique. The final directory structure looks like `~/.pioreactor/storage/calibrations/<device>/<calibration_name>.yaml`
 - The `x` variable should be the independent variable - the variable that can (in theory) be set by you, and the response variable `y` follows. For example, in the default OD calibration, the independent variable is the OD, and the dependent variable is the Pioreactor's sensor's voltage. This is because we can vary the OD as we wish (add more culture...), and the Pioreactor's sensor will detect different values.
 - Another way to look at this is: "where does error exist"? Typically, there will be error "measurement" variable (voltage for OD calibration, RPM measurement for stirring calibration, etc.)


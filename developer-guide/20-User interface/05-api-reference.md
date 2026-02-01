---
title: API Reference (Leader /api)
slug: /api-reference
toc_max_heading_level: 2

---

## Conventions

- Only the leader Pioreactor has the `/api` endpoints exposed.
- Path parameters are shown inline in the endpoint URL.
- Most write actions are async and return `{unit, task_id, result_url_path}`; poll `/unit_api/task_results/{task_id}`.
- Request/response examples are the canonical shapes; omit optional fields you do not need.

## Get Models

Returns the list of supported Pioreactor models.

### Endpoint
`GET /api/models`

### Response

**Status:** `200 OK`

```json
{
  "models": [
    {
      "model_name": "pioreactor_20ml",
      "model_version": "1.5",
      "display_name": "Pioreactor 20 mL"
    }
  ]
}
```

## Stop All Jobs On Worker For Experiment

Stops all jobs for a worker within an experiment.

### Endpoint
`POST /api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}`

### Response

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Stop Specific Job On Unit

Stops a specific job on a unit within an experiment.

### Endpoint
`POST /api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`

### Response

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Run Job On Unit In Experiment

Runs a job on one or more units assigned to an experiment.

### Endpoint
`POST /api/units/{pioreactor_unit}/jobs/run/job_name/{job}/experiments/{experiment}`

### Request

#### Request Body
```json
{
  "options": {
    "target_rpm": "200"
  },
  "env": {
    "JOB_SOURCE": "user"
  },
  "args": ["--some-flag"],
  "config_overrides": [["stirring.config", "pwm_hz", "100"]]
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Jobs Running

Returns running jobs for a unit or the cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/jobs/running`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Blink Worker

Triggers a brief blink on a worker to confirm connectivity.

### Endpoint
`POST /api/workers/{pioreactor_unit}/blink`

### Response

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Update Job On Unit

Updates job settings for a running job via MQTT.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/jobs/update/job_name/{job}/experiments/{experiment}`

### Request

#### Request Body
```json
{
  "settings": {
    "target_rpm": "200"
  }
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Reboot Unit

Queues a reboot on a unit or cluster.

### Endpoint
`POST /api/units/{pioreactor_unit}/system/reboot`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Shutdown Unit

Queues a shutdown on a unit or cluster.

### Endpoint
`POST /api/units/{pioreactor_unit}/system/shutdown`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Clock Time

Returns the UTC clock time from a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/system/utc_clock`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Set Clock Time

Sets leader clock and syncs workers.

### Endpoint
`POST /api/system/utc_clock`

### Request

#### Request Body
```json
{
  "utc_clock_time": "2026-01-31T12:45:00Z"
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Recent Logs

Returns recent experiment logs across units.

### Endpoint
`GET /api/experiments/{experiment}/recent_logs`

### Response

**Status:** `200 OK`

```json
[
  {
    "timestamp": "2026-01-31T12:45:00.000Z",
    "level": "INFO",
    "pioreactor_unit": "pio01",
    "message": "Job started",
    "task": "stirring",
    "experiment": "Exp001"
  }
]
```

## Get Logs

Returns paginated logs across all experiments.

### Endpoint
`GET /api/logs`

### Response

**Status:** `200 OK`

```json
[
  {
    "timestamp": "2026-01-31T12:45:00.000Z",
    "level": "INFO",
    "pioreactor_unit": "pio01",
    "message": "Job started",
    "task": "stirring",
    "experiment": "Exp001"
  }
]
```

## Get Experiment Logs

Returns paginated logs for a single experiment.

### Endpoint
`GET /api/experiments/{experiment}/logs`

### Response

**Status:** `200 OK`

```json
[
  {
    "timestamp": "2026-01-31T12:45:00.000Z",
    "level": "INFO",
    "pioreactor_unit": "pio01",
    "message": "Job started",
    "task": "stirring",
    "experiment": "Exp001"
  }
]
```

## Get Recent Logs For Unit And Experiment

Returns recent logs for a specific unit within an experiment.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/recent_logs`

### Response

**Status:** `200 OK`

```json
[
  {
    "timestamp": "2026-01-31T12:45:00.000Z",
    "level": "INFO",
    "pioreactor_unit": "pio01",
    "message": "Job started",
    "task": "stirring",
    "experiment": "Exp001"
  }
]
```

## Get Logs For Unit And Experiment

Returns paginated logs for a unit within an experiment.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/logs`

### Response

**Status:** `200 OK`

```json
[
  {
    "timestamp": "2026-01-31T12:45:00.000Z",
    "level": "INFO",
    "pioreactor_unit": "pio01",
    "message": "Job started",
    "task": "stirring",
    "experiment": "Exp001"
  }
]
```

## Get System Logs For Unit

Returns paginated system logs for a unit.

### Endpoint
`GET /api/units/{pioreactor_unit}/system_logs`

### Response

**Status:** `200 OK`

```json
[
  {
    "timestamp": "2026-01-31T12:45:00.000Z",
    "level": "INFO",
    "pioreactor_unit": "pio01",
    "message": "System started",
    "task": "system",
    "experiment": "$system"
  }
]
```

## Get Logs For Unit

Returns paginated logs for a unit across experiments.

### Endpoint
`GET /api/units/{pioreactor_unit}/logs`

### Response

**Status:** `200 OK`

```json
[
  {
    "timestamp": "2026-01-31T12:45:00.000Z",
    "level": "INFO",
    "pioreactor_unit": "pio01",
    "message": "Job started",
    "task": "stirring",
    "experiment": "Exp001"
  }
]
```

## Publish New Log

Publishes a log entry via MQTT for a unit or experiment.

### Endpoint
`POST /api/workers/{pioreactor_unit}/experiments/{experiment}/logs`

### Request

#### Request Body
```json
{
  "message": "Started",
  "source": "ui",
  "source_": "ui",
  "level": "INFO",
  "timestamp": "2026-01-31T12:45:00.000Z",
  "task": "stirring"
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Get Growth Rates

Returns growth-rate time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/growth_rates`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.0123}]]
}
```

## Get Temperature Readings

Returns temperature time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/temperature_readings`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 37.1}]]
}
```

## Get OD Readings Filtered

Returns filtered OD time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings_filtered`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.1234567}]]
}
```

## Get OD Readings

Returns OD readings time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01-1"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.2345678}]]
}
```

## Get OD Readings Fused

Returns fused OD time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings_fused`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.2234567}]]
}
```

## Get Raw OD Readings

Returns raw OD time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/raw_od_readings`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01-1"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 1234.5}]]
}
```

## Get Fallback Time Series

Returns time series for any data source and column.

### Endpoint
`GET /api/experiments/{experiment}/time_series/{data_source}/{column}`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 1.23}]]
}
```

## Get Growth Rates Per Unit

Returns growth-rate time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/growth_rates`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.0123}]]
}
```

## Get Temperature Readings Per Unit

Returns temperature time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/temperature_readings`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 37.1}]]
}
```

## Get OD Readings Filtered Per Unit

Returns filtered OD time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_filtered`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.1234567}]]
}
```

## Get OD Readings Per Unit

Returns OD readings time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01-1"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.2345678}]]
}
```

## Get OD Readings Fused Per Unit

Returns fused OD time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_fused`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.2234567}]]
}
```

## Get Raw OD Readings Per Unit

Returns raw OD time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/raw_od_readings`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01-1"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 1234.5}]]
}
```

## Get Fallback Time Series Per Unit

Returns time series for any data source and column for a unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/{data_source}/{column}`

### Response

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 1.23}]]
}
```

## Get Media Rates

Returns recent media dosing rates per unit for an experiment.

### Endpoint
`GET /api/experiments/{experiment}/media_rates`

### Response

**Status:** `200 OK`

```json
{
  "pio01": {"mediaRate": 1.2, "altMediaRate": 0.4},
  "all": {"mediaRate": 1.2, "altMediaRate": 0.4}
}
```

## Get Calibration Protocols

Returns calibration protocols from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibration_protocols`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get All Calibrations

Returns calibrations from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get All Active Calibrations

Returns active calibrations from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/active_calibrations`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get All Active Estimators

Returns active estimators from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/active_estimators`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get All Estimators

Returns estimators from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get All Calibrations As Zip

Returns a ZIP of all calibration YAMLs from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/zipped_calibrations`

### Response

**Status:** `200 OK`

```json
{}
```

## Get Dot Pioreactor Zip

Returns a ZIP of `.pioreactor` from a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/zipped_dot_pioreactor`

### Response

**Status:** `200 OK`

```json
{}
```

## Import Dot Pioreactor Zip

Imports a `.pioreactor` ZIP to a specific unit.

### Endpoint
`POST /api/units/{pioreactor_unit}/import_zipped_dot_pioreactor`

### Request

#### Request Body
```json
{}
```

### Response

**Status:** `202 Accepted`

```json
{}
```

## Get Calibrations By Device

Returns calibrations for a device from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/{device}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Calibration

Returns a specific calibration from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/{device}/{cal_name}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Estimators By Device

Returns estimators for a device from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators/{device}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Estimator

Returns a specific estimator from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Create Calibration

Creates a calibration on one or more workers.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/{device}`

### Request

#### Request Body
```json
{
  "calibration_data": "yaml: ..."
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Start Calibration Session

Starts a calibration session on a specific worker.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions`

### Request

#### Request Body
```json
{
  "protocol_name": "od_calibration",
  "target_device": "od"
}
```

### Response

**Status:** `201 Created`

```json
{
  "session": {"session_id": "abc"},
  "step": {"step_id": "start"}
}
```

## Get Calibration Session

Fetches a calibration session from a worker.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}`

### Response

**Status:** `200 OK`

```json
{
  "session": {"session_id": "abc"},
  "step": {"step_id": "start"}
}
```

## Advance Calibration Session

Submits inputs to advance a calibration session on a worker.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/inputs`

### Request

#### Request Body
```json
{
  "inputs": {"volume_ml": 10}
}
```

### Response

**Status:** `200 OK`

```json
{
  "session": {"session_id": "abc"},
  "step": {"step_id": "next"}
}
```

## Abort Calibration Session

Aborts a calibration session on a worker.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/abort`

### Response

**Status:** `200 OK`

```json
{
  "session": {"session_id": "abc", "status": "aborted"},
  "step": null
}
```

## Set Active Calibration

Sets the active calibration for a device on workers.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/active_calibrations/{device}/{cal_name}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Set Active Estimator

Sets the active estimator for a device on workers.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/active_estimators/{device}/{estimator_name}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Remove Active Calibration

Clears the active calibration for a device on workers.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/active_calibrations/{device}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Remove Active Estimator

Clears the active estimator for a device on workers.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/active_estimators/{device}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Delete Calibration

Deletes a calibration on workers.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/calibrations/{device}/{cal_name}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Delete Estimator

Deletes an estimator on workers.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Plugins Installed

Returns installed plugins from a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/plugins/installed`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Install Plugin Across Cluster

Installs a plugin on a unit or cluster.

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/install`

### Request

#### Request Body
```json
{
  "options": {"source": "path-or-url"},
  "args": ["pioreactor-my-plugin"]
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Uninstall Plugin Across Cluster

Uninstalls a plugin on a unit or cluster.

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/uninstall`

### Request

#### Request Body
```json
{
  "args": ["pioreactor-my-plugin"]
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Capabilities

Returns capabilities for a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/capabilities`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Job Settings For Worker

Returns settings for a job on a worker within an experiment.

### Endpoint
`GET /api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/experiments/{experiment}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Job Setting For Worker

Returns a specific setting for a job on a worker within an experiment.

### Endpoint
`GET /api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/setting/{setting}/experiments/{experiment}`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get App Versions

Returns app version from a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/versions/app`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Upload File

Uploads a file to the server temp directory.

### Endpoint
`POST /api/system/upload`

### Request

#### Request Body
```json
{}
```

### Response

**Status:** `200 OK`

```json
{
  "message": "File successfully uploaded",
  "save_path": "/tmp/file.bin"
}
```

## Get Automation Contrib

Returns automation descriptors by type.

### Endpoint
`GET /api/contrib/automations/{automation_type}`

### Response

**Status:** `200 OK`

```json
[
  {
    "automation_name": "growth_rate_control",
    "display_name": "Growth Rate Control"
  }
]
```

## Get Job Contrib

Returns job descriptors for UI.

### Endpoint
`GET /api/contrib/jobs`

### Response

**Status:** `200 OK`

```json
[
  {
    "job_name": "stirring",
    "display_name": "Stirring"
  }
]
```

## Get Charts Contrib

Returns chart descriptors for UI.

### Endpoint
`GET /api/contrib/charts`

### Response

**Status:** `200 OK`

```json
[
  {
    "chart_key": "od_readings",
    "display_name": "OD Readings"
  }
]
```

## Update App Next Version

Triggers cluster update to the next version.

### Endpoint
`POST /api/system/update_next_version`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Update App From Archive

Triggers cluster update from a release archive.

### Endpoint
`POST /api/system/update_from_archive`

### Request

#### Request Body
```json
{
  "release_archive_location": "/path/to/release.zip",
  "units": ["pio01", "pio02"]
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Exportable Datasets

Returns exportable dataset descriptors.

### Endpoint
`GET /api/contrib/exportable_datasets`

### Response

**Status:** `200 OK`

```json
[
  {
    "dataset_name": "growth_rates",
    "table": "growth_rates"
  }
]
```

## Preview Exportable Dataset

Returns a preview of a dataset.

### Endpoint
`GET /api/contrib/exportable_datasets/{target_dataset}/preview`

### Response

**Status:** `200 OK`

```json
[
  {"column": "value"}
]
```

## Export Datasets

Exports datasets to a ZIP archive.

### Endpoint
`POST /api/contrib/exportable_datasets/export_datasets`

### Request

#### Request Body
```json
{
  "datasets": ["growth_rates"],
  "experiments": ["Exp001"],
  "partition_by_unit": false,
  "partition_by_experiment": false,
  "start_time": "2026-01-01T00:00:00Z",
  "end_time": "2026-01-31T00:00:00Z"
}
```

### Response

**Status:** `200 OK`

```json
{
  "result": true,
  "filename": "export_20260131120000.zip",
  "msg": "Finished"
}
```

## Get Experiments

Returns experiments list.

### Endpoint
`GET /api/experiments`

### Response

**Status:** `200 OK`

```json
[
  {
    "experiment": "Exp001",
    "created_at": "2026-01-31T12:00:00.000Z",
    "description": "Growth test",
    "delta_hours": 2
  }
]
```

## Create Experiment

Creates a new experiment.

### Endpoint
`POST /api/experiments`

### Request

#### Request Body
```json
{
  "experiment": "Exp001",
  "description": "Growth test",
  "mediaUsed": "LB",
  "organismUsed": "E. coli"
}
```

### Response

**Status:** `201 Created`

```json
{
  "status": "success"
}
```

## Delete Experiment

Deletes an experiment and stops its jobs.

### Endpoint
`DELETE /api/experiments/{experiment}`

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Latest Experiment

Returns the most recently created experiment.

### Endpoint
`GET /api/experiments/latest`

### Response

**Status:** `200 OK`

```json
{
  "experiment": "Exp001",
  "created_at": "2026-01-31T12:00:00.000Z",
  "description": "Growth test",
  "media_used": "LB",
  "organism_used": "E. coli",
  "delta_hours": 2
}
```

## Get Unit Labels

Returns unit labels for an experiment.

### Endpoint
`GET /api/experiments/{experiment}/unit_labels`

### Response

**Status:** `200 OK`

```json
{
  "pio01": "left",
  "pio02": "right"
}
```

## Upsert Unit Labels

Creates or updates a unit label for an experiment.

### Endpoint
`PUT /api/experiments/{experiment}/unit_labels`

### Request

#### Request Body
```json
{
  "unit": "pio01",
  "label": "left"
}
```

### Response

**Status:** `201 Created`

```json
{
  "status": "success"
}
```

## Get Historical Organisms

Returns previously used organism labels.

### Endpoint
`GET /api/historical_organisms`

### Response

**Status:** `200 OK`

```json
[
  {"key": "E. coli"}
]
```

## Get Historical Media

Returns previously used media labels.

### Endpoint
`GET /api/historical_media`

### Response

**Status:** `200 OK`

```json
[
  {"key": "LB"}
]
```

## Update Experiment

Updates experiment metadata.

### Endpoint
`PATCH /api/experiments/{experiment}`

### Request

#### Request Body
```json
{
  "description": "Updated description"
}
```

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Experiment

Returns a single experiment.

### Endpoint
`GET /api/experiments/{experiment}`

### Response

**Status:** `200 OK`

```json
{
  "experiment": "Exp001",
  "created_at": "2026-01-31T12:00:00.000Z",
  "description": "Growth test",
  "delta_hours": 2
}
```

## Get Configuration For Unit

Returns merged config.ini for one or more units.

### Endpoint
`GET /api/units/{pioreactor_unit}/configuration`

### Response

**Status:** `200 OK`

```json
{
  "pio01": {
    "cluster.topology": {"leader_hostname": "leader"}
  }
}
```

## Get Config File

Returns a specific config file contents.

### Endpoint
`GET /api/configs/{filename}`

### Response

**Status:** `200 OK`

```json
{}
```

## Get Configs

Returns available config filenames.

### Endpoint
`GET /api/configs`

### Response

**Status:** `200 OK`

```json
[
  "config.ini",
  "config_pio01.ini"
]
```

## Update Config

Validates and writes a config file then syncs units.

### Endpoint
`PATCH /api/configs/{filename}`

### Request

#### Request Body
```json
{
  "code": "[section]\nkey=value\n"
}
```

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Config History

Returns stored config history for a file.

### Endpoint
`GET /api/configs/{filename}/history`

### Response

**Status:** `200 OK`

```json
[
  {"filename": "config.ini", "timestamp": "2026-01-31T12:00:00.000Z", "data": "..."}
]
```

## Is Local Access Point Active

Returns whether local access point flag is present.

### Endpoint
`GET /api/is_local_access_point_active`

### Response

**Status:** `200 OK`

```json
{
  "result": false
}
```

## Get Running Profiles

Returns running experiment_profile jobs for an experiment.

### Endpoint
`GET /api/experiment_profiles/running/experiments/{experiment}`

### Response

**Status:** `200 OK`

```json
[
  {
    "job_name": "experiment_profile",
    "experiment": "Exp001",
    "job_id": "job_abc",
    "settings": {"profile_name": "test"}
  }
]
```

## Get Recent Experiment Profiles

Returns recent experiment profile runs.

### Endpoint
`GET /api/experiments/{experiment}/experiment_profiles/recent`

### Response

**Status:** `200 OK`

```json
[
  {"started_at": "2026-01-31T12:00:00.000Z", "experiment_profile_name": "test", "experiment": "Exp001"}
]
```

## Create Experiment Profile

Creates a new experiment profile file.

### Endpoint
`POST /api/contrib/experiment_profiles`

### Request

#### Request Body
```json
{
  "filename": "profile.yaml",
  "body": "experiment_profile_name: test\n"
}
```

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Update Experiment Profile

Updates an experiment profile file.

### Endpoint
`PATCH /api/contrib/experiment_profiles`

### Request

#### Request Body
```json
{
  "filename": "profile.yaml",
  "body": "experiment_profile_name: test\n"
}
```

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Experiment Profiles

Returns experiment profile descriptors.

### Endpoint
`GET /api/contrib/experiment_profiles`

### Response

**Status:** `200 OK`

```json
[
  {"experimentProfile": {"experiment_profile_name": "test"}, "file": "profile.yaml", "fullpath": "/home/pi/.pioreactor/experiment_profiles/profile.yaml"}
]
```

## Get Experiment Profile

Returns a single experiment profile file.

### Endpoint
`GET /api/contrib/experiment_profiles/{filename}`

### Response

**Status:** `200 OK`

```json
{}
```

## Delete Experiment Profile

Deletes a profile file.

### Endpoint
`DELETE /api/contrib/experiment_profiles/{filename}`

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Units

Returns all units in the cluster.

### Endpoint
`GET /api/units`

### Response

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio01"}
]
```

## Get Workers

Returns all workers in the inventory.

### Endpoint
`GET /api/workers`

### Response

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio01", "added_at": "2026-01-31T12:00:00.000Z", "is_active": 1, "model_name": "pioreactor_20ml", "model_version": "1.5"}
]
```

## Discover Available Workers

Discovers network workers not already registered.

### Endpoint
`GET /api/workers/discover`

### Response

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio02"}
]
```

## Setup Worker

Runs setup process for a new worker.

### Endpoint
`POST /api/workers/setup`

### Request

#### Request Body
```json
{
  "name": "pio02",
  "version": "v1",
  "model": "pioreactor_20ml"
}
```

### Response

**Status:** `200 OK`

```json
{
  "msg": "Worker pio02 added successfully."
}
```

## Add Worker

Adds or updates a worker in inventory.

### Endpoint
`PUT /api/workers`

### Request

#### Request Body
```json
{
  "pioreactor_unit": "pio02",
  "model_name": "pioreactor_20ml",
  "model_version": "1.5"
}
```

### Response

**Status:** `201 Created`

```json
{
  "status": "success"
}
```

## Delete Worker

Removes a worker from inventory and stops its jobs.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}`

### Response

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Change Worker Status

Marks a worker active or inactive.

### Endpoint
`PUT /api/workers/{pioreactor_unit}/is_active`

### Request

#### Request Body
```json
{
  "is_active": 1
}
```

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Change Worker Model

Updates a worker's model metadata.

### Endpoint
`PUT /api/workers/{pioreactor_unit}/model`

### Request

#### Request Body
```json
{
  "model_name": "pioreactor_20ml",
  "model_version": "1.5"
}
```

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Worker Model And Metadata

Returns a worker's model and metadata.

### Endpoint
`GET /api/workers/{pioreactor_unit}/model`

### Response

**Status:** `200 OK`

```json
{
  "pioreactor_unit": "pio01",
  "model_name": "pioreactor_20ml",
  "model_version": "1.5",
  "display_name": "Pioreactor 20 mL"
}
```

## Get Worker

Returns a worker record.

### Endpoint
`GET /api/workers/{pioreactor_unit}`

### Response

**Status:** `200 OK`

```json
{
  "pioreactor_unit": "pio01",
  "added_at": "2026-01-31T12:00:00.000Z",
  "is_active": 1,
  "model_name": "pioreactor_20ml",
  "model_version": "1.5"
}
```

## Get Workers And Experiment Assignments

Returns workers with their current experiment assignment.

### Endpoint
`GET /api/workers/assignments`

### Response

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio01", "experiment": "Exp001", "is_active": 1}
]
```

## Get Active Experiments

Returns experiments that have at least one active worker.

### Endpoint
`GET /api/experiments/active`

### Response

**Status:** `200 OK`

```json
[
  {"experiment": "Exp001", "created_at": "2026-01-31T12:00:00.000Z", "description": "Growth test", "delta_hours": 2}
]
```

## Remove All Workers From All Experiments

Unassigns all workers from all experiments.

### Endpoint
`DELETE /api/workers/assignments`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Experiments Worker Assignments

Returns worker counts per experiment.

### Endpoint
`GET /api/experiments/assignment_count`

### Response

**Status:** `200 OK`

```json
[
  {"experiment": "Exp001", "worker_count": 2}
]
```

## Get Experiment Assignment For Worker

Returns the experiment assignment for a worker.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiment`

### Response

**Status:** `200 OK`

```json
{
  "pioreactor_unit": "pio01",
  "is_active": 1,
  "experiment": "Exp001",
  "model_name": "pioreactor_20ml",
  "model_version": "1.5"
}
```

## Get Workers For Experiment

Returns workers assigned to an experiment.

### Endpoint
`GET /api/experiments/{experiment}/workers`

### Response

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio01", "is_active": 1, "model_name": "pioreactor_20ml", "model_version": "1.5"}
]
```

## Get Historical Workers For Experiment

Returns historical worker assignments for an experiment.

### Endpoint
`GET /api/experiments/{experiment}/historical_worker_assignments`

### Response

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio01", "experiment": "Exp001", "is_currently_assigned_to_experiment": 1}
]
```

## Add Worker To Experiment

Assigns a worker to an experiment.

### Endpoint
`PUT /api/experiments/{experiment}/workers`

### Request

#### Request Body
```json
{
  "pioreactor_unit": "pio01"
}
```

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Remove Worker From Experiment

Unassigns a worker from an experiment.

### Endpoint
`DELETE /api/experiments/{experiment}/workers/{pioreactor_unit}`

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Remove Workers From Experiment

Unassigns all workers from an experiment.

### Endpoint
`DELETE /api/experiments/{experiment}/workers`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

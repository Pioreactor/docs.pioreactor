---
title: API Reference (Unit /unit_api)
slug: /unit-api-reference
toc_max_heading_level: 2
---

## Conventions

- All Pioreactors have the `/unit_api` endpoints exposed.
- Path parameters are shown inline in the endpoint URL.
- Async endpoints return `{unit, task_id, result_url_path}`; poll `/unit_api/task_results/{task_id}`.
- Request/response examples are the canonical shapes; omit optional fields you do not need.

## Health Check

Returns basic health status for a unit.

### Endpoint
`GET /unit_api/health`

### Response

**Status:** `200 OK`

```json
{
  "status": "ok",
  "pioreactor_unit": "pio01",
  "utc_time": "2026-01-31T12:45:00Z"
}
```

## Check Hardware For Model

Validates hardware compatibility for a model.

### Endpoint
`POST /unit_api/hardware/check`

### Request

#### Request Body
```json
{
  "model_name": "pioreactor_20ml",
  "model_version": "1.5"
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Task Results

Returns the status and result of a Huey task.

### Endpoint
`GET /unit_api/task_results/{task_id}`

### Response

**Status:** `200 OK`

```json
{
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123",
  "status": "complete",
  "result": {}
}
```

## Update Target

Runs a system update for a specific target.

### Endpoint
`POST /unit_api/system/update/{target}`

### Request

#### Request Body
```json
{
  "options": {},
  "args": []
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Update App

Runs a system update for the app.

### Endpoint
`POST /unit_api/system/update`

### Request

#### Request Body
```json
{
  "options": {},
  "args": []
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Reboot Unit

Queues a reboot of the unit.

### Endpoint
`POST /unit_api/system/reboot`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Shutdown Unit

Queues a shutdown of the unit.

### Endpoint
`POST /unit_api/system/shutdown`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Web Server Status

Returns leader web server status.

### Endpoint
`GET /unit_api/system/web_server/status`

### Response

**Status:** `200 OK`

```json
{
  "service": "lighttpd.service,huey.service",
  "state": "ready",
  "raw_status": "lighttpd.service=active, huey.service=active"
}
```

## Restart Web Server

Restarts the leader web server services.

### Endpoint
`POST /unit_api/system/web_server/restart`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Remove File

Deletes a file under the `.pioreactor` directory.

### Endpoint
`POST /unit_api/system/remove_file`

### Request

#### Request Body
```json
{
  "filepath": "storage/cache.txt"
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Clock Time

Returns current UTC timestamp from the unit.

### Endpoint
`GET /unit_api/system/utc_clock`

### Response

**Status:** `200 OK`

```json
{
  "status": "success",
  "clock_time": "2026-01-31T12:45:00Z"
}
```

## Set Clock Time

Sets the unit clock on leader or syncs via chrony on workers.

### Endpoint
`POST /unit_api/system/utc_clock`

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
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Directory Listing

Returns directory contents or file contents under `.pioreactor`.

### Endpoint
`GET /unit_api/system/path/{req_path}`

### Response

**Status:** `200 OK`

```json
{
  "current": "/home/pi/.pioreactor",
  "dirs": ["storage"],
  "files": ["config.ini"]
}
```

## Run Job

Runs a job on the unit.

### Endpoint
`POST /unit_api/jobs/run/job_name/{job}`

### Request

#### Request Body
```json
{
  "options": {"target_rpm": "200"},
  "env": {"EXPERIMENT": "Exp001"},
  "args": [],
  "config_overrides": []
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Stop All Jobs

Stops all jobs on the unit.

### Endpoint
`POST /unit_api/jobs/stop/all`

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Stop Jobs

Stops jobs matching filters.

### Endpoint
`POST /unit_api/jobs/stop`

### Request

#### Request Body
```json
{
  "job_name": "stirring",
  "experiment": "Exp001",
  "job_source": "user",
  "job_id": "job_abc"
}
```

### Response

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get Running Jobs For Experiment

Returns running jobs for an experiment.

### Endpoint
`GET /unit_api/jobs/running/experiments/{experiment}`

### Response

**Status:** `200 OK`

```json
[
  {"job_name": "stirring", "job_id": "job_abc", "experiment": "Exp001"}
]
```

## Get Running Jobs

Returns running jobs for the unit.

### Endpoint
`GET /unit_api/jobs/running`

### Response

**Status:** `200 OK`

```json
[
  {"job_name": "stirring", "job_id": "job_abc", "experiment": "Exp001"}
]
```

## Get Running Job

Returns running jobs filtered by name.

### Endpoint
`GET /unit_api/jobs/running/{job}`

### Response

**Status:** `200 OK`

```json
[
  {"job_name": "stirring", "job_id": "job_abc", "experiment": "Exp001"}
]
```

## Get Long Running Jobs

Returns running long-running jobs.

### Endpoint
`GET /unit_api/long_running_jobs/running`

### Response

**Status:** `200 OK`

```json
[
  {"job_name": "od_reading", "job_id": "job_abc"}
]
```

## Get Settings For Job

Returns settings for a running job.

### Endpoint
`GET /unit_api/jobs/settings/job_name/{job_name}`

### Response

**Status:** `200 OK`

```json
{
  "settings": {"target_rpm": "200"}
}
```

## Get Setting For Job

Returns a specific setting for a running job.

### Endpoint
`GET /unit_api/jobs/settings/job_name/{job_name}/setting/{setting}`

### Response

**Status:** `200 OK`

```json
{
  "target_rpm": "200"
}
```

## Update Job Settings

Not implemented for unit API.

### Endpoint
`PATCH /unit_api/jobs/settings/job_name/{job_name}`

### Response

**Status:** `503 Service Unavailable`

```json
{}
```

## Get Capabilities

Returns capabilities for this unit.

### Endpoint
`GET /unit_api/capabilities`

### Response

**Status:** `200 OK`

```json
{
  "jobs": [],
  "settings": []
}
```

## Get Installed Plugins

Returns installed plugins for the unit.

### Endpoint
`GET /unit_api/plugins/installed`

### Response

**Status:** `200 OK`

```json
[
  {"name": "pioreactor-my-plugin", "version": "0.1.0"}
]
```

## Get Plugin File

Returns the contents of a plugin file in `.pioreactor/plugins`.

### Endpoint
`GET /unit_api/plugins/installed/{filename}`

### Response

**Status:** `200 OK`

```json
{}
```

## Install Plugin

Installs a plugin on the unit.

### Endpoint
`POST /unit_api/plugins/install`

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
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Uninstall Plugin

Uninstalls a plugin from the unit.

### Endpoint
`POST /unit_api/plugins/uninstall`

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
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

## Get App Version

Returns the unit app version.

### Endpoint
`GET /unit_api/versions/app`

### Response

**Status:** `200 OK`

```json
{
  "version": "v1.0.0"
}
```

## Get Calibration Protocols

Returns calibration protocol descriptors.

### Endpoint
`GET /unit_api/calibration_protocols`

### Response

**Status:** `200 OK`

```json
[
  {"id": "od_protocol", "target_device": "od", "protocol_name": "od_protocol"}
]
```

## Create Calibration

Creates a calibration for a device.

### Endpoint
`POST /unit_api/calibrations/{device}`

### Request

#### Request Body
```json
{
  "calibration_data": "yaml: ..."
}
```

### Response

**Status:** `201 Created`

```json
{
  "msg": "Calibration created successfully.",
  "path": "/home/pi/.pioreactor/calibrations/od/cal_1.yaml"
}
```

## Delete Calibration

Deletes a calibration for a device.

### Endpoint
`DELETE /unit_api/calibrations/{device}/{calibration_name}`

### Response

**Status:** `200 OK`

```json
{
  "msg": "Calibration 'cal_1' for device 'od' deleted successfully."
}
```

## Get All Calibrations

Returns all calibrations by device.

### Endpoint
`GET /unit_api/calibrations`

### Response

**Status:** `200 OK`

```json
{
  "od": [
    {"calibration_name": "cal_1", "is_active": true, "pioreactor_unit": "pio01"}
  ]
}
```

## Get Active Calibrations

Returns active calibrations by device.

### Endpoint
`GET /unit_api/active_calibrations`

### Response

**Status:** `200 OK`

```json
{
  "od": {"calibration_name": "cal_1", "is_active": true, "pioreactor_unit": "pio01"}
}
```

## Get Active Estimators

Returns active estimators by device.

### Endpoint
`GET /unit_api/active_estimators`

### Response

**Status:** `200 OK`

```json
{
  "od": {"estimator_name": "est_1", "is_active": true, "pioreactor_unit": "pio01"}
}
```

## Get All Estimators

Returns all estimators by device.

### Endpoint
`GET /unit_api/estimators`

### Response

**Status:** `200 OK`

```json
{
  "od": [
    {"estimator_name": "est_1", "is_active": false, "pioreactor_unit": "pio01"}
  ]
}
```

## Get Calibrations Zip

Returns a ZIP of all calibration YAMLs.

### Endpoint
`GET /unit_api/zipped_calibrations`

### Response

**Status:** `200 OK`

```json
{}
```

## Get Dot Pioreactor Zip

Returns a ZIP of the `.pioreactor` directory.

### Endpoint
`GET /unit_api/zipped_dot_pioreactor`

### Response

**Status:** `200 OK`

```json
{}
```

## Import Dot Pioreactor Zip

Imports a `.pioreactor` ZIP to the unit.

### Endpoint
`POST /unit_api/import_zipped_dot_pioreactor`

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

Returns calibrations for a device.

### Endpoint
`GET /unit_api/calibrations/{device}`

### Response

**Status:** `200 OK`

```json
[
  {"calibration_name": "cal_1", "is_active": true, "pioreactor_unit": "pio01"}
]
```

## Get Calibration

Returns a specific calibration.

### Endpoint
`GET /unit_api/calibrations/{device}/{cal_name}`

### Response

**Status:** `200 OK`

```json
{
  "calibration_name": "cal_1",
  "is_active": true,
  "pioreactor_unit": "pio01"
}
```

## Get Estimators By Device

Returns estimators for a device.

### Endpoint
`GET /unit_api/estimators/{device}`

### Response

**Status:** `200 OK`

```json
[
  {"estimator_name": "est_1", "is_active": false, "pioreactor_unit": "pio01", "device": "od"}
]
```

## Get Estimator

Returns a specific estimator.

### Endpoint
`GET /unit_api/estimators/{device}/{estimator_name}`

### Response

**Status:** `200 OK`

```json
{
  "estimator_name": "est_1",
  "is_active": false,
  "pioreactor_unit": "pio01",
  "device": "od"
}
```

## Set Active Calibration

Sets a calibration as active for a device.

### Endpoint
`PATCH /unit_api/active_calibrations/{device}/{cal_name}`

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Remove Active Calibration

Removes active calibration for a device.

### Endpoint
`DELETE /unit_api/active_calibrations/{device}`

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Set Active Estimator

Sets an estimator as active for a device.

### Endpoint
`PATCH /unit_api/active_estimators/{device}/{estimator_name}`

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Remove Active Estimator

Removes active estimator for a device.

### Endpoint
`DELETE /unit_api/active_estimators/{device}`

### Response

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Delete Estimator

Deletes an estimator for a device.

### Endpoint
`DELETE /unit_api/estimators/{device}/{estimator_name}`

### Response

**Status:** `200 OK`

```json
{
  "msg": "Estimator 'est_1' for device 'od' deleted successfully."
}
```

## Start Calibration Session

Starts a calibration session on the unit.

### Endpoint
`POST /unit_api/calibrations/sessions`

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

Returns a calibration session from the unit.

### Endpoint
`GET /unit_api/calibrations/sessions/{session_id}`

### Response

**Status:** `200 OK`

```json
{
  "session": {"session_id": "abc"},
  "step": {"step_id": "start"}
}
```

## Advance Calibration Session

Advances a calibration session with inputs.

### Endpoint
`POST /unit_api/calibrations/sessions/{session_id}/inputs`

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

Aborts a calibration session.

### Endpoint
`POST /unit_api/calibrations/sessions/{session_id}/abort`

### Response

**Status:** `200 OK`

```json
{
  "session": {"session_id": "abc", "status": "aborted"},
  "step": null
}
```

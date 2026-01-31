---
title: API Reference (Unit /unit_api)
slug: /unit-api-reference
toc_max_heading_level: 2
---

## Health Check

Returns basic health status for a unit.

### Endpoint
`GET /unit_api/health`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "ok",
  "pioreactor_unit": "pio01",
  "utc_time": "2026-01-31T12:45:00Z"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Health status. |
| pioreactor_unit | string | No | Unit name. |
| utc_time | string | No | Current UTC timestamp. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| model_name | string | Yes | Model name. | must be registered |
| model_version | string | Yes | Model version. | must be registered |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | Missing model name or version. |

## Task Results

Returns the status and result of a Huey task.

### Endpoint
`GET /unit_api/task_results/{task_id}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| task_id | string | Yes | Huey task id. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123",
  "status": "complete",
  "result": {}
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path. |
| status | string | No | Task status. |
| result | object | Yes | Task result payload. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 202 | Pending | Task not completed. |
| 500 | Failed | Task failed or locked. |

## Update Target

Runs a system update for a specific target.

### Endpoint
`POST /unit_api/system/update/{target}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| target | string | Yes | Update target, currently `app`. |

#### Request Body
```json
{
  "options": {},
  "args": []
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| options | object | No | CLI options. | keys map to flags |
| args | array | No | Positional args. | strings |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| options | object | No | CLI options. | keys map to flags |
| args | array | No | Positional args. | strings |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Reboot Unit

Queues a reboot of the unit.

### Endpoint
`POST /unit_api/system/reboot`

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Shutdown Unit

Queues a shutdown of the unit.

### Endpoint
`POST /unit_api/system/shutdown`

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Web Server Status

Returns leader web server status.

### Endpoint
`GET /unit_api/system/web_server/status`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "service": "lighttpd.service,huey.service",
  "state": "ready",
  "raw_status": "lighttpd.service=active, huey.service=active"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| service | string | No | Service names. |
| state | string | No | `ready` or `disconnected`. |
| raw_status | string | No | Raw systemctl status. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 403 | Forbidden | Called on non-leader unit. |

## Restart Web Server

Restarts the leader web server services.

### Endpoint
`POST /unit_api/system/web_server/restart`

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| filepath | string | Yes | File path to remove. | must be under DOT_PIOREACTOR |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 403 | Forbidden | File system access disabled or path outside DOT_PIOREACTOR. |
| 400 | Invalid request | Missing filepath. |

## Get Clock Time

Returns current UTC timestamp from the unit.

### Endpoint
`GET /unit_api/system/utc_clock`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success",
  "clock_time": "2026-01-31T12:45:00Z"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Status string. |
| clock_time | string | No | UTC timestamp. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| utc_clock_time | string | Yes | UTC timestamp. | leader only |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Directory Listing

Returns directory contents or file contents under `.pioreactor`.

### Endpoint
`GET /unit_api/system/path/{req_path}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| req_path | string | Yes | Path under DOT_PIOREACTOR. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "current": "/home/pi/.pioreactor",
  "dirs": ["storage"],
  "files": ["config.ini"]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| current | string | No | Current directory path. |
| dirs | array | No | Directory names. |
| files | array | No | File names. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 403 | Forbidden | File system access disabled. |
| 404 | Not found | Path missing. |

### Notes

* If the path is a file, response is the file contents.

## Run Job

Runs a job on the unit.

### Endpoint
`POST /unit_api/jobs/run/job_name/{job}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job | string | Yes | Job name to run. |

#### Request Body
```json
{
  "options": {"target_rpm": "200"},
  "env": {"EXPERIMENT": "Exp001"},
  "args": [],
  "config_overrides": []
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| options | object | No | CLI options. | keys map to flags |
| env | object | No | Environment variables. | string values |
| args | array | No | Positional args. | strings |
| config_overrides | array | No | Config override tuples. | `[section, key, value]` |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 429 | Too many requests | Rate limit exceeded. |

## Stop All Jobs

Stops all jobs on the unit.

### Endpoint
`POST /unit_api/jobs/stop/all`

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| job_name | string | No | Job name filter. |  |
| experiment | string | No | Experiment filter. |  |
| job_source | string | No | Job source filter. |  |
| job_id | string | No | Job id filter. |  |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | No filters provided. |

## Get Running Jobs For Experiment

Returns running jobs for an experiment.

### Endpoint
`GET /unit_api/jobs/running/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"job_name": "stirring", "job_id": "job_abc", "experiment": "Exp001"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| job_name | string | No | Job name. |
| job_id | string | No | Job identifier. |
| experiment | string | No | Experiment name. |

## Get Running Jobs

Returns running jobs for the unit.

### Endpoint
`GET /unit_api/jobs/running`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"job_name": "stirring", "job_id": "job_abc", "experiment": "Exp001"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| job_name | string | No | Job name. |
| job_id | string | No | Job identifier. |
| experiment | string | No | Experiment name. |

## Get Running Job

Returns running jobs filtered by name.

### Endpoint
`GET /unit_api/jobs/running/{job}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job | string | Yes | Job name. |

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"job_name": "stirring", "job_id": "job_abc", "experiment": "Exp001"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| job_name | string | No | Job name. |
| job_id | string | No | Job identifier. |
| experiment | string | No | Experiment name. |

## Get Long Running Jobs

Returns running long-running jobs.

### Endpoint
`GET /unit_api/long_running_jobs/running`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"job_name": "od_reading", "job_id": "job_abc"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| job_name | string | No | Job name. |
| job_id | string | No | Job identifier. |

## Get Settings For Job

Returns settings for a running job.

### Endpoint
`GET /unit_api/jobs/settings/job_name/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "settings": {"target_rpm": "200"}
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| settings | object | No | Settings map. |

## Get Setting For Job

Returns a specific setting for a running job.

### Endpoint
`GET /unit_api/jobs/settings/job_name/{job_name}/setting/{setting}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |
| setting | string | Yes | Setting name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "target_rpm": "200"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| target_rpm | string | Yes | Setting value. |

## Update Job Settings

Not implemented for unit API.

### Endpoint
`PATCH /unit_api/jobs/settings/job_name/{job_name}`

### Response

#### Success

**Status:** `503 Service Unavailable`

```json
{}
```

## Get Capabilities

Returns capabilities for this unit.

### Endpoint
`GET /unit_api/capabilities`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "jobs": [],
  "settings": []
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| jobs | array | Yes | Job capability descriptors. |
| settings | array | Yes | Settings capability descriptors. |

## Get Installed Plugins

Returns installed plugins for the unit.

### Endpoint
`GET /unit_api/plugins/installed`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"name": "pioreactor-my-plugin", "version": "0.1.0"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| name | string | No | Plugin name. |
| version | string | Yes | Plugin version. |

## Get Plugin File

Returns the contents of a plugin file in `.pioreactor/plugins`.

### Endpoint
`GET /unit_api/plugins/installed/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Plugin filename ending in `.py`. |

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

### Notes

* Response is plain text Python source.

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| options | object | No | Installer options. | keys map to flags |
| args | array | Yes | Plugin name list. | length 1 recommended |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 403 | Forbidden | UI installs disabled. |
| 400 | Invalid request | Missing or multiple plugin args. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| args | array | Yes | Plugin name list. | length 1 |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "pio01",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Unit name. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get App Version

Returns the unit app version.

### Endpoint
`GET /unit_api/versions/app`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "version": "v1.0.0"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| version | string | No | App version string. |

## Get Calibration Protocols

Returns calibration protocol descriptors.

### Endpoint
`GET /unit_api/calibration_protocols`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"id": "od_protocol", "target_device": "od", "protocol_name": "od_protocol"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| id | string | No | Protocol id. |
| target_device | string | No | Device name. |
| protocol_name | string | No | Protocol name. |

## Create Calibration

Creates a calibration for a device.

### Endpoint
`POST /unit_api/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |

#### Request Body
```json
{
  "calibration_data": "yaml: ..."
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| calibration_data | string | Yes | YAML calibration payload. | valid calibration YAML |

### Response

#### Success

**Status:** `201 Created`

```json
{
  "msg": "Calibration created successfully.",
  "path": "/home/pi/.pioreactor/calibrations/od/cal_1.yaml"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| msg | string | No | Status message. |
| path | string | No | Saved path. |

## Delete Calibration

Deletes a calibration for a device.

### Endpoint
`DELETE /unit_api/calibrations/{device}/{calibration_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |
| calibration_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "msg": "Calibration 'cal_1' for device 'od' deleted successfully."
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| msg | string | No | Status message. |

## Get All Calibrations

Returns all calibrations by device.

### Endpoint
`GET /unit_api/calibrations`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "od": [
    {"calibration_name": "cal_1", "is_active": true, "pioreactor_unit": "pio01"}
  ]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| od | array | No | List of calibrations for device. |

## Get Active Calibrations

Returns active calibrations by device.

### Endpoint
`GET /unit_api/active_calibrations`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "od": {"calibration_name": "cal_1", "is_active": true, "pioreactor_unit": "pio01"}
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| od | object | No | Active calibration for device. |

## Get Active Estimators

Returns active estimators by device.

### Endpoint
`GET /unit_api/active_estimators`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "od": {"estimator_name": "est_1", "is_active": true, "pioreactor_unit": "pio01"}
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| od | object | No | Active estimator for device. |

## Get All Estimators

Returns all estimators by device.

### Endpoint
`GET /unit_api/estimators`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "od": [
    {"estimator_name": "est_1", "is_active": false, "pioreactor_unit": "pio01"}
  ]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| od | array | No | List of estimators for device. |

## Get Calibrations Zip

Returns a ZIP of all calibration YAMLs.

### Endpoint
`GET /unit_api/zipped_calibrations`

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

### Notes

* Response is `application/zip` content.

## Get Dot Pioreactor Zip

Returns a ZIP of the `.pioreactor` directory.

### Endpoint
`GET /unit_api/zipped_dot_pioreactor`

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

### Notes

* Response is `application/zip` content.

## Import Dot Pioreactor Zip

Imports a `.pioreactor` ZIP to the unit.

### Endpoint
`POST /unit_api/import_zipped_dot_pioreactor`

### Request

#### Request Body
```json
{}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| archive | file | Yes | Multipart ZIP file. | form-data field `archive` |

### Response

#### Success

**Status:** `202 Accepted`

```json
{}
```

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | Missing archive or invalid zip. |
| 403 | Forbidden | File system access disabled. |

## Get Calibrations By Device

Returns calibrations for a device.

### Endpoint
`GET /unit_api/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"calibration_name": "cal_1", "is_active": true, "pioreactor_unit": "pio01"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| calibration_name | string | No | Calibration name. |
| is_active | boolean | No | Active flag. |
| pioreactor_unit | string | No | Unit name. |

## Get Calibration

Returns a specific calibration.

### Endpoint
`GET /unit_api/calibrations/{device}/{cal_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |
| cal_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "calibration_name": "cal_1",
  "is_active": true,
  "pioreactor_unit": "pio01"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| calibration_name | string | No | Calibration name. |
| is_active | boolean | No | Active flag. |
| pioreactor_unit | string | No | Unit name. |

## Get Estimators By Device

Returns estimators for a device.

### Endpoint
`GET /unit_api/estimators/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"estimator_name": "est_1", "is_active": false, "pioreactor_unit": "pio01", "device": "od"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| estimator_name | string | No | Estimator name. |
| is_active | boolean | No | Active flag. |
| pioreactor_unit | string | No | Unit name. |
| device | string | No | Device name. |

## Get Estimator

Returns a specific estimator.

### Endpoint
`GET /unit_api/estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "estimator_name": "est_1",
  "is_active": false,
  "pioreactor_unit": "pio01",
  "device": "od"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| estimator_name | string | No | Estimator name. |
| is_active | boolean | No | Active flag. |
| pioreactor_unit | string | No | Unit name. |
| device | string | No | Device name. |

## Set Active Calibration

Sets a calibration as active for a device.

### Endpoint
`PATCH /unit_api/active_calibrations/{device}/{cal_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |
| cal_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Update status. |

## Remove Active Calibration

Removes active calibration for a device.

### Endpoint
`DELETE /unit_api/active_calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Update status. |

## Set Active Estimator

Sets an estimator as active for a device.

### Endpoint
`PATCH /unit_api/active_estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Update status. |

## Remove Active Estimator

Removes active estimator for a device.

### Endpoint
`DELETE /unit_api/active_estimators/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Update status. |

## Delete Estimator

Deletes an estimator for a device.

### Endpoint
`DELETE /unit_api/estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "msg": "Estimator 'est_1' for device 'od' deleted successfully."
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| msg | string | No | Status message. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| protocol_name | string | Yes | Protocol name. | must exist |
| target_device | string | Yes | Device name. | must exist |

### Response

#### Success

**Status:** `201 Created`

```json
{
  "session": {"session_id": "abc"},
  "step": {"step_id": "start"}
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| session | object | No | Session payload. |
| step | object | Yes | Current step payload. |

## Get Calibration Session

Returns a calibration session from the unit.

### Endpoint
`GET /unit_api/calibrations/sessions/{session_id}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| session_id | string | Yes | Session identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "session": {"session_id": "abc"},
  "step": {"step_id": "start"}
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| session | object | No | Session payload. |
| step | object | Yes | Current step payload. |

## Advance Calibration Session

Advances a calibration session with inputs.

### Endpoint
`POST /unit_api/calibrations/sessions/{session_id}/inputs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| session_id | string | Yes | Session identifier. |

#### Request Body
```json
{
  "inputs": {"volume_ml": 10}
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| inputs | object | Yes | Step inputs. | depends on step |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "session": {"session_id": "abc"},
  "step": {"step_id": "next"}
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| session | object | No | Session payload. |
| step | object | Yes | Current step payload. |

## Abort Calibration Session

Aborts a calibration session.

### Endpoint
`POST /unit_api/calibrations/sessions/{session_id}/abort`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| session_id | string | Yes | Session identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "session": {"session_id": "abc", "status": "aborted"},
  "step": null
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| session | object | No | Session payload. |
| step | object | Yes | Current step payload. |


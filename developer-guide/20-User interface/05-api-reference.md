---
title: API Reference (Leader /api)
slug: /api-reference
toc_max_heading_level: 2

---

## Get Models

Returns the list of supported Pioreactor models.

### Endpoint
`GET /api/models`

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| models | array | No | Registered model descriptors. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 500 | Server error | Model registry lookup fails. |

## Stop All Jobs On Worker For Experiment

Stops all jobs for a worker within an experiment.

### Endpoint
`POST /api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Submission status. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | Experiment or unit is invalid. |

### Notes

* Uses `$broadcast` to target all workers.

## Stop Specific Job On Unit

Stops a specific job on a unit within an experiment.

### Endpoint
`POST /api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| job_name | string | Yes | Job name to stop. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Submission status. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 500 | Publish failed | MQTT publish or fallback stop fails. |

## Run Job On Unit In Experiment

Runs a job on one or more units assigned to an experiment.

### Endpoint
`POST /api/units/{pioreactor_unit}/jobs/run/job_name/{job}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |
| job | string | Yes | Job name to run. |
| experiment | string | Yes | Experiment identifier or `universal`. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| options | object | No | CLI options forwarded to `pio run`. | keys map to flag names |
| env | object | No | Environment variables merged into job env. | string values |
| args | array | No | Positional CLI args. | strings |
| config_overrides | array | No | Config override tuples. | `[section, key, value]` |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 404 | Not found | Worker not active or not assigned to experiment. |

### Notes

* Uses `$broadcast` to target all active workers.

## Get Jobs Running

Returns running jobs for a unit or the cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/jobs/running`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 502 | Bad gateway | Worker did not respond. |

### Notes

* Use `$broadcast` to target all units.

## Blink Worker

Triggers a brief blink on a worker to confirm connectivity.

### Endpoint
`POST /api/workers/{pioreactor_unit}/blink`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Submission status. |

## Update Job On Unit

Updates job settings for a running job via MQTT.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/jobs/update/job_name/{job}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |
| job | string | Yes | Job name to update. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "settings": {
    "target_rpm": "200"
  }
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| settings | object | Yes | Job setting map to publish. | values are strings |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Submission status. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | JSON body missing or publish failed. |

## Reboot Unit

Queues a reboot on a unit or cluster.

### Endpoint
`POST /api/units/{pioreactor_unit}/system/reboot`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Shutdown Unit

Queues a shutdown on a unit or cluster.

### Endpoint
`POST /api/units/{pioreactor_unit}/system/shutdown`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Clock Time

Returns the UTC clock time from a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/system/utc_clock`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| utc_clock_time | string | Yes | ISO-8601 UTC timestamp. | ISO-8601 |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Recent Logs

Returns recent experiment logs across units.

### Endpoint
`GET /api/experiments/{experiment}/recent_logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| min_level | string | No | `INFO` | Minimum log level filter. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| timestamp | string | No | Log timestamp. |
| level | string | No | Log level. |
| pioreactor_unit | string | No | Unit name. |
| message | string | No | Log message. |
| task | string | Yes | Task name. |
| experiment | string | No | Experiment identifier. |

## Get Logs

Returns paginated logs across all experiments.

### Endpoint
`GET /api/logs`

### Request

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| skip | integer | No | `0` | Number of rows to skip. |
| min_level | string | No | `INFO` | Minimum log level filter. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| timestamp | string | No | Log timestamp. |
| level | string | No | Log level. |
| pioreactor_unit | string | No | Unit name. |
| message | string | No | Log message. |
| task | string | Yes | Task name. |
| experiment | string | No | Experiment identifier. |

## Get Experiment Logs

Returns paginated logs for a single experiment.

### Endpoint
`GET /api/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| skip | integer | No | `0` | Number of rows to skip. |
| min_level | string | No | `INFO` | Minimum log level filter. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| timestamp | string | No | Log timestamp. |
| level | string | No | Log level. |
| pioreactor_unit | string | No | Unit name. |
| message | string | No | Log message. |
| task | string | Yes | Task name. |
| experiment | string | No | Experiment identifier. |

## Get Recent Logs For Unit And Experiment

Returns recent logs for a specific unit within an experiment.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/recent_logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| min_level | string | No | `INFO` | Minimum log level filter. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| timestamp | string | No | Log timestamp. |
| level | string | No | Log level. |
| pioreactor_unit | string | No | Unit name. |
| message | string | No | Log message. |
| task | string | Yes | Task name. |
| experiment | string | No | Experiment identifier. |

## Get Logs For Unit And Experiment

Returns paginated logs for a unit within an experiment.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| skip | integer | No | `0` | Number of rows to skip. |
| min_level | string | No | `INFO` | Minimum log level filter. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| timestamp | string | No | Log timestamp. |
| level | string | No | Log level. |
| pioreactor_unit | string | No | Unit name. |
| message | string | No | Log message. |
| task | string | Yes | Task name. |
| experiment | string | No | Experiment identifier. |

## Get System Logs For Unit

Returns paginated system logs for a unit.

### Endpoint
`GET /api/units/{pioreactor_unit}/system_logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| skip | integer | No | `0` | Number of rows to skip. |
| min_level | string | No | `INFO` | Minimum log level filter. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| timestamp | string | No | Log timestamp. |
| level | string | No | Log level. |
| pioreactor_unit | string | No | Unit name. |
| message | string | No | Log message. |
| task | string | Yes | Task name. |
| experiment | string | No | Experiment identifier. |

## Get Logs For Unit

Returns paginated logs for a unit across experiments.

### Endpoint
`GET /api/units/{pioreactor_unit}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| skip | integer | No | `0` | Number of rows to skip. |
| min_level | string | No | `INFO` | Minimum log level filter. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| timestamp | string | No | Log timestamp. |
| level | string | No | Log level. |
| pioreactor_unit | string | No | Unit name. |
| message | string | No | Log message. |
| task | string | Yes | Task name. |
| experiment | string | No | Experiment identifier. |

## Publish New Log

Publishes a log entry via MQTT for a unit or experiment.

### Endpoint
`POST /api/workers/{pioreactor_unit}/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |
| experiment | string | Yes | Experiment identifier. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| message | string | Yes | Log message. |  |
| source | string | Yes | Log source. |  |
| source_ | string | No | MQTT source segment. | defaults to `ui` |
| level | string | Yes | Log level. | uppercase |
| timestamp | string | Yes | ISO-8601 timestamp. | ISO-8601 |
| task | string | No | Task name. | nullable |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Submission status. |

## Get Growth Rates

Returns growth-rate time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/growth_rates`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.0123}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | `target_points` lt 0. |

## Get Temperature Readings

Returns temperature time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/temperature_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 37.1}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get OD Readings Filtered

Returns filtered OD time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings_filtered`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.1234567}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get OD Readings

Returns OD readings time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01-1"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.2345678}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit and channel. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get OD Readings Fused

Returns fused OD time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings_fused`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.2234567}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get Raw OD Readings

Returns raw OD time series for all units in an experiment.

### Endpoint
`GET /api/experiments/{experiment}/time_series/raw_od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01-1"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 1234.5}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit and channel. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get Fallback Time Series

Returns time series for any data source and column.

### Endpoint
`GET /api/experiments/{experiment}/time_series/{data_source}/{column}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |
| data_source | string | Yes | Table name to query. |
| column | string | Yes | Column name to query. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 1.23}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get Growth Rates Per Unit

Returns growth-rate time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/growth_rates`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.0123}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get Temperature Readings Per Unit

Returns temperature time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/temperature_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 37.1}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get OD Readings Filtered Per Unit

Returns filtered OD time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_filtered`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.1234567}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get OD Readings Per Unit

Returns OD readings time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01-1"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.2345678}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit and channel. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get OD Readings Fused Per Unit

Returns fused OD time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_fused`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 0.2234567}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get Raw OD Readings Per Unit

Returns raw OD time series for a single unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/raw_od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01-1"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 1234.5}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit and channel. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get Fallback Time Series Per Unit

Returns time series for any data source and column for a unit.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/{data_source}/{column}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name. |
| experiment | string | Yes | Experiment identifier. |
| data_source | string | Yes | Table name to query. |
| column | string | Yes | Column name to query. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| lookback | number | No | `4.0` | Hours of history to include. |
| target_points | integer | No | `720` | Target number of points. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "series": ["pio01"],
  "data": [[{"x": "2026-01-31T12:00:00.000Z", "y": 1.23}]]
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| series | array | No | Series labels by unit. |
| data | array | No | Arrays of `{x,y}` points per series. |

## Get Media Rates

Returns recent media dosing rates per unit for an experiment.

### Endpoint
`GET /api/experiments/{experiment}/media_rates`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "pio01": {"mediaRate": 1.2, "altMediaRate": 0.4},
  "all": {"mediaRate": 1.2, "altMediaRate": 0.4}
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pio01 | object | No | Per-unit media rates. |
| all | object | No | Aggregate media rates. |

## Get Calibration Protocols

Returns calibration protocols from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibration_protocols`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get All Calibrations

Returns calibrations from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get All Active Calibrations

Returns active calibrations from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/active_calibrations`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get All Active Estimators

Returns active estimators from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/active_estimators`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get All Estimators

Returns estimators from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get All Calibrations As Zip

Returns a ZIP of all calibration YAMLs from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/zipped_calibrations`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

### Notes

* Response is `application/zip` content.

## Get Dot Pioreactor Zip

Returns a ZIP of `.pioreactor` from a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/zipped_dot_pioreactor`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

### Notes

* Response is `application/zip` content.

## Import Dot Pioreactor Zip

Imports a `.pioreactor` ZIP to a specific unit.

### Endpoint
`POST /api/units/{pioreactor_unit}/import_zipped_dot_pioreactor`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name (not `$broadcast`). |

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
| 400 | Invalid request | Missing archive or `$broadcast`. |
| 502 | Bad gateway | Worker import failed. |

## Get Calibrations By Device

Returns calibrations for a device from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Calibration

Returns a specific calibration from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/{device}/{cal_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |
| cal_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Estimators By Device

Returns estimators for a device from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Estimator

Returns a specific estimator from workers.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Create Calibration

Creates a calibration on one or more workers.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
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
| calibration_data | string | Yes | YAML-encoded calibration payload. | valid calibration YAML |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Start Calibration Session

Starts a calibration session on a specific worker.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name (not `$broadcast`). |

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
| protocol_name | string | Yes | Protocol name. | must exist for device |
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

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | Missing payload or `$broadcast`. |
| 502 | Bad gateway | Worker session start failed. |

## Get Calibration Session

Fetches a calibration session from a worker.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name (not `$broadcast`). |
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

Submits inputs to advance a calibration session on a worker.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/inputs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name (not `$broadcast`). |
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

Aborts a calibration session on a worker.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/abort`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name (not `$broadcast`). |
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

## Set Active Calibration

Sets the active calibration for a device on workers.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/active_calibrations/{device}/{cal_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |
| cal_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Set Active Estimator

Sets the active estimator for a device on workers.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/active_estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Remove Active Calibration

Clears the active calibration for a device on workers.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/active_calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Remove Active Estimator

Clears the active estimator for a device on workers.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/active_estimators/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Delete Calibration

Deletes a calibration on workers.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/calibrations/{device}/{cal_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |
| cal_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Delete Estimator

Deletes an estimator on workers.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker unit name or `$broadcast`. |
| device | string | Yes | Device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Plugins Installed

Returns installed plugins from a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/plugins/installed`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Install Plugin Across Cluster

Installs a plugin on a unit or cluster.

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/install`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

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
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 403 | Forbidden | UI installs disabled. |

## Uninstall Plugin Across Cluster

Uninstalls a plugin on a unit or cluster.

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/uninstall`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

#### Request Body
```json
{
  "args": ["pioreactor-my-plugin"]
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| args | array | Yes | Plugin name list. | length 1 recommended |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 403 | Forbidden | UI uninstalls disabled. |

## Get Capabilities

Returns capabilities for a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/capabilities`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Job Settings For Worker

Returns settings for a job on a worker within an experiment.

### Endpoint
`GET /api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Job Setting For Worker

Returns a specific setting for a job on a worker within an experiment.

### Endpoint
`GET /api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/setting/{setting}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |
| job_name | string | Yes | Job name. |
| setting | string | Yes | Setting name. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get App Versions

Returns app version from a unit or cluster.

### Endpoint
`GET /api/units/{pioreactor_unit}/versions/app`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Upload File

Uploads a file to the server temp directory.

### Endpoint
`POST /api/system/upload`

### Request

#### Request Body
```json
{}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| file | file | Yes | Multipart file upload. | form-data field `file` |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "message": "File successfully uploaded",
  "save_path": "/tmp/file.bin"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| message | string | No | Status message. |
| save_path | string | No | Temp file path. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | Missing file or too large. |
| 403 | Forbidden | UI uploads disabled. |

## Get Automation Contrib

Returns automation descriptors by type.

### Endpoint
`GET /api/contrib/automations/{automation_type}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| automation_type | string | Yes | `temperature`, `dosing`, or `led`. |

### Response

#### Success

**Status:** `200 OK`

```json
[
  {
    "automation_name": "growth_rate_control",
    "display_name": "Growth Rate Control"
  }
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| automation_name | string | No | Automation identifier. |
| display_name | string | Yes | UI label. |

## Get Job Contrib

Returns job descriptors for UI.

### Endpoint
`GET /api/contrib/jobs`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {
    "job_name": "stirring",
    "display_name": "Stirring"
  }
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| job_name | string | No | Job identifier. |
| display_name | string | Yes | UI label. |

## Get Charts Contrib

Returns chart descriptors for UI.

### Endpoint
`GET /api/contrib/charts`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {
    "chart_key": "od_readings",
    "display_name": "OD Readings"
  }
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| chart_key | string | No | Chart identifier. |
| display_name | string | Yes | UI label. |

## Update App Next Version

Triggers cluster update to the next version.

### Endpoint
`POST /api/system/update_next_version`

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| release_archive_location | string | Yes | ZIP path on leader. | must end with `.zip` |
| units | array | Yes | Units to update. | list of unit names |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Exportable Datasets

Returns exportable dataset descriptors.

### Endpoint
`GET /api/contrib/exportable_datasets`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {
    "dataset_name": "growth_rates",
    "table": "growth_rates"
  }
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| dataset_name | string | No | Dataset identifier. |
| table | string | Yes | Source table if present. |

## Preview Exportable Dataset

Returns a preview of a dataset.

### Endpoint
`GET /api/contrib/exportable_datasets/{target_dataset}/preview`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| target_dataset | string | Yes | Dataset identifier. |

#### Query Parameters
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| n_rows | integer | No | `5` | Number of rows to preview. |

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"column": "value"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| column | string | Yes | Example column value. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 404 | Not found | Dataset not found. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| datasets | array | Yes | Dataset names to export. | non-empty |
| experiments | array | Yes | Experiments to export. | list of experiment names |
| partition_by_unit | boolean | Yes | Split by unit. |  |
| partition_by_experiment | boolean | Yes | Split by experiment. |  |
| start_time | string | No | Start time filter. | ISO-8601 |
| end_time | string | No | End time filter. | ISO-8601 |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "result": true,
  "filename": "export_20260131120000.zip",
  "msg": "Finished"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| result | boolean | No | Export success. |
| filename | string | Yes | Export filename. |
| msg | string | No | Status message. |

## Get Experiments

Returns experiments list.

### Endpoint
`GET /api/experiments`

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| experiment | string | No | Experiment name. |
| created_at | string | No | Creation timestamp. |
| description | string | Yes | Experiment description. |
| delta_hours | number | No | Hours since creation. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| experiment | string | Yes | Experiment name. | no special chars |
| description | string | No | Description text. |  |
| mediaUsed | string | No | Media used label. |  |
| organismUsed | string | No | Organism used label. |  |

### Response

#### Success

**Status:** `201 Created`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Creation status. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 400 | Invalid request | Experiment name invalid. |
| 409 | Conflict | Experiment already exists. |

## Delete Experiment

Deletes an experiment and stops its jobs.

### Endpoint
`DELETE /api/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

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
| status | string | No | Deletion status. |

### Errors

| Status | Meaning | When it Happens |
| ------ | ------- | --------------- |
| 404 | Not found | Experiment missing. |

## Get Latest Experiment

Returns the most recently created experiment.

### Endpoint
`GET /api/experiments/latest`

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| experiment | string | No | Experiment name. |
| created_at | string | No | Creation timestamp. |
| description | string | Yes | Description text. |
| media_used | string | Yes | Media used label. |
| organism_used | string | Yes | Organism used label. |
| delta_hours | number | No | Hours since creation. |

## Get Unit Labels

Returns unit labels for an experiment.

### Endpoint
`GET /api/experiments/{experiment}/unit_labels`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier or `current`. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "pio01": "left",
  "pio02": "right"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pio01 | string | Yes | Unit label. |

## Upsert Unit Labels

Creates or updates a unit label for an experiment.

### Endpoint
`PUT /api/experiments/{experiment}/unit_labels`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "unit": "pio01",
  "label": "left"
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| unit | string | Yes | Unit name. |  |
| label | string | Yes | Label value. | empty string clears label |

### Response

#### Success

**Status:** `201 Created`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Upsert status. |

## Get Historical Organisms

Returns previously used organism labels.

### Endpoint
`GET /api/historical_organisms`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"key": "E. coli"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| key | string | No | Organism label. |

## Get Historical Media

Returns previously used media labels.

### Endpoint
`GET /api/historical_media`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"key": "LB"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| key | string | No | Media label. |

## Update Experiment

Updates experiment metadata.

### Endpoint
`PATCH /api/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "description": "Updated description"
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| description | string | Yes | New description. |  |

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

## Get Experiment

Returns a single experiment.

### Endpoint
`GET /api/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "experiment": "Exp001",
  "created_at": "2026-01-31T12:00:00.000Z",
  "description": "Growth test",
  "delta_hours": 2
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| experiment | string | No | Experiment name. |
| created_at | string | No | Creation timestamp. |
| description | string | Yes | Experiment description. |
| delta_hours | number | No | Hours since creation. |

## Get Configuration For Unit

Returns merged config.ini for one or more units.

### Endpoint
`GET /api/units/{pioreactor_unit}/configuration`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "pio01": {
    "cluster.topology": {"leader_hostname": "leader"}
  }
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pio01 | object | No | Config sections keyed by name. |

## Get Config File

Returns a specific config file contents.

### Endpoint
`GET /api/configs/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Config filename ending in `.ini`. |

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

### Notes

* Response is plain text INI content.

## Get Configs

Returns available config filenames.

### Endpoint
`GET /api/configs`

### Response

#### Success

**Status:** `200 OK`

```json
[
  "config.ini",
  "config_pio01.ini"
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| 0 | string | No | Config filename. |

## Update Config

Validates and writes a config file then syncs units.

### Endpoint
`PATCH /api/configs/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Config filename ending in `.ini`. |

#### Request Body
```json
{
  "code": "[section]\nkey=value\n"
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| code | string | Yes | INI file contents. | valid INI |

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

## Get Config History

Returns stored config history for a file.

### Endpoint
`GET /api/configs/{filename}/history`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Config filename. |

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"filename": "config.ini", "timestamp": "2026-01-31T12:00:00.000Z", "data": "..."}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| filename | string | No | Config filename. |
| timestamp | string | No | Stored timestamp. |
| data | string | No | INI contents. |

## Is Local Access Point Active

Returns whether local access point flag is present.

### Endpoint
`GET /api/is_local_access_point_active`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "result": false
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| result | boolean | No | Access point active flag. |

## Get Running Profiles

Returns running experiment_profile jobs for an experiment.

### Endpoint
`GET /api/experiment_profiles/running/experiments/{experiment}`

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
  {
    "job_name": "experiment_profile",
    "experiment": "Exp001",
    "job_id": "job_abc",
    "settings": {"profile_name": "test"}
  }
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| job_name | string | No | Job name. |
| experiment | string | No | Experiment name. |
| job_id | string | No | Job identifier. |
| settings | object | Yes | Published settings. |

## Get Recent Experiment Profiles

Returns recent experiment profile runs.

### Endpoint
`GET /api/experiments/{experiment}/experiment_profiles/recent`

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
  {"started_at": "2026-01-31T12:00:00.000Z", "experiment_profile_name": "test", "experiment": "Exp001"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| started_at | string | No | Run timestamp. |
| experiment_profile_name | string | No | Profile name. |
| experiment | string | No | Experiment name. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| filename | string | Yes | Profile filename. | `.yaml` or `.yml` |
| body | string | Yes | YAML profile contents. | valid profile schema |

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
| status | string | No | Creation status. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| filename | string | Yes | Profile filename. | `.yaml` or `.yml` |
| body | string | Yes | YAML profile contents. | valid profile schema |

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

## Get Experiment Profiles

Returns experiment profile descriptors.

### Endpoint
`GET /api/contrib/experiment_profiles`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"experimentProfile": {"experiment_profile_name": "test"}, "file": "profile.yaml", "fullpath": "/home/pi/.pioreactor/experiment_profiles/profile.yaml"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| experimentProfile | object | No | Parsed profile object. |
| file | string | No | Filename. |
| fullpath | string | No | Full path on disk. |

## Get Experiment Profile

Returns a single experiment profile file.

### Endpoint
`GET /api/contrib/experiment_profiles/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Profile filename. |

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

### Notes

* Response is plain text YAML content.

## Delete Experiment Profile

Deletes a profile file.

### Endpoint
`DELETE /api/contrib/experiment_profiles/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Profile filename. |

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
| status | string | No | Deletion status. |

## Get Units

Returns all units in the cluster.

### Endpoint
`GET /api/units`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio01"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Unit name. |

## Get Workers

Returns all workers in the inventory.

### Endpoint
`GET /api/workers`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio01", "added_at": "2026-01-31T12:00:00.000Z", "is_active": 1, "model_name": "pioreactor_20ml", "model_version": "1.5"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Unit name. |
| added_at | string | No | Added timestamp. |
| is_active | integer | No | Active flag (0/1). |
| model_name | string | Yes | Model name. |
| model_version | string | Yes | Model version. |

## Discover Available Workers

Discovers network workers not already registered.

### Endpoint
`GET /api/workers/discover`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio02"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Unit name. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| name | string | Yes | Worker name. |  |
| version | string | Yes | Software version. |  |
| model | string | Yes | Model name. |  |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "msg": "Worker pio02 added successfully."
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| msg | string | No | Status message. |

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

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| pioreactor_unit | string | Yes | Worker name. |  |
| model_name | string | No | Model name. |  |
| model_version | string | No | Model version. |  |

### Response

#### Success

**Status:** `201 Created`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Upsert status. |

## Delete Worker

Removes a worker from inventory and stops its jobs.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| status | string | No | Removal status. |

## Change Worker Status

Marks a worker active or inactive.

### Endpoint
`PUT /api/workers/{pioreactor_unit}/is_active`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker name. |

#### Request Body
```json
{
  "is_active": 1
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| is_active | integer | Yes | Active flag. | 0 or 1 |

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

## Change Worker Model

Updates a worker's model metadata.

### Endpoint
`PUT /api/workers/{pioreactor_unit}/model`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker name. |

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

## Get Worker Model And Metadata

Returns a worker's model and metadata.

### Endpoint
`GET /api/workers/{pioreactor_unit}/model`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "pioreactor_unit": "pio01",
  "model_name": "pioreactor_20ml",
  "model_version": "1.5",
  "display_name": "Pioreactor 20 mL"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Unit name. |
| model_name | string | Yes | Model name. |
| model_version | string | Yes | Model version. |
| display_name | string | Yes | Model display name. |

## Get Worker

Returns a worker record.

### Endpoint
`GET /api/workers/{pioreactor_unit}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker name. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Unit name. |
| added_at | string | No | Added timestamp. |
| is_active | integer | No | Active flag. |
| model_name | string | Yes | Model name. |
| model_version | string | Yes | Model version. |

## Get Workers And Experiment Assignments

Returns workers with their current experiment assignment.

### Endpoint
`GET /api/workers/assignments`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"pioreactor_unit": "pio01", "experiment": "Exp001", "is_active": 1}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Worker name. |
| experiment | string | Yes | Assigned experiment. |
| is_active | integer | No | Active flag. |

## Get Active Experiments

Returns experiments that have at least one active worker.

### Endpoint
`GET /api/experiments/active`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"experiment": "Exp001", "created_at": "2026-01-31T12:00:00.000Z", "description": "Growth test", "delta_hours": 2}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| experiment | string | No | Experiment name. |
| created_at | string | No | Creation timestamp. |
| description | string | Yes | Description text. |
| delta_hours | number | No | Hours since creation. |

## Remove All Workers From All Experiments

Unassigns all workers from all experiments.

### Endpoint
`DELETE /api/workers/assignments`

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |

## Get Experiments Worker Assignments

Returns worker counts per experiment.

### Endpoint
`GET /api/experiments/assignment_count`

### Response

#### Success

**Status:** `200 OK`

```json
[
  {"experiment": "Exp001", "worker_count": 2}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| experiment | string | No | Experiment name. |
| worker_count | integer | No | Assigned worker count. |

## Get Experiment Assignment For Worker

Returns the experiment assignment for a worker.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiment`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Worker name. |

### Response

#### Success

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

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Worker name. |
| is_active | integer | No | Active flag. |
| experiment | string | Yes | Experiment name. |
| model_name | string | Yes | Model name. |
| model_version | string | Yes | Model version. |

## Get Workers For Experiment

Returns workers assigned to an experiment.

### Endpoint
`GET /api/experiments/{experiment}/workers`

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
  {"pioreactor_unit": "pio01", "is_active": 1, "model_name": "pioreactor_20ml", "model_version": "1.5"}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Worker name. |
| is_active | integer | No | Active flag. |
| model_name | string | Yes | Model name. |
| model_version | string | Yes | Model version. |

## Get Historical Workers For Experiment

Returns historical worker assignments for an experiment.

### Endpoint
`GET /api/experiments/{experiment}/historical_worker_assignments`

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
  {"pioreactor_unit": "pio01", "experiment": "Exp001", "is_currently_assigned_to_experiment": 1}
]
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| pioreactor_unit | string | No | Worker name. |
| experiment | string | No | Experiment name. |
| is_currently_assigned_to_experiment | integer | No | Assignment flag. |

## Add Worker To Experiment

Assigns a worker to an experiment.

### Endpoint
`PUT /api/experiments/{experiment}/workers`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "pioreactor_unit": "pio01"
}
```

##### Body Schema

| Field | Type | Required | Description | Constraints |
| ----- | ---- | -------- | ----------- | ----------- |
| pioreactor_unit | string | Yes | Worker name. | must exist |

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
| status | string | No | Assignment status. |

## Remove Worker From Experiment

Unassigns a worker from an experiment.

### Endpoint
`DELETE /api/experiments/{experiment}/workers/{pioreactor_unit}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |
| pioreactor_unit | string | Yes | Worker name. |

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
| status | string | No | Unassignment status. |

## Remove Workers From Experiment

Unassigns all workers from an experiment.

### Endpoint
`DELETE /api/experiments/{experiment}/workers`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "leader",
  "task_id": "task_abc123",
  "result_url_path": "/unit_api/task_results/task_abc123"
}
```

##### Response Schema

| Field | Type | Nullable | Description |
| ----- | ---- | -------- | ----------- |
| unit | string | No | Leader unit name that queued the task. |
| task_id | string | No | Huey task id. |
| result_url_path | string | No | Task result path on unit API. |


---
title: API Reference (Leader /api)
slug: /api-reference
toc_max_heading_level: 2
sidebar_class_name: sidebar-item--updated
---

### Conventions

- Only the leader Pioreactor has the `/api` endpoints exposed.
- Async endpoints return `202 Accepted` with a `task_id` and `result_url_path`.
- Poll `GET /unit_api/task_results/{task_id}` until `status` is `complete` or `failed`.
- `$broadcast` may be used in path parameters where documented to target all units/workers.
- File download endpoints return binary bodies; use the response content-type to handle them.
- Path parameters are shown inline in the endpoint URL.
- Request/response examples are the canonical shapes; omit optional fields you do not need.


Use `/api/workers/...` for worker-only targets (experiment-scoped jobs/logs) and `/api/units/...` when the leader is also a valid target; both accept `$broadcast` where supported.

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

## Run Job On Unit In Experiment

Runs a job on one or more units assigned to an experiment.

### Endpoint
`POST /api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |
| job_name | string | Yes | Job name to run. |
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

## Update Job On Unit

Updates job settings for a running job via MQTT.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast`. |
| job_name | string | Yes | Job name to update. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "settings": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

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

#### Success

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
  "level": "INFO",
  "timestamp": "2026-01-31T12:45:00.000Z",
  "task": "stirring"
}
```

### Response

#### Success

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

```text
(binary zip)
```

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

```text
(binary zip)
```

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
```text
multipart/form-data; field "file"
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{}
```

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

### Response

#### Success

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

### Response

#### Success

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

#### Success

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

#### Success

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

#### Success

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

#### Success

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

### Response

#### Success

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

#### Success

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

#### Success

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

### Response

#### Success

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

```ini
[cluster.topology]
leader_hostname=leader
leader_address=leader.local
```

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

### Response

#### Success

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

#### Success

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

#### Success

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

#### Success

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

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Profile filename. |

### Response

#### Success

**Status:** `200 OK`

```yaml
experiment_profile_name: demo_profile
jobs:
  - job_name: stirring
    options:
      target_rpm: 600
```

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

#### Success

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

#### Success

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

### Response

#### Success

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

### Response

#### Success

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

### Response

#### Success

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


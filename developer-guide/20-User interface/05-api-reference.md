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
- Errors have the following schema:

```
  {
    "error": "Human-readable error message",
    "error_info": {
      "cause": "Human-readable cause (defaults to error if not set)",
      "remediation": "Suggested fix or next step",
      "status": integer,
    }
  }

```


Use `/api/workers/...` for worker-only targets (experiment-scoped jobs/logs) and `/api/units/...` when the leader is also a valid target; both accept `$broadcast` where supported.


-----


## Get Automation Descriptors

Get Automation Descriptors endpoint.

### Endpoint
`GET /api/automations/descriptors/{automation_type}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| automation_type | string | Yes | Automation type. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Chart Descriptors

Get Chart Descriptors endpoint.

### Endpoint
`GET /api/charts/descriptors`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Config Files

get a list of all config.ini files in the .pioreactor folder, _and_ are part of the inventory _or_ are leader

### Endpoint
`GET /api/config/files`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Config File

get a specific config.ini file in the .pioreactor folder

### Endpoint
`GET /api/config/files/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Filename. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Update Config File

Update Config File endpoint.

### Endpoint
`PATCH /api/config/files/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Filename. |

#### Request Body
```json
{
  "code": "<value>"
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

## Get Config File History

Get Config File History endpoint.

### Endpoint
`GET /api/config/files/{filename}/history`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Filename. |

### Response

#### Success

**Status:** `200 OK`

```json
"<configs_for_filename>"
```

## Get Config For Pioreactor Unit

get merged config for a pioreactor unit

### Endpoint
`GET /api/config/units/{pioreactor_unit}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

```json
"<result>"
```

## Get Exportable Datasets

Get Exportable Datasets endpoint.

### Endpoint
`GET /api/datasets/exportable`

### Response

#### Success

**Status:** `200 OK`

```json
"<parsed_yaml>"
```

## Preview Exportable Dataset

Preview Exportable Dataset endpoint.

### Endpoint
`GET /api/datasets/exportable/{target_dataset}/preview`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| target_dataset | string | Yes | Dataset identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
"<result>"
```

## Export Exportable Datasets

Export Exportable Datasets endpoint.

### Endpoint
`POST /api/datasets/exportable/export`

### Request

#### Request Body
```json
{
  "datasets": "<value>",
  "end_time": "<value>",
  "experiments": "<value>",
  "partition_by_experiment": "<value>",
  "partition_by_unit": "<value>",
  "start_time": "<value>"
}
```

### Response

#### Success

**Status:** `200 OK`

```json
{
  "result": "<status>",
  "filename": "<filename>",
  "msg": "Finished"
}
```

## Get Experiment Profiles

Get Experiment Profiles endpoint.

### Endpoint
`GET /api/experiment_profiles`

### Response

#### Success

**Status:** `200 OK`

```json
"<parsed_yaml>"
```

## Create Experiment Profile

Create Experiment Profile endpoint.

### Endpoint
`POST /api/experiment_profiles`

### Request

#### Request Body
```json
{
  "body": "<value>",
  "filename": "<value>"
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

## Delete Experiment Profile

Delete Experiment Profile endpoint.

### Endpoint
`DELETE /api/experiment_profiles/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Filename. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Experiment Profile

Get Experiment Profile endpoint.

### Endpoint
`GET /api/experiment_profiles/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Filename. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Update Experiment Profile

Update Experiment Profile endpoint.

### Endpoint
`PATCH /api/experiment_profiles/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Filename. |

#### Request Body
```json
{
  "body": "<value>"
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

## Get Experiments

Get Experiments endpoint.

### Endpoint
`GET /api/experiments`

### Response

#### Success

**Status:** `200 OK`

```json
"<response>"
```

## Create Experiment

Create Experiment endpoint.

### Endpoint
`POST /api/experiments`

### Request

#### Request Body
```json
{
  "description": "<value>",
  "experiment": "<value>",
  "mediaUsed": "<value>",
  "organismUsed": "<value>"
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

Delete Experiment endpoint.

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

## Get Experiment

Get Experiment endpoint.

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
"<result>"
```

## Update Experiment

Update Experiment endpoint.

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
  "description": "<value>"
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

## Get Recent Experiment Profile Runs

Get Recent Experiment Profile Runs endpoint.

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
"<recent_runs>"
```

## Get Running Profiles

Get Running Profiles endpoint.

### Endpoint
`GET /api/experiments/{experiment}/experiment_profiles/running`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get List Of Historical Workers For Experiment

Get List Of Historical Workers For Experiment endpoint.

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
"<workers>"
```

## Get Exp Logs

Shows event logs from all units, uses pagination.

### Endpoint
`GET /api/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
"<recent_logs>"
```

## Get Media Rates

Shows amount of added media per unit. Note that it only consider values from a dosing automation (i.e. not manual dosing, which includes continously dose)

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
"<json_result>"
```

## Get Recent Logs

Shows recent event logs from all units

### Endpoint
`GET /api/experiments/{experiment}/recent_logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
"<recent_logs>"
```

## Get Fallback Time Series

Get Fallback Time Series endpoint.

### Endpoint
`GET /api/experiments/{experiment}/time_series/{data_source}/{column}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |
| data_source | string | Yes | Time-series data source. |
| column | string | Yes | Column name. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Growth Rates

Gets growth rates for all units

### Endpoint
`GET /api/experiments/{experiment}/time_series/growth_rates`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get OD Readings

Gets raw od for all units

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get OD Readings Filtered

Gets normalized od for all units

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings_filtered`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get OD Readings Fused

Get OD Readings Fused endpoint.

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings_fused`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get OD Raw Readings

Gets raw od for all units

### Endpoint
`GET /api/experiments/{experiment}/time_series/raw_od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Temperature Readings

Gets temperature readings for all units

### Endpoint
`GET /api/experiments/{experiment}/time_series/temperature_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Unit Labels

Get Unit Labels endpoint.

### Endpoint
`GET /api/experiments/{experiment}/unit_labels`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
"<keyed_by_unit>"
```

## Upsert Unit Labels

Update or insert a new unit label for the current experiment.

### Endpoint
`PATCH /api/experiments/{experiment}/unit_labels`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "label": "<value>",
  "unit": "<value>"
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

## Upsert Unit Labels

Update or insert a new unit label for the current experiment.

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
  "label": "<value>",
  "unit": "<value>"
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

## Remove Workers From Experiment

Remove Workers From Experiment endpoint.

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
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get List Of Workers For Experiment

Get List Of Workers For Experiment endpoint.

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
"<workers>"
```

## Add Worker To Experiment

Add Worker To Experiment endpoint.

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
  "pioreactor_unit": "<value>"
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

Remove Worker From Experiment endpoint.

### Endpoint
`DELETE /api/experiments/{experiment}/workers/{pioreactor_unit}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Active Experiments

Get list of experiments with at least one active worker assigned

### Endpoint
`GET /api/experiments/active`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Experiments Worker Assignments

Get Experiments Worker Assignments endpoint.

### Endpoint
`GET /api/experiments/assignment_count`

### Response

#### Success

**Status:** `200 OK`

```json
[]
```

## Get Latest Experiment

Get Latest Experiment endpoint.

### Endpoint
`GET /api/experiments/latest`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Historical Media Used

Get Historical Media Used endpoint.

### Endpoint
`GET /api/historical_media`

### Response

#### Success

**Status:** `200 OK`

```json
"<historical_media>"
```

## Get Historical Organisms Used

Get Historical Organisms Used endpoint.

### Endpoint
`GET /api/historical_organisms`

### Response

#### Success

**Status:** `200 OK`

```json
"<historical_organisms>"
```

## Get Job Descriptors

Get Job Descriptors endpoint.

### Endpoint
`GET /api/jobs/descriptors`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Local Access Point

Get Local Access Point endpoint.

### Endpoint
`GET /api/local_access_point`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "active": "<value>"
}
```

## Get Logs

Shows event logs from all units, uses pagination.

### Endpoint
`GET /api/logs`

### Response

#### Success

**Status:** `200 OK`

```json
"<recent_logs>"
```

## Get Models

Return the list of supported Pioreactor models (name, version, display_name).

### Endpoint
`GET /api/models`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "models": "<value>"
}
```

## Update App From Release Archive

Update App From Release Archive endpoint.

### Endpoint
`POST /api/system/update_from_archive`

### Request

#### Request Body
```json
{
  "release_archive_location": "<value>",
  "units": "<value>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Update App

Update App endpoint.

### Endpoint
`POST /api/system/update_next_version`

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Upload System File

Upload System File endpoint.

### Endpoint
`POST /api/system/upload`

### Request

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `200 OK`

```json
"<response>"
```

## Set System UTC Clock

Set System UTC Clock endpoint.

### Endpoint
`POST /api/system/utc_clock`

### Request

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get List Of Units

Get List Of Units endpoint.

### Endpoint
`GET /api/units`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Capabilities

Get Capabilities endpoint.

### Endpoint
`GET /api/units/{pioreactor_unit}/capabilities`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Publish New Log

Publish New Log endpoint.

### Endpoint
`POST /api/units/{pioreactor_unit}/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "level": "<value>",
  "message": "<value>",
  "source": "<value>",
  "source_": "<value>",
  "task": "<value>",
  "timestamp": "<value>"
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

## Import Dot Pioreactor Archive

Import Dot Pioreactor Archive endpoint.

### Endpoint
`POST /api/units/{pioreactor_unit}/import_zipped_dot_pioreactor`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Run Job On Unit In Experiment

Runs specified job on unit.

### Endpoint
`PATCH /api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Run Job On Unit In Experiment

Runs specified job on unit.

### Endpoint
`POST /api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Jobs Running

Get Jobs Running endpoint.

### Endpoint
`GET /api/units/{pioreactor_unit}/jobs/running`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Stop All Jobs On Unit For Experiment

Kills all jobs for worker or unit assigned to experiment

### Endpoint
`PATCH /api/units/{pioreactor_unit}/jobs/stop/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Stop All Jobs On Unit For Experiment

Kills all jobs for worker or unit assigned to experiment

### Endpoint
`POST /api/units/{pioreactor_unit}/jobs/stop/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
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

Kills specified job on unit

### Endpoint
`PATCH /api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
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

Kills specified job on unit

### Endpoint
`POST /api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Update Job On Unit

Update specified job on unit. Use $broadcast for everyone.

### Endpoint
`PATCH /api/units/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
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

## Get Logs For Unit

Shows event logs from all units, uses pagination.

### Endpoint
`GET /api/units/{pioreactor_unit}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

```json
"<recent_logs>"
```

## Install Plugin Across Cluster

Install Plugin Across Cluster endpoint.

### Endpoint
`PATCH /api/units/{pioreactor_unit}/plugins/install`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Install Plugin Across Cluster

Install Plugin Across Cluster endpoint.

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/install`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Plugins On Machine

Get Plugins On Machine endpoint.

### Endpoint
`GET /api/units/{pioreactor_unit}/plugins/installed`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Uninstall Plugin Across Cluster

Uninstall Plugin Across Cluster endpoint.

### Endpoint
`PATCH /api/units/{pioreactor_unit}/plugins/uninstall`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Uninstall Plugin Across Cluster

Uninstall Plugin Across Cluster endpoint.

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/uninstall`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Reboot Unit

Reboots unit

### Endpoint
`POST /api/units/{pioreactor_unit}/system/reboot`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Shutdown Unit

Shutdown unit

### Endpoint
`POST /api/units/{pioreactor_unit}/system/shutdown`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Unit UTC Clock

Get Unit UTC Clock endpoint.

### Endpoint
`GET /api/units/{pioreactor_unit}/system/utc_clock`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get System Logs For Unit

Shows system logs from specific unit uses pagination.

### Endpoint
`GET /api/units/{pioreactor_unit}/system_logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

```json
"<recent_logs>"
```

## Get App Versions

Get App Versions endpoint.

### Endpoint
`GET /api/units/{pioreactor_unit}/versions/app`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Zipped Dot Pioreactor

Download a ZIP of ~/.pioreactor from one or all workers.

### Endpoint
`GET /api/units/{pioreactor_unit}/zipped_dot_pioreactor`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get List Of Workers

Get List Of Workers endpoint.

### Endpoint
`GET /api/workers`

### Response

#### Success

**Status:** `200 OK`

```json
"<all_workers>"
```

## Add Worker

Add Worker endpoint.

### Endpoint
`PUT /api/workers`

### Request

#### Request Body
```json
{
  "model_name": "<value>",
  "model_version": "<value>",
  "pioreactor_unit": "<value>"
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

Delete Worker endpoint.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Get Worker

Get Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

```json
"<result>"
```

## Get All Active Calibrations

Get All Active Calibrations endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/active_calibrations`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Remove Active Status Calibration

Remove Active Status Calibration endpoint.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/active_calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Set Active Calibration

Set Active Calibration endpoint.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/active_calibrations/{device}/{calibration_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |
| calibration_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get All Active Estimators

Get All Active Estimators endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/active_estimators`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Remove Active Status Estimator

Remove Active Status Estimator endpoint.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/active_estimators/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Set Active Estimator

Set Active Estimator endpoint.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/active_estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Blink Worker

Blink Worker endpoint.

### Endpoint
`POST /api/workers/{pioreactor_unit}/blink`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Get Calibration Protocols

Get Calibration Protocols endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibration_protocols`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get All Calibrations

Get All Calibrations endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Calibrations

Get Calibrations endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Create Calibration

Create Calibration endpoint.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |

#### Request Body
```json
{
  "calibration_data": "<value>",
  "set_as_active": "<value>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Delete Calibration

Delete Calibration endpoint.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/calibrations/{device}/{calibration_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |
| calibration_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Calibration

Get Calibration endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/{device}/{calibration_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |
| calibration_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Start Calibration Session

Start Calibration Session endpoint.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Calibration Session

Get Calibration Session endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| session_id | string | Yes | Calibration session identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Abort Calibration Session

Abort Calibration Session endpoint.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/abort`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| session_id | string | Yes | Calibration session identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Advance Calibration Session

Advance Calibration Session endpoint.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/inputs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| session_id | string | Yes | Calibration session identifier. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Capabilities

Get Capabilities endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/capabilities`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get All Estimators

Get All Estimators endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Estimators By Device

Get Estimators By Device endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Delete Estimator

Delete Estimator endpoint.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Estimator

Get Estimator endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| device | string | Yes | Target device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Experiment Assignment For Worker

Get Experiment Assignment For Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiment`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

```json
"<result>"
```

## Get Logs For Unit And Experiment

Shows event logs from specific unit and experiment, uses pagination.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
"<recent_logs>"
```

## Publish New Log

Publish New Log endpoint.

### Endpoint
`POST /api/workers/{pioreactor_unit}/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "level": "<value>",
  "message": "<value>",
  "source": "<value>",
  "source_": "<value>",
  "task": "<value>",
  "timestamp": "<value>"
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

## Get Recent Logs For Unit And Experiment

Shows event logs for a specific unit within an experiment. This is for the single-page Pioreactor ui

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/recent_logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

```json
"<recent_logs>"
```

## Get Fallback Time Series Per Unit

Get Fallback Time Series Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/{data_source}/{column}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |
| data_source | string | Yes | Time-series data source. |
| column | string | Yes | Column name. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Growth Rates Per Unit

Get Growth Rates Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/growth_rates`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get OD Readings Per Unit

Get OD Readings Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get OD Readings Filtered Per Unit

Get OD Readings Filtered Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_filtered`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get OD Readings Fused Per Unit

Get OD Readings Fused Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_fused`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get OD Raw Readings Per Unit

Get OD Raw Readings Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/raw_od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Temperature Readings Per Unit

Get Temperature Readings Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/temperature_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Change Worker Status

Change Worker Status endpoint.

### Endpoint
`PUT /api/workers/{pioreactor_unit}/is_active`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "is_active": "<value>"
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

## Run Job On Unit In Experiment

Runs specified job on unit.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Run Job On Unit In Experiment

Runs specified job on unit.

### Endpoint
`POST /api/workers/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
}
```

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Jobs Running

Get Jobs Running endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/jobs/running`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Job Settings For Worker

Get Job Settings For Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Job Setting For Worker

Get Job Setting For Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/setting/{setting}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| setting | string | Yes | Setting name. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Stop All Jobs On Unit For Experiment

Kills all jobs for worker or unit assigned to experiment

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Stop All Jobs On Unit For Experiment

Kills all jobs for worker or unit assigned to experiment

### Endpoint
`POST /api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
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

Kills specified job on unit

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
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

Kills specified job on unit

### Endpoint
`POST /api/workers/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "status": "success"
}
```

## Update Job On Unit

Update specified job on unit. Use $broadcast for everyone.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| job_name | string | Yes | Job name. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "<request_body>": "<see implementation>"
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

## Get Worker Model And Metadata

Get Worker Model And Metadata endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/model`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "pioreactor_unit": "<value>",
  "model_name": "<value>",
  "model_version": "<value>"
}
```

## Change Worker Model

Change Worker Model endpoint.

### Endpoint
`PUT /api/workers/{pioreactor_unit}/model`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "model_name": "<value>",
  "model_version": "<value>"
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

## Get Zipped Calibrations

Get Zipped Calibrations endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/zipped_calibrations`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Remove All Workers From All Experiments

Remove All Workers From All Experiments endpoint.

### Endpoint
`DELETE /api/workers/assignments`

### Response

#### Success

**Status:** `202 Accepted`

```json
{
  "unit": "<unit>",
  "task_id": "<task_id>",
  "result_url_path": "/unit_api/task_results/<task_id>"
}
```

## Get Workers And Experiment Assignments

Get Workers And Experiment Assignments endpoint.

### Endpoint
`GET /api/workers/assignments`

### Response

#### Success

**Status:** `200 OK`

```json
[]
```

## Discover Available Workers

Discover available pioreactor workers on the network not already registered.

### Endpoint
`GET /api/workers/discover`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Setup Worker Pioreactor

Setup Worker Pioreactor endpoint.

### Endpoint
`POST /api/workers/setup`

### Request

#### Request Body
```json
{
  "model": "<value>",
  "name": "<value>",
  "version": "<value>"
}
```

### Response

#### Success

**Status:** `200 OK`

```json
{
  "msg": "<string>"
}
```

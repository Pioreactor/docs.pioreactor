---
title: API Reference (Unit /unit_api)
slug: /unit-api-reference
toc_max_heading_level: 2
sidebar_class_name: sidebar-item--updated
---

### Conventions

- All Pioreactors have the `/unit_api` endpoints exposed.
- Async endpoints return `202 Accepted` with a `task_id` and `result_url_path`.
- Poll `GET /unit_api/task_results/{task_id}` until `status` is `complete` or `failed`.
- `$broadcast` may be used in path parameters where documented to target all units/workers.
- File download endpoints return binary bodies; use the response content-type to handle them.
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

## Get All Active Calibrations

Get All Active Calibrations endpoint.

### Endpoint
`GET /unit_api/active_calibrations`

### Response

#### Success

**Status:** `200 OK`

```json
"<all_calibrations>"
```

## Remove Active Status Calibration

Remove Active Status Calibration endpoint.

### Endpoint
`DELETE /unit_api/active_calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Set Active Calibration

Set Active Calibration endpoint.

### Endpoint
`PATCH /unit_api/active_calibrations/{device}/{calibration_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |
| calibration_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get All Active Estimators

Get All Active Estimators endpoint.

### Endpoint
`GET /unit_api/active_estimators`

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

## Remove Active Status Estimator

Remove Active Status Estimator endpoint.

### Endpoint
`DELETE /unit_api/active_estimators/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Set Active Estimator

Set Active Estimator endpoint.

### Endpoint
`PATCH /unit_api/active_estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success"
}
```

## Get Calibration Protocols

Get Calibration Protocols endpoint.

### Endpoint
`GET /unit_api/calibration_protocols`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get All Calibrations

Get All Calibrations endpoint.

### Endpoint
`GET /unit_api/calibrations`

### Response

#### Success

**Status:** `200 OK`

```json
"<all_calibrations>"
```

## Get Calibrations By Device

Get Calibrations By Device endpoint.

### Endpoint
`GET /unit_api/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |

### Response

#### Success

**Status:** `200 OK`

```json
"<calibrations>"
```

## Create Calibration

Create a new calibration for the specified device.

### Endpoint
`POST /unit_api/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
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

**Status:** `200 OK`

```json
"<response>"
```

## Delete Calibration

Delete a specific calibration for a given device.

### Endpoint
`DELETE /unit_api/calibrations/{device}/{calibration_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |
| calibration_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `200 OK`

```json
"<response>"
```

## Get Calibration

Get Calibration endpoint.

### Endpoint
`GET /unit_api/calibrations/{device}/{calibration_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |
| calibration_name | string | Yes | Calibration name. |

### Response

#### Success

**Status:** `200 OK`

```json
"<cal>"
```

## Get Capabilities

Get Capabilities endpoint.

### Endpoint
`GET /unit_api/capabilities`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get All Estimators

Get All Estimators endpoint.

### Endpoint
`GET /unit_api/estimators`

### Response

#### Success

**Status:** `200 OK`

```json
{}
```

## Get Estimators By Device

Get Estimators By Device endpoint.

### Endpoint
`GET /unit_api/estimators/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |

### Response

#### Success

**Status:** `200 OK`

```json
[]
```

## Delete Estimator

Delete Estimator endpoint.

### Endpoint
`DELETE /unit_api/estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `200 OK`

```json
"<response>"
```

## Get Estimator

Get Estimator endpoint.

### Endpoint
`GET /unit_api/estimators/{device}/{estimator_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | Yes | Target device name. |
| estimator_name | string | Yes | Estimator name. |

### Response

#### Success

**Status:** `200 OK`

```json
"<estimator>"
```

## Check Hardware For Model

Check Hardware For Model endpoint.

### Endpoint
`PATCH /unit_api/hardware/check`

### Request

#### Request Body
```json
{
  "model_name": "<value>",
  "model_version": "<value>"
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

## Check Hardware For Model

Check Hardware For Model endpoint.

### Endpoint
`POST /unit_api/hardware/check`

### Request

#### Request Body
```json
{
  "model_name": "<value>",
  "model_version": "<value>"
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

## Health Check

Health Check endpoint.

### Endpoint
`GET /unit_api/health`

### Response

#### Success

**Status:** `200 OK`

```json
"<payload>"
```

## Import Dot Pioreactor From Zip

Import Dot Pioreactor From Zip endpoint.

### Endpoint
`POST /unit_api/import_zipped_dot_pioreactor`

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

## Get Jobs

Get Jobs endpoint.

### Endpoint
`GET /unit_api/jobs`

### Response

#### Success

**Status:** `200 OK`

```json
"<jobs>"
```

## Run Job

Body should look like (all optional)

### Endpoint
`PATCH /unit_api/jobs/run/job_name/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

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

## Run Job

Body should look like (all optional)

### Endpoint
`POST /unit_api/jobs/run/job_name/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

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

## Get All Running Jobs

Get All Running Jobs endpoint.

### Endpoint
`GET /unit_api/jobs/running`

### Response

#### Success

**Status:** `200 OK`

```json
"<jobs>"
```

## Get Running Job

Get Running Job endpoint.

### Endpoint
`GET /unit_api/jobs/running/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

### Response

#### Success

**Status:** `200 OK`

```json
"<jobs>"
```

## Get Running Jobs For Experiment

Get Running Jobs For Experiment endpoint.

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
"<jobs>"
```

## Get Job Settings

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
  "settings": "<value>"
}
```

## Update Job

The body should look like:

### Endpoint
`PATCH /unit_api/jobs/settings/job_name/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Job Setting

Get Job Setting endpoint.

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
{}
```

## Stop Jobs

Stop Jobs endpoint.

### Endpoint
`PATCH /unit_api/jobs/stop`

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

## Stop Jobs

Stop Jobs endpoint.

### Endpoint
`POST /unit_api/jobs/stop`

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

## Stop All Jobs

Stop All Jobs endpoint.

### Endpoint
`PATCH /unit_api/jobs/stop/all`

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

## Stop All Jobs

Stop All Jobs endpoint.

### Endpoint
`POST /unit_api/jobs/stop/all`

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

## Get All Long Running Jobs

Get All Long Running Jobs endpoint.

### Endpoint
`GET /unit_api/long_running_jobs/running`

### Response

#### Success

**Status:** `200 OK`

```json
"<jobs>"
```

## Install Plugin

runs `pio plugin install ....`

### Endpoint
`PATCH /unit_api/plugins/install`

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

## Install Plugin

runs `pio plugin install ....`

### Endpoint
`POST /unit_api/plugins/install`

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

## Get Installed Plugins

Get Installed Plugins endpoint.

### Endpoint
`GET /unit_api/plugins/installed`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Installed Plugin

get a specific Python file in the .pioreactor/plugin folder

### Endpoint
`GET /unit_api/plugins/installed/{filename}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | Filename. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Uninstall Plugin

Body should look like:

### Endpoint
`PATCH /unit_api/plugins/uninstall`

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

## Uninstall Plugin

Body should look like:

### Endpoint
`POST /unit_api/plugins/uninstall`

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

## List System Path

List System Path endpoint.

### Endpoint
`GET /unit_api/system/path/`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "current": "<current>",
  "dirs": "<value>",
  "files": "<value>"
}
```

## List System Path

List System Path endpoint.

### Endpoint
`GET /unit_api/system/path/{req_path}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| req_path | string | Yes | Requested path segment. |

### Response

#### Success

**Status:** `200 OK`

```json
{
  "current": "<current>",
  "dirs": "<value>",
  "files": "<value>"
}
```

## Reboot System

Reboots unit

### Endpoint
`PATCH /unit_api/system/reboot`

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

## Reboot System

Reboots unit

### Endpoint
`POST /unit_api/system/reboot`

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

## Remove File

Remove File endpoint.

### Endpoint
`PATCH /unit_api/system/remove_file`

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

## Remove File

Remove File endpoint.

### Endpoint
`POST /unit_api/system/remove_file`

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

## Shutdown System

Shutdown unit

### Endpoint
`PATCH /unit_api/system/shutdown`

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

## Shutdown System

Shutdown unit

### Endpoint
`POST /unit_api/system/shutdown`

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

## Update Software

Update Software endpoint.

### Endpoint
`PATCH /unit_api/system/update`

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

## Update Software

Update Software endpoint.

### Endpoint
`POST /unit_api/system/update`

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

## Update Software Target

Update Software Target endpoint.

### Endpoint
`PATCH /unit_api/system/update/{target}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| target | string | Yes | Requested target. |

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

## Update Software Target

Update Software Target endpoint.

### Endpoint
`POST /unit_api/system/update/{target}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| target | string | Yes | Requested target. |

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

## Get Clock Time

Get Clock Time endpoint.

### Endpoint
`GET /unit_api/system/utc_clock`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "status": "success",
  "clock_time": "<current_time>"
}
```

## Set Clock Time

Set Clock Time endpoint.

### Endpoint
`PATCH /unit_api/system/utc_clock`

### Request

#### Request Body
```json
{
  "utc_clock_time": "<value>"
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

## Set Clock Time

Set Clock Time endpoint.

### Endpoint
`POST /unit_api/system/utc_clock`

### Request

#### Request Body
```json
{
  "utc_clock_time": "<value>"
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

## Restart Web Server

Restart Web Server endpoint.

### Endpoint
`PATCH /unit_api/system/web_server/restart`

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

## Restart Web Server

Restart Web Server endpoint.

### Endpoint
`POST /unit_api/system/web_server/restart`

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

## Get Web Server Status

Get Web Server Status endpoint.

### Endpoint
`GET /unit_api/system/web_server/status`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "service": "<value>",
  "state": "ready",
  "raw_status": "<status_text>"
}
```

## Get Task Status

Get Task Status endpoint.

### Endpoint
`GET /unit_api/task_results/{task_id}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| task_id | string | Yes | Background task identifier. |

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get App Version

Get App Version endpoint.

### Endpoint
`GET /unit_api/versions/app`

### Response

#### Success

**Status:** `200 OK`

```json
{
  "version": "<__version__>"
}
```

## Get Zipped Calibrations

Get Zipped Calibrations endpoint.

### Endpoint
`GET /unit_api/zipped_calibrations`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

## Get Zipped Dot Pioreactor

Create and return a ZIP of the entire DOT_PIOREACTOR directory.

### Endpoint
`GET /unit_api/zipped_dot_pioreactor`

### Response

#### Success

**Status:** `200 OK`

_No response body example inferred._

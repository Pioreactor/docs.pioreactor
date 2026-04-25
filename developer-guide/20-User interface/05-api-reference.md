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
    "cause": "Human-readable cause (defaults to error if not set)",
    "remediation": "Suggested fix or next step",
    "status": integer,
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
| automation_type | string | Yes | Automation type: dosing, temperature, led. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "display_name": "Only record temperature",
    "automation_name": "only_record_temperature",
    "description": "Apply no heating, only record the temperature.",
    "source": null,
    "fields": []
  },
  {
    "display_name": "Thermostat",
    "automation_name": "thermostat",
    "description": "Vary the amount of applied heating to keep the culture near a target temperature, using a control-loop.",
    "source": null,
    "fields": [
      {
        "key": "target_temperature",
        "default": 30,
        "label": "Target temperature",
        "disabled": false,
        "unit": "\u2103",
        "type": "numeric",
        "options": null
      }
    ]
  }
]
```

## Get Bioreactor Variable Descriptors

Get Bioreactor Variable Descriptors endpoint.

### Endpoint
`GET /api/bioreactor/descriptors`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "key": "current_volume_ml",
    "label": "Current volume",
    "description": "Current estimated liquid volume in the vial.",
    "type": "numeric",
    "unit": "mL",
    "min": 0.0,
    "max": null
  },
  {
    "key": "efflux_tube_volume_ml",
    "label": "Efflux tube level",
    "description": "Liquid volume equivalent to the height of the waste/efflux tube.",
    "type": "numeric",
    "unit": "mL",
    "min": 0.0,
    "max": null
  },
  {
    "key": "alt_media_fraction",
    "label": "Alt media fraction",
    "description": "Fraction of the current volume estimated to be alt media.",
    "type": "numeric",
    "unit": null,
    "min": 0.0,
    "max": 1.0
  }
]
```

## Get Chart Descriptors

Get Chart Descriptors endpoint.

### Endpoint
`GET /api/charts/descriptors`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "chart_key": "implied_growth_rate",
    "data_source": "growth_rates",
    "title": "Implied growth rate",
    "source": "app",
    "y_axis_label": "Growth rate, h\u207b\u00b9",
    "fixed_decimals": 2,
    "down_sample": true,
    "mqtt_topic": "growth_rate_calculating/growth_rate",
    "lookback": 100000,
    "data_source_column": null,
    "payload_key": "growth_rate",
    "y_transformation": "(y) => y",
    "y_axis_domain": [
      -0.02,
      0.1
    ],
    "interpolation": "stepAfter"
  },
  {
    "chart_key": "implied_daily_growth_rate",
    "data_source": "growth_rates",
    "title": "Implied daily growth rate",
    "source": "app",
    "y_axis_label": "Growth rate, d\u207b\u00b9",
    "fixed_decimals": 2,
    "down_sample": true,
    "mqtt_topic": "growth_rate_calculating/growth_rate",
    "lookback": 100000,
    "data_source_column": null,
    "payload_key": "growth_rate",
    "y_transformation": "(y) => 24 * y",
    "y_axis_domain": [
      -0.1,
      1.0
    ],
    "interpolation": "stepAfter"
  },
  {
    "chart_key": "fraction_of_volume_that_is_alternative_media",
    "data_source": "alt_media_fractions",
    "title": "Fraction of volume that is alternative media",
    "source": "app",
    "y_axis_label": "Fraction",
    "fixed_decimals": 3,
    "down_sample": false,
    "mqtt_topic": "bioreactor/alt_media_fraction",
    "lookback": 100000,
    "data_source_column": "alt_media_fraction",
    "payload_key": null,
    "y_transformation": "(y) => y",
    "y_axis_domain": [
      0.0,
      0.05
    ],
    "interpolation": "stepAfter"
  },
  {
    "...": "1 more items"
  }
]
```

## Get Shared Config

Get Shared Config endpoint.

### Endpoint
`GET /api/config/shared`

### Response

#### Success

Status: `200 OK`

Example body:

```json
"[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=alt_media\n5=heating\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# efflux_tube_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep r... ..."
```

## Update Shared Config

Update Shared Config endpoint.

### Endpoint
`PATCH /api/config/shared`

### Request

#### Request Body
```json
{
  "code": "[section]\nkey=value\n"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "status": "success"
}
```

## Get Shared Config History

Get Shared Config History endpoint.

### Endpoint
`GET /api/config/shared/history`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "filename": "config.ini",
    "timestamp": "2026-02-19T15:56:45.596Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=test\n5=heating\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# max_working_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep runnin... ..."
  },
  {
    "filename": "config.ini",
    "timestamp": "2026-01-19T16:38:19.492Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=alt_media\n5=heating\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# max_working_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep r... ..."
  },
  {
    "filename": "config.ini",
    "timestamp": "2026-01-15T01:12:24.848Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=alt_media\n5=heatingf\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# max_working_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep ... ..."
  },
  {
    "...": "1 more items"
  }
]
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

Status: `200 OK`

Example body:

```json
{}
```

## Get Specific Config For Pioreactor Unit

Get Specific Config For Pioreactor Unit endpoint.

### Endpoint
`GET /api/config/units/{pioreactor_unit}/specific`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
"[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=bubblert\n5=heating"
```

## Update Specific Config For Pioreactor Unit

Update Specific Config For Pioreactor Unit endpoint.

### Endpoint
`PATCH /api/config/units/{pioreactor_unit}/specific`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body
```json
{
  "code": "[section]\nkey=value\n"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "status": "success"
}
```

## Get Specific Config History For Pioreactor Unit

Get Specific Config History For Pioreactor Unit endpoint.

### Endpoint
`GET /api/config/units/{pioreactor_unit}/specific/history`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "filename": "unit_config.ini::localhost",
    "timestamp": "2026-04-08T00:58:21.686Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=bubblert\n5=heating"
  },
  {
    "filename": "unit_config.ini::localhost",
    "timestamp": "2026-04-08T00:18:45.007Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=bubbler\n5=heating"
  },
  {
    "filename": "config_localhost.ini",
    "timestamp": "2025-12-03T02:50:38.730Z",
    "data": "[bioreactor]\nmax_volume_ml=30\n"
  },
  {
    "...": "1 more items"
  }
]
```

## Get Exportable Datasets

Get Exportable Datasets endpoint.

### Endpoint
`GET /api/datasets/exportable`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[]
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

Status: `200 OK`

Example body:

```json
[
  {
    "experiment": "Demo experiment",
    "pioreactor_unit": "pio01",
    "timestamp": "2024-07-03T20:12:23.176823Z",
    "od_reading": 0.009324100513755453,
    "angle": 90,
    "channel": 2
  },
  {
    "experiment": "Demo experiment",
    "pioreactor_unit": "pio01",
    "timestamp": "2024-07-03T20:12:28.166988Z",
    "od_reading": 0.010660438493720935,
    "angle": 90,
    "channel": 2
  },
  {
    "experiment": "Demo experiment",
    "pioreactor_unit": "pio01",
    "timestamp": "2024-07-03T20:12:33.167090Z",
    "od_reading": 0.011332938885055854,
    "angle": 90,
    "channel": 2
  },
  {
    "...": "1 more items"
  }
]
```

## Export Exportable Datasets

Export Exportable Datasets endpoint.

### Endpoint
`POST /api/datasets/exportable/export`

### Request

#### Request Body
```json
{
  "datasets": [
    "growth_rates",
    "od_readings"
  ],
  "end_time": "2026-01-01T13:00:00Z",
  "experiments": [
    "demo_experiment"
  ],
  "partition_by_experiment": true,
  "partition_by_unit": true,
  "start_time": "2026-01-01T12:00:00Z"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get Experiment Profiles

Get Experiment Profiles endpoint.

### Endpoint
`GET /api/experiment_profiles`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[]
```

## Create Experiment Profile

Create Experiment Profile endpoint.

### Endpoint
`POST /api/experiment_profiles`

### Request

#### Request Body
```json
{
  "body": "file contents",
  "filename": "example.txt"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

```json
"experiment_profile_name: example.yaml\nmetadata:\n  author: Pioreactor\n"
```

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
  "body": "file contents"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

```json
[
  {
    "experiment": "efaeffefe",
    "created_at": "2026-04-13T15:47:38.212Z",
    "description": "",
    "delta_hours": 274.0,
    "worker_count": 0,
    "tags": [
      "4324-2344",
      "glp1"
    ]
  },
  {
    "experiment": "efaef4e4",
    "created_at": "2026-03-07T00:30:31.257Z",
    "description": "eefefaefaefefefeefefefafafefef",
    "delta_hours": 1177.0,
    "worker_count": 0,
    "tags": [
      "pencil",
      "notebook"
    ]
  },
  {
    "experiment": "efaef4",
    "created_at": "2026-02-06T01:19:11.315Z",
    "description": "aefaef",
    "delta_hours": 1872.0,
    "worker_count": 0,
    "tags": [
      "pencil",
      "notebook",
      "4324-2344",
      {
        "...": "1 more items"
      }
    ]
  },
  {
    "...": "1 more items"
  }
]
```

## Create Experiment

Create Experiment endpoint.

### Endpoint
`POST /api/experiments`

### Request

#### Request Body
```json
{
  "description": "Example description",
  "experiment": "demo_experiment",
  "mediaUsed": "LB broth",
  "organismUsed": "E. coli",
  "tags": [
    "demo"
  ]
}
```

### Response

#### Success

Status: `201 Created`

Example body:

```json
{
  "experiment": "demo_experiment",
  "created_at": "2026-01-01T12:00:00Z",
  "description": "Example experiment"
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

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

```json
{
  "experiment": "efaeffefe",
  "created_at": "2026-04-13T15:47:38.212Z",
  "description": "",
  "delta_hours": 274.0,
  "worker_count": 0,
  "tags": [
    "4324-2344",
    "glp1"
  ]
}
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
  "description": "Example description",
  "tags": [
    "demo"
  ]
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "experiment": "demo_experiment",
  "updated_at": "2026-01-01T12:05:00Z",
  "description": "Updated experiment description"
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

Status: `200 OK`

Example body:

```json
[]
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

Status: `200 OK`

Example body:

```json
[]
```

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

Status: `200 OK`

Example body:

```json
[
  {
    "pioreactor_unit": "localhost",
    "experiment": "efaeffefe",
    "is_currently_assigned_to_experiment": 0
  },
  {
    "pioreactor_unit": "missing",
    "experiment": "efaeffefe",
    "is_currently_assigned_to_experiment": 0
  },
  {
    "pioreactor_unit": "pio01",
    "experiment": "efaeffefe",
    "is_currently_assigned_to_experiment": 0
  },
  {
    "...": "1 more items"
  }
]
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

Status: `200 OK`

Example body:

```json
[]
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

Status: `200 OK`

Example body:

```json
{}
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

Status: `200 OK`

Example body:

```json
[]
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

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T12:00:00Z",
    "pioreactor_unit": "pio01",
    "value": 1.23
  }
]
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{}
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
  "label": "control",
  "unit": "pio01"
}
```

### Response

#### Success

Status: `201 Created`

Example body:

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
  "label": "control",
  "unit": "pio01"
}
```

### Response

#### Success

Status: `201 Created`

Example body:

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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `200 OK`

Example body:

```json
[]
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
  "pioreactor_unit": "pio01"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

```json
[
  {
    "experiment": "ALE - Acetate",
    "created_at": "2024-09-04T17:04:46.423882Z",
    "description": "MZ PhD Evolution research experiment. Pioreactors 9-16.",
    "delta_hours": 14336.0,
    "worker_count": 1,
    "tags": []
  }
]
```

## Get Experiments Worker Assignments

Get Experiments Worker Assignments endpoint.

### Endpoint
`GET /api/experiments/assignment_count`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "experiment": "ALE - Acetate",
    "worker_count": 1
  }
]
```

## Get Latest Experiment

Get Latest Experiment endpoint.

### Endpoint
`GET /api/experiments/latest`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "experiment": "efaeffefe",
  "created_at": "2026-04-13T15:47:38.212Z",
  "description": "",
  "delta_hours": 274.0,
  "worker_count": 0,
  "tags": [
    "4324-2344",
    "glp1"
  ]
}
```

## Get Historical Media Used

Get Historical Media Used endpoint.

### Endpoint
`GET /api/historical_media`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "key": "DM-Glc %0.1"
  },
  {
    "key": "MOPS 0.03% glc, 0.3% glycerol"
  },
  {
    "key": "MOPS 0.2% glc"
  },
  {
    "...": "1 more items"
  }
]
```

## Get Historical Organisms Used

Get Historical Organisms Used endpoint.

### Endpoint
`GET /api/historical_organisms`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "key": "MG1655/NCM3270/W3110/REL606"
  },
  {
    "key": "REL606"
  },
  {
    "key": "REL606 \u2206pykF"
  },
  {
    "...": "1 more items"
  }
]
```

## Get Job Descriptors

Get Job Descriptors endpoint.

### Endpoint
`GET /api/jobs/descriptors`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "display_name": "Stirring",
    "job_name": "stirring",
    "display": true,
    "published_settings": [
      {
        "key": "target_rpm",
        "type": "numeric",
        "display": true,
        "description": "Modify the target RPM of stirring. This will effect the optical density reading. Too low and the stirring may completely stop. Too high and the resulting vortex may interfere with the optics.",
        "default": null,
        "unit": "RPM",
        "label": "Target stir RPM",
        "editable": true
      }
    ],
    "source": "app",
    "description": "Start the stirring on the Pioreactor. Stirring is needed for mixing and proper OD measurements.",
    "subtext": null,
    "is_testing": false
  },
  {
    "display_name": "Optical density",
    "job_name": "od_reading",
    "display": true,
    "published_settings": [],
    "source": "app",
    "description": "Collect optical density measurements of the culture over time.",
    "subtext": null,
    "is_testing": false
  },
  {
    "display_name": "Growth rate",
    "job_name": "growth_rate_calculating",
    "display": true,
    "published_settings": [],
    "source": "app",
    "description": "Transform optical density measurements into culture growth rate measurements. Start this after innoculation. Begins by sampling for a few minutes to gather a baseline.",
    "subtext": null,
    "is_testing": false
  },
  {
    "...": "1 more items"
  }
]
```

## Get Local Access Point

Get Local Access Point endpoint.

### Endpoint
`GET /api/local_access_point`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "active": false
}
```

## Get Logs

Shows event logs from all units, uses pagination.

### Endpoint
`GET /api/logs`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-03-20T17:14:10Z",
    "level": "ERROR",
    "pioreactor_unit": "pio01",
    "message": "Manual dev log 3",
    "task": "manual",
    "experiment": "efaef"
  },
  {
    "timestamp": "2026-03-20T17:14:05Z",
    "level": "WARNING",
    "pioreactor_unit": "pio01",
    "message": "Manual dev log 2",
    "task": "manual",
    "experiment": "efaef"
  },
  {
    "timestamp": "2026-03-20T17:14:00Z",
    "level": "INFO",
    "pioreactor_unit": "pio01",
    "message": "Manual dev log 1",
    "task": "manual",
    "experiment": "efaef"
  },
  {
    "...": "1 more items"
  }
]
```

## Get Models

Return the list of supported Pioreactor models (name, version, display_name).

### Endpoint
`GET /api/models`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "models": [
    {
      "model_name": "pioreactor_40ml",
      "model_version": "1.5",
      "display_name": "Pioreactor 40ml, v1.5",
      "reactor_capacity_ml": 40.0,
      "reactor_diameter_mm": 27.0,
      "reactor_max_fill_volume_ml": 38.0,
      "max_temp_to_reduce_heating": 78.0,
      "max_temp_to_disable_heating": 80.0,
      "max_temp_to_shutdown": 85.0,
      "is_legacy": false,
      "is_contrib": false
    },
    {
      "model_name": "pioreactor_40ml",
      "model_version": "1.0",
      "display_name": "Pioreactor 40ml, v1.0",
      "reactor_capacity_ml": 40.0,
      "reactor_diameter_mm": 27.0,
      "reactor_max_fill_volume_ml": 38.0,
      "max_temp_to_reduce_heating": 78.0,
      "max_temp_to_disable_heating": 80.0,
      "max_temp_to_shutdown": 85.0,
      "is_legacy": true,
      "is_contrib": false
    },
    {
      "model_name": "pioreactor_20ml",
      "model_version": "1.1",
      "display_name": "Pioreactor 20ml, v1.1",
      "reactor_capacity_ml": 20.0,
      "reactor_diameter_mm": 27.0,
      "reactor_max_fill_volume_ml": 18.0,
      "max_temp_to_reduce_heating": 78.0,
      "max_temp_to_disable_heating": 80.0,
      "max_temp_to_shutdown": 85.0,
      "is_legacy": true,
      "is_contrib": false
    },
    {
      "...": "1 more items"
    }
  ]
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
  "release_archive_location": "/tmp/pioreactor-release.zip",
  "units": [
    "pio01",
    "pio02"
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Update App

Update App endpoint.

### Endpoint
`POST /api/system/update_next_version`

### Request

#### Request Body
```json
{
  "units": [
    "pio01",
    "pio02"
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
  "content_type": "multipart/form-data",
  "files": {
    "file": "pioreactor-release.zip"
  }
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "status": "success"
}
```

## Set System UTC Clock

Set System UTC Clock endpoint.

### Endpoint
`POST /api/system/utc_clock`

### Request

#### Request Body
```json
{
  "utc_clock_time": "2026-01-01T12:00:00Z"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get List Of Units

Get List Of Units endpoint.

### Endpoint
`GET /api/units`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "pioreactor_unit": "localhost"
  },
  {
    "pioreactor_unit": "unit01"
  }
]
```

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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "d0da9e9d-6e3e-41d4-8fc9-284ce0197f1a",
  "result_url_path": "/unit_api/task_results/d0da9e9d-6e3e-41d4-8fc9-284ce0197f1a"
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
  "level": "INFO",
  "message": "Started stirring.",
  "source": "ui",
  "source_": "ui",
  "task": "stirring",
  "timestamp": "2026-01-01T12:00:00Z"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

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
  "content_type": "multipart/form-data",
  "files": {
    "archive": "dot_pioreactor.zip"
  }
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

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
  "options": {
    "target_rpm": "200"
  },
  "env": {
    "JOB_SOURCE": "api"
  },
  "args": [
    "some-flag"
  ],
  "config_overrides": [
    [
      "stirring.config",
      "pwm_hz",
      "100"
    ]
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
  "options": {
    "target_rpm": "200"
  },
  "env": {
    "JOB_SOURCE": "api"
  },
  "args": [
    "some-flag"
  ],
  "config_overrides": [
    [
      "stirring.config",
      "pwm_hz",
      "100"
    ]
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "265395a9-0517-4613-8a67-61794d4ab3ee",
  "result_url_path": "/unit_api/task_results/265395a9-0517-4613-8a67-61794d4ab3ee"
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

Status: `202 Accepted`

Example body:

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

Status: `202 Accepted`

Example body:

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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
  "settings": {
    "target_rpm": 500
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

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

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-15T00:26:13.804Z",
    "level": "ERROR",
    "pioreactor_unit": "localhost",
    "message": "Could not sync configs to all Pioreactors.",
    "task": "pioreactor-localhost-api",
    "experiment": "$experiment"
  },
  {
    "timestamp": "2026-01-15T00:26:06.621Z",
    "level": "ERROR",
    "pioreactor_unit": "localhost",
    "message": "Could not sync configs to all Pioreactors.",
    "task": "pioreactor-localhost-api",
    "experiment": "$experiment"
  },
  {
    "timestamp": "2026-01-11T17:42:58.337Z",
    "level": "INFO",
    "pioreactor_unit": "localhost",
    "message": "Disconnected.",
    "task": "stirring",
    "experiment": "test_is_pio_job_running_multiple"
  },
  {
    "...": "1 more items"
  }
]
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
  "options": {
    "option_name": "value"
  },
  "env": {
    "ENV_VAR": "value"
  },
  "args": [
    "some-flag"
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
  "options": {
    "option_name": "value"
  },
  "env": {
    "ENV_VAR": "value"
  },
  "args": [
    "some-flag"
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "f0931b5d-8b79-4f8c-a57b-02279394d21b",
  "result_url_path": "/unit_api/task_results/f0931b5d-8b79-4f8c-a57b-02279394d21b"
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
  "options": {
    "option_name": "value"
  },
  "env": {
    "ENV_VAR": "value"
  },
  "args": [
    "some-flag"
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
  "options": {
    "option_name": "value"
  },
  "env": {
    "ENV_VAR": "value"
  },
  "args": [
    "some-flag"
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `200 OK`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `200 OK`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "3caf50de-a972-4b90-b50b-5ee01d0b2ee9",
  "result_url_path": "/unit_api/task_results/3caf50de-a972-4b90-b50b-5ee01d0b2ee9"
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

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-15T00:26:13.804Z",
    "level": "ERROR",
    "pioreactor_unit": "localhost",
    "message": "Could not sync configs to all Pioreactors.",
    "task": "pioreactor-localhost-api",
    "experiment": "$experiment"
  },
  {
    "timestamp": "2026-01-15T00:26:06.621Z",
    "level": "ERROR",
    "pioreactor_unit": "localhost",
    "message": "Could not sync configs to all Pioreactors.",
    "task": "pioreactor-localhost-api",
    "experiment": "$experiment"
  },
  {
    "timestamp": "2026-01-11T17:39:37.225Z",
    "level": "INFO",
    "pioreactor_unit": "localhost",
    "message": "Saved calibration test_analyze to /Users/camerondavidson-pilon/code/pioreactor/.pioreactor/storage/calibrations/od90/test_analyze.yaml",
    "task": "calibrations",
    "experiment": "$experiment"
  },
  {
    "...": "1 more items"
  }
]
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "b4be6229-527a-43ef-ad41-9b8b5e969ffd",
  "result_url_path": "/unit_api/task_results/b4be6229-527a-43ef-ad41-9b8b5e969ffd"
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

Status: `200 OK`

Example body:

```json
{
  "content_type": "application/zip",
  "body": "file contents"
}
```

## Get List Of Workers

Get List Of Workers endpoint.

### Endpoint
`GET /api/workers`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "pioreactor_unit": "localhost",
    "added_at": "2025-10-03T14:12:44.444Z",
    "is_active": 1,
    "model_name": "pioreactor_40ml",
    "model_version": "1.5"
  },
  {
    "pioreactor_unit": "unit01",
    "added_at": "2026-04-23T00:31:23.936Z",
    "is_active": 1,
    "model_name": "pioreactor_40ml",
    "model_version": "1.5"
  }
]
```

## Add Worker

Add Worker endpoint.

### Endpoint
`PUT /api/workers`

### Request

#### Request Body
```json
{
  "model_name": "pioreactor_40ml",
  "model_version": "1.5",
  "pioreactor_unit": "pio01"
}
```

### Response

#### Success

Status: `201 Created`

Example body:

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

Status: `202 Accepted`

Example body:

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

Status: `200 OK`

Example body:

```json
{
  "pioreactor_unit": "localhost",
  "added_at": "2025-10-03T14:12:44.444Z",
  "is_active": 1,
  "model_name": "pioreactor_40ml",
  "model_version": "1.5"
}
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "f4c64a3c-c9bd-4a5d-9073-41d353c36511",
  "result_url_path": "/unit_api/task_results/f4c64a3c-c9bd-4a5d-9073-41d353c36511"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "b38783f2-230c-44ec-bfa2-14033daa2887",
  "result_url_path": "/unit_api/task_results/b38783f2-230c-44ec-bfa2-14033daa2887"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get Automation Descriptors For Worker

Get Automation Descriptors For Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/automations/descriptors/{automation_type}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| automation_type | string | Yes | Automation type: dosing, temperature, led. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "display_name": "Only record temperature",
    "automation_name": "only_record_temperature",
    "description": "Apply no heating, only record the temperature.",
    "source": null,
    "fields": []
  },
  {
    "display_name": "Thermostat",
    "automation_name": "thermostat",
    "description": "Vary the amount of applied heating to keep the culture near a target temperature, using a control-loop.",
    "source": null,
    "fields": [
      {
        "key": "target_temperature",
        "default": 30,
        "label": "Target temperature",
        "disabled": false,
        "unit": "\u2103",
        "type": "numeric",
        "options": null
      }
    ]
  }
]
```

## Update Bioreactor On Unit

Update Bioreactor On Unit endpoint.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/bioreactor/update/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body
```json
{
  "values": {
    "temperature": 30.0,
    "current_volume_ml": 14.0
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "ac4c7f24-4b8c-4992-87ef-8c99bdfcc5f4",
  "result_url_path": "/unit_api/task_results/ac4c7f24-4b8c-4992-87ef-8c99bdfcc5f4"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "dbff665d-78e8-4862-9af0-8f9143274430",
  "result_url_path": "/unit_api/task_results/dbff665d-78e8-4862-9af0-8f9143274430"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "eea95d6c-ebd7-434e-adfd-699ba080a8da",
  "result_url_path": "/unit_api/task_results/eea95d6c-ebd7-434e-adfd-699ba080a8da"
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
  "calibration_data": "calibration_name: stirring-calibration\ncalibration_type: stirring\n",
  "set_as_active": true
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "729e3c74-cdfd-42da-a7bd-bc73f098b448",
  "result_url_path": "/unit_api/task_results/729e3c74-cdfd-42da-a7bd-bc73f098b448"
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
  "protocol": "stirring",
  "target_device": "stirring"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "session_id": "example-session",
  "state": "running",
  "current_step": "prepare"
}
```

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

Status: `200 OK`

Example body:

```json
{
  "session_id": "example-session",
  "state": "running",
  "current_step": "record_measurement"
}
```

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

#### Request Body
```json
{
  "reason": "User cancelled calibration."
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "status": "aborted",
  "session_id": "example-session"
}
```

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
  "inputs": {
    "measured_rpm": 500
  }
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "session_id": "example-session",
  "state": "running",
  "current_step": "record_measurement"
}
```

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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "78df66f5-1991-46f2-967e-c58484f7e499",
  "result_url_path": "/unit_api/task_results/78df66f5-1991-46f2-967e-c58484f7e499"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "a95fd18e-7fcb-45df-b1f9-f038370ae666",
  "result_url_path": "/unit_api/task_results/a95fd18e-7fcb-45df-b1f9-f038370ae666"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "8797e234-358e-428a-a4d1-854ed5aa1d99",
  "result_url_path": "/unit_api/task_results/8797e234-358e-428a-a4d1-854ed5aa1d99"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "27569c07-4fa6-4b9e-8b4c-b1f82e0c7205",
  "result_url_path": "/unit_api/task_results/27569c07-4fa6-4b9e-8b4c-b1f82e0c7205"
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

Status: `200 OK`

Example body:

```json
{
  "pioreactor_unit": "localhost",
  "is_active": 1,
  "experiment": "ALE - Acetate",
  "model_name": "pioreactor_40ml",
  "model_version": "1.5"
}
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

Status: `200 OK`

Example body:

```json
[]
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
  "level": "INFO",
  "message": "Started stirring.",
  "source": "ui",
  "source_": "ui",
  "task": "stirring",
  "timestamp": "2026-01-01T12:00:00Z"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

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

Status: `200 OK`

Example body:

```json
[]
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

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T12:00:00Z",
    "value": 1.23
  }
]
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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

Status: `200 OK`

Example body:

```json
{
  "series": [],
  "data": []
}
```

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
  "is_active": 1
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "status": "success"
}
```

## Get Job Descriptors For Worker

Get Job Descriptors For Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/jobs/descriptors`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "display_name": "Stirring",
    "job_name": "stirring",
    "display": true,
    "published_settings": [
      {
        "key": "target_rpm",
        "type": "numeric",
        "display": true,
        "description": "Modify the target RPM of stirring. This will effect the optical density reading. Too low and the stirring may completely stop. Too high and the resulting vortex may interfere with the optics.",
        "default": null,
        "unit": "RPM",
        "label": "Target stir RPM",
        "editable": true
      }
    ],
    "source": "app",
    "description": "Start the stirring on the Pioreactor. Stirring is needed for mixing and proper OD measurements.",
    "subtext": null,
    "is_testing": false
  },
  {
    "display_name": "Optical density",
    "job_name": "od_reading",
    "display": true,
    "published_settings": [],
    "source": "app",
    "description": "Collect optical density measurements of the culture over time.",
    "subtext": null,
    "is_testing": false
  },
  {
    "display_name": "Growth rate",
    "job_name": "growth_rate_calculating",
    "display": true,
    "published_settings": [],
    "source": "app",
    "description": "Transform optical density measurements into culture growth rate measurements. Start this after innoculation. Begins by sampling for a few minutes to gather a baseline.",
    "subtext": null,
    "is_testing": false
  },
  {
    "...": "1 more items"
  }
]
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
  "options": {
    "target_rpm": "200"
  },
  "env": {
    "JOB_SOURCE": "api"
  },
  "args": [
    "some-flag"
  ],
  "config_overrides": [
    [
      "stirring.config",
      "pwm_hz",
      "100"
    ]
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
  "options": {
    "target_rpm": "200"
  },
  "env": {
    "JOB_SOURCE": "api"
  },
  "args": [
    "some-flag"
  ],
  "config_overrides": [
    [
      "stirring.config",
      "pwm_hz",
      "100"
    ]
  ]
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "localhost",
  "task_id": "67ecce8a-bbfa-4c19-ab9c-cec72606bf2a",
  "result_url_path": "/unit_api/task_results/67ecce8a-bbfa-4c19-ab9c-cec72606bf2a"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

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

Status: `202 Accepted`

Example body:

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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
  "settings": {
    "target_rpm": 500
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

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

Status: `200 OK`

Example body:

```json
{
  "pioreactor_unit": "localhost",
  "model_name": "pioreactor_40ml",
  "model_version": "1.5",
  "display_name": "Pioreactor 40ml, v1.5",
  "reactor_capacity_ml": 40.0,
  "reactor_diameter_mm": 27.0,
  "reactor_max_fill_volume_ml": 38.0,
  "max_temp_to_reduce_heating": 78.0,
  "max_temp_to_disable_heating": 80.0,
  "max_temp_to_shutdown": 85.0,
  "is_legacy": false,
  "is_contrib": false
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
  "model_name": "pioreactor_40ml",
  "model_version": "1.5"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

```json
{
  "content_type": "application/zip",
  "body": "file contents"
}
```

## Remove All Workers From All Experiments

Remove All Workers From All Experiments endpoint.

### Endpoint
`DELETE /api/workers/assignments`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get Workers And Experiment Assignments

Get Workers And Experiment Assignments endpoint.

### Endpoint
`GET /api/workers/assignments`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[]
```

## Discover Available Workers

Discover available pioreactor workers on the network not already registered.

### Endpoint
`GET /api/workers/discover`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[]
```

## Setup Worker Pioreactor

Setup Worker Pioreactor endpoint.

### Endpoint
`POST /api/workers/setup`

### Request

#### Request Body
```json
{
  "model": "pioreactor_40ml",
  "name": "pio01",
  "version": "1.0.0"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "msg": "success"
}
```

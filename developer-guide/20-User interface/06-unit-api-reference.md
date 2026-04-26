---
title: API Reference (Unit /unit_api)
slug: /unit-api-reference
toc_max_heading_level: 2
sidebar_class_name: sidebar-item--updated
---

### Conventions

- All Pioreactors have the `/unit_api` endpoints exposed.
- Async endpoints return `202 Accepted` with a `task_id` and `result_url_path`.
- Poll `GET /unit_api/task_results/{task_id}` until `status` is `succeeded` or `failed`.
- File download endpoints return binary bodies; use the response content-type to handle them.
- Path parameters are shown inline in the endpoint URL.
- Request/response examples are the canonical shapes; omit optional fields you do not need.
- Errors have the following schema:

```json
{
  "error": "Human-readable error message",
  "cause": "Human-readable cause (defaults to error if not set)",
  "remediation": "Suggested fix or next step",
  "status": 400
}
```

# Pioreactor Unit API

Generated from `core/pioreactor/web/unit_api.py`.

> This file is generated. Edit the API source or generator instead of editing this file by hand.

Endpoint count: `71`

## Endpoint Index

| Method | Path | Handler |
| ------ | ---- | ------- |
| `GET` | `/unit_api/active_calibrations` | `get_all_active_calibrations` |
| `DELETE` | `/unit_api/active_calibrations/{device}` | `remove_active_status_calibration` |
| `PATCH` | `/unit_api/active_calibrations/{device}/{calibration_name}` | `set_active_calibration` |
| `GET` | `/unit_api/active_estimators` | `get_all_active_estimators` |
| `DELETE` | `/unit_api/active_estimators/{device}` | `remove_active_status_estimator` |
| `PATCH` | `/unit_api/active_estimators/{device}/{estimator_name}` | `set_active_estimator` |
| `GET` | `/unit_api/automations/descriptors/{automation_type}` | `get_automation_descriptors` |
| `GET` | `/unit_api/bioreactor/experiments/{experiment}` | `get_bioreactor_values` |
| `PATCH` | `/unit_api/bioreactor/experiments/{experiment}` | `update_bioreactor_values` |
| `GET` | `/unit_api/calibration_protocols` | `get_calibration_protocols` |
| `GET` | `/unit_api/calibrations` | `get_all_calibrations` |
| `GET` | `/unit_api/calibrations/{device}` | `get_calibrations_by_device` |
| `POST` | `/unit_api/calibrations/{device}` | `create_calibration` |
| `DELETE` | `/unit_api/calibrations/{device}/{calibration_name}` | `delete_calibration` |
| `GET` | `/unit_api/calibrations/{device}/{calibration_name}` | `get_calibration` |
| `GET` | `/unit_api/capabilities` | `get_capabilities` |
| `GET` | `/unit_api/config/merged` | `get_merged_config` |
| `GET` | `/unit_api/config/specific` | `get_specific_config` |
| `PATCH` | `/unit_api/config/specific` | `update_specific_config` |
| `POST` | `/unit_api/config/specific` | `update_specific_config` |
| `GET` | `/unit_api/estimators` | `get_all_estimators` |
| `GET` | `/unit_api/estimators/{device}` | `get_estimators_by_device` |
| `DELETE` | `/unit_api/estimators/{device}/{estimator_name}` | `delete_estimator` |
| `GET` | `/unit_api/estimators/{device}/{estimator_name}` | `get_estimator` |
| `PATCH` | `/unit_api/hardware/check` | `check_hardware_for_model` |
| `POST` | `/unit_api/hardware/check` | `check_hardware_for_model` |
| `GET` | `/unit_api/health` | `health_check` |
| `POST` | `/unit_api/import_zipped_dot_pioreactor` | `import_dot_pioreactor_from_zip` |
| `GET` | `/unit_api/jobs` | `get_jobs` |
| `GET` | `/unit_api/jobs/descriptors` | `get_job_descriptors` |
| `PATCH` | `/unit_api/jobs/run/job_name/{job_name}` | `run_job` |
| `POST` | `/unit_api/jobs/run/job_name/{job_name}` | `run_job` |
| `GET` | `/unit_api/jobs/running` | `get_all_running_jobs` |
| `GET` | `/unit_api/jobs/running/{job_name}` | `get_running_job` |
| `GET` | `/unit_api/jobs/running/experiments/{experiment}` | `get_running_jobs_for_experiment` |
| `GET` | `/unit_api/jobs/settings/job_name/{job_name}` | `get_job_settings` |
| `PATCH` | `/unit_api/jobs/settings/job_name/{job_name}` | `update_job` |
| `GET` | `/unit_api/jobs/settings/job_name/{job_name}/setting/{setting}` | `get_job_setting` |
| `PATCH` | `/unit_api/jobs/stop` | `stop_jobs` |
| `POST` | `/unit_api/jobs/stop` | `stop_jobs` |
| `PATCH` | `/unit_api/jobs/stop/all` | `stop_all_jobs` |
| `POST` | `/unit_api/jobs/stop/all` | `stop_all_jobs` |
| `GET` | `/unit_api/long_running_jobs/running` | `get_all_long_running_jobs` |
| `PATCH` | `/unit_api/plugins/install` | `install_plugin` |
| `POST` | `/unit_api/plugins/install` | `install_plugin` |
| `GET` | `/unit_api/plugins/installed` | `get_installed_plugins` |
| `GET` | `/unit_api/plugins/installed/{filename}` | `get_installed_plugin` |
| `PATCH` | `/unit_api/plugins/uninstall` | `uninstall_plugin` |
| `POST` | `/unit_api/plugins/uninstall` | `uninstall_plugin` |
| `GET` | `/unit_api/system/path/` | `list_system_path` |
| `GET` | `/unit_api/system/path/{req_path}` | `list_system_path` |
| `PATCH` | `/unit_api/system/reboot` | `reboot_system` |
| `POST` | `/unit_api/system/reboot` | `reboot_system` |
| `PATCH` | `/unit_api/system/remove_file` | `remove_file` |
| `POST` | `/unit_api/system/remove_file` | `remove_file` |
| `PATCH` | `/unit_api/system/shutdown` | `shutdown_system` |
| `POST` | `/unit_api/system/shutdown` | `shutdown_system` |
| `PATCH` | `/unit_api/system/update` | `update_software` |
| `POST` | `/unit_api/system/update` | `update_software` |
| `PATCH` | `/unit_api/system/update/{target}` | `update_software_target` |
| `POST` | `/unit_api/system/update/{target}` | `update_software_target` |
| `GET` | `/unit_api/system/utc_clock` | `get_clock_time` |
| `PATCH` | `/unit_api/system/utc_clock` | `set_clock_time` |
| `POST` | `/unit_api/system/utc_clock` | `set_clock_time` |
| `PATCH` | `/unit_api/system/web_server/restart` | `restart_web_server` |
| `POST` | `/unit_api/system/web_server/restart` | `restart_web_server` |
| `GET` | `/unit_api/system/web_server/status` | `get_web_server_status` |
| `GET` | `/unit_api/task_results/{task_id}` | `get_task_status` |
| `GET` | `/unit_api/versions/app` | `get_app_version` |
| `GET` | `/unit_api/zipped_calibrations` | `get_zipped_calibrations` |
| `GET` | `/unit_api/zipped_dot_pioreactor` | `get_zipped_dot_pioreactor` |

## Get All Active Calibrations

Get All Active Calibrations endpoint.

### Endpoint
`GET /unit_api/active_calibrations`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{}
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

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

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

Status: `200 OK`

Example body:

```json
{
  "status": "success"
}
```

## Get Automation Descriptors

Get Automation Descriptors endpoint.

### Endpoint
`GET /unit_api/automations/descriptors/{automation_type}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| automation_type | string | Yes | Automation type, for example `dosing`, `temperature`, or `led`. |

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

## Get Bioreactor Values

Get Bioreactor Values endpoint.

### Endpoint
`GET /unit_api/bioreactor/experiments/{experiment}`

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
  "values": {
    "current_volume_ml": 14.0,
    "efflux_tube_volume_ml": 14.0,
    "alt_media_fraction": 0.0
  }
}
```

## Update Bioreactor Values

Update Bioreactor Values endpoint.

### Endpoint
`PATCH /unit_api/bioreactor/experiments/{experiment}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| values | object | Yes | values. |

```json
{
  "values": {
    "current_volume_ml": 12.5
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

## Get Calibration Protocols

Get Calibration Protocols endpoint.

### Endpoint
`GET /unit_api/calibration_protocols`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "id": "alt_media_pump_duration_based",
    "target_device": "alt_media_pump",
    "protocol_name": "duration_based",
    "priority": 99,
    "title": "Duration-based pump calibration",
    "description": "Build a duration-to-volume curve for the alt media pump using a simple multi-step flow.",
    "requirements": [
      "DC Peristaltic pump assigned to alt media pump",
      "Pioreactor vial",
      "Container of clean water"
    ]
  },
  {
    "id": "media_pump_duration_based",
    "target_device": "media_pump",
    "protocol_name": "duration_based",
    "priority": 99,
    "title": "Duration-based pump calibration",
    "description": "Build a duration-to-volume curve for the media pump using a simple multi-step flow.",
    "requirements": [
      "DC Peristaltic pump assigned to media pump",
      "Pioreactor vial",
      "Container of clean water"
    ]
  },
  {
    "id": "od90_standards",
    "target_device": "od90",
    "protocol_name": "standards",
    "priority": 99,
    "title": "OD600 calibration using standards",
    "description": "Calibrate od90 channels using a series of OD600 standards and a blank.",
    "requirements": [
      "OD600 standards (including a blank)",
      "Vials",
      "Stir bars"
    ]
  }
]
```

## Get All Calibrations

Get All Calibrations endpoint.

### Endpoint
`GET /unit_api/calibrations`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "alt_media_pump": [
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "alt_media-2023-05-02",
      "calibrated_on_pioreactor_unit": "testing_unit",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          1.0270833333333333,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [
          0.5,
          0.5,
          0.5
        ],
        "y": [
          0.5,
          0.5,
          0.5
        ]
      },
      "hz": 200.0,
      "dc": 90.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "alt_media-2023-12-02",
      "calibrated_on_pioreactor_unit": "testing_unit",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          1.3333333333333333,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [
          0.5,
          0.5,
          0.5
        ],
        "y": [
          0.5,
          0.5,
          0.5
        ]
      },
      "hz": 250.0,
      "dc": 95.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "alt_media_pump-2026-01-28",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-01-28T01:45:28.286000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          6.224877783813145,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [
          0.26666666666666666,
          0.26666666666666666,
          0.26666666666666666
        ],
        "y": [
          1.0,
          1.0,
          1.0
        ]
      },
      "hz": 250.0,
      "dc": 100.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    }
  ],
  "media_pump": [
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "alt_media-2023-05-02",
      "calibrated_on_pioreactor_unit": "testing_unit",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          1.0270833333333333,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [
          0.5,
          0.5,
          0.5
        ],
        "y": [
          0.5,
          0.5,
          0.5
        ]
      },
      "hz": 200.0,
      "dc": 90.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "debug",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          1.0,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [],
        "y": []
      },
      "hz": 100.0,
      "dc": 60.0,
      "voltage": -1.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "media_pump-2025-04-09",
      "calibrated_on_pioreactor_unit": "testing_unit",
      "created_at": "2025-04-09T14:20:13.357000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          11.723882548630062,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [
          0.1875,
          0.1875,
          0.1875
        ],
        "y": [
          2.0,
          2.0,
          2.0
        ]
      },
      "hz": 250.0,
      "dc": 100.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    }
  ],
  "od135": [
    {
      "calibration_type": "od600",
      "calibration_name": "linear_135",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-01-02T02:07:01.506000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          5.0,
          0.0
        ]
      },
      "x": "OD600",
      "y": "Voltage",
      "recorded_data": {
        "x": [
          0.0,
          1.0
        ],
        "y": [
          0.0,
          5.0
        ]
      },
      "ir_led_intensity": 90.0,
      "angle": "135",
      "pd_channel": "4",
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "od600",
      "calibration_name": "od-cal-2026-01-02",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-01-02T03:14:38.840000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          0.0006722234149721264,
          -0.0007658042929294755,
          0.11977764295022217
        ]
      },
      "x": "OD600",
      "y": "Voltage",
      "recorded_data": {
        "x": [
          1.0,
          2.0,
          0.0
        ],
        "y": [
          0.1196840620722648,
          0.12093492802425171,
          0.11977764295022218
        ]
      },
      "ir_led_intensity": 80.0,
      "angle": "135",
      "pd_channel": "4",
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "od600",
      "calibration_name": "od-cal-2026-01-11",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-01-11T02:16:58.880000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          0.05997775639991009,
          0.059977756399910084
        ]
      },
      "x": "OD600",
      "y": "Voltage",
      "recorded_data": {
        "x": [
          1.0,
          1.0
        ],
        "y": [
          0.1200894308809028,
          0.11982159471873759
        ]
      },
      "ir_led_intensity": 80.0,
      "angle": "135",
      "pd_channel": "4",
      "is_active": false,
      "pioreactor_unit": "localhost"
    }
  ],
  "od45": [
    {
      "calibration_type": "od600",
      "calibration_name": "linear_45",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-02-12T01:35:42.992000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          4.0,
          0.0
        ]
      },
      "x": "OD600",
      "y": "Voltage",
      "recorded_data": {
        "x": [
          0.0,
          1.0
        ],
        "y": [
          0.0,
          4.0
        ]
      },
      "ir_led_intensity": 90.0,
      "angle": "45",
      "pd_channel": "3",
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "od600",
      "calibration_name": "tmp45",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-02-24T14:56:02.229000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          4.0,
          0.0
        ]
      },
      "x": "OD600",
      "y": "Voltage",
      "recorded_data": {
        "x": [
          0.0,
          1.0
        ],
        "y": [
          0.0,
          4.0
        ]
      },
      "ir_led_intensity": 90.0,
      "angle": "45",
      "pd_channel": "3",
      "is_active": false,
      "pioreactor_unit": "localhost"
    }
  ],
  "od90": [
    {
      "calibration_type": "od600",
      "calibration_name": "custom-od600",
      "calibrated_on_pioreactor_unit": "pio1",
      "created_at": "2026-01-18T20:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          4.701085432962409e-06,
          -0.0002849862354595922,
          0.0023565718622962583
        ]
      },
      "x": "OD600",
      "y": "Voltage",
      "recorded_data": {
        "x": [
          0.0025,
          0.007924,
          0.01991
        ],
        "y": [
          0.0045,
          0.018,
          0.19
        ]
      },
      "ir_led_intensity": 70.0,
      "angle": "90",
      "pd_channel": "2",
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "od600",
      "calibration_name": "linear",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-01-02T01:54:55.994000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          2.0,
          0.0
        ]
      },
      "x": "OD600",
      "y": "Voltage",
      "recorded_data": {
        "x": [
          0.0,
          2.0
        ],
        "y": [
          0.0,
          1.0
        ]
      },
      "ir_led_intensity": 90.0,
      "angle": "90",
      "pd_channel": "2",
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "od600",
      "calibration_name": "linear_90",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-01-02T02:07:01.506000Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          2.0,
          0.0
        ]
      },
      "x": "OD600",
      "y": "Voltage",
      "recorded_data": {
        "x": [
          0.0,
          2.0
        ],
        "y": [
          0.0,
          4.0
        ]
      },
      "ir_led_intensity": 90.0,
      "angle": "90",
      "pd_channel": "2",
      "is_active": false,
      "pioreactor_unit": "localhost"
    }
  ],
  "stirring": [
    {
      "calibration_type": "simple_stirring",
      "calibration_name": "stirring-calibration-2026-02-10_02-02",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-02-10T02:02:24.897000Z",
      "curve_data_": {
        "type": "spline",
        "knots": [
          19.8,
          39.9
        ],
        "coefficients": [
          [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        ]
      },
      "x": "DC %",
      "y": "RPM",
      "recorded_data": {
        "x": [
          39.9,
          34.875,
          29.85
        ],
        "y": [
          1500.0,
          1500.0,
          1500.0
        ]
      },
      "pwm_hz": 200.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "simple_stirring",
      "calibration_name": "stirring-calibration-2026-02-20_02-19",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-02-20T02:19:35.790000Z",
      "curve_data_": {
        "type": "spline",
        "knots": [
          9.9,
          12.413,
          17.438
        ],
        "coefficients": [
          [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        ]
      },
      "x": "DC %",
      "y": "RPM",
      "recorded_data": {
        "x": [
          19.95,
          17.438,
          14.925
        ],
        "y": [
          500.0,
          500.0,
          500.0
        ]
      },
      "pwm_hz": 200.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "simple_stirring",
      "calibration_name": "stirring-calibration-2026-02-20_02-21",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2026-02-20T02:21:41.341000Z",
      "curve_data_": {
        "type": "spline",
        "knots": [
          9.9,
          12.413,
          17.438
        ],
        "coefficients": [
          [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        ]
      },
      "x": "DC %",
      "y": "RPM",
      "recorded_data": {
        "x": [
          19.95,
          17.438,
          14.925
        ],
        "y": [
          500.0,
          500.0,
          500.0
        ]
      },
      "pwm_hz": 200.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    }
  ],
  "waste_pump": [
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "alt_media-2023-05-02",
      "calibrated_on_pioreactor_unit": "testing_unit",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          1.0270833333333333,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [
          0.5,
          0.5,
          0.5
        ],
        "y": [
          0.5,
          0.5,
          0.5
        ]
      },
      "hz": 200.0,
      "dc": 90.0,
      "voltage": 0.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "debug",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          1.0,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [],
        "y": []
      },
      "hz": 100.0,
      "dc": 60.0,
      "voltage": -1.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    },
    {
      "calibration_type": "simple_peristaltic_pump",
      "calibration_name": "scratch_direct_automation",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          1.0,
          0.0
        ]
      },
      "x": "Duration",
      "y": "Volume",
      "recorded_data": {
        "x": [],
        "y": []
      },
      "hz": 100.0,
      "dc": 60.0,
      "voltage": -1.0,
      "is_active": false,
      "pioreactor_unit": "localhost"
    }
  ]
}
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

Status: `200 OK`

Example body:

```json
[
  {
    "calibration_name": "example_calibration",
    "is_active": true
  }
]
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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| calibration_data | object | Yes | calibration data. |
| set_as_active | boolean | No | set as active. |

```json
{
  "calibration_data": {
    "calibration_name": "example_calibration"
  },
  "set_as_active": true
}
```

### Response

#### Success

Status: `201 Created`

_No success response body._

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

Status: `200 OK`

_No success response body._

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

Status: `200 OK`

Example body:

```json
{
  "calibration_name": "example_calibration",
  "is_active": true
}
```

## Get Capabilities

Get Capabilities endpoint.

### Endpoint
`GET /unit_api/capabilities`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "job_name": "add_alt_media",
    "help": "Add alt-media from unit",
    "arguments": [],
    "options": [
      {
        "name": "ml",
        "long_flag": "ml",
        "help": "",
        "required": false,
        "multiple": false,
        "default": null,
        "type": "float"
      },
      {
        "name": "duration",
        "long_flag": "duration",
        "help": "",
        "required": false,
        "multiple": false,
        "default": null,
        "type": "float"
      },
      {
        "name": "continuously",
        "long_flag": "continuously",
        "help": "continuously run until stopped.",
        "required": false,
        "multiple": false,
        "default": false,
        "type": "boolean"
      }
    ],
    "published_settings": {},
    "cli_example": "pio run add_alt_media [OPTIONS]"
  },
  {
    "job_name": "add_media",
    "help": "Add media to unit",
    "arguments": [],
    "options": [
      {
        "name": "ml",
        "long_flag": "ml",
        "help": "",
        "required": false,
        "multiple": false,
        "default": null,
        "type": "float"
      },
      {
        "name": "duration",
        "long_flag": "duration",
        "help": "",
        "required": false,
        "multiple": false,
        "default": null,
        "type": "float"
      },
      {
        "name": "continuously",
        "long_flag": "continuously",
        "help": "continuously run until stopped.",
        "required": false,
        "multiple": false,
        "default": false,
        "type": "boolean"
      }
    ],
    "published_settings": {},
    "cli_example": "pio run add_media [OPTIONS]"
  },
  {
    "job_name": "backup_database",
    "help": "(leader only) Backup db to workers.",
    "arguments": [],
    "options": [
      {
        "name": "output",
        "long_flag": "output",
        "help": "",
        "required": false,
        "multiple": false,
        "default": "/home/pioreactor/.pioreactor/storage/pioreactor.sqlite.backup",
        "type": "text"
      },
      {
        "name": "force",
        "long_flag": "force",
        "help": "force backing up",
        "required": false,
        "multiple": false,
        "default": false,
        "type": "boolean"
      },
      {
        "name": "backup_to_workers",
        "long_flag": "backup-to-workers",
        "help": "back up db to N workers",
        "required": false,
        "multiple": false,
        "default": null,
        "type": "integer"
      }
    ],
    "published_settings": {},
    "cli_example": "pio run backup_database [OPTIONS]"
  }
]
```

## Get Merged Config

Get Merged Config endpoint.

### Endpoint
`GET /unit_api/config/merged`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "PWM": {
    "1": "stirring",
    "2": "waste",
    "3": "media",
    "4": "bubblert",
    "5": "heating"
  },
  "leds": {
    "A": "IR",
    "B": "white_light",
    "C": "",
    "D": ""
  },
  "bioreactor": {
    "efflux_tube_volume_ml": "14",
    "initial_volume_ml": "14",
    "initial_alt_media_fraction": "0.0"
  },
  "stirring.config": {
    "initial_target_rpm": "500",
    "initial_duty_cycle": "15",
    "pwm_hz": "200",
    "use_rpm": "True",
    "duration_between_updates_seconds": "23",
    "post_delay_duration": "0.25",
    "pre_delay_duration": "0.25",
    "enable_dodging_od": "true",
    "target_rpm_during_od_reading": "0",
    "target_rpm_outside_od_reading": "500"
  },
  "dosing_automation.turbidostat": {
    "biomass_signal": "auto"
  },
  "stirring.pid": {
    "Kp": "0.007",
    "Ki": "0.0",
    "Kd": "0.0"
  },
  "od_config.photodiode_channel": {
    "1": "REF",
    "2": "90"
  },
  "od_reading.config": {
    "samples_per_second": "0.2",
    "turn_off_leds_during_reading": "1",
    "pd_reference_ema": "0.4",
    "ir_led_intensity": "80",
    "duration_between_led_off_and_od_reading": "0.1",
    "smoothing_penalizer": "6.0",
    "use_dark_offsets": "1"
  },
  "storage": {
    "database": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/storage/pioreactor.sqlite",
    "temporary_cache": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/storage/local_intermittent_pioreactor_metadata.sqlite",
    "persistent_cache": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/storage/local_persistent_pioreactor_metadata.sqlite",
    "number_of_backup_replicates_to_workers": "0"
  },
  "logging": {
    "log_file": "./pioreactor.log",
    "ui_log_file": "./pioreactor.log",
    "ui_log_level": "DEBUG",
    "console_log_level": "DEBUG"
  },
  "cluster.topology": {
    "leader_hostname": "localhost",
    "leader_address": "localhost"
  },
  "ui.overview.settings": {
    "filtered_od_lookback_minutes": "240",
    "raw_od_lookback_minutes": "240",
    "log_display_count": "65",
    "time_display_mode": "hours"
  },
  "ui": {
    "port": "4999",
    "proto": "http"
  },
  "ui.overview.charts": {
    "implied_growth_rate": "1",
    "implied_daily_growth_rate": "0",
    "fraction_of_volume_that_is_alternative_media": "1",
    "normalized_optical_density": "1",
    "raw_optical_density": "1",
    "temperature": "1",
    "optical_density": "1"
  },
  "ui.overview.cards": {
    "dosings": "1",
    "event_logs": "1",
    "profiles": "1"
  },
  "dosing_automation.pid_morbidostat": {
    "Kp": "5",
    "Ki": "0",
    "Kd": "0"
  },
  "temperature_automation.thermostat": {
    "Kp": ".01",
    "Ki": ".01",
    "Kd": ".01"
  },
  "mqtt": {
    "username": "pioreactor",
    "password": "raspberry",
    "broker_address": "localhost",
    "broker_ws_port": "9001",
    "broker_port": "1883",
    "ws_protocol": "ws",
    "use_tls": "0"
  },
  "dosing_automation.config": {
    "pause_between_subdoses_seconds": "0.5",
    "waste_removal_multiplier": "2.0",
    "max_volume_to_warn": "17.0",
    "max_volume_to_stop": "18.0",
    "max_subdose": "1.0",
    "experimental_pump_malfunction_tolerance": "0.2",
    "experimental_detect_pump_malfunction": "False"
  },
  "growth_rate_calculating.config": {
    "ekf_outlier_std_threshold": "3.0",
    "samples_for_od_statistics": "10"
  }
}
```

## Get Specific Config

Get Specific Config endpoint.

### Endpoint
`GET /unit_api/config/specific`

### Response

#### Success

Status: `200 OK`

_Response body is plain text._

## Update Specific Config

Update Specific Config endpoint.

### Endpoint
`PATCH /unit_api/config/specific`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | Yes | code. |

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

## Update Specific Config

Update Specific Config endpoint.

### Endpoint
`POST /unit_api/config/specific`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | Yes | code. |

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

## Get All Estimators

Get All Estimators endpoint.

### Endpoint
`GET /unit_api/estimators`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "od_fused": [
    {
      "estimator_type": "od_fused_estimator",
      "estimator_name": "od-fused-estimator-2026-01-23",
      "calibrated_on_pioreactor_unit": "xr1",
      "created_at": "2026-01-23T14:43:04.207000Z",
      "ir_led_intensity": 80.0,
      "angles": [
        "45",
        "90",
        "135"
      ],
      "mu_splines": {
        "45": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>"
          ]
        },
        "90": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>"
          ]
        },
        "135": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>"
          ]
        }
      },
      "sigma_splines_log": {
        "45": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>"
          ]
        },
        "90": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>"
          ]
        },
        "135": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>"
          ]
        }
      },
      "min_logc": 0.0,
      "max_logc": 0.7781512503836436,
      "sigma_floor": 0.05,
      "recorded_data": {
        "x": [
          0.0,
          0.47712125471966244,
          0.6989700043360189
        ],
        "y": [
          -6.778473545527855,
          -6.787264739975302,
          -6.787050588455531
        ]
      },
      "y": "log(Voltage)",
      "is_active": false,
      "pioreactor_unit": "localhost",
      "device": "od_fused"
    },
    {
      "estimator_type": "od_fused_estimator",
      "estimator_name": "od-fused-estimator-2026-01-27",
      "calibrated_on_pioreactor_unit": "xr1",
      "created_at": "2026-01-27T15:59:11.334000Z",
      "ir_led_intensity": 80.0,
      "angles": [
        "45",
        "90",
        "135"
      ],
      "mu_splines": {
        "45": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        },
        "90": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        },
        "135": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        }
      },
      "sigma_splines_log": {
        "45": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>"
          ]
        },
        "90": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>"
          ]
        },
        "135": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>"
          ]
        }
      },
      "min_logc": -2.0,
      "max_logc": 0.5440680443502757,
      "sigma_floor": 0.04,
      "recorded_data": {
        "by_angle": {
          "45": {
            "x": "<truncated>",
            "y": "<truncated>"
          },
          "90": {
            "x": "<truncated>",
            "y": "<truncated>"
          },
          "135": {
            "x": "<truncated>",
            "y": "<truncated>"
          }
        }
      },
      "y": "log(Voltage)",
      "is_active": false,
      "pioreactor_unit": "localhost",
      "device": "od_fused"
    },
    {
      "estimator_type": "od_fused_estimator",
      "estimator_name": "od-fused-estimator-2026-01-28",
      "calibrated_on_pioreactor_unit": "xr4",
      "created_at": "2026-01-28T16:04:53.392000Z",
      "ir_led_intensity": 80.0,
      "angles": [
        "45",
        "90",
        "135"
      ],
      "mu_splines": {
        "45": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        },
        "90": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        },
        "135": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        }
      },
      "sigma_splines_log": {
        "45": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        },
        "90": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        },
        "135": {
          "type": "akima",
          "knots": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ],
          "coefficients": [
            "<truncated>",
            "<truncated>",
            "<truncated>"
          ]
        }
      },
      "min_logc": -4.0,
      "max_logc": 1.6989700043360187,
      "sigma_floor": 0.04,
      "recorded_data": {
        "by_angle": {
          "45": {
            "x": "<truncated>",
            "y": "<truncated>"
          },
          "90": {
            "x": "<truncated>",
            "y": "<truncated>"
          },
          "135": {
            "x": "<truncated>",
            "y": "<truncated>"
          }
        }
      },
      "y": "log(Voltage)",
      "is_active": false,
      "pioreactor_unit": "localhost",
      "device": "od_fused"
    }
  ],
  "temperature_fir": [
    {
      "estimator_type": "fir_temperature_estimator",
      "estimator_name": "fir_temperature_estimator_linear_mlx_ambient_pcb_v1",
      "calibrated_on_pioreactor_unit": "seed",
      "created_at": "2026-02-18T00:00:00Z",
      "w_obj": 0.986277,
      "w_amb": -0.126407,
      "w_pcb": 0.088753,
      "c": 1.083602,
      "tau_s": 120.0,
      "k_vol": -0.012317,
      "volume_ref_ml": 25.0,
      "user_bias_c": 0.0,
      "y": "temperature_c",
      "is_active": false,
      "pioreactor_unit": "localhost",
      "device": "temperature_fir"
    }
  ]
}
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

Status: `200 OK`

Example body:

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

Status: `200 OK`

_No success response body._

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

Status: `200 OK`

Example body:

```json
{
  "estimator_name": "example_estimator",
  "is_active": true
}
```

## Check Hardware For Model

Check Hardware For Model endpoint.

### Endpoint
`PATCH /unit_api/hardware/check`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| model_name | string | Yes | model name. |
| model_version | string | Yes | model version. |

```json
{
  "model_name": "pioreactor_40ml",
  "model_version": "1.5"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Check Hardware For Model

Check Hardware For Model endpoint.

### Endpoint
`POST /unit_api/hardware/check`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| model_name | string | Yes | model name. |
| model_version | string | Yes | model version. |

```json
{
  "model_name": "pioreactor_40ml",
  "model_version": "1.5"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Health Check

Health Check endpoint.

### Endpoint
`GET /unit_api/health`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "status": "ok",
  "pioreactor_unit": "localhost",
  "utc_time": "2026-04-26T01:36:58.519Z"
}
```

## Import Dot Pioreactor From Zip

Import Dot Pioreactor From Zip endpoint.

### Endpoint
`POST /unit_api/import_zipped_dot_pioreactor`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get Jobs

Get Jobs endpoint.

### Endpoint
`GET /unit_api/jobs`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[]
```

## Get Job Descriptors

Get Job Descriptors endpoint.

### Endpoint
`GET /unit_api/jobs/descriptors`

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
  }
]
```

## Run Job

Run Job endpoint.

### Endpoint
`PATCH /unit_api/jobs/run/job_name/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| config_overrides | array | No | config overrides. |
| env | object | No | env. |
| options | object | No | options. |

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
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Run Job

Run Job endpoint.

### Endpoint
`POST /unit_api/jobs/run/job_name/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| config_overrides | array | No | config overrides. |
| env | object | No | env. |
| options | object | No | options. |

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
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get All Running Jobs

Get All Running Jobs endpoint.

### Endpoint
`GET /unit_api/jobs/running`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[]
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

Status: `200 OK`

Example body:

```json
[]
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

Status: `200 OK`

Example body:

```json
[]
```

## Get Job Settings

Return published settings for a running job.

### Endpoint
`GET /unit_api/jobs/settings/job_name/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "settings": {
    "target_rpm": "200"
  }
}
```

## Update Job

Update Job endpoint.

### Endpoint
`PATCH /unit_api/jobs/settings/job_name/{job_name}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |

#### Request Body
```json
{
  "settings": {
    "setting1": "value1",
    "setting2": "value2"
  }
}
```

### Response

#### Success

Status: `200 OK`

_No success response body._

## Get Job Setting

Get Job Setting endpoint.

### Endpoint
`GET /unit_api/jobs/settings/job_name/{job_name}/setting/{setting}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| job_name | string | Yes | Job name. |
| setting | string | Yes | Job setting name. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "target_rpm": "200"
}
```

## Stop Jobs

Stop Jobs endpoint.

### Endpoint
`PATCH /unit_api/jobs/stop`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | No | experiment. |
| job_id | string | No | job id. |
| job_name | string | No | job name. |
| job_source | string | No | job source. |

```json
{
  "experiment": "testing_experiment",
  "job_id": "example_job_id",
  "job_name": "example_job_name",
  "job_source": "example_job_source"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Stop Jobs

Stop Jobs endpoint.

### Endpoint
`POST /unit_api/jobs/stop`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | No | experiment. |
| job_id | string | No | job id. |
| job_name | string | No | job name. |
| job_source | string | No | job source. |

```json
{
  "experiment": "testing_experiment",
  "job_id": "example_job_id",
  "job_name": "example_job_name",
  "job_source": "example_job_source"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Stop All Jobs

Stop All Jobs endpoint.

### Endpoint
`PATCH /unit_api/jobs/stop/all`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Stop All Jobs

Stop All Jobs endpoint.

### Endpoint
`POST /unit_api/jobs/stop/all`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get All Long Running Jobs

Get All Long Running Jobs endpoint.

### Endpoint
`GET /unit_api/long_running_jobs/running`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[]
```

## Install Plugin

Install Plugin endpoint.

### Endpoint
`PATCH /unit_api/plugins/install`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| env | object | No | env. |
| options | object | No | options. |

```json
{
  "args": [
    "some-flag"
  ],
  "env": {
    "JOB_SOURCE": "api"
  },
  "options": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Install Plugin

Install Plugin endpoint.

### Endpoint
`POST /unit_api/plugins/install`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| env | object | No | env. |
| options | object | No | options. |

```json
{
  "args": [
    "some-flag"
  ],
  "env": {
    "JOB_SOURCE": "api"
  },
  "options": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get Installed Plugins

Get Installed Plugins endpoint.

### Endpoint
`GET /unit_api/plugins/installed`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "name": "my-example-plugin",
    "version": "0.2.0",
    "description": "Plugin description.",
    "homepage": "https://docs.pioreactor.com",
    "source": "plugins/example_plugin.py",
    "author": "Pioreactor"
  }
]
```

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

Status: `200 OK`

_Response body is the plugin Python source as plain text._

## Uninstall Plugin

Uninstall Plugin endpoint.

### Endpoint
`PATCH /unit_api/plugins/uninstall`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| env | object | No | env. |
| options | object | No | options. |

```json
{
  "args": [
    "some-flag"
  ],
  "env": {
    "JOB_SOURCE": "api"
  },
  "options": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Uninstall Plugin

Uninstall Plugin endpoint.

### Endpoint
`POST /unit_api/plugins/uninstall`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| env | object | No | env. |
| options | object | No | options. |

```json
{
  "args": [
    "some-flag"
  ],
  "env": {
    "JOB_SOURCE": "api"
  },
  "options": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## List System Path

List System Path endpoint.

### Endpoint
`GET /unit_api/system/path/`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "current": "/home/pioreactor/.pioreactor",
  "dirs": [
    "experiment_profiles",
    "plugins",
    "storage"
  ],
  "files": [
    "config.ini",
    "unit_config.ini"
  ]
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
| req_path | string | Yes | Path under the unit filesystem endpoint. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "current": "/home/pioreactor/.pioreactor",
  "dirs": [
    "experiment_profiles",
    "plugins",
    "storage"
  ],
  "files": [
    "config.ini",
    "unit_config.ini"
  ]
}
```

## Reboot System

Reboots unit

### Endpoint
`PATCH /unit_api/system/reboot`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Reboot System

Reboots unit

### Endpoint
`POST /unit_api/system/reboot`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Remove File

Remove File endpoint.

### Endpoint
`PATCH /unit_api/system/remove_file`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Remove File

Remove File endpoint.

### Endpoint
`POST /unit_api/system/remove_file`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Shutdown System

Shutdown unit

### Endpoint
`PATCH /unit_api/system/shutdown`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Shutdown System

Shutdown unit

### Endpoint
`POST /unit_api/system/shutdown`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Update Software

Update Software endpoint.

### Endpoint
`PATCH /unit_api/system/update`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| env | object | No | env. |
| options | object | No | options. |

```json
{
  "args": [
    "some-flag"
  ],
  "env": {
    "JOB_SOURCE": "api"
  },
  "options": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Update Software

Update Software endpoint.

### Endpoint
`POST /unit_api/system/update`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| env | object | No | env. |
| options | object | No | options. |

```json
{
  "args": [
    "some-flag"
  ],
  "env": {
    "JOB_SOURCE": "api"
  },
  "options": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
| target | string | Yes | Update target. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| env | object | No | env. |
| options | object | No | options. |

```json
{
  "args": [
    "some-flag"
  ],
  "env": {
    "JOB_SOURCE": "api"
  },
  "options": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
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
| target | string | Yes | Update target. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| args | array | No | args. |
| env | object | No | env. |
| options | object | No | options. |

```json
{
  "args": [
    "some-flag"
  ],
  "env": {
    "JOB_SOURCE": "api"
  },
  "options": {
    "target_rpm": "200"
  }
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get Clock Time

Get Clock Time endpoint.

### Endpoint
`GET /unit_api/system/utc_clock`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "status": "success",
  "clock_time": "2026-04-26T01:37:03.541Z"
}
```

## Set Clock Time

Set Clock Time endpoint.

### Endpoint
`PATCH /unit_api/system/utc_clock`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| utc_clock_time | string | Yes | utc clock time. |

```json
{
  "utc_clock_time": "2026-01-01T00:00:00Z"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Set Clock Time

Set Clock Time endpoint.

### Endpoint
`POST /unit_api/system/utc_clock`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| utc_clock_time | string | Yes | utc clock time. |

```json
{
  "utc_clock_time": "2026-01-01T00:00:00Z"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Restart Web Server

Restart Web Server endpoint.

### Endpoint
`PATCH /unit_api/system/web_server/restart`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Restart Web Server

Restart Web Server endpoint.

### Endpoint
`POST /unit_api/system/web_server/restart`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234"
}
```

## Get Web Server Status

Get Web Server Status endpoint.

### Endpoint
`GET /unit_api/system/web_server/status`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "service": "lighttpd.service,huey.service",
  "state": "ready",
  "raw_status": "active"
}
```

## Get Task Status

Poll the state of an async task previously returned by `create_task_response(...)`.

### Endpoint
`GET /unit_api/task_results/{task_id}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| task_id | string | Yes | Task identifier. |

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "task-id",
  "result_url_path": "/unit_api/task_results/task-id",
  "status": "pending"
}
```

## Get App Version

Get App Version endpoint.

### Endpoint
`GET /unit_api/versions/app`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "version": "26.4.5.dev0"
}
```

## Get Zipped Calibrations

Get Zipped Calibrations endpoint.

### Endpoint
`GET /unit_api/zipped_calibrations`

### Response

#### Success

Status: `200 OK`

_Response body is binary file data._

## Get Zipped Dot Pioreactor

Create and return a ZIP of the entire DOT_PIOREACTOR directory.

### Endpoint
`GET /unit_api/zipped_dot_pioreactor`

### Response

#### Success

Status: `200 OK`

_Response body is binary file data._

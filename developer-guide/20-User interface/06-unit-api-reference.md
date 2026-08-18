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

Endpoint count: `93`

## Endpoint Index

| Method | Path | Handler |
| ------ | ---- | ------- |
| `GET` | `/unit_api/active_calibrations` | [`get_all_active_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1839) |
| `DELETE` | `/unit_api/active_calibrations/{device}` | [`remove_active_status_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2288) |
| `PATCH` | `/unit_api/active_calibrations/{device}/{calibration_name}` | [`set_active_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2268) |
| `GET` | `/unit_api/active_estimators` | [`get_all_active_estimators`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1871) |
| `DELETE` | `/unit_api/active_estimators/{device}` | [`remove_active_status_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2318) |
| `PATCH` | `/unit_api/active_estimators/{device}/{estimator_name}` | [`set_active_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2298) |
| `GET` | `/unit_api/automations/descriptors/{automation_type}` | [`get_automation_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1670) |
| `GET` | `/unit_api/bioreactor/experiments/{experiment}` | [`get_bioreactor_values`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1357) |
| `PATCH` | `/unit_api/bioreactor/experiments/{experiment}` | [`update_bioreactor_values`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1362) |
| `GET` | `/unit_api/calibration_protocols` | [`get_calibration_protocols`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1707) |
| `GET` | `/unit_api/calibrations` | [`get_all_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1808) |
| `GET` | `/unit_api/calibrations/{device}` | [`get_calibrations_by_device`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2156) |
| `POST` | `/unit_api/calibrations/{device}` | [`create_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1712) |
| `DELETE` | `/unit_api/calibrations/{device}/{calibration_name}` | [`delete_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1769) |
| `GET` | `/unit_api/calibrations/{device}/{calibration_name}` | [`get_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2184) |
| `GET` | `/unit_api/camera/experiments/{experiment}/status` | [`get_camera_status_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L224) |
| `DELETE` | `/unit_api/camera/experiments/{experiment}/stills` | [`delete_camera_stills_for_experiment_route`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L244) |
| `GET` | `/unit_api/camera/experiments/{experiment}/stills` | [`list_camera_stills_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L229) |
| `POST` | `/unit_api/camera/experiments/{experiment}/stills` | [`capture_camera_still_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L257) |
| `GET` | `/unit_api/camera/experiments/{experiment}/stills.zip` | [`get_zipped_camera_stills_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L353) |
| `DELETE` | `/unit_api/camera/experiments/{experiment}/stills/{image_id}.jpg` | [`delete_camera_still_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L324) |
| `GET` | `/unit_api/camera/experiments/{experiment}/stills/{image_id}.jpg` | [`get_camera_still_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L297) |
| `GET` | `/unit_api/camera/focus_sessions/{session_id}/preview.jpg` | [`get_camera_focus_preview`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L270) |
| `PATCH` | `/unit_api/camera/settings` | [`update_camera_settings`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L207) |
| `GET` | `/unit_api/capabilities` | [`get_capabilities`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1417) |
| `GET` | `/unit_api/config/merged` | [`get_merged_config`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L626) |
| `GET` | `/unit_api/config/specific` | [`get_specific_config`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L640) |
| `PATCH` | `/unit_api/config/specific` | [`update_specific_config`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L652) |
| `POST` | `/unit_api/config/specific` | [`update_specific_config`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L652) |
| `GET` | `/unit_api/estimators` | [`get_all_estimators`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1900) |
| `GET` | `/unit_api/estimators/{device}` | [`get_estimators_by_device`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2214) |
| `DELETE` | `/unit_api/estimators/{device}/{estimator_name}` | [`delete_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2328) |
| `GET` | `/unit_api/estimators/{device}/{estimator_name}` | [`get_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2237) |
| `PATCH` | `/unit_api/hardware/check` | [`check_hardware_for_model`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L165) |
| `POST` | `/unit_api/hardware/check` | [`check_hardware_for_model`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L165) |
| `GET` | `/unit_api/health` | [`health_check`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L150) |
| `POST` | `/unit_api/import_zipped_dot_pioreactor` | [`import_dot_pioreactor_from_zip`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L2037) |
| `GET` | `/unit_api/jobs` | [`get_jobs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1262) |
| `GET` | `/unit_api/jobs/descriptors` | [`get_job_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1424) |
| `PATCH` | `/unit_api/jobs/run/job_name/{job_name}` | [`run_job`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1123) |
| `POST` | `/unit_api/jobs/run/job_name/{job_name}` | [`run_job`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1123) |
| `GET` | `/unit_api/jobs/running` | [`get_all_running_jobs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1291) |
| `GET` | `/unit_api/jobs/running/{job_name}` | [`get_running_job`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1298) |
| `GET` | `/unit_api/jobs/running/experiments/{experiment}` | [`get_running_jobs_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1281) |
| `GET` | `/unit_api/jobs/settings/job_name/{job_name}` | [`get_job_settings`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1317) |
| `GET` | `/unit_api/jobs/settings/job_name/{job_name}/setting/{setting}` | [`get_job_setting`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1337) |
| `PATCH` | `/unit_api/jobs/stop` | [`stop_jobs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1232) |
| `POST` | `/unit_api/jobs/stop` | [`stop_jobs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1232) |
| `PATCH` | `/unit_api/jobs/stop/all` | [`stop_all_jobs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1221) |
| `POST` | `/unit_api/jobs/stop/all` | [`stop_all_jobs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1221) |
| `GET` | `/unit_api/long_running_jobs/running` | [`get_all_long_running_jobs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1306) |
| `PATCH` | `/unit_api/plugins/install` | [`install_plugin`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1526) |
| `POST` | `/unit_api/plugins/install` | [`install_plugin`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1526) |
| `PATCH` | `/unit_api/plugins/install-from-usb` | [`install_plugin_from_usb`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1583) |
| `POST` | `/unit_api/plugins/install-from-usb` | [`install_plugin_from_usb`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1583) |
| `PATCH` | `/unit_api/plugins/install-python-file-from-leader-copy` | [`install_python_plugin_file_from_leader_copy`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1606) |
| `POST` | `/unit_api/plugins/install-python-file-from-leader-copy` | [`install_python_plugin_file_from_leader_copy`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1606) |
| `GET` | `/unit_api/plugins/installed` | [`get_installed_plugins`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1470) |
| `GET` | `/unit_api/plugins/installed/{filename}` | [`get_installed_plugin`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1492) |
| `PATCH` | `/unit_api/plugins/uninstall` | [`uninstall_plugin`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1637) |
| `POST` | `/unit_api/plugins/uninstall` | [`uninstall_plugin`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1637) |
| `GET` | `/unit_api/settings/descriptors` | [`get_settings_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1443) |
| `GET` | `/unit_api/system/disk_space` | [`get_disk_space`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L855) |
| `GET` | `/unit_api/system/ipv4` | [`get_system_ipv4`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L160) |
| `GET` | `/unit_api/system/memory` | [`get_memory`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L872) |
| `GET` | `/unit_api/system/path/` | [`list_system_path`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1061) |
| `GET` | `/unit_api/system/path/{req_path}` | [`list_system_path`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1061) |
| `PATCH` | `/unit_api/system/reboot` | [`reboot_system`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L752) |
| `POST` | `/unit_api/system/reboot` | [`reboot_system`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L752) |
| `PATCH` | `/unit_api/system/remove_file` | [`remove_file`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L962) |
| `POST` | `/unit_api/system/remove_file` | [`remove_file`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L962) |
| `PATCH` | `/unit_api/system/repair` | [`repair_system`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L841) |
| `POST` | `/unit_api/system/repair` | [`repair_system`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L841) |
| `PATCH` | `/unit_api/system/shutdown` | [`shutdown_system`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L768) |
| `POST` | `/unit_api/system/shutdown` | [`shutdown_system`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L768) |
| `PATCH` | `/unit_api/system/update` | [`update_software`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L729) |
| `POST` | `/unit_api/system/update` | [`update_software`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L729) |
| `PATCH` | `/unit_api/system/update/{target}` | [`update_software_target`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L702) |
| `POST` | `/unit_api/system/update/{target}` | [`update_software_target`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L702) |
| `GET` | `/unit_api/system/utc_clock` | [`get_clock_time`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1006) |
| `PATCH` | `/unit_api/system/utc_clock` | [`set_clock_time`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1021) |
| `POST` | `/unit_api/system/utc_clock` | [`set_clock_time`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1021) |
| `PATCH` | `/unit_api/system/web_server/restart` | [`restart_web_server`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L827) |
| `POST` | `/unit_api/system/web_server/restart` | [`restart_web_server`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L827) |
| `GET` | `/unit_api/system/web_server/status` | [`get_web_server_status`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L783) |
| `GET` | `/unit_api/task_results/{task_id}` | [`get_task_status`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L410) |
| `GET` | `/unit_api/usb` | [`get_usb_status`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L116) |
| `GET` | `/unit_api/usb/artifacts` | [`get_usb_artifacts`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L135) |
| `POST` | `/unit_api/usb/eject` | [`eject_usb`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L128) |
| `POST` | `/unit_api/usb/mount` | [`mount_usb`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L121) |
| `GET` | `/unit_api/versions/app` | [`get_app_version`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1699) |
| `GET` | `/unit_api/zipped_calibrations` | [`get_zipped_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1927) |
| `GET` | `/unit_api/zipped_dot_pioreactor` | [`get_zipped_dot_pioreactor`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/unit_api.py#L1959) |

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

Return this unit's automation UI descriptors for one automation family.

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
        "required": true,
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
    "alt_media_fraction": 0.0,
    "cumulative_media_added_ml": 0.0,
    "cumulative_alt_media_added_ml": 0.0,
    "cumulative_waste_removed_ml": 0.0
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
    "id": "camera_manual_focus",
    "target_device": "camera",
    "protocol_name": "manual_focus",
    "priority": 99,
    "title": "Manual camera focus",
    "description": "Capture still images while manually adjusting the camera's focus.",
    "requirements": [
      "Camera connected",
      "Detailed focus target near the intended vial position",
      "Physical access to the camera focus control"
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
      "calibration_name": "fast_dosing_test_calibration_10ml_s",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          10.0,
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
      "calibration_name": "fast_dosing_test_calibration_10ml_s",
      "calibrated_on_pioreactor_unit": "localhost",
      "created_at": "2010-01-01T00:00:00Z",
      "curve_data_": {
        "type": "poly",
        "coefficients": [
          10.0,
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
| calibration_data | string | Yes | calibration data. |
| set_as_active | boolean | No | set as active. |

```json
{
  "calibration_data": "calibration_type: simple_peristaltic_pump\ncalibration_name: example_calibration\n",
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

## Get Camera Status For Experiment

Get Camera Status For Experiment endpoint.

### Endpoint
`GET /unit_api/camera/experiments/{experiment}/status`

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
  "unit": "localhost",
  "detection_status": "detected",
  "runtime_available": true,
  "capture_command": null,
  "mock": true,
  "latest_still": {
    "experiment": "demo",
    "captured_at": "2026-08-18T15:36:54.612662Z",
    "image_id": "20260818T153654.612662Z-9ea92960",
    "capture_reason": "scheduled"
  },
  "auto_capture_enabled": true,
  "snapshot_interval_minutes": 5
}
```

## Delete Camera Stills For Experiment Route

Delete Camera Stills For Experiment Route endpoint.

### Endpoint
`DELETE /unit_api/camera/experiments/{experiment}/stills`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## List Camera Stills For Experiment

List Camera Stills For Experiment endpoint.

### Endpoint
`GET /unit_api/camera/experiments/{experiment}/stills`

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
  "unit": "localhost",
  "experiment": "demo",
  "stills": [
    {
      "experiment": "demo",
      "captured_at": "2026-08-18T15:36:54.612662Z",
      "image_id": "20260818T153654.612662Z-9ea92960",
      "capture_reason": "scheduled"
    }
  ]
}
```

## Capture Camera Still For Experiment

Capture Camera Still For Experiment endpoint.

### Endpoint
`POST /unit_api/camera/experiments/{experiment}/stills`

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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Get Zipped Camera Stills For Experiment

Get Zipped Camera Stills For Experiment endpoint.

### Endpoint
`GET /unit_api/camera/experiments/{experiment}/stills.zip`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

Status: `200 OK`

_Response body is binary file data._

## Delete Camera Still For Experiment

Delete Camera Still For Experiment endpoint.

### Endpoint
`DELETE /unit_api/camera/experiments/{experiment}/stills/{image_id}.jpg`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |
| image_id | string | Yes | image id. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## Get Camera Still For Experiment

Get Camera Still For Experiment endpoint.

### Endpoint
`GET /unit_api/camera/experiments/{experiment}/stills/{image_id}.jpg`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |
| image_id | string | Yes | image id. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## Get Camera Focus Preview

Get Camera Focus Preview endpoint.

### Endpoint
`GET /unit_api/camera/focus_sessions/{session_id}/preview.jpg`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| session_id | string | Yes | Calibration session identifier. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## Update Camera Settings

Update Camera Settings endpoint.

### Endpoint
`PATCH /unit_api/camera/settings`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| auto_capture_enabled | boolean | Yes | auto capture enabled. |

```json
{
  "auto_capture_enabled": true
}
```

### Response

#### Success

Status: `200 OK`

_No example body inferred._

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
        "help": "add until the maximum safe volume is reached.",
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
        "help": "add until the maximum safe volume is reached.",
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
    "initial_alt_media_fraction": "0.0",
    "initial_cumulative_media_added_ml": "0",
    "initial_cumulative_alt_media_added_ml": "0",
    "initial_cumulative_waste_removed_ml": "0"
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
  "camera": {
    "snapshot_interval_minutes": "5",
    "camera_index": "0",
    "ir_led_intensity": "90",
    "enabled": "1",
    "keep_camera_active": "0"
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

Replace this unit's unit-specific config text.

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

Replace this unit's unit-specific config text.

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
      "low_conc_scales": {},
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
      "low_conc_scales": {},
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
      "low_conc_scales": {},
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

Check whether this unit's hardware supports a model.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Check Hardware For Model

Check whether this unit's hardware supports a model.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
  "utc_time": "2026-08-18T15:36:54.867Z"
}
```

## Import Dot Pioreactor From Zip

Import a zipped `DOT_PIOREACTOR` archive into this unit.

### Endpoint
`POST /unit_api/import_zipped_dot_pioreactor`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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

Return this unit's background-job UI descriptors.

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
        "editable": true,
        "min": null,
        "max": null
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

Run a job on this unit.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Run Job

Run a job on this unit.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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

Stop jobs matching at least one filter.

### Endpoint
`PATCH /unit_api/jobs/stop`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | No | experiment. |
| job_id | integer | No | job id. |
| job_name | string | No | job name. |
| job_source | string | No | job source. |

```json
{
  "experiment": "testing_experiment",
  "job_id": 1,
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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Stop Jobs

Stop jobs matching at least one filter.

### Endpoint
`POST /unit_api/jobs/stop`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | No | experiment. |
| job_id | integer | No | job id. |
| job_name | string | No | job name. |
| job_source | string | No | job source. |

```json
{
  "experiment": "testing_experiment",
  "job_id": 1,
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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Stop All Jobs

Stop all jobs running on this unit.

### Endpoint
`PATCH /unit_api/jobs/stop/all`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Stop All Jobs

Stop all jobs running on this unit.

### Endpoint
`POST /unit_api/jobs/stop/all`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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

Install one plugin by running `pio plugin install`.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Install Plugin

Install one plugin by running `pio plugin install`.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Install Plugin From Usb

Install one plugin artifact from a Pioreactor-managed USB mount.

### Endpoint
`PATCH /unit_api/plugins/install-from-usb`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filepath | string | Yes | filepath. |

```json
{
  "filepath": "example_filepath"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Install Plugin From Usb

Install one plugin artifact from a Pioreactor-managed USB mount.

### Endpoint
`POST /unit_api/plugins/install-from-usb`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filepath | string | Yes | filepath. |

```json
{
  "filepath": "example_filepath"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Install Python Plugin File From Leader Copy

Install one Python file plugin copied by the leader to /tmp.

### Endpoint
`PATCH /unit_api/plugins/install-python-file-from-leader-copy`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | filename. |

```json
{
  "filename": "profile.yaml"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Install Python Plugin File From Leader Copy

Install one Python file plugin copied by the leader to /tmp.

### Endpoint
`POST /unit_api/plugins/install-python-file-from-leader-copy`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | string | Yes | filename. |

```json
{
  "filename": "profile.yaml"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
    "name": "pioreactor-precision-temperature-plugin",
    "version": "0.1.1",
    "description": "Precision temperature automation for Pioreactor using FIR + MLX90632",
    "homepage": "https://github.com/Pioreactor/pioreactor-precision-temperature-plugin",
    "source": "entry_points",
    "author": "Cam Davidson-Pilon"
  },
  {
    "name": "MusetFedbatch",
    "version": "Unknown",
    "description": "Unknown",
    "homepage": "http://localhost:4999/unit_api/plugins/installed/MusetFedbatch.py",
    "source": "plugins/MusetFedbatch.py",
    "author": "Unknown"
  },
  {
    "name": "UVCycle",
    "version": "Unknown",
    "description": "Unknown",
    "homepage": "http://localhost:4999/unit_api/plugins/installed/UVCycle.py",
    "source": "plugins/UVCycle.py",
    "author": "Unknown"
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

Uninstall one plugin by running `pio plugin uninstall`.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Uninstall Plugin

Uninstall one plugin by running `pio plugin uninstall`.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Get Settings Descriptors

Return this unit's settings UI descriptors.

### Endpoint
`GET /unit_api/settings/descriptors`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "key": "bioreactor",
    "display_name": "Bioreactor",
    "display": true,
    "published_settings": [
      {
        "key": "current_volume_ml",
        "type": "numeric",
        "display": true,
        "description": "Current estimated liquid volume in the vial.",
        "default": 14.0,
        "unit": "mL",
        "label": "Current volume",
        "editable": true,
        "min": 0.0,
        "max": null
      },
      {
        "key": "efflux_tube_volume_ml",
        "type": "numeric",
        "display": true,
        "description": "Liquid volume equivalent to the height of the waste/efflux tube.",
        "default": 14.0,
        "unit": "mL",
        "label": "Efflux tube level",
        "editable": true,
        "min": 0.0,
        "max": null
      },
      {
        "key": "alt_media_fraction",
        "type": "numeric",
        "display": true,
        "description": "Fraction of the current volume estimated to be alt media.",
        "default": 0.0,
        "unit": null,
        "label": "Alt media fraction",
        "editable": true,
        "min": 0.0,
        "max": 1.0
      }
    ],
    "source": "app",
    "description": "Per-unit bioreactor settings.",
    "subtext": null
  },
  {
    "key": "leds",
    "display_name": "led intensity",
    "display": false,
    "published_settings": [
      {
        "key": "intensity",
        "type": "string",
        "display": true,
        "description": null,
        "default": null,
        "unit": null,
        "label": "LED intensity",
        "editable": false,
        "min": null,
        "max": null
      }
    ],
    "source": "app",
    "description": null,
    "subtext": null
  },
  {
    "key": "pwms",
    "display_name": "PWMs",
    "display": false,
    "published_settings": [
      {
        "key": "dc",
        "type": "string",
        "display": true,
        "description": null,
        "default": null,
        "unit": null,
        "label": "PWM intensity",
        "editable": false,
        "min": null,
        "max": null
      }
    ],
    "source": "app",
    "description": null,
    "subtext": null
  }
]
```

## Get Disk Space

Return this unit's root filesystem disk space.

### Endpoint
`GET /unit_api/system/disk_space`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "available_bytes": 61717393408,
  "total_bytes": 494384795648
}
```

## Get System Ipv4

Get System Ipv4 endpoint.

### Endpoint
`GET /unit_api/system/ipv4`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "ipv4_address": ""
}
```

## Get Memory

Return this unit's memory availability.

### Endpoint
`GET /unit_api/system/memory`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "available_bytes": 3853910016,
  "total_bytes": 17179869184
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

Reboot this unit.

### Endpoint
`PATCH /unit_api/system/reboot`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Reboot System

Reboot this unit.

### Endpoint
`POST /unit_api/system/reboot`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Remove File

Remove a file under this unit's `DOT_PIOREACTOR` tree.

### Endpoint
`PATCH /unit_api/system/remove_file`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filepath | string | Yes | filepath. |

```json
{
  "filepath": "example_filepath"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Remove File

Remove a file under this unit's `DOT_PIOREACTOR` tree.

### Endpoint
`POST /unit_api/system/remove_file`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filepath | string | Yes | filepath. |

```json
{
  "filepath": "example_filepath"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Repair System

Repair this unit's Pioreactor filesystem permissions.

### Endpoint
`PATCH /unit_api/system/repair`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Repair System

Repair this unit's Pioreactor filesystem permissions.

### Endpoint
`POST /unit_api/system/repair`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Shutdown System

Shut down this unit.

### Endpoint
`PATCH /unit_api/system/shutdown`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Shutdown System

Shut down this unit.

### Endpoint
`POST /unit_api/system/shutdown`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Update Software

Update the Pioreactor app on this unit.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Update Software

Update the Pioreactor app on this unit.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Update Software Target

Update one software target on this unit.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Update Software Target

Update one software target on this unit.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
  "clock_time": "2026-08-18T15:36:54.951Z"
}
```

## Set Clock Time

Set or sync this unit's UTC clock.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Set Clock Time

Set or sync this unit's UTC clock.

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Restart Web Server

Restart the Pioreactor web server target on the leader.

### Endpoint
`PATCH /unit_api/system/web_server/restart`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Restart Web Server

Restart the Pioreactor web server target on the leader.

### Endpoint
`POST /unit_api/system/web_server/restart`

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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

## Get Usb Status

Get Usb Status endpoint.

### Endpoint
`GET /unit_api/usb`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "status": "mounted",
  "partitions": [
    {
      "device": "/dev/pioreactor-dev-usb1",
      "parent_device": "/dev/pioreactor-dev-usb",
      "label": "DEV_USB",
      "uuid": "DEV-USB",
      "fstype": "ext4",
      "size_bytes": null,
      "mountpoints": [
        "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/DEV_USB"
      ],
      "removable": true,
      "mounted": true,
      "display_name": "DEV_USB",
      "pioreactor_mountpoint": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/usb-DEV-USB",
      "mountpoint": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/DEV_USB",
      "writable": true,
      "free_bytes": 61717393408,
      "unsupported_reason": null
    }
  ],
  "active_mount": {
    "device": "/dev/pioreactor-dev-usb1",
    "parent_device": "/dev/pioreactor-dev-usb",
    "label": "DEV_USB",
    "uuid": "DEV-USB",
    "fstype": "ext4",
    "size_bytes": null,
    "mountpoints": [
      "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/DEV_USB"
    ],
    "removable": true,
    "mounted": true,
    "display_name": "DEV_USB",
    "pioreactor_mountpoint": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/usb-DEV-USB",
    "mountpoint": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/DEV_USB",
    "writable": true,
    "free_bytes": 61717393408
  }
}
```

## Get Usb Artifacts

Get Usb Artifacts endpoint.

### Endpoint
`GET /unit_api/usb/artifacts`

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "mountpoint": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/DEV_USB",
  "updates": [
    {
      "path": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/DEV_USB/release_26.5.1.zip",
      "version": "26.5.1"
    }
  ],
  "plugins": [
    {
      "path": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/DEV_USB/my_plugin.whl",
      "name": "my-plugin",
      "version": null,
      "kind": "wheel"
    },
    {
      "path": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/dev_usb_mounts/DEV_USB/pioreactor/plugins/pioreactor_usb_demo-1.2.3-py3-none-any.whl",
      "name": "pioreactor-usb-demo",
      "version": "1.2.3",
      "kind": "wheel"
    }
  ],
  "writable": true,
  "free_bytes": 61717393408
}
```

## Eject Usb

Eject Usb endpoint.

### Endpoint
`POST /unit_api/usb/eject`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | No | device. |

```json
{
  "device": "example_device"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Mount Usb

Mount Usb endpoint.

### Endpoint
`POST /unit_api/usb/mount`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| device | string | No | device. |

```json
{
  "device": "example_device"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
  "version": "26.8.1.dev0"
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

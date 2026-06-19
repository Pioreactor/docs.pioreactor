---
title: API Reference (Leader /api)
slug: /api-reference
toc_max_heading_level: 2
sidebar_class_name: sidebar-item--updated
---

### Conventions

- Only the leader Pioreactor has the `/api` endpoints exposed.
- Async endpoints return `202 Accepted` with a `task_id` and `result_url_path`.
- Poll `GET /unit_api/task_results/{task_id}` until `status` is `succeeded` or `failed`.
- `$broadcast` may be used in path parameters where documented to target all units/workers.
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

Use `/api/workers/...` for worker-only targets (experiment-scoped jobs/logs) and `/api/units/...` when the leader is also a valid target; both accept `$broadcast` where supported.

# Pioreactor Leader API

Generated from `core/pioreactor/web/api.py`.

> This file is generated. Edit the API source or generator instead of editing this file by hand.

Endpoint count: `147`

## Endpoint Index

| Method | Path | Handler |
| ------ | ---- | ------- |
| `GET` | `/api/automations/descriptors/{automation_type}` | `get_automation_descriptors` |
| `GET` | `/api/charts/descriptors` | `get_chart_descriptors` |
| `GET` | `/api/config/shared` | `get_shared_config` |
| `PATCH` | `/api/config/shared` | `update_shared_config` |
| `GET` | `/api/config/shared/history` | `get_shared_config_history` |
| `GET` | `/api/config/units/{pioreactor_unit}` | `get_config_for_pioreactor_unit` |
| `GET` | `/api/config/units/{pioreactor_unit}/specific` | `get_specific_config_for_pioreactor_unit` |
| `PATCH` | `/api/config/units/{pioreactor_unit}/specific` | `update_specific_config_for_pioreactor_unit` |
| `GET` | `/api/config/units/{pioreactor_unit}/specific/history` | `get_specific_config_history_for_pioreactor_unit` |
| `GET` | `/api/datasets/exportable` | `get_exportable_datasets` |
| `GET` | `/api/datasets/exportable/{target_dataset}/preview` | `preview_exportable_dataset` |
| `POST` | `/api/datasets/exportable/export` | `export_exportable_datasets` |
| `POST` | `/api/datasets/exportable/export-to-usb` | `export_exportable_datasets_to_usb` |
| `GET` | `/api/experiment_profiles` | `get_experiment_profiles` |
| `POST` | `/api/experiment_profiles` | `create_experiment_profile` |
| `DELETE` | `/api/experiment_profiles/{filename}` | `delete_experiment_profile` |
| `GET` | `/api/experiment_profiles/{filename}` | `get_experiment_profile` |
| `PATCH` | `/api/experiment_profiles/{filename}` | `update_experiment_profile` |
| `GET` | `/api/experiments` | `get_experiments` |
| `POST` | `/api/experiments` | `create_experiment` |
| `DELETE` | `/api/experiments/{experiment}` | `delete_experiment` |
| `GET` | `/api/experiments/{experiment}` | `get_experiment` |
| `PATCH` | `/api/experiments/{experiment}` | `update_experiment` |
| `GET` | `/api/experiments/{experiment}/experiment_profiles/recent` | `get_recent_experiment_profile_runs` |
| `GET` | `/api/experiments/{experiment}/experiment_profiles/running` | `get_running_profiles` |
| `GET` | `/api/experiments/{experiment}/historical_worker_assignments` | `get_list_of_historical_workers_for_experiment` |
| `GET` | `/api/experiments/{experiment}/logs` | `get_exp_logs` |
| `GET` | `/api/experiments/{experiment}/media_rates` | `get_media_rates` |
| `GET` | `/api/experiments/{experiment}/recent_logs` | `get_recent_logs` |
| `GET` | `/api/experiments/{experiment}/time_series/{data_source}/{column}` | `get_fallback_time_series` |
| `GET` | `/api/experiments/{experiment}/time_series/growth_rates` | `get_growth_rates` |
| `GET` | `/api/experiments/{experiment}/time_series/od_readings` | `get_od_readings` |
| `GET` | `/api/experiments/{experiment}/time_series/od_readings_filtered` | `get_od_readings_filtered` |
| `GET` | `/api/experiments/{experiment}/time_series/od_readings_fused` | `get_od_readings_fused` |
| `GET` | `/api/experiments/{experiment}/time_series/raw_od_readings` | `get_od_raw_readings` |
| `GET` | `/api/experiments/{experiment}/time_series/temperature_readings` | `get_temperature_readings` |
| `GET` | `/api/experiments/{experiment}/unit_labels` | `get_unit_labels` |
| `PATCH` | `/api/experiments/{experiment}/unit_labels` | `upsert_unit_labels` |
| `PUT` | `/api/experiments/{experiment}/unit_labels` | `upsert_unit_labels` |
| `DELETE` | `/api/experiments/{experiment}/workers` | `remove_workers_from_experiment` |
| `GET` | `/api/experiments/{experiment}/workers` | `get_list_of_workers_for_experiment` |
| `PUT` | `/api/experiments/{experiment}/workers` | `add_worker_to_experiment` |
| `DELETE` | `/api/experiments/{experiment}/workers/{pioreactor_unit}` | `remove_worker_from_experiment` |
| `GET` | `/api/experiments/active` | `get_active_experiments` |
| `GET` | `/api/experiments/assignment_count` | `get_experiments_worker_assignments` |
| `GET` | `/api/experiments/latest` | `get_latest_experiment` |
| `GET` | `/api/historical_media` | `get_historical_media_used` |
| `GET` | `/api/historical_organisms` | `get_historical_organisms_used` |
| `GET` | `/api/jobs/descriptors` | `get_job_descriptors` |
| `GET` | `/api/local_access_point` | `get_local_access_point` |
| `GET` | `/api/logs` | `get_logs` |
| `GET` | `/api/models` | `get_models` |
| `GET` | `/api/settings/descriptors` | `get_settings_descriptors` |
| `POST` | `/api/system/update_from_archive` | `update_app_from_release_archive` |
| `POST` | `/api/system/update_next_version` | `update_app` |
| `POST` | `/api/system/upload` | `upload_system_file` |
| `POST` | `/api/system/utc_clock` | `set_system_utc_clock` |
| `GET` | `/api/units` | `get_list_of_units` |
| `GET` | `/api/units/{pioreactor_unit}/capabilities` | `get_capabilities` |
| `POST` | `/api/units/{pioreactor_unit}/experiments/{experiment}/logs` | `publish_new_log` |
| `POST` | `/api/units/{pioreactor_unit}/import_zipped_dot_pioreactor` | `import_dot_pioreactor_archive` |
| `PATCH` | `/api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}` | `run_job_on_unit_in_experiment` |
| `POST` | `/api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}` | `run_job_on_unit_in_experiment` |
| `GET` | `/api/units/{pioreactor_unit}/jobs/running` | `get_jobs_running` |
| `PATCH` | `/api/units/{pioreactor_unit}/jobs/stop/experiments/{experiment}` | `stop_all_jobs_on_unit_for_experiment` |
| `POST` | `/api/units/{pioreactor_unit}/jobs/stop/experiments/{experiment}` | `stop_all_jobs_on_unit_for_experiment` |
| `PATCH` | `/api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}` | `stop_specific_job_on_unit` |
| `POST` | `/api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}` | `stop_specific_job_on_unit` |
| `PATCH` | `/api/units/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}` | `update_job_on_unit` |
| `GET` | `/api/units/{pioreactor_unit}/logs` | `get_logs_for_unit` |
| `PATCH` | `/api/units/{pioreactor_unit}/plugins/install` | `install_plugin_across_cluster` |
| `POST` | `/api/units/{pioreactor_unit}/plugins/install` | `install_plugin_across_cluster` |
| `PATCH` | `/api/units/{pioreactor_unit}/plugins/install-from-leader-usb` | `install_plugin_from_leader_usb_on_machine` |
| `POST` | `/api/units/{pioreactor_unit}/plugins/install-from-leader-usb` | `install_plugin_from_leader_usb_on_machine` |
| `GET` | `/api/units/{pioreactor_unit}/plugins/installed` | `get_plugins_on_machine` |
| `PATCH` | `/api/units/{pioreactor_unit}/plugins/uninstall` | `uninstall_plugin_across_cluster` |
| `POST` | `/api/units/{pioreactor_unit}/plugins/uninstall` | `uninstall_plugin_across_cluster` |
| `POST` | `/api/units/{pioreactor_unit}/system/reboot` | `reboot_unit` |
| `POST` | `/api/units/{pioreactor_unit}/system/repair` | `repair_unit` |
| `POST` | `/api/units/{pioreactor_unit}/system/shutdown` | `shutdown_unit` |
| `GET` | `/api/units/{pioreactor_unit}/system/utc_clock` | `get_unit_utc_clock` |
| `GET` | `/api/units/{pioreactor_unit}/system_logs` | `get_system_logs_for_unit` |
| `GET` | `/api/units/{pioreactor_unit}/usb` | `get_usb_status_on_machine` |
| `GET` | `/api/units/{pioreactor_unit}/usb/artifacts` | `get_usb_artifacts_on_machine` |
| `POST` | `/api/units/{pioreactor_unit}/usb/eject` | `eject_usb_on_machine` |
| `POST` | `/api/units/{pioreactor_unit}/usb/mount` | `mount_usb_on_machine` |
| `GET` | `/api/units/{pioreactor_unit}/versions/app` | `get_app_versions` |
| `GET` | `/api/units/{pioreactor_unit}/zipped_dot_pioreactor` | `get_zipped_dot_pioreactor` |
| `GET` | `/api/workers` | `get_list_of_workers` |
| `PUT` | `/api/workers` | `add_worker` |
| `DELETE` | `/api/workers/{pioreactor_unit}` | `delete_worker` |
| `GET` | `/api/workers/{pioreactor_unit}` | `get_worker` |
| `GET` | `/api/workers/{pioreactor_unit}/active_calibrations` | `get_all_active_calibrations` |
| `DELETE` | `/api/workers/{pioreactor_unit}/active_calibrations/{device}` | `remove_active_status_calibration` |
| `PATCH` | `/api/workers/{pioreactor_unit}/active_calibrations/{device}/{calibration_name}` | `set_active_calibration` |
| `GET` | `/api/workers/{pioreactor_unit}/active_estimators` | `get_all_active_estimators` |
| `DELETE` | `/api/workers/{pioreactor_unit}/active_estimators/{device}` | `remove_active_status_estimator` |
| `PATCH` | `/api/workers/{pioreactor_unit}/active_estimators/{device}/{estimator_name}` | `set_active_estimator` |
| `GET` | `/api/workers/{pioreactor_unit}/automations/descriptors/{automation_type}` | `get_automation_descriptors_for_worker` |
| `PATCH` | `/api/workers/{pioreactor_unit}/bioreactor/update/experiments/{experiment}` | `update_bioreactor_on_unit` |
| `POST` | `/api/workers/{pioreactor_unit}/blink` | `blink_worker` |
| `GET` | `/api/workers/{pioreactor_unit}/calibration_protocols` | `get_calibration_protocols` |
| `GET` | `/api/workers/{pioreactor_unit}/calibrations` | `get_all_calibrations` |
| `GET` | `/api/workers/{pioreactor_unit}/calibrations/{device}` | `get_calibrations` |
| `POST` | `/api/workers/{pioreactor_unit}/calibrations/{device}` | `create_calibration` |
| `DELETE` | `/api/workers/{pioreactor_unit}/calibrations/{device}/{calibration_name}` | `delete_calibration` |
| `GET` | `/api/workers/{pioreactor_unit}/calibrations/{device}/{calibration_name}` | `get_calibration` |
| `POST` | `/api/workers/{pioreactor_unit}/calibrations/sessions` | `start_calibration_session` |
| `GET` | `/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}` | `get_calibration_session` |
| `POST` | `/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/abort` | `abort_calibration_session` |
| `POST` | `/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/inputs` | `advance_calibration_session` |
| `GET` | `/api/workers/{pioreactor_unit}/capabilities` | `get_capabilities` |
| `GET` | `/api/workers/{pioreactor_unit}/estimators` | `get_all_estimators` |
| `GET` | `/api/workers/{pioreactor_unit}/estimators/{device}` | `get_estimators_by_device` |
| `DELETE` | `/api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}` | `delete_estimator` |
| `GET` | `/api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}` | `get_estimator` |
| `GET` | `/api/workers/{pioreactor_unit}/experiment` | `get_experiment_assignment_for_worker` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/logs` | `get_logs_for_unit_and_experiment` |
| `POST` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/logs` | `publish_new_log` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/recent_logs` | `get_recent_logs_for_unit_and_experiment` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/{data_source}/{column}` | `get_fallback_time_series_per_unit` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/growth_rates` | `get_growth_rates_per_unit` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings` | `get_od_readings_per_unit` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_filtered` | `get_od_readings_filtered_per_unit` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_fused` | `get_od_readings_fused_per_unit` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/raw_od_readings` | `get_od_raw_readings_per_unit` |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/temperature_readings` | `get_temperature_readings_per_unit` |
| `PUT` | `/api/workers/{pioreactor_unit}/is_active` | `change_worker_status` |
| `GET` | `/api/workers/{pioreactor_unit}/jobs/descriptors` | `get_job_descriptors_for_worker` |
| `PATCH` | `/api/workers/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}` | `run_job_on_unit_in_experiment` |
| `POST` | `/api/workers/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}` | `run_job_on_unit_in_experiment` |
| `GET` | `/api/workers/{pioreactor_unit}/jobs/running` | `get_jobs_running` |
| `GET` | `/api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/experiments/{experiment}` | `get_job_settings_for_worker` |
| `GET` | `/api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/setting/{setting}/experiments/{experiment}` | `get_job_setting_for_worker` |
| `PATCH` | `/api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}` | `stop_all_jobs_on_unit_for_experiment` |
| `POST` | `/api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}` | `stop_all_jobs_on_unit_for_experiment` |
| `PATCH` | `/api/workers/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}` | `stop_specific_job_on_unit` |
| `POST` | `/api/workers/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}` | `stop_specific_job_on_unit` |
| `PATCH` | `/api/workers/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}` | `update_job_on_unit` |
| `GET` | `/api/workers/{pioreactor_unit}/model` | `get_worker_model_and_metadata` |
| `PUT` | `/api/workers/{pioreactor_unit}/model` | `change_worker_model` |
| `GET` | `/api/workers/{pioreactor_unit}/settings/descriptors` | `get_settings_descriptors_for_worker` |
| `GET` | `/api/workers/{pioreactor_unit}/zipped_calibrations` | `get_zipped_calibrations` |
| `DELETE` | `/api/workers/assignments` | `remove_all_workers_from_all_experiments` |
| `GET` | `/api/workers/assignments` | `get_workers_and_experiment_assignments` |
| `GET` | `/api/workers/discover` | `discover_available_workers` |
| `POST` | `/api/workers/setup` | `setup_worker_pioreactor` |

## Get Automation Descriptors

Return the leader's automation UI descriptors for one automation family.

### Endpoint
`GET /api/automations/descriptors/{automation_type}`

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

## Get Chart Descriptors

Return the leader's chart UI descriptors.

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

_Response body is plain text._

## Update Shared Config

Update Shared Config endpoint.

### Endpoint
`PATCH /api/config/shared`

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
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=test\n5=heating\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# efflux_tube_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep running the waste pump, what would the stable volume be.\n# see docs\nefflux_tube_volume_ml=14\ninitial_volume_ml=14\ninitial_alt_media_fraction=0.0\n\n\n[stirring.config]\ninitial_target_rpm=500\ninitial_duty_cycle...<truncated>"
  },
  {
    "filename": "config.ini",
    "timestamp": "2026-01-19T16:38:19.492Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=alt_media\n5=heating\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# efflux_tube_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep running the waste pump, what would the stable volume be.\n# see docs\nefflux_tube_volume_ml=14\ninitial_volume_ml=14\ninitial_alt_media_fraction=0.0\n\n\n[stirring.config]\ninitial_target_rpm=500\ninitial_duty_...<truncated>"
  },
  {
    "filename": "config.ini",
    "timestamp": "2026-01-15T01:12:24.848Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=alt_media\n5=heatingf\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# efflux_tube_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep running the waste pump, what would the stable volume be.\n# see docs\nefflux_tube_volume_ml=14\ninitial_volume_ml=14\ninitial_alt_media_fraction=0.0\n\n\n[stirring.config]\ninitial_target_rpm=500\ninitial_duty...<truncated>"
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
{
  "configs": {
    "localhost": {
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
  },
  "errors": {}
}
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

_Response body is plain text._

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
[
  {
    "dataset_name": "pioreactor_unit_activity_data",
    "description": "This dataset includes most of your experiment data, including the time series of OD metrics, temperature, stirring rates, LED updates, and dosings.",
    "display_name": "Pioreactor unit activity data (recommended)",
    "has_experiment": true,
    "has_unit": true,
    "default_order_by": "timestamp",
    "table": "pioreactor_unit_activity_data",
    "query": null,
    "source": "app",
    "timestamp_columns": [
      "timestamp"
    ],
    "always_partition_by_unit": true
  },
  {
    "dataset_name": "logs",
    "description": "This dataset includes the append-only collection of logs from all Pioreactors. A subset of these logs are displayed in the Log Table in the Experiment Overview.",
    "display_name": "Pioreactor logs",
    "has_experiment": true,
    "has_unit": true,
    "default_order_by": "timestamp",
    "table": "logs",
    "query": null,
    "source": "app",
    "timestamp_columns": [
      "timestamp"
    ],
    "always_partition_by_unit": false
  },
  {
    "dataset_name": "od_readings",
    "description": "This dataset includes a time series of readings provided by the sensors (transformed via a calibration curve, if available), the inputs for growth calculations and normalized optical density.",
    "display_name": "Optical density",
    "has_experiment": true,
    "has_unit": true,
    "default_order_by": "timestamp",
    "table": "od_readings",
    "query": null,
    "source": "app",
    "timestamp_columns": [
      "timestamp"
    ],
    "always_partition_by_unit": false
  }
]
```

## Preview Exportable Dataset

Preview Exportable Dataset endpoint.

### Endpoint
`GET /api/datasets/exportable/{target_dataset}/preview`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| target_dataset | string | Yes | Exportable dataset name. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| n_rows | integer | No | Maximum number of preview rows. Defaults to `5`. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T00:00:00Z",
    "pioreactor_unit": "pio01",
    "experiment": "testing_experiment"
  }
]
```

## Export Exportable Datasets

Export selected datasets for selected experiments.

### Endpoint
`POST /api/datasets/exportable/export`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| datasets | array | Yes | datasets. |
| experiments | array | Yes | experiments. |
| partition_by_experiment | boolean | Yes | partition by experiment. |
| partition_by_unit | boolean | Yes | partition by unit. |
| end_time | string | No | end time. |
| start_time | string | No | start time. |

```json
{
  "datasets": [
    "od_readings"
  ],
  "experiments": [
    "testing_experiment"
  ],
  "partition_by_experiment": true,
  "partition_by_unit": true,
  "end_time": "2026-01-01T12:00:00Z",
  "start_time": "2026-01-01T00:00:00Z"
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

## Export Exportable Datasets To Usb

Export selected datasets for selected experiments to the leader's mounted USB.

### Endpoint
`POST /api/datasets/exportable/export-to-usb`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| datasets | array | Yes | datasets. |
| experiments | array | Yes | experiments. |
| partition_by_experiment | boolean | Yes | partition by experiment. |
| partition_by_unit | boolean | Yes | partition by unit. |
| end_time | string | No | end time. |
| start_time | string | No | start time. |

```json
{
  "datasets": [
    "od_readings"
  ],
  "experiments": [
    "testing_experiment"
  ],
  "partition_by_experiment": true,
  "partition_by_unit": true,
  "end_time": "2026-01-01T12:00:00Z",
  "start_time": "2026-01-01T00:00:00Z"
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

## Get Experiment Profiles

Get Experiment Profiles endpoint.

### Endpoint
`GET /api/experiment_profiles`

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "experimentProfile": {
      "experiment_profile_name": "pr05 chemostat delayed start",
      "metadata": {
        "author": "Your Name",
        "description": "Chemostat on pr05 maintaining 20 mL culture volume with dilution rate 0.204 h^-1 (0.68 mL exchange every 10 minutes). Starts after growth phase when OD threshold reached. Temperature 30C, stirring 500 RPM with OD dodging.\n"
      },
      "plugins": [],
      "common": {
        "jobs": {}
      },
      "pioreactors": {
        "localhost": {
          "jobs": {
            "stirring": "<truncated>"
          },
          "label": null
        }
      },
      "inputs": {}
    },
    "file": "chemostat_Dongseok.yaml",
    "fullpath": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/experiment_profiles/chemostat_Dongseok.yaml"
  },
  {
    "experimentProfile": {
      "experiment_profile_name": "Debug2",
      "metadata": {
        "author": "d",
        "description": "d"
      },
      "plugins": [],
      "common": {
        "jobs": {}
      },
      "pioreactors": {
        "localhost": {
          "jobs": {
            "circulate_alt_media": "<truncated>"
          },
          "label": null
        }
      },
      "inputs": {}
    },
    "file": "from_forum.yaml",
    "fullpath": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/experiment_profiles/from_forum.yaml"
  },
  {
    "experimentProfile": {
      "experiment_profile_name": "invalid_demo",
      "metadata": {
        "author": null,
        "description": null
      },
      "plugins": [],
      "common": {
        "jobs": {
          "stirring": {
            "actions": "<truncated>",
            "description": "<truncated>"
          }
        }
      },
      "pioreactors": {},
      "inputs": {}
    },
    "file": "efef.yaml",
    "fullpath": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/experiment_profiles/efef.yaml"
  }
]
```

## Create Experiment Profile

Create an experiment profile YAML file.

### Endpoint
`POST /api/experiment_profiles`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| body | string | Yes | body. |
| filename | string | Yes | filename. |

```json
{
  "body": "Profile YAML or text content.",
  "filename": "profile.yaml"
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

_Response body is plain text._

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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| body | string | Yes | body. |

```json
{
  "body": "Profile YAML or text content."
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
    "experiment": "awdawd",
    "created_at": "2026-05-31T20:28:22.107Z",
    "description": "",
    "delta_hours": 71.0,
    "worker_count": 0,
    "tags": []
  },
  {
    "experiment": "LTEE - Glucose - Sterility Check",
    "created_at": "2025-07-15T16:24:29.932Z",
    "description": "First run - July 15, 2025",
    "delta_hours": 7755.0,
    "worker_count": 1,
    "tags": []
  },
  {
    "experiment": "Glc-> Glycerol \u2206pykF",
    "created_at": "2025-07-15T15:55:59.265Z",
    "description": "",
    "delta_hours": 7755.0,
    "worker_count": 0,
    "tags": []
  }
]
```

## Create Experiment

Create a new experiment.

### Endpoint
`POST /api/experiments`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | experiment. |
| description | string | No | description. |
| mediaUsed | string | No | mediaUsed. |
| organismUsed | string | No | organismUsed. |
| tags | array | No | tags. |

```json
{
  "experiment": "testing_experiment",
  "description": "Experiment notes.",
  "mediaUsed": "LB",
  "organismUsed": "E. coli",
  "tags": [
    "screening"
  ]
}
```

### Response

#### Success

Status: `201 Created`

Example body:

```json
{
  "experiment": "testing_experiment",
  "created_at": "2026-01-01T00:00:00Z",
  "description": "Experiment notes.",
  "delta_hours": 0,
  "worker_count": 1,
  "tags": [
    "screening"
  ]
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
  "experiment": "awdawd",
  "created_at": "2026-05-31T20:28:22.107Z",
  "description": "",
  "delta_hours": 71.0,
  "worker_count": 0,
  "tags": []
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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| description | string | No | description. |
| tags | array | No | tags. |

```json
{
  "description": "Experiment notes.",
  "tags": [
    "screening"
  ]
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "experiment": "testing_experiment",
  "created_at": "2026-01-01T00:00:00Z",
  "description": "Experiment notes.",
  "delta_hours": 0,
  "worker_count": 1,
  "tags": [
    "screening"
  ]
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
[]
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| min_level | string | No | min level. |
| skip | string | No | skip. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T00:00:00Z",
    "level": "INFO",
    "message": "Log message.",
    "task": "stirring",
    "source": "app",
    "pioreactor_unit": "pio01",
    "experiment": "testing_experiment"
  }
]
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
{
  "all": {
    "altMediaRate": 0.0,
    "mediaRate": 0.0
  }
}
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| min_level | string | No | min level. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T00:00:00Z",
    "level": "INFO",
    "message": "Log message.",
    "task": "stirring",
    "source": "app",
    "pioreactor_unit": "pio01",
    "experiment": "testing_experiment"
  }
]
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
| data_source | string | Yes | Time-series data source name. |
| column | string | Yes | Dataset column name. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
```

## Get Od Readings

Gets raw od for all units

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
```

## Get Od Readings Filtered

Gets normalized od for all units

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings_filtered`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
```

## Get Od Readings Fused

Get Od Readings Fused endpoint.

### Endpoint
`GET /api/experiments/{experiment}/time_series/od_readings_fused`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
```

## Get Od Raw Readings

Gets raw od for all units

### Endpoint
`GET /api/experiments/{experiment}/time_series/raw_od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| label | string | Yes | label. |
| unit | string | Yes | unit. |

```json
{
  "label": "Control",
  "unit": "example_unit"
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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| label | string | Yes | label. |
| unit | string | Yes | unit. |

```json
{
  "label": "Control",
  "unit": "example_unit"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | pioreactor unit. |

```json
{
  "pioreactor_unit": "pio02"
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
    "experiment": "LTEE - Glucose - Sterility Check",
    "created_at": "2025-07-15T16:24:29.932Z",
    "description": "First run - July 15, 2025",
    "delta_hours": 7755.0,
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
    "experiment": "LTEE - Glucose - Sterility Check",
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
  "experiment": "awdawd",
  "created_at": "2026-05-31T20:28:22.107Z",
  "description": "",
  "delta_hours": 71.0,
  "worker_count": 0,
  "tags": []
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
    "key": "MOPS 0.2% glc"
  },
  {
    "key": "MOPS 0.03% glc, 0.3% glycerol"
  },
  {
    "key": "MOPS 0..03% glc, 20 mM succinate"
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
    "key": "REL606 \u2206pykF"
  },
  {
    "key": "REL606"
  }
]
```

## Get Job Descriptors

Return the leader's background-job UI descriptors.

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

### Request

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| min_level | string | No | min level. |
| skip | string | No | skip. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T00:00:00Z",
    "level": "INFO",
    "message": "Log message.",
    "task": "stirring",
    "source": "app",
    "pioreactor_unit": "pio01",
    "experiment": "testing_experiment"
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
      "reactor_max_fill_volume_ml": 36.0,
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
      "reactor_max_fill_volume_ml": 36.0,
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
    }
  ]
}
```

## Get Settings Descriptors

Return the leader's settings UI descriptors.

### Endpoint
`GET /api/settings/descriptors`

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

## Update App From Release Archive

Update the Pioreactor app across the cluster from a staged release archive.

### Endpoint
`POST /api/system/update_from_archive`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| release_archive_location | string | Yes | release archive location. |
| units | string | Yes | units. |

```json
{
  "release_archive_location": "/tmp/release.zip",
  "units": "pio01"
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

## Update App

Update the Pioreactor app across the cluster to the next version.

### Endpoint
`POST /api/system/update_next_version`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| units | string | No | units. |

```json
{
  "units": "pio01"
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

## Upload System File

Stage a release archive or other system file on the leader.

### Endpoint
`POST /api/system/upload`

### Response

#### Success

Status: `201 Created`

Example body:

```json
{
  "message": "File successfully uploaded",
  "save_path": "/tmp/file.zip"
}
```

## Set System Utc Clock

Set the leader UTC clock, then sync workers from the leader.

### Endpoint
`POST /api/system/utc_clock`

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
    "pioreactor_unit": "pio01"
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
  "task_id": "7448035a-ae50-488a-9264-fd9b52753f90",
  "result_url_path": "/unit_api/task_results/7448035a-ae50-488a-9264-fd9b52753f90",
  "status": "accepted"
}
```

## Publish New Log

Publish a log message into an experiment log stream.

### Endpoint
`POST /api/units/{pioreactor_unit}/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| level | string | Yes | level. |
| message | string | Yes | message. |
| source | string | Yes | source. |
| timestamp | string | Yes | timestamp. |
| source_ | string | No | source . |
| task | string | No | task. |

```json
{
  "level": "INFO",
  "message": "Log message.",
  "source": "api",
  "timestamp": "2026-01-01T00:00:00Z",
  "source_": "api",
  "task": "stirring"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "status": "accepted"
}
```

## Import Dot Pioreactor Archive

Import a zipped `DOT_PIOREACTOR` archive into one unit.

### Endpoint
`POST /api/units/{pioreactor_unit}/import_zipped_dot_pioreactor`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

Status: `201 Created`

_Response body is binary file data._

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
  "task_id": "1b830602-1291-4473-b7f1-9e28b42f0c76",
  "result_url_path": "/unit_api/task_results/1b830602-1291-4473-b7f1-9e28b42f0c76",
  "status": "accepted"
}
```

## Stop All Jobs On Unit For Experiment

Stop all jobs for one unit, or `$broadcast`, in one experiment.

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

Stop all jobs for one unit, or `$broadcast`, in one experiment.

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

Stop one job on one unit in one experiment.

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
  "status": "accepted"
}
```

## Stop Specific Job On Unit

Stop one job on one unit in one experiment.

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
  "status": "accepted"
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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| settings | object | Yes | settings. |

```json
{
  "settings": {
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
  "status": "accepted"
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| min_level | string | No | min level. |
| skip | string | No | skip. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T00:00:00Z",
    "level": "INFO",
    "message": "Log message.",
    "task": "stirring",
    "source": "app",
    "pioreactor_unit": "pio01",
    "experiment": "testing_experiment"
  }
]
```

## Install Plugin Across Cluster

Install one plugin on one unit, or `$broadcast`.

### Endpoint
`PATCH /api/units/{pioreactor_unit}/plugins/install`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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

## Install Plugin Across Cluster

Install one plugin on one unit, or `$broadcast`.

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/install`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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

## Install Plugin From Leader Usb On Machine

Install one wheel plugin from the leader's Pioreactor-managed USB mount onto selected unit(s).

### Endpoint
`PATCH /api/units/{pioreactor_unit}/plugins/install-from-leader-usb`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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

## Install Plugin From Leader Usb On Machine

Install one wheel plugin from the leader's Pioreactor-managed USB mount onto selected unit(s).

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/install-from-leader-usb`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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
  "task_id": "5e89558d-3d17-4f61-ac36-ed1121cf9f9d",
  "result_url_path": "/unit_api/task_results/5e89558d-3d17-4f61-ac36-ed1121cf9f9d",
  "status": "accepted"
}
```

## Uninstall Plugin Across Cluster

Uninstall one plugin from one unit, or `$broadcast`.

### Endpoint
`PATCH /api/units/{pioreactor_unit}/plugins/uninstall`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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

## Uninstall Plugin Across Cluster

Uninstall one plugin from one unit, or `$broadcast`.

### Endpoint
`POST /api/units/{pioreactor_unit}/plugins/uninstall`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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

## Reboot Unit

Reboot one unit, or `$broadcast`.

### Endpoint
`POST /api/units/{pioreactor_unit}/system/reboot`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

Status: `201 Created`

_No success response body._

## Repair Unit

Repair filesystem permissions on one unit, or `$broadcast`.

### Endpoint
`POST /api/units/{pioreactor_unit}/system/repair`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

Status: `201 Created`

_No example body inferred._

## Shutdown Unit

Shut down one unit, or `$broadcast`.

### Endpoint
`POST /api/units/{pioreactor_unit}/system/shutdown`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

### Response

#### Success

Status: `201 Created`

_No success response body._

## Get Unit Utc Clock

Get Unit Utc Clock endpoint.

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
  "task_id": "9c28de09-a555-4b9c-b855-04478cf624d1",
  "result_url_path": "/unit_api/task_results/9c28de09-a555-4b9c-b855-04478cf624d1",
  "status": "accepted"
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| min_level | string | No | min level. |
| skip | string | No | skip. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T00:00:00Z",
    "level": "INFO",
    "message": "Log message.",
    "task": "stirring",
    "source": "app",
    "pioreactor_unit": "pio01",
    "experiment": "testing_experiment"
  }
]
```

## Get Usb Status On Machine

Get Usb Status On Machine endpoint.

### Endpoint
`GET /api/units/{pioreactor_unit}/usb`

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
  "task_id": "927d1cbf-0b7a-4f74-8314-d1305635d05c",
  "result_url_path": "/unit_api/task_results/927d1cbf-0b7a-4f74-8314-d1305635d05c",
  "status": "accepted"
}
```

## Get Usb Artifacts On Machine

Get Usb Artifacts On Machine endpoint.

### Endpoint
`GET /api/units/{pioreactor_unit}/usb/artifacts`

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
  "task_id": "c64d5eb5-02ea-402c-aef4-b9e51b8603df",
  "result_url_path": "/unit_api/task_results/c64d5eb5-02ea-402c-aef4-b9e51b8603df",
  "status": "accepted"
}
```

## Eject Usb On Machine

Eject Usb On Machine endpoint.

### Endpoint
`POST /api/units/{pioreactor_unit}/usb/eject`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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

## Mount Usb On Machine

Mount Usb On Machine endpoint.

### Endpoint
`POST /api/units/{pioreactor_unit}/usb/mount`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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
  "task_id": "308731dc-5ff9-4fa3-a639-f661ba1600c1",
  "result_url_path": "/unit_api/task_results/308731dc-5ff9-4fa3-a639-f661ba1600c1",
  "status": "accepted"
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

_Response body is binary file data._

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
    "model_version": "1.5",
    "ipv4_address": null
  },
  {
    "pioreactor_unit": "pio01",
    "added_at": "2026-05-15T01:58:36.935Z",
    "is_active": 1,
    "model_name": "pioreactor_40ml",
    "model_version": "1.5",
    "ipv4_address": null
  }
]
```

## Add Worker

Add Worker endpoint.

### Endpoint
`PUT /api/workers`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | pioreactor unit. |
| model_name | string | No | model name. |
| model_version | string | No | model version. |

```json
{
  "pioreactor_unit": "pio02",
  "model_name": "pioreactor_40ml",
  "model_version": "1.5"
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
  "task_id": "04d65197-0760-49df-bab6-679a7df53a16",
  "result_url_path": "/unit_api/task_results/04d65197-0760-49df-bab6-679a7df53a16",
  "status": "accepted"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
  "task_id": "2f70f7c5-0aa1-4834-b51e-5b769c65e668",
  "result_url_path": "/unit_api/task_results/2f70f7c5-0aa1-4834-b51e-5b769c65e668",
  "status": "accepted"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Get Automation Descriptors For Worker

Proxy a request for automation UI descriptors to one worker.

### Endpoint
`GET /api/workers/{pioreactor_unit}/automations/descriptors/{automation_type}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
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

## Blink Worker

Ask one worker's monitor job to blink its response LED.

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
  "status": "accepted"
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
  "task_id": "766dd6f2-42db-46e5-bd46-64ac2cc4815e",
  "result_url_path": "/unit_api/task_results/766dd6f2-42db-46e5-bd46-64ac2cc4815e",
  "status": "accepted"
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
  "task_id": "c44d1f32-3d6f-4451-b0ee-276125c0be1a",
  "result_url_path": "/unit_api/task_results/c44d1f32-3d6f-4451-b0ee-276125c0be1a",
  "status": "accepted"
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
  "task_id": "ec221526-d10e-467d-9c8b-82620181a483",
  "result_url_path": "/unit_api/task_results/ec221526-d10e-467d-9c8b-82620181a483",
  "status": "accepted"
}
```

## Create Calibration

Create a calibration on one worker, or `$broadcast`.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/{device}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
  "task_id": "5aff701e-2ee5-4969-aa0c-e4cf3c186983",
  "result_url_path": "/unit_api/task_results/5aff701e-2ee5-4969-aa0c-e4cf3c186983",
  "status": "accepted"
}
```

## Start Calibration Session

Start a browser-driven calibration session on one worker.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| protocol_name | string | Yes | protocol name. |
| target_device | string | Yes | target device. |

```json
{
  "protocol_name": "example_protocol_name",
  "target_device": "example_target_device"
}
```

### Response

#### Success

Status: `201 Created`

_No success response body._

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

_No success response body._

## Abort Calibration Session

Abort a calibration session on one worker.

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

Status: `201 Created`

_No success response body._

## Advance Calibration Session

Submit inputs for the current step of a calibration session.

### Endpoint
`POST /api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/inputs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| session_id | string | Yes | Calibration session identifier. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| inputs | object | No | inputs. |

```json
{
  "inputs": {}
}
```

### Response

#### Success

Status: `201 Created`

_No success response body._

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
  "task_id": "52b5366b-af75-484f-98d6-3beb483af96e",
  "result_url_path": "/unit_api/task_results/52b5366b-af75-484f-98d6-3beb483af96e",
  "status": "accepted"
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
  "task_id": "541b978e-98e6-4e4e-9f64-6d08da0d09bb",
  "result_url_path": "/unit_api/task_results/541b978e-98e6-4e4e-9f64-6d08da0d09bb",
  "status": "accepted"
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
  "task_id": "c837c1d1-9750-4e1f-9e36-597b9a493655",
  "result_url_path": "/unit_api/task_results/c837c1d1-9750-4e1f-9e36-597b9a493655",
  "status": "accepted"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
  "task_id": "e0d3b6de-49dd-4eba-afdb-bd807cd2f403",
  "result_url_path": "/unit_api/task_results/e0d3b6de-49dd-4eba-afdb-bd807cd2f403",
  "status": "accepted"
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
  "experiment": "LTEE - Glucose - Sterility Check",
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| min_level | string | No | min level. |
| skip | string | No | skip. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T00:00:00Z",
    "level": "INFO",
    "message": "Log message.",
    "task": "stirring",
    "source": "app",
    "pioreactor_unit": "pio01",
    "experiment": "testing_experiment"
  }
]
```

## Publish New Log

Publish a log message into an experiment log stream.

### Endpoint
`POST /api/workers/{pioreactor_unit}/experiments/{experiment}/logs`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| level | string | Yes | level. |
| message | string | Yes | message. |
| source | string | Yes | source. |
| timestamp | string | Yes | timestamp. |
| source_ | string | No | source . |
| task | string | No | task. |

```json
{
  "level": "INFO",
  "message": "Log message.",
  "source": "api",
  "timestamp": "2026-01-01T00:00:00Z",
  "source_": "api",
  "task": "stirring"
}
```

### Response

#### Success

Status: `202 Accepted`

Example body:

```json
{
  "status": "accepted"
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| min_level | string | No | min level. |

### Response

#### Success

Status: `200 OK`

Example body:

```json
[
  {
    "timestamp": "2026-01-01T00:00:00Z",
    "level": "INFO",
    "message": "Log message.",
    "task": "stirring",
    "source": "app",
    "pioreactor_unit": "pio01",
    "experiment": "testing_experiment"
  }
]
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
| data_source | string | Yes | Time-series data source name. |
| column | string | Yes | Dataset column name. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
```

## Get Od Readings Per Unit

Get Od Readings Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
```

## Get Od Readings Filtered Per Unit

Get Od Readings Filtered Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_filtered`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
```

## Get Od Readings Fused Per Unit

Get Od Readings Fused Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_fused`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
}
```

## Get Od Raw Readings Per Unit

Get Od Raw Readings Per Unit endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/raw_od_readings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
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

#### Query Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| lookback | number | No | Lookback window in hours. Defaults to `4.0`. |
| target_points | integer | No | Approximate maximum points per series. Defaults to `720` and must be greater than `0`. |

### Response

#### Success

Status: `200 OK`

Body shape: `series` is a list of series labels. `data` is a parallel list of point arrays, so `data[i]` contains the points for `series[i]`. Each point has `x` as an ISO-8601 UTC timestamp string and `y` as a number.

Example body:

```json
{
  "series": [
    "pio01",
    "pio02"
  ],
  "data": [
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.01234
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.0125
      }
    ],
    [
      {
        "x": "2026-01-01T00:00:00.000Z",
        "y": 0.00987
      },
      {
        "x": "2026-01-01T00:01:00.000Z",
        "y": 0.01001
      }
    ]
  ]
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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| is_active | integer | Yes | is active. |

```json
{
  "is_active": true
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

Proxy a request for background-job UI descriptors to one worker.

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
  "task_id": "5b1e3eb7-fe33-46af-8e03-8be15949d7ae",
  "result_url_path": "/unit_api/task_results/5b1e3eb7-fe33-46af-8e03-8be15949d7ae",
  "status": "accepted"
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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
| setting | string | Yes | Job setting name. |
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

## Stop All Jobs On Unit For Experiment

Stop all jobs for one unit, or `$broadcast`, in one experiment.

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

Stop all jobs for one unit, or `$broadcast`, in one experiment.

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

Stop one job on one unit in one experiment.

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
  "status": "accepted"
}
```

## Stop Specific Job On Unit

Stop one job on one unit in one experiment.

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
  "status": "accepted"
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

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| settings | object | Yes | settings. |

```json
{
  "settings": {
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
  "status": "accepted"
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
  "reactor_max_fill_volume_ml": 36.0,
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

Status: `200 OK`

Example body:

```json
{
  "status": "success"
}
```

## Get Settings Descriptors For Worker

Proxy a request for settings UI descriptors to one worker.

### Endpoint
`GET /api/workers/{pioreactor_unit}/settings/descriptors`

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

_Response body is binary file data._

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
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
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
[
  {
    "pioreactor_unit": "localhost",
    "experiment": "LTEE - Glucose - Sterility Check",
    "is_active": 1
  },
  {
    "pioreactor_unit": "pio01",
    "experiment": null,
    "is_active": 1
  }
]
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

Provision and register a newly discovered worker.

### Endpoint
`POST /api/workers/setup`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| model | string | Yes | model. |
| name | string | Yes | name. |
| version | string | Yes | version. |
| ipv4_address | string | No | ipv4 address. |

```json
{
  "model": "example_model",
  "name": "testing_experiment",
  "version": "example_version",
  "ipv4_address": "example_ipv4_address"
}
```

### Response

#### Success

Status: `200 OK`

Example body:

```json
{
  "msg": "Worker pio02 added successfully."
}
```

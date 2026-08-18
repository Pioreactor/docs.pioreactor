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

Endpoint count: `156`

## Endpoint Index

| Method | Path | Handler |
| ------ | ---- | ------- |
| `GET` | `/api/automations/descriptors/{automation_type}` | [`get_automation_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2955) |
| `GET` | `/api/charts/descriptors` | [`get_chart_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3133) |
| `GET` | `/api/config/shared` | [`get_shared_config`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3663) |
| `PATCH` | `/api/config/shared` | [`update_shared_config`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3679) |
| `GET` | `/api/config/shared/history` | [`get_shared_config_history`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3730) |
| `GET` | `/api/config/units/{pioreactor_unit}` | [`get_config_for_pioreactor_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3740) |
| `GET` | `/api/config/units/{pioreactor_unit}/specific` | [`get_specific_config_for_pioreactor_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3807) |
| `PATCH` | `/api/config/units/{pioreactor_unit}/specific` | [`update_specific_config_for_pioreactor_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3842) |
| `GET` | `/api/config/units/{pioreactor_unit}/specific/history` | [`get_specific_config_history_for_pioreactor_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3893) |
| `GET` | `/api/config/zipped` | [`get_zipped_configs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3595) |
| `GET` | `/api/datasets/exportable` | [`get_exportable_datasets`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3234) |
| `GET` | `/api/datasets/exportable/{target_dataset}/preview` | [`preview_exportable_dataset`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3256) |
| `POST` | `/api/datasets/exportable/export` | [`export_exportable_datasets`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3286) |
| `POST` | `/api/datasets/exportable/export-to-usb` | [`export_exportable_datasets_to_usb`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3326) |
| `GET` | `/api/experiment_profiles` | [`get_experiment_profiles`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4088) |
| `POST` | `/api/experiment_profiles` | [`create_experiment_profile`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3974) |
| `DELETE` | `/api/experiment_profiles/{filename}` | [`delete_experiment_profile`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4145) |
| `GET` | `/api/experiment_profiles/{filename}` | [`get_experiment_profile`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4127) |
| `PATCH` | `/api/experiment_profiles/{filename}` | [`update_experiment_profile`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4038) |
| `GET` | `/api/experiments` | [`get_experiments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3365) |
| `POST` | `/api/experiments` | [`create_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3383) |
| `DELETE` | `/api/experiments/{experiment}` | [`delete_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3440) |
| `GET` | `/api/experiments/{experiment}` | [`get_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3583) |
| `PATCH` | `/api/experiments/{experiment}` | [`update_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3550) |
| `GET` | `/api/experiments/{experiment}/cameras` | [`get_camera_statuses_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L711) |
| `GET` | `/api/experiments/{experiment}/experiment_profiles/recent` | [`get_recent_experiment_profile_runs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3959) |
| `GET` | `/api/experiments/{experiment}/experiment_profiles/running` | [`get_running_profiles`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3929) |
| `GET` | `/api/experiments/{experiment}/historical_worker_assignments` | [`get_list_of_historical_workers_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4656) |
| `GET` | `/api/experiments/{experiment}/logs` | [`get_exp_logs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1593) |
| `GET` | `/api/experiments/{experiment}/media_rates` | [`get_media_rates`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2057) |
| `GET` | `/api/experiments/{experiment}/recent_logs` | [`get_recent_logs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1550) |
| `GET` | `/api/experiments/{experiment}/time_series/{data_source}/{column}` | [`get_fallback_time_series`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1858) |
| `GET` | `/api/experiments/{experiment}/time_series/growth_rates` | [`get_growth_rates`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1769) |
| `GET` | `/api/experiments/{experiment}/time_series/od_readings` | [`get_od_readings`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1814) |
| `GET` | `/api/experiments/{experiment}/time_series/od_readings_filtered` | [`get_od_readings_filtered`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1799) |
| `GET` | `/api/experiments/{experiment}/time_series/od_readings_fused` | [`get_od_readings_fused`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1829) |
| `GET` | `/api/experiments/{experiment}/time_series/raw_od_readings` | [`get_od_raw_readings`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1843) |
| `GET` | `/api/experiments/{experiment}/time_series/temperature_readings` | [`get_temperature_readings`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1784) |
| `GET` | `/api/experiments/{experiment}/unit_labels` | [`get_unit_labels`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3480) |
| `PATCH` | `/api/experiments/{experiment}/unit_labels` | [`upsert_unit_labels`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3504) |
| `PUT` | `/api/experiments/{experiment}/unit_labels` | [`upsert_unit_labels`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3504) |
| `DELETE` | `/api/experiments/{experiment}/workers` | [`remove_workers_from_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4783) |
| `GET` | `/api/experiments/{experiment}/workers` | [`get_list_of_workers_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4640) |
| `PUT` | `/api/experiments/{experiment}/workers` | [`add_worker_to_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4670) |
| `DELETE` | `/api/experiments/{experiment}/workers/{pioreactor_unit}` | [`remove_worker_from_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4755) |
| `GET` | `/api/experiments/active` | [`get_active_experiments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4540) |
| `GET` | `/api/experiments/assignment_count` | [`get_experiments_worker_assignments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4589) |
| `GET` | `/api/experiments/latest` | [`get_latest_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3462) |
| `GET` | `/api/jobs/descriptors` | [`get_job_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3026) |
| `GET` | `/api/local_access_point` | [`get_local_access_point`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3918) |
| `GET` | `/api/logs` | [`get_logs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1574) |
| `GET` | `/api/models` | [`get_models`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1026) |
| `GET` | `/api/settings/descriptors` | [`get_settings_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3082) |
| `POST` | `/api/system/update_from_archive` | [`update_app_from_release_archive`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3177) |
| `POST` | `/api/system/update_next_version` | [`update_app`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3162) |
| `POST` | `/api/system/upload` | [`upload_system_file`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2893) |
| `POST` | `/api/system/utc_clock` | [`set_system_utc_clock`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1367) |
| `GET` | `/api/units` | [`get_list_of_units`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4174) |
| `GET` | `/api/units/{pioreactor_unit}/capabilities` | [`get_capabilities`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2827) |
| `POST` | `/api/units/{pioreactor_unit}/experiments/{experiment}/logs` | [`publish_new_log`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1713) |
| `POST` | `/api/units/{pioreactor_unit}/import_zipped_dot_pioreactor` | [`import_dot_pioreactor_archive`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2278) |
| `PATCH` | `/api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}` | [`run_job_on_unit_in_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1097) |
| `POST` | `/api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}` | [`run_job_on_unit_in_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1097) |
| `GET` | `/api/units/{pioreactor_unit}/jobs/running` | [`get_jobs_running`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1224) |
| `PATCH` | `/api/units/{pioreactor_unit}/jobs/stop/experiments/{experiment}` | [`stop_all_jobs_on_unit_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1041) |
| `POST` | `/api/units/{pioreactor_unit}/jobs/stop/experiments/{experiment}` | [`stop_all_jobs_on_unit_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1041) |
| `PATCH` | `/api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}` | [`stop_specific_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1063) |
| `POST` | `/api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}` | [`stop_specific_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1063) |
| `PATCH` | `/api/units/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}` | [`update_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1254) |
| `GET` | `/api/units/{pioreactor_unit}/logs` | [`get_logs_for_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1692) |
| `PATCH` | `/api/units/{pioreactor_unit}/plugins/install` | [`install_plugin_across_cluster`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2735) |
| `POST` | `/api/units/{pioreactor_unit}/plugins/install` | [`install_plugin_across_cluster`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2735) |
| `PATCH` | `/api/units/{pioreactor_unit}/plugins/install-from-leader-usb` | [`install_plugin_from_leader_usb_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2766) |
| `POST` | `/api/units/{pioreactor_unit}/plugins/install-from-leader-usb` | [`install_plugin_from_leader_usb_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2766) |
| `GET` | `/api/units/{pioreactor_unit}/plugins/installed` | [`get_plugins_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2723) |
| `PATCH` | `/api/units/{pioreactor_unit}/plugins/uninstall` | [`uninstall_plugin_across_cluster`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2796) |
| `POST` | `/api/units/{pioreactor_unit}/plugins/uninstall` | [`uninstall_plugin_across_cluster`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2796) |
| `POST` | `/api/units/{pioreactor_unit}/system/reboot` | [`reboot_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1329) |
| `POST` | `/api/units/{pioreactor_unit}/system/repair` | [`repair_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1349) |
| `POST` | `/api/units/{pioreactor_unit}/system/shutdown` | [`shutdown_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1339) |
| `GET` | `/api/units/{pioreactor_unit}/system/utc_clock` | [`get_unit_utc_clock`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1362) |
| `GET` | `/api/units/{pioreactor_unit}/system_logs` | [`get_system_logs_for_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1671) |
| `GET` | `/api/units/{pioreactor_unit}/usb` | [`get_usb_status_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2679) |
| `GET` | `/api/units/{pioreactor_unit}/usb/artifacts` | [`get_usb_artifacts_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2716) |
| `POST` | `/api/units/{pioreactor_unit}/usb/eject` | [`eject_usb_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2701) |
| `POST` | `/api/units/{pioreactor_unit}/usb/mount` | [`mount_usb_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2686) |
| `GET` | `/api/units/{pioreactor_unit}/versions/app` | [`get_app_versions`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2885) |
| `GET` | `/api/units/{pioreactor_unit}/zipped_dot_pioreactor` | [`get_zipped_dot_pioreactor`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2211) |
| `GET` | `/api/workers` | [`get_list_of_workers`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4181) |
| `PUT` | `/api/workers` | [`add_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4273) |
| `DELETE` | `/api/workers/{pioreactor_unit}` | [`delete_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4308) |
| `GET` | `/api/workers/{pioreactor_unit}` | [`get_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4472) |
| `GET` | `/api/workers/{pioreactor_unit}/active_calibrations` | [`get_all_active_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2123) |
| `DELETE` | `/api/workers/{pioreactor_unit}/active_calibrations/{device}` | [`remove_active_status_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2617) |
| `PATCH` | `/api/workers/{pioreactor_unit}/active_calibrations/{device}/{calibration_name}` | [`set_active_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2584) |
| `GET` | `/api/workers/{pioreactor_unit}/active_estimators` | [`get_all_active_estimators`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2134) |
| `DELETE` | `/api/workers/{pioreactor_unit}/active_estimators/{device}` | [`remove_active_status_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2628) |
| `PATCH` | `/api/workers/{pioreactor_unit}/active_estimators/{device}/{estimator_name}` | [`set_active_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2602) |
| `GET` | `/api/workers/{pioreactor_unit}/automations/descriptors/{automation_type}` | [`get_automation_descriptors_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2984) |
| `PATCH` | `/api/workers/{pioreactor_unit}/bioreactor/update/experiments/{experiment}` | [`update_bioreactor_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1302) |
| `POST` | `/api/workers/{pioreactor_unit}/blink` | [`blink_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1229) |
| `GET` | `/api/workers/{pioreactor_unit}/calibration_protocols` | [`get_calibration_protocols`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2103) |
| `GET` | `/api/workers/{pioreactor_unit}/calibrations` | [`get_all_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2114) |
| `GET` | `/api/workers/{pioreactor_unit}/calibrations/{device}` | [`get_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2360) |
| `POST` | `/api/workers/{pioreactor_unit}/calibrations/{device}` | [`create_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2396) |
| `DELETE` | `/api/workers/{pioreactor_unit}/calibrations/{device}/{calibration_name}` | [`delete_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2639) |
| `GET` | `/api/workers/{pioreactor_unit}/calibrations/{device}/{calibration_name}` | [`get_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2369) |
| `POST` | `/api/workers/{pioreactor_unit}/calibrations/sessions` | [`start_calibration_session`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2434) |
| `GET` | `/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}` | [`get_calibration_session`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2482) |
| `POST` | `/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/abort` | [`abort_calibration_session`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2551) |
| `POST` | `/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/inputs` | [`advance_calibration_session`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2510) |
| `GET` | `/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/status` | [`get_camera_status_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L732) |
| `GET` | `/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills` | [`list_camera_stills_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L837) |
| `POST` | `/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills` | [`capture_camera_still_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L856) |
| `GET` | `/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills.zip` | [`get_zipped_camera_stills_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L932) |
| `DELETE` | `/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills/{image_id}.jpg` | [`delete_camera_still_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L902) |
| `GET` | `/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills/{image_id}.jpg` | [`get_camera_still_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L878) |
| `GET` | `/api/workers/{pioreactor_unit}/camera/focus_sessions/{session_id}/preview.jpg` | [`get_camera_focus_preview_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L774) |
| `PATCH` | `/api/workers/{pioreactor_unit}/camera/settings` | [`update_camera_settings_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L751) |
| `GET` | `/api/workers/{pioreactor_unit}/capabilities` | [`get_capabilities`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2827) |
| `GET` | `/api/workers/{pioreactor_unit}/estimators` | [`get_all_estimators`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2143) |
| `GET` | `/api/workers/{pioreactor_unit}/estimators/{device}` | [`get_estimators_by_device`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2378) |
| `DELETE` | `/api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}` | [`delete_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2655) |
| `GET` | `/api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}` | [`get_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2387) |
| `GET` | `/api/workers/{pioreactor_unit}/experiment` | [`get_experiment_assignment_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4607) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/logs` | [`get_logs_for_unit_and_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1643) |
| `POST` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/logs` | [`publish_new_log`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1713) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/recent_logs` | [`get_recent_logs_for_unit_and_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1610) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/{data_source}/{column}` | [`get_fallback_time_series_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2006) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/growth_rates` | [`get_growth_rates_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1907) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings` | [`get_od_readings_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1955) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_filtered` | [`get_od_readings_filtered_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1941) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_fused` | [`get_od_readings_fused_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1972) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/raw_od_readings` | [`get_od_raw_readings_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1989) |
| `GET` | `/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/temperature_readings` | [`get_temperature_readings_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1924) |
| `PUT` | `/api/workers/{pioreactor_unit}/is_active` | [`change_worker_status`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4348) |
| `GET` | `/api/workers/{pioreactor_unit}/jobs/descriptors` | [`get_job_descriptors_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3048) |
| `PATCH` | `/api/workers/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}` | [`run_job_on_unit_in_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1097) |
| `POST` | `/api/workers/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}` | [`run_job_on_unit_in_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1097) |
| `GET` | `/api/workers/{pioreactor_unit}/jobs/running` | [`get_jobs_running`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1224) |
| `GET` | `/api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/experiments/{experiment}` | [`get_job_settings_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2842) |
| `GET` | `/api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/setting/{setting}/experiments/{experiment}` | [`get_job_setting_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2863) |
| `PATCH` | `/api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}` | [`stop_all_jobs_on_unit_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1041) |
| `POST` | `/api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}` | [`stop_all_jobs_on_unit_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1041) |
| `PATCH` | `/api/workers/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}` | [`stop_specific_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1063) |
| `POST` | `/api/workers/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}` | [`stop_specific_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1063) |
| `PATCH` | `/api/workers/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}` | [`update_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1254) |
| `GET` | `/api/workers/{pioreactor_unit}/model` | [`get_worker_model_and_metadata`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4431) |
| `PUT` | `/api/workers/{pioreactor_unit}/model` | [`change_worker_model`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4388) |
| `GET` | `/api/workers/{pioreactor_unit}/settings/descriptors` | [`get_settings_descriptors_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3099) |
| `GET` | `/api/workers/{pioreactor_unit}/task_results/{task_id}` | [`get_task_result_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L998) |
| `GET` | `/api/workers/{pioreactor_unit}/zipped_calibrations` | [`get_zipped_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2152) |
| `DELETE` | `/api/workers/assignments` | [`remove_all_workers_from_all_experiments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4567) |
| `GET` | `/api/workers/assignments` | [`get_workers_and_experiment_assignments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4522) |
| `GET` | `/api/workers/discover` | [`discover_available_workers`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4203) |
| `POST` | `/api/workers/setup` | [`setup_worker_pioreactor`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4216) |

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
    "timestamp": "2026-08-04T21:28:03.520Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=alt_media\n5=heating\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# efflux_tube_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep running the waste pump, what would the stable volume be.\n# see docs\nefflux_tube_volume_ml=14\ninitial_volume_ml=14\ninitial_alt_media_fraction=0.0\ninitial_cumulative_media_added_ml=0\ninitial_cumulative_a...<truncated>"
  },
  {
    "filename": "config.ini",
    "timestamp": "2026-08-04T21:27:21.754Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=alt_media\n5=heating\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# efflux_tube_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep running the waste pump, what would the stable volume be.\n# see docs\nefflux_tube_volume_ml=14\ninitial_volume_ml=14\ninitial_alt_media_fraction=0.0\ninitial_cumulative_media_added_ml=0\ninitial_cumulative_a...<truncated>"
  },
  {
    "filename": "config.ini",
    "timestamp": "2026-06-30T16:13:30.963Z",
    "data": "[PWM]\n# map the externals to the PWM\n# hardware PWM are available on channels 1 & 3.\n1=stirring\n2=waste\n3=media\n4=alt_media\n5=heating\n\n\n[leds]\nA=IR\nB=white_light\nC=\nD=\n\n\n[bioreactor]\n# efflux_tube_volume_ml is determined by the volume that just touches the outflow tube. I.e. if you\n# where to keep running the waste pump, what would the stable volume be.\n# see docs\nefflux_tube_volume_ml=14\ninitial_volume_ml=14\ninitial_alt_media_fraction=0.0\ninitial_cumulative_media_added_ml=0\ninitial_cumulative_a...<truncated>"
  }
]
```

## Get Config For Pioreactor Unit

Get merged configs, optionally limiting $broadcast with repeated ``unit`` query parameters.

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

_No example body inferred._

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
[]
```

## Get Zipped Configs

Get Zipped Configs endpoint.

### Endpoint
`GET /api/config/zipped`

### Response

#### Success

Status: `200 OK`

_Response body is binary file data._

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
    "always_partition_by_unit": true,
    "column_descriptions": {},
    "column_units": {}
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
    "always_partition_by_unit": false,
    "column_descriptions": {},
    "column_units": {}
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
    "always_partition_by_unit": false,
    "column_descriptions": {},
    "column_units": {}
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

Export selected datasets for one experiment.

### Endpoint
`POST /api/datasets/exportable/export`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| datasets | array | Yes | datasets. |
| experiment | string | Yes | experiment. |
| partition_by_experiment | boolean | Yes | partition by experiment. |
| partition_by_unit | boolean | Yes | partition by unit. |
| end_time | object | No | end time. |
| start_time | object | No | start time. |

```json
{
  "datasets": [
    "od_readings"
  ],
  "experiment": "testing_experiment",
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

Export selected datasets for one experiment to the leader's mounted USB.

### Endpoint
`POST /api/datasets/exportable/export-to-usb`

### Request

#### Request Body

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| datasets | array | Yes | datasets. |
| experiment | string | Yes | experiment. |
| partition_by_experiment | boolean | Yes | partition by experiment. |
| partition_by_unit | boolean | Yes | partition by unit. |
| end_time | object | No | end time. |
| start_time | object | No | start time. |

```json
{
  "datasets": [
    "od_readings"
  ],
  "experiment": "testing_experiment",
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
      "version": "1.0",
      "experiment_profile_name": "updating_jobs",
      "metadata": {
        "author": "Cam Davidson-Pilon",
        "description": "A profile to immediately start stirring, heating to 30C, and, after 2h, update temperature to 35C."
      },
      "plugins": [],
      "common": {
        "jobs": {
          "stirring": {
            "actions": "<truncated>",
            "description": "<truncated>"
          },
          "temperature_automation": {
            "actions": "<truncated>",
            "description": "<truncated>"
          }
        }
      },
      "pioreactors": {},
      "inputs": {}
    },
    "file": "update_temp.yaml",
    "fullpath": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/experiment_profiles/update_temp.yaml"
  },
  {
    "experimentProfile": {
      "version": "1.0",
      "experiment_profile_name": "test_simple1",
      "metadata": {
        "author": "Jane Doe",
        "description": null
      },
      "plugins": [],
      "common": {
        "jobs": {
          "od_reading": {
            "actions": "<truncated>",
            "description": "<truncated>"
          }
        }
      },
      "pioreactors": {},
      "inputs": {}
    },
    "file": "test_simple.yaml",
    "fullpath": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/experiment_profiles/test_simple.yaml"
  },
  {
    "experimentProfile": {
      "version": "1.0",
      "experiment_profile_name": "temp_test",
      "metadata": {
        "author": null,
        "description": "testing https://forum.pioreactor.com/t/writing-an-experimental-profile-based-on-a-temperature-automation-dependent-on-a-desired-od-reading/774"
      },
      "plugins": [],
      "common": {
        "jobs": {}
      },
      "pioreactors": {
        "localhost": {
          "jobs": {
            "temperature_automation": "<truncated>"
          },
          "label": null
        }
      },
      "inputs": {}
    },
    "file": "temp_test.yaml",
    "fullpath": "/Users/camerondavidson-pilon/code/pioreactor/.pioreactor/experiment_profiles/temp_test.yaml"
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
    "experiment": "demo",
    "created_at": "2026-07-08T15:25:38.033Z",
    "description": "aefaefef",
    "delta_hours": 984.0,
    "worker_count": 0,
    "tags": [
      "awdawd",
      "rgrg"
    ]
  },
  {
    "experiment": "test_bioreactor_topics_land_in_db2",
    "created_at": "2026-07-08T15:19:13.502Z",
    "description": null,
    "delta_hours": 984.0,
    "worker_count": 0,
    "tags": []
  },
  {
    "experiment": "test_bioreactor_topics_land_in_db",
    "created_at": "2026-06-22T14:55:36.582000+00:00",
    "description": null,
    "delta_hours": 1368.0,
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
| tags | array | No | tags. |

```json
{
  "experiment": "testing_experiment",
  "description": "Experiment notes.",
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
  "experiment": "demo",
  "created_at": "2026-07-08T15:25:38.033Z",
  "description": "aefaefef",
  "delta_hours": 984.0,
  "worker_count": 0,
  "tags": [
    "awdawd",
    "rgrg"
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

## Get Camera Statuses For Experiment

Get Camera Statuses For Experiment endpoint.

### Endpoint
`GET /api/experiments/{experiment}/cameras`

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
  "cameras": {
    "localhost": {
      "ok": true,
      "unit": "localhost",
      "value": {
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
    }
  }
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
    "experiment": "demo",
    "is_currently_assigned_to_experiment": 0
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

Assign a worker, treating a retry of the current assignment as a no-op.

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
    "experiment": "ALE - Acetate",
    "created_at": "2024-09-04T17:04:46.423882Z",
    "description": "MZ PhD Evolution research experiment. Pioreactors 9-16.",
    "delta_hours": 17110.0,
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
  "experiment": "demo",
  "created_at": "2026-07-08T15:25:38.033Z",
  "description": "aefaefef",
  "delta_hours": 984.0,
  "worker_count": 0,
  "tags": [
    "awdawd",
    "rgrg"
  ]
}
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
    "pioreactor_unit": "erger"
  },
  {
    "pioreactor_unit": "localhost"
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
  "task_id": "945c2f0e-215e-4c73-8d81-d47d4033e79d",
  "result_url_path": "/unit_api/task_results/945c2f0e-215e-4c73-8d81-d47d4033e79d",
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
  "task_id": "f5c67fae-8265-4b05-a9ea-e45ce71b022c",
  "result_url_path": "/unit_api/task_results/f5c67fae-8265-4b05-a9ea-e45ce71b022c",
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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
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

Install one plugin artifact from the leader's Pioreactor-managed USB mount onto selected unit(s).

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

Install one plugin artifact from the leader's Pioreactor-managed USB mount onto selected unit(s).

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
  "task_id": "e7495360-7f7b-4955-a193-c5859ea684ec",
  "result_url_path": "/unit_api/task_results/e7495360-7f7b-4955-a193-c5859ea684ec",
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
  "task_id": "e81c7c87-2f63-4ade-a7a6-1e56e7dbb275",
  "result_url_path": "/unit_api/task_results/e81c7c87-2f63-4ade-a7a6-1e56e7dbb275",
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
  "task_id": "cbae38bf-1d06-48cb-a014-5cd55d826b64",
  "result_url_path": "/unit_api/task_results/cbae38bf-1d06-48cb-a014-5cd55d826b64",
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
  "task_id": "b5770988-1b62-4bee-b137-96823414dd3e",
  "result_url_path": "/unit_api/task_results/b5770988-1b62-4bee-b137-96823414dd3e",
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
  "task_id": "c972342a-eefb-476b-b5db-f063b4199cc2",
  "result_url_path": "/unit_api/task_results/c972342a-eefb-476b-b5db-f063b4199cc2",
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
    "pioreactor_unit": "erger",
    "added_at": "2026-08-10T17:19:48.761Z",
    "is_active": 1,
    "model_name": "pioreactor_40ml",
    "model_version": "1.5",
    "ipv4_address": null
  },
  {
    "pioreactor_unit": "localhost",
    "added_at": "2025-10-03T14:12:44.444Z",
    "is_active": 1,
    "model_name": "pioreactor_40ml",
    "model_version": "1.5",
    "ipv4_address": null
  }
]
```

## Add Worker

Register a worker without changing an existing worker on retry.

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

Status: `200 OK`

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
  "pioreactor_unit": "erger",
  "added_at": "2026-08-10T17:19:48.761Z",
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
  "task_id": "e1dc8adf-b39a-4b9e-b789-7db944bf1d7a",
  "result_url_path": "/unit_api/task_results/e1dc8adf-b39a-4b9e-b789-7db944bf1d7a",
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
  "task_id": "06cfac50-c20e-4e65-a3ba-4f2759267bb5",
  "result_url_path": "/unit_api/task_results/06cfac50-c20e-4e65-a3ba-4f2759267bb5",
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

_No example body inferred._

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
  "task_id": "3b9a6e0e-20b1-482e-b1c9-0cbcfa4adaa3",
  "result_url_path": "/unit_api/task_results/3b9a6e0e-20b1-482e-b1c9-0cbcfa4adaa3",
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
  "task_id": "9b5e6082-7816-46a2-b029-ef56c1db21fc",
  "result_url_path": "/unit_api/task_results/9b5e6082-7816-46a2-b029-ef56c1db21fc",
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
  "task_id": "5969cafe-adf8-424c-a238-eac36b9b7cd1",
  "result_url_path": "/unit_api/task_results/5969cafe-adf8-424c-a238-eac36b9b7cd1",
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
  "task_id": "ada412c0-633e-4ecc-9512-10a1f2615571",
  "result_url_path": "/unit_api/task_results/ada412c0-633e-4ecc-9512-10a1f2615571",
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

## Get Camera Status For Worker

Get Camera Status For Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/camera/experiments/{experiment}/status`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## List Camera Stills For Worker Experiment

List Camera Stills For Worker Experiment endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## Capture Camera Still For Worker Experiment

Capture Camera Still For Worker Experiment endpoint.

### Endpoint
`POST /api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills`

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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
  "status": "accepted"
}
```

## Get Zipped Camera Stills For Worker Experiment

Get Zipped Camera Stills For Worker Experiment endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills.zip`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |

### Response

#### Success

Status: `200 OK`

_Response body is binary file data._

## Delete Camera Still For Worker Experiment

Delete Camera Still For Worker Experiment endpoint.

### Endpoint
`DELETE /api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills/{image_id}.jpg`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |
| image_id | string | Yes | image id. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## Get Camera Still For Worker Experiment

Get Camera Still For Worker Experiment endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills/{image_id}.jpg`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| experiment | string | Yes | Experiment identifier. |
| image_id | string | Yes | image id. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## Get Camera Focus Preview For Worker

Get Camera Focus Preview For Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/camera/focus_sessions/{session_id}/preview.jpg`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| session_id | string | Yes | Calibration session identifier. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

## Update Camera Settings For Worker

Update Camera Settings For Worker endpoint.

### Endpoint
`PATCH /api/workers/{pioreactor_unit}/camera/settings`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |

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
  "task_id": "e2ac98f8-41c1-47d4-a187-f52054b83a82",
  "result_url_path": "/unit_api/task_results/e2ac98f8-41c1-47d4-a187-f52054b83a82",
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
  "task_id": "b20306fa-3c88-43cf-8aa4-18b9eb471c76",
  "result_url_path": "/unit_api/task_results/b20306fa-3c88-43cf-8aa4-18b9eb471c76",
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
  "task_id": "67d869d6-6c72-459b-829d-8c176abb629e",
  "result_url_path": "/unit_api/task_results/67d869d6-6c72-459b-829d-8c176abb629e",
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
  "task_id": "a916238a-14e8-438f-a71f-e0b0437f8a74",
  "result_url_path": "/unit_api/task_results/a916238a-14e8-438f-a71f-e0b0437f8a74",
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

_No example body inferred._

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

_No example body inferred._

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
  "task_id": "1c786869-4f94-4489-8adb-5a0f2856c502",
  "result_url_path": "/unit_api/task_results/1c786869-4f94-4489-8adb-5a0f2856c502",
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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
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
  "unit": "pio01",
  "task_id": "abcd1234",
  "result_url_path": "/unit_api/task_results/abcd1234",
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
  "pioreactor_unit": "erger",
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

_No example body inferred._

## Get Task Result For Worker

Get Task Result For Worker endpoint.

### Endpoint
`GET /api/workers/{pioreactor_unit}/task_results/{task_id}`

### Request

#### Path Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pioreactor_unit | string | Yes | Unit name or `$broadcast` where supported. |
| task_id | string | Yes | Task identifier. |

### Response

#### Success

Status: `200 OK`

_No example body inferred._

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
    "pioreactor_unit": "erger",
    "experiment": null,
    "is_active": 1
  },
  {
    "pioreactor_unit": "localhost",
    "experiment": "ALE - Acetate",
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

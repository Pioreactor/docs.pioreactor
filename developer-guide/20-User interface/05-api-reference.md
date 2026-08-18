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
| `GET` | [`/api/automations/descriptors/{automation_type}`](#endpoint-get-api-automations-descriptors-automation-type) | [`get_automation_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2955) |
| `GET` | [`/api/charts/descriptors`](#endpoint-get-api-charts-descriptors) | [`get_chart_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3133) |
| `GET` | [`/api/config/shared`](#endpoint-get-api-config-shared) | [`get_shared_config`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3663) |
| `PATCH` | [`/api/config/shared`](#endpoint-patch-api-config-shared) | [`update_shared_config`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3679) |
| `GET` | [`/api/config/shared/history`](#endpoint-get-api-config-shared-history) | [`get_shared_config_history`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3730) |
| `GET` | [`/api/config/units/{pioreactor_unit}`](#endpoint-get-api-config-units-pioreactor-unit) | [`get_config_for_pioreactor_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3740) |
| `GET` | [`/api/config/units/{pioreactor_unit}/specific`](#endpoint-get-api-config-units-pioreactor-unit-specific) | [`get_specific_config_for_pioreactor_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3807) |
| `PATCH` | [`/api/config/units/{pioreactor_unit}/specific`](#endpoint-patch-api-config-units-pioreactor-unit-specific) | [`update_specific_config_for_pioreactor_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3842) |
| `GET` | [`/api/config/units/{pioreactor_unit}/specific/history`](#endpoint-get-api-config-units-pioreactor-unit-specific-history) | [`get_specific_config_history_for_pioreactor_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3893) |
| `GET` | [`/api/config/zipped`](#endpoint-get-api-config-zipped) | [`get_zipped_configs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3595) |
| `GET` | [`/api/datasets/exportable`](#endpoint-get-api-datasets-exportable) | [`get_exportable_datasets`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3234) |
| `GET` | [`/api/datasets/exportable/{target_dataset}/preview`](#endpoint-get-api-datasets-exportable-target-dataset-preview) | [`preview_exportable_dataset`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3256) |
| `POST` | [`/api/datasets/exportable/export`](#endpoint-post-api-datasets-exportable-export) | [`export_exportable_datasets`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3286) |
| `POST` | [`/api/datasets/exportable/export-to-usb`](#endpoint-post-api-datasets-exportable-export-to-usb) | [`export_exportable_datasets_to_usb`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3326) |
| `GET` | [`/api/experiment_profiles`](#endpoint-get-api-experiment-profiles) | [`get_experiment_profiles`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4088) |
| `POST` | [`/api/experiment_profiles`](#endpoint-post-api-experiment-profiles) | [`create_experiment_profile`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3974) |
| `DELETE` | [`/api/experiment_profiles/{filename}`](#endpoint-delete-api-experiment-profiles-filename) | [`delete_experiment_profile`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4145) |
| `GET` | [`/api/experiment_profiles/{filename}`](#endpoint-get-api-experiment-profiles-filename) | [`get_experiment_profile`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4127) |
| `PATCH` | [`/api/experiment_profiles/{filename}`](#endpoint-patch-api-experiment-profiles-filename) | [`update_experiment_profile`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4038) |
| `GET` | [`/api/experiments`](#endpoint-get-api-experiments) | [`get_experiments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3365) |
| `POST` | [`/api/experiments`](#endpoint-post-api-experiments) | [`create_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3383) |
| `DELETE` | [`/api/experiments/{experiment}`](#endpoint-delete-api-experiments-experiment) | [`delete_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3440) |
| `GET` | [`/api/experiments/{experiment}`](#endpoint-get-api-experiments-experiment) | [`get_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3583) |
| `PATCH` | [`/api/experiments/{experiment}`](#endpoint-patch-api-experiments-experiment) | [`update_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3550) |
| `GET` | [`/api/experiments/{experiment}/cameras`](#endpoint-get-api-experiments-experiment-cameras) | [`get_camera_statuses_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L711) |
| `GET` | [`/api/experiments/{experiment}/experiment_profiles/recent`](#endpoint-get-api-experiments-experiment-experiment-profiles-recent) | [`get_recent_experiment_profile_runs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3959) |
| `GET` | [`/api/experiments/{experiment}/experiment_profiles/running`](#endpoint-get-api-experiments-experiment-experiment-profiles-running) | [`get_running_profiles`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3929) |
| `GET` | [`/api/experiments/{experiment}/historical_worker_assignments`](#endpoint-get-api-experiments-experiment-historical-worker-assignments) | [`get_list_of_historical_workers_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4656) |
| `GET` | [`/api/experiments/{experiment}/logs`](#endpoint-get-api-experiments-experiment-logs) | [`get_exp_logs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1593) |
| `GET` | [`/api/experiments/{experiment}/media_rates`](#endpoint-get-api-experiments-experiment-media-rates) | [`get_media_rates`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2057) |
| `GET` | [`/api/experiments/{experiment}/recent_logs`](#endpoint-get-api-experiments-experiment-recent-logs) | [`get_recent_logs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1550) |
| `GET` | [`/api/experiments/{experiment}/time_series/{data_source}/{column}`](#endpoint-get-api-experiments-experiment-time-series-data-source-column) | [`get_fallback_time_series`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1858) |
| `GET` | [`/api/experiments/{experiment}/time_series/growth_rates`](#endpoint-get-api-experiments-experiment-time-series-growth-rates) | [`get_growth_rates`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1769) |
| `GET` | [`/api/experiments/{experiment}/time_series/od_readings`](#endpoint-get-api-experiments-experiment-time-series-od-readings) | [`get_od_readings`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1814) |
| `GET` | [`/api/experiments/{experiment}/time_series/od_readings_filtered`](#endpoint-get-api-experiments-experiment-time-series-od-readings-filtered) | [`get_od_readings_filtered`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1799) |
| `GET` | [`/api/experiments/{experiment}/time_series/od_readings_fused`](#endpoint-get-api-experiments-experiment-time-series-od-readings-fused) | [`get_od_readings_fused`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1829) |
| `GET` | [`/api/experiments/{experiment}/time_series/raw_od_readings`](#endpoint-get-api-experiments-experiment-time-series-raw-od-readings) | [`get_od_raw_readings`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1843) |
| `GET` | [`/api/experiments/{experiment}/time_series/temperature_readings`](#endpoint-get-api-experiments-experiment-time-series-temperature-readings) | [`get_temperature_readings`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1784) |
| `GET` | [`/api/experiments/{experiment}/unit_labels`](#endpoint-get-api-experiments-experiment-unit-labels) | [`get_unit_labels`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3480) |
| `PATCH` | [`/api/experiments/{experiment}/unit_labels`](#endpoint-patch-api-experiments-experiment-unit-labels) | [`upsert_unit_labels`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3504) |
| `PUT` | [`/api/experiments/{experiment}/unit_labels`](#endpoint-put-api-experiments-experiment-unit-labels) | [`upsert_unit_labels`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3504) |
| `DELETE` | [`/api/experiments/{experiment}/workers`](#endpoint-delete-api-experiments-experiment-workers) | [`remove_workers_from_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4783) |
| `GET` | [`/api/experiments/{experiment}/workers`](#endpoint-get-api-experiments-experiment-workers) | [`get_list_of_workers_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4640) |
| `PUT` | [`/api/experiments/{experiment}/workers`](#endpoint-put-api-experiments-experiment-workers) | [`add_worker_to_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4670) |
| `DELETE` | [`/api/experiments/{experiment}/workers/{pioreactor_unit}`](#endpoint-delete-api-experiments-experiment-workers-pioreactor-unit) | [`remove_worker_from_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4755) |
| `GET` | [`/api/experiments/active`](#endpoint-get-api-experiments-active) | [`get_active_experiments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4540) |
| `GET` | [`/api/experiments/assignment_count`](#endpoint-get-api-experiments-assignment-count) | [`get_experiments_worker_assignments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4589) |
| `GET` | [`/api/experiments/latest`](#endpoint-get-api-experiments-latest) | [`get_latest_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3462) |
| `GET` | [`/api/jobs/descriptors`](#endpoint-get-api-jobs-descriptors) | [`get_job_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3026) |
| `GET` | [`/api/local_access_point`](#endpoint-get-api-local-access-point) | [`get_local_access_point`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3918) |
| `GET` | [`/api/logs`](#endpoint-get-api-logs) | [`get_logs`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1574) |
| `GET` | [`/api/models`](#endpoint-get-api-models) | [`get_models`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1026) |
| `GET` | [`/api/settings/descriptors`](#endpoint-get-api-settings-descriptors) | [`get_settings_descriptors`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3082) |
| `POST` | [`/api/system/update_from_archive`](#endpoint-post-api-system-update-from-archive) | [`update_app_from_release_archive`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3177) |
| `POST` | [`/api/system/update_next_version`](#endpoint-post-api-system-update-next-version) | [`update_app`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3162) |
| `POST` | [`/api/system/upload`](#endpoint-post-api-system-upload) | [`upload_system_file`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2893) |
| `POST` | [`/api/system/utc_clock`](#endpoint-post-api-system-utc-clock) | [`set_system_utc_clock`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1367) |
| `GET` | [`/api/units`](#endpoint-get-api-units) | [`get_list_of_units`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4174) |
| `GET` | [`/api/units/{pioreactor_unit}/capabilities`](#endpoint-get-api-units-pioreactor-unit-capabilities) | [`get_capabilities`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2827) |
| `POST` | [`/api/units/{pioreactor_unit}/experiments/{experiment}/logs`](#endpoint-post-api-units-pioreactor-unit-experiments-experiment-logs) | [`publish_new_log`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1713) |
| `POST` | [`/api/units/{pioreactor_unit}/import_zipped_dot_pioreactor`](#endpoint-post-api-units-pioreactor-unit-import-zipped-dot-pioreactor) | [`import_dot_pioreactor_archive`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2278) |
| `PATCH` | [`/api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`](#endpoint-patch-api-units-pioreactor-unit-jobs-run-job-name-job-name-experiments-experiment) | [`run_job_on_unit_in_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1097) |
| `POST` | [`/api/units/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`](#endpoint-post-api-units-pioreactor-unit-jobs-run-job-name-job-name-experiments-experiment) | [`run_job_on_unit_in_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1097) |
| `GET` | [`/api/units/{pioreactor_unit}/jobs/running`](#endpoint-get-api-units-pioreactor-unit-jobs-running) | [`get_jobs_running`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1224) |
| `PATCH` | [`/api/units/{pioreactor_unit}/jobs/stop/experiments/{experiment}`](#endpoint-patch-api-units-pioreactor-unit-jobs-stop-experiments-experiment) | [`stop_all_jobs_on_unit_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1041) |
| `POST` | [`/api/units/{pioreactor_unit}/jobs/stop/experiments/{experiment}`](#endpoint-post-api-units-pioreactor-unit-jobs-stop-experiments-experiment) | [`stop_all_jobs_on_unit_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1041) |
| `PATCH` | [`/api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`](#endpoint-patch-api-units-pioreactor-unit-jobs-stop-job-name-job-name-experiments-experiment) | [`stop_specific_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1063) |
| `POST` | [`/api/units/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`](#endpoint-post-api-units-pioreactor-unit-jobs-stop-job-name-job-name-experiments-experiment) | [`stop_specific_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1063) |
| `PATCH` | [`/api/units/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}`](#endpoint-patch-api-units-pioreactor-unit-jobs-update-job-name-job-name-experiments-experiment) | [`update_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1254) |
| `GET` | [`/api/units/{pioreactor_unit}/logs`](#endpoint-get-api-units-pioreactor-unit-logs) | [`get_logs_for_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1692) |
| `PATCH` | [`/api/units/{pioreactor_unit}/plugins/install`](#endpoint-patch-api-units-pioreactor-unit-plugins-install) | [`install_plugin_across_cluster`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2735) |
| `POST` | [`/api/units/{pioreactor_unit}/plugins/install`](#endpoint-post-api-units-pioreactor-unit-plugins-install) | [`install_plugin_across_cluster`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2735) |
| `PATCH` | [`/api/units/{pioreactor_unit}/plugins/install-from-leader-usb`](#endpoint-patch-api-units-pioreactor-unit-plugins-install-from-leader-usb) | [`install_plugin_from_leader_usb_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2766) |
| `POST` | [`/api/units/{pioreactor_unit}/plugins/install-from-leader-usb`](#endpoint-post-api-units-pioreactor-unit-plugins-install-from-leader-usb) | [`install_plugin_from_leader_usb_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2766) |
| `GET` | [`/api/units/{pioreactor_unit}/plugins/installed`](#endpoint-get-api-units-pioreactor-unit-plugins-installed) | [`get_plugins_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2723) |
| `PATCH` | [`/api/units/{pioreactor_unit}/plugins/uninstall`](#endpoint-patch-api-units-pioreactor-unit-plugins-uninstall) | [`uninstall_plugin_across_cluster`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2796) |
| `POST` | [`/api/units/{pioreactor_unit}/plugins/uninstall`](#endpoint-post-api-units-pioreactor-unit-plugins-uninstall) | [`uninstall_plugin_across_cluster`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2796) |
| `POST` | [`/api/units/{pioreactor_unit}/system/reboot`](#endpoint-post-api-units-pioreactor-unit-system-reboot) | [`reboot_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1329) |
| `POST` | [`/api/units/{pioreactor_unit}/system/repair`](#endpoint-post-api-units-pioreactor-unit-system-repair) | [`repair_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1349) |
| `POST` | [`/api/units/{pioreactor_unit}/system/shutdown`](#endpoint-post-api-units-pioreactor-unit-system-shutdown) | [`shutdown_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1339) |
| `GET` | [`/api/units/{pioreactor_unit}/system/utc_clock`](#endpoint-get-api-units-pioreactor-unit-system-utc-clock) | [`get_unit_utc_clock`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1362) |
| `GET` | [`/api/units/{pioreactor_unit}/system_logs`](#endpoint-get-api-units-pioreactor-unit-system-logs) | [`get_system_logs_for_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1671) |
| `GET` | [`/api/units/{pioreactor_unit}/usb`](#endpoint-get-api-units-pioreactor-unit-usb) | [`get_usb_status_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2679) |
| `GET` | [`/api/units/{pioreactor_unit}/usb/artifacts`](#endpoint-get-api-units-pioreactor-unit-usb-artifacts) | [`get_usb_artifacts_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2716) |
| `POST` | [`/api/units/{pioreactor_unit}/usb/eject`](#endpoint-post-api-units-pioreactor-unit-usb-eject) | [`eject_usb_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2701) |
| `POST` | [`/api/units/{pioreactor_unit}/usb/mount`](#endpoint-post-api-units-pioreactor-unit-usb-mount) | [`mount_usb_on_machine`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2686) |
| `GET` | [`/api/units/{pioreactor_unit}/versions/app`](#endpoint-get-api-units-pioreactor-unit-versions-app) | [`get_app_versions`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2885) |
| `GET` | [`/api/units/{pioreactor_unit}/zipped_dot_pioreactor`](#endpoint-get-api-units-pioreactor-unit-zipped-dot-pioreactor) | [`get_zipped_dot_pioreactor`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2211) |
| `GET` | [`/api/workers`](#endpoint-get-api-workers) | [`get_list_of_workers`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4181) |
| `PUT` | [`/api/workers`](#endpoint-put-api-workers) | [`add_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4273) |
| `DELETE` | [`/api/workers/{pioreactor_unit}`](#endpoint-delete-api-workers-pioreactor-unit) | [`delete_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4308) |
| `GET` | [`/api/workers/{pioreactor_unit}`](#endpoint-get-api-workers-pioreactor-unit) | [`get_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4472) |
| `GET` | [`/api/workers/{pioreactor_unit}/active_calibrations`](#endpoint-get-api-workers-pioreactor-unit-active-calibrations) | [`get_all_active_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2123) |
| `DELETE` | [`/api/workers/{pioreactor_unit}/active_calibrations/{device}`](#endpoint-delete-api-workers-pioreactor-unit-active-calibrations-device) | [`remove_active_status_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2617) |
| `PATCH` | [`/api/workers/{pioreactor_unit}/active_calibrations/{device}/{calibration_name}`](#endpoint-patch-api-workers-pioreactor-unit-active-calibrations-device-calibration-name) | [`set_active_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2584) |
| `GET` | [`/api/workers/{pioreactor_unit}/active_estimators`](#endpoint-get-api-workers-pioreactor-unit-active-estimators) | [`get_all_active_estimators`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2134) |
| `DELETE` | [`/api/workers/{pioreactor_unit}/active_estimators/{device}`](#endpoint-delete-api-workers-pioreactor-unit-active-estimators-device) | [`remove_active_status_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2628) |
| `PATCH` | [`/api/workers/{pioreactor_unit}/active_estimators/{device}/{estimator_name}`](#endpoint-patch-api-workers-pioreactor-unit-active-estimators-device-estimator-name) | [`set_active_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2602) |
| `GET` | [`/api/workers/{pioreactor_unit}/automations/descriptors/{automation_type}`](#endpoint-get-api-workers-pioreactor-unit-automations-descriptors-automation-type) | [`get_automation_descriptors_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2984) |
| `PATCH` | [`/api/workers/{pioreactor_unit}/bioreactor/update/experiments/{experiment}`](#endpoint-patch-api-workers-pioreactor-unit-bioreactor-update-experiments-experiment) | [`update_bioreactor_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1302) |
| `POST` | [`/api/workers/{pioreactor_unit}/blink`](#endpoint-post-api-workers-pioreactor-unit-blink) | [`blink_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1229) |
| `GET` | [`/api/workers/{pioreactor_unit}/calibration_protocols`](#endpoint-get-api-workers-pioreactor-unit-calibration-protocols) | [`get_calibration_protocols`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2103) |
| `GET` | [`/api/workers/{pioreactor_unit}/calibrations`](#endpoint-get-api-workers-pioreactor-unit-calibrations) | [`get_all_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2114) |
| `GET` | [`/api/workers/{pioreactor_unit}/calibrations/{device}`](#endpoint-get-api-workers-pioreactor-unit-calibrations-device) | [`get_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2360) |
| `POST` | [`/api/workers/{pioreactor_unit}/calibrations/{device}`](#endpoint-post-api-workers-pioreactor-unit-calibrations-device) | [`create_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2396) |
| `DELETE` | [`/api/workers/{pioreactor_unit}/calibrations/{device}/{calibration_name}`](#endpoint-delete-api-workers-pioreactor-unit-calibrations-device-calibration-name) | [`delete_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2639) |
| `GET` | [`/api/workers/{pioreactor_unit}/calibrations/{device}/{calibration_name}`](#endpoint-get-api-workers-pioreactor-unit-calibrations-device-calibration-name) | [`get_calibration`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2369) |
| `POST` | [`/api/workers/{pioreactor_unit}/calibrations/sessions`](#endpoint-post-api-workers-pioreactor-unit-calibrations-sessions) | [`start_calibration_session`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2434) |
| `GET` | [`/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}`](#endpoint-get-api-workers-pioreactor-unit-calibrations-sessions-session-id) | [`get_calibration_session`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2482) |
| `POST` | [`/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/abort`](#endpoint-post-api-workers-pioreactor-unit-calibrations-sessions-session-id-abort) | [`abort_calibration_session`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2551) |
| `POST` | [`/api/workers/{pioreactor_unit}/calibrations/sessions/{session_id}/inputs`](#endpoint-post-api-workers-pioreactor-unit-calibrations-sessions-session-id-inputs) | [`advance_calibration_session`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2510) |
| `GET` | [`/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/status`](#endpoint-get-api-workers-pioreactor-unit-camera-experiments-experiment-status) | [`get_camera_status_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L732) |
| `GET` | [`/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills`](#endpoint-get-api-workers-pioreactor-unit-camera-experiments-experiment-stills) | [`list_camera_stills_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L837) |
| `POST` | [`/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills`](#endpoint-post-api-workers-pioreactor-unit-camera-experiments-experiment-stills) | [`capture_camera_still_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L856) |
| `GET` | [`/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills.zip`](#endpoint-get-api-workers-pioreactor-unit-camera-experiments-experiment-stills-zip) | [`get_zipped_camera_stills_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L932) |
| `DELETE` | [`/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills/{image_id}.jpg`](#endpoint-delete-api-workers-pioreactor-unit-camera-experiments-experiment-stills-image-id-jpg) | [`delete_camera_still_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L902) |
| `GET` | [`/api/workers/{pioreactor_unit}/camera/experiments/{experiment}/stills/{image_id}.jpg`](#endpoint-get-api-workers-pioreactor-unit-camera-experiments-experiment-stills-image-id-jpg) | [`get_camera_still_for_worker_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L878) |
| `GET` | [`/api/workers/{pioreactor_unit}/camera/focus_sessions/{session_id}/preview.jpg`](#endpoint-get-api-workers-pioreactor-unit-camera-focus-sessions-session-id-preview-jpg) | [`get_camera_focus_preview_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L774) |
| `PATCH` | [`/api/workers/{pioreactor_unit}/camera/settings`](#endpoint-patch-api-workers-pioreactor-unit-camera-settings) | [`update_camera_settings_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L751) |
| `GET` | [`/api/workers/{pioreactor_unit}/capabilities`](#endpoint-get-api-workers-pioreactor-unit-capabilities) | [`get_capabilities`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2827) |
| `GET` | [`/api/workers/{pioreactor_unit}/estimators`](#endpoint-get-api-workers-pioreactor-unit-estimators) | [`get_all_estimators`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2143) |
| `GET` | [`/api/workers/{pioreactor_unit}/estimators/{device}`](#endpoint-get-api-workers-pioreactor-unit-estimators-device) | [`get_estimators_by_device`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2378) |
| `DELETE` | [`/api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}`](#endpoint-delete-api-workers-pioreactor-unit-estimators-device-estimator-name) | [`delete_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2655) |
| `GET` | [`/api/workers/{pioreactor_unit}/estimators/{device}/{estimator_name}`](#endpoint-get-api-workers-pioreactor-unit-estimators-device-estimator-name) | [`get_estimator`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2387) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiment`](#endpoint-get-api-workers-pioreactor-unit-experiment) | [`get_experiment_assignment_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4607) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/logs`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-logs) | [`get_logs_for_unit_and_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1643) |
| `POST` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/logs`](#endpoint-post-api-workers-pioreactor-unit-experiments-experiment-logs) | [`publish_new_log`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1713) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/recent_logs`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-recent-logs) | [`get_recent_logs_for_unit_and_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1610) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/{data_source}/{column}`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-data-source-column) | [`get_fallback_time_series_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2006) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/growth_rates`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-growth-rates) | [`get_growth_rates_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1907) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-od-readings) | [`get_od_readings_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1955) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_filtered`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-od-readings-filtered) | [`get_od_readings_filtered_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1941) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/od_readings_fused`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-od-readings-fused) | [`get_od_readings_fused_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1972) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/raw_od_readings`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-raw-od-readings) | [`get_od_raw_readings_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1989) |
| `GET` | [`/api/workers/{pioreactor_unit}/experiments/{experiment}/time_series/temperature_readings`](#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-temperature-readings) | [`get_temperature_readings_per_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1924) |
| `PUT` | [`/api/workers/{pioreactor_unit}/is_active`](#endpoint-put-api-workers-pioreactor-unit-is-active) | [`change_worker_status`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4348) |
| `GET` | [`/api/workers/{pioreactor_unit}/jobs/descriptors`](#endpoint-get-api-workers-pioreactor-unit-jobs-descriptors) | [`get_job_descriptors_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3048) |
| `PATCH` | [`/api/workers/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`](#endpoint-patch-api-workers-pioreactor-unit-jobs-run-job-name-job-name-experiments-experiment) | [`run_job_on_unit_in_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1097) |
| `POST` | [`/api/workers/{pioreactor_unit}/jobs/run/job_name/{job_name}/experiments/{experiment}`](#endpoint-post-api-workers-pioreactor-unit-jobs-run-job-name-job-name-experiments-experiment) | [`run_job_on_unit_in_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1097) |
| `GET` | [`/api/workers/{pioreactor_unit}/jobs/running`](#endpoint-get-api-workers-pioreactor-unit-jobs-running) | [`get_jobs_running`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1224) |
| `GET` | [`/api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/experiments/{experiment}`](#endpoint-get-api-workers-pioreactor-unit-jobs-settings-job-name-job-name-experiments-experiment) | [`get_job_settings_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2842) |
| `GET` | [`/api/workers/{pioreactor_unit}/jobs/settings/job_name/{job_name}/setting/{setting}/experiments/{experiment}`](#endpoint-get-api-workers-pioreactor-unit-jobs-settings-job-name-job-name-setting-setting-experiments-experiment) | [`get_job_setting_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2863) |
| `PATCH` | [`/api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}`](#endpoint-patch-api-workers-pioreactor-unit-jobs-stop-experiments-experiment) | [`stop_all_jobs_on_unit_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1041) |
| `POST` | [`/api/workers/{pioreactor_unit}/jobs/stop/experiments/{experiment}`](#endpoint-post-api-workers-pioreactor-unit-jobs-stop-experiments-experiment) | [`stop_all_jobs_on_unit_for_experiment`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1041) |
| `PATCH` | [`/api/workers/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`](#endpoint-patch-api-workers-pioreactor-unit-jobs-stop-job-name-job-name-experiments-experiment) | [`stop_specific_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1063) |
| `POST` | [`/api/workers/{pioreactor_unit}/jobs/stop/job_name/{job_name}/experiments/{experiment}`](#endpoint-post-api-workers-pioreactor-unit-jobs-stop-job-name-job-name-experiments-experiment) | [`stop_specific_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1063) |
| `PATCH` | [`/api/workers/{pioreactor_unit}/jobs/update/job_name/{job_name}/experiments/{experiment}`](#endpoint-patch-api-workers-pioreactor-unit-jobs-update-job-name-job-name-experiments-experiment) | [`update_job_on_unit`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L1254) |
| `GET` | [`/api/workers/{pioreactor_unit}/model`](#endpoint-get-api-workers-pioreactor-unit-model) | [`get_worker_model_and_metadata`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4431) |
| `PUT` | [`/api/workers/{pioreactor_unit}/model`](#endpoint-put-api-workers-pioreactor-unit-model) | [`change_worker_model`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4388) |
| `GET` | [`/api/workers/{pioreactor_unit}/settings/descriptors`](#endpoint-get-api-workers-pioreactor-unit-settings-descriptors) | [`get_settings_descriptors_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L3099) |
| `GET` | [`/api/workers/{pioreactor_unit}/task_results/{task_id}`](#endpoint-get-api-workers-pioreactor-unit-task-results-task-id) | [`get_task_result_for_worker`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L998) |
| `GET` | [`/api/workers/{pioreactor_unit}/zipped_calibrations`](#endpoint-get-api-workers-pioreactor-unit-zipped-calibrations) | [`get_zipped_calibrations`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L2152) |
| `DELETE` | [`/api/workers/assignments`](#endpoint-delete-api-workers-assignments) | [`remove_all_workers_from_all_experiments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4567) |
| `GET` | [`/api/workers/assignments`](#endpoint-get-api-workers-assignments) | [`get_workers_and_experiment_assignments`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4522) |
| `GET` | [`/api/workers/discover`](#endpoint-get-api-workers-discover) | [`discover_available_workers`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4203) |
| `POST` | [`/api/workers/setup`](#endpoint-post-api-workers-setup) | [`setup_worker_pioreactor`](https://github.com/Pioreactor/pioreactor/blob/master/core/pioreactor/web/api.py#L4216) |

## Get Automation Descriptors {#endpoint-get-api-automations-descriptors-automation-type}

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

## Get Chart Descriptors {#endpoint-get-api-charts-descriptors}

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

## Get Shared Config {#endpoint-get-api-config-shared}

Get Shared Config endpoint.

### Endpoint
`GET /api/config/shared`

### Response

#### Success

Status: `200 OK`

_Response body is plain text._

## Update Shared Config {#endpoint-patch-api-config-shared}

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

## Get Shared Config History {#endpoint-get-api-config-shared-history}

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

## Get Config For Pioreactor Unit {#endpoint-get-api-config-units-pioreactor-unit}

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
  },
  "errors": {}
}
```

## Get Specific Config For Pioreactor Unit {#endpoint-get-api-config-units-pioreactor-unit-specific}

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

## Update Specific Config For Pioreactor Unit {#endpoint-patch-api-config-units-pioreactor-unit-specific}

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

## Get Specific Config History For Pioreactor Unit {#endpoint-get-api-config-units-pioreactor-unit-specific-history}

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

## Get Zipped Configs {#endpoint-get-api-config-zipped}

Get Zipped Configs endpoint.

### Endpoint
`GET /api/config/zipped`

### Response

#### Success

Status: `200 OK`

_Response body is binary file data._

## Get Exportable Datasets {#endpoint-get-api-datasets-exportable}

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

## Preview Exportable Dataset {#endpoint-get-api-datasets-exportable-target-dataset-preview}

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

## Export Exportable Datasets {#endpoint-post-api-datasets-exportable-export}

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

## Export Exportable Datasets To Usb {#endpoint-post-api-datasets-exportable-export-to-usb}

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

## Get Experiment Profiles {#endpoint-get-api-experiment-profiles}

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

## Create Experiment Profile {#endpoint-post-api-experiment-profiles}

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

## Delete Experiment Profile {#endpoint-delete-api-experiment-profiles-filename}

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

## Get Experiment Profile {#endpoint-get-api-experiment-profiles-filename}

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

## Update Experiment Profile {#endpoint-patch-api-experiment-profiles-filename}

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

## Get Experiments {#endpoint-get-api-experiments}

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
    "delta_hours": 1369.0,
    "worker_count": 0,
    "tags": []
  }
]
```

## Create Experiment {#endpoint-post-api-experiments}

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

## Delete Experiment {#endpoint-delete-api-experiments-experiment}

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

## Get Experiment {#endpoint-get-api-experiments-experiment}

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

## Update Experiment {#endpoint-patch-api-experiments-experiment}

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

## Get Camera Statuses For Experiment {#endpoint-get-api-experiments-experiment-cameras}

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
          "captured_at": "2026-08-18T15:54:17.433333Z",
          "image_id": "20260818T155417.433333Z-a5d9d6ba",
          "capture_reason": "scheduled"
        },
        "auto_capture_enabled": true,
        "snapshot_interval_minutes": 5
      }
    }
  }
}
```

## Get Recent Experiment Profile Runs {#endpoint-get-api-experiments-experiment-experiment-profiles-recent}

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

## Get Running Profiles {#endpoint-get-api-experiments-experiment-experiment-profiles-running}

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

## Get List Of Historical Workers For Experiment {#endpoint-get-api-experiments-experiment-historical-worker-assignments}

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

## Get Exp Logs {#endpoint-get-api-experiments-experiment-logs}

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

## Get Media Rates {#endpoint-get-api-experiments-experiment-media-rates}

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

## Get Recent Logs {#endpoint-get-api-experiments-experiment-recent-logs}

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

## Get Fallback Time Series {#endpoint-get-api-experiments-experiment-time-series-data-source-column}

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

## Get Growth Rates {#endpoint-get-api-experiments-experiment-time-series-growth-rates}

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

## Get Od Readings {#endpoint-get-api-experiments-experiment-time-series-od-readings}

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

## Get Od Readings Filtered {#endpoint-get-api-experiments-experiment-time-series-od-readings-filtered}

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

## Get Od Readings Fused {#endpoint-get-api-experiments-experiment-time-series-od-readings-fused}

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

## Get Od Raw Readings {#endpoint-get-api-experiments-experiment-time-series-raw-od-readings}

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

## Get Temperature Readings {#endpoint-get-api-experiments-experiment-time-series-temperature-readings}

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

## Get Unit Labels {#endpoint-get-api-experiments-experiment-unit-labels}

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

## Upsert Unit Labels {#endpoint-patch-api-experiments-experiment-unit-labels}

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

## Upsert Unit Labels {#endpoint-put-api-experiments-experiment-unit-labels}

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

## Remove Workers From Experiment {#endpoint-delete-api-experiments-experiment-workers}

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

## Get List Of Workers For Experiment {#endpoint-get-api-experiments-experiment-workers}

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

## Add Worker To Experiment {#endpoint-put-api-experiments-experiment-workers}

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

## Remove Worker From Experiment {#endpoint-delete-api-experiments-experiment-workers-pioreactor-unit}

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

## Get Active Experiments {#endpoint-get-api-experiments-active}

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
    "delta_hours": 17111.0,
    "worker_count": 1,
    "tags": []
  }
]
```

## Get Experiments Worker Assignments {#endpoint-get-api-experiments-assignment-count}

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

## Get Latest Experiment {#endpoint-get-api-experiments-latest}

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

## Get Job Descriptors {#endpoint-get-api-jobs-descriptors}

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

## Get Local Access Point {#endpoint-get-api-local-access-point}

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

## Get Logs {#endpoint-get-api-logs}

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

## Get Models {#endpoint-get-api-models}

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

## Get Settings Descriptors {#endpoint-get-api-settings-descriptors}

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

## Update App From Release Archive {#endpoint-post-api-system-update-from-archive}

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

## Update App {#endpoint-post-api-system-update-next-version}

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

## Upload System File {#endpoint-post-api-system-upload}

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

## Set System Utc Clock {#endpoint-post-api-system-utc-clock}

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

## Get List Of Units {#endpoint-get-api-units}

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
  }
]
```

## Get Capabilities {#endpoint-get-api-units-pioreactor-unit-capabilities}

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
  "task_id": "fb320b20-371d-4325-955d-10b0fd137311",
  "result_url_path": "/unit_api/task_results/fb320b20-371d-4325-955d-10b0fd137311",
  "status": "accepted"
}
```

## Publish New Log {#endpoint-post-api-units-pioreactor-unit-experiments-experiment-logs}

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

## Import Dot Pioreactor Archive {#endpoint-post-api-units-pioreactor-unit-import-zipped-dot-pioreactor}

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

## Run Job On Unit In Experiment {#endpoint-patch-api-units-pioreactor-unit-jobs-run-job-name-job-name-experiments-experiment}

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

## Run Job On Unit In Experiment {#endpoint-post-api-units-pioreactor-unit-jobs-run-job-name-job-name-experiments-experiment}

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

## Get Jobs Running {#endpoint-get-api-units-pioreactor-unit-jobs-running}

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
  "task_id": "f81e1c52-411c-4d3d-898b-8c452b9c88a9",
  "result_url_path": "/unit_api/task_results/f81e1c52-411c-4d3d-898b-8c452b9c88a9",
  "status": "accepted"
}
```

## Stop All Jobs On Unit For Experiment {#endpoint-patch-api-units-pioreactor-unit-jobs-stop-experiments-experiment}

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

## Stop All Jobs On Unit For Experiment {#endpoint-post-api-units-pioreactor-unit-jobs-stop-experiments-experiment}

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

## Stop Specific Job On Unit {#endpoint-patch-api-units-pioreactor-unit-jobs-stop-job-name-job-name-experiments-experiment}

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

## Stop Specific Job On Unit {#endpoint-post-api-units-pioreactor-unit-jobs-stop-job-name-job-name-experiments-experiment}

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

## Update Job On Unit {#endpoint-patch-api-units-pioreactor-unit-jobs-update-job-name-job-name-experiments-experiment}

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

## Get Logs For Unit {#endpoint-get-api-units-pioreactor-unit-logs}

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

## Install Plugin Across Cluster {#endpoint-patch-api-units-pioreactor-unit-plugins-install}

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

## Install Plugin Across Cluster {#endpoint-post-api-units-pioreactor-unit-plugins-install}

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

## Install Plugin From Leader Usb On Machine {#endpoint-patch-api-units-pioreactor-unit-plugins-install-from-leader-usb}

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

## Install Plugin From Leader Usb On Machine {#endpoint-post-api-units-pioreactor-unit-plugins-install-from-leader-usb}

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

## Get Plugins On Machine {#endpoint-get-api-units-pioreactor-unit-plugins-installed}

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
  "task_id": "d56b6643-69ad-4bce-89dc-fd108cee451b",
  "result_url_path": "/unit_api/task_results/d56b6643-69ad-4bce-89dc-fd108cee451b",
  "status": "accepted"
}
```

## Uninstall Plugin Across Cluster {#endpoint-patch-api-units-pioreactor-unit-plugins-uninstall}

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

## Uninstall Plugin Across Cluster {#endpoint-post-api-units-pioreactor-unit-plugins-uninstall}

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

## Reboot Unit {#endpoint-post-api-units-pioreactor-unit-system-reboot}

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

## Repair Unit {#endpoint-post-api-units-pioreactor-unit-system-repair}

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

## Shutdown Unit {#endpoint-post-api-units-pioreactor-unit-system-shutdown}

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

## Get Unit Utc Clock {#endpoint-get-api-units-pioreactor-unit-system-utc-clock}

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
  "task_id": "5c7da9e5-395c-4b31-95da-295f3ce2dd63",
  "result_url_path": "/unit_api/task_results/5c7da9e5-395c-4b31-95da-295f3ce2dd63",
  "status": "accepted"
}
```

## Get System Logs For Unit {#endpoint-get-api-units-pioreactor-unit-system-logs}

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

## Get Usb Status On Machine {#endpoint-get-api-units-pioreactor-unit-usb}

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
  "task_id": "48114953-967d-4ef5-ae1d-3b2eb7acb9c1",
  "result_url_path": "/unit_api/task_results/48114953-967d-4ef5-ae1d-3b2eb7acb9c1",
  "status": "accepted"
}
```

## Get Usb Artifacts On Machine {#endpoint-get-api-units-pioreactor-unit-usb-artifacts}

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
  "task_id": "b9edf6a8-45c0-4348-83c2-eec6be8cfef2",
  "result_url_path": "/unit_api/task_results/b9edf6a8-45c0-4348-83c2-eec6be8cfef2",
  "status": "accepted"
}
```

## Eject Usb On Machine {#endpoint-post-api-units-pioreactor-unit-usb-eject}

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

## Mount Usb On Machine {#endpoint-post-api-units-pioreactor-unit-usb-mount}

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

## Get App Versions {#endpoint-get-api-units-pioreactor-unit-versions-app}

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
  "task_id": "d3b290e6-7855-4998-a849-3cadfa57dbef",
  "result_url_path": "/unit_api/task_results/d3b290e6-7855-4998-a849-3cadfa57dbef",
  "status": "accepted"
}
```

## Get Zipped Dot Pioreactor {#endpoint-get-api-units-pioreactor-unit-zipped-dot-pioreactor}

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

## Get List Of Workers {#endpoint-get-api-workers}

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
  }
]
```

## Add Worker {#endpoint-put-api-workers}

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

## Delete Worker {#endpoint-delete-api-workers-pioreactor-unit}

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

## Get Worker {#endpoint-get-api-workers-pioreactor-unit}

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

## Get All Active Calibrations {#endpoint-get-api-workers-pioreactor-unit-active-calibrations}

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
  "task_id": "23dd05e2-1fda-4c4a-ac8a-d8a1a6c3f6b6",
  "result_url_path": "/unit_api/task_results/23dd05e2-1fda-4c4a-ac8a-d8a1a6c3f6b6",
  "status": "accepted"
}
```

## Remove Active Status Calibration {#endpoint-delete-api-workers-pioreactor-unit-active-calibrations-device}

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

## Set Active Calibration {#endpoint-patch-api-workers-pioreactor-unit-active-calibrations-device-calibration-name}

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

## Get All Active Estimators {#endpoint-get-api-workers-pioreactor-unit-active-estimators}

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
  "task_id": "5009497c-f57a-44c1-a490-a190314dc97d",
  "result_url_path": "/unit_api/task_results/5009497c-f57a-44c1-a490-a190314dc97d",
  "status": "accepted"
}
```

## Remove Active Status Estimator {#endpoint-delete-api-workers-pioreactor-unit-active-estimators-device}

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

## Set Active Estimator {#endpoint-patch-api-workers-pioreactor-unit-active-estimators-device-estimator-name}

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

## Get Automation Descriptors For Worker {#endpoint-get-api-workers-pioreactor-unit-automations-descriptors-automation-type}

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

## Update Bioreactor On Unit {#endpoint-patch-api-workers-pioreactor-unit-bioreactor-update-experiments-experiment}

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

## Blink Worker {#endpoint-post-api-workers-pioreactor-unit-blink}

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

## Get Calibration Protocols {#endpoint-get-api-workers-pioreactor-unit-calibration-protocols}

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
  "task_id": "86b6c527-2d8c-4642-a4ad-35524f4a8a60",
  "result_url_path": "/unit_api/task_results/86b6c527-2d8c-4642-a4ad-35524f4a8a60",
  "status": "accepted"
}
```

## Get All Calibrations {#endpoint-get-api-workers-pioreactor-unit-calibrations}

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
  "task_id": "25425d9b-9331-422d-af3c-4e32a357611e",
  "result_url_path": "/unit_api/task_results/25425d9b-9331-422d-af3c-4e32a357611e",
  "status": "accepted"
}
```

## Get Calibrations {#endpoint-get-api-workers-pioreactor-unit-calibrations-device}

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
  "task_id": "6b56752e-e72b-4b2f-9cb6-acf7176773ee",
  "result_url_path": "/unit_api/task_results/6b56752e-e72b-4b2f-9cb6-acf7176773ee",
  "status": "accepted"
}
```

## Create Calibration {#endpoint-post-api-workers-pioreactor-unit-calibrations-device}

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

## Delete Calibration {#endpoint-delete-api-workers-pioreactor-unit-calibrations-device-calibration-name}

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

## Get Calibration {#endpoint-get-api-workers-pioreactor-unit-calibrations-device-calibration-name}

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
  "task_id": "021f40dd-1df1-4073-8908-3d81f277387b",
  "result_url_path": "/unit_api/task_results/021f40dd-1df1-4073-8908-3d81f277387b",
  "status": "accepted"
}
```

## Start Calibration Session {#endpoint-post-api-workers-pioreactor-unit-calibrations-sessions}

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

## Get Calibration Session {#endpoint-get-api-workers-pioreactor-unit-calibrations-sessions-session-id}

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

## Abort Calibration Session {#endpoint-post-api-workers-pioreactor-unit-calibrations-sessions-session-id-abort}

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

## Advance Calibration Session {#endpoint-post-api-workers-pioreactor-unit-calibrations-sessions-session-id-inputs}

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

## Get Camera Status For Worker {#endpoint-get-api-workers-pioreactor-unit-camera-experiments-experiment-status}

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
    "captured_at": "2026-08-18T15:54:17.433333Z",
    "image_id": "20260818T155417.433333Z-a5d9d6ba",
    "capture_reason": "scheduled"
  },
  "auto_capture_enabled": true,
  "snapshot_interval_minutes": 5
}
```

## List Camera Stills For Worker Experiment {#endpoint-get-api-workers-pioreactor-unit-camera-experiments-experiment-stills}

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

Example body:

```json
{
  "unit": "localhost",
  "experiment": "demo",
  "stills": [
    {
      "experiment": "demo",
      "captured_at": "2026-08-18T15:54:17.433333Z",
      "image_id": "20260818T155417.433333Z-a5d9d6ba",
      "capture_reason": "scheduled"
    }
  ]
}
```

## Capture Camera Still For Worker Experiment {#endpoint-post-api-workers-pioreactor-unit-camera-experiments-experiment-stills}

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

## Get Zipped Camera Stills For Worker Experiment {#endpoint-get-api-workers-pioreactor-unit-camera-experiments-experiment-stills-zip}

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

## Delete Camera Still For Worker Experiment {#endpoint-delete-api-workers-pioreactor-unit-camera-experiments-experiment-stills-image-id-jpg}

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

## Get Camera Still For Worker Experiment {#endpoint-get-api-workers-pioreactor-unit-camera-experiments-experiment-stills-image-id-jpg}

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

## Get Camera Focus Preview For Worker {#endpoint-get-api-workers-pioreactor-unit-camera-focus-sessions-session-id-preview-jpg}

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

## Update Camera Settings For Worker {#endpoint-patch-api-workers-pioreactor-unit-camera-settings}

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

## Get Capabilities {#endpoint-get-api-workers-pioreactor-unit-capabilities}

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
  "task_id": "854085b1-9281-4dd3-b6b4-c8b164cd0f58",
  "result_url_path": "/unit_api/task_results/854085b1-9281-4dd3-b6b4-c8b164cd0f58",
  "status": "accepted"
}
```

## Get All Estimators {#endpoint-get-api-workers-pioreactor-unit-estimators}

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
  "task_id": "d548b4f9-4c77-41a9-b932-5f683e5fe975",
  "result_url_path": "/unit_api/task_results/d548b4f9-4c77-41a9-b932-5f683e5fe975",
  "status": "accepted"
}
```

## Get Estimators By Device {#endpoint-get-api-workers-pioreactor-unit-estimators-device}

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
  "task_id": "f5cef2be-fdc9-4056-b206-efbbc3279a91",
  "result_url_path": "/unit_api/task_results/f5cef2be-fdc9-4056-b206-efbbc3279a91",
  "status": "accepted"
}
```

## Delete Estimator {#endpoint-delete-api-workers-pioreactor-unit-estimators-device-estimator-name}

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

## Get Estimator {#endpoint-get-api-workers-pioreactor-unit-estimators-device-estimator-name}

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
  "task_id": "5d98f40c-fa53-4b99-aed1-2a1ad2cb2a08",
  "result_url_path": "/unit_api/task_results/5d98f40c-fa53-4b99-aed1-2a1ad2cb2a08",
  "status": "accepted"
}
```

## Get Experiment Assignment For Worker {#endpoint-get-api-workers-pioreactor-unit-experiment}

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

## Get Logs For Unit And Experiment {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-logs}

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

## Publish New Log {#endpoint-post-api-workers-pioreactor-unit-experiments-experiment-logs}

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

## Get Recent Logs For Unit And Experiment {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-recent-logs}

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

## Get Fallback Time Series Per Unit {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-data-source-column}

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

## Get Growth Rates Per Unit {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-growth-rates}

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

## Get Od Readings Per Unit {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-od-readings}

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

## Get Od Readings Filtered Per Unit {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-od-readings-filtered}

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

## Get Od Readings Fused Per Unit {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-od-readings-fused}

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

## Get Od Raw Readings Per Unit {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-raw-od-readings}

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

## Get Temperature Readings Per Unit {#endpoint-get-api-workers-pioreactor-unit-experiments-experiment-time-series-temperature-readings}

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

## Change Worker Status {#endpoint-put-api-workers-pioreactor-unit-is-active}

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

## Get Job Descriptors For Worker {#endpoint-get-api-workers-pioreactor-unit-jobs-descriptors}

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

## Run Job On Unit In Experiment {#endpoint-patch-api-workers-pioreactor-unit-jobs-run-job-name-job-name-experiments-experiment}

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

## Run Job On Unit In Experiment {#endpoint-post-api-workers-pioreactor-unit-jobs-run-job-name-job-name-experiments-experiment}

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

## Get Jobs Running {#endpoint-get-api-workers-pioreactor-unit-jobs-running}

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
  "task_id": "d4eaeb59-9054-40bd-924d-97dc64e0e27f",
  "result_url_path": "/unit_api/task_results/d4eaeb59-9054-40bd-924d-97dc64e0e27f",
  "status": "accepted"
}
```

## Get Job Settings For Worker {#endpoint-get-api-workers-pioreactor-unit-jobs-settings-job-name-job-name-experiments-experiment}

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

## Get Job Setting For Worker {#endpoint-get-api-workers-pioreactor-unit-jobs-settings-job-name-job-name-setting-setting-experiments-experiment}

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

## Stop All Jobs On Unit For Experiment {#endpoint-patch-api-workers-pioreactor-unit-jobs-stop-experiments-experiment}

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

## Stop All Jobs On Unit For Experiment {#endpoint-post-api-workers-pioreactor-unit-jobs-stop-experiments-experiment}

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

## Stop Specific Job On Unit {#endpoint-patch-api-workers-pioreactor-unit-jobs-stop-job-name-job-name-experiments-experiment}

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

## Stop Specific Job On Unit {#endpoint-post-api-workers-pioreactor-unit-jobs-stop-job-name-job-name-experiments-experiment}

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

## Update Job On Unit {#endpoint-patch-api-workers-pioreactor-unit-jobs-update-job-name-job-name-experiments-experiment}

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

## Get Worker Model And Metadata {#endpoint-get-api-workers-pioreactor-unit-model}

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

## Change Worker Model {#endpoint-put-api-workers-pioreactor-unit-model}

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

## Get Settings Descriptors For Worker {#endpoint-get-api-workers-pioreactor-unit-settings-descriptors}

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

## Get Task Result For Worker {#endpoint-get-api-workers-pioreactor-unit-task-results-task-id}

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

Status: `202 Accepted`

Example body:

```json
{
  "task_id": "task-id",
  "result_url_path": "/unit_api/task_results/task-id",
  "status": "pending"
}
```

## Get Zipped Calibrations {#endpoint-get-api-workers-pioreactor-unit-zipped-calibrations}

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

## Remove All Workers From All Experiments {#endpoint-delete-api-workers-assignments}

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

## Get Workers And Experiment Assignments {#endpoint-get-api-workers-assignments}

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
    "experiment": "ALE - Acetate",
    "is_active": 1
  }
]
```

## Discover Available Workers {#endpoint-get-api-workers-discover}

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

## Setup Worker Pioreactor {#endpoint-post-api-workers-setup}

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

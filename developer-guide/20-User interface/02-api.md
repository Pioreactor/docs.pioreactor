---
title: API
slug: /web-ui-api
hide_table_of_contents: true
---

### All endpoints

In most cases, where you see `<pioreactor_unit>`, you can use the key `$broadcast` to send the command to all units.

```
Endpoint                                           Methods      Rule
-------------------------------------------------  -----------  -----------------------------------------------------------------------------------------------------------
api.get_configs                                    GET          /api/configs
api.get_config                                     GET          /api/configs/<filename>
api.update_config                                  PATCH        /api/configs/<filename>
api.get_historical_config_for                      GET          /api/configs/<filename>/history
api.get_automation_contrib                         GET          /api/contrib/automations/<automation_type>
api.get_charts_contrib                             GET          /api/contrib/charts
api.create_experiment_profile                      POST         /api/contrib/experiment_profiles
api.update_experiment_profile                      PATCH        /api/contrib/experiment_profiles
api.get_experiment_profiles                        GET          /api/contrib/experiment_profiles
api.get_experiment_profile                         GET          /api/contrib/experiment_profiles/<filename>
api.delete_experiment_profile                      DELETE       /api/contrib/experiment_profiles/<filename>
api.get_exportable_datasets                        GET          /api/contrib/exportable_datasets
api.preview_exportable_datasets                    GET          /api/contrib/exportable_datasets/<target_dataset>/preview
api.export_datasets                                POST         /api/contrib/exportable_datasets/export_datasets
api.get_job_contrib                                GET          /api/contrib/jobs
api.get_running_profiles                           GET          /api/experiment_profiles/running/experiments/<experiment>
api.get_experiments                                GET          /api/experiments
api.create_experiment                              POST         /api/experiments
api.delete_experiment                              DELETE       /api/experiments/<experiment>
api.update_experiment                              PATCH        /api/experiments/<experiment>
api.get_experiment                                 GET          /api/experiments/<experiment>
api.get_list_of_historical_workers_for_experiment  GET          /api/experiments/<experiment>/historical_worker_assignments
api.get_exp_logs                                   GET          /api/experiments/<experiment>/logs
api.get_media_rates                                GET          /api/experiments/<experiment>/media_rates
api.get_recent_logs                                GET          /api/experiments/<experiment>/recent_logs
api.get_fallback_time_series                       GET          /api/experiments/<experiment>/time_series/<data_source>/<column>
api.get_growth_rates                               GET          /api/experiments/<experiment>/time_series/growth_rates
api.get_od_readings                                GET          /api/experiments/<experiment>/time_series/od_readings
api.get_od_readings_filtered                       GET          /api/experiments/<experiment>/time_series/od_readings_filtered
api.get_od_raw_readings                            GET          /api/experiments/<experiment>/time_series/raw_od_readings
api.get_temperature_readings                       GET          /api/experiments/<experiment>/time_series/temperature_readings
api.get_unit_labels                                GET          /api/experiments/<experiment>/unit_labels
api.upsert_unit_labels                             PATCH, PUT   /api/experiments/<experiment>/unit_labels
api.get_list_of_workers_for_experiment             GET          /api/experiments/<experiment>/workers
api.add_worker_to_experiment                       PUT          /api/experiments/<experiment>/workers
api.remove_workers_from_experiment                 DELETE       /api/experiments/<experiment>/workers
api.remove_worker_from_experiment                  DELETE       /api/experiments/<experiment>/workers/<pioreactor_unit>
api.get_active_experiments                         GET          /api/experiments/active
api.get_experiments_worker_assignments             GET          /api/experiments/assignment_count
api.get_latest_experiment                          GET          /api/experiments/latest
api.get_historical_media_used                      GET          /api/historical_media
api.get_historical_organisms_used                  GET          /api/historical_organisms
api.is_local_access_point_active                   GET          /api/is_local_access_point_active
api.get_logs                                       GET          /api/logs
api.get_models                                     GET          /api/models
api.update_app_from_release_archive                POST         /api/system/update_from_archive
api.update_app                                     POST         /api/system/update_next_version
api.upload                                         POST         /api/system/upload
api.set_clocktime                                  POST         /api/system/utc_clock
api.get_list_of_units                              GET          /api/units
api.get_capabilities                               GET          /api/units/<pioreactor_unit>/capabilities
api.get_configuration_for_pioreactor_unit          GET          /api/units/<pioreactor_unit>/configuration
api.publish_new_log                                POST         /api/units/<pioreactor_unit>/experiments/<experiment>/logs
api.run_job_on_unit_in_experiment                  PATCH, POST  /api/units/<pioreactor_unit>/jobs/run/job_name/<job>/experiments/<experiment>
api.get_jobs_running                               GET          /api/units/<pioreactor_unit>/jobs/running
api.stop_specific_job_on_unit                      PATCH, POST  /api/units/<pioreactor_unit>/jobs/stop/job_name/<job_name>/experiments/<experiment>
api.update_job_on_unit                             PATCH        /api/units/<pioreactor_unit>/jobs/update/job_name/<job>/experiments/<experiment>
api.get_logs_for_unit                              GET          /api/units/<pioreactor_unit>/logs
api.install_plugin_across_cluster                  PATCH, POST  /api/units/<pioreactor_unit>/plugins/install
api.get_plugins_on_machine                         GET          /api/units/<pioreactor_unit>/plugins/installed
api.uninstall_plugin_across_cluster                PATCH, POST  /api/units/<pioreactor_unit>/plugins/uninstall
api.reboot_unit                                    POST         /api/units/<pioreactor_unit>/system/reboot
api.shutdown_unit                                  POST         /api/units/<pioreactor_unit>/system/shutdown
api.get_clocktime                                  GET          /api/units/<pioreactor_unit>/system/utc_clock
api.get_system_logs_for_unit                       GET          /api/units/<pioreactor_unit>/system_logs
api.get_app_versions                               GET          /api/units/<pioreactor_unit>/versions/app
api.get_ui_versions_across_cluster                 GET          /api/units/<pioreactor_unit>/versions/ui
api.get_list_of_workers                            GET          /api/workers
api.add_worker                                     PUT          /api/workers
api.delete_worker                                  DELETE       /api/workers/<pioreactor_unit>
api.get_worker                                     GET          /api/workers/<pioreactor_unit>
api.get_all_active_calibrations                    GET          /api/workers/<pioreactor_unit>/active_calibrations
api.remove_active_status_calibration               DELETE       /api/workers/<pioreactor_unit>/active_calibrations/<device>
api.set_active_calibration                         PATCH        /api/workers/<pioreactor_unit>/active_calibrations/<device>/<cal_name>
api.blink_worker                                   POST         /api/workers/<pioreactor_unit>/blink
api.get_all_calibrations                           GET          /api/workers/<pioreactor_unit>/calibrations
api.get_calibrations                               GET          /api/workers/<pioreactor_unit>/calibrations/<device>
api.create_calibration                             POST         /api/workers/<pioreactor_unit>/calibrations/<device>
api.get_calibration                                GET          /api/workers/<pioreactor_unit>/calibrations/<device>/<cal_name>
api.delete_calibration                             DELETE       /api/workers/<pioreactor_unit>/calibrations/<device>/<cal_name>
api.get_capabilities                               GET          /api/workers/<pioreactor_unit>/capabilities
api.get_configuration_for_pioreactor_unit          GET          /api/workers/<pioreactor_unit>/configuration
api.get_experiment_assignment_for_worker           GET          /api/workers/<pioreactor_unit>/experiment
api.get_logs_for_unit_and_experiment               GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/logs
api.publish_new_log                                POST         /api/workers/<pioreactor_unit>/experiments/<experiment>/logs
api.get_recent_logs_for_unit_and_experiment        GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/recent_logs
api.get_fallback_time_series_per_unit              GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/time_series/<data_source>/<column>
api.get_growth_rates_per_unit                      GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/time_series/growth_rates
api.get_od_readings_per_unit                       GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/time_series/od_readings
api.get_od_readings_filtered_per_unit              GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/time_series/od_readings_filtered
api.get_od_raw_readings_per_unit                   GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/time_series/raw_od_readings
api.get_temperature_readings_per_unit              GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/time_series/temperature_readings
api.change_worker_status                           PUT          /api/workers/<pioreactor_unit>/is_active
api.run_job_on_unit_in_experiment                  PATCH, POST  /api/workers/<pioreactor_unit>/jobs/run/job_name/<job>/experiments/<experiment>
api.get_jobs_running                               GET          /api/workers/<pioreactor_unit>/jobs/running
api.get_job_settings_for_worker                    GET          /api/workers/<pioreactor_unit>/jobs/settings/job_name/<job_name>/experiments/<experiment>
api.get_job_setting_for_worker                     GET          /api/workers/<pioreactor_unit>/jobs/settings/job_name/<job_name>/setting/<setting>/experiments/<experiment>
api.stop_all_jobs_on_worker_for_experiment         PATCH, POST  /api/workers/<pioreactor_unit>/jobs/stop/experiments/<experiment>
api.stop_specific_job_on_unit                      PATCH, POST  /api/workers/<pioreactor_unit>/jobs/stop/job_name/<job_name>/experiments/<experiment>
api.update_job_on_unit                             PATCH        /api/workers/<pioreactor_unit>/jobs/update/job_name/<job>/experiments/<experiment>
api.change_worker_model                            PUT          /api/workers/<pioreactor_unit>/model
api.get_worker_model_and_metadata                  GET          /api/workers/<pioreactor_unit>/model
api.get_all_calibrations_as_yamls                  GET          /api/workers/<pioreactor_unit>/zipped_calibrations
api.get_workers_and_experiment_assignments         GET          /api/workers/assignments
api.remove_all_workers_from_all_experiments        DELETE       /api/workers/assignments
api.discover_available_workers                     GET          /api/workers/discover
api.setup_worker_pioreactor                        POST         /api/workers/setup
mcp.handle_mcp                                     POST         /mcp/
static                                             GET          /static/<path:filename>
unit_api.get_all_active_calibrations               GET          /unit_api/active_calibrations
unit_api.remove_active_status_calibration          DELETE       /unit_api/active_calibrations/<device>
unit_api.set_active_calibration                    PATCH        /unit_api/active_calibrations/<device>/<cal_name>
unit_api.get_all_calibrations                      GET          /unit_api/calibrations
unit_api.create_calibration                        POST         /unit_api/calibrations/<device>
unit_api.get_calibrations_by_device                GET          /unit_api/calibrations/<device>
unit_api.get_calibration                           GET          /unit_api/calibrations/<device>/<cal_name>
unit_api.delete_calibration                        DELETE       /unit_api/calibrations/<device>/<calibration_name>
unit_api.discover_jobs_and_settings_available      GET          /unit_api/capabilities
unit_api.run_job                                   PATCH, POST  /unit_api/jobs/run/job_name/<job>
unit_api.get_all_running_jobs                      GET          /unit_api/jobs/running
unit_api.get_running_job                           GET          /unit_api/jobs/running/<job>
unit_api.get_running_jobs_for_experiment           GET          /unit_api/jobs/running/experiments/<experiment>
unit_api.get_settings_for_a_specific_job           GET          /unit_api/jobs/settings/job_name/<job_name>
unit_api.update_job                                PATCH        /unit_api/jobs/settings/job_name/<job_name>
unit_api.get_specific_setting_for_a_job            GET          /unit_api/jobs/settings/job_name/<job_name>/setting/<setting>
unit_api.stop_jobs                                 PATCH, POST  /unit_api/jobs/stop
unit_api.stop_all_jobs                             PATCH, POST  /unit_api/jobs/stop/all
unit_api.get_all_long_running_jobs                 GET          /unit_api/long_running_jobs/running
unit_api.install_plugin                            PATCH, POST  /unit_api/plugins/install
unit_api.get_installed_plugins                     GET          /unit_api/plugins/installed
unit_api.get_plugin                                GET          /unit_api/plugins/installed/<filename>
unit_api.uninstall_plugin                          PATCH, POST  /unit_api/plugins/uninstall
unit_api.dir_listing                               GET          /unit_api/system/path/
unit_api.dir_listing                               GET          /unit_api/system/path/<path:req_path>
unit_api.reboot                                    PATCH, POST  /unit_api/system/reboot
unit_api.remove_file                               PATCH, POST  /unit_api/system/remove_file
unit_api.shutdown                                  PATCH, POST  /unit_api/system/shutdown
unit_api.update_app_and_ui                         PATCH, POST  /unit_api/system/update
unit_api.update_target                             PATCH, POST  /unit_api/system/update/<target>
unit_api.get_clock_time                            GET          /unit_api/system/utc_clock
unit_api.set_clock_time                            PATCH, POST  /unit_api/system/utc_clock
unit_api.task_status                               GET          /unit_api/task_results/<task_id>
unit_api.get_app_version                           GET          /unit_api/versions/app
unit_api.get_ui_version                            GET          /unit_api/versions/ui
unit_api.get_all_calibrations_as_zipped_yaml       GET          /unit_api/zipped_calibrations
```

From `python3 -m flask --debug --app main routes -s rule`

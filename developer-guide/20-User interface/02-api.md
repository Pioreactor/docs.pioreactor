---
title: API
slug: /web-ui-api
---

### All endpoints

```
Endpoint                                               Methods      Rule
-----------------------------------------------------  -----------  ----------------------------------------------------------------------------------
api.create_or_update_new_calibrations                  PUT          /api/calibrations
api.get_available_calibrations_type_by_unit            GET          /api/calibrations/<pioreactor_unit>
api.get_available_calibrations_of_type                 GET          /api/calibrations/<pioreactor_unit>/<calibration_type>
api.get_calibration_by_name                            GET          /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>
api.patch_calibrations                                 PATCH        /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>
api.get_current_calibrations_of_type                   GET          /api/calibrations/<pioreactor_unit>/<calibration_type>/current
api.get_configs                                        GET          /api/configs
api.get_config                                         GET          /api/configs/<filename>
api.update_config                                      PATCH        /api/configs/<filename>
api.get_historical_config_for                          GET          /api/configs/<filename>/history
api.get_automation_contrib                             GET          /api/contrib/automations/<automation_type>
api.get_charts_contrib                                 GET          /api/contrib/charts
api.create_experiment_profile                          POST         /api/contrib/experiment_profiles
api.update_experiment_profile                          PATCH        /api/contrib/experiment_profiles
api.get_experiment_profiles                            GET          /api/contrib/experiment_profiles
api.get_experiment_profile                             GET          /api/contrib/experiment_profiles/<filename>
api.delete_experiment_profile                          DELETE       /api/contrib/experiment_profiles/<filename>
api.get_job_contrib                                    GET          /api/contrib/jobs
api.get_experiments                                    GET          /api/experiments
api.create_experiment                                  POST         /api/experiments
api.delete_experiment                                  DELETE       /api/experiments/<experiment>
api.update_experiment                                  PATCH        /api/experiments/<experiment>
api.get_experiment                                     GET          /api/experiments/<experiment>
api.get_logs                                           GET          /api/experiments/<experiment>/logs
api.get_media_rates                                    GET          /api/experiments/<experiment>/media_rates
api.get_fallback_time_series                           GET          /api/experiments/<experiment>/time_series/<data_source>/<column>
api.get_growth_rates                                   GET          /api/experiments/<experiment>/time_series/growth_rates
api.get_od_readings                                    GET          /api/experiments/<experiment>/time_series/od_readings
api.get_od_readings_filtered                           GET          /api/experiments/<experiment>/time_series/od_readings_filtered
api.get_temperature_readings                           GET          /api/experiments/<experiment>/time_series/temperature_readings
api.get_unit_labels                                    GET          /api/experiments/<experiment>/unit_labels
api.upsert_unit_labels                                 PATCH, PUT   /api/experiments/<experiment>/unit_labels
api.get_list_of_workers_for_experiment                 GET          /api/experiments/<experiment>/workers
api.add_worker_to_experiment                           PUT          /api/experiments/<experiment>/workers
api.remove_workers_from_experiment                     DELETE       /api/experiments/<experiment>/workers
api.remove_worker_from_experiment                      DELETE       /api/experiments/<experiment>/workers/<pioreactor_unit>
api.get_experiments_worker_assignments                 GET          /api/experiments/assignment_count
api.get_latest_experiment                              GET          /api/experiments/latest
api.export_datasets                                    POST         /api/export_datasets
api.get_historical_media_used                          GET          /api/historical_media
api.get_historical_organisms_used                      GET          /api/historical_organisms
api.is_local_access_point_active                       GET          /api/is_local_access_point_active
api.get_jobs_running_across_cluster                    GET          /api/jobs/running
api.get_jobs_running_across_cluster_in_experiment      GET          /api/jobs/running/experiments/<experiment>
api.get_settings_for_job_across_cluster_in_experiment  GET          /api/jobs/settings/job_name/<job_name>/experiments/<experiment>
api.get_setting_for_job_across_cluster_in_experiment   GET          /api/jobs/settings/job_name/<job_name>/experiments/<experiment>/setting/<setting>
api.get_setting_for_job_across_cluster                 GET          /api/jobs/settings/job_name/<job_name>/setting/<setting>
api.get_job_settings_for_worker                        GET          /api/jobs/settings/workers/<pioreactor_unit>/job_name/<job_name>
api.get_job_setting_for_worker                         GET          /api/jobs/settings/workers/<pioreactor_unit>/job_name/<job_name>/setting/<setting>
api.install_plugin_across_cluster                      PATCH, POST  /api/plugins/install
api.get_plugins_across_cluster                         GET          /api/plugins/installed
api.uninstall_plugin_across_cluster                    PATCH, POST  /api/plugins/uninstall
api.update_app_from_release_archive                    POST         /api/system/update_from_archive
api.update_app                                         POST         /api/system/update_next_version
api.upload                                             POST         /api/system/upload
api.run_job_on_unit_in_experiment                      PATCH, POST  /api/units/<pioreactor_unit>/jobs/run/job_name/<job>/experiments/<experiment>
api.get_running_jobs_on_unit                           GET          /api/units/<pioreactor_unit>/jobs/running
api.stop_job_on_unit                                   PATCH, POST  /api/units/<pioreactor_unit>/jobs/stop/job_name/<job>/experiments/<experiment>
api.update_job_on_unit                                 PATCH        /api/units/<pioreactor_unit>/jobs/update/job_name/<job>/experiments/<experiment>
api.reboot_unit                                        POST         /api/units/<pioreactor_unit>/system/reboot
api.shutdown_unit                                      POST         /api/units/<pioreactor_unit>/system/shutdown
api.get_app_versions_across_cluster                    GET          /api/versions/app
api.get_ui_versions_across_cluster                     GET          /api/versions/ui
api.get_list_of_workers                                GET          /api/workers
api.add_worker                                         PUT          /api/workers
api.delete_worker                                      DELETE       /api/workers/<pioreactor_unit>
api.get_worker                                         GET          /api/workers/<pioreactor_unit>
api.blink_worker                                       POST         /api/workers/<pioreactor_unit>/blink
api.get_experiment_assignment_for_worker               GET          /api/workers/<pioreactor_unit>/experiment
api.get_logs_for_unit_and_experiment                   GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/logs
api.change_worker_status                               PUT          /api/workers/<pioreactor_unit>/is_active
api.run_job_on_unit_in_experiment                      PATCH, POST  /api/workers/<pioreactor_unit>/jobs/run/job_name/<job>/experiments/<experiment>
api.get_running_jobs_on_unit                           GET          /api/workers/<pioreactor_unit>/jobs/running
api.stop_all_jobs_on_worker_for_experiment             PATCH, POST  /api/workers/<pioreactor_unit>/jobs/stop/experiments/<experiment>
api.stop_job_on_unit                                   PATCH, POST  /api/workers/<pioreactor_unit>/jobs/stop/job_name/<job>/experiments/<experiment>
api.update_job_on_unit                                 PATCH        /api/workers/<pioreactor_unit>/jobs/update/job_name/<job>/experiments/<experiment>
api.get_workers_and_experiment_assignments             GET          /api/workers/assignments
api.remove_all_workers_from_all_experiments            DELETE       /api/workers/assignments
api.stop_all_jobs_in_experiment                        PATCH, POST  /api/workers/jobs/stop/experiments/<experiment>
api.setup_worker_pioreactor                            POST         /api/workers/setup
api.reboot_units                                       POST         /api/workers/system/reboot
api.shutdown_units                                     POST         /api/workers/system/shutdown
static                                                 GET          /static/<path:filename>
unit_api.run_job                                       PATCH, POST  /unit_api/jobs/run/job_name/<job>
unit_api.get_all_running_jobs                          GET          /unit_api/jobs/running
unit_api.get_running_jobs_for_experiment               GET          /unit_api/jobs/running/experiments/<experiment>
unit_api.get_settings_for_a_specific_job               GET          /unit_api/jobs/settings/job_name/<job_name>
unit_api.update_job                                    PATCH        /unit_api/jobs/settings/job_name/<job_name>
unit_api.get_specific_setting_for_a_job                GET          /unit_api/jobs/settings/job_name/<job_name>/setting/<setting>
unit_api.stop_all_jobs                                 PATCH, POST  /unit_api/jobs/stop/all
unit_api.stop_all_jobs_by_experiment                   PATCH, POST  /unit_api/jobs/stop/experiment/<experiment>
unit_api.stop_job_by_name                              PATCH, POST  /unit_api/jobs/stop/job_name/<job_name>
unit_api.stop_all_jobs_by_source                       PATCH, POST  /unit_api/jobs/stop/job_source/<job_source>
unit_api.install_plugin                                PATCH, POST  /unit_api/plugins/install
unit_api.get_installed_plugins                         GET          /unit_api/plugins/installed
unit_api.get_plugin                                    GET          /unit_api/plugins/installed/<filename>
unit_api.uninstall_plugin                              PATCH, POST  /unit_api/plugins/uninstall
unit_api.reboot                                        PATCH, POST  /unit_api/system/reboot
unit_api.remove_file                                   PATCH, POST  /unit_api/system/remove_file
unit_api.shutdown                                      PATCH, POST  /unit_api/system/shutdown
unit_api.update_app_and_ui                             PATCH, POST  /unit_api/system/update
unit_api.update_target                                 PATCH, POST  /unit_api/system/update/<target>
unit_api.task_status                                   GET          /unit_api/task_results/<task_id>
unit_api.get_app_version                               GET          /unit_api/versions/app
unit_api.get_ui_version                                GET          /unit_api/versions/ui
```

From `python3 -m flask --debug --app main routes -s rule`

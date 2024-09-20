---
title: API
slug: /web-ui-api
---

### All endpoints

```
Endpoint                                 Methods      Rule
---------------------------------------  -----------  ----------------------------------------------------------------------------------
create_or_update_new_calibrations        PUT          /api/calibrations
get_available_calibrations_type_by_unit  GET          /api/calibrations/<pioreactor_unit>
get_available_calibrations_of_type       GET          /api/calibrations/<pioreactor_unit>/<calibration_type>
get_calibration_by_name                  GET          /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>
patch_calibrations                       PATCH        /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>
get_current_calibrations_of_type         GET          /api/calibrations/<pioreactor_unit>/<calibration_type>/current
get_configs                              GET          /api/configs
get_config                               GET          /api/configs/<filename>
update_config                            PATCH        /api/configs/<filename>
get_automation_contrib                   GET          /api/contrib/automations/<automation_type>
get_charts_contrib                       GET          /api/contrib/charts
create_experiment_profile                POST         /api/contrib/experiment_profiles
update_experiment_profile                PATCH        /api/contrib/experiment_profiles
get_experiment_profiles                  GET          /api/contrib/experiment_profiles
get_experiment_profile                   GET          /api/contrib/experiment_profiles/<filename>
delete_experiment_profile                DELETE       /api/contrib/experiment_profiles/<filename>
get_job_contrib                          GET          /api/contrib/jobs
get_experiments                          GET          /api/experiments
create_experiment                        POST         /api/experiments
delete_experiment                        DELETE       /api/experiments/<experiment>
update_experiment                        PATCH        /api/experiments/<experiment>
get_experiment                           GET          /api/experiments/<experiment>
get_logs                                 GET          /api/experiments/<experiment>/logs
get_media_rates                          GET          /api/experiments/<experiment>/media_rates
get_fallback_time_series                 GET          /api/experiments/<experiment>/time_series/<data_source>/<column>
get_growth_rates                         GET          /api/experiments/<experiment>/time_series/growth_rates
get_od_readings                          GET          /api/experiments/<experiment>/time_series/od_readings
get_od_readings_filtered                 GET          /api/experiments/<experiment>/time_series/od_readings_filtered
get_temperature_readings                 GET          /api/experiments/<experiment>/time_series/temperature_readings
get_unit_labels                          GET          /api/experiments/<experiment>/unit_labels
upsert_unit_labels                       PATCH, PUT   /api/experiments/<experiment>/unit_labels
get_list_of_workers_for_experiment       GET          /api/experiments/<experiment>/workers
add_worker_to_experiment                 PUT          /api/experiments/<experiment>/workers
remove_workers_from_experiment           DELETE       /api/experiments/<experiment>/workers
remove_worker_from_experiment            DELETE       /api/experiments/<experiment>/workers/<pioreactor_unit>
get_experiments_worker_assignments       GET          /api/experiments/assignment_count
get_latest_experiment                    GET          /api/experiments/latest
export_datasets                          POST         /api/export_datasets
get_historical_config_for                GET          /api/historical_configs/<filename>
get_historical_media_used                GET          /api/historical_media
get_historical_organisms_used            GET          /api/historical_organisms
is_local_access_point_active             GET          /api/is_local_access_point_active
get_jobs_running_across_cluster          GET          /api/jobs/running
install_plugin_across_cluster            PATCH, POST  /api/plugins/install
get_plugins_across_cluster               GET          /api/plugins/installed
uninstall_plugin_across_cluster          PATCH, POST  /api/plugins/uninstall
upload                                   POST         /api/system/upload
run_job_on_unit_in_experiment            PATCH, POST  /api/units/<pioreactor_unit>/jobs/run/job_name/<job>/experiments/<experiment>
get_running_jobs_on_unit                 GET          /api/units/<pioreactor_unit>/jobs/running
stop_job_on_unit                         PATCH, POST  /api/units/<pioreactor_unit>/jobs/stop/job_name/<job>/experiments/<experiment>
update_job_on_unit                       PATCH        /api/units/<pioreactor_unit>/jobs/update/job_name/<job>/experiments/<experiment>
reboot_unit                              POST         /api/units/<pioreactor_unit>/system/reboot
shutdown_unit                            POST         /api/units/<pioreactor_unit>/system/shutdown
update_app                               POST         /api/update_app
update_app_from_release_archive          POST         /api/update_app_from_release_archive
get_app_versions_across_cluster          GET          /api/versions/app
get_ui_versions_across_cluster           GET          /api/versions/ui
get_list_of_workers                      GET          /api/workers
add_worker                               PUT          /api/workers
delete_worker                            DELETE       /api/workers/<pioreactor_unit>
get_worker                               GET          /api/workers/<pioreactor_unit>
get_experiment_assignment_for_worker     GET          /api/workers/<pioreactor_unit>/experiment
get_logs_for_unit_and_experiment         GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/logs
change_worker_status                     PUT          /api/workers/<pioreactor_unit>/is_active
run_job_on_unit_in_experiment            PATCH, POST  /api/workers/<pioreactor_unit>/jobs/run/job_name/<job>/experiments/<experiment>
get_running_jobs_on_unit                 GET          /api/workers/<pioreactor_unit>/jobs/running
stop_all_jobs_on_worker_for_experiment   PATCH, POST  /api/workers/<pioreactor_unit>/jobs/stop/experiments/<experiment>
stop_job_on_unit                         PATCH, POST  /api/workers/<pioreactor_unit>/jobs/stop/job_name/<job>/experiments/<experiment>
update_job_on_unit                       PATCH        /api/workers/<pioreactor_unit>/jobs/update/job_name/<job>/experiments/<experiment>
get_workers_and_experiment_assignments   GET          /api/workers/assignments
remove_all_workers_from_experiments      DELETE       /api/workers/assignments
stop_all_jobs_in_experiment              PATCH, POST  /api/workers/jobs/stop/experiments/<experiment>
setup_worker_pioreactor                  POST         /api/workers/setup
reboot_units                             POST         /api/workers/system/reboot
shutdown_units                           POST         /api/workers/system/shutdown
static                                   GET          /static/<path:filename>
run_job                                  PATCH, POST  /unit_api/jobs/run/job_name/<job>
get_all_running_jobs                     GET          /unit_api/jobs/running
get_running_jobs_for_experiment          GET          /unit_api/jobs/running/experiments/<experiment>
stop_all_jobs                            PATCH, POST  /unit_api/jobs/stop/all
stop_all_jobs_by_experiment              PATCH, POST  /unit_api/jobs/stop/experiment/<experiment>
stop_job_by_name                         PATCH, POST  /unit_api/jobs/stop/job_name/<job_name>
stop_all_jobs_by_source                  PATCH, POST  /unit_api/jobs/stop/job_source/<job_source>
update_job                               PATCH        /unit_api/jobs/update/job_name/<job>
install_plugin                           PATCH, POST  /unit_api/plugins/install
get_installed_plugins                    GET          /unit_api/plugins/installed
get_plugin                               GET          /unit_api/plugins/installed/<filename>
uninstall_plugin                         PATCH, POST  /unit_api/plugins/uninstall
reboot                                   PATCH, POST  /unit_api/system/reboot
remove_file                              PATCH, POST  /unit_api/system/remove_file
shutdown                                 PATCH, POST  /unit_api/system/shutdown
update_app_and_ui                        PATCH, POST  /unit_api/system/update
update_target                            PATCH, POST  /unit_api/system/update/<target>
task_status                              GET          /unit_api/task_results/<task_id>
get_app_version                          GET          /unit_api/versions/app
get_ui_version                           GET          /unit_api/versions/ui
```

From `python3 -m flask --debug --app main routes -s rule`

---
title: API
slug: /web-ui-api
---

### All endpoints

```
Endpoint                                 Methods      Rule
---------------------------------------  -----------  -------------------------------------------------------------------------
able_to_install_plugins_from_ui          GET          /api/allow_ui_installs
create_or_update_new_calibrations        PUT          /api/calibrations
get_available_calibrations_type_by_unit  GET          /api/calibrations/<pioreactor_unit>
get_available_calibrations_of_type       GET          /api/calibrations/<pioreactor_unit>/<calibration_type>
get_calibration_by_name                  GET          /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>
patch_calibrations                       PATCH        /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>
get_current_calibrations_of_type         GET          /api/calibrations/<pioreactor_unit>/<calibration_type>/current
get_custer_time                          GET          /api/cluster_time
set_cluster_time                         POST         /api/cluster_time
get_configs                              GET          /api/configs
get_config                               GET          /api/configs/<filename>
update_config                            PATCH        /api/configs/<filename>
get_automation_contrib                   GET          /api/contrib/automations/<automation_type>
get_charts_contrib                       GET          /api/contrib/charts
create_experiment_profile                POST         /api/contrib/experiment_profiles
edit_experiment_profile                  PATCH        /api/contrib/experiment_profiles
get_experiment_profiles                  GET          /api/contrib/experiment_profiles
get_experiment_profile                   GET          /api/contrib/experiment_profiles/<filename>
delete_experiment_profile                DELETE       /api/contrib/experiment_profiles/<filename>
get_job_contrib                          GET          /api/contrib/jobs
get_experiments                          GET          /api/experiments
create_experiment                        POST         /api/experiments
delete_experiment                        DELETE       /api/experiments/<experiment>
update_experiment                        PATCH        /api/experiments/<experiment>
get_logs                                 GET          /api/experiments/<experiment>/logs
get_media_rates                          GET          /api/experiments/<experiment>/media_rates
get_fallback_time_series                 GET          /api/experiments/<experiment>/time_series/<data_source>/<column>
get_growth_rates                         GET          /api/experiments/<experiment>/time_series/growth_rates
get_od_readings                          GET          /api/experiments/<experiment>/time_series/od_readings
get_od_readings_filtered                 GET          /api/experiments/<experiment>/time_series/od_readings_filtered
get_temperature_readings                 GET          /api/experiments/<experiment>/time_series/temperature_readings
get_unit_labels                          GET          /api/experiments/<experiment>/unit_labels
upsert_unit_labels                       PUT          /api/experiments/<experiment>/unit_labels
get_list_of_workers_for_experiment       GET          /api/experiments/<experiment>/workers
add_worker_to_experiment                 PUT          /api/experiments/<experiment>/workers
remove_workers_from_experiment           DELETE       /api/experiments/<experiment>/workers
remove_worker_from_experiment            DELETE       /api/experiments/<experiment>/workers/<pioreactor_unit>
stop_all_in_experiment                   POST         /api/experiments/<experiment>/workers/stop
get_experiments_worker_assignments       GET          /api/experiments/assignment_count
get_latest_experiment                    GET          /api/experiments/latest
export_datasets                          POST         /api/export_datasets
get_historical_config_for                GET          /api/historical_configs/<filename>
get_historical_media_used                GET          /api/historical_media
get_historical_organisms_used            GET          /api/historical_organisms
is_local_access_point_active             GET          /api/is_local_access_point_active
install_plugin                           POST         /api/plugins/install
get_installed_plugins                    GET          /api/plugins/installed
get_plugin                               GET          /api/plugins/installed/<filename>
uninstall_plugin                         POST         /api/plugins/uninstall
reboot_unit                              POST         /api/units/<pioreactor_unit>/reboot
shutdown_unit                            POST         /api/units/<pioreactor_unit>/shutdown
update_app                               POST         /api/update_app
update_app_from_release_archive          POST         /api/update_app_from_release_archive
update_app_to_develop                    POST         /api/update_app_to_develop
upload                                   POST         /api/upload
get_app_version                          GET          /api/versions/app
get_ui_version                           GET          /api/versions/ui
get_list_of_workers                      GET          /api/workers
add_worker                               PUT          /api/workers
delete_worker                            DELETE       /api/workers/<pioreactor_unit>
get_worker                               GET          /api/workers/<pioreactor_unit>
get_experiment_assignment_for_worker     GET          /api/workers/<pioreactor_unit>/experiment
run_job_on_unit                          PATCH, POST  /api/workers/<pioreactor_unit>/experiments/<experiment>/jobs/<job>/run
stop_job_on_unit                         PATCH        /api/workers/<pioreactor_unit>/experiments/<experiment>/jobs/<job>/stop
update_job_on_unit                       PATCH        /api/workers/<pioreactor_unit>/experiments/<experiment>/jobs/<job>/update
get_logs_for_unit_and_experiment         GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/logs
stop_all_jobs_on_worker                  POST         /api/workers/<pioreactor_unit>/experiments/<experiment>/stop
change_worker_status                     PUT          /api/workers/<pioreactor_unit>/is_active
get_workers_and_experiment_assignments   GET          /api/workers/assignments
setup_worker_pioreactor                  POST         /api/workers/setup
static                                   GET          /static/<path:filename>
```

From `python3 -m flask --debug --app main routes -s rule`

---
title: API
slug: /web-ui-api
---


### All endpoints

```
Endpoint                                 Methods  Rule
---------------------------------------  -------  -------------------------------------------------------------------------
add_new_pioreactor                       POST     /api/add_new_pioreactor
get_app_version                          GET      /api/app_version
create_new_calibrations                  PUT      /api/calibrations
get_available_calibrations_type_by_unit  GET      /api/calibrations/<pioreactor_unit>
get_available_calibrations_of_type       GET      /api/calibrations/<pioreactor_unit>/<calibration_type>
get_calibrations_of_type                 GET      /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>
patch_calibrations                       PATCH    /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>
get_current_calibrations_of_type         GET      /api/calibrations/<pioreactor_unit>/<calibration_type>/current
get_configs                              GET      /api/configs
get_config                               GET      /api/configs/<filename>
delete_config                            DELETE   /api/configs/<filename>
update_new_config                        PATCH    /api/configs/<filename>
get_automation_contrib                   GET      /api/contrib/automations/<automation_type>
get_charts_contrib                       GET      /api/contrib/charts
get_job_contrib                          GET      /api/contrib/jobs
get_experiments                          GET      /api/experiments
create_experiment                        POST     /api/experiments
update_experiment_description            PATCH    /api/experiments/<experiment>
get_latest_experiment                    GET      /api/experiments/latest
export_datasets                          POST     /api/export_datasets
get_historical_config_for                GET      /api/historical_configs/<filename>
get_historical_media_used                GET      /api/historical_media
get_historical_organisms_used            GET      /api/historical_organisms
install_plugin                           POST     /api/install_plugin
get_installed_plugins                    GET      /api/installed_plugins
get_plugin                               GET      /api/installed_plugins/<filename>
is_local_access_point_active             GET      /api/is_local_access_point_active
get_logs                                 GET      /api/logs/<experiment>
get_recent_logs                          GET      /api/logs/recent
get_current_media_rates                  GET      /api/media_rates/current
reboot_unit                              POST     /api/reboot/<unit>
run_job_on_unit                          POST     /api/run/<unit>/<job>
stop_job_on_unit                         POST     /api/stop/<unit>/<job>
stop_all                                 POST     /api/stop_all
get_fallback_time_series                 GET      /api/time_series/<data_source>/<experiment>/<column>
get_growth_rates                         GET      /api/time_series/growth_rates/<experiment>
get_od_readings                          GET      /api/time_series/od_readings/<experiment>
get_od_readings_filtered                 GET      /api/time_series/od_readings_filtered/<experiment>
get_temperature_readings                 GET      /api/time_series/temperature_readings/<experiment>
get_ui_version                           GET      /api/ui_version
uninstall_plugin                         POST     /api/uninstall_plugin
get_current_unit_labels                  GET      /api/unit_labels/<experiment>
upsert_current_unit_labels               PUT      /api/unit_labels/current
update_app                               POST     /api/update_app
static                                   GET      /static/<path:filename>
```

From `python3 -m flask --debug --app main routes -s rule`

---
title: API
slug: /web-ui-api
---


### All endpoints

```
Methods  Rule
-------  ------------------------------------------------------
DELETE   /api/configs/<filename>
GET      /static/<path:filename>
GET      /api/recent_logs
GET      /api/time_series/growth_rates/<experiment>
GET      /api/time_series/temperature_readings/<experiment>
GET      /api/time_series/od_readings_filtered/<experiment>
GET      /api/time_series/od_readings/<experiment>
GET      /api/time_series/alt_media_fractions/<experiment>
GET      /api/recent_media_rates
GET      /api/calibration_types
GET      /api/calibrations/<pioreactor_unit>/<calibration_type>
GET      /api/installed_plugins
GET      /api/contrib/automations/<automation_type>
GET      /api/contrib/jobs
GET      /api/contrib/charts
GET      /api/app_version
GET      /api/ui_version
GET      /api/experiments
GET      /api/experiments/latest
GET      /api/current_unit_labels
GET      /api/historical_organisms
GET      /api/historical_media
GET      /api/configs/<filename>
GET      /api/configs
GET      /api/historical_configs/<filename>
GET      /api/is_local_access_point_active
POST     /api/stop_all
POST     /api/stop/<job>/<unit>
POST     /api/run/<job>/<unit>
POST     /api/reboot/<unit>
POST     /api/install_plugin
POST     /api/uninstall_plugin
POST     /api/update_app
POST     /api/export_datasets
POST     /api/experiments
POST     /api/add_new_pioreactor
PUT      /api/current_unit_labels
PUT      /api/experiment_desc
PUT      /api/configs/<filename>
```

From `python3 -m flask --debug --app main routes -s methods`


### Useful endpoints for building app on top of

```
POST     /api/run/<job>/<unit>
POST     /api/stop/<job>/<unit>
POST     /api/stop_all
```

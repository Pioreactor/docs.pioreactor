---
title: Important locations on the filesytem
slug: /filesystem-locations
---


Below is a list of important locations and files on the filesystem for the Pioreactor:


### UI

 - `/var/www/pioreactorui/` is the source of the web-app.
 - `/var/www/pioreactorui/.env` holds some configuration for the UI.
 - `/var/www/pioreactorui/contrib/` holds yaml files that display automation data, job data, and chart data.
 - `/home/pioreactor/.pioreactor/plugins/ui/contrib` also holds yaml files, like the above.


### Logs

 - `/var/log/pioreactor.log` is the log file for the Pioreactor app
 - `/var/log/pioreactorui.log` is the log file for the Pioreactor UI


### Storage

 - `/home/pioreactor/.pioreactor/storage/` holds the main database, and caches.
 - `/tmp/` holds temporary caches. Files in here are not kept between reboots.

### Config

 - `/home/pioreactor/.pioreactor/` holds all configuration files for the Pioreactor UI and app, the main one being `config.ini`


### Plugins

 - `/home/pioreactor/.pioreactor/plugins/` is where Python files can be added.
 - `/home/pioreactor/.pioreactor/plugins/ui/contrib/` also holds UI yaml files for custom Python code.


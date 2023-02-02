---
title: Overview
slug: /web-ui-introduction
---


The web UI is hosted on the leader Pioreactor. Here are the details:

### Web server

The web server we use is lighttp, and hosted from `/var/www/pioreactorui`. This folder is actually a git repo, and pulls from [pioreactorui](https://github.com/pioreactor/pioreactorui) GH repo. Systemd controls starting and restarting lighttp.

The lighttp conf file is located in `/etc/lighttpd/conf-enabled/50-pioreactorui.conf`. Error logs (though not helpful) are in `/var/log/lighttpd/error.log`.


### Backend

The backend app is a Flask app, with entry point in `/var/www/pioreactorui/main.fcgi`. The app uses Huey as background workers to perform `pio` tasks, save to disk, etc. Huey is controlled by systemd `huey.service`. The API is [available here](/developer-guide/web-ui-api)

### Frontend

The frontend is a React app, with Material UI. The source code is at [pioreactorui_frontend](https://github.com/Pioreactor/pioreactorui_frontend). To update the front end, locally I will build the site in a local version of `pioreactorui_frontend`, (automatically) `mv` the necessary assets to local repo of `pioreactorui`, commit and push. Then on the Pioreactor, one can run `pio update ui`. This also restarts the server.


### DNS name resolution to `pioreactor.local`

To allow for `pioreactor.local` to be an alias for `<leader hostname>.local`, we use mdns provided by `avahi`. There is a systemd service, `avahi_alias.service`, that will point `pioreactor.local` to `<leader hostname>.local`.


### Updating and restarting the web UI

To update on the UI on Pioreactor leader, use `pio update ui`. This also restarts the server.

To restart:

```
sudo systemctl restart lighttp && sudo systemctl restart huey
```

### Logs
- Start up logs from systemd are in `sudo systemctl status lighttpd.service`.
- Logs for the backend and background workers are located in `/var/log/pioreactorui.log`.

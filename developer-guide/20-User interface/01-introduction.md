---
title: Overview
slug: /web-ui-introduction
hide_table_of_contents: true
---

Every Pioreactor, either worker or leader, have a web server on them. However, only the leader has an associated website (ex: http://pioreactor.local). Here are the details:

### Web server

The web server we use is lighttpd, and hosted from `/var/www/pioreactorui`. This folder is actually a git repo, and pulls from [pioreactorui](https://github.com/pioreactor/pioreactorui) GH repo. Systemd controls starting and restarting lighttpd.

The lighttpd conf file is located in `/etc/lighttpd/conf-enabled/50-pioreactorui.conf`. Error logs (though not helpful) are in `/var/log/lighttpd/error.log`.

The default protocol is `http` served on port `80`. To use `https` requires a certificate, and is out of scope for this project. If you'd change the protocol or the port, you'll need up tell the software too: look in the config.ini under `[ui]` section. [How to change the web UI port](/user-guide/networking#changing-web-ui-port-from-80-to-something-else)


### Backend

The backend app is a Flask app, with entry point in `/var/www/pioreactorui/main.fcgi`. The app uses Huey as background workers to perform `pio` tasks, save to disk, etc. Huey is controlled by systemd `huey.service`. The API is [available here](/developer-guide/web-ui-api)

:::info
Both workers and leaders have this backend. However, workers only use expose the `/unit_api/` endpoints. See full list [here](/developer-guide/web-ui-api).
:::

### Frontend

The frontend is a React app, built with Material UI. The source code is at [pioreactorui_frontend](https://github.com/Pioreactor/pioreactorui_frontend). A lot of the "data" for the frontend comes from YAML files on the RPi's filesystem. For example, all the charts, activities, and automations are defined in their own YAML file in a `contrib` folder on the filesystem. This way, it's easy to add new data to the frontend without having to write new JS.


### DNS name resolution to `pioreactor.local`

To allow for `pioreactor.local` to be an alias for `<leader hostname>.local`, we use mdns provided by `avahi`. There is a systemd service, `avahi_alias.service`, that will point `pioreactor.local` to `<leader hostname>.local`.


### Updating and restarting the web UI

To update on the UI on Pioreactor leader, use `pio update ui`. This also restarts the server.

To restart:

```
sudo systemctl restart lighttpd && sudo systemctl restart huey
```

### Logs
- Start up logs from systemd are in `sudo systemctl status lighttpd.service`.
- Logs for the backend and background workers are located in `/var/log/pioreactor.log`.

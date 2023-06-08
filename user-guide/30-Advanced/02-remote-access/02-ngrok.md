---
title: Ngrok
slug: /ngrok-remote-access
---

If you would like to expose the Pioreactor UI to view remotely, you can use a service like [Ngrok](https://ngrok.com/) to do so.

:::caution
This exposes your Pioreactor UI and therefore your Raspberry Pi over the internet. You should have a strong password on your Raspberry Pi leader, and use a strong password for basic-auth (below). We make our best security effort in our products, **however we are not responsible for any damages as a result of exposing your Raspberry Pi online**.
:::

The following are the steps to take:

1.  Sign up for [Ngrok](https://ngrok.com/) - the free plan is all we need. Make sure to confirm your account through your email.
2.  Download the app onto the Raspberry Pi: `wget -O ngrok.tgz https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-arm.tgz`
3.  Unzip: `tar zxvf ngrok.tgz`
4.  Make a new folder for the program: `sudo mkdir /opt/ngrok`
5.  Move `ngrok` file there: `sudo mv ngrok /opt/ngrok`
6.  Make a config folder: `mkdir ~/.ngrok`
7.  Fill in the following: `nano ~/.ngrok/ngrok.yml`. **We advise changing the basic auth credentials below to something more secure**
    
```yml
authtoken: <add your ngrok auth token here, find in nrgok dashboard>
tunnels:
    ui:
        proto: http
        addr: 80
        inspect: false
        basic_auth: ["pioreactor:vogue-awesome-brag"]
        schemes:
            - http
    ws:
        proto: http
        addr: 9001
        inspect: false
        schemes:
            - http
version: "2"
region: us
```

9.  Run in background:
```
nohup /opt/ngrok/ngrok start ui ws --config ~/.ngrok/ngrok.yml &
```
Alternatively, if you wish to set this up as a service that will launch on start up, the following `sudo systemctl enable ngrok`

10.  At [dashboard.ngrok.com](https://dashboard.ngrok.com/cloud-edge/endpoints), you'll see two urls. One of the unique urls should link to your Pioreactor dashboard (when asked for a name and password, use "pioreactor" and "raspberry" respectively).
11.  The other url is added to your config.ini section `[remote]` `ws_url`  (under Configuration in the Pioreactor UI), without the `http://` infront. For example:

```
[remote]
# see docs at https://docs.pioreactor.com/user-guide/remote-access
ws_url=12a14e3bb.ngrok.io
```

12.  Save the configuration by clicking \[Save\].
    
13.  You're all done! You can now access the Pioreactor UI anywhere at `http://some_address.ngrok.io`. The username and password are the same you added to your yaml file above.


### Custom domain (if using Pro plan)

Set up a domain in the ngrok UI, and follow the steps to add it to you your domain provider. Then in your `ngrok.yml`, add `hostname` fields, example:

```
authtoken: ...
tunnels:
  ui:
    proto: http
    addr: 80
    inspect: false
    basic_auth: ["pioreactor:vogue-awesome-brag"]
    hostname: dev.pioreactor.com
    bind_tls: false
    schemes:
        - http
  ws:
    proto: http
    addr: 9001
    hostname: dev.ws.pioreactor.com
    inspect: false
    bind_tls: false
    schemes:
        - http
version: "2"
region: us
```
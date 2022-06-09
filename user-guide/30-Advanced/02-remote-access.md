---
title: Setting up remote access to the web interface
slug: /remote-access
---

If you would like to expose the web interface to view over the internet (no authentication is provided however), you can use a service like [Ngrok](https://ngrok.com/) to do so.

:::caution
This exposes your web interface and Raspberry Pi over the internet. You should at the very least have a strong password on your Raspberry Pi, and also install a software like [fail2ban](https://pimylifeup.com/raspberry-pi-fail2ban/) to restrict malicious SSH attempts.
:::

The following are the steps to take:

1.  Sign up for [Ngrok](https://ngrok.com/) - the free plan is all we need. Make sure to confirm your account.
2.  Download the app onto the Raspberry Pi: `wget -o ngrok.zip https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip`
3.  Unzip: `unzip ngrok-stable-linux-arm.zip`
4.  Make a new folder for the program: `sudo mkdir /opt/ngrok`
5.  Move `ngrok` file there: `sudo mv ngrok /opt/ngrok`
6.  Make a config folder: `mkdir ~/.ngrok2`
7.  Fill in the following: `nano ~/.ngrok2/ngrok.yml`
    
```yml
authtoken: <add your ngrok auth token here, find in nrgok dashboard>
tunnels:
  ui:
    proto: http
    addr: 9000
    inspect: false
    bind_tls: false
  ws:
    proto: http
    addr: 9001
    inspect: false
    bind_tls: false
```

9.  Run in background:
```
nohup /opt/ngrok/ngrok start ui ws --config ~/.ngrok2/ngrok.yml &
```
Alternatively, if you wish to set this up as a service that will launch on start up, the following `sudo systemctl enable ngrok`

10.  On your ngrok dashboard, under _Endpoints_ -> _Status_, you'll see two urls. One of the unique urls should link to your Pioreactor dashboard.
11.  The other url is added to your config.ini (under Configuration in the Pioreactor UI):
    
```
[remote]
ws_url=<some address>.ngrok.io
```
    
12.  Hit \[Save\].
    
13.  You're all done! You can now access the Pioreactor UI anywhere at `http://some_address.ngrok.io`


### Custom domain (if using Pro plan)

Set up a domain in the ngrok UI, and follow the steps to add it to you your domain provider. Then in your `ngrok.yml`, add `hostname` fields, example:

```
authtoken: ...
tunnels:
  ui:
    proto: http
    addr: 9000
    inspect: false
    hostname: dev.pioreactor.com
    bind_tls: false
  ws:
    proto: http
    addr: 9001
    hostname: dev.ws.pioreactor.com
    inspect: false
    bind_tls: false
```
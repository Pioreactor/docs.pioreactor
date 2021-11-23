# Setting up remote access to the web interface

If you would like to expose the web interface to view over the internet (no authentication is provided however), you can use a service like [Ngrok](https://ngrok.com/) to do so.

:::caution
This exposes your web interface and Raspberry Pi over the internet. You should at the very least have a strong password on your Raspberry Pi, and also install a software like [fail2ban](https://pimylifeup.com/raspberry-pi-fail2ban/) to restrict malicious SSH attempts.
:::

The following are the steps to take:

1.  Sign up for [Ngrok](https://ngrok.com/) - the free plan is all we need.
2.  Download app onto the Raspberry Pi: `wget -o ngrok.zip https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip`
3.  Unzip `unzip ngrok-stable-linux-arm.zip`
4.  Make a new folder for the program: `sudo mkdir /opt/ngrok`
5.  Move `ngrok` file there: `sudo mv ngrok /opt/ngrok`
6.  Make a config folder: `mkdir ~/.ngrok2`
7.  Fill in the following: `nano ~/.ngrok2/ngrok.yml`
    
```yml
authtoken: <add your ngrok auth token here>
tunnels:
  ui:
    proto: http
    addr: 9000
    subdomain: <some_name>
    inspect: false
    bind_tls: false
  ws:
    proto: http
    addr: 9001
    subdomain: <some_name>ws
    inspect: false
    bind_tls: false
```
        
    
8.  (Optional) Along with `ui` and `ws`, you can also add SSH access. It's important to have a strong password on the Rpi if doing this.
    
```yml
ssh:
  proto: tcp
  addr: 22
  inspect: false
```
    
9.  Run in background `nohup /opt/ngrok/ngrok start ui ws --config ~/.ngrok2/ngrok.yml &`

*   Alternatively, if you wish to set this up as a service that will launch on start up, the following `sudo systemctl enable ngrok`

1.  On your ngrok dashboard, under Endpoints -> Status, you'll see two urls. One of the unique urls should link to your Pioreactor dashboard.
2.  The other url is added to your config.ini (under Configuration in the Pioreactor UI):
    
```
[remote]
ws_url=<something>.ngrok.io
```
    
3.  Hit \[Save\].
    
4.  You're all done! You can now access the Pioreactor UI anywhere at `http://some_name.ngrok.io`
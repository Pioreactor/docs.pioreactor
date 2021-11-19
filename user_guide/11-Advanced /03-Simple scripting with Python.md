# Writing Pioreactor scripts with Python

:::note
This article isn't intended as a crash course in Python, or Pioreactor software, but some helpful ways to write small scripts for your Pioreactor. If interested in learning more, check out the [developer docs](http://localhost:3000/developer_guide/developer_guide_intro) for detailed information.
:::

For some testing and playing purposes, it's really easy to get started writing scripts to automate parts of your Pioreactor. For this tutorial, you'll need to be able to SSH into your Raspberry Pi.

### 1. SSHing into your Raspberry Pi

SSHing means to connect to a computer remotely, and interact with its command line. In our case, we wish to interact with the Raspberry Pi remotely. SSH software depends on your operating system:

 - **Windows users**: install [PuTTY](https://www.putty.org/), or install the [Secure Shell App](https://chrome.google.com/webstore/detail/secure-shell-app/pnhechapfaindjhompbnflcldabbghjo?hl=en) for Google Chrome.
 - **maxOS users**: open up the terminal app: `command`+`space`, search for "terminal".
 - **Linus users**: y'all don't need my help :)


We need to connect to the Raspberry Pi:

1. hostname: your Pioreactor's name (see web interface) also-known-as your Raspberry Pi's _hostname_.
2. user: `pi`
3. password: the one you used when you installed the Pioreactor, by default it's `raspberry`.

One your online, you can have some fun and type `pio blink` to have your Pioreactor blink!

### 2. Writing our first script.

We'll start with something simple: turning on the Pioreactor's stirring for a moment.



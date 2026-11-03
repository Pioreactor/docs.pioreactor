import React, {useId, useState} from 'react';
import styles from './WifiConfigForm.module.css';

/** Import into any MDX page and render <WifiConfigForm />. No props required. */
export default function WifiConfigForm() {
  const id = useId();
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  function download(event) {
    event.preventDefault();
    // The device's INI reader strips surrounding whitespace; never silently change credentials.
    if ([ssid, password].some(value => value !== value.trim() || /[\x00-\x1f\x7f]/.test(value))) {
      setMessage('This file format cannot preserve leading or trailing whitespace or control characters. Use Raspberry Pi Imager to configure this network instead.');
      return;
    }
    if ([ssid, password].some(value => /\s;/.test(value))) {
      setMessage('This file format treats a semicolon after whitespace as a comment. Use Raspberry Pi Imager to configure this network instead.');
      return;
    }
    if (new TextEncoder().encode(ssid).length > 32) {
      setMessage('The network name must be at most 32 bytes (some characters use more than one byte).');
      return;
    }
    const content = '[wifi]\nssid = ' + ssid + '\npassphrase = ' + password + '\n';
    const url = URL.createObjectURL(new Blob([content], {type: 'text/plain;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wifi.ini';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage('Download requested. Copy wifi.ini to the SD card using the steps below.');
  }

  return (
    <form className={styles.form} onSubmit={download} aria-label="Download Wi-Fi configuration"
      onChange={() => setMessage('')}>
      <p id={id + '-help'}>
        For visible Wi-Fi networks with a shared password. Hidden networks and networks
        requiring a username or browser sign-in need a different setup method.
        This form creates the file in your browser without sending your credentials to a server.
      </p>
      <label htmlFor={id + '-ssid'}>Network name (SSID)</label>
      <input id={id + '-ssid'} className={styles.input} value={ssid}
        onChange={event => setSsid(event.target.value)} required
        autoComplete="off" autoCapitalize="none" spellCheck={false}
        aria-describedby={id + '-help'} />
      <label htmlFor={id + '-password'}>Wi-Fi password</label>
      <input id={id + '-password'} className={styles.input}
        type={showPassword ? 'text' : 'password'} value={password}
        onChange={event => setPassword(event.target.value)} required
        autoComplete="off" autoCapitalize="none" spellCheck={false} />
      <label className={styles.toggle}>
        <input type="checkbox" checked={showPassword}
          onChange={event => setShowPassword(event.target.checked)} /> Show password
      </label>
      <p>The downloaded file contains your Wi-Fi password. Delete your downloaded copy after setup.</p>
      <button className="button button--primary" type="submit">Download wifi.ini</button>
      <p className={styles.status} role="status">{message}</p>
      <ol>
        <li>Power off the Pioreactor, remove its SD card, and insert the card into your computer.</li>
        <li>Copy the file to the top level of the <code>bootfs</code> (or <code>boot</code>) drive.
          Keep its name exactly <code>wifi.ini</code>, without a <code>.txt</code> extension or a download number.</li>
        <li>Safely eject the card, insert it into the Pioreactor, and power it on.</li>
      </ol>
      <p>The Pioreactor attempts to join this network on boot and removes the file from the card
        after a successful connection. If it still cannot connect, check <code>network_info.txt</code> on the card.</p>
    </form>
  );
}

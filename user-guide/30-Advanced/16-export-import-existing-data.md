---
title: Export and import your data
slug: /export-import-existing-data
---

### Export your data from a Pioreactor to use in another Pioreactor

:::tip
We're here to help: we can offer email or live support, just email us at hello@pioreactor.com.
:::


1. Starting with your leader Pioreactor, make note of the name of it. The next steps will turn off all data collection, so do this outside of any running experiments.
2. [SSH](https://docs.pioreactor.com/user-guide/accessing-raspberry-pi) into the leader, and create a new file with:
   ```
   nano ~/export_data.sh
   ```
   Paste the [code linked here](https://raw.githubusercontent.com/Pioreactor/pioreactor/develop/migration_scripts/export_data.sh) into the editor. `crtl-x` to exit the editor.
3. Run this export script with `bash export_data.sh`. This creates an export file with all your experiment data, config files, Python plugins, profiles, etc. Exporting will take time proportional to how large your database is.
4. Once the export file is finished being created, make note of the filename of the export. Locally, on the command line (or with FileZilla), download the file. You can do:
   ```
   # this is run on your local computer, i.e. the one you SSH from.
   scp pioreactor@<leader name>.local:/home/pioreactor/<filename of export> .
   ```
5. Optional: do this for each Pioreactor worker in your cluster. Exporting workers will save data like calibrations, but we suggest you re-calibrate after anyways. Almost all important data, like historical experiments and logs, are stored on the leader, so you may be okay with just transferring leader data and wiping workers. It's up to you. Happy to chat further at hello@pioreactor.com.

6. With the export file(s) local, you may now proceed with re-imaging your Pioreactors, by following the same [steps here](https://docs.pioreactor.com/user-guide/software-set-up). **Important**: choose the same Pioreactor hostnames!


### Importing your data to a new, fresh, Pioreactor


7. Once your new Pioreactor leader is running (check that you can access the UI at http://pioreactor.local), we'll upload the export with:
   ```
   # this is run on your local computer
   scp <filename of export> pioreactor@<leader name>.local:/home/pioreactor/
   ```
   
8. You may receive an error: host key verification failed. Open the known_hosts file in your .ssh folder and delete the line containing your `<leader name>`.
   When prompted, `Are you sure you want to continue connecting?` enter `yes`.
   Enter password `raspberry` and continue.  
   
9. SSH into the leader, and create a new file with:
   ```
   nano ~/import_data.sh
   ```
   Paste the [code linked here](https://raw.githubusercontent.com/Pioreactor/pioreactor/develop/migration_scripts/import_data.sh) into the editor. `crtl-x` to exit the editor.
10. Run this export script with `bash import_data.sh <filename of export>`. The Pioreactor will update itself, and then perform a restart.
11. Once the Pioreactor is back online, you should see your old experiments in the UI.
12. Optional: If you exported your worker data, you can do the same thing.
13. You're done!

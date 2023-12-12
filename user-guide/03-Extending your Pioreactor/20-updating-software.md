---
title: Updating the Pioreactor software
slug: /updating-software
---

We publish new software occasionally that fixes bugs, adds new features, and improves performance. You can update your Pioreactor(s) to the latest software from the UI, or from the command line. **We highly recommend keeping your Pioreactor software up to date!**


### Method 1: Updating over the internet

:::info
To use this update method, you Raspberry Pi must be able to access the internet. Using a local access point, see method 2 below.
:::

When a new software version is released by our team, you will see a red "badge" in your UI's sidebar:

![a red badge is beside the Update link](/img/user-guide/badge.png)

Upon visiting the _Updates_ page, you can see what version you have installed, and the latest version published by us. You can also read the changelog to see what improvements we've made in the latest releases.

![](/img/user-guide/version_installed_vs_latest.png)


If you'd like to update, click on the "Update to next release" button. Updating software doesn't interrupt experiments or activities, but we suggest waiting until between experiments to update.

![highlight of the webpage showing what to select to update](/img/user-guide/click_update.png)

Updating from the UI will update all the Pioreactors in your cluster.

:::info

The updating process will update to the _next_ release, after your current version. So if your current version is 23.4.1, and there are _two_ more recent releases, say 23.5.1 and 23.6.1, then the update process will update to 23.5.1. You can run the update process _again_ to update to 23.6.1. We do this so that you will get changes folded in from each release we make.

:::

#### Installing previous versions or development versions

You can install the bleeding-edge software from this page as well. Just select the development build in the drop down. Warning: this version may be unstable (and fun!)


![highlight of the webpage showing what to select to update to the development branch](/img/user-guide/click_update_develop.png)


Similarly, from the [command line](https://docs.pioreactor.com/user-guide/accessing-raspberry-pi), you can install specific versions. See `pio update app --help` for more.



### Method 2: Update using a zip file and the UI

:::info
Available in versions ≥ 23.12.11
:::

Each time we release a new Pioreactor version, we create a bundle of the required files as a zip file. This zip file can be uploaded to your Pioreactor cluster via the UI.

1. On the [Releases page](https://github.com/Pioreactor/pioreactor/releases), download the `release_xx.xx.xx.zip` file for the version you want onto a computer with access to the Pioreactor web UI.

2. In the web UI, visit _Uploads_. In the drop down in the top right, select "Update from zip file".

3. Select the zip file from step 1.

4. Click update.

<div class="responsive-video">
    <video controls>
        <source src="/vid/update_software_zip.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>


### Method 3: Update using a zip file over scp or sftp


1. On the [Releases page](https://github.com/Pioreactor/pioreactor/releases), download the `release_xx.xx.xx.zip` file for the version you want.
2. We need a software tool up upload this release to the Pioreactor.

   1. You can use `scp` on the command line:
      ```
      scp <path to release archive> pioreactor@<leader hostname>.local:/home/pioreactor
      ```
      Skip to 8. below.

   2. or a tool like FileZilla. We'll continue with FileZilla below.

2. Download and open [FileZilla](https://filezilla-project.org/download.php?type=client).
3. Connect to the Pioreactor's local-access-point, _pioreactor_.
3. Enter the following credentials in the top-right:

   - host: `pioreactor.local` (or, your `<leader hostname>.local` or its IP address)
   - username: `pioreactor`
   - password: `raspberry`
   - port: `22`

   Click `Quickconnect`. You should successfully connect to your Pioreactor's Raspberry Pi (and may need to accept a security pop-up).

   ![filezilla UI connecting to Pioreactor's Raspberry Pi](/img/user-guide/connect_via_filezilla.png)

5. On the left-hand side is your computer's file system. Find the `release_xx.xx.xx.zip` file you downloaded earlier, and double click it to upload to the Raspberry Pi (that filesystem is on the right).
   ![filezilla UI uploading file to Pioreactor](/img/user-guide/upload_file_via_filezilla.png)
6. You should see a successfully uploaded message, and the file should be present on the right-hand side now. You can close FileZilla.
  ![filezilla UI successfully uploaded file to Pioreactor](/img/user-guide/successuful_upload.png)
7. [SSH into your Pioreactor](/user-guide/accessing-raspberry-pi). Now enter:
   ```
   pio update app --source release_xx.xx.xx.zip
   ```
   (Of course, replace the `xx.xx.xx` with your version). This will kick off a task to update your software.

8. To update your workers, first we will distribute the release file to all workers:
   ```
   pios cp release_xx.xx.xx.zip
   ```

9. Finally, run the following to update the software on the workers:
   ```
   pios update app --source release_xx.xx.xx.zip
   ```



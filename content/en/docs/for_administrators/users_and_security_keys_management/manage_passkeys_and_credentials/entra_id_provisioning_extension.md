---
title: "Entra ID Provisioning Extension"
description: ""
lead: ""
date: 2024-07-14T14:30:00+03:30
lastmod: 2024-07-24T11:30:00+03:30
draft: false
images: [ ]
menu:
  docs:
    parent: "manage_passkeys_and_credentials"
weight: 34401
toc: true
---

## Introduction

This user guide provides instructions for using the **IDmelon Provisioning Extension** designed to streamline the
creation of
security keys for users on the Microsoft Azure sign-in portal.

## Using the Extension

To effectively utilize this extension, follow these steps:

1. Make sure you have the latest version of **Chrome** or **Edge** browsers.

2. Install the extension
   from [Chrome Store](https://chromewebstore.google.com/detail/idmelon-provisioning/jpiokfcldcenkkhhhkeklechbenokmfo)

3. Open the following link in Chrome/Edge and enable **Allow in Incognito**/**Allow in InPrivate** option:
   > chrome://extensions/?id=jpiokfcldcenkkhhhkeklechbenokmfo

4. Ensure that you are logged into your workspace at the following address: <https://panel.idmelon.com>

### Automatic Provisioning

In automatic provisioning extension does all the steps needed to create and assign passkey. Although this solution is
not supported in all languages. Thus, if you had any problems please try manual mode.

1. After logging in, find desired user and navigate to **Passkeys** tab, then click on `+ Passkey` button.

   ![alt](/images/vendor/provisioning/panel1.jpg)

2. Click on `Next` and then click on `Create` button.

3. If you redirected to Microsoft login page, you must log in with a Microsoft admin account.

4. Then, a private window will be opened and all steps will be done automatically.

5. After finishing all steps, the private window will be closed and the extension is ready for next provisioning
   request.

### Manual Provisioning

1. After logging in, find desired user and navigate to **Passkeys** tab, then click on `+ Passkey` button.

   ![alt](/images/vendor/provisioning/panel1.jpg)

2. Check **Manual RP Provisioning** and click on `Next` button.

3. If you redirected to Microsoft login page, you must log in with a Microsoft admin account.

4. Click on `Get Temporary Access Pass` button and copy the generated temporary access pass (TAP) then click on `Create`
   button.

   ![alt](/images/vendor/provisioning/panel2.jpg)

5. A private window will be opened. Log in with copied TAP in previous step and do the needed steps manually.

### Provisioning Report

To check the result of provisioning open the extension popup and click on `Show Logs`

![alt](/images/vendor/provisioning/extension_popup.jpg)

Here you can find the result of provisioning.

![alt](/images/vendor/provisioning/result.jpg)

Please note that the manual provisioning report may not be correct in some cases. Also, if provisioning was successful,
Microsoft passkey should be added in passkeys list of the user in IDmelon Panel.

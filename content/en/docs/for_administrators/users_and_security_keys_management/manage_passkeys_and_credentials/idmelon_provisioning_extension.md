---
title: "IDmelon Provisioning Extension"
description: ""
lead: ""
date: 2024-07-14T14:30:00+03:30
lastmod: 2024-07-24T11:30:00+03:30
draft: false
images: []
menu:
  docs:
    parent: "manage_passkeys_and_credentials"
weight: 34100
toc: true
---

## Introduction

This guide shows how to use the **IDmelon Provisioning Extension**, designed to simplify the creation of security keys for users on the Microsoft Entra ID sign-in portal.

## Prerequisites

Before you start the passkey provisioning process, ensure the following requirements in `Azure Portal -> Entra ID Authentication Methods` are met:

- **Mandatory**: The `FIDO2 Security Key` must be available in the authentication methods for the targeted users.
- **Optional**: If using automatic provisioning or manual provisioning with TAP, ensure that `Temporary Access Pass` is enabled for the targeted users with the `one-time use` option set to `Yes`.

To get started, make sure to:

1. Use the latest version of **Chrome** or **Edge** browsers.
2. Install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/idmelon-provisioning/jpiokfcldcenkkhhhkeklechbenokmfo).
3. Open the following link in Chrome/Edge and enable the **Allow in Incognito**/**Allow in InPrivate** option:  
   `chrome://extensions/?id=jpiokfcldcenkkhhhkeklechbenokmfo`

## Passkey Provisioning

To use the extension to register a Microsoft passkey for users to access their Microsoft account, follow these steps:

1. Log in to the IDmelon Admin Panel and navigate to **Users -> All Users**.
2. Select the user you want to provision.
3. Go to the **Passkeys** tab and from the **Add Passkey** dropdown, click on **Microsoft**.  
   ![User Passkeys](/images/vendor/provisioning/extension_provisioning_microsoft_1.jpg)
4. In the first dialog, click the `Next` button.  
   ![Provisioning Dialog](/images/vendor/provisioning/extension_provisioning_microsoft_2.jpg)

You have two options for provisioning: **Automatic** and **Manual**.

### Automatic Provisioning

In the automatic mode, the extension handles all necessary steps to create and assign the passkey. Note that this solution may not be supported in all languages. If issues arise, try the manual mode.

1. Follow the steps mentioned in the **Passkey Provisioning** section.
2. In the provisioning dialog, click the `Create` button.
   ![Automatic Provisioning](/images/vendor/provisioning/extension_provisioning_microsoft_3.jpg)
3. If redirected to the Microsoft login page, log in with a Microsoft admin account.
   > **Note**: To automatically assign a passkey to the user, a Temporary Access Pass (TAP) is required. You must log in using an account with sufficient permissions.
4. A private window will open, and all steps will be completed automatically.
5. Once finished, the private window will close, and the extension will be ready for the next provisioning request.

### Manual Provisioning

If errors occur during automatic provisioning, you can use the manual mode.

1. Follow the steps mentioned in the **Passkey Provisioning** section.
2. In the provisioning dialog, click on `registering manually`.
   ![Automatic Provisioning](/images/vendor/provisioning/extension_provisioning_microsoft_4.jpg)
3. In the next dialog, click the `Create` button.
   ![Automatic Provisioning](/images/vendor/provisioning/extension_provisioning_microsoft_5.jpg)
   > **Note**: You can optionally request a Temporary Access Pass (TAP) for the user to log in. If so, you may be redirected to the Microsoft login page. Alternatively, you can use the user's other authentication methods if preferred.
4. A private window will open. Log in and complete the required steps manually. The extension will detect the security key assignment.

## Troubleshooting

To check the result of the provisioning, open the extension popup and click on `Show Logs`.  
![Extension Popup](/images/vendor/provisioning/extension_provisioning_microsoft_6.jpg)  
Here you can find the result of the provisioning.  
![Provisioning Result](/images/vendor/provisioning/extension_provisioning_microsoft_7.jpg)

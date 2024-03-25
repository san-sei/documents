---
title: "Passkey Provisioning"
description: ""
lead: ""
date: 2023-09-23T14:50:20+03:30
lastmod: 2023-09-23T14:50:20+03:30
draft: false
images: []
menu:
  docs:
    parent: "manage_passkeys_and_credentials"
weight: 34200
toc: true
---

Here are the requirements and steps to automatically enroll passkeys on behalf of users.  

## Requirements  

Make sure TAP and FIDO2 is available for the tageted users in `Azure portal -> Entra ID Authentication Methods`.  

- TAP (Temporary Access Pass) should be previously enabled as for the authentication methods for the targeted users with the `one-time` use set to `Yes`.  
- FIDO2 Security key also of course is required to be avaible for the targeted users to add as authenticaiton methods.  

## Provisioning Steps: IDmelon Panel  

1) Please ensure you have an active Chrome browser profile logged into [Azure Portal](https://portal.azure.com) with Global administrator privileges. Ensure only one account is active in the browser.  

    > This Global Administrator account is not necessarily required to be available in IDmelon panel.  

2) Navigate to the user details page for the intended user. From the `Passkeys` tab, select `+ Passkey`, then choose the `Automatic Entra ID` option.  

    > If an automatic process encounters issues, you can attempt manual provisioning. In such cases, you will need to handle the clicking manually, while the remaining steps remain the same.  

3) Download the `provisioning.exe` from the prompted modal and relocate it to a directory (e.g., `C:/provisioning`) to facilitate bulk logging of success or failure attempts.  

4) Open PowerShell in the same directory as `provisioning.exe` and register the provisioning path with the following command. This step is required only once.  

    ```bash
    .\provisioning.exe --register-deeplink
    ```

5) Proceed with the `Create` button in the opened modal to start the process. In the automatic provisiong, do not interact with the opened browser as it is running in a controlled environement.  

    > In the manual way, you need to copy the generated TAP and paste it there and complete the enrollment manually by taking the steps exactly in the same way you normally do.

## Troubleshooting  

- Permission Issues: If needed, execute the following command to prompt login again for the Global Administrator account.  

    ```bash
    .\provisioning.exe --login
    ```

---
title: "Local and On-Premise Domain Logon"
description: ""
lead: ""
date: 2022-04-25T19:13:04+03:00
lastmod: 2022-04-25T19:13:04+03:00
draft: false
images: []
menu:
  docs:
    parent: "integration-guids"
weight: 100
toc: true
---

While Microsoft solutions are available for Azure and Hybrid-Azure environments, they do not support local or on-premise Active Directory environments. In response, IDmelon has developed the IDmelon FIDO Credential Provider (IDmelon FCP). This application enables users with local or on-premise AD to use their security keys, including IDmelon products, as a sign-in option. IDmelon FCP offers a secure and convenient way to log in to on-premises computers, with an easy installation and configuration process. To get started, refer to the "Getting Started" section below.

## Getting Started

To begin using IDmelon FCP, follow these simple steps:

1. Download the FCP setup file (contact support@idmelon.com to receive the installer).
2. Install the downloaded setup file on your computer.
3. Log in to your administration panel at [https://panel.idmelon.com](https://panel.idmelon.com).
4. In the device management section, select "IDmelon Connected Devices."
5. Click on "Get Configuration" to obtain your configuration token.
6. Copy the configuration token (Ctrl + C) as it will be required during the configuration process.

## Installation and Configuration

To install and configure IDmelon FCP on your computer, follow these steps:

1. Open a command prompt with administrator privileges (Run As Admin).
2. Type the following commands in the command prompt:

   ```commandline
   fcp-cli init --token "PLACE-YOUR-TOKEN-HERE"
   fcp-cli start
   ```

3. Replace "PLACE-YOUR-TOKEN-HERE" with the configuration token you obtained earlier.
4. Press Enter to execute the commands.

Once you have completed the installation and configuration steps, IDmelon FCP will be set up on your computer.

## Management Panel

To enable login using a security key for a specific user, follow these instructions:

1. Go to the administration panel.
2. Click on "Users" and select the user you want to enable login with a security key for.
3. Navigate to the credentials section and click on **Add Domain Logon**.

> Note: Currently, this feature only works for Reader Driver. Ensure that you select a user who has a contactless security key device.

If you want to enable sign-in access to a domain (on-premise) account, follow these steps:

1. Type the domain name and username separated by a `/`.
  - > If you don't know your domain name, run the following command on your computer:
    ```commandLine
    systeminfo | findstr /B "Domain"
    ```
2. Type the account password.
3. Click **Ok**.

<div align="center">
    <img width="70%" src="/images/vendor/DirectoryServicesIntegration/FCP/domain-user-pass.png" class="doc-img-frame">
</div>

> **Note:** If you want to login to a local account, type a single dot (.) as the domain name of the account. (i.e `./Dwight`)\
> **Note:** Make sure to enter the account password correctly, as it is necessary for successful login.

Congratulations! You have now installed and configured IDmelon FCP on your computer.

# Login Experience

After you have successfully installed and configured IDmelon FCP on your computer, each time you want to login to your computer, on the lock screen, select IDmelon FCP, Tap your card on the reader and enter your PIN and press Enter and enjoy the seamless login experience.

<div align="center">
    <img width="70%" src="/images/vendor/DirectoryServicesIntegration/FCP/domain-user-pass.png" class="doc-img-frame">
</div>

For further assistance or inquiries, please contact our support team at support@idmelon.com.

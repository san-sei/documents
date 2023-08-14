---
title: "QR Code Based Cross-Device Authentication"
description: "Easily authenticate on desktop browsers using the IDmelon Android app's QR Code feature."
lead: "Experience seamless passwordless authentication with the IDmelon Android app."
date: 2022-07-23T18:14:02-08:00
lastmod: 2022-07-23T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "mobileapp"
weight: 44
toc: true
---

## Introduction

The IDmelon Android app offers a feature called QR Code Based Cross-Device Authentication. This is a method recognized by FIDO 2 standards as "Hybrid Transport". It's designed to make logging in on desktop browsers easy and secure without needing passwords or additional software.

## How It Works

Requirements: An __Android__ smartphone with the IDmelon app installed.

## Registration

1. **Get the App**: Download and open the IDmelon app from the [Play Store](https://play.google.com/store/apps/details?id=com.vancosys.authenticator.business).
2. **Security Key**: Activate a security key. Need help? Check [this guide](https://docs.idmelon.com/docs/for_users/activate_work_account/).
3. **Website Setup**: Go to your desired website and add a security key to see the __create a passkey__ browser dialog.

    > Example: For Microsoft choose Add sign-in method -> Add Security key -> USB device -> Next.

    <img src="/images/vendor/MobileApp/hybrid_transport_1.png" width="400" style="display: block; margin: 0 auto;"/>


4. **Scan the Code**: A __Create a passkey__ window will pop up. Choose **Use a different phone or tablet** and scan the QR code using the IDmelon app.
5. **Complete Registration**: Follow the prompts on your phone. Once done, your account (like Microsoft) will be listed in the IDmelon app.


## Login

1. **Choose Account**: On the website, pick the account you want to access.
2. **Security Key Option**: Click on **Use a security key to sign in.**
3. **Select Device**: Choose the device name starting with "IDmelon" (if you have paired it before).

    <img src="/images/vendor/MobileApp/hybrid_transport_2.png" width="400" style="display: block; margin: 0 auto;"/>

4. **Finish Login**: Follow the prompts on your phone to log in.

> **Compatibility**: This feature works best with the latest Google Chrome, Microsoft Edge, and Apple Safari browsers.

---
title: "Quick Start"
description: "One page summary of how to start using your smartphone as a security key."
lead: "One page summary of how to start using your smartphone as a security key."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "individuals"
weight: 30
toc: true
---

## Requirements

<hr class="hr-line">

IDmelon uses a lightweight desktop application (named Pairing Tool) that will help you to pair your smartphone with your PC quickly by scanning a QR code.

- Install IDmelon app on your smartphone from App Store or Google Play.

Apple Store             |  Google Play
:-------------------------:|:-------------------------:
{{< figure src="/images/vendor/App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" target="_blank" link="https://apps.apple.com/ca/app/idmelon/id1511376376" class="logo-light">}}{{< figure src="/images/vendor/App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" target="_blank" link="https://apps.apple.com/ca/app/idmelon/id1511376376" class="logo-dark d-none">}}|{{< figure src="/images/vendor/Google_Play/google-play-badge.svg" target="_blank" link="https://play.google.com/store/apps/details?id=com.vancosys.authenticator.business&hl=en_CA&gl=US">}}

- Download Pairing Tool for your PC and install it.

Windows 10 (or higher)             |  Mac OS
:-------------------------:|:-------------------------:
{{< figure src="/images/vendor/Windows/Windows_logo.png" target="_blank" link="https://www.idmelon.com/downloads/" >}}|{{< figure src="/images/vendor/Mac/mac-os.png" target="_blank" link="https://www.idmelon.com/downloads/">}}

## Set up a security key

<hr class="hr-line">

When running the app for the first time you will be asked to enter an email to create (or open) your security key. We encourage you to use a personal email (not business) if you want to protect your personal account with this security key.

## Pair your smartphone with PC

<hr class="hr-line">

- Run the IDmelon Pairing Tool on your PC.
  - If you are running this tool for the first time, you will be asked to scan the QR code using IDmelon app on your smartphone.
  - Otherwise, click on **Pair a new Smartphone** to generate and show a QR code on the screen
- Open the IDmelon on your phone
  - Tap the QR icon displayed on the top, OR
  - Tap **More options**, and choose **Pair with a PC**.
  - Tap **Start Scanning**.
  - Unlock your phone:
  - Point your phone at the screen of the PC to scan the QR code.
  - Click **Done** and you're all set to experience password-login experience.

      {{< figure src="/images/vendor/gifs/pairing.gif">}}

## Login with Security key

<hr class="hr-line">

Now that you have paired your smartphone with your PC, you are all set to add this security key to your online accounts such as Office 365, Github, Facebook, Twitter and much more.
Here we'll help you going through adding security to Microsoft Office 365.

### Microsoft Azure and Office 365

You can use security keys as a passwordless sign-in method within your organization.

{{< alert icon="👉" text="Currently security key is only available for enterprise users or Azure joined PCs." />}}

#### How to add security key to your account

1. Go to the My Profile page at [My Account](https://myaccount.microsoft.com/s) and sign in if you haven't already done so.
2. Select **Security Info**, select **Add method**, and then select **Security key** from the **Add a method** list.
3. Select **Add**, and then select **USB device** for the type of security key.
4. On the Security key page, select **Next** to see another window asking you to **Touch your security key**.
5. You then right after will get a notification on your phone. Tap on the notification to open the app and then tap **Approve** to complete registration.

  {{< figure src="/images/vendor/gifs/registration_office365.gif">}}

{{< alert icon="👉" text="Make sure your administrator has turned on FIDO2 feature for use within your organization" />}}

#### How to login with security key

Now that you've added your phone as a security key to your account, you can use it to get access to your account.
To see how it works:

1. Visit sign-in page on [office.com](http://office.com), and click **Sign-in options**.
2. Click **Sign in with a security key** in the **sig-in options** window to see another window asking to **Touch your security key**.
3. Check your phone for the **Login** notification, tap on the notification to open the app.
4. Tap **Approve** to present your biometrics to authenticate.

  {{< figure src="/images/vendor/gifs/signin_1.gif">}}

## Other accounts

<hr class="hr-line">

In the same way, you can protect all other FIDO-enabled account using security key by visiting security option of your online account.

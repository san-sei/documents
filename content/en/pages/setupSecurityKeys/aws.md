---
title: "Enable a FIDO security key for your own IAM user (console)."
description: ""
date: 2022-05-11T12:12:40+03:00
lastmod: 2022-05-11T12:12:40+03:00
draft: false
images: []
---

You can enable a FIDO security key for your own IAM user from the AWS Management Console only, not from the AWS CLI or AWS API.

1. Use your AWS account ID or account alias, your IAM user name, and your password to sign in to the [IAM console](https://console.aws.amazon.com/iam). To get your AWS account ID, contact your administrator.
2. In the navigation bar on the upper right, choose your user name, and then choose **Security Credentials**.
3. On the **AWS IAM credentials** tab, in the **Multi-factor authentication (MFA)** section, choose **Activate MFA**.
4. In the **Manage MFA device** wizard, choose **Security key**, and then choose **Continue**.
5. Then,
    - If you are using an IDmelon Reader, insert it into the USB port of your device, tap your smartphone to the Reader which starts blinking blue for a few seconds to receive the notification.
    - If you are using IDmelon Pairing Tool, you will receive the notification on the smartphone which is already paired with your computer.

6. Say yes to the notification and choose **Close** when setup is complete.

The IDmelon FIDO2 security key is ready for use with AWS.

<a id="back" role="button" class="btn btn-primary btn-lg d-block mb-3" href="//pages/whichplatform/index.html">Back</a>

<style>

@media (max-width: 480px) {.navbar, .footer { display: none; }}
h1{
    color : #4395ec;
}
p{
    font-size:20px;
}
li{
    font-size:20px;
}
</style>

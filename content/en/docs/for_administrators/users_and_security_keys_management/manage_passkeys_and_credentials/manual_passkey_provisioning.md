---
title: "Manual Passkey Provisioning"
description: ""
lead: ""
date: 2023-04-14T16:45:00+03:30
lastmod: 2023-04-14T16:45:00+03:30
draft: false
images: []
menu:
  docs:
    parent: "manage_passkeys_and_credentials"
weight: 34300
toc: true
---

Except Entra ID, to register credentials, including passkeys, manually on behalf of a user on any other RP, follow the steps below:

1. Go to the [IDmelon](https://panel.idmelon.com/) admin panel.
2. Go to the **All Users** section under the **Users**.
3. Click on a user that you want to create a credential or passkey on their behalf.
4. From the top of the user’s details page, choose **Passkeys**, and then click the **+Passkey** button on the right top corner.
5. Choose the **Other Platforms/applications** option. Before the registration process begins, to make it as if the selected users’ security key is attached to your PC, you are required to click the **Open** button when a pop-up appears saying **The site is trying to open Pairing Tool**. Therefore, Pairing Tool becomes ready for a registration on behalf of this user.
6. Only after the provisioning is finished for the user, click **Done**. But if you don't want to continue the passkey registration, you can click **Cancel**.
7. You can now register credentials, including passkeys, on user’s behalf on whatever platform, such as Microsoft, you want.
8. Once you’ve completed the provisioning process, open Pairing Tool, and disconnect the user by clicking the **Back to normal mode**.

*Note: Before starting the provisioning process, ensure you’ve considered the prerequisites such as installing the **Pairing Tool** Software. You can download Pairing Tool [here](https://idmelon.com/docs/downloads)*.

## Registration steps on Microsoft

1. Go to the My Profile page at [My Account](https://myaccount.microsoft.com) and sign in if you haven’t already done so.
2. Select **Security Info**, select **Add sign-in method**, and then select **Security key** from the Add a method list.
3. Select **Add**, and then select **USB device** for the type of security key.
4. On the Security key page, select **Next** to see another window asking you to Touch your security key.
5. Name the security key to make it distinguishable.
6. The registration gets completed and a passkey gets created for the user on their Microsoft account.

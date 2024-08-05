---
title: "IDmelon Pairing Tool"
description: ""
lead: ""
date: 2023-09-23T14:50:20+03:30
lastmod: 2023-09-23T14:50:20+03:30
draft: false
images: []
menu:
  docs:
    parent: "manage_passkeys_and_credentials"
weight: 34300
toc: true
---

## Introduction

This guide shows how to use the **IDmelon Pairing Tool** to register passkeys on behalf of users for various relying parties, including Microsoft.

## Prerequisites

Download the Pairing Tool from the [Downloads](https://idmelon.com/docs/downloads) page.

## Passkey Provisioning

To use the Pairing Tool to register a passkey for users to access their accounts, follow these steps:

1. Log in to the IDmelon Admin Panel and navigate to **Users -> All Users**.
2. Select the user you want to provision.
3. Go to the **Passkeys** tab and select **Other RPs** from the **Add Passkey** dropdown.
   ![User Passkeys](/images/vendor/provisioning/pairing_tool_provisioning_1.jpg)
4. In the dialog, click the `Next` button.
   ![Provisioning Dialog](/images/vendor/provisioning/pairing_tool_provisioning_2.jpg)
5. A popup will open in the browser. Click `Open Pairing Tool`.
6. The IDmelon Pairing Tool will start in `On behalf passkey registration` mode. In this mode, every passkey you register on this machine will be associated with the selected user's security key.

## Finishing Up Provisioning

Once you are done, change the Pairing Tool status back to `Normal mode`.

> **Note**: If you use the Pairing Tool solely for provisioning, it is advisable to disable it to avoid conflicts with other security key types, such as Card.

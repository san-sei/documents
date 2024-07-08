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

The IDmelon Pairing Tool can be used to register passkeys on behalf of users for every relying party, including Microsoft.

## Prerequisites

- Download the Pairing Tool [here](https://idmelon.com/docs/downloads).

## Provisioning Steps

Follow these steps to mark a user in the IDmelon Admin Panel for provisioning and then, as an example, register a passkey for the user on Microsoft.

1. **Marking the User for Provisioning**:
   - Visit the [IDmelon Admin Panel](https://panel.idmelon.com/)
   - Navigate to `All Users`
   - Open the `User`'s details page
   - Go to the `Passkeys` tab
   - Click `+ Passkey`
   - Choose `Other platforms/Applications`. This option will automatically open the `Pairing Tool` and change its status to `On behalf registration mode`.
   
   Once the user is marked for provisioning, you can proceed to the next step to provision a passkey on behalf of the user.
2. **Registering Passkeys on Behalf of the User**:
   - Go to the [My Account](https://myaccount.microsoft.com) page and sign in if you haven’t already done so.
   - Select `Security Info`
   - Select `Add sign-in method`
   - Choose `Security key` from the Add a method list
   - Select `Add`, then choose `USB device` for the type of security key.
   - Follow the prompts to register and name the passkey.

3. **Finishing Up Provisioning for the User**:
   - Once done, click `Done` in the open modal from step 1 to unmark the user.
   - Change the `Pairing Tool` status back to `Normal mode`.
   
   If you only use the pairing tool for provisioning, it is better to disable it to avoid conflicts if you are using other security key types like Card.

---
title: "Manage the Use of a Shared Security Key"
description: ""
lead: ""
date: 2023-09-11T15:05:53+03:30
lastmod: 2023-09-11T15:05:53+03:30
draft: false
images: []
menu:
  docs:
    parent: "configure_a_shared_user_account"
weight: 35300
toc: true
---

When attempting to log in to Windows using a security key device of a user linked to multiple users/accounts, Windows may automatically select a user/passkey without prompting for selection.  

To address this issue, you can employ default account or policies to establish a default user/passkey for Windows login.  

## Default Account  

To set a user as the default account, follow these steps:  

1. Log in to your workspace.  
2. Under Users, navigate to the All Users menu.  
3. Select the user which recieved login credentials from other users.  
4. Go to the Shared Passkeys tab. You will notice a Default column for each shared account.  
5. Activate Default for the desired shared account.  

Following these steps, you have successfully set a shared account as the default for this user. by that, whenever there are more than one login credentials available to use, Windows will select the default account's login credential.  

## Policies  

By adding a policy, you can control attempts to allow or block the use of login credentials for specific users in specific circumstances.  

To further study policies and how to use them, please refer to the [policies section](/docs/for_administrators/conditional_access_for_security_keys/what_are_the_security_key_policies).  

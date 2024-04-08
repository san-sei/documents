---
title: "Setup a Shared Account"
description: ""
lead: ""
date: 2023-09-11T15:03:59+03:30
lastmod: 2023-09-11T15:03:59+03:30
draft: false
images: []
menu:
  docs:
    parent: "configure_a_shared_user_account"
weight: 35200
toc: true
---

Shared Accounts simplify access to workspace resources by allowing multiple users to use the same login credentials, such as passkeys and passwords.  

## How to setup a shared account  

To designate a user as a Shared Account, follow these steps:  

1. Log in to your workspace.  
2. Under Users, navigate to the All Users menu.  
3. Select a user you intend to designate as a Shared Account.  
4. Go to the Shared with tab and click on the Share button.  
5. Choose the users to grant access for login using the selected user's credentials.  
6. Confirm your changes by clicking on the Apply button.  

Following these steps, you have successfully granted access to one or multiple users, allowing them to utilize the selected user's login credentials with their Contactless Card or Smartphone devices, thereby transforming the user into a Shared Account.  

Upon returning to All Users, you will notice that under the Security keys column, the selected user is now labeled as Shared Account. This designation indicates that this user's credentials are employed by more than one user/account.  

When navigating to the user to whom you've shared the credentials, you will notice a new tab called Shared Passkeys where you can see a list of users who shared their login credentials with this user and their passkeys.  

## Limitations on Shared Accounts  

- Nested sharing isn't permitted.  
- It does not work when passkeys are bound to a FIDO security key or platform.  
- If you change the policies of a Contactless card, users will need to resync their PCs with our server to get the policy updates. We will do that eriodically, but to get the updates quickly, turning your device’s internet off and on will force the sync process.  

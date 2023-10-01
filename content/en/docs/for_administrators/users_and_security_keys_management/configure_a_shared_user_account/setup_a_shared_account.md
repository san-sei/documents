---
title: "Setup a shared account"
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

## How to setup a shared account  

To designate a user as a Shared Account, follow these steps:  

1. Login to your workspace  
2. Under Security Key Management, navigate to Users menu  
3. Select an Active user that you intend to designate as a Shared Account  
4. Click on the Add Activated Security Key button  
5. Choose the contactless cards to which you wish to grant access for login using the selected user's credentials  
6. Confirm your changes by clicking on the OK button  

Following these simple steps, you have successfully granted access to one or multiple contactless cards, allowing them to utilize the login credentials associated with the chosen user, thereby transforming the user into a Shared Account.  

On the same page, you will notice that under the Device Access column, the added devices are now labeled as *Multiple Account*. This designation indicates that these devices are employed by more than one user/account within the IPOP. Conversely, devices exclusively owned by a single user/account are identified as *Single Account*. This classification enables convenient differentiation between devices utilized for multiple or singular purposes within the platform.  

### Limitations on Shared Accounts  

- Only contactless cards can be used in shared accounts.  
- It does not work when credentials are bound to a FIDO security key or platform.  
- If you change the policies of a Contactless card, users will need to resync their PCs with our server to get the policy updates. We will do that periodically, but to get the updates quickly, **turning your device’s internet off and on will force the sync process.**  

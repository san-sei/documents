---
title: "Manage the use of a shared security key"
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

When attempting to log in to Windows using a contactless card that is linked to multiple users/accounts, Windows will not prompt you to select a specific user/credential, instead choosing a user/credential on its own accord.  

To address this issue, you can employ policies to establish a default user/credential for Windows login. **The following section offers an illustrative example of associating a shared account with a computer through IPOP policies.**  

### Associate a Shared Account with a Computer  

1. Navigate to the **Security > Security Key Policies** menu and click on the **New Policy** button. (We assume that the default policy of our workspace is Block, which blocks all user activities by default).  
2. Fill in the required information and proceed to step 2, which is *Set Conditions*.  
3. In the **Security Key Device Type** section, select Contactless Card.  
4. In the **Users and Groups** section, select the user/shared account that you want to use as the default account for login.  
5. In the **Access Restriction on PCs** section, select the PCs on which you want this policy to take effect.  
6. In the third step, choose *Allow* as your policy's action. This way, the chose user/shared account will be the only account capable of logging into Windows on the selected computer.  
7. Submit your changes, and you will have a new policy in the policies table.  

After implementing the policy, any attempts to log in to the specified computer using a contactless card that is not linked to the selected user/shared account will be denied or blocked. Using shared accounts, only contactless cards associated with the selected shared account are allowed to login to Windows on the specified computer.  

To further study policies and how to use them, please refer to the [policies section](/docs/for_administrators/conditional_access_for_security_keys/what_are_the_security_key_policies).  

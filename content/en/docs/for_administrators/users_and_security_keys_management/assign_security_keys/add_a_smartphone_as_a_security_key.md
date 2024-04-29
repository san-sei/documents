---
title: "Add a Smartphone as a Security Key"
description: ""
lead: ""
date: 2023-09-20T13:46:52+03:30
lastmod: 2023-09-20T13:46:52+03:30
draft: false
images: []
menu:
  docs:
    parent: "assign_security_keys"
weight: 33100
toc: true
---

Steps to add a Smartphone as a Security Key:  

1. Log in to the admin panel.  
2. Go to the **Users** section on the left-side menu, click the **All Users**. This section lists all users associated with your workspace.  
3. Initiate User Addition: Click on the **New User** option to open a wizard for adding a new user.  
4. Enter User Information: In the wizard, enter all the necessary information about the user. This might include details like user ID, name, email, username, etc. Choose the groups that you want the user to be a part of. These groups might determine the user’s permissions and access rights and Click the **Done** button.  
5. Security Key Assignment: If you want, you can also assign a security key of any type, i.e. smartphone, card, fingerprint, or USB key, to this user.  
6. Choose Smartphone as Security Key. If you turn off the default toggle, you will make settings for your smartphone.  
7. Configure Smartphone as FIDO Security Key: Follow the specific instructions to configure the smartphone as a FIDO security key. This involves setting up required features for the smartphone as a security key which includes the following:  
    - **Bluetooth Proximity:** If you enable this option, Bluetooth will be used to check if the user’s smartphone and PC are near each other.  
    - **Offline Login:** Enabling this option allows users to log in with this device without an internet connection.  
    - **Verification:** Use of biometrics or other designated methods on smartphone (e.g. pattern) or It needs an IDmelon reader to tap the phone on and also entering a PIN on the PC (browser) at the time of login.  
    - **Advanced Options:** Select where you want to store credentials.  
8. Click on the **Next** button.  
9. Select the activation method:
    - **Activate now:** Scan this QR code with IDmelon Authenticator app on user’s smartphone.
    - **Activate by the user via email:** Your user will receive an email containing activation options with a QR code or a link. By clicking on the activation link or scanning the QR code, the user’s smartphone will be activated.  
10. Completion: Once the user successfully activates their smartphone as a security key, their status will be updated, and they can use the smartphone for secure logins based on the FIDO standard.  

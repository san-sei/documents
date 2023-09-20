---
title: "Add a smartphone as a security key"
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

1. Access Security Key Management: Click "Users" under Security Key Management section of admin panel to manage users.
2. Initiate User Addition: Click on the "New User" option to open a wizard for adding a new user.
3. Enter User Information: In the wizard, enter all the necessary information about the user. This might include details like name, email, username, etc.
4. Choose User Groups: In the next step of the wizard, select the groups that you want the user to be a part of. These groups might determine the user's permissions and access rights.
5. Set Up Security Key: In the third step of the wizard, turn on the toggle for assigning a security key to the user.
6. Choose Smartphone as Security Key: Select "Smartphone" from the dropdown menu as the Security Key Device.
7. Configure Smartphone as FIDO Security Key: Follow the specific instructions to configure the smartphone as a FIDO security key. This involves setting up required features for the smartphone as a security key which includes the following:
    - Auditable: If you disable this option, the users' login activities will not be recorded and cannot be traced by admins.
    - Bluetooth proximity: If you enable this option, Bluetooth will be used to check if the user’s smartphone and PC are near each other.
    - Offline Login: Enabling this option allows users to log in with this device without an internet connection.
    - Verification: either on smartphone by fingerprint or face ID or using a PIN number.
8. Confirm User Information: In the next page of the wizard, confirm the user's information.
9. Send Activation Link: An email containing an activation link will be sent to the user. The user's status will be "Pending," waiting for them to activate their security key.
10. User Activation: The user should follow the instructions in the email to activate the security key on their smartphone. This might involve verifying their identity, setting up a PIN, or completing other security steps.
11. Completion: Once the user successfully activates their smartphone as a security key, their status will be updated, and they can use the smartphone for secure logins based on the FIDO standard.

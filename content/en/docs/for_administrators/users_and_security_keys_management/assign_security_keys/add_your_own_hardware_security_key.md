---
title: "Add your own hardware security key"
description: ""
lead: ""
date: 2023-09-20T13:47:52+03:30
lastmod: 2023-09-20T13:47:52+03:30
draft: false
images: []
menu:
  docs:
    parent: "assign_security_keys"
weight: 303.3
toc: true
---

Steps for adding your own Hardware Security Key as a Security Key:

1. Access Security Key Management: Click "Users" under Security Key Management section of admin panel to manage users.
2. Initiate User Addition: To add a single user, click on the "New User" option. This will open a wizard for adding a new user.
3. Enter User Information: In the wizard, enter all the necessary information about the user. This might include details like name, email, username, etc.
4. Choose User Groups: In the next step of the wizard, select the groups that you want the user to be a part of. These groups might determine the user's permissions and access rights.
5. Set Up Security Key: In the third step of the wizard, turn on the toggle for assigning a security key to the user.
6. Choose Hardware Security Key: Select the third option in the security key device dropdown, labeled as "FIDO2 Hardware Security Key".
7. Send Registration Link: The target user will receive a registration link to set up their hardware security key. This link will guide them through the process of setting up their security key.
8. User Activation: The user should follow the instructions in the registration link to set up their hardware security key.
9. Completion: Once the user successfully sets up their hardware security key, it can be used for passwordless logins based on the FIDO2 standard wherever it is available.

Ensure that your hardware security key is compatible with the FIDO2 standard and that you follow any manufacturer-specific instructions for setup and usage.

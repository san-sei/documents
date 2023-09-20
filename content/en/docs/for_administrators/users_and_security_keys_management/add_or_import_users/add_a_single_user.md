---
title: "Add a single user"
description: ""
lead: ""
date: 2023-09-20T13:33:36+03:30
lastmod: 2023-09-20T13:33:36+03:30
draft: false
images: []
menu:
  docs:
    parent: "add_or_import_users"
weight: 301.1
toc: true
---

Steps for adding a single user:

1. Access Security Key Management: Click Users under Security Key Management section of admin panel.
2. Initiate User Addition: To add a single user, click on the "New User" option. This will open a wizard for adding a new user.
3. Enter User Information: In the wizard, enter all the necessary information about the user. This might include details like name, email, username, etc.
4. Choose User Groups: In the next step of the wizard, select the groups that you want the user to be a part of. These groups might determine the user's permissions and access rights.
5. Set Up Security Key: In the third step of the wizard, turn on the toggle for assigning a security key to the user.
6. Choose Security Key Type: You'll have three options for assigning a security key: Smartphone, Contactless Card, or FIDO2 Hardware Security Key.\
    a. Smartphone: If you choose **Smartphone**, you will set the smartphone as a FIDO security key. Confirm the user's information, and an activation link will be sent to the user. The user's status will be pending until they activate their security key.\
    b. Contactless Card: If you choose **Contactless Card**, set a name for it and choose how to activate it. You can activate it as an admin or let the user activate it themselves.\
    c. FIDO2 Hardware Security Key: If you choose **FIDO2 Hardware Security Key**, the user will receive a registration link to set up their hardware key.
7. Complete Security Key Assignment: Follow the specific instructions for the chosen security key type to complete the assignment process.
8. Confirmation: Once the security key is assigned successfully, click "Next" and "Confirm" to finalize the user's setup.
9. User Notification: The user will receive notifications based on the security key type they've been assigned. This might include an activation link, PIN, or registration link.
10. Usage: The assigned security key can now be used for passwordless logins based on the FIDO standard wherever it's available.

These steps outline how to add a single user and assign a security key based on the different options provided in your system. Remember to follow the specific instructions mentioned for each security key type to ensure a smooth process.

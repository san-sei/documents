---
title: "Assign security keys"
description: ""
lead: ""
date: 2023-09-11T13:45:01+03:30
lastmod: 2023-09-11T13:45:01+03:30
draft: false
images: []
menu:
  docs:
    parent: "users_and_security_keys_management"
weight: 303
toc: true
---

## Add a smartphone as a security key

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

## Add a contactless card as a security key

Steps for adding a Contactless Card as a Security Key:

1. Access Security Key Management: Click "Users" under Security Key Management section of admin panel to manage users.
2. Initiate User Addition: To add a single user, click on the "New User" option. This will open a wizard for adding a new user.
3. Enter User Information: In the wizard, enter all the necessary information about the user. This might include details like name, email, username, etc.
4. Choose User Groups: In the next step of the wizard, select the groups that you want the user to be a part of. These groups might determine the user's permissions and access rights.
5. Set Up Security Key: In the third step of the wizard, turn on the toggle for assigning a security key to the user.
6. Choose Contactless Card as Security Key: Select "Contactless Card" from the dropdown menu as the Security Key Device.
7. Name the Contactless Card: Set a name for the contactless card to identify it within the system.
8. Choose Activation Method: Depending on your proximity to the card and the user's involvement, choose how to activate the card.
    a. Activate Now as an Admin: If you have the card physically near you, choose this option. The card will be activated immediately.
    b. Activate by User: If the user needs to activate the card themselves, choose this option. A registration link will be sent to the user.
9. Complete Activation: Depending on the chosen activation method:
    a. Activate Now: If you chose to activate the card as an admin, click the "Assign Contactless Card" button. Tap the card on the reader when prompted to do so.
    b. Activate by User: If the user needs to activate the card themselves, inform them about the registration link. The user will need to follow the link and complete the activation process.
10. Reader Driver Installation: Make sure that you or the user has installed the necessary reader driver on the computer where the card will be used. If needed, you can download the driver from the provided link.
11. Confirmation: If the card is assigned and activated successfully, click "Next" and "Confirm" to finalize the assignment.
12. User Notification: The user will receive an email containing a PIN for their contactless card as a security key device. They will need this PIN to use the card for secure logins.

## Add your own hardware security key

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

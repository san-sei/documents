---
title: "Add_or_import_users"
description: ""
lead: ""
date: 2023-09-11T13:23:14+03:30
lastmod: 2023-09-11T13:23:14+03:30
draft: false
images: []
menu:
  docs:
    parent: "users_and_security_keys_management"
weight: 10
toc: true
---

## Add a single user

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

## Import users from a CSV file

Steps for importing users from a CSV file:

1. Access Security Key Management: Click Users under Security Key Management section of admin panel to manage users.
2. Initiate Import: Click on the "Import Users" button.
3. Select Import Source: Choose the option to "Import from a CSV File". This will open a wizard for importing users from a CSV file.
4. Upload CSV File: In the wizard, click on the "Select File" button to upload the CSV file containing the user data. Ensure that the CSV file is properly formatted with the required user information.
5. Choose User Groups: After uploading the CSV file, you might be asked to select the group(s) that you want the imported users to be added to. This is an opportunity to assign common permissions or attributes to the imported users.
6. Confirm Information: Review the information from the CSV file that is about to be imported. This is typically presented in a summary format for your confirmation.

> Ensure that the CSV file you're uploading adheres to the required format and includes all the necessary user information fields.

## Import users from Entra ID

Steps for importing users from Entra ID:

1. Access Security Key Management: Click Users under Security Key Management section of admin panel to manage users.
2. Initiate Import: Click on the "Import Users" button.
3. Select Import Source: Choose the option "Import from Entra ID". This will open a wizard for importing users from Entra ID.
4. Authorize Access: You might be prompted to grant permission for the application to access your Entra ID. Follow the prompts to provide the necessary permissions.
5. Select Entra ID Groups: Inside the wizard, there will be a dropdown menu where you can select Entra ID groups. Choose the groups from which you want to import users. The default is All AD groups.
6. Sync with existing users: If you previously imported users from Entra ID, you might need to check this box. If you do that, once you import users from Entra ID, users that already exist in your workspace with a matching email address will be updated by the syncing process
7. Confirm Information: Review the selected Entra ID groups and the information that will be imported. This is presented in a summary format for your confirmation.
8. Initiate Import: Once you're satisfied with the selected groups and information, click on the "Import" button to start the import process.
9. Import Progress: Importing users from the selected Entra ID groups will start and the process might take some time, depending on the number of users.
10. Completion: Once the import process is finished, you'll receive a notification of the imported users. This could include details about any errors or issues encountered during the import.

> Ensure that you have the necessary permissions to access Entra ID and that you select the appropriate Entra ID groups from which to import users.

## Import users with SCIM

To synchronize SSO SCIM with Entra ID, follow the steps below.

1. **Login to Entra ID:** Login to the admin Entra ID panel from here: <https://portal.azure.com/#home>, and click the **Entra ID**.
2. **Enterprise applications:** Go to **Enterprise applications**, and then click on the **New application**.
3. **Create your own new application:** Click on the **Create your own application**.
4. **Configure your own new application:** Fill fields of opened from as follow and then click **Create** button.
    - What's the name of your app?
    - IDmelon
    - What are you looking to do with your application?
    - Integrate any other application you don't find in the gallery (non-gallery)
5. **Provisioning:** In the opened page, click the **Get started** of the **Provision User Accounts** section.
6. **Provisioning:** on the next page, click the **Get started** from main again.
7. **Update credentials:** on the next page, first fill the fields of opened from as follow:
    - Provisioning mode
    - Automatic

    And next in the **Admin Credentials** section as follow:
    - Tenant URL
    - <https://sso.idmelon.com/api/scim/v2/>
    - Secret Token
    - PASTE THIS VALUE FROM IDMELON PANEL

    And Click **Test connection** to check the connection to **IDmelon** is successful. Then click **Save**.
8. **Attribute mapping:** Expand the **Mapping** section and click on **Provision Entra ID Users**.
Here is the markdown code for your text:
9. **User attribute mapping:** Update values of the following main attributes and then click **Save**.
| Entra ID Attribute | customappsso Attribute | Matching precedence |
| ------------------ | ---------------------- | ------------------- |
| objectId           | externalId             | 1                   |
| Switch([IsSoftDeleted], , "False", "True", "True", "False") | active |  |
| displayName        | displayName            |                     |
| userPrincipalName  | emails[type eq "work"].value |  |
| objectId           | userName               |                     |
| givenName          | name.givenName         |                     |
| surname            | name.familyName        |                     |
| Join(" ", [givenName], [surname]) | name.formatted |  |
10. **Group attribute mapping:** From the **Mapping** section, click on **Provision Entra ID Groups**. Update values of the following main attributes and then click Save.
| Entra ID Attribute | customappsso Attribute | Matching precedence |
| ------------------ | ---------------------- | ------------------- |
| objectId           | externalId             | 1                   |
| displayName        | displayName            |                     |
| members            | members                |                     |
11. **User attribute mapping - advance options:** Expand the **Mapping** section and click on **Provision Entra ID Users** and check the **Show advanced options**. Update the values as the picture below and then click **Save**.

<p align="center">
    <img src="/images/vendor/add_or_import_users/Picture1.png" alt="Picture1" />
</p>

12. **Group attribute mapping - advance options:** Expand the **Mapping** section and click on **Provision Entra ID Groups** and check the **Show advanced options**. Update the values as picture below and then click **Save**.

<p align="center">
    <img src="/images/vendor/add_or_import_users/Picture2.png" alt="Picture2" />
</p>

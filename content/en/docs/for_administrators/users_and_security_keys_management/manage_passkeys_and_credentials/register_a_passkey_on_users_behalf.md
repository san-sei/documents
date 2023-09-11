---
title: "Register a passkey on users' behalf"
description: ""
lead: ""
date: 2023-09-11T13:50:05+03:30
lastmod: 2023-09-11T13:50:05+03:30
draft: false
images: []
menu:
  docs:
    parent: "manage_passkeys_and_credentials"
weight: 20
toc: true
---

## Automatic provisioning for Entra ID

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

### Prerequisites for Azure User Provisioning

<hr class="hr-line">

This feature helps administrators register their users' security keys on their accounts on their behalf, so the users can immediately use the security keys to access their accounts without any registration efforts.

### RP Provisioning

Azure user provisioning can be done in two ways: automatically or manually. Right now, the automatic method is still in the preview phase, but it offers a big advantage by saving you the trouble of manually registering a credential for multiple users. In the rest of this document, we'll guide you through the steps for both automatic and manual user provisioning in Microsoft.

> To register Microsoft credentials for users, you should start by importing your users from Azure AD following the instructions provided in this guideline: [Import from Azure AD](../administration/enrollment.md/#import-from-azure-ad).

### Automated RP Provisioning

After importing users from Azure AD, you can easily register a Microsoft credential for a user by following these simple steps:

1. Go to **Security Key Management** and click on the **Users** menu.

2. Select the checkbox next to a non-*new user* (ensure the user has been imported from Azure AD).

    > By non-new user we simply mean the target user should be assigned a passkey security key, but activation in the IDmelon Admin Panel is not necessary.

3. Once the user is checked, click on **Automated RP Provisioning** in the action bar above the table.

4. In the dialog that opens, choose **Microsoft** and click the **Submit** button.

Once you've completed these steps, you'll see a loading bar at the top of the page indicating the status of your request. Please be patient as the process may take a few seconds to a couple of minutes.

> **Notice:** The automated process is still in preview. If it fails, don't worry, just try again. We are continuously working to make the process faster and more reliable.

### Manual RP Provisioning

<hr class="hr-line">

#### Prerequisite

Before you begin the manual RP provisioning process, make sure you have completed the following steps:

1. Install the **Pairing Tool Software** on your PC. You can download it from [here](https://idmelon.com/docs/downloads).

2. Enable **Temporary Access Pass** for your Azure AD workspace. This should be enabled for all users or at least for the ones you want to register on their behalf. For more details, refer to [this link](https://learn.microsoft.com/en-us/azure/active-directory/authentication/howto-authentication-temporary-access-pass).

3. Note that when an IDmelon administrator imports users from Azure AD for the first time, they will be required to log in to Azure to grant necessary permissions. The admin who performs this action cannot provision themselves in IDmelon because Azure restricts this action. For example, if the email used for importing users is [michael@sunstore.ca](mailto:michael@sunstore.ca), this user cannot be provisioned from the IDmelon Panel.

4. The target user should be assigned a passkey security key, but activation in the IDmelon Admin Panel is not necessary.

#### Steps to Perform

Follow these steps to manually register a Microsoft credential for a user:

1. Go to **Security Key Management** and click on the **Users** menu.

2. Click on a user that you have previously imported from Azure AD to access the user's details page.

3. From the top of the page, choose **Automated RP Provisioning**.

4. Select **Microsoft** and check the **Manual** checkbox.

5. Follow the instructions provided to complete the manual RP provisioning process.

## Manual provisioning by connecting to a user’s security key

### Except Entra ID, to register credentials manually on behalf of a user on any other RP, follow the steps below:

1. Access Security Key Management: Go to the Security Key Management section.
2. Navigate to Users: Click on the Users menu within the Security Key Management section.
3. Select User for Manual RP Provisioning: Click on a user that you want to create credential on his behalf.
4. Initiate RP Provisioning: From the top of the user's details page, choose "Connect to register passkeys". Now it is like the selected users’ security key is attached to your PC.
5. Register on user’s behalf: You can now register credentials on user’s behalf anywhere you want.
6. Completion: Once you've completed the provisioning process, disconnect the user by choosing the same button on top of user’s details page.

Before starting the provisioning process, ensure you've completed the prerequisites such as installing the Pairing Tool Software.

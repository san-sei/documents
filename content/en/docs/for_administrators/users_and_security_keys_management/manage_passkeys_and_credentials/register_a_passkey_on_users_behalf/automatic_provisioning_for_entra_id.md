---
title: "Automatic provisioning for Entra ID"
description: ""
lead: ""
date: 2023-09-20T13:57:08+03:30
lastmod: 2023-09-20T13:57:08+03:30
draft: false
images: []
menu:
  docs:
    parent: "register_a_passkey_on_users_behalf"
weight: 312.1
toc: true
---

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

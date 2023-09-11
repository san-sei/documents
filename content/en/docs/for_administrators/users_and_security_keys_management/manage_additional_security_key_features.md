---
title: "Manage additional security key features"
description: ""
lead: ""
date: 2023-09-11T15:10:54+03:30
lastmod: 2023-09-11T15:10:54+03:30
draft: false
images: []
menu:
  docs:
    parent: "users_and_security_keys_management"
weight: 60
toc: true
---

## Disable activities logs

### These are the steps to disable activity logs for a user:

1. **Log In:** Start by logging in to the administration panel.
2. **Access User Detail View:** Navigate to the "Security Key Management" section and locate the "Users" section. Find and click on the user's email address (username) to access their detailed view.
3. **Edit User Information:** Inside the user detail view, look for the edit icon, represented by a pencil icon. Click on this icon to initiate editing mode.
4. **Uncheck Auditable Option:** While in editing mode, find the "Auditable" checkbox. Uncheck this option to indicate that you no longer want to log activities for this user.
5. **Save Changes:** After unchecking the "Auditable" option, make sure to save your changes by clicking the "OK" button.

By following these steps, you'll successfully disable activity logs for the selected user. This means that their security key-related activities, such as registrations and logins, will no longer be logged or tracked.

## Disable offline access

### Here are the steps to enable or disable the offline login option for a user’ security key in their detail view:

1. Log In: Start by logging in to the administration panel.
2. Access User Detail View: Navigate to the **Security Key Management** section and find the **Users** section. Click on the user's email address (username) to access their detail view.
3. Locate Offline Login Option: Inside the user's detail view, locate the **Action** column. In this column, you'll find an option related to enabling or disabling offline login. This option is usually represented by a switch or checkbox.
4. Access Security Keys Tab: Within your user detail view, locate and click on the tab labeled **Security Keys**.
5. Enable or Disable Offline Login: Click on the actions (three dot icon) for the security key you want to enable offline login option. Select **Enable Offline Login** option.
6. Save Changes: After making your selection to enable or disable offline login, remember to save your changes by clicking the **Save** button.

By following these steps, you can easily enable or disable the offline login option for the selected user. This feature allows the user to utilize their security key for offline logins for a limited number of times within a specified timeframe, providing flexibility and security for scenarios where internet connectivity might be temporarily unavailable.

## FIDO2 Client PIN Complexity

### Here are the steps to set the PIN complexity in workspace settings:

1. **Access Workspace Settings:** Log in to the administration panel and locate their workspace settings area using your administrative credentials.
2. **Navigate to Workspace Settings Section:** Under the "Settings" section, locate and click on the "Workspace Settings" section.
3. **Navigate to PIN Complexity Section:** Inside the workspace settings, look for the box labeled "PIN Complexity".
4. **Configure PIN Complexity Items:** Within the "PIN Complexity" section, you'll find a set of configuration items that determine the complexity requirements for PINs. These items include the following options:\
    a. Require digits\
    b. Require special characters\
    c. Require lowercase letters\
    d. Require uppercase letters\
    e. Maximum PIN length\
    f. Minimum PIN length
5. **Modify Configuration:** Review the default configuration of each item. To modify any of these configuration items, click on the corresponding option. For example, if you want to require uppercase letters in PINs, click the "Require uppercase letters" checkbox.
6. **Save Changes:** After making your desired changes to the PIN complexity configuration, remember to save your changes by clicking the **Save** button. This action applies the new configuration settings to the creation of PINs going forward.
7. **Generate PINs:** Going forward, the system will generate PINs for users based on the updated configuration settings. For example, if you've enabled the requirement for uppercase letters, the system will ensure that generated PINs include at least one uppercase letter.

By following these steps, you can set up the PIN complexity requirements in your workspace settings. These requirements help enhance the security of PINs by ensuring that they meet specific complexity criteria, as defined by the administrator.

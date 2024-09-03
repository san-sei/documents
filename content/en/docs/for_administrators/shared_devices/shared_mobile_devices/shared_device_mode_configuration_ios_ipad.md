---
title: "Shared iOS/iPadOS Devices"
description: ""
lead: ""
date: 2023-09-20T15:19:33+03:30
lastmod: 2023-09-20T15:19:33+03:30
draft: false
images: []
menu:
  docs:
    parent: "shared_mobile_devices"
weight: 62100
toc: true
---

Shared mobile devices are widely used across many industries, including manufacturing and retail. IDmelon Authenticator can be configured in shared device mode, enabling users to use their badge or biometric factors to load passkeys or passwords into the device instantly. This allows users to access multiple applications with auto-login. The session time-to-live can be configured to support various shift change use cases with auto logout.

**IDmelon Authenticator Shared Configuration Mode Features**<br>

- **Passkeys Autofill** (or passwords for legacy devices)
- **MSAL Configuration** to streamline access to Microsoft apps
- **SSO Integration**
- **JAMF Configuration** (can be configured with Jamf Setup and Jamf Reset app)

## Shared Device Mode Configuration Using Jamf

**Jamf** is a trusted solution for managing iPads in various organizations, including businesses, schools, and hospitals. With over 70,000 customers, Jamf provides robust iPad management capabilities.

### Prerequisites

- To use the shared iPad feature, the OS version of iPads must be **17 or later**.
- IDmelon Authenticator app must be added to **Jamf Pro**. In case you are having issues with that, contact **Jamf Support**.

### How to Configure

1. Configure **General**, **Scope** and **Self-Service** according to your organization's policies.
2. Select the **App Configuration** tab from the menu, enter the following configuration as shown in the image below, and then click the **Save** button.

```xml
<dict>
  <key>shared_device_passkeys</key>
  <true/>
  <key>authentication_type</key>
  <string>onInit</string>
  <key>device_id</key>
  <string>$UDID</string>
  <key>api_key</key>
  <string>[API_KEY]</string>
</dict>
```

**Generate a New API Key:**

The API Key is required to activate IDmellon Authenticator automatically when it is run for the first time. Therefore, there would be no need for manual activation to connect to the organization.<br>
To generate a new API Key, take the following steps:

- Sign in to the [IDmelon Admin Panel](https://panel.idmelon.com).
- Navigate to **Workspace > Settings > API Key Management**.
- Select **Create**.
- Set a name.
- Set the type to **Shared Mobile**.
- Copy and replace the generated key with the **API_KEY** value in the app configuration, which can be found in the previous section [How to configure](#how-to-configure).

***Note**: The value of the **authentication_type** depends on the **Card Verification Method** that your organization's admins have set in the IDmelon admin panel.*

**Allowed values for authentication_type:**

- **onInit**: User is required to enter PIN once only after tapping the card on a reader.
- **onUse**: User is required to enter PIN for each login.
- **none**: The login process is done without entering any PIN (PINless mode).

![Jamf Panel](/images/vendor/shared_ipads/jamf_panel_app_config.png)
Finally, you should see the **IDmelon Authenticator** app in the Mobile Device Apps.
![Jamf Panel](/images/vendor/shared_ipads/jamf_panel_added_app.png)

### Connect to the Organization

After adding the IDmelon Authenticator to the Jamf Pro panel, the application will be available on iPads as shown in the image below (or it can be installed through **Self Service** app).
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_idmelon_app.PNG)

Once the IDmelon Authenticator app opens, the activation process will be completed automatically.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_shared_device_mode.PNG)
If everything goes well, you will see the following view.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_tap_card.PNG)

### End User Experience

The login steps are as follows: at the beginning of the shift, an employee will first log in with their card, and at the end of the shift, by exiting the application, everything will be ready for the next person.

1. Open the **IDmelon Authenticator**.
2. Get close to the reader and tap your card on it.
3. According to the **Card Verification Method** set in the IDmelon admin panel, if PIN is required, enter it. Otherwise, go to the next step.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_enter_pin.PNG)
4. In case of successful login, user information will be displayed. At this stage, move the app to the background.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_logged_in.PNG)
5. Open the **Jamf Setup** app and tap on the **Sign In** button.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_jamf_setup.PNG)
6. Select the **Sign-in options**.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_ms_authenticator1.PNG)
7. Select the **Face, fingerprint, PIN or security key**.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_ms_authenticator2.PNG)
8. Tap the **Continue**.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_passkey.PNG)
9. If the login operation is successful, you will see the following view, which can be different depending on your configuration in Jamf.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_jamf_setup_logged_in.PNG)

**Logout Experience**<br>

At the end of the shift, first, open the **IDmelon Authenticator** and then tap the logout icon on the top right corner of the app. Your user information and existing passkeys will be deleted from the iPad.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_logout.PNG)

If **Soft Reset** is enabled in **Jamf Reset**, to completely log out of all your accounts, first open one of the Microsoft applications (for example, MS Teams) and log out of it. After that, all your sessions and cookies will be completely deleted.

## Shared Device Mode Configuration Using Intune

Microsoft Intune is a cloud-based endpoint management solution. It manages user access to organizational resources and simplifies app and device management across your many devices, including mobile devices, desktop computers, and virtual endpoints.

### Prerequisites

- To use the shared iPad feature, the OS version of iPads must be **17 or later**.

### How to Configure

1. Navigate to **Apps > iOS/iPadOS**.
![MS Intune](/images/vendor/shared_ipads/intune_panel_apps.png)
2. Click the **Add** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_apps_add.png)
3. Select **iOS store app** as the **App type** and click the **Select** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_apps_search.png)
4. Click the **Search the App Store**.
![MS Intune](/images/vendor/shared_ipads/intune_panel_apps_search_appstore.png)
5. Search for the **IDmelon Authenticator** app and click the **Select** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_apps_idmelon.png)
6. Select **iOS 17.0** as the **Minimum operation system** and click the **Next** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_app_minimum_os.png)
7. Configure the **Assignments** tab according to your organization's policies.
![MS Intune](/images/vendor/shared_ipads/intune_panel_app_assignments.png)
8. Review the configurations you set and click the **Create** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_app_review.png)
9. Navigate to **Apps > App configuration policies**, click the **+ Add**, and then **Managed devices**.
![MS Intune](/images/vendor/shared_ipads/intune_panel_configuration_policies.png)
10. Set a **Name**, select the **iOS/iPadOS** as the Platform, and **IDmelon Authenticator** as the **Targeted app**, then click the **Next** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_configuration_policies_app.png)
11. In the **Settings** tab, select the **User configuration designer** as the **Configuration settings format**, Enter values for the XML property list as below, and click the **Next** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_configuration_policies_configurtion_keys.png)
| Configuration key      | Value type  | Configuration value  |
|------------------------|-------------|----------------------|
| shared_device_passkeys | Boolean     | true                 |
| authentication_type    | String      | onInit               |
| device_id              | String      | {{deviceid}}         |
| api_key                | String      | [API_KEY]            |

**Generate a New API Key:**

The API Key is required to activate IDmellon Authenticator automatically when it is run for the first time. Therefore, there would be no need for manual activation to connect to the organization.<br>
To generate a new API Key, take the following steps:

- Sign in to the [IDmelon Admin Panel](https://panel.idmelon.com).
- Navigate to **Workspace > Settings > API Key Management**.
- Select **Create**.
- Set a name.
- Set the type to **Shared Mobile**.
- Copy and replace the generated key with the **API_KEY** value in the app configuration, which can be found in the table of the 11th step in the previous section.

**Allowed values for authentication_type:**<br>
    - **onInit**: User is required to enter PIN once only after tapping the card on a reader.<br>
    - **onUse**: User is required to enter PIN for each login.<br>
    - **none**: The login process is done without entering any PIN (PINless mode).<br><br>
12. Configure the **Assignments** tab according to your organization's policies, and click the **Next** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_configuration_policies_assignments.png)
13. Review the configurations you set and click the **Create** button.
![MS Intune](/images/vendor/shared_ipads/intune_panel_configuration_policies_review.png)

**Connect to the Organization:**

To set up the IDmelon Authenticator as the organization's shared device, Follow the steps similar to the link below.

[Connect to the Organization](#connect-to-the-organization)

### End User Experience

The login steps are as follows: at the beginning of the shift, an employee will first log in with their card, and at the end of the shift, by exiting the application, everything will be ready for the next person.

*Note: If you use Microsoft applications (MS Teams, PowerBI, etc …), the **Microsoft Authenticator** app must be added and configured as shared device mode*.

[Config MS Authenticator as shared device mode](https://www.petervanderwoude.nl/post/getting-started-with-shared-device-mode-for-ios-devices/#Configuring-the-Microsoft-Authenticator-app-for-iOS-devices-with-shared-device-mode)

1. Open the **IDmelon Authenticator**.
2. Get close to the reader and tap your card on it.
3. According to the **Card Verification Method** set in the IDmelon admin panel, if PIN is required, enter it. Otherwise, go to the next step.
![Authenticator](/images/vendor/shared_ipads/shared_ipad_enter_pin.PNG)
4. In case of successful login, user information will be displayed. At this stage, move the app to the background.
![Authenticator](/images/vendor/shared_ipads/shared_ipad_logged_in.PNG)
5. Open the app you want to log in with the passkey (e.g. MS Teams), tap the paste icon on the top left corner of the keyboard, and tap the **Next**.
![MS Teams](/images/vendor/shared_ipads/msteams_login_page.PNG)
6. Tap the **Next**.
![MS Teams](/images/vendor/shared_ipads/msteams_login_with_passkey.PNG)
7. Tap the **Continue**.
![MS Teams](/images/vendor/shared_ipads/shared_ipad_msteams_passkey.PNG)

**Logout Experience**<br>

1. Open the app you logged into, and log out of the account.
2. Open the **IDmelon Authenticator** and then tap the logout icon on the top right corner of the app. Your user information and existing passkeys will be deleted from the iPad.
![Authenticator](/images/vendor/shared_ipads/shared_ipad_logout.PNG)

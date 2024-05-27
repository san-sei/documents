---
title: "Manage Shared Tablet/iPad"
description: ""
lead: ""
date: 2023-09-20T15:19:33+03:30
lastmod: 2023-09-20T15:19:33+03:30
draft: false
images: []
menu:
  docs:
    parent: "device_management"
weight: 62000
toc: true
---

Shared mobile devices refer to mobile devices, such as tablets or iPads, that have been designated as shared resources among users. These devices are configured to enable users to log in to them using their ID badges or contactless cards through the IDmelon Authenticator app. This approach allows multiple users to access and utilize these shared devices for authentication purposes, enhancing convenience and security in scenarios where a single device is used by multiple individuals.

## Jamf-Managed iPads

**Jamf** is a trusted solution for managing iPads in various organizations, including businesses, schools, and hospitals. With over 70,000 customers, Jamf provides robust iPad management capabilities.

## Prerequisites

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
</dict>
```

***Note**: The value of the **authentication_type** depends on the **Card Verification Method** that your organization's admins have set in the IDmelon admin panel.*

#### Allowed values for authentication_type:

- **onInit**: User is required to enter PIN once only after tapping the card on a reader.
- **onUse**: User is required to enter PIN for each login.
- **none**: The login process is done without entering any PIN (PINless mode).

![Jamf Panel](/images/vendor/shared_ipads/jamf_panel_app_config.png)
7. Finally, you should see the **IDmelon Authenticator** app in the Mobile Device Apps.
![Jamf Panel](/images/vendor/shared_ipads/jamf_panel_added_app.png)

### Activate IDmelon Authenticator

After adding the IDmelon Authenticator to the Jamf Pro panel, the application will be available on iPads as shown in the image below (or it can be installed through **Self Service** app).
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_idmelon_app.PNG)

***Note**: The activation steps should be taken only once by the admin.*

1. Open the app and then select **Setup as the organization's shared device**.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_add_company.PNG)
2. Enter an admin's email address.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_setup_profile.PNG)
3. Select **Verify with code** and enter the code sent to the admin's email.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_verify_email.PNG)
4. After confirming the code, if everything went correctly, you will see the following view.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_tap_card.PNG)

Once the activation steps are completed, the iPad will be ready to use.

### End User Login Experience

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

### End User Logout Experience

At the end of the shift, first, open the **IDmelon Authenticator** and then tap the **logout** button on the top right corner of the app. Your user information and existing passkeys will be deleted from the iPad.
![Shared iPad](/images/vendor/shared_ipads/shared_ipad_logout.PNG)

If **Soft Reset** is enabled in **Jamf Reset**, to completely log out of all your accounts, first open one of the Microsoft applications (for example, MS Teams) and log out of it. After that, all your sessions and cookies will be completely deleted.

## Manage Shared Mobile Devices

Having taken the previous steps, admins can now use IDmelon admin panel to see the list of the activated iPads and manage them. For this, follow these steps:

1. Log in to the IDmelon admin panel and navigate to the **Devices** section.
2. Under the **Devices** section, locate and click on the **Shared Mobile Devices** section. This is where you can manage the mobile devices that have been designated as shared resources.
3. Once inside the **Shared Mobile Devices**, you will see a list of the mobile devices that have been configured for shared usage. Each device entry includes details such as **Device Name**, its **Platform**, the **Creator** (the user that added the device as a shared device) and **Creation Date** (the date that the device has been added).

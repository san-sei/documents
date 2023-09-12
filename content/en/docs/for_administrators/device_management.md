---
title: "Device Management"
description: ""
lead: ""
date: 2023-09-11T11:42:36+03:30
lastmod: 2023-09-11T11:42:36+03:30
draft: false
images: []
menu:
  docs:
    parent: "for_administrators"
weight: 60
toc: true
---

## Import your devices from Entra ID

Steps to import devices from Entra ID:

1. **Access Device Management:** Log in to the admin panel of your system and navigate to the "Device Management" section. This is the area where you manage devices and their associated settings.
2. **Import Entra ID-Connected Devices:** Click on **AD Connected Computers** under the "Device Management" section, and then locate and click on the button labeled "Import Entra ID-Connected Devices." This action initiates the process of importing devices that are already joined to Entra ID.
3. **Choose Account:** After clicking on "Import Entra ID-Connected Devices," you will be prompted to choose the Entra ID account that you want to connect to your system.
4. **Sign-In (if needed):** Depending on the configuration and security settings, you might need to sign in to your Entra ID account for authentication purposes. This step ensures that you have the necessary permissions to access and import devices.
5. **Redirection:** Once you've selected the Entra ID account and completed any required sign-in steps, you will be redirected back to your admin panel.
6. **View Added Devices:** In the admin panel, navigate to the "AD Connected Computers" section under "Device Management." Here, you will find the devices that you've successfully imported from Entra ID.

By following these steps, you'll be able to seamlessly import devices from Entra ID into your system. This functionality is particularly useful for scenarios where you want to leverage Entra ID-connected devices for various purposes, such as defining security key policies to control access to specific devices. Keep in mind that you might need to provide the necessary permissions and authentication to establish the connection between IDmelon admin panel and Entra ID.

## Manage shared tablet/iPad

Shared mobile devices refer to mobile devices, such as tablets or iPads, that have been designated as shared resources among users. These devices are configured to enable users to log in to them using their ID badges or contactless cards through the IDmelon authenticator app. This approach allows multiple users to access and utilize these shared devices for authentication purposes, enhancing convenience and security in scenarios where a single device is used by multiple individuals.

To manage shared mobile devices in the admin panel, follow these steps:

### Managing Shared Mobile Devices:

1. **Access Device Management:** Log in to the admin panel and navigate to the "Device Management" section.
2. **Navigate to Shared Mobile Devices Section:** Under the "Device Management" section, locate and click on the "Shared Mobile Devices" section. This section is where you can manage the mobile devices that have been designated as shared resources.
3. **View Shared Mobile Devices:** Once inside the "Shared Mobile Devices" section, you will see a list of the mobile devices that have been configured for shared usage. Each device entry includes details such as device name, its platform, the creator (the user that added the device as a shared device) and creation date (the date that the device has been added).

Remember that the process of designating a mobile device as shared begins from the device itself, using the IDmelon authenticator app. By utilizing the "Shared Mobile Devices" section in the admin panel, you can effectively manage the devices that have been designated as shared resources. This functionality enhances the flexibility of authentication within your system, providing users with the convenience of using shared devices while maintaining security through their ID badges or contactless cards.

## Manage non-Entra ID devices for [AD domain logon](https://learn.microsoft.com/en-us/windows/win32/ad/domain-user-accounts/)

IDmelon implemented the IDmelon FIDO Credential Provider (FCP) service to address a specific limitation in On-premise Active Directory environments. PCs on On-premise Active Directory traditionally lack the native ability to log in using security keys, which can be a more secure and convenient method of authentication. To overcome this limitation and enable security key-based logins for such devices, IDmelon introduced the FCP solution. Here are the overall steps to manage non-Entra ID devices for AD domain logon using IDmelon FCP (for technical details about the deployment of IDmelon FCP, refer to [here](https://idmelon.com/docs/for_administrators/windows_passwordless_deployment/nonentra_id_local_and_onpremise_domain_logon/)):

### Managing Non-Entra ID Devices for AD Domain Logon:

1. **Access Device Management:** Begin by logging in to the admin panel and navigate to the "Device Management" section.
2. **Navigate to IDmelon Connected Computers:** Within the "Device Management" section, find and click on the "IDmelon Connected Computers" section. This section is specifically for managing the On-premise Active Directory PCs that will be configured for login using security keys through IDmelon FCP.
3. **View Connected Computers:** Inside the "IDmelon Connected Computers" section, you will see a list of the On-premise Active Directory PCs that have been configured for login using security keys.
4. **Get Configuration:** Look for the "Get Configuration" button, usually located within this section. Clicking this button generates a configuration file that needs to be added to any On-premise Active Directory PC that you want to use for authentication using security keys.
5. **Apply Configuration to PCs:** For each PC on the On-premise Active Directory that you want to enable for login using security keys, add the configuration file obtained from the "Get Configuration" button.
6. **Enable User Authentication:** To enable a user to log in with a security key on the configured PCs:
    - Go to the "Security Key Management" section in the admin panel.
    - Navigate to the "Users" section and select the user you want to enable.
    - In the user's detailed view, go to the "Credentials" tab.
    - Click the "+ AD Domain Logon" button.
    - Provide the user's Active Directory username and password. This is done once to enable the use of their security key for login on the configured PCs.

By following these steps, you can effectively manage non-Entra ID devices for AD domain logon using IDmelon FCP. This approach allows On-premise Active Directory PCs to use security keys for authentication. The "IDmelon Connected Computers" section helps you list and manage these PCs, and the "Get Configuration" button provides the configuration file needed to enable the use of IDmelon FCP on the PCs. Additionally, enabling users for AD domain logon with security keys involves configuring their credentials through the "Security Key Management" section in the admin panel. The exact interface and terminology may vary based on your specific platform, so referring to your system's documentation or seeking guidance from your administrator is recommended for accurate instructions.

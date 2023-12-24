---
title: "Manage non-Entra ID devices for AD domain logon"
description: ""
lead: ""
date: 2023-09-20T15:21:23+03:30
lastmod: 2023-09-20T15:21:23+03:30
draft: false
images: []
menu:
  docs:
    parent: "device_management"
weight: 73000
toc: true
---

IDmelon implemented the IDmelon FIDO Credential Provider (FCP) service to address a specific limitation in On-premise Active Directory environments. PCs on On-premise Active Directory traditionally lack the native ability to log in using security keys, which can be a more secure and convenient method of authentication. To overcome this limitation and enable security key-based logins for such devices, IDmelon introduced the FCP solution. Here are the overall steps to manage non-Entra ID devices for AD domain logon using IDmelon FCP (for technical details about the deployment of IDmelon FCP, refer to [here](/docs/for_administrators/windows_passwordless_deployment/nonentra_id_local_and_onpremise_domain_logon)):  

## Managing Non-Entra ID Devices for AD Domain Logon:  

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

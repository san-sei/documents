---
title: "Common conditions (signals)"
description: ""
lead: ""
date: 2023-09-11T15:15:37+03:30
lastmod: 2023-09-11T15:15:37+03:30
draft: false
images: []
menu:
  docs:
    parent: "conditional_access_for_security_keys"
weight: 402
toc: true
---

## Time of use

The "Time of use" condition in security key policies refers to a rule that restricts the usage of security keys to specific time periods. This means that users will only be able to use their security keys to access a system or application during designated time frames, and access will be denied outside of those defined periods.

For example, let's say an organization's security policy includes a "Time of use" condition that allows users to use their security keys for authentication only between 9:00 AM and 6:00 PM on weekdays. Outside of this time range, users attempting to authenticate using their security keys will be denied access. This can be particularly useful for ensuring that security key-based authentication is limited to working hours or other predetermined time periods, effectively reducing the risk of unauthorized access during off-hours.

Implementing a "Time of use" condition can help organizations enhance security by preventing access to critical systems during times when there might be reduced monitoring or higher risk of unauthorized usage. However, it's important to strike a balance between security and user convenience, as overly restrictive time-based policies could impact legitimate users who require access outside of regular hours.

In summary, the "Time of use" condition within security key policies is a tool to control when users are allowed to use their security keys for authentication, adding an extra layer of security to the overall access control strategy.

## Security key device

The "Security Key Device" condition in security key policies pertains to setting rules and restrictions based on the type of security key device that a user is using for authentication. This condition allows administrators to specify different access rules depending on whether a user is authenticating with a smartphone or a contactless card. By tailoring security key policies to the type of device being used, organizations can achieve a more granular and adaptable approach to access control.

By configuring security key policies based on the "Security Key Device" condition, administrators can ensure that the level of access granted aligns with the security considerations associated with each type of security key device. This approach also allows organizations to adapt their security measures based on the risk profile associated with different devices, providing a flexible yet controlled access environment.

In summary, the "Security Key Device" condition in security key policies enables organizations to set specific rules and restrictions based on whether users are authenticating with smartphones or contactless cards, tailoring the access control approach to the unique characteristics and security considerations of each device type.

## Target computer name

The "Target Computer" condition in security key policies refers to the ability to set rules and restrictions based on the specific computer or device from which a user is attempting to authenticate using their security key. This condition allows administrators to control and customize access based on the originating device, adding an extra layer of security and control to the authentication process.

Here's how the "Target Computer" condition works within security key policies:

- Device Identification: Each device, such as a computer or workstation, has a unique identifier (name) that can be recognized by the system. This identifier is used to differentiate one device from another.
- Access Control: With the "Target Computer" condition, administrators can configure policies that dictate whether or not a user can access a particular computer or an RP using their security key from a particular computer. 
- Enhanced Security: By implementing policies based on the "Target Computer" condition, organizations can enhance security by ensuring that users can only access approved computers or RPs from approved computers. This prevents unauthorized access from/to computers that are not recognized or trusted.
- Use Cases: For instance, an organization might configure a policy that allows users to authenticate using their security key only from computers that are within the company's physical premises or within the corporate network. This way, even if a user's security key is compromised, the potential for unauthorized access is limited to approved computers.

In summary, the "Target Computer" condition within security key policies enables organizations to set access rules and restrictions to/from computer which a user is attempting to authenticate. This approach provides an additional layer of security by ensuring that only approved computers can be used for secure access, enhancing control over authentication processes.

## Target computer IP

The "Target Computer IP" condition in security key policies allows administrators to set rules and restrictions based on the specific IP address of the computer or device from which a user is attempting to authenticate using their security key. This condition adds an extra layer of security by controlling access based on the IP address of the device.

Here's how the "Target Computer IP" condition works within security key policies:

- IP Address Identification: Each device connected to a network is assigned a unique IP address. This address identifies the device's location on the network and is used to route data to and from the device.
- Access Control: With the "Target Computer IP" condition, administrators can configure policies that determine whether a user can access the system using their security key from a specific IP address or range of IP addresses.
- Enhanced Security: By implementing policies based on the "Target Computer IP" condition, organizations can enhance security by ensuring that users can only access RPs from approved IP addresses. 
- Use Cases: For example, an organization might set a policy that allows users to authenticate using their security key only when they are within a company's specific office or network. This restricts access to devices located within trusted environments.

In summary, the "Target Computer IP" condition within security key policies enables organizations to define access rules and restrictions based on the IP address of the device from which a user is trying to authenticate. This approach adds an additional layer of security by ensuring that only approved IP addresses can be used for secure access, enhancing control over authentication processes.

## Relying party (or web)

The "Relying Party" condition in security key policies allows administrators to set rules and restrictions based on the specific relying party (RP) that a user is trying to access using their security key. This condition enables organizations to control access to different RPs.

Here's how the "Relying Party" condition works within security key policies:

- Understanding Relying Parties: In the context of authentication, a relying party (RP) is a web application or service that requests user authentication from an identity provider. The RP relies on the identity provider to authenticate users before granting access to its resources.
- Access Control: With the "Relying Party" condition, administrators can configure policies that determine whether a user's security key can be used to access specific relying parties.
- Enhanced Security: By implementing policies based on the "Relying Party" condition, organizations can enhance security by ensuring that users can only use their security key to access approved RPs.
- Use Cases: For example, an organization might configure a policy that allows users to authenticate using their security key for some RPs, but not for all the available ones.

In summary, the "Relying Party" condition within security key policies empowers organizations to set access rules and restrictions based on the specific RP that a user is attempting to access. This approach adds a contextual layer of security by ensuring that users can only use their security key for approved RPs, contributing to a more customized and secure authentication experience.

## Geographical information

The "Geographical Information" condition in security key policies allows administrators to set rules and restrictions based on the geographical location from which a user is attempting to authenticate using their security key. This condition adds an additional layer of security by controlling access based on the physical location of the user.

Here's how the "Geographical Information" condition works within security key policies:

- Geographical Information: This refers to the physical location of the user attempting to authenticate. Geographical information will be determined based on GPS coordinates of user’s smartphone.
- Access Control: With the "Geographical Information" condition, administrators can configure policies that dictate whether a user can access the system using their security key from specific geographical locations or ranges.
- Enhanced Security: By implementing policies based on the "Geographical Information" condition, organizations can enhance security by ensuring that users can only access systems or applications from approved geographical locations.
- Use Cases: For example, an organization might set a policy that allows users to authenticate using their security key only when they are within the company's physical office (around the company’s building) or within a physical boundary of a specific city (the city that the company’s office is located in). This restricts access to devices located within trusted areas.

In summary, the "Geographical Information" condition within security key policies enables organizations to define access rules and restrictions based on the physical location of the user. This approach adds an extra layer of security by ensuring that only approved geographical locations can be used for secure access, enhancing control over authentication processes.

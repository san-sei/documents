---
title: "Device Management"
description: "Azure connected PCs and other devices such as smartphones and contactless cards."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 13
toc: true
---

Two types of devices can be managed inside administration panel. The first type includes devices connected to Azure Active Directory (AD)
which can be imported into the administration panel and can be used for multiple purposes like device limitation when adding security key policies.
The second type includes security key devices which consist of any devices that users set as their security keys.

## Azure AD connected devices

Reach out to this section if you want to import already-joined PCs from Azure AD.
The imported PCs can later be used in “Security Key Policies” to limit access to specific devices.
To join and list Azure AD connected PCs, the only required step is providing enough permission.

<p align="center">
    <img src="/images/vendor/Panel/DeviceManagement1.png">
</p>

<p align="center">
    <img src="/images/vendor/Panel/DeviceManagement2.png">
</p>

## Security key devices

This section lists devices that users have set as their security keys which contains smartphones or Contactless Cards.
An admin can delete a device which disconnects its corresponding security key.

<p align="center">
    <img src="/images/vendor/Panel/devicemanagemnet_security.png">
</p>

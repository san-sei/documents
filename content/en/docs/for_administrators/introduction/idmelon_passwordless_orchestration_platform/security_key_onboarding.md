---
title: "Security key onboarding"
description: ""
lead: ""
date: 2023-09-11T12:43:32+03:30
lastmod: 2023-09-11T12:43:32+03:30
draft: false
images: []
menu:
  docs:
    parent: "idmelon_passwordless_orchestration_platform"
weight: 12000
toc: true
---

## Import and integrate with Entra ID with auto provisioning  

Most organizations utilize Entra ID as a core tool for managing their users and resources. Incorporating functionalities like importing user and device data to the panel, as well as offering automated provisioning of credentials on their behalf, significantly simplifies the process of implementing an authentication system for all organizations.  

Also, user provisioning is really useful when new employees are hired and onboarded into an organization, for which the IT team creates new accounts and enables them to access the organization’s resources. It also facilitates companies' passwordless authentication adoption. IT administrators first import users from Microsoft Entra ID to IDmelon Admin Panel, assign security keys to them, and then add the security keys as a sign-in option to their accounts rather than delegate the final step to them.  

Automated user provisioning is the method of granting access to accounts within an organization, through automated practices. When a user is added to IDmelon Admin Panel through Microsoft Entra ID import, with automated user provisioning both admins and the user skip the step of adding a security key to the user’s Microsoft account.  

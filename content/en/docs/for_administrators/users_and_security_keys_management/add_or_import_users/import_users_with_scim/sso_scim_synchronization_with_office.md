---
title: "SSO SCIM Synchronization with Entra ID"
description: ""
lead: ""
date: 2023-09-20T13:36:09+03:30
lastmod: 2023-09-20T13:36:09+03:30
draft: false
images: []
menu:
  docs:
    parent: "import_users_with_scim"
weight: 31410
toc: true
---

This document is about SSO SCIM synchronization with Azure Active Directory.

Step 1 - Login to azure
-----------------------

Login to the admin azure panel from here:  https://portal.azure.com/#home ,
    and click the `Enterprise applications`.

![alt](/images/vendor/scim/azure/01.png){width=600}

Step 2 - Enterprise applications
--------------------------------

From the `All appliacations` menu, click to the `New application` .

![alt](/images/vendor/scim/azure/02.png){width=600}

Step 3 - Create your own new application
----------------------------------------

Click on the `Create your own application`.

![alt](/images/vendor/scim/azure/03.png){width=600}

Step 4 - Configure your own new application
----------------------------------------

Fill fields of opened from as:

* What's the name of your app?
  * IDmelon
* What are you looking to do with your application?
  * Integrate any other application you don't find in the gallery (Non-gallery)

And then Click `Create` button.

![alt](/images/vendor/scim/azure/04.png){width=600}

Step 5 - Provisioning
---------------------

In the opened page, click the `Get started` of the `Provision User Accounts` section.

![alt](/images/vendor/scim/azure/05.png){width=600}

Step 6- Provisioning
--------------------

And then in the next page, click the `Get started` from main again.

![alt](/images/vendor/scim/azure/06.png){width=600}

Step 7 - Update credentials
---------------------------

And then in the next page, fill fields of opened from as:

* Provisioning mode
  * Authomatic

And in the `Admin Credentials` section:

* Tenant URL
  * https://sso.idmelon.com/api/scim/v2/

* Secret Token
  * PASTE THIS VALUE FROM IDMELON PANEL

And click `Test connection` to check the connection to `IDmelon` is successful.

Then click `Save`.

![alt](/images/vendor/scim/azure/07.png){width=600}

Step 7 - Update Settings
------------------------

Based on your situation, change the Scope to `Sync all users and groups`

![alt](/images/vendor/scim/azure/08.png){width=600}

Step 8 - User Attribute mapping
-------------------------------

Expand the `Mapping` section and click on `Provision Microsoft Entra ID Users`

![alt](/images/vendor/scim/azure/09.png){width=600}

Step 9 - User attribute mapping - advance options
--------------------------------------------------

In the `Attribute Mappings` section, check the `Show advanced options` option,
and then click on the `Edit attribute list for customappsso`:

![alt](/images/vendor/scim/azure/10.png){width=600}

Add a new `immutableId` field based as picture and below table and then click the `Save`.

![alt](/images/vendor/scim/azure/11.png){width=600}

| Name                                                                 | Type   |
|----------------------------------------------------------------------|--------|
| urn:ietf:params:scim:schemas:extension:IDmelon:2.0:User:immutable_id | String |

Step 10 - User attribute mapping
--------------------------------

Back to the `Attribute Mappings` section, and from the default list, apply these two changes and then click the `Save`.

- Change the  `objectId` field by clicking on the `Edit` button.
- Add `immutableId` field by clicking the `Add New Mapping`.

| customappsso Attribute  | Microsoft Entra ID Attribute                                          | Matching precedence |
|-------------------------|-----------------------------------------------------------------------|---------------------|
| objectId                | externalId                                                            |                     |
| immutableId             | urn:ietf:params:scim:schemas:extension:IDmelon:2.0:User:immutable_id  |                     |

![alt](/images/vendor/scim/azure/12.png){width=600}
![alt](/images/vendor/scim/azure/13.png){width=600}
![alt](/images/vendor/scim/azure/14.png){width=600}
![alt](/images/vendor/scim/azure/15.png){width=600}

Step 11 - Group Attribute mapping
---------------------------------

Expand the `Mapping` section and click on `Provision Microsoft Entra ID Group`

![alt](/images/vendor/scim/azure/16.png){width=600}

Step 12 - Group attribute mapping - advance options
---------------------------------------------------

In the `Attribute Mappings` section, check the `Show advanced options` option,
and then click on the `Edit attribute list for customappsso`:

![alt](/images/vendor/scim/azure/17.png){width=600}

Add a new `description` field based as picture and below table and then click the `Save`.

![alt](/images/vendor/scim/azure/18.png){width=600}

| Name           | Type   |
|----------------|--------|
| description    | String |

Step 13 - Group attribute mapping
---------------------------------

Back to the `Attribute Mappings` section, and from the default list, apply this change and then click the `Save`.

- Add `description` field by clicking the `Add New Mapping`.

| customappsso Attribute  | Microsoft Entra ID Attribute | Matching precedence |
|-------------------------|------------------------------|---------------------|
| objectId                | externalId                   |                     |

![alt](/images/vendor/scim/azure/19.png){width=600}
![alt](/images/vendor/scim/azure/20.png){width=600}
![alt](/images/vendor/scim/azure/21.png){width=600}


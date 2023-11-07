---
title: "SSO SCIM Synchronization with Intra ID"
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

Login to the admin azure panel from here:  <https://portal.azure.com/#home> ,
    and click the `Azure Active Directory`.

![alt](/images/vendor/scim/azure/01.png)

![alt](/images/vendor/scim/azure/02.png)

Step 2 - Enterprise applications
--------------------------------

Go to the `Enterprise applications`, and then click to the `New application` .

![alt](/images/vendor/scim/azure/03.png)

Step 3 - Create your own new application
----------------------------------------

Click on the `Create your own application`.

![alt](/images/vendor/scim/azure/04.png)

Step 4 - Configure your own new application
----------------------------------------

Fill fields of opened from as:

* What's the name of your app?
  * IDmelon
* What are you looking to do with your application?
  * Integrate any other application you don't find in the gallery (Non-gallery)

And then Click `Create` button.

![alt](/images/vendor/scim/azure/05.png)

Step 5 - Provisioning
---------------------

In the opened page, click the `Get started` of the `Provision User Accounts` section.

![alt](/images/vendor/scim/azure/06.png)

Step 6- Provisioning
--------------------

And then in the next page, click the `Get started` from main again.

![alt](/images/vendor/scim/azure/07.png)

Step 6 - Update credentials
---------------------------

And then in the next page, fill fields of opened from as:

* Provisioning mode
  * Authomatic

And in the `Admin Credentials` section:

* Tenant URL
  * <https://sso.idmelon.com/api/scim/v2/>
  
* Secret Token
  * PASTE THIS VALUE FROM IDMELON PANEL

And click `Test connection` to check the connection to `IDmelon` is successful.

Then click `Save`.

![alt](/images/vendor/scim/azure/08.png)

Step 7 - Attribute mapping
---------------------------

Expand the `Mapping` section and click on `Provision Azure Active Directory Users`

![alt](/images/vendor/scim/azure/09.png)

Step 8 - User attribute mapping
------

Update the values as pictures and then click the `Save`.

The main attributes are:

| Azure Active Directory Attribute                            | customappsso Attribute       | Matching precedence |
|-------------------------------------------------------------|------------------------------|---------------------|
| objectId                                                    | externalId                   | 1                   |
| Switch([IsSoftDeleted], , "False", "True", "True", "False") | active                       |                     |
| displayName                                                 | displayName                  |                     |
| userPrincipalName                                           | emails[type eq "work"].value |                     |
| objectId                                                    | userName                     |                     |
| givenName                                                   | name.givenName               |                     |
| surname                                                     | name.familyName              |                     |
| Join(" ", [givenName], [surname])                           | name.formatted               |                     |

![alt](/images/vendor/scim/azure/10.png)

![alt](/images/vendor/scim/azure/11.png)

Step 9 - Group attribute mapping
--------------------------------

From the `Mapping` section, click on `Provision Azure Active Directory Groups`

![alt](/images/vendor/scim/azure/12.png)

Step 10 - Group attribute mapping
---------------------------------

Update the values as picture and then click the `Save`.

The main attributes are:

| Azure Active Directory Attribute                            | customappsso Attribute        | Matching precedence |
|-------------------------------------------------------------|-------------------------------|---------------------|
| objectId                                                    | externalId                    | 1                   |
| displayName                                                 | displayName                   |                     |
| members                                                     | members                       |                     |

![alt](/images/vendor/scim/azure/13.png)

Step 11 - User attribute mapping - advance options
--------------------------------------------------

Expand the `Mapping` section and click on `Provision Azure Active Directory Users`
and check the `Show advanced options` option:

![alt](/images/vendor/scim/azure/14.png)

Update the values as picture and then click the `Save`.

![alt](/images/vendor/scim/azure/15.png)

Step 12 - Group attribute mapping - advance options
--------------------------------------------------

Expand the `Mapping` section and click on `Provision Azure Active Directory Groups`
and check the `Show advanced options` option:

![alt](/images/vendor/scim/azure/16.png)

Update the values as picture and then click the `Save`.

![alt](/images/vendor/scim/azure/17.png)

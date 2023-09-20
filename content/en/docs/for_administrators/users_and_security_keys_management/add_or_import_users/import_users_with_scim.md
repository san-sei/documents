---
title: "Import users with SCIM"
description: ""
lead: ""
date: 2023-09-20T13:36:09+03:30
lastmod: 2023-09-20T13:36:09+03:30
draft: false
images: []
menu:
  docs:
    parent: "add_or_import_users"
weight: 31400
toc: true
---

To synchronize SSO SCIM with Entra ID, follow the steps below.

1. **Login to Entra ID:** Login to the admin Entra ID panel from here: <https://portal.azure.com/#home>, and click the **Entra ID**.
2. **Enterprise applications:** Go to **Enterprise applications**, and then click on the **New application**.
3. **Create your own new application:** Click on the **Create your own application**.
4. **Configure your own new application:** Fill fields of opened from as follow and then click **Create** button.
    - What's the name of your app?
    - IDmelon
    - What are you looking to do with your application?
    - Integrate any other application you don't find in the gallery (non-gallery)
5. **Provisioning:** In the opened page, click the **Get started** of the **Provision User Accounts** section.
6. **Provisioning:** on the next page, click the **Get started** from main again.
7. **Update credentials:** on the next page, first fill the fields of opened from as follow:
    - Provisioning mode
    - Automatic

    And next in the **Admin Credentials** section as follow:
    - Tenant URL
    - <https://sso.idmelon.com/api/scim/v2/>
    - Secret Token
    - PASTE THIS VALUE FROM IDMELON PANEL

    And Click **Test connection** to check the connection to **IDmelon** is successful. Then click **Save**.
8. **Attribute mapping:** Expand the **Mapping** section and click on **Provision Entra ID Users**.
Here is the markdown code for your text:
9. **User attribute mapping:** Update values of the following main attributes and then click **Save**.
| Entra ID Attribute | customappsso Attribute | Matching precedence |
| ------------------ | ---------------------- | ------------------- |
| objectId           | externalId             | 1                   |
| Switch([IsSoftDeleted], , "False", "True", "True", "False") | active |  |
| displayName        | displayName            |                     |
| userPrincipalName  | emails[type eq "work"].value |  |
| objectId           | userName               |                     |
| givenName          | name.givenName         |                     |
| surname            | name.familyName        |                     |
| Join(" ", [givenName], [surname]) | name.formatted |  |
10. **Group attribute mapping:** From the **Mapping** section, click on **Provision Entra ID Groups**. Update values of the following main attributes and then click Save.
| Entra ID Attribute | customappsso Attribute | Matching precedence |
| ------------------ | ---------------------- | ------------------- |
| objectId           | externalId             | 1                   |
| displayName        | displayName            |                     |
| members            | members                |                     |
11. **User attribute mapping - advance options:** Expand the **Mapping** section and click on **Provision Entra ID Users** and check the **Show advanced options**. Update the values as the picture below and then click **Save**.
![user attribute mapping](/images/vendor/add_or_import_users/user_attribute_mapping.png)
12. **Group attribute mapping - advance options:** Expand the **Mapping** section and click on **Provision Entra ID Groups** and check the **Show advanced options**. Update the values as picture below and then click **Save**.
![group attribute mapping](/images/vendor/add_or_import_users/group_attribute_mapping.png)

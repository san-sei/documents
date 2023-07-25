---
title: "Partner Panel"
description: ""
lead: ""
date: 2022-07-25T18:14:02-08:00
lastmod: 2022-07-25T18:14:02-08:00
draft: false
images: [ ]
menu:
  docs:
    parent: "administration"
weight: 15
toc: true
---

The partner panel gives the administrator the possibility to be aware of her customers and have control over some of
their activities.
The workspace tab under customers in the menu has 6 columns: **Create**, **Company Name**, **Billing Period**,
**Security keys**, **Disable button** and **Delete Workspace**

* **Create:** Workspace creation time
* **Company Name:** The name of the company.
* **Billing Period:** Displays the billing period.
* **Security keys:** Displays the total number of security keys.
* **Disable button:** on clicking disable button, a modal should open which asks ‘How many security keys do you want to
  disable?’ By default, it displays the number of active security keys, and it is possible to disable active devices.
* **Delete:** It is possible to delete the workspace.

<img src="/images/vendor/Panel/partner_panel_1.png" style="display: block; margin: 0 auto;"/>

#### Partner panel features:

* The partner can see the workspaces that are registered through the link.
* How many customers have been added?
* Who are the customers?
* How many facilities does the customer use?
* Can limit the client's workspace (for example, not to have more than 10 active security keys).
* It is possible to check the invoice using the customer's security keys.
* The partner can see the number of users of the client's workspace for the current month.
* How many smartphones or context cards have you used in the last month?

#### How to have a partner panel?

1. Creating a business workspace (refer to the
   link [Creating a workspace](https://docs.idmelon.com/docs/administration/createworkspace/))
2. Changing Business Workspace to Workspace Partner by IDmelon admin.
3. Now, if you log in to Workspace, the panel environment has changed to a partner panel.

#### Workspace details:

By clicking on Name of each company, the details of the workspace will be displayed, which has several parts:

<img src="/images/vendor/Panel/partner_panel_2.png" style="display: block; margin: 0 auto;"/>

##### Company Info:

**Company URL:** The URL of the workspace is displayed.
\
**Date of Creation:** When was the workspace created?

##### Current Billing Period:

**Security key Devices:** How many devices does the current invoice have?
\
**Contactless Cards:** How many devices are Contactless Cards?
\
**Smartphones:** How many devices are smartphones?
\
**SSO:** Enable or disable SSO.

##### General Settings:

* **Usage Limit:**

  1. Restrict security key usage
  2. Limit the number of security keys\
     For example, if the user limit is set to 5, that client cannot activate more than 5 users, and if it has more than
     that,
     the rest will be disabled.


* **Email Notification:**
  1. Send daily email when new security key added
  2. Email billing reports monthly

##### History:

* **Billing Period:**\
  The date of the last invoice and the number of devices is displayed.

#### Profile info:

Includes profile basic information and Registration URL.
The admin provides this link to the customers, and the customers register by clicking on the link. After completing the
registration, this customer's workspace will be added to the partner's customer list.

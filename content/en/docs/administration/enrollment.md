---
title: "Users and Security Keys"
description: "Adding users to IDmelon"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 5
toc: true
---

When signed in to the administration panel, you are able to manage users and security keys from this section.
The first step is to add a single user or import users in bulk from Azure AD or a CSV file. In case of adding them one by one, you can assign a security key to the user at the same time.

<p align="center">
    <img src="/images/vendor/Panel/users&securitykeys.png" class="doc-img-frame">
</p>

## Add single user

<hr class="hr-line">

At the top left, choose “New User -> Add a user” to open the wizard below.

Enter the user’s information and click Next.

<p align="center">
    <img src="/images/vendor/Panel/addnewuser.png" class="doc-img-frame">
</p>

Choose group, and click Next. If no group is selected, the group “Everyone” will be chosen by default.

<p align="center">
    <img src="/images/vendor/Panel/addnewusergp.png" class="doc-img-frame">
</p>

As you can see the image below, you can turn the toggle on if you want to assign a security key now. If you turn the toggle on, you will have 3 options to assign a security key, the first is to choose [Smartphone](#smartphone), the second is [Contactless card](#contactless-card) and the third is [Hardware security keys](#hardware-security-keys). You can see the specified instructions in related sections.

<p align="center">
    <img src="/images/vendor/Panel/addnewuserskdev.png" class="doc-img-frame">
</p>

### Smartphone

Turn the toggle on and choose Smartphone from the dropdown below as Security Key Device.

From the “Smartphone Assignment” segment, you can define the security key specifications.

Click the Next button to see the confirmation page.

<p align="center">
    <img src="/images/vendor/Panel/addnewusersmph.png" class="doc-img-frame">
</p>

By clicking the Confirm button on this page, an email containing an activation link will be sent to the user’s email address. The user’s status will be changed to “Pending” waiting for the user to activate their security key.

<p align="center">
    <img src="/images/vendor/Panel/addnewuserconfirm.png" class="doc-img-frame">
</p>

### Contactless Card

Choose “Contactless Card” in “Security Key Device” if you want to assign a Contactless Card to the user.

From “Choose how to activate” dropdown, you can either choose “Activate now” as an admin if you have the contactless card physically near you or “Activate by user” if the card is not with you. In case of “Activate by user”, the targeted user will receive an email containing a link to register the contactless card themself.

<p align="center">
    <img src="/images/vendor/Panel/addnewusercontactlesscard.png" class="doc-img-frame">
</p>

In case of “Active now”, simply click the “Assign Contactless Card” button to see the window “Touch your security key”, and then tap your card on Reader to register.

<p align="center">
    <img src="/images/vendor/Panel/assignclesscard.png" class="doc-img-frame">
</p>

**Note**:In either case, make sure the compatible reader is installed on your PC or end-user’s PC. Download and install rfIDEAS driver from [here](#https://idmeloncom-my.sharepoint.com/personal/hassan_idmelon_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fhassan%5Fidmelon%5Fcom%2FDocuments%2FDevelopment%2FReleases%2FAccesskey%2FAccesskeySetup1%2E1%2E18%5FrfIDEAS%2Eexe&parent=%2Fpersonal%2Fhassan%5Fidmelon%5Fcom%2FDocuments%2FDevelopment%2FReleases%2FAccesskey&ga=1) if you are using rfIDEAS reader.

Finally, the image below shows the card is assigned successfully. Click Next and Confirm to complete the assignment. The user will then receive an email containing
a PIN for the security key.

<p align="center">
    <img src="/images/vendor/Panel/contaclessassigned.png" class="doc-img-frame">
</p>

### Hardware Security Keys

<p align="center">
    <img src="/images/vendor/Panel/addnewuserhwsec.png" class="doc-img-frame">
</p>

## Import from a CSV file

<hr class="hr-line">

At the top left, click **Import users -> Import from a CSV fil** to open the wizard below.

Then click “Select” to choose and upload a CSV file from which you want to import users.
Click Next.

<p align="center">
    <img src="/images/vendor/Panel/importftomCSV.png" class="doc-img-frame">
</p>

On this page, you can choose which group you want these users to be added to.
If you do not choose any group, the "everyone group" will be selected by default.
And then, click Next.

<p align="center">
    <img src="/images/vendor/Panel/gruopforCSV.png" class="doc-img-frame">
</p>

When you see the below page, you can click "Confirm" to add all the users.

<p align="center">
    <img src="/images/vendor/Panel/confirmCSVusers.png" class="doc-img-frame">
</p>

## Import from Azure AD

<hr class="hr-line">

At the top left, click **Import users -> Import from Azure AD** to open the wizard below.

Then click **Select Group(s)** which is placed under **Groups in Azure AD**, and you can see a list of groups.
You can select as many groups as you want in order to import their users from Azure AD.

<p align="center">
    <img src="/images/vendor/Panel/import_user_azure_1.png" class="doc-img-frame">
</p>

In this page, you can see the groups that you have selected. You can edit the selected groups by clicking on the pencile icon on the top right of the box.
Click on **Confirm** to add users of the groups that you have choosen.

<p align="center">
    <img src="/images/vendor/Panel/import_user_azure_2.png" class="doc-img-frame">
</p>

---
title: "Quick Guide for Azure AD Passwordless Deployment"
description: ""
lead: ""
date: 2024-01-27T15:00:00+03:30
lastmod: 2024-01-27T15:00:00+03:30
draft: false
images: []
menu:
  docs:
    parent: "for_administrators"
weight: 15000
toc: true
---

This document will show you how to deploy the IDmelon solution from A to Z. Please follow the instructions step by step and make sure no step is skipped. The following steps are documented for the workspace admins. For further assistance at any time, please contact support@idmelon.com. Furthermore, a chatbot which will connect you with our team is available on the top right of the admin panel.

![alt](/images/vendor/deployment_overview/1.jpg)

## Prerequisites

- Enabling FIDO security keys from the Azure Portal.

- Installing the following apps or drivers according to what type of security keys (either smartphone or contactless card) you choose to use. The downloadable items can be found here.

### Smartphone as a Security Key

#### Single User Devices

- Install the IDmelon Authenticator app on your smartphone,

- Install the IDmelon Pairing Tool on your computer,

- Pair your phone with computer using both apps,

- As soon as a security key is assigned to you over the admin panel, your phone will receive a notification each time you want to log in. Approving it will log you in.

#### Shared Devices

- Install the IDmelon Authenticator app on your smartphone,

- Purchase the IDmelon Reader and plug it into a USB port on your computer

- As soon as a security key is assigned to you over the admin panel, you can tap your phone on the Reader to log in.

### ID Badge as a Security Key

- Depending on the type of reader you have, install the adequate reader driver on your computer,

- Plug your reader into your computer,

- Once a security key is assigned to you over the admin panel, you can tap your card on the reader to log in.

## Step 1: Creating the Workspace

1. Go to [https://idmelon.com/](https://idmelon.com/) and click on the "Sign Up" button on the top left.

2. Click "Work or School", and enter your business email, name and last name.

3. Check your email for the verification code and enter the code.

4. Name your workspace.

5. When the "creating security key" page comes up, you can either set the security key right now or skip and do it later:

    If you want to set it up right now:

      - **For Smartphone:** Select the smartphone option and scan the QR code on the screen with the IDmelon Authenticator app. Make sure you have completed the prerequisite steps.

      - **For ID Badge:** Select contactless card option and tap your card on the reader. Make sure you have completed the prerequisite steps.

    If you don't want to add a security key right away, you can skip this step for the time being and sign in to the admin panel using your email for your first sign-in and add a security key then.

## Step 2: Adding Users to the Workspace

You can add users in different ways:

1. The “New User” button on the top right of the “Users” section is one option. To see this page, go to “Security Key Management” (on the side menu on the left) => “Users”

2. Second option is bulk import. Next to the “New User” button of the same page, you can see the “Import Users” Option. Under the Import Users button, there are 3 options: you can import users from a CSV file, Azure AD (Microsoft Entra ID), or Azure SCIM. For further help on these, please reach out to support@idmelon.com

Using the second option will automatically import the users and you will be able to view them on “Security Key Management” (on the left) => “Users”

## Step 3: Assigning Security Keys to Users (One by One)

From the Users page, you can see the security keys that have been assigned to users. Green coloured security keys mean the security key is assigned, while amber means it is pending.
**In order to assign a security key to a user (one by one) the following steps have to be completed, assuming that the adequate downloadable items discussed in the prerequisites have been installed.**

**1. To assign a Smartphone as a security key to a user:**
Select the user and click on the key icon on the top or click the user’s name and then click “New Device”. And then select Smartphone and confirm.
The user will receive an email which contains the “Activate” button. The user must open the email on the smartphone that they will be using as a security key. Clicking the “Activate” button will take the user to the IDmelon Authenticator app, where they should click “Approve”, and they will be good to use the security key.

**2. To assign an ID Badge as a security key to a user:**
Select the user and click on the key icon on the top or click to the user’s name and then click “New Device”. Select Contactless Card and confirm. From here, there are two methods: activating now or activating by user.

If you have the contactless card with you, select “Activate Now”, tap the card on your reader and tap confirm. You will see a randomly generated PIN, and the PIN will be sent via an email as well.

If “Activate by User” is selected, the user will receive an email with a “Register” button. All they have to do is tap their card after pressing that button.

## Step 4: Assigning Security Keys to Users in Bulk

It is possible to match users with security keys. This is possible in a scenario where users already have ID Badges, HID badges for instance, in their hands and the organization is adopting IDmelon. It would be difficult to call in every user or send them an activation email to onboard, so it is possible to match the users and badges by uploading a CSV file.

This file should include the “user principal name”, which is the email of the user (Required), HID badge numbers (Required), their names, (optional) phone numbers, (optional) and which should be known by the IT. Once this file is uploaded, the users will be assigned the cards they already have as FIDO security keys and will receive a PIN to start using them.

## Step 5: Registering Credentials for Users

Once the steps above are followed and users have their security keys, it is possible for them to log into the IDmelon panel and Windows machines. In order to start signing into other web applications, it is necessary to add credentials to user. As an example, this guide will tell you how to add Microsoft credentials into IDmelon. There are two ways for this. One manual and one automated.

- **The first way to add IDmelon to Microsoft 365**

![alt](/images/vendor/deployment_overview/2.jpg)

Once this step is done, the user can log in to their account by IDmelon. Every single user in the organization has to do this step to be able to log in into 365 using IDmelon.

- **The second and easier method to add IDmelon to Microsoft**

Use Automated RP Provisioning. This can only be done if the user has been imported from Azure AD.

If a user if imported from Azure AD, the provisioning can be done and the credential would be added automatically. To do this, contact the IDmelon team to get help with this.

## Step 6: Managing Security Keys

IDmelon Admin Panel gives complete control over security keys to admins. Admins are able to view security key activities, add/restrict/delete security keys and users.

On the “Users” page, by clicking to the clock icon on the right of a user, it is possible to see all logins of that user, which security key they used and which website they logged into. From the top right of the same page, it is possible to edit, suspend or delete the user.

To manage the security keys, the admins should click on the user’s email from the “Users” section. After clicking on the three dots under “Action”, the admin can edit, delete, suspend or change the PIN of that specific security key.

From the “Groups” tab above, you can see which groups that user belongs to, “Policies” shows what policies have been assigned to that user, and “Credentials” shows which credentials of the user are enrolled in IDmelon.

## Step 7: Creating Security Policies

It is possible to create security key policies and assign to specific users and groups

![alt](/images/vendor/deployment_overview/3.jpg)

In order to create one, click the “New Policy” button on top right and follow these steps:

1. Name your policy and set a priority.

2. Select what type of security keys this policy should apply to.

3. Select which users or groups this policy should apply to from “Users and Groups.”

4. Create time limitations from the “Time limits” (optional).

5. Create IP and RP restrictions from the tabs below by clicking to the + sign next to them. (optional).

6. Restrict access from specific locations and devices form the tabs below. (optional). And click next.

7. Select if these actions should be blocked or allowed, and then confirm.

8. You can edit or delete the policies from the same tab.

## Step 8: Using the “Password Filler” Option (Optional) (Only for Cards)

For applications that don’t support FIDO2 or SSO, it is possible to use the password filler option. In order to use this, there are some pre-requisites. If you think that your organisation is using an application that needs the password filler, please reach out to us to confirm with you.

A if this is a web application, Chrome browser should be used, and “[IDmelon Web Login](https://chromewebstore.google.com/detail/idmelon-weblogin/eagmgpbjpedchliifpgfgogdknnmkaej)” should be installed., regardless of the application type.

Once this step is done, go to the IDmelon Admin Panel > Go to your own account > Go to the “passwords” tab > Add Password > Choose the application type > if it is a web application put in your credentials, if it is a web application copy and paste link of the login page of the website and then your credentials.

Once these steps are done, you should get a user experience as [in this video](https://idmeloncom-my.sharepoint.com/personal/hassan_idmelon_com/_layouts/15/stream.aspx?sw=bypass&bypassReason=abandoned&id=%2Fpersonal%2Fhassan%5Fidmelon%5Fcom%2FDocuments%2FMarketing%2FVideos%2FPassword%20Autofill%20with%20Badge%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview&ga=1&ClientRender=1).

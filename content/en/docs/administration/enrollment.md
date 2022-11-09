---
title: "Users and Groups Management"
description: "Adding users to IDmelon"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 240
toc: true
---

When signed in to the administration panel, you are able to manage users and security keys from this section.

The first step is to add a single user or import users in bulk from Azure AD or a CSV file. In case of adding them one by one, you can also assign a security key to the user at the same time.

{{< figure src="/images/vendor/Panel/User1.png">}}

## Adding a user with smartphone

From the action button at the top, choose “New User -> Add a user” to open the wizard below.
{{< figure src="/images/vendor/Panel/User2.png">}}

Enter the user’s information and press **Next**.
{{< figure src="/images/vendor/Panel/User3.png">}}

Choose group, and press Next. If no group is selected, the group “Everyone” will be chosen by default.
{{< figure src="/images/vendor/Panel/User4.png">}}

You can turn the toggle on if you want to assign a security key now. Turn the toggle on and choose **Smartphone** from the dropdown below in **Security Key Device**.
{{< figure src="/images/vendor/Panel/User5.png">}}

From the **Smartphone Assignment** segment, you can define the security key specifications.
By pressing the **Next** button and then **Confirm** on the next page, an email containing an activation link will be sent to the user’s email address.
{{< figure src="/images/vendor/Panel/User6.png">}}

The user’s status will be changed to **Pending** waiting for user to activate their security key. As soon as they do, the status will be turned into **Active**.

### End-user guide for smartphone use

The user will receive an activation email right after being invited by an admin. In this email, all the user is asked to do is just to

- install IDmelon Authenticator app from [App Store](https://apps.apple.com/ca/app/idmelon/id1511376376) of [Google Play](https://play.google.com/store/apps/details?id=com.vancosys.authenticator.business&hl=en_CA&gl=US);
- and activate their security key by opening the activation link on their smartphone;

to complete the activation process. When activated, the user needs to download and install [IDmelon Pairing Tool](https://www.idmelon.com/download/) to pair their smartphone with a dedicated PC.

NOTE In a shared PC environment, each PC needs an [IDmelon Reader](https://www.idmelon.com/idmelon-reader/) instead to provide a smooth Tap and Login experience.

## Adding a user with a contactless card

Choose **Contactless Card** in **Security Key Device** if you want to assign a contactless card to the user.
{{< figure src="/images/vendor/Panel/User7.png">}}

From **Choose how to activate** dropdown, you can either choose **Activate now** as an admin if you have the contactless card physically near you or **Activate by user** if the card is not with you. In case of **Activate by user**, the targeted user will receive an email containing a link to register the contactless card themself.

In case of **Active now**, simply click the **Assign Contactless Card** button to see the window **Touch your security key** in next window, and then tap your card on Reader to register.
{{< figure src="/images/vendor/Panel/User8.png">}}

Important Note In either case, make sure the compatible reader is installed on your PC or end-user’s PC. Download and install rfIDEAS driver from [here](https://idmeloncom-my.sharepoint.com/:u:/g/personal/hassan_idmelon_com/EURzGLDsaAhHhoBKw3cKQlwB9y3cOMHUEvCtVlugh1TDwQ?e=7ZLdNw) if you are using rfIDEAS reader.
The below picture shows the card assigned successfully. Click **Next** and **Confirm** to complete the assignment. The user will then receive an email containing the security PIN for the security key.
{{< figure src="/images/vendor/Panel/User9.png">}}

## From a CSV or Connecting to Azure AD

Bulk button allows you to import users from a CSV file or via a connection to Azure AD.

{{< figure src="/images/vendor/Panel/bulk.png">}}

Note that while you are adding a user or users to your workspace, you can assign a security key or security keys by turning on the “Assign a security key to user” toggle key:

{{< figure src="/images/vendor/Panel/toggle.png">}}

When you turn off the above-mentioned toggle key, the user(s) won’t receive the invitation email(s) until you later assign them a security key. [Assign a Security Key →](https://docs.idmelon.com/docs/administration/securitykeymgmt/)

You can also enclose an additional note with the invitation email to the user:

{{< figure src="/images/vendor/Panel/note.png">}}

## User's Status

As soon as you add a user to your workspace but you do not assign a security key to the user, the user’s status in the All Users entry will turn into **Not Invited**, But, immediately after assigning a security key to the user, the user’s status will become **Invited** while the Security Key status in the Users’ Security Keys entry will remain **Pending** until the user receives the invitation email to activate their security key.

Immediately after security key activation on the user’s smartphone, the status turns into **Active**:

{{< figure src="/images/vendor/Panel/active.png">}}

## On Behalf Registration

- Open the Pairing Tool, and press Ctrl + I and choose Login as an Admin.
- It will redirect you to the admin panel where you need to login.
- When you are successfully signed in, you will see the status in Pairing tool has changed to “Ready for on behalf registration”. This means, for any users that are already added/activated in the IDmelon panel, you are able to login on their behalf and register a security key for them.
- Pick a user from the list, choose “Select as OBR” to see the user is marked with the sign “OBR” on the panel.
- Now, when you try to add a security key to an account such as Microsoft account, the registration request will appear on the smartphone of the user whom you have earlier picked/marked from the list.
- In case the security key type is Cloud HSM, the whole process will be silent. But in case the security type is “On Smartphone”, the target user will receive a notification to confirm the action.

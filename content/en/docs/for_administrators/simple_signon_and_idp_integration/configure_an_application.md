---
title: "Configure an Application"
description: "Configuring an application to use IDmelon IdP for single sign on"
lead: ""
date: 2023-12-15T23:05:00+03:30
lastmod: 2023-12-15T23:05:00+03:30
draft: false
images: []
menu:
  docs:
    parent: "simple_signon_and_idp_integration"
weight: 5
toc: true
---

You can connect IDmelon as a IDP to any service provider supported by SAML.

By default, settings for common service providers have been added.

If your service provider is not in that list, you can connect it by creating a custom integration.

## Configure an Application

Follow the steps below to create a custom integration:

Go to the `App Management` section under `Simple Sign-On`.

![alt](/images/vendor/sso/custom/custom_01.png)

Click on `Integrate with a new app`, Then click on `Create a custom integration`.

![alt](/images/vendor/sso/custom/custom_02.png)

Fill in the required fields in the `APP Profile` section,

Choose a desired name for the `Name` field.

Then click `Next`.

![alt](/images/vendor/sso/custom/custom_03.png)

Enter the requested information in the `App Settings` section.

For the `Entity ID` field, enter the value provided by your service provider.

Match the values of `Assertion Consumer Service Binding` and `Single Logout Service Binding` with your service provider.

Enter the value provided by your service provider for the `Assertion Consumer Service` field.

Match the `Name Id Format` value with your service provider.

Fill `Required Attributes` field , the valid values are `email` and `username`.

Upload the public certificate corresponding to your service provider for the `Public Certificate` field.

Upload the metadata corresponding to your service provider for the `Metadata` field.

Click `Next`.

![alt](/images/vendor/sso/custom/custom_04.png)
![alt](/images/vendor/sso/custom/custom_05.png)

In the `App Attributes Mapping` section, add the required fields for mapping attributes.

The valid values for the `IDP variable name` section are:

- `email`
- `surname`
- `given_name`
- `full_name`
- `group`

Click `Confirm`.

![alt](/images/vendor/sso/custom/custom_06.png)

Now, from the `Simple Sign-on` menu, click on `App Management`.

Then, from the list of applications, select the created application and click on `Edit`.

![alt](/images/vendor/sso/custom/custom_07.png)

In the `General Settings` section, information related to `IdP Entity ID` and `IdP Single Sign-on URL` is displayed.
You need to enter these values in your service provider.

![alt](/images/vendor/sso/custom/custom_08.png)

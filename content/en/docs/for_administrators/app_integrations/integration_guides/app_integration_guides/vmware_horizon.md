---
title: "VMware Horizon"
description: ""
lead: ""
date: 2025-02-17T17:58:15+03:30
lastmod: 2025-02-17T17:58:15+03:30
draft: false
images: []
menu:
  docs:
    parent: "idp_integration_guides"
weight: 72600
toc: true
---

In this document you are going to set up `IDmelon` as an external IdP to the `VMware Horizon`.

## Server Connection Server

---

In order to set up the connection, you will need to go into your `Servers` in Setting part of menu.

![alt](/images/vendor/sso/vmware_horizon/vmware_01.png)

In the `Connection Servers`, a list of servers is available. Select a server and click on `Edit`.

![alt](/images/vendor/sso/vmware_horizon/vmware_02.png)

## Create Identity Provider

Then from the `Authentication` tab, change `Delegation of authentication to VMware Horizon(SAML 2.0 Authenticator)` to `Allow`.

Then click on `Manage SAML Authenticators` to create a new Authentication provider connection.

![alt](/images/vendor/sso/vmware_horizon/vmware_03.png)

Then press the `Add` button at the top of the panel.

![alt](/images/vendor/sso/vmware_horizon/vmware_04.png)

Use `Static` Configuration to create a connection with static configuration.

![alt](/images/vendor/sso/vmware_horizon/vmware_05.png)

## Create a SAML 2.0 IdP in IDmelon Panel

---

Create a `VMware Horizon` configuration by selecting this configuration from `App Integrations` -> `Single Sign-On` -> `New Application` inside of the `IDmelon` panel.

In the `General Settings` section:

- **Entity ID:** should be `https://<HORIZON_UAG_URL>/portal`.
- **ACS URL:** should be `https://<HORIZON_UAG_URL>/portal/samlsso`.
- **Horizon UAG Metadata XML file:** should upload after downloading from UAG admin panel.

![alt](/images/vendor/sso/vmware_horizon/idmelon_01.png)
![alt](/images/vendor/sso/vmware_horizon/idmelon_02.png)

Finally, copy the `SAML Metadata` for the `Horizon Panel`.

## Connect Horizon Connection Server to IDmelon

Put the XML metadata you copied before in `SAML Metadata` and fill `Label` with a name for the configuration.
Now click on OK to submit all changes.

![alt](/images/vendor/sso/vmware_horizon/vmware_06.png)

## Connect Unified Access Gateway to IDmelon

Login to your UAG admin page (https://<HORIZON_UAG_FQDN>:9443/admin) and click `Select` of Configure Manually.

![alt](/images/vendor/sso/vmware_horizon/uag_01.png)
![alt](/images/vendor/sso/vmware_horizon/uag_02.png)

Scroll down to the section named `Identity Bridging Settings` and click `Upload Identity Provider Metadata`.

![alt](/images/vendor/sso/vmware_horizon/uag_03.png)

Fill `Entity ID` with value provided by IDmelon and also Download Metadata from IDmelon Panel and click on select to Upload Metadata.
After Uploading Metadata, click `Save`.

![alt](/images/vendor/sso/vmware_horizon/uag_04.png)

At the top of the page, next to `Edge Service Settings` click `SHOW`.

![alt](/images/vendor/sso/vmware_horizon/uag_05.png)

Next to Horizon Settings click the gear icon.

![alt](/images/vendor/sso/vmware_horizon/uag_06.png)

At the bottom of the page, click More.

![alt](/images/vendor/sso/vmware_horizon/uag_07.png)

In this form do following insstructions:

- Find `Auth Methods` and change it to SAML.
- Click on Identity Provider drop-down select box and find IDmelon provider link.
- Download SAML service provider metadata and upload in IDmelon panel.
- Scroll down and click `save`.

![alt](/images/vendor/sso/vmware_horizon/uag_08.png)

Now all configurations are completed. for debug other bugs you can download logs from buttom of the UAG admin panel.

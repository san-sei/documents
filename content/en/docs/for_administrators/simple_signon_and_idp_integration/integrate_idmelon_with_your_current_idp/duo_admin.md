---
title: "Duo Admin"
description: ""
lead: ""
date: 2023-09-13T00:57:39+03:30
lastmod: 2023-09-13T00:57:39+03:30
draft: false
images: []
menu:
  docs:
    parent: "integrate_idmelon_with_your_current_idp"
weight: 82300
toc: true
---

In this document you are going to set up `IDmelon` as an external IdP to the `Duo Admin`.  

## Login to Duo Admin administration panel  

---

To enable administrator SSO:  

*Role required* : Owner  

1. Log in to the [Duo Admin Panel](https://admin.duosecurity.com).  
2. Click **Administrators** in the left sidebar, and then click **Admin Login Settings**.  

![alt](/images/vendor/sso/duo_idp_01.png)  

## Add Identity Provider  

---

- Scroll to the **Single Sign-On with SAML Configuration** section of the "Administrator Login Settings" page.  
- Enable SSO by changing the "Authentication with SAML" setting. The options for this setting are:  
  - **Disabled**  
  - **Optional**  
  - **Required**  

![alt](/images/vendor/sso/duo_idp_02.png)  

Selecting the **Optional** or **Required** SAML authentication option exposes the rest of the SSO configuration form. You'll need to enter below information about **IDmelon identity provider** in the **SAML Identity Provider Settings** section:  

Identity provider: Custom Identity Provider  

Configuration method: **Manual entry**  

## Configure SAML 2.0 IdP  

---

> Get all values for `{..}` from your IDmelon panel.  
> If you are currently login here, you will see the replaced values instead.  

- Entity ID or issuer ID: idp_issuer_uri  
- Assertion consumer service URL or single sign-on URL: idp_single_sign_on_url  
- Single logout URL: idp_single_sign_on_url  
- Certificate: idp_certificate_download_url  
- Encrypt assertions: Require unencrypted assertions  
- Request signing: sign messages from Duo  

![alt](/images/vendor/sso/duo_idp_03.png)  

- SHA-1 signatures: Uncheck  
- Signed elements: Everything must be signed  
- Click Save  

![alt](/images/vendor/sso/duo_idp_04.png)  

## IDmelon SAML configuration  

---

- You should Download **`metadata`** file (XML file) and **`copy values`** of below fields from this **Duo panel** to **IDmelon Panel**.  

![alt](/images/vendor/sso/duo_idp_05.png)  

- Copy **Entity ID or Issuer ID**  
- Copy **Assertion consumer service or single sign-on URL**  
- You should copy values of above fields from **Duo panel** to **IDmelon Panel**.  

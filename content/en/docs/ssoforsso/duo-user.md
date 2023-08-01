---
title: "Duo End-user"
description: "This page is about integration IDmelon and Duo-user."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: [ ]
menu:
  docs:
    parent: "ssoforsso"
weight: 27
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

In this document you are going to set up IDmelon as an external IdP to the Duo-user.

## Login to Duo administration panel

---

1. Log in to the [Duo Admin Panel](https://admin.duosecurity.com).

## Add Identity Provider

---

1. Click **Single Sign-On** in the left sidebar, and then if **active Required** click active and start then click **Add
   Saml Identity Provider**.

<img src="/images/vendor/sso/duo_user-sso.png" class="doc-img-frame">

## IDmelon SAML configuration

---

**You should copy values of below fields from the Duo panel to the IDmelon Panel.**

1. Copy Entity ID Value
2. Copy Assertion Consumer Service URL

<img src="/images/vendor/sso/duo_user-sso1.png" class="doc-img-frame">

## Configure Duo Single Sign-On

---

**SAML Identity Provider Configuration**

> Get all values for `{..}` from your IDmelon panel.
> If you are currently login here, you will see the replaced values instead.

1. Choose Custom Display Name
2. Paste Entity ID: idp_issuer_uri
3. Paste Single Sign-On URL: idp_single_sign_on_url
4. Paste Single Single Logout URL: idp_single_sign_on_url
5. Paste Single Logout Redirect URL: https://duo.com/
6. Import Certificate: idp_certificate_download_url
7. Choose Username normalization: Simple

<img src="/images/vendor/sso/duo_user-sso2.png" class="doc-img-frame">

1. Click Save

2. Click **Duo Central** in the left sidebar, and then if **active Required** click active and start.

## Passwordless

---

1. Click **Configuration & Policy**

- Activate Status to **Online**
- Choose Duo Central name
- Create your custom subdomain or Use default

<img src="/images/vendor/sso/duo_user-sso3.png" class="doc-img-frame">

**Add IDmelon to Duo-user as passwordless and/or one Factor access**

1. Scroll down to policy options Click **Edit Global Policy**

<img src="/images/vendor/sso/duo_user-sso4.png" class="doc-img-frame">

2. Click **Authentication policy** Choose **Bypass 2FA**

<img src="/images/vendor/sso/duo_user-sso5.png" class="doc-img-frame">

3. Click **Authentication methods** then **disable all options of 2FA methods**.

<img src="/images/vendor/sso/duo_user-sso6.png" class="doc-img-frame">

4. Click Save Policy

## API Token

---

1. Go to Applications

2. Click on Protect an Applications

<img src="/images/vendor/sso/duo_admin.png" class="doc-img-frame">

3. Search for Admin API & Click on Protect

<img src="/images/vendor/sso/duo_admin1.png" class="doc-img-frame">

4. Copy values for Protect:

- Integration key
- Secret key
- API hostname

<img src="/images/vendor/sso/duo_admin2.png" class="doc-img-frame">

5. Click on Save Changes

## Add Application

---

1. Click Tiles to add applications to your Duo-user dashboard

2. Add tile

<img src="/images/vendor/sso/duo_user-sso7.png" class="doc-img-frame">

3. Choose to Add Applications or Add Bookmarks

4. Example: Add Application tile

- Choose your custom app

<img src="/images/vendor/sso/duo_user-sso8.png" class="doc-img-frame">

5. Click Add tile

6. All Done.

### IDP-Init/SP-Init support

---

Note that Duo-user doesn't support IDP-Init

<img src="/images/vendor/sso/duo-user-idp-init.png" class="doc-img-frame">

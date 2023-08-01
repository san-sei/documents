---
title: "Duo Admin"
description: "This page is about integration IDmelon and Duo Admin."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: [ ]
menu:
  docs:
    parent: "ssoforsso"
weight: 26
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

In this document you are going to set up IDmelon as an external IdP to the Duo Admin.

### Login to Duo Admin administration panel

---

To enable administrator SSO:

*Role required*: Owner

1. Log in to the [Duo Admin Panel](https://admin.duosecurity.com).

2. Click **Administrators** in the left sidebar, and then click **Admin Login Settings**.

<img src="/images/vendor/sso/duo_idp_01.png" class="doc-img-frame">

### Add Identity Provider

---

1. Scroll to the **Single Sign-On with SAML Configuration** section of the "Administrator Login Settings" page.

2. Enable SSO by changing the "Authentication with SAML" setting. The options for this setting are:

- **Disabled**
- **Optional**
- **Required**

<img src="/images/vendor/sso/duo_idp_02.png" class="doc-img-frame">

Selecting the **Optional** or **Required** SAML authentication option exposes the rest of the SSO configuration form.
You'll need to enter below information about **IDmelon identity provider** in the **SAML Identity Provider Settings**
section:

- Identity provider: Custom Identity Provider
- Configuration method: **Manual entry**

### Configure SAML 2.0 IdP

---

> Get all values for `{..}` from your IDmelon panel.
> If you are currently login here, you will see the replaced values instead.

1. Entity ID or issuer ID: idp_issuer_uri
2. Assertion consumer service URL or single sign-on URL: idp_single_sign_on_url
3. Single logout URL: idp_single_sign_on_url
4. Certificate: idp_certificate_download_url
5. Encrypt assertions: Require unencrypted assertions
6. Request signing: sign messages from Duo

<img src="/images/vendor/sso/duo_idp_03.png" class="doc-img-frame">

7. SHA-1 signatures: Uncheck
8. Signed elements: Everything must be signed
9. Click Save

<img src="/images/vendor/sso/duo_idp_04.png" class="doc-img-frame">

## IDmelon SAML configuration

---

You should Download `metadata` file (XML file) and `copy values` of below fields from this **Duo panel** to **IDmelon
Panel**.

<img src="/images/vendor/sso/duo_idp_05.png" class="doc-img-frame">

1. Copy **Entity ID or Issuer ID**
2. Copy **Assertion consumer service or single sign-on URL**

You should copy values of above fields from Duo panel to IDmelon Panel.

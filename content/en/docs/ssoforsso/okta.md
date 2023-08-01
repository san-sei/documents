---
title: "Okta"
description: "This page is about integration IDmelon and Okta."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: [ ]
menu:
  docs:
    parent: "ssoforsso"
weight: 29.1
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

In this document you are going to set up IDmelon as an external IdP to the Okta.

## Login to Okta administration panel

---

In order to set up the connection, you will need to log into your Okta administration panel.

To login to the Okta administration panel, click the Admin button on the top right corner of OKTA user panel page.

<img src="/images/vendor/sso/okta_dashboard_01.png" class="doc-img-frame">

## Add Identity Provider

---

In the Okta administration panel, from the side menu, navigate to the Security menu.

<img src="/images/vendor/sso/okta_dashboard_02.png" class="doc-img-frame">

Then from the Security menu, select the Identity Providers sub-menu.

<img src="/images/vendor/sso/okta_dashboard_03.png" class="doc-img-frame">

Then press Add Identity Provider button from the main panel.

<img src="/images/vendor/sso/okta_dashboard_04.png" class="doc-img-frame">

Then select the SAML 2.0 IdP from available options, and then press Next button.

<img src="/images/vendor/sso/okta_dashboard_05.png" class="doc-img-frame">

## Configure SAML 2.0 IdP

---

To configure SAML 2.0 IdP, fill the values of settings as below.

In the General settings section:

- **Name:** Your custom name.

In the Authentication Settings section:

- **IdP Usage:** SSO Only.
- **IdP username:** idpuser.subjectNameId.

<img src="/images/vendor/sso/okta_sso_only.png" class="doc-img-frame">

In the SAML Protocol Settings section:

Get all values for {..} from your IDmelon panel. If you are currently login here, you will see the replaced values
instead.

- **IdP Issuer URI:** idp_issuer_uri
- **IdP Single Sign-On URL:** idp_single_sign_on_url
- **IdP Signature Certificate:** idp_certificate_download_url
- **Request Binding:** HTTP POST

<img src="/images/vendor/sso/okta_dashboard_08.png" class="doc-img-frame">

In the continuation of SAML Protocol Settings section:

Get all values for {..} from your IDmelon panel. If you are currently login here, you will see the replaced values
instead.

- **Request Signature | Sign SAML Authentication Requests:** Should be selected.
- **Request Signature Algorithm:** SHA-256
- **Response Signature Verification:** Response or Assertion
- **Response Signature Algorithm:** SHA-256
- **Destination:** idp_destination
- **Okta Assertion Consumer Service URL | Trust-specific:** Should be selected
- **Max Clock Skew:** 2 Minutes

And at the end click the Finish button.

<img src="/images/vendor/sso/okta_dashboard_09.png" class="doc-img-frame">

### Setup IdP Routing rules

---

After completing the Identity providers section, click on Routing rules and then Add a new rule by clicking Add Routing
Rule Button.

<img src="/images/vendor/sso/okta_rules_01.png" class="doc-img-frame">

Then configs are:

- **Choose custom Rule Name**.
- **Use This identity provider:** Use specific IdP(s).
- **Idp(s):** Enter your custom name of idp.

<img src="/images/vendor/sso/okta_rules_02.png" class="doc-img-frame">

Click on Update rule.

Activate your new idp rule by clicking on Active button.

## IDmelon SAML configuration

---

After completing the previous Setup Okta connection section and submitting the form, you can see a new IdP added to your
list.

Expand the details by clicking on the small arrow left to the added record on the list.

You should copy values of below fields from the Okta panel to the IDmelon Panel:

- **SAML metadata**.
- **Assertion Consumer Service URL**.
- **Audience URI**.

<img src="/images/vendor/sso/okta_dashboard_10.png" class="doc-img-frame">

## Passwordless

---

For active Passwordless or one Factor access, from the side menu, navigate to the Security menu and select the
Authentication Policies sub-menu.

<img src="/images/vendor/sso/okta_passwordless_01.png" class="doc-img-frame">

Then click on any application you wanted to use as one Factor access.

<img src="/images/vendor/sso/okta_policy_01.png" class="doc-img-frame">

Then click on Actions button and then click the Edit option.

<img src="/images/vendor/sso/okta_policy_03.png" class="doc-img-frame">

In the THEN section of Edit Rule set values as below:

- **AND User must authenticate:** Password / IdP.

And then click Save button.

<img src="/images/vendor/sso/okta_policy_02.png" class="doc-img-frame">

## API Token

---

From the side menu, navigate to the Security menu and select the API sub-menu.

And then click the Token tab from the main page, and then click the Create token button.

<img src="/images/vendor/sso/okta_api_01.png" class="doc-img-frame">

Enter the desired name for your API token.

<img src="/images/vendor/sso/okta_api_02.png" class="doc-img-frame">

And then copy the value of the created API token.

<img src="/images/vendor/sso/okta_api_03.png" class="doc-img-frame">

**Note:** please paste this option to IDmelon okta Integration on Check Connection field.

The created Token will be shown in the token list.

<img src="/images/vendor/sso/okta_api_04.png" class="doc-img-frame">

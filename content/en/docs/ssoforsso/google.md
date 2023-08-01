---
title: "Google"
description: "This page is about integration IDmelon and Google."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: [ ]
menu:
  docs:
    parent: "ssoforsso"
weight: 28
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

In this document you are going to set up IDmelon as an external IdP to the Google.

## Login to Google administration panel

---

In order to set up the connection, you will need to log into
your [Google administration panel](https://admin.google.com).

## Add Identity Provider

---

In the Google administration panel, from the side menu, navigate to the Security menu.

Then from the Security menu, select the Overview sub-menu.

<img src="/images/vendor/sso/google_dashboard_01.png" class="doc-img-frame">

Then scroll down and navigate to Set up Single Sign-On (SSO) with a third-party IdP.

<img src="/images/vendor/sso/google_dashboard_02.png" class="doc-img-frame">

1. In Third-party SSO profile for your organization, click Add SSO profile.

2. Check the Set up SSO with third-party identity provider box.

Get all values for {..} from your IDmelon panel. If you are currently logged in here, you will see the replaced values
instead.

- **Sign-in page URL**: idp_single_sign_on_url
- **Sign-out page URL**: idp_single_sign_on_url
- **Verification Certificate**: idp_certificate_download_url

Click Save.

<img src="/images/vendor/sso/google_dashboard_03.png" class="doc-img-frame">

**Create an SSO profile**

1. In the Single Sign-On (SSO) with third-party Identity Providers (IDPs) panel.

2. Scroll down to Third-party SSO profiles, click Add SAML profile.

<img src="/images/vendor/sso/google_dashboard_04.png" class="doc-img-frame">

3. Enter a name for the profile.

4. **IDP entity ID**: idp_issuer_uri
5. **Sign-in page URL**: idp_single_sign_on_url
6. **Upload certificate**: idp_certificate_download_url

Click Save.

<img src="/images/vendor/sso/google_dashboard_05.png" class="doc-img-frame">

## IDmelon SAML configuration

---

After completing the previous Setup Google connection section and submitting the form, you can see a new IdP added to
your list.

You should copy values of below fields from the SP details Under the SAML SSO profile to the IDmelon Panel:

- **Entity ID**
- **ACS URL**

<img src="/images/vendor/sso/google_dashboard_06.png" class="doc-img-frame">

## Manage SSO profile assignments

---

Scroll down and navigate to Manage SSO profile assignments.

1. Choose Another SSO Profile.

2. Select your Custom SSO config Select SSO profile.

3. Choose Have Google prompt for their username, then redirect them to this profile's IDP sign-in page.

You can choose Users, Groups, Organizational units to activate IDmelon SSO.

<img src="/images/vendor/sso/google_dashboard_07.png" class="doc-img-frame">

## Domain-specific service URLs

---

Scroll down and navigate to Domain-specific service URLs.

<img src="/images/vendor/sso/google_dashboard_08.png" class="doc-img-frame">

Check Automatically redirect users to the third-party IdP in the following SSO profile box, To finally submit SSO
profile.

Then Select SSO Profile for your organization, under the SSO profile field.

Click Save.

<img src="/images/vendor/sso/google_dashboard_09.png" class="doc-img-frame">

## API Token

---

In the [Google Cloud console](https://console.cloud.google.com/apis/), enable the People API.

1. Create New Project:

- Choose a custom name in Project name.
- Choose an organization in Location.
- Click CREATE.

<img src="/images/vendor/sso/google_dashboard_10.png" class="doc-img-frame">

2. Select your Custom Project.
3. Confirm project, then click NEXT.

<img src="/images/vendor/sso/google_dashboard_11.png" class="doc-img-frame">

4. Click ENABLE.

<img src="/images/vendor/sso/google_dashboard_12.png" class="doc-img-frame">

5. Then from Google Console, in APIs and services panel, click CREATE CREDENTIALS and choose each API option which you
   want to use.

<img src="/images/vendor/sso/google_dashboard_13.png" class="doc-img-frame">

6. Then the API will be created, and you can copy your needed values:

- If you choose OAuth client ID.

<img src="/images/vendor/sso/google_dashboard_14.png" class="doc-img-frame">

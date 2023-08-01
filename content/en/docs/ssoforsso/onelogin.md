---
title: "OneLogin"
description: "This page is about integration IDmelon and Onelogin."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: [ ]
menu:
  docs:
    parent: "ssoforsso"
weight: 29.2
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

In this document you are going to set up IDmelon as an external IdP to the OneLogin.

## Login to OneLogin administration panel

* * *

- Login to [OneLogin](https://onelogin.com).

- Open OneLogin dashboard.

- On the right side of navbar click onAdministration

<img src="/images/vendor/sso/onelogin_sso.png" class="doc-img-frame">

## Add Identity Provider

* * *

- Tab then click on Trusted idps

- Click on New Trust

<img src="/images/vendor/sso/onelogin_sso1.png" class="doc-img-frame">

- Choose a custom name at the left side of page

- Enable Trusted IDP, for this action certificate validation is necessary

- Enable Show in Login panel, Choose Custom logo

- IDmelon Logo Domain :

<img src="https://idmelon.com/wp-content/uploads/2020/05/IDmelon-Logo-213x60-1-e1629841318864.png" class="doc-img-frame">

Get all values for {..} from your IDmelon panel.
If you are currently login here, you will see the replaced values instead.

- Issuer : Show in Login panel, idp\_issuer\_uri

- Email Domains : The Email Domains field is used to automatically invoke this Trusted IdP when a user enters their
  email
  address at login time - if the email address is unrecognized, but belongs to one of the domains listed, then this TIdP
  will be invoked via an authentication request (SAML, OIDC or OAuth as appropriate), Example = idmelon.com

<img src="/images/vendor/sso/onelogin_sso2.png" class="doc-img-frame">

- To enable Standard mode, check Sign users into OneLogin. This allows inbound identities from the Identity Provider to
  be
  matched to local user accounts within the tenant, via responses to the /access/idp endpoint.

- To send the user identity within the authentication request sent to the Trusted Identity Provider, check Send Subject
  Name ID or Login Hint in Auth Request: if the Trusted IdP is configured to use SAML, then the authentication request
  is
  sent as a Subject NameID parameter whilst if OIDC or OAuth is used, the same information is sent as a query string
  parameter called login\\\_hint. This feature is to provide an improved user experience by avoiding the need for the
  user
  to provide an identifier to both OneLogin and the Trusted IdP.

- Sign users into OneLogin

- Send Subject Name ID or Login Hint in Auth Request

- SAML - hard-coded to extract the SAML Subject NameID. It can't be changed.

- User Attribute Mapping : Email

<img src="/images/vendor/sso/onelogin_sso3.png" class="doc-img-frame">

Get all values for {..} from your IDmelon panel.
If you are currently login here, you will see the replaced values instead.

- IdP Login URL : idp\_single\_sign\_on\_url

- IdP Logout URL : idp\_single\_sign\_on\_url

- IdP Issuer URI idp\_issuer\_uri

Note : please save the configuration then scroll it to continue with certificate part.

## IDmelon SAML configuration

* * *

You should copy values of below fields from the Okta panel to the IDmelon Panel:

- entity id: Copy SP Entity ID

- single log out: Copy SP logout url

- Assertion Consumer Service URL : `https://{your custom subdomain}.onelogin.com/access/idp`

<img src="/images/vendor/sso/onelogin_sso4.png" class="doc-img-frame">

- Choose : X.509 Certificate = Standard Strength Certificate (2048-bit)

- Choose : X.509 Certificate = Standard Strength Certificate (2048-bit)

- Click on View Details

- Choose : SHA256

- Download : X.509 Certificate

<img src="/images/vendor/sso/onelogin_cert.png" class="doc-img-frame">

- Click on Save

- Trusted IdP Certificate :`idp_certificate_download_url`

- JIT : Enable, Set User TIDP after user creation

<img src="/images/vendor/sso/onelogin_jit.png" class="doc-img-frame">

- Enable

- Set User TIDP after user creation

- Click on Save.

## Enable SSO

* * *

- Click on More Actions then click on Set as default Trusted Idp.

- this option will activate sso for all users..

<img src="/images/vendor/sso/sso_onelogin.png" class="doc-img-frame">

- OR Enable sso for special users.

- Click on specialuser then Click on Authentication.

- Choose Custom Trusted IDP.

<img src="/images/vendor/sso/sso_onelogin1.png" class="doc-img-frame">

- Click on Save.

## API Token

* * *

- GET API Token for user provisioning in OneLogin

- Click on Developers then API Credentials.

- Click on New Credential .

<img src="/images/vendor/sso/onelogin_api.png" class="doc-img-frame">

- Choose Custom Name.

- Click on Manage all.

<img src="/images/vendor/sso/onelogin_api1.png" class="doc-img-frame">

Save.

**Custom name API Copy** Client ID

- Copy Client Secret.

<img src="/images/vendor/sso/onelogin_api2.png" class="doc-img-frame">

- Done.

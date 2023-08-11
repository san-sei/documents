---
title: "OneLogin"
description: "This page is about integration IDmelon and Onelogin."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
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

In this document you are going to set up ``{{< params "IDmelon" >}}`` as an external IdP to the ``OneLogin``.

## Login to  OneLogin administration panel

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Login to</span> <a href="https://onelogin.com" style="font-size:16px;"> OneLogin</a>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Open</span> OneLogin dashboard.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>on the rightside of navbar Click on<span style="font-weight:bold;">Administration</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_sso.png" class="doc-img-frame">
</div>

## Add Identity Provider

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Tab <span style="font-weight:bold;">then click on </span><span style="font-weight:bold;">Trusted idps</span></p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>colick on <span style="font-weight:bold;">New Trust</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_sso1.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Choose</span> a custom name at the left side of page</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Enable</span> Trusted IDP, for this action certificate validation is necessary</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Enable</span> Show in Login panel, <span style="font-weight:bold;">Choose</span> Custom logo</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">{{< params "IDmelon" >}} Logo Domain :</span></p>
        <div align="center">
            <img src="https://idmelon.com/wp-content/uploads/2020/05/{{< params "{{< params "IDmelon" >}}" >}}-Logo-213x60-1-e1629841318864.png" class="doc-img-frame">
        </div>
      </div>
    </div>
  </div>
</div>

<p class="note-body">Get all values for <span class="code-back">{..}</span> from your {{< params "IDmelon Panel" >}}.<br>
If you are currently login here, you will see the replaced values instead.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Issuer :</span> Show in Login panel, idp_issuer_uri</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Email Domains :</span> The Email Domains field is used to automatically invoke this Trusted IdP when a user enters their email address at login time - if the email address is unrecognized, but belongs to one of the domains listed, then this TIdP will be invoked via an authentication request (SAML, OIDC or OAuth as appropriate), <span style="font-weight:bold;">Example</span> = idmelon.com</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_sso2.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>To enable Standard mode, check Sign users into OneLogin. This allows inbound identities from the Identity Provider to be matched to local user accounts within the tenant, via responses to the /access/idp endpoint.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>To send the user identity within the authentication request sent to the Trusted Identity Provider, check Send Subject Name ID or Login Hint in Auth Request: if the Trusted IdP is configured to use SAML, then the authentication request is sent as a Subject NameID parameter whilst if OIDC or OAuth is used, the same information is sent as a query string parameter called login\_hint. This feature is to provide an improved user experience by avoiding the need for the user to provide an identifier to both OneLogin and the Trusted IdP.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Sign users into OneLogin</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Send Subject Name ID or Login Hint in Auth Request</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>SAML - hard-coded to extract the SAML Subject NameID. It can't be changed.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">User Attribute Mapping :</span> Email</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_sso3.png" class="doc-img-frame">
</div>

<p class="note-body">Get all values for <span class="code-back">{..}</span> from your {{< params "IDmelon Panel" >}}.<br>
If you are currently login here, you will see the replaced values instead.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IdP Login URL :</span> idp_single_sign_on_url</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IdP Logout URL :</span> idp_single_sign_on_url</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IdP Issuer URI</span> idp_issuer_uri</p>
      </div>
    </div>
  </div>
</div>

<p class="note-body"><span style="font-weight:bold;">Note :</span> please save the configuration then scroll it to continue with certificate part.</p>

## ConvergeID SAML configuration

<hr class="hr-line">

You should copy values of below fields from the Okta panel to the {{< params "IDmelon Panel" >}}:

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">entity id:</span> <span style="font-weight:bold;">Copy</span> SP Entity ID</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">single log out:</span> <span style="font-weight:bold;">Copy</span> SP logout url</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Assertion Consumer Service URL :</span> <code class="code-back">https://{your custom subdomain}.onelogin.com/access/idp</code></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_sso4.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Choose :</span> X.509 Certificate = Standard Strength Certificate (2048-bit)</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Choose :</span> X.509 Certificate = Standard Strength Certificate (2048-bit)</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Click on</span> View Details</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Choose :</span> SHA256</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Download :</span> X.509 Certificate</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_cert.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold;">Save</span></p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Trusted IdP Certificate :<code class="code-back">idp_certificate_download_url</code></p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">JIT :</span> Enable, Set User TIDP after user creation</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_jit.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Enable</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Set User TIDP after user creation</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold;">Save</span>.</p>
      </div>
    </div>
  </div>
</div>

## Enable SSO

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold;">More Actions</span> then Click on <span style="font-weight:bold;">Set as default Trusted Idp</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>this option will activate sso for<span style="font-weight:bold;">all users.</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/sso_onelogin.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">OR</span> <span style="font-weight:bold;">Enable sso</span> for special users.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on special<span style="font-weight:bold;">user</span> then Click on <span style="font-weight:bold;">Authentication</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose<span style="font-weight:bold;"> Custom Trusted IDP</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/sso_onelogin1.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on<span style="font-weight:bold;"> Save</span>.</p>
      </div>
    </div>
  </div>
</div>

## API Token

<hr class="hr-line">

<p style="font-weight:bold;">GET API Token for user provisioning in OneLogin<p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on<span style="font-weight:bold;"> Developers </span>then <span style="font-weight:bold;">API Credentials</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on<span style="font-weight:bold;"> New Credential </span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_api.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose Custom<span style="font-weight:bold;"> Name</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on<span style="font-weight:bold;"> Manage all</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/onelogin_api1.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Save</span>.</p>
      </div>
    </div>
  </div>
</div>

**Custom name API**   **Copy** Client ID

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Copy <span style="font-weight:bold;">Client Secret</span>.</p>
      </div>
    </div>
  </div>
</div>
<div align="center">
    <img src="/images/vendor/sso/onelogin_api2.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Done</span>.</p>
      </div>
    </div>
  </div>
</div>

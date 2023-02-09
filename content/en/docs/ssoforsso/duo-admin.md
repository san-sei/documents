---
title: "Duo Admin SAML Configuration"
description: "This page is about integration IDmelon and Duo Admin."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
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

<p>In this document you are going to set up <span class="code-back">IDmelon</span> as an external IdP to the <span class="code-back">Duo Admin</span>.</p>

### Login to  Duo Admin administration panel

<hr class="hr-line">

<p>To enable administrator SSO:<p>

<p><span style="font-style: italic;">Role required<span> : Owner</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Log in to the <a href="https://admin.duosecurity.com" style="font-size:16px;">Duo Admin Panel</a>.</p>
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
        <p>Click <span style="font-weight:bold">Administrators</span> in the left sidebar, and then click <span style="font-weight:bold">Admin Login Settings</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_idp_01.png" class="doc-img-frame">
</div>

### Add Identity Provider

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Then Scroll to the <span style="font-weight:bold">Single Sign-On with SAML Configuration</span> section of the "Administrator Login Settings" page.</p>
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
        <p>Enable SSO by changing the "Authentication with SAML" setting. The options for this setting are:</p>
      </div>
    </div>
  </div>
</div>

<div class="mx-3">
<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Disabled</span></p>
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
        <p><span style="font-weight:bold">Optional</span></p>
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
        <p><span style="font-weight:bold">Required</span></p>
      </div>
    </div>
  </div>
</div>  
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_idp_02.png" class="doc-img-frame">
</div>

Selecting the **Optional** or **Required** SAML authentication option exposes the rest of the SSO configuration form. You'll need to enter below information about **IDmelon identity provider** in the **SAML Identity Provider Settings** section:

Identity provider: Custom Identity Provider

Configuration method: **Manual entry**

### Configure SAML 2.0 IdP

<hr class="hr-line">

<p class="note-body">Get all values for <span class="code-back">{..}</span> from your IDmelon panel.<br>
If you are currently login here, you will see the replaced values instead.
</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Entity ID or issuer ID: <span class="code-back">{{idp_issuer_uri}}</span></p>
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
        <p>Assertion consumer service URL or single sign-on URL: <span class="code-back">{{idp_single_sign_on_url}}</span></p>
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
        <p>Single logout URL: <span class="code-back">{{idp_single_sign_on_url}}</span></p>
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
        <p>Certificate: <span class="code-back">{{idp_certificate_download_url}}</span></p>
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
        <p>Encrypt assertions: Require unencrypted assertions</p>
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
        <p>Request signing: sign messages from Duo</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_idp_03.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>SHA-1 signatures: Uncheck</p>
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
        <p>Signed elements: Everything must be signed</p>
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
        <p>Click Save</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_idp_04.png" class="doc-img-frame">
</div>

## IDmelon SAML configuration

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>You should Download <span class="code-back" style="font-weight:bold">metadata</span> file(XML file) and <span class="code-back" style="font-weight:bold">copy values</span> of below fields from this <span  style="font-weight:bold">Duo panel</span> to <span style="font-weight:bold">IDmelon Panel</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_idp_05.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Copy <span style="font-weight:bold">Entity ID or Issuer ID</span></p>
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
        <p>Copy <span style="font-weight:bold">Assertion consumer service or single sing-on URL</span></p>
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
        <p>You should copy values of below fields from this <span style="font-weight:bold">Duo panel</span> to <span style="font-weight:bold">IDmelon Panel</span>.</p>
      </div>
    </div>
  </div>
</div>

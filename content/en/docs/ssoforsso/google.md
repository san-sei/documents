---
title: "Google"
description: "This page is about integration IDmelon and Google."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
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

<p>In this document you are going to set up <span class="code-back">{{< params "IDmelon" >}}</span> as an external IdP to the <span class="code-back">Google</span>.</p>

## Login to  Google administration panel

<hr class="hr-line">

<p>In order to set up the connection, you will need to log into to your <a href="https://admin.google.com" style="font-size:16x;">Google administration panel.</p>

## Add Identity Provider

<hr class="hr-line">

<p>In the <span class="code-back">Google administration panel</span>, from the side menu, navigate to the <span class="code-back">Security</span> menu.</p>

<p>Then from the <span class="code-back">Security</span> menu,  select the <span class="code-back">Overview</span> sub menu.</p>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_01.png" class="doc-img-frame">
</div>

<p>Then Scroll down and navigate to <span class="code-back">Set up Single Sign-On (SSO) with a third-party IdP</span></p>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_02.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>In <span style="font-weight:bold">Third-party SSO profile for your organization</span>, click <span style="font-weight:bold">Add SSO profile</span>.</p>
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
        <p>Check the <span style="font-weight:bold">Set up SSO with third-party identity provider</span> box.</p>
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
        <p><span style="font-weight:bold">Sign-in page URL</span> : idp_single_sign_on_url</p>
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
        <p><span style="font-weight:bold">Sign-out page URL</span> : idp_single_sign_on_url</p>
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
        <p><span style="font-weight:bold">Verification Certificate</span> : idp_certificate_download_url</p>
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
        <p>Click <span style="font-weight:bold">Save</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_03.png" class="doc-img-frame">
</div>

<p><span style="font-weight:bold">Create an SSO profile</span></p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>In the <span style="font-weight:bold">Single Sign-On (SSO) with third-party Identity Providers (IDPs)</span> panel.</p>
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
        <p>Scroll down to <span style="font-weight:bold">Third-party SSO profiles</span>, click <span style="font-weight:bold">Add SAML profile</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_04.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Enter a name for the profile.</p>
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
        <p><span style="font-weight:bold">IDP entity ID</span> : idp_issuer_uri</p>
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
        <p><span style="font-weight:bold">Sign-in page URL</span> : idp_single_sign_on_url</p>
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
        <p><span style="font-weight:bold">Upload certificate</span> : idp_certificate_download_url</p>
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
        <p>Click <span style="font-weight:bold">Save</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_05.png" class="doc-img-frame">
</div>

## ConvergeID SAML configuration

<hr class="hr-line">

<p>After completing previous <span class="code-back">Setup Google connection</span> section and submitting the form, you can see a new IdP added to your list.</p>

<p>You should copy values of below fields from the <span class="code-back">SP details</span> Under the <span class="code-back">SAML SSO profile</span> to the <span class="code-back">{{< params "IDmelon" >}}</span> Panel:</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Entity ID</span>.</p>
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
        <p><span style="font-weight:bold">ACS URL</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_06.png" class="doc-img-frame">
</div>

## Manage SSO profile assignments

<hr class="hr-line">

<p>Scroll down and navigate to <span class="code-back">Manage SSO profile assignments</span>.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose <span style="font-weight:bold">Another SSO Profile</span>.</p>
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
        <p>Select your Custom SSO config <span style="font-weight:bold">Select SSO profile</span>.</p>
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
        <p>Choose <span style="font-weight:bold">Have Google prompt for their username, then redirect them to this profile's IDP sing-in page.</span>.</p>
      </div>
    </div>
  </div>
</div>

<p>You can choose <span class="code-back">Users</span>, <span class="code-back">Groups</span>, <span class="code-back">Orgenisational units</span> in order to activate {{< params "IDmelon" >}} SSO.</p>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_07.png" class="doc-img-frame">
</div>

## Domain-specific service URLs

<hr class="hr-line">

<p>Scroll down and navigate to <span class="code-back">Domain-specific service URLs</span>.</p>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_08.png" class="doc-img-frame">
</div>

<p>Check <span class="code-back">Automatically redirect users to the third-party IdP in the following SSO profile</span> box, To finally submit SSO profile.</p>

<p>Then Select <span class="code-back">SSO Profile for your organisation</span>, under the <span class="code-back">SSO profile</span> field.</p>

<p>Click <span class="code-back">Save</span>.</p>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_09.png" class="doc-img-frame">
</div>

## API Token

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>In the <a href="https://console.cloud.google.com/apis/" style="font-size:16px;">Google Cloud console</a>, enable <span style="font-weight:bold">the People API</span>.</p>
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
        <p>Create <span style="font-weight:bold">New Project :</span></p>
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
        <p>Choose custom name in <span style="font-weight:bold">Project name</span></p>
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
        <p>Choose an organization in <span style="font-weight:bold">Location</span></p>
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
        <p>Click <span style="font-weight:bold">CREATE</span></p>
      </div>
    </div>
  </div>
</div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_10.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Select your Custom <span style="font-weight:bold">Project.</span></p>
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
        <p><span style="font-weight:bold">Confirm project</span> then Click <span style="font-weight:bold">NEXT</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_11.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click <span style="font-weight:bold">ENABLE</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_12.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Then from <span style="font-weight:bold">Google Console</span>, in <span style="font-weight:bold">APIs and services panel</span> click <span style="font-weight:bold">CREATE CREDENTIALS</span> and choose each Api option which you want to use.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_13.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Then Api will created and you can Copy your needed values: </p>
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
        <p>if you choose <span style="font-weight:bold">OAuth client ID</span>.</p>
      </div>
    </div>
  </div>
</div>
</div>

<div align="center">
    <img src="/images/vendor/sso/google_dashboard_14.png" class="doc-img-frame">
</div>

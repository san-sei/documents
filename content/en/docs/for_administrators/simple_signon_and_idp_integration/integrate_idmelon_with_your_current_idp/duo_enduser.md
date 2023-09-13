---
title: "Duo End-user"
description: ""
lead: ""
date: 2023-09-13T00:57:56+03:30
lastmod: 2023-09-13T00:57:56+03:30
draft: false
images: []
menu:
  docs:
    parent: "integrate_idmelon_with_your_current_idp"
weight: 715
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

<p>In this document you are going to set up <span class="code-back">IDmelon</span> as an external IdP to the <span class="code-back">Duo-user</span>.</p>

## Login to  Duo administration panel

<hr class="hr-line">

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

## Add Identity Provider

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click <span style="font-weight:bold">Single Sign-On</span> in the left sidebar, and then if <span style="font-weight:bold">active Required</span> click active and start then click <span style="font-weight:bold">Add Saml Identity Provider</span> .</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_user-sso.png" class="doc-img-frame">
</div>

## IDmelon SAML configuration

<hr class="hr-line">

<p><span style="font-weight:bold">You should copy values of below fields from the Duo panel to the IDmelon Panel.</span></p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Copy</span> Entity ID Value</p>
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
        <p><span style="font-weight:bold">Copy</span> Assertion Consumer Service URL</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_user-sso1.png" class="doc-img-frame">
</div>
  
## Configure Duo Single Sign-On

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">SAML Identity Provider Configuration</span></p>
      </div>
    </div>
  </div>
</div>

<div class="mx-3">
<p class="note-body">Get all values for <span class="code-back">{..}</span> from your IDmelon panel.<br>
If you are currently login here, you will see the replaced values instead.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Choose</span> Custom Display Name</p>
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
        <p><span style="font-weight:bold">Paste Entity ID :</span> idp_issuer_uri</p>
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
        <p><span style="font-weight:bold">Paste Single Sign-On URL :</span> idp_single_sign_on_url</p>
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
        <p><span style="font-weight:bold">Paste Single Single Logout URL :</span> idp_single_sign_on_url</p>
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
        <p><span style="font-weight:bold">Paste Single Logout Redirect URL :</span> https://duo.com/</p>
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
        <p><span style="font-weight:bold">Import Certificate :</span> idp_certificate_download_url</p>
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
        <p><span style="font-weight:bold">Choose Username normalization :</span> Simple</p>
      </div>
    </div>
  </div>
</div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_user-sso2.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Click</span> Save</p>
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
        <p>Click <span style="font-weight:bold">Duo Central</span> in the left sidebar, and then if <span style="font-weight:bold">active Required</span> click active and start.</p>
      </div>
    </div>
  </div>
</div>

## Passwordless

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click <span style="font-weight:bold">Configuration & Policy</span></p>
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
        <p><span style="font-weight:bold">Activate :</span> Status to <span style="font-weight:bold">Online</span></p>
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
        <p><span style="font-weight:bold">Choose :</span> Duo Central name</p>
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
        <p><span style="font-weight:bold">Create your custom subdomain</span> or <span style="font-weight:bold">Use</span> default</p>
      </div>
    </div>
  </div>
</div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_user-sso3.png" class="doc-img-frame">
</div>  

<div class="mx-3">
    <p><span style="font-weight:bold">Add Idmelon to Duo-user as passwordless and/or one Factor access</span></p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Scroll down</span> to policy options Click <span style="font-weight:bold">Edit Global Policy</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_user-sso4.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click <span style="font-weight:bold">Authentication policy</span> Choose <span style="font-weight:bold">Bypass 2FA</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_user-sso5.png" class="doc-img-frame">
</div>  

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click <span style="font-weight:bold">Authentication methods</span> then <span style="font-weight:bold">disable all options of 2FA methods</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_user-sso6.png" class="doc-img-frame">
</div>  

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Click</span> Save Policy</p>
      </div>
    </div>
  </div>
</div>
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
        <p><span style="font-weight:bold">Go to</span> Applications</p>
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
        <p><span style="font-weight:bold">Click on</span> Protect an Applications</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_admin.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Search</span> for Admin API & <span style="font-weight:bold">Click on</span> Protect</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_admin1.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Copy values</span></span> Protect</p>
      </div>
    </div>
  </div>
</div>

<div class="mx-3">
<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Integration key</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Secret key</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>API hostname</p>
      </div>
    </div>
  </div>
</div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_admin2.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Click on</span> Save Changes</p>
      </div>
    </div>
  </div>
</div>

## Add Application

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click <span style="font-weight:bold">Tiles</span> to add applications to your Duo-user dashboard</p>
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
        <p>Add <span style="font-weight:bold">tile</span></p>
      </div>
    </div>
  </div>
</div>
<div align="center">
    <img src="/images/vendor/sso/duo_user-sso7.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Choose</span> to Add <span style="font-weight:bold">Applications</span> or Add <span style="font-weight:bold">Bookmarks</span></p>
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
        <p><span style="font-weight:bold">Example</span> Add Application tile</p>
      </div>
    </div>
  </div>
</div>
<div class="mx-5">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Choose</span> your custome app</p>
      </div>
    </div>
  </div>
</div>
</div>

<div align="center">
    <img src="/images/vendor/sso/duo_user-sso8.png" class="doc-img-frame">
</div>  

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Click</span> Add tile</p>
      </div>
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
        <p><span style="font-weight:bold">All Done.</span></p>
      </div>
    </div>
  </div>
</div>

### IDP-Init/SP-Init support

<hr class="hr-line">

Note that Duo-user doesn't support IDP-Init

<div align="center">
    <img src="/images/vendor/sso/duo-user-idp-init.png" class="doc-img-frame">
</div>

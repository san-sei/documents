---
title: "Salesforce"
description: "This page is about integration IDmelon and Salesforce"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "ssoforsso"
weight: 29.4
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

In this document you are going to set up ``{{< params "IDmelon" >}}`` as an external IdP to the ``Salesforce``.

## Login to  Salesforce administration panel

<hr class="hr-line">

In order to set up the connection, you will need to log into to your ``Salesforce administration panel``.

To login to the ``Salesforce administration panel``, click the ``Setting`` icon on the top right corner of Salesforce
user panel page then Click ``Setup``.

<div align="center">
    <img src="/images/vendor/sso/salesforce_dashboard_01.png" class="doc-img-frame">
</div>

## Add Identity Provider

<hr class="hr-line">

In the ``Salesforce administration panel``, from the side menu, navigate to the ``Security`` menu, then Click
``identity`` and finally select ``Single Sign-On Settings``.

<div align="center">
    <img src="/images/vendor/sso/salesforce_dashboard_02.png" class="doc-img-frame">
</div>

Then Check ``SAML Enable`` box from the main panel.

Under ``Single Sign-On Settings`` Click New.

<div align="center">
    <img src="/images/vendor/sso/salesforce_dashboard_03.png" class="doc-img-frame">
</div>

## Configure SAML 2.0 IdP

<hr class="hr-line">

To configure SAML 2.0 IdP, fill the values of settings as below.

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click <span style="font-weight:bold;">Name: </span> Your custom name</p>
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
        <p><span style="font-weight:bold;">API Name: </span>Your custom api name</p>
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
        <p><span style="font-weight:bold;">Issuer: </span><code class="code-back">{{idp_issuer_uri}}</code></p>
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
        <p><span style="font-weight:bold;">Entity ID: </span><code class="code-back">Your custom salesforce portal</code></p>
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
        <p><span style="font-weight:bold;">Example: </span><a heref="https://idmelon_test_sso.my.salesforce.com/" style="font-size:16px;">https://idmelon_test_sso.my.salesforce.com/</a></p>
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
        <p><span style="font-weight:bold;">IdP Signature Certificate :</span><code class="code-back">{{idp_certificate_download_url}}</code></p>
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
        <p><span style="font-weight:bold;">Request Signing Certificate :</span><code class="code-back">Your salesforce certificate</code></p>
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
        <p><span style="font-weight:bold;">Request Signature Method :</span><code class="code-back">RSA_SHA256</code></p>
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
        <p><span style="font-weight:bold;">Assertion Decryption Certificate : <code class="code-back">Assertion not encrypted</code> <span style="font-weight:bold;">or</span> </span><code class="code-back">Your salesforce certificate</code></p>
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
        <p><span style="font-weight:bold;">SAML Identity Type :</span><code class="code-back"> SAML Identity Type</code></p>
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
        <p><span style="font-weight:bold;">SAML Identity Location :</span><code class="code-back">Identity is in the NameIdentifier element of the Subject statement</code></p>
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
        <p><span style="font-weight:bold;">Service Provider Initiated Request Binding : HTTP POST</span></p>
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
        <p><span style="font-weight:bold;">Identity Provider Login URL :</span><code class="code-back">{{idp_single_sign_on_url}}</code></p>
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
        <p><span style="font-weight:bold;">Custom Logout URL :</span><code class="code-back">{{idp_single_sign_on_url}}</code></p>
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
        <p>Click <span style="font-weight:bold;">Save.</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/salesforce_dashboard_04.png" class="doc-img-frame">
</div>

## ConvergeID SAML configuration

<hr class="hr-line">

After completing previous ``SAML Single Sign-On Settings`` section and submitting the form, you can see a new IdP added to your list.

You should upload **``metadata``** file from this **Salesforce panel** to **{{< params "IDmelon Panel" >}}**.

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Download -><span style="font-weight:bold;"> Download Metadata</span> File</p>
      </div>
    </div>
  </div>
</div>

You should copy values of below fields from the ``Salesforce`` panel to the ``{{< params "IDmelon" >}}`` Panel:

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Entity ID</span><code class="code-back">Your custom salesforce portal</code></p>
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
        <p><span style="font-weight:bold;">Example</span><a href="https://idmelon_test_sso.my.salesforce.com/" style="font-size:16px;">https://idmelon_test_sso.my.salesforce.com/</a></p>
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
        <p><span style="font-weight:bold;">Login URL : </span> Copy and Paste to <span style="font-weight:bold;">Assertion consumer service url</span></p>
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
        <p><span style="font-weight:bold;">Logout URL : </span> Copy and Paste to <span style="font-weight:bold;">Single Sign Logout url</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/salesforce_dashboard_05.png" class="doc-img-frame">
</div>

## Add ConvergeID to Salesforce Login Panel

In the ``Salesforce administration panel``, from the side menu, navigate to the ``Company Settings`` menu, then Click ``My Domain``.

<div align="center">
    <img src="/images/vendor/sso/salesforce_dashboard_06.png" class="doc-img-frame">
</div>

Scroll down to ``Authentication Configuration`` menu, then Click ``Edit``.

<div align="center">
    <img src="/images/vendor/sso/salesforce_dashboard_07.png" class="doc-img-frame">
</div>

Under ``Authentication Configuration`` Dashboard, Check your custom IDP from ``Authentication Service``
check boxes.

<div align="center">
    <img src="/images/vendor/sso/salesforce_dashboard_08.png" class="doc-img-frame">
</div>
<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Done</span></p>
      </div>
    </div>
  </div>
</div>

---
title: "AWS"
description: "This page is about integration IDmelon and AWS. "
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "ssoforsso"
weight: 24
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

<p>In this document you are going to set up <span class="code-back">{{< params "IDmelon" >}}</span> as an external IdP to the <span class="code-back">AWS</span>.</p>

### Login to  AWS administration panel

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Sign in to the AWS Management Console with your AWS Organizations management account credentials.</p>
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
        <p>Open <a href="https://console.aws.amazon.com/singlesignon" style="font-size:16px;">the AWS SSO console</a>.</span>
        </p>
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
        <p>Choose <span style="font-weight:bold">Enable IAM Identity Center</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">4</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>If you have not yet set up AWS Organizations, you will be prompted to create an organization. Choose <span style="font-weight:bold">Create AWS organization</span> to complete this process.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">5</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose external identity provider</p>
      </div>
    </div>
  </div>
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
        <p>Open <a href="https://console.aws.amazon.com/singlesignon">the AWS SSO console</a>.</p>
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
        <p>Choose <span style="font-weight:bold">Settings</span>.</p>
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
        <p>On the <span style="font-weight:bold">Settings page</span>, choose the <span style="font-weight:bold">Identity source</span> tab, and then choose <span style="font-weight:bold">Actions > Change identity source</span>.</p>
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
        <p>Under <span style="font-weight:bold">Choose identity source</span>, select <span style="font-weight:bold">External identity provider</span>, and then choose <span style="font-weight:bold">Next</span>.</p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/sso/aws_dashboard_01.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Under <span style="font-weight:bold">Configure external identity provider</span>, do the following:</p>
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
        <p>Under <span style="font-weight:bold">Service provider metadata</span>, choose <span style="font-weight:bold">Download metadata</span> file to download the metadata file and save it on your system. The AWS SSO SAML metadata file is required by your external identity provider.</p>
      </div>
    </div>
  </div>
</div>
</div>

<div class="mx-3">
<p class="note-body">Get all values for <span class="code-back">{..}</span> from your {{< params "IDmelon Panel" >}}.<br>
If you are currently login here, you will see the replaced values instead.
</p>
</div>

<div class="mx-3">
<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Under <span style="font-weight:bold">Identity provider metadata</span>,</p>
      </div>
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
        <p>choose <span style="font-weight:bold">IdP sign-in URL :</span> idp_single_sign_on_url</p>
      </div>
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
        <p>choose <span style="font-weight:bold">IdP issuer URL :</span> idp_issuer_uri</p>
      </div>
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
        <p><span style="font-weight:bold">IdP certificate :</span> idp_certificate_download_url</p>
      </div>
    </div>
  </div>
</div>
</div>

<p align="center">
    <img src="/images/vendor/sso/aws_dashboard_03.png" class="doc-img-frame">
</p>

<div class="mx-3">
<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose <span style="font-weight:bold">Next.</span></p>
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
        <p>After you read the disclaimer and are ready to proceed, enter <span style="font-weight:bold">ACCEPT.</span></p>
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
        <p>Click <span style="font-weight:bold">Change identity source.</span></p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/sso/aws_dashboard_04.png" class="doc-img-frame">
</p>

### Attribute mappings

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Open <a href="https://console.aws.amazon.com/singlesignon" style="font-size:16px;">the AWS SSO console</a>.</p>
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
        <p>Choose <span style="font-weight:bold">Settings</span>.</p>
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
        <p>On the <span style="font-weight:bold">Settings page</span>, choose the <span style="font-weight:bold">Attributes for access control</span> tab, and then choose <span style="font-weight:bold">Add attribute</span>.</p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/sso/aws_dashboard_05.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose <span style="font-weight:bold">Add attribute</span>.</p>
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
        <p><span style="font-weight:bold">Key : Email, Value :</span><span class="code-back">${path:emails\[primary eq true\].value}</span></p>
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
        <p> <span style="font-weight:bold">Key : Firstname, Value :</span><span class="code-back">${path:name.givenName}</span></p>
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
        <p><span style="font-weight:bold">Key : lastname, Value :</span><span class="code-back">${path:name.familyName}</span></p>
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
        <p><span style="font-weight:bold">Key : Username, Value :</span><span class="code-back">${path:emails\[primary eq true\].value}</span></p>
      </div>
    </div>
  </div>
</div>
</div>

<p align="center">
<img src="/images/vendor/sso/aws_dashboard_06.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose <span style="font-weight:bold">Save changes</span>.</p>
      </div>
    </div>
  </div>
</div>

## ConvergeID SAML configuration

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">You should copy values of below fields from the AWS panel to the {{< params "IDmelon Panel" >}}</span>.</p>
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
        <p>Copy <span class="code-back">AWS Access portal sign-in URL</span> : this is your <span style="font-weight:bold">SP-initiated portal</span>.</p>
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
        <p>Copy <span class="code-back">IAM identity Center Assertion Consumer Service (ACS) URL</span> : <span style="font-weight:bold">Assertion consumer service</span></p>
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
        <p>Copy <span class="code-back">IAM identity Center issuer URL</span> : <span style="font-weight:bold">entity id</span></p>
      </div>
    </div>
  </div>
</div>
</div>

<p align="center">
<img src="/images/vendor/sso/aws_dashboard_07.png" class="doc-img-frame">
</p>

## API Token

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Open <a href="https://console.aws.amazon.com/singlesignon" style="font-size:16px;">the AWS SSO console</a>.</span>
        </p>
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
        <p>Choose <span style="font-weight:bold">Settings</span> in the left navigation panel.
        </p>
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
        <p>On the <span style="font-weight:bold">Settings</span> page, locate the <span style="font-weight:bold">Automatic provisioning</span> information box, and then choose <span style="font-weight:bold">Enable</span>. This immediately enables automatic provisioning in IAM Identity Center and displays the necessary SCIM endpoint and access token information.</p>
      </div>
    </div>
  </div>
</div>

<p align="center">
<img src="/images/vendor/sso/aws_dashboard_08.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>In the <span style="font-weight:bold">Inbound automatic provisioning</span> dialog box, copy each of the values for the following options. You will need to paste these in later when you configure provisioning in your IdP.</p>
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
          <p><span style="font-weight:bold">Copy</span> SCIM endpoint</p>
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
          <p><span style="font-weight:bold">Copy</span> Access token</p>
        </div>
      </div>
    </div>
  </div>
</div>

<p align="center">
<img src="/images/vendor/sso/aws_dashboard_09.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>For <span style="font-weight:bold">Access token</span>, click on <span style="font-weight:bold">Show token</span></p>
      </div>
    </div>
  </div>
</div>

<p align="center">
<img src="/images/vendor/sso/aws_dashboard_10.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose <span style="font-weight:bold">Close</span>.</p>
      </div>
    </div>
  </div>
</div>

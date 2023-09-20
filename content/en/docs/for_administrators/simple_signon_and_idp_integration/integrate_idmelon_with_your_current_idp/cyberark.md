---
title: "CyberArk"
description: ""
lead: ""
date: 2023-09-13T00:57:24+03:30
lastmod: 2023-09-13T00:57:24+03:30
draft: false
images: []
menu:
  docs:
    parent: "integrate_idmelon_with_your_current_idp"
weight: 72200
toc: true
---

<p>In this document you are going to set up <span class="code-back">IDmelon</span> as an external IdP to the <span class="code-back">CyberArk</span>.</p>

### Login to  CyberArk administration panel

<hr class="hr-line">

<p>In order to set up the connection, you will need to log into your <span class="code-back">CyberArk administration panel</span>.</p>

### Add Identity Provider

<hr class="hr-line">

<p>In the <span class="code-back">CyberArk administration panel</span>, from the side menu, navigate to the <span class="code-back">Settings</span> menu, then Click <span class="code-back">Users</span>.</p>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_01.png" class="doc-img-frame">
</div>

<p>Under the <span class="code-back">Sources</span> , Click <span class="code-back">External Identity Providers</span>.</p>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_02.png" class="doc-img-frame">
</div>

<p>Click <span class="code-back">Add</span> to add a new IdP config.</p>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_03.png" class="doc-img-frame">
</div>

<p>In the <span class="code-back">External Identity Providers Name</span>, Choose your custom IdP name.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">External Identity Providers Name</span> : <span class="code-back">Your custom name</span></p>
      </div>
    </div>
  </div>
</div>

<p>Activate the <span class="code-back">Active</span> button to redirect your users to IDmelon.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Active</span> : <span class="code-back">Click to Active</span></p>
      </div>
    </div>
  </div>
</div>

<p>Choose SAML 2.0 as <span class="code-back">Federation Type</span>.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Federation Type</span> : <span class="code-back">SAML 2.0</span></p>
      </div>
    </div>
  </div>
</div>

<p>For <span class="code-back">Federation Domains</span>, Add your custom users domain as many as your users have.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Federation Domains</span> : <span class="code-back">Your custom user domains</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_04.png" class="doc-img-frame">
</div>

<p><span class="code-back" style="font-weight:bold">Then Click Inbound Metadata option</span></p>

<p>There are several Options which IDmelon supports all of them,But IDmelon recommends to <span class="code-back">Upload IdP configuration from URL</span>.</p>

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
        <p><span style="font-weight:bold">Upload IdP configuration from URL</span> : idp_issuer_uri</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_05.png" class="doc-img-frame">
</div>

<p><span class="code-back" style="font-weight:bold">Then Click Outbound Metadata option</span><p>

## IDmelon SAML configuration

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>You should Download <span class="code-back" style="font-weight:bold">metadata</span> file and <span class="code-back" style="font-weight:bold">copy values</span> of below fields from this <span style="font-weight:bold">CyberArk panel</span> to <span style="font-weight:bold">IDmelon Panel</span></p>
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
        <p><span style="font-weight:bold">Download Service Provider Metadata</span> : <span style="code-back">Download Metadata</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_06.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold">Manual Configuration</span>.</p>
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
        <p><span style="font-weight:bold">Assertion consumer service</span> : Copy <span style="font-weight:bold">Service Provider Authentication Response URL</span>.</p>
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
        <p><span style="font-weight:bold">Entity id</span> : CN=CyberArk:Customer:{<span style="font-weight:bold">your custom subdomain in capital words</span>}</p>
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
        <p>My company Domain is https://aas4313.id.cyberark.cloud/ so my company subdomain which CyberArk provided will be :<br>
        <span style="font-weight:bold">abl4313</span> so my entity id will be <span class="code-back" style="font-weight:bold">Example :</span> <span class="code-back">CN=CyberArk:Customer:ABlL4313</span> .  
        </p>
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
        <p>You should copy values of below fields from this <span style="font-weight:bold">CyberArk panel</span> to <span style="font-weight:bold">IDmelon Panel</span>.  
        </p>
      </div>
    </div>
  </div>
</div>
<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_11.png" class="doc-img-frame">
</div>

<p><span class="code-back" style="font-weight:bold">Then Click Authentication option</span></p>

<p>In order to map IDmelon and CyberArk users, Choose Optional in the <span class="code-back">Map federated user to existing directory use</span>.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Map federated user to existing directory use</span> : <span class="code-back">Optional</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_07.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Click Save</span></p>
      </div>
    </div>
  </div>
</div>

<p><span style="font-weight:bold">Tips</span></p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Optional</span> : Selecting <span class="code-back">Optional</span> means authentication of a mapped federation user results in the user of the mapped directory service. If a user cannot be mapped, a new federated user is created.</p>
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
        <p><span style="font-weight:bold">Required</span> : Selecting <span class="code-back">Required</span> means the user of a federation will authenticate as the matching user of another directory service. If no match is found, login is denied. If <span class="code-back">Create cloud user if unable to map</span> is also enabled, a matched CyberArk Cloud Directory user is created and login is permitted.</p>
      </div>
    </div>
  </div>
</div>

## Suffixes for users domain Tips

<hr class="hr-line">

<p>In the <span class="code-back">CyberArk administration panel</span>, from the side menu, navigate to the <span class="code-back">Settings</span> menu, then Click <span class="code-back">Customization</span>.</p>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_08.png" class="doc-img-frame">
</div>

<p>Then under the <span class="code-back">Login</span>, Choose <span class="code-back">Suffix</span>, Click on <span class="code-back">Add</span> button which is on the Right hand of the dashboard.<p>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_09.png" class="doc-img-frame">
</div>

<p>Add Custom <span class="code-back">Login Suffix</span> ,example: username@<span class="code-back">idmelon.com</span></p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">Login Suffix</span> : <span class="code-back">username@Your custom domain</span></p>
      </div>
    </div>
  </div>
</div>

<p>on the <span class="code-back">Advanced</span> option user can mapped and log in with another suffix.</p>

<div align="center">
    <img src="/images/vendor/sso/cyberark_dashboard_10.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold">map users for sso</span> : if you want to use another suffix domain which does not exist in CyberArk but the user information exist in idmelon you have to <span style="font-weight:bold">uncheck</span> <span class="code-back" style="font-weight:bold">Keep Login Suffix and Mapped Suffix the same</span> and <span style="font-weight:bold">Choose</span> <span class="code-back" style="font-weight:bold">your custom userdomain</span>: Example : <span style="font-weight:bold">username@idmelon.me</span></p>
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
        <p><span style="font-weight:bold">Click Save.</span></p>
      </div>
    </div>
  </div>
</div>

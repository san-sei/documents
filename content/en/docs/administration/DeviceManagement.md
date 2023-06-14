---
title: "Device Management"
description: "Azure connected PCs and other devices such as smartphones and contactless cards."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 8
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

Two types of devices can be managed inside administration panel. The first type includes devices connected to Azure Active Directory (AD)
which can be imported into the administration panel and can be used for multiple purposes like device limitation when adding security key policies.
The second type includes security key devices which consist of any devices that users set as their security keys.

## Azure AD Connected PCs

<hr class="hr-line">

<p>Reach out to this section if you want to import already-joined PCs from Azure AD.
The imported PCs can later be used in <span style="font-weight:bold;">Security Key Policies</span> to limit access to specific devices. To join and list Azure AD connected PCs, the only required step is providing enough permission.
To import devices, click on <span style="font-weight:bold;">Import Azure AD-Connected Devices</span>, then you will be moved to a Microsoft page which asks you to choose an account.</p>

<div align="center">
    <img src="/images/vendor/Panel/DeviceManagement1.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>At this page you will be asked to choose the account that you want to connect.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/Panel/import_azure_ad_pcs.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Then you will be redirected to your IDmelon panel, and you can see the added devices.</p>
      </div>
    </div>
  </div>
</div>

<p class="note-body">
<span style="font-weight:bold;">Pay attention</span> to that you may need to sign-in again during the redirection process.

## Security Key Devices

<hr class="hr-line">

This section lists devices that users have set as their security keys which contains smartphones or Contactless Cards.
An admin can delete a device which disconnects its corresponding security key.

<div align="center">
    <img src="/images/vendor/Panel/devicemanagemnet_security.png" class="doc-img-frame">
</div>

By clicking on **User's Email** you will see **View User Information, its Group(s) and Security Key** page which shows the information of the user, thier security key devices and groups that they are membered in.

<div align="center">
    <img src="/images/vendor/Panel/view_user_information.png" class="doc-img-frame">
</div>

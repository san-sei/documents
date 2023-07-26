---
title: "User Management"
description: "Adding users to IDmelon"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 5
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

You can add, manage and assign security keys to users from **Users** section. You can add a **single user** or **import users from a CSV file, Azure AD, SCIM and LDAP**.

<div align="center">
    <img src="/images/vendor/Panel/users.png" id="_img" class="doc-img-frame" alt="zoom">
</div>

## Add single user

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Click on <span style="font-weight:bold">New User</span> to open the wizard below and Enter the user’s information.</p>
      </div>
    </div>
  </div>
</div>

<div align="center" style="margin-top: 0">
    <img src="/images/vendor/Panel/adduser/add_new_user_1.png" id="_img" class="doc-img-frame" alt="zoom" style="margin-top: 0">
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">In next step, choose groups that you want the user be a part of.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/Panel/adduser/add_new_user_2.png" class="doc-img-frame" id="_img" style="margin-top: 0">
</div>

In third step, turn the toggle on to have 3 options to assign a security key, inclucing [Smartphone](#smartphone), [Contactless Card](#contactless-card) and [FIDO2 Hardware Security Key](#hardware-security-keys). Follow the specific instruction in related sections.

<div align="center">
    <img src="/images/vendor/Panel/adduser/add_new_user_3-1.png" class="doc-img-frame" id="_img" style="margin-top: 0">
</div>

### Smartphone

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Choose Smartphone from the dropdown as Security Key Device and set the <span style="font-weight:bold">Smartphone as FIDO security key options</span>.
        </p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/Panel/adduser/add_new_user_3-2-1.png" class="doc-img-frame" id="_img" style="margin-top: 0">
</div>

<!-- <p class="note-body"><span style="font-weight:bold;">Note</span>: If administrator clicks on <span style="font-weight:bold;">Client PIN</span>, a PIN will be sent to the user's smarphone, and the PIN has to be entered to register the user.</p> -->

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>By confirming the user's information in the next page, an email containing an activation link will be sent to the user and also its status will be <span style="font-weight:bold">Pending</span>, waiting for him to activate his security key.<br>
        </p>
      </div>
    </div>
  </div>
</div>

### Contactless Card

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Choose <span style="font-weight:bold">Contactless Card</span> in the dropdown <span style="font-weight:bold">as a Security Key Device</span> and set a name for it. From <span style="font-weight:bold">Choose how to activate</span> dropdown, you can either choose <span style="font-weight:bold">Activate now</span> as an admin if you have the card physically near you or <span style="font-weight:bold">Activate by user</span> to send a registration link for user to activate the card himself.
        </p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/Panel/adduser/add_new_user_3-3-1.png" class="doc-img-frame" style="margin-top: 0">
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">In case of <span style="font-weight:bold">Active now</span>, simply click the <span style="font-weight:bold">Assign Contactless Card</span> button and tap the card on the reader when you see <span style="font-weight:bold">Touch your security key</span> window.<br>
        </p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/Panel/adduser/add_new_user_3-3-1-1.png" class="doc-img-frame" style="margin-top: 0">
</div>

<p class="note-body">
<span style="font-weight:bold;">Note </span>:In both cases, make sure you have installed the {{< params "Reader Driver" >}} on your PC or end-user’s PC. You can download it from <a href="https://idmelon.com/docs/downloads" style="font-size:16px;">here</a>.
</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>If the card is assigned successfully, click Next and Confirm to complete the assignment. The user will receive an email containing a PIN for his card as a security key device.
        <br>
        </p>
      </div>
    </div>
  </div>
</div>

### FIDO2 Hardware Security Keys

If you already have a security key and you want to use it as a FIDO2 hardware security key, select the third option in the security key device dropdown. The target user will receive a registration link to set his hardware, as a FIDO2 hardware security key. From now on, the security key can be used for passwordless logins based on FIDO standard wherever it is available.

<div align="center">
    <img src="/images/vendor/Panel/adduser/add_new_user_3-4.png" class="doc-img-frame" style="margin-top: 0">
</div>

## Import from a CSV File

<hr class="hr-line">
<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Click <span style="font-weight:bold">Import users -> Import from a CSV File</span> to open the wizard below. Then click <span style="font-weight:bold">Select File</span> to upload a CSV File.
        </p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/Panel/adduser/add_new_user_csv_1.png" class="doc-img-frame" style="margin-top: 0">
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Next, select the group that you want these users to be added to. Then click next to confirm the information.
        </p>
      </div>
    </div>
  </div>
</div>

## Import from Azure AD

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Click <span style="font-weight:bold">Import users -> Import from Azure AD</span> and grant the permission if requested to open the wizard below. Then click inside the dropdown to select groups in Azure AD and finally confirm your information in next page.
        </p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/Panel/import_user_azure_1.png" class="doc-img-frame" style="margin-top: 0">
</div>

<!-- <div align="center">
    <img src="/images/vendor/gifs/import_from_AzureAD.gif" class="doc-img-frame">
</div> -->

## User Provisioning

<hr class="hr-line">

<p>For complete information about User Provisioning refer to this <a href="/docs/administration/userprovisioning/" style="font-size:16px;" target="_blank">link</a>.</p>

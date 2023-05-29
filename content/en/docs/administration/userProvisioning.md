---
title: "User Provisioning"
description: "provisioning,OBR, login on behalf of an other user"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 14
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

## Prerequisite for Azure User Provisioning

<hr class="hr-line">

<p>This feature will help administrators register their user's security key on their account on their behalf, so the user can immediately use the security key to access their account without any registration efforts.To use this feature, the following conditions should be met:</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Temporary access pass</span>  should be enabled for your Azure AD workspace for all users or at least for the ones you want to register on their behalf. You can find more details on this <a href="https://learn.microsoft.com/en-us/azure/active-directory/authentication/howto-authentication-temporary-access-pass" style="font-size:16px;" target="_blank">here</a>.</p>
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
        <p>The target user should be imported from Azure AD, using <span style="font-weight:bold;">Import from Azure AD</span> option in <span style="font-weight:bold;">Users & Security Keys</span>, or be synced with Azure AD, so that there is an equivalent user in your Azure AD.</p>
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
        <p>When an IDmelon administrator tries to import users from Azure AD for the first time, they will be asked to log in to Azure to grant necessary permissions. The admin who is doing so cannot provision themself in IDmelon, as Azure prevents this action. For example, if <a style="font-size:16px;">michael@sunstore.ca</a> is used to import users from Azure AD, this user can't be provisioned from IDmelon Panel.</p>
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
        <p>The target user should be assigned a passkey security key, but it is not necessary to be activated in IDmelon Admin Panel.</p>
      </div>
    </div>
  </div>
</div>

## Azure User Provisioning Steps

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose a user you have imported from <span style="font-weight:bold;">Azure AD >> Click Action >> User Provisioning</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
  <img src="/images/vendor/Panel/userprovisioning/user_prov_1.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>A wizard will ask you to select a service and say that OBR will be enabled, and as long as it is so, any credential registration will take place on the selected user's security key. Select Microsoft Azure AD and follow the instructions.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
  <img src="/images/vendor/Panel/userprovisioning/user_prov_2.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
</div>

<div align="center">
  <img src="/images/vendor/Panel/userprovisioning/user_prov_3.png" class="doc-img-frame">
</div>

The admin may want to register security key on behalf of a user in some circumstances. To do this, the admin can use the OBR
procedure which can be done starting from pairing tool by doing the following steps:

## Prerequisite for OBR (On-Behalf Registration)

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>User must install IDmelon Authenticator app on their smartphone.</p>
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
        <p>User security key status must be active in administration panel (Admin must <a href="https://docs.idmelon.com/docs/administration/enrollment/" style="font-size=16px;">add the user</a> to the panel via invitation email and user must accept the invitation).</p>
      </div>
    </div>
  </div>
</div>

## OBR steps

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose a user you have imported from <span style="font-weight:bold;">Azure AD >> Click Action >> User Provisioning</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
  <img src="/images/vendor/Panel/userprovisioning/user_prov_1.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Select <span style="font-weight:bold;">Other Devices</span> to start <span style="font-weight:bold;">OBR</span> by other kinds of devices and click on <span style="font-weight:bold;">Start OBR</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
  <img src="/images/vendor/Panel/userprovisioning/4.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IDmelon Pairing Tool</span> will open and has to be <span style="font-weight:bold;">Ready for on behalf registration</span>.</p>
      </div>
    </div>
  </div>
</div>

<p align="center">
<img src="/images/vendor/Panel/OBR_3.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Now administrators can register account for their specific user.</p>
      </div>
    </div>
  </div>
</div>

<p class="note-body"><span style="font-weight:bold;">Note</span>: If a user's security key type is <span style="font-weight:bold;">local</span>, administrator must contact the user to approve the permissions that will be shown on the user's smartphone to complete the <span style="font-weight:bold;">OBR</span> steps.</p>

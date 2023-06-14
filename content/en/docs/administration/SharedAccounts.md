---
title: "Shared Accounts"
description: "How to share an account between multiple security keys"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 6
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

Contactless cards can be shared and used by multiple users. With this feature, if your organization has many employees, it is no longer necessary to provide a Contactless card for each one of them. You can prepare a limited number of cards and share them among the employees and simply manage them with IDmelon panel.

## How to share a contactless card

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Activate one or few contactless cards. For more information refer to <a href="https://docs.idmelon.com/docs/administration/enrollment/#contactless-card" style="font-size:16px;">How to activate a contactless card.</a></p>
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
        <p style="margin-bottom: 0">Click on one of your users, go to the user’s details page and click on the Activated Security key button to see a list of Contactless cards that this user can use.</p>
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
        <p style="margin-bottom: 0">Select cards which you are willing to share with the user and then hit the OK button. This will add the selected Contactless cards to the user’s devices.</p>
      </div>
    </div>
  </div>
</div>

## Example of how to use a shared account

<hr class="hr-line">

In the following picture, we’re on Michael’s page and in the Security keys table, we can see all Security keys that Michael has. There is a Device Access column that specifies if the device has more than one user or not. Single Account means it just belongs to the current user and Multiple Account means that it has more than one user. As you can see in the picture, one of Michael’s devices with the name of Michael – Blue Card is a Contactless card with a status other than pending and that means that we can share this device with other users.

<div align="center">
    <img src="/images/vendor/Panel/shared-accounts/shared-accounts-1.png" class="doc-img-frame" id="_img" style="margin-top: 0">
</div>

In order to add Michael’s Contactless card to other users' devices, we need to navigate to another user’s page and click on the Activated Security key button.

<div align="center">
    <img src="/images/vendor/Panel/shared-accounts/shared-accounts-2.png" class="doc-img-frame" id="_img" style="margin-top: 0">
</div>

This will open a modal that contains all usable Contactless cards for the current users.

<div align="center">
    <img src="/images/vendor/Panel/shared-accounts/shared-accounts-3.png" class="doc-img-frame" id="_img" style="margin-top: 0">
</div>

Select those which you are intended to add to the current user and click on the OK button.<br></br>
As you can see, Selected Contactless cards have been successfully added to the user’s Security keys and they will be able to use them for logging in to their accounts. login logs for each device will also be available in the Activities tab.

<div align="center">
    <img src="/images/vendor/Panel/shared-accounts/shared-accounts-4.png" class="doc-img-frame" id="_img" style="margin-top: 0">
</div>

### Actions on security keys

In the Security keys table, there is an Action column that we can use to perform some actions on Security keys that we want to. Please note that these actions will modify the selected Security key for all the users that are associated with them.

- **Suspend/Activate:** With this option, we can suspend/activate Security keys.
- **Edit:** This will change the name of the Security key.
- **Reset Pin:** This will reset the pin of the Contactless card and we will send a reset pin email to all of the users that are associated with it.
- **Delete:** This option is only available if you are on the Contactless card’s owner page. It will delete the Security key completely for all the users that are associated with it.

The following option will just affect the current user:

- **Revoke Access:** This will remove the Contactless card just for the current user, and they will be no longer able to use it. This option is only available if the current user is not the owner of that device.

## Limitations on Shared Accounts

<hr class="hr-line">

- Only Contactless cards can be used by more than one user.
- Only remote users are able to use this feature.
- Due to Windows limitations for login, if you attempt to login to Windows with a Contactless card that has more than one user associated with it, Windows will not ask you which user you want to login with, and it will log in with one of the users automatically. For handling this, you can use policies to set a default user for logging in to Windows for each Contactless card. You can find more details about policies <a href="https://docs.idmelon.com/docs/administration/skpolicy/" style="font-size:16px;">here.</a>
- If you change the policies of a Contactless card, users will need to resync their PCs with our server to get the policy updates. We will do that automatically in different periods of times, but to get the updates quickly, turning your device’s internet off and on will do that.

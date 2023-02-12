---
title: "Users and Security Keys"
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

When signed in to the administration panel, you are able to manage users and security keys from this section.
The first step is to add a single user or import users in bulk from Azure AD or a CSV file. In case of adding them one by one, you can assign a security key to the user at the same time.

<div align="center">
    <img src="/images/vendor/Panel/users&securitykeys.png" id="_img" class="doc-img-frame" alt="zoom">
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
        <p>At the top left, choose <span style="font-weight:bold">New User -> Add a user</span> to open the wizard below.<br>
        Enter the user’s information and click <span style="font-weight:bold">Next.</span>
        </p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/Panel/addnewuser.png" id="_img" class="doc-img-frame" alt="zoom">
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose group, and click Next. If no group is selected, the group <span style="font-weight:bold">New User -> Everyone</span> will be chosen by default.<br>
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/addnewusergp.png" class="doc-img-frame" id="_img">
</p>

As you can see the image below, you can turn the toggle on if you want to assign a security key now. If you turn the toggle on, you will have 3 options to assign a security key, the first is to choose [Smartphone](#smartphone), the second is [Contactless card](#contactless-card) and the third is [Hardware security keys](#hardware-security-keys). You can see the specified instructions in related sections.

<p align="center">
    <img src="/images/vendor/Panel/addnewuserskdev.png" class="doc-img-frame" id="_img">
</p>

### Smartphone

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Turn the toggle on and choose Smartphone from the dropdown below as Security Key Device.<br>
        From the <span style="font-weight:bold">Smartphone Assignment</span> segment, you can define the security key specifications.<br>
        Click the Next button to see the confirmation page.
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/addnewusersmph.png" class="doc-img-frame" id="_img">
</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>By clicking the Confirm button on this page, an email containing an activation link will be sent to the user’s email address.<br>
        The user’s status will be changed to <span style="font-weight:bold">Pending</span> waiting for the user to activate their security key.<br>
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/addnewuserconfirm.png" class="doc-img-frame">
</p>

### Contactless Card

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Choose <span style="font-weight:bold">Contactless Card</span> in <span style="font-weight:bold">Security Key Device</span> if you want to assign a Contactless Card to the user.<br>
        From <span style="font-weight:bold">Choose how to activate</span> dropdown, you can either choose <span style="font-weight:bold">Activate now</span> as an admin if you have the contactless card physically near you or <span style="font-weight:bold">Activate by user</span> if the card is not with you. In case of <span style="font-weight:bold">Activate by user</span>, the targeted user will receive an email containing a link to register the contactless card themself.
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/addnewusercontactlesscard.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>In case of <span style="font-weight:bold">Active now</span>, simply click the <span style="font-weight:bold">Assign Contactless Card</span> button to see the window <span style="font-weight:bold">Touch your security key</span>, and then tap your card on Reader to register.<br>
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/assignclesscard.png" class="doc-img-frame">
</p>

<p class="note-body">
<span style="font-weight:bold;">Note </span>:In either case, make sure the compatible reader is installed on your PC or end-user’s PC. Download and install rfIDEAS driver from <a href="https://idmeloncom-my.sharepoint.com/personal/hassan_idmelon_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fhassan%5Fidmelon%5Fcom%2FDocuments%2FDevelopment%2FReleases%2FAccesskey%2FAccesskeySetup1%2E1%2E18%5FrfIDEAS%2Eexe&parent=%2Fpersonal%2Fhassan%5Fidmelon%5Fcom%2FDocuments%2FDevelopment%2FReleases%2FAccesskey&ga=1" style="font-size:16px;">here</a> if you are using rfIDEAS reader.
</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Finally, the image below shows the card is assigned successfully. Click Next and Confirm to complete the assignment. The user will then receive an email containing
        a PIN for the security key.
        <br>
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/contaclessassigned.png" class="doc-img-frame">
</p>

#### Activate Contactless Card by User

<p align="center">
    <img src="/images/vendor/gifs/assign_card_active_by_user.gif" class="doc-img-frame">
</p>

### Hardware Security Keys

<hr class="hr-line">
<p align="center">
    <img src="/images/vendor/Panel/addnewuserhwsec.png" class="doc-img-frame">
</p>

## Import from a CSV file

<hr class="hr-line">
<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>At the top left, click <span style="font-weight:bold">Import users -> Import from a CSV fil</span> to open the wizard below.<br>
        Then click <span style="font-weight:bold">Select</span> to choose and upload a CSV file from which you want to import users.<br>
        Click <span style="font-weight:bold">Next.</span>
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/importftomCSV.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>On this page, you can choose which group you want these users to be added to.<br>
            If you do not choose any group, the <span style="font-weight:bold">everyone group</span> will be selected by default.<br>
            And then, click <span style="font-weight:bold">Next</span>.
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/gruopforCSV.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>When you see the below page, you can click <span style="font-weight:bold">Confirm</span> to add all the users.</p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/confirmCSVusers.png" class="doc-img-frame">
</p>

## Import from Azure AD

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>At the top left, click <span style="font-weight:bold">Import users -> Import from Azure AD</span> to open the wizard below.<br>
        Then click <span style="font-weight:bold">Select Group(s)</span> which is placed under <span style="font-weight:bold">Groups in Azure AD</span>, and you can see a list of groups.
        You can select as many groups as you want in order to import their users from Azure AD.  
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/import_user_azure_1.png" class="doc-img-frame">
</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>In this page, you can see the groups that you have selected. You can edit the selected groups by clicking on the pencile icon on the top right of the box.
        Click on <span style="font-weight:bold">Confirm</span> to add users of the groups that you have choosen.
        </p>
      </div>
    </div>
  </div>
</div>

<p align="center">
    <img src="/images/vendor/Panel/import_user_azure_2.png" class="doc-img-frame">
</p>

<p align="center">
    <img src="/images/vendor/gifs/import_from_AzureAD.gif" class="doc-img-frame">
</p>

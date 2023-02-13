---
title: "Introduction"
description: "Overall Description"
lead: "The IDmelon FIDO2 Orchestration Platform helps organizations simply and quickly deploy secure passwordless authentication for their users. Features like Security Key as a Service, FIDO2 managed security keys, and fully automated FIDO2 lifecycle are patented and unique approaches that help organizations enhance their workforce authentication security overnight. No more dealing with purchase and distribution of hardware FIDO2 security keys as organizations can use whatever device their users have as a FIDO2 security key. It can be an Access Card, a Key FOB or a smartphone."
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 1
toc: true
---

<div class="section-xxl">

## Create a Workspace

<div class="card-column">
  <div class="intro-card" >
    <div class="card-row-container">
      <div class="step-column intro-card-step-size">
        <p class="step-number">1</p>
      </div>
      <div class="card-body">
        <!--<p style="font-weight: bold;" >Create a workspace</p>-->
        <p>The IDmelon Security Key as a Service solution can be managed from the IDmelon Admin Panel. You can enroll and activate users' security keys, grant, restrict and monitor their access, manage licenses, and more. The Admin Panel is available <a href="/docs/administration/introduction/" style="font-size:16px;">here</a>. If it is your first try, you can create a workspace on behalf of your organization, or you can use your security key to experience a simple passwordless login.
        </p>
        <p><a href="/docs/administration/createworkspace/">How to create a workspace</a></p>
      </div>
    </div>
  </div>
</div>

## Add Users

<div class="intro-card">
  <div class="card-row-container">
    <div class="step-column intro-card-step-size">
      <p class="step-number">2</p>
    </div>
    <div class="card-body">
      <!--<p style="font-weight: bold;">Add Users</p>-->
      <p>When the workspace has been created, the first step to take is adding users, which can be done in three ways:
      <ul>
        <li>Add a single user</li>
        <li>Import from a CSV file</li>
        <li>Import from Azure AD</li>
      </ul>
      <a href="/docs/administration/enrollment/" style="margin:0;padding:0;">How to add users</a>
      </p>
    </div>
  </div>
</div>

## Assign Security Keys

<div class="card-column">
  <div class="intro-card-xxl">
    <div class="card-row-container">
      <div class="step-column intro-card-step-size">
        <p class="step-number">3</p>
      </div>
      <div class="card-body">
        <!--<p style="font-weight: bold;">Assign security keys</p>-->
        <p class="">While adding users, you can also assign security keys, which can be based on one of the three devices below:</p>
        <div class="tab-wrap">
          <!-- active tab on page load gets checked attribute -->
          <input type="radio" id="tab1" name="tabGroup1" class="tab" checked>
          <label for="tab1" class="tab1">Smartphone</label>
          <input type="radio" id="tab2" name="tabGroup1" class="tab">
          <label for="tab2" class="tab2">Contactless Card</label>
          <input type="radio" id="tab3" name="tabGroup1" class="tab">
          <label for="tab3" class="tab3">Hardware Security Key</label>
          <div class="tab__content">
            <p>The first option as a device is Smartphone for which an email containing an activation link will be sent to the user’s email address to let user activate their smartphone as a security key.</p>
            <p><a href="/docs/administration/enrollment/" style=" padding-bottom: 24px;">Smartphone as a security key device</a></p>
          </div>
          <div class="tab__content">
            <p>The second option as a security key device is Contactless Card. This type of device can be activated in two ways:
              <ul>
                <li><p>Activate now: activate a card for your user as an admin if you have the card physically near you.</p></li>
                <li><p>Activate by user: send an activation email to the user if the card is not with you (the targeted user will receive the registration link via email).</p></li>
              </ul>
            </p>
            <p>
            <a href="/docs/administration/enrollment/#contactless-card" style=" padding-bottom: 24px;">How to set up a Contactless Card as a security key device</a>
            <p>
          </div>
          <div class="tab__content">
            <p>If you already have a security key and you want to use it as a FIDO2 hardware security key, you must select this option. A registration link via email will let you set your hardware as a FIDO2 hardware security key. From then on, your security key can be used for passwordless logins based on FIDO2 standard wherever it is supported.</p>
            <p><a href="/docs/administration/enrollment/#hardware-security-keys" style=" padding-bottom: 24px;" >How to set up a FIDO2 hardware security key device</a></p>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>

## Security Key Policies

<div class="intro-card">
  <div class="card-row-container">
    <div class="step-column intro-card-step-size">
      <p class="step-number">4</p>
    </div>
    <div class="card-body">
      <p>The organization can control access of users by setting authentication policies. An admin can create new authentication policies to apply to users’ security keys to limit their access. The limitation can be based on multiple conditions such as time period, IP Address, RP (Relying Parties) that users are trying to reach out, and the location they are trying to login from.
      </p>
      <p><a href="/docs/administration/skpolicy/#create-new-policy">How create a security key policy</a></p>
    </div>
  </div>
</div>
</div>

---
title: "Introduction"
description: "IDmelon app, which is designed and developed by IDmelon Technologies Inc., lets users use their smartphones as a FIDO2 hardware security key. In environments with either shared computers or single-user PCs, users can enjoy password-less login experience with only a single tap of their smartphones on IDmelon Reader or a single click on a push notification."
lead: "The IDmelon FIDO Orchestration Platform helps organizations simply and quickly deploy secure passwordless authentication for their users. Features like Security Key as a Service, FIDO2 managed security keys, and fully automated FIDO2 lifecycle are patented and unique approaches that help organizations enhance their workforce authentication security overnight. No more dealing with purchase and distribution of hardware FIDO security keys as organizations can use whatever device their users have as a FIDO2 security key. It can be an Access Card, a Key FOB or a smartphone."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 1
toc: true
---

<div class="section-xxl">
<div class="card-row-container">
  <div class="step-column intro-card-step-size">
    <p class="step-number">1</p>
  </div>
  <div class="card-column">
    <div class="intro-card" >
      <div class="card-body">
        <p style="font-weight: bold;" >Create a workspace</p>
        <p>The IDmelon security key as a service solution can be managed from the IDmelon Admin Panel. You can enroll and activate users' security keys, grant, restrict and monitor their access, manage licenses, and more. The Admin Panel is available <a href="/docs/administration/introduction/">Here</a>. If it is your first try, you can create a workspace on behalf of your organization, or you can use your security key to experience a simple passwordless login.
        </p>
        <p><a href="/docs/administration/createworkspace/">How to create a work space</a></p>
      </div>
    </div>
  </div>
</div>

<div class="card-row-container">
  <div class="step-column intro-card-step-size">
    <p class="step-number">2</p>
  </div>
  <div class="card-column">
    <div class="intro-card">
      <div class="card-body">
        <p style="font-weight: bold;">Add Users</p>
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
</div>

<div class="card-row-container">
    <div class="step-column intro-card-step-size">
      <p class="step-number">3</p>
    </div>
    <div class="card-column">
    <div class="intro-card-xxl">
      <div class="card-body">
        <p style="font-weight: bold;">Assign security keys</p>
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
            <p>The second option as a security key device, is Contactless card. This type of device has two options for activation:
              <ul>
                <li><p>Activate now: activate the card for your user if as an admin you have the card physically near you</p></li>
                <li><p>Activate by user: send activation email to user if the card is not with you (the targeted user will receive registration link in an email).</p></li>
              </ul>
            </p>
            <p>
            <a href="/docs/administration/enrollment/#contactless-card" style=" padding-bottom: 24px;"> How to setup a Contactless card as a security key device</a>
            <p>
          </div>
          <div class="tab__content">
            <p>If you already have a security key and you want to use it as a FIDO2 Hardware security keys, you must select this option. A registration link in your email, will let you set your hardware, as a FIDO2 hardware security key. From now on, your security key can be used for passwordless logins based on FIDO standard wherever it is available.</p>
            <p><a href="/docs/administration/enrollment/#hardware-security-keys" style=" padding-bottom: 24px;" >How to setup a FIDO2 hardware security key device</a></p>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>

<div class="card-row-container">
  <div class="step-column intro-card-step-size">
    <p class="step-number">4</p>
  </div>
  <div class="card-column">
    <div class="intro-card">
      <div class="card-body">
        <p style="font-weight: bold;">Security key policies</p>
        <p class="">The organization can control access of users by setting authentication policies. An admin can create new authentication policies to apply to users’ security keys to limit their access. The limitation can be based on multiple conditions such as time period, IP Address, RP (Relying Parties) that users are trying to reach out, and the location they are trying to login from.
        </p>
        <p><a href="/docs/administration/enrollment/#hardware-security-keys">How to set up a FIDO2 hardware security key device</a></p>
      </div>
    </div>
  </div>
</div>

</div>

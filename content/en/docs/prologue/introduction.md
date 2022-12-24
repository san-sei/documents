---
title: "Introduction"
description: "IDmelon app, which is designed and developed by IDmelon Technologies Inc., lets users use their smartphones as a FIDO2 hardware security key. In environments with either shared computers or single-user PCs, users can enjoy password-less login experience with only a single tap of their smartphones on IDmelon Reader or a single click on a push notification."
lead: "The IDmelon FIDO Orchestration Platform helps organizations simply and quickly deploy secure passwordless authentication for their users. Features like Security Key as a Service, FIDO2 managed security keys, and fully automated FIDO2 lifecycle are patented and unique approaches that help organizations enhance their workforce authentication security overnight. No more dealing with purchase and distribution of hardware FIDO security keys as organizations can use whatever device their users have as a FIDO2 security key. It can be an Access Card, Key FOB or smartphone."
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

<div class="section section-xxl">
<div class="row-cols-1">
<div class="card intro-card card-transition-2">
  <div class="row g-0 ">
    <div class="col-md-2">
      <img src="/images/vendor/Introduction/step_1.svg" class="img-fluid intro-card-img-size card-img">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title my-3 mx-2">Create a workspace</h5>
        <p class="card-text px-1 mx-2">The IDmelon security key as a service solution can be managed from the IDmelon Admin Panel. You can enroll and activate users' security keys, grant, restrict and monitor their access, manage licenses, and more. The Admin Panel is available <a href="/docs/administration/introduction/">Here</a>. If it is your first try, you can create a workspace on behalf of your organization, or you can use your security key to experience a simple passwordless login.
        </p>
        <p class="px-2"><a href="/docs/administration/createworkspace/">How to create a work space</a></p>
      </div>
    </div>
  </div>
</div>

<div class="card intro-card card-transition-2">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="/images/vendor/Introduction/step_2.svg" class="img-fluid rounded-center intro-card-img-size">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title my-3 mx-2">Add Users</h5>
        <p class="card-text px-1 mx-2">When the workspace has been created, the first step to work with the admin panel is Adding users which can be done it three forms including:
        <ul>
          <li>Add a single user</li>
          <li>Import from a CSV file</li>
          <li>Import from Azure AD</li>
        </ul>
        <a href="/docs/administration/enrollment/" class="px-2">How to add users</a>
        </p>
      </div>
    </div>
  </div>
</div>

<div class="card text-center intro-card-xxl card-transition-2">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="/images/vendor/Introduction/step_3.svg" class="img-fluid rounded-center intro-card-img-size">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title text-start mx-2">Assign security keys</h5>
        <p class="card-text text-start px-1 mx-2">In all three forms of adding users, assigning security key is also possible which can be based on one of the three devices below.</p>
        <ul class="nav nav-pills nav-fill customized-nav-bar"   style="font-size: 14px;" id="myTab" role="tablist">
            <li class="nav-item pr-2" role="presentation">
            <button class="intro-nav-link intro-nav-link:active active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
            Smartphone</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="intro-nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Contactless Card</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="intro-nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Hardware Security Key</button>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <div class="col-md-20">
              <div class="card-body mt-2 mx-2">
                <p class="card-text text-start inner-card-text">The first option as a device when assigning a security key, is Smartphone. When you are done with the specifications, an email containing an activation link will be sent to the user’s email address to let user activate his smartphone as a security key.
                </p>
                <p class="card-text text-start inner-card-text"><a href="/docs/administration/enrollment/" style="position: relative; bottom: 8px;">smartphone as a security key device</a></p>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div class="col-md-20">
              <div class="card-body mt-2 mx-2">
                <p class="card-text text-start inner-card-text">The second option as a security key device, is Contactless card. This type of device has two options for activation:
                <ul>
                  <li><p class="card-text text-start inner-card-text">Activate now: activate the card for your user if as an admin you have the card physically near you</p></li>
                  <li><p class="card-text text-start inner-card-text">Activate by user: send activation email to user if the card is not with you (the targeted user will receive registration link in an email).</p></li>
                </ul>
                </p>
                <p class="card-text text-start inner-card-text"><a href="/docs/administration/enrollment/#contactless-card" style="position: relative; bottom: 8px;"> How to setup a Contactless card as a security key device </a> </p>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">
          <div class="col-md-20">
              <div class="card-body mt-2 mx-2 justify-conetent-start">
                <p class="card-text text-start inner-card-text">If you already have a security key and you want to use it as a FIDO2 Hardware security keys, you must select this option. A registration link in your email, will let you set your hardware, as a FIDO2 hardware security key. From now on, your security key can be used for passwordless logins based on FIDO standard wherever it is available.
                </p>
                <p class="card-text text-start inner-card-text"><a href="/docs/administration/enrollment/#hardware-security-keys" style=" position: relative;bottom: 8px;" >How to setup a FIDO2 hardware security key device</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>

<div class="card intro-card card-transition-2">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="/images/vendor/Introduction/step_4.svg" class="img-fluid rounded-center intro-card-img-size">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title my-3 mx-2">Security key policies</h5>
        <p class="card-text mx-2 px-1">The organization can control access of users by setting authentication policies. An admin can create new authentication policies to apply to users’ security keys to limit their access. The limitation can be based on multiple conditions such as time period, IP Address, RP (Relying Parties) that users are trying to reach out, and the location they are trying to login from.
        </p>
        <p class="px-2"><a href="/docs/administration/enrollment/#hardware-security-keys">How to setup a FIDO2 hardware security key device</a></p>
      </div>
    </div>
  </div>
</div>

</div>
</div>

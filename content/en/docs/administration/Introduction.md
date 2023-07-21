---
title: "Getting Started"
description: "Overall Description"
lead: "The IDmelon Passwordless Platform helps organizations simply and quickly deploy secure passwordless authentication. Features like Security Key as a Service, managed security keys, and automated onboarding help organizations enhance their workforce authentication overnight. No more dealing with purchase and distribution of hardware security keys as organizations can use their existing devices such as Access Cards, Key FOBs or smartphones."
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
        <p>The IDmelon Security Key as a Service solution can be managed from the IDmelon Admin Panel. You can enroll and activate users' security keys, grant, restrict and monitor their access, and more. If it is your first try, create a workspace on behalf of your organization.
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
            <p>The first option as a device is Smartphone. An email containing an activation link will be sent for the specified user to activate his smartphone as a security key.</p>
            <p><a href="/docs/administration/enrollment/" style=" padding-bottom: 24px;">Smartphone as a security key device</a></p>
          </div>
          <div class="tab__content">
            <p>The second option as a security key device is Contactless Card. This type of device can be activated in two ways:
              <ul>
                <li><p>Activate now: an admin can activate a card for a user if he has physical access to the card.</p></li>
                <li><p>Activate by user: send an activation email containing the registration link to the targeted user.</p></li>
              </ul>
            </p>
            <p>
            <a href="/docs/administration/enrollment/#contactless-card" style=" padding-bottom: 24px;">How to set up a Contactless Card as a security key device</a>
            <p>
          </div>
          <div class="tab__content">
            <p>If you already have a security key, select this option to receive a registration link to set your security key as a FIDO2 hardware security key.</p>
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
      <p>The organization can control access of users by setting authentication policies. An admin can create new authentication policies to apply to users’ security keys to limit their access. The limitation can be based on multiple conditions such as time, IP Address, RP (Relying Parties) that users are trying to reach out, and the location they are trying to login from.
      </p>
      <p><a href="/docs/administration/skpolicy/#create-new-policy">How create a security key policy</a></p>
    </div>
  </div>
</div>
</div>

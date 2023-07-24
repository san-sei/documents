---
title: "Security Key Policies"
description: "Make limitations on users authentication by security key policies"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 10
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

Create authentication policies to apply to users’ security keys to limit their access by multiple factors such as time period, IP Address, type of security key device, RP (Relying Party) that user is trying to reach, the device (PC) and also the location that user is trying to login from.

<div align="center">
    <img src="/images/vendor/Panel/SKPolicy1.png" class="doc-img-frame" style = "margin-top: 0">
</div>

## Create New Policy

<hr class="hr-line">

The first step is setting a default policy to **Allow** or **Block** using the **Default Policy** button. Then, the **New Policy** button can be used to add a new policy in following steps:

### Policy Name, Description and Priority

Select a name and description and set its priority to determine when (in what order) it must be checked.

<p align="center">
    <img src="/images/vendor/Panel/SKPolicy2.png" class="doc-img-frame" style = "margin-top: 0">
</p>

### Policy Conditions

Each policy can have multiple conditions including the following items which all of them must be true for the policy to apply:

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style = "margin-bottom: 0">Security Key Device Type (Smartphone, Contactless Card, Any Type)</p>
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
        <p style = "margin-bottom: 0">User(s) and Group(s)</p>
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
        <p style = "margin-bottom: 0">Time Limits (multiple periods of time for different days of the week)</p>
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
        <p style = "margin-bottom: 0">IP Restriction (the connection IP address)</p>
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
        <p style = "margin-bottom: 0">RP Restriction (the Relying Party)</p>
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
        <p style = "margin-bottom: 0">Access Restriction on PCs (Available only for Contactless Cards)</p>
      </div>
    </div>
  </div>
</div>
<!--
<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Location (user’s location)</p>
      </div>
    </div>
  </div>
</div>
-->
<p align="center">
    <img src="/images/vendor/Panel/SKPolicy3-1.png" class="doc-img-frame" style = "margin-top: 0">
</p>

### Policy Action

There are only two options including **Allow** and **Block** for the policy action.

<!-- <p align="center">
    <img src="/images/vendor/Panel/SKPolicy4.png" class="doc-img-frame">
</p>

### Review & Submit

In final step, everything can be edited and corrected if necessary, and submitted if everything is as expected by clicking on the
**Confirm** Button.

<p align="center">
    <img src="/images/vendor/Panel/SKPolicy5.png" class="doc-img-frame">
</p>
 -->

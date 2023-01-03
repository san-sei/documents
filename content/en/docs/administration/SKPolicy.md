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
weight: 8
toc: true
---

Each organization may want to have a variety of authentication policies for different groups of users. From this section, an organization’s admins can create new authentication policies to apply to users’ security keys to limit their access by multiple factors such as time period, IP Address, RP (relying parties) that users are trying to reach, and location they are trying to login from.

<p align="center">
    <img src="/images/vendor/Panel/SKPolicy1.png" class="doc-img-frame">
</p>

## Create new policy

The first step is setting a default policy to **Allow** or **Block** using the **Default Policy** button. Then, the **New Policy** button can be used to add a new policy in four following steps:

### Policy Name, Description and Priority

Selecting the name and description of the policy and setting its priority to determine when and in what order the policy must be checked.

<p align="center">
    <img src="/images/vendor/Panel/SKPolicy2.png" class="doc-img-frame">
</p>

### Policy Conditions

Each policy can be set with multiple conditions including the following items all of which must be true for the policy to apply:

- User(s), group(s) and security key device (smartphone or contactless card)
- Time (multiple periods of time for different days of the week)
- Device(s) (the PC that user is trying to login)
- IP (the connection IP address)
- RP (the Relaying Party)
- Location (user’s location)

<p align="center">
    <img src="/images/vendor/Panel/SKPolicy3.png" class="doc-img-frame">
</p>

### Policy Action

There are only two options including **Allow** and **Block** for the policy action.

<p align="center">
    <img src="/images/vendor/Panel/SKPolicy4.png" class="doc-img-frame">
</p>

### Review & Submit

In final step, everything can be reviewed and corrected if necessary, and submitted if everything is as expected.

<p align="center">
    <img src="/images/vendor/Panel/SKPolicy5.png" class="doc-img-frame">
</p>

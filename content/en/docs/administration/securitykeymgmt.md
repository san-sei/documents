---
title: "Managing Security Keys"
description: "Security key management"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft:  false
images: []
menu:
  docs:
    parent: "administration"
weight: 220
toc: true
---

## Assign security keys

In this page you will learn how to create a security key type and then assign it to as many users as you wish.

### Security Key Types

You can create different types of security key to assign, depending on where to save credentials and what user verification method to use. Credentials can be saved on either a user’s smartphone or CloudHSM. In the latter case, if a user’s smartphone is changed, their registered credentials can be restored.
There are two methods to verify a user: the user can either use a local authentication on their smartphone such as biometrics or enter a previously-set PIN. The latter is well suited for workplaces in which users need to wear gloves or masks, and therefore cannot provide biometric identifiers such as fingerprints.

{{< figure src="/images/vendor/Panel/sktypes.png">}}

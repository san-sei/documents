---
title: "Disabling PIN Verification for Contactless Card and IDmelon Access Key"
description: ""
lead: ""
date: 2023-09-20T14:21:39+03:30
lastmod: 2023-09-20T14:21:39+03:30
draft: false
images: []
menu:
  docs:
    parent: "manage_additional_security_key_features"
weight: 340.4
toc: true
---

**Step 1:** Download the **IDmelon Access Key** (Version 2.5.0.2 or later).

**Step 2:** Install the IDmelon Access Key on your device.

**Step 3:** If you have administrator rights on the device, you can set the policy in the IDmelon Access Key.  
To do this, run the following command:

```
accesskeycli set-pin-policy -p pin_prohibited
```

**Step 4:** To set a contactless card to PINless verification:

- Go to the panel and select the option to add a contactless card.
- Set the verification method to "PINless".  

![alt](/images/vendor/manage_additional_security_key_features/1.png "alt")

If you have previously added some contactless cards, you can change their verification method in the security keys page.

![alt](/images/vendor/manage_additional_security_key_features/2.png)

![alt](/images/vendor/manage_additional_security_key_features/3.png)

**Note:** If a contactless card is set to PINless verification, a warning icon will appear next to the card icon.

![alt](/images/vendor/manage_additional_security_key_features/4.png)

---

## Checking the Current Policy

To view the current policy, use the command:

```
accesskeycli get-pin-policy
```

---

## Enabling PIN Verification for Contactless Card and IDmelon Access Key

**Step 1:** With administrative rights on the device, change the IDmelon Access Key policy using the command:

```
accesskeycli set-pin-policy -p pin_required
```

**Step 2:** Edit the verification method for your contactless card to "PIN verification".

---

## Silent Installation of IDmelon Access Key with Set Policy

**Step 1:** Download the **IDmelon Access Key** (Version 2.5.0.2 or later).

**Step 2:** To install the access key with a required PIN, use the command:

```
installer.exe /S set-pin-policy -p pin_required
```

To install with a prohibited PIN, use the command:

```
installer.exe /S set-pin-policy -p pin_prohibited
```

---

**Important Note:** For optimal functionality, ensure the contactless card is set to "PINless" while the access key is set to "prohibited". A contactless card configured for PIN verification will not function with an Access key that is set to "prohibited" and vice versa.

---

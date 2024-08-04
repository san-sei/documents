---
title: "Requirements"
description: ""
lead: ""
date: 2023-09-11T13:48:48+03:30
lastmod: 2023-09-11T13:48:48+03:30
draft: false
images: []
menu:
  docs:
    parent: "manage_passkeys_and_credentials"
weight: 34100
toc: true
---

Before you start the passkey provisioning process, ensure the following requirements in `Azure Portal -> Entra ID Authentication Methods` are met:

- **Mandatory**: The `FIDO2 Security Key` must be available in the authentication methods for the targeted users.

- **Optional**: If using automatic provisioning or manual provisioning with TAP, ensure that `Temporary Access Pass` is enabled for the targeted users with the `one-time use` option set to `Yes`.

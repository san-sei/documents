---
title: "On Behalf Registration"
description: ""
lead: ""
date: 2022-04-25T22:27:07+03:00
lastmod: 2022-04-25T22:27:07+03:00
draft: false
images: []
menu:
  docs:
    parent: ""
weight: 230
toc: true
---

- Open the Pairing Tool, and press Ctrl + I and choose Login as an Admin.
- It will redirect you to the admin panel where you need to login.
- When you are successfully signed in, you will see the status in Pairing tool has changed to “Ready for on behalf registration”. This means, for any users that are already added/activated in the IDmelon panel, you are able to login on their behalf and register a security key for them.
- Pick a user from the list, choose “Select as OBR” to see the user is marked with the sign “OBR” on the panel.
- Now, when you try to add a security key to an account such as Microsoft account, the registration request will appear on the smartphone of the user whom you have earlier picked/marked from the list.  
- In case the security key type is Cloud HSM, the whole process will be silent. But in case the security type is “On Smartphone”, the target user will receive a notification to confirm the action.

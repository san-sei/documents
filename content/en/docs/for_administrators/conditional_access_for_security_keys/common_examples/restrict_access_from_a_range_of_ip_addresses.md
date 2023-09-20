---
title: "Restrict access from a range of IP addresses"
description: ""
lead: ""
date: 2023-09-20T15:00:22+03:30
lastmod: 2023-09-20T15:00:22+03:30
draft: false
images: []
menu:
  docs:
    parent: "common_examples"
weight: 43500
toc: true
---

To Restrict access from a range of IP addresses, follow these steps:

1. Go to the administrator panel.
2. Under the security tab, select security key policies.
3. Set the default policy to "Allow".
4. In the security key policies page, click on "+ New Policy Button".
5. In "Policy Name and Priority" step, fill the fields, give your policy a name that would be shown in policy list and a priority. A smaller number means higher priority.
6. In "set condition" step, choose IP Restriction, you can choose from named lists here or add a new IP Restriction with "+" button right in front of IP Restriction. If you choose to add IP Restriction, an IP Restriction form will pop up. You can specify IP or IP Range in the form (IP range will be defined in this format: 192.168.1.0/20, which means 20 IP from this IP as a starting point).
7. In the select action step, you can choose between two actions, Block or Allow, in this case we want to Restrict access from a range of IP addresses and our default policy is "Allow", so we choose "Block" for the action. When it's done click on Next.
8. In Review & Submit you can check all inputs and verify if you did every step properly.
9. You can see the policy in the security policy list.

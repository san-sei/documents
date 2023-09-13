---
title: "Common Examples"
description: ""
lead: ""
date: 2023-09-11T15:17:19+03:30
lastmod: 2023-09-11T15:17:19+03:30
draft: false
images: []
menu:
  docs:
    parent: "conditional_access_for_security_keys"
weight: 403
toc: true
---

## Allow access just from a city or country

To Allow access just from a city or country follow these steps:

1. Go to the administrator panel.
2. Under the security tab, select security key policies.
3. Set the default policy on "Block".
4. In security key policies page, click on "+ New Policy Button".
5. In Policy Name and Priority step fill the fields, give your policy a name that would be shown in policy list and a priority. A smaller number means higher priority.
6. When setting conditions, you should specify your security device type, in this case, if you want your coworkers to access just from a specific location you should choose smartphone as the security key device.
7. Also, in setting conditions, choose Location Restriction, you can choose from named list here or add a new location restriction with "+" button right in front of Local Restriction. If you choose to add location you can move the circle to bound the location, you can also reduce or increase the radius of location circle. Whenever you are done setting the conditions, you can click on the Next button to go to the next step.
8. In the select action step, you can choose between two actions, Block or Allow, in this case we want to bound some users to login from a specific location and our default policy is "Block", so we choose Allow. When it's done click on the Next button.
9. In Review & Submit you can check all inputs and verify if you did every step properly.
10. You can see the policy in the list of security key policies.

## Block access out of working hours for specific group of users

To Block access out of working hours for specific group of users, follow these steps:

1. Go to the administrator panel.
2. Under the security tab, select security key policies.
3. Put default policy on "Allow".
4. In the security key policies page, click on "+ New Policy Button".
5. In "Policy Name and Priority" step fill the fields, give your policy a name that would be shown in policy list and a priority. A smaller number means higher priority.
6. In set conditions step, you should specify your security device type, you can choose whatever device that you want for time constraint.
7. In set condition step, choose the groups you want to block their access out of working hours. Also, choose Time limits, you can choose from named list here or add a new Time Limits with "+" button right in front of Time Limits. If you choose to add Time Limits, a Time-based Limitation form will pop up. You can specify "Time Zone", "Days of Week" and "Time Period". For example, in this case you can choose Monday to Friday for days of the week and 9 to 5 in the time period. Whenever you are done, click on "Add Time" to add that condition then click on Next button.
8. In the select action step, you can choose between two actions, Block or Allow, in this case we want to block a group of out of working hours and the default policy is Allow, so choose "Block" to do this. When it's done click on Next.
9. In Review & Submit you can check all inputs and verify if you did every step properly.
10. You can see the policy in the security policy list.

## Tying a shared device to a single user account

To Tying a shared device to a single user account, follow these steps:

1. Go to the administrator panel.
2. Under the security tab, select security key policies.
3. Set the default policy to the Block.
4. In the security key policies page, click on "+ New Policy Button".
5. In Policy Name and Priority step fill the fields, give your policy a name that would be shown in policy list and a priority. A smaller number means higher priority.
6. In set conditions step, you should specify the user you want to bound to the shared device.
7. Also, in set condition step, you need to choose the device you want the selected user to be bound to.
8. In the select action step, you can choose between two actions, Block or Allow. In this case we want to bound a device to a single user and the default policy is block, then we need to set the action to Allow. When it's done click on the Next button.
9. In Review & Submit you can check all inputs and verify if you did every step properly.
10. You can see the policy in the security policy list.

## Restricting organization’s security keys on some RPs (Relying Parties)

To restrict organization’s security keys on some RPs, follow these steps:

1. Go to the administrator panel.
2. Under the security tab, select security key policies.
3. Set default policy on "Allow".
4. In the security key policies page, click on "+ New Policy Button".
5. In Policy Name and Priority step fill the fields, give your policy a name that would be shown in policy list and a priority. A smaller number means higher priority.
6. In set condition step, choose "RP Restriction", you can choose from named list here (a list of RPs that you defined before) or add new RPs with "+" button right in front of RP Restriction. You can add one or multiple RPs like "office.com" for Microsoft Office application or "login.microsoft.com" for PCs on Entra ID.
7. In the select action step, you can choose between two actions, Block or Allow, in this case we want to Restricting organization’s security keys on some RPs and our default policy is "Allow", so we choose "Block". When it's done click on the Next button.
8. In Review & Submit you can check all conditions and verify if you did every step properly.
9. You can see the policy in the security policy list.

## Restrict access from a range of IP addresses

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

## Block access from a specific type of security key device

To Block access from a specific type of security key device, follow these steps:

1. Go to the administrator panel.
2. Under the security tab, select security key policies.
3. Set the default policy on "Allow".
4. In the security key policies page, click on "+ New Policy Button".
5. In Policy "Name and Priority" step fill the fields, give your policy a name that would be shown in policy list and a priority. A smaller number means higher priority.
6. In set conditions step, specify the security key device type that you want to block access. Let's assume we want to block any access that is coming from a smartphone security key device, in this case choose "smartphone" in "Security Key Device Type".
7. In the select action step, you can choose between two actions, Block or Allow, in this case we want to block access requests coming from smartphone device and our default policy is "Allow", so choose "Block".
8. In Review & Submit you can check all inputs and verify if you did every step properly.
9. You can see the policy in the security policy list.

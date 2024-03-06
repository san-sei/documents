---
title: "Restricting Organization’s Security Keys on Some RPs (Relying Parties)"
description: ""
lead: ""
date: 2023-09-20T14:59:38+03:30
lastmod: 2023-09-20T14:59:38+03:30
draft: false
images: []
menu:
  docs:
    parent: "common_examples"
weight: 53400
toc: true
---

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

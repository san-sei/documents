---
title: "User Management"
description: "Adding users to IDmelon"
lead: "You can add, import, view, delete users, and assign security keys to them."
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 210
toc: true
---

## User enrollment

Here you will learn how to invite users from csv or Azure AD.

### From a CSV or Connecting to Azure AD

Bulk button allows you to import users from a CSV file or via a connection to Azure AD.

{{< figure src="/images/vendor/Panel/bulk.png">}}

Note that while you are adding a user or users to your workspace, you can assign a security key or security keys by turning on the “Assign a security key to user” toggle key:

{{< figure src="/images/vendor/Panel/toggle.png">}}

When you turn off the above-mentioned toggle key, the user(s) won’t receive the invitation email(s) until you later assign them a security key. [Assign a Security Key →](https://docs.idmelon.com/docs/administration/securitykeymgmt/)

You can also enclose an additional note with the invitation email to the user:

{{< figure src="/images/vendor/Panel/note.png">}}

## User's Status

As soon as you add a user to your workspace but you do not assign a security key to the user, the user’s status in the All Users entry will turn into **Not Invited**, But, immediately after assigning a security key to the user, the user’s status will become **Invited** while the Security Key status in the Users’ Security Keys entry will remain **Pending** until the user receives the invitation email to activate their security key.

Immediately after security key activation on the user’s smartphone, the status turns into **Active**:

{{< figure src="/images/vendor/Panel/active.png">}}

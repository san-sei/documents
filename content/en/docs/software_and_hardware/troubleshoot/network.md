---
title: "Network Configuration"
description: "Network Configuration"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "troubleshoot"
weight: 800000
toc: true
---


Client applications need to be able to access the following addresses and IP addresses,
so you should configure your firewall settings to allow access to these addresses.

You need to grant access to the following addresses:

* https://authnapi.idmelon.com
* https://skm.idmelon.com
* https://panel.idmelon.com
* https://login.idmelon.com
* https://idmp.idmelon.com
* https://notify.idmelon.com
* https://notifyservice.idmelon.com

Please ensure that your firewall rules and security policies are correctly configured
and that connections to the above addresses, especially on port `443`, are allowed.

The IP addresses of these addresses are based on Amazon's load balancer, and they are dynamic, so they are subject to change.

## Network troubleshooting

If you encounter any issues accessing the services,
please execute the following commands for troubleshooting and examine the results.

  curl  -v https://skm.idmelon.com/

  wget  -v https://skm.idmelon.com/

In Linux OS:

  dig +short panel.idmelon.com

In Windows OS:

  nslookup -q=ns panel.idmelon.com

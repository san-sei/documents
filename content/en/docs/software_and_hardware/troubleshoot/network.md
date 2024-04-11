---
title: "Network"
description: ""
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


## Network configuration

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

You need to grant access to the following IP addresses:

* 34.218.113.8
* 54.200.17.238
* 52.88.123.81

## Network troubleshooting:

If you encounter any issues accessing the services,
please execute the following commands for troubleshooting and examine the results.

  curl  -v https://skm.idmelon.com/

  wget  -v https://skm.idmelon.com/

In Linux OS:

  dig +short panel.idmelon.com

In Windows OS:

  nslookup -q=ns panel.idmelon.com

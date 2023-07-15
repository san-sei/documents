---
title: "Reader Driver"
description: ""
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "readerguide"
weight: 61
toc: true
---

## Check Reader Driver Status

Run the command below in Command Prompt to see the status:

```powershell
Accesskeycli status
```

In a healthy situation it should return the status below and also list the plugged Readers.

<div align="center">
    <img src="/images/vendor/Troubleshoot/AccesskeyCliStatus.png" class="doc-img-frame">
</div>

In the table below we have listed all known errors and resolutions to tackle the issue.

<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Error</th>
    <th class="tg-0pky">Resolve</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Reader Driver Service is not running</td>
    <td class="tg-0pky">Try to run <span style="color:#905;background-color:#ddd">`Accesskeycli restart`</span> in CMD and then check the status with above command again.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Reader Driver Service is not running (Status Code = “Unavailable”)</td>
    <td class="tg-0pky">This is probably a networking issue, and you need to make sure the security endpoint manager or firewall is not blocking the applications, domain, and IP Address that IDmelon service and application uses:</br>
    - AccessKeyService service with URL C:\Program Files (x86)\IDmelon\Accesskey\Service.exe</br>
    - https://authnapi.idmelon.com
    </td>
  </tr>
</tbody>
</table>

## Network Requirements

RFIDEAS Reader driver needs to be installed on every computer device to read the users' RFID/NFC badges data and communicate through the network with the ConvergeID server. To ensure smooth operation and communication between the RFIDEAS Reader driver and the ConvergeID server, minimal networking requirements need to be met on client computers. The ConvergeID software relies on standard network protocols and commonly used ports to function correctly. The ConvergeID application requires the ability to establish HTTP connections over ports 443 and 80.

<div align="center">
    <img src="/images/vendor/Troubleshoot/AccesskeyCliConverge.png" class="doc-img-frame">
</div>

Furthermore, if you are employing a more restricted policy than only allowing traffic through ports 80 and 443 and would like to put restrictions on a specific IP address, the following IP should also be whitelisted in the firewall: 216.239.38.21

It is essential to ensure that firewalls, proxy servers, or any network infrastructure do not block access to these ports and/or IP address. Please note that these networking requirements are sufficient for the smooth operation of the ConvergeID software and do not require any additional network configuration.

### Firewall Configuration Instructions for Windows 10 and Above

Follow the instructions below only in cases where your firewall is blocking HTTP requests. To allow traffic on ports 80 and 443, please follow these steps:

1. Press the Windows key on your keyboard and type "Windows Security." Open the Windows Security app from the search results.
2. In the Windows Security app, click on "Firewall & network protection."
3. Under "Firewall & network protection," click on "Advanced settings."
4. In the Windows Defender Firewall with Advanced Security window, click on "Outbound Rules" in the left pane.
5. Click on "New Rule" in the right pane to create a new outbound rule.
6. Select the "Port" option and click "Next."
7. Choose "TCP" as the protocol and specify "Specific local ports" as "80" (without quotes). Click "Next."
8. Select "Allow the connection" and click "Next."
9. Choose when the rule applies (Domain, Private, or Public networks) and click "Next."
10. Provide a name for the rule (e.g., "Allow idmelon.com HTTP traffic") and an optional description. Click "Finish" to create the rule.
11. Repeat steps 5-10 to create another outbound rule for port "443" and specify the same name but with "HTTPS" in the name (e.g., "Allow idmelon.com HTTPS traffic").
    By following these instructions, you will configure the Windows Firewall to allow outbound traffic on ports 80 and 443, enabling the ConvergeID software to establish proper connections.

### Check Manual Proxy Setup

If the manual proxy is turned on in the system settings to the route below, turn it off or put IDmelon IP addresses in its whitelist.

<div align="center">
    <img src="/images/vendor/Troubleshoot/ProxySetting.png" class="doc-img-frame">
</div>

## IDmelon Reader Driver IP Addresses

The list of IPs to which the system must have access is given in the table below.

<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">IP</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">216.239.32.21</td>
  </tr>
  <tr>
    <td class="tg-0pky">216.239.34.21</td>
  </tr>
  <tr>
    <td class="tg-0pky">216.239.36.21</td>
  </tr>
  <tr>
    <td class="tg-0pky">216.239.38.21</td>
  </tr>
</tbody>
</table>

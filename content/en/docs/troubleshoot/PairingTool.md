
# IDmelon Pairing Tool Troubleshooting

## Pairing Tool Status
If you encounter the following error when opening the __Pairing Tool__, the connection between the __Pairing Tool__ and the __IDmelon Service__ is probably not established.

<div align="center">
    <img src="/images/vendor/Troubleshoot/PairingToolServiceError.jpg" class="doc-img-frame">
</div>

This happens if the __Service__ is stopped due to not connecting to IDmelon endpoints.
To fix this problem, do the following steps:

## IDmelon Service Status
Check the __IDmelonService__ status in the Windows Services

<div align="center">
    <img src="/images/vendor/Troubleshoot/PairingToolServiceStopped.jpg" class="doc-img-frame">
</div>

If the __IDmelonService__ is stopped, start it and if you still have problems, continue with the following steps.

## Network Requirements 

If you are employing a restricted policy that only allows traffic through ports 80 and 443 and would like to put restrictions on a specific IP address, the following IP should also be whitelisted in the firewall: 216.239.38.21 

It is essential to ensure that firewalls, proxy servers, or any network infrastructure do not block access to these ports and/or IP address. Please note that these networking requirements are sufficient for the smooth operation of the ConvergeID software and do not require any additional network configuration.

### Firewall Configuration Instructions for Windows 10 and Above

Follow the instructions below only in cases where your firewall is blocking HTTP requests. To allow traffic on ports 80 and 443, please follow these steps:
1.	Press the Windows key on your keyboard and type "Windows Security." Open the Windows Security app from the search results.
2.	In the Windows Security app, click on "Firewall & network protection."
3.	Under "Firewall & network protection," click on "Advanced settings."
4.	In the Windows Defender Firewall with Advanced Security window, click on "Outbound Rules" in the left pane.
5.	Click on "New Rule" in the right pane to create a new outbound rule.
6.	Select the "Port" option and click "Next."
7.	Choose "TCP" as the protocol and specify "Specific local ports" as "80" (without quotes). Click "Next."
8.	Select "Allow the connection" and click "Next."
9.	Choose when the rule applies (Domain, Private, or Public networks) and click "Next."
10.	Provide a name for the rule (e.g., "Allow idmelon.com HTTP traffic") and an optional description. Click "Finish" to create the rule.
11.	Repeat steps 5-10 to create another outbound rule for port "443" and specify the same name but with "HTTPS" in the name (e.g., "Allow idmelon.com HTTPS traffic").
By following these instructions, you will configure the Windows Firewall to allow outbound traffic on ports 80 and 443, enabling the ConvergeID software to establish proper connections.

### Check Manual Proxy Setup
If the manual proxy is turned on in the system settings to the route below, turn it off or put IDmelon IP addresses in its whitelist.

<div align="center">
    <img src="/images/vendor/Troubleshoot/ProxySetting.png" class="doc-img-frame">
</div>

## Antivirus and Security Applications
If security software such as antivirus is installed on the computer, there is a possibility of blocking __IDmelon__ endpoints or restricting access of the Pairing Tool to the network.
So you need to add the IDmelon endpoints listed below and the __Pairing Tool__ to the Antivirus whitelist.

To add the __Pairing Tool__ to the whitelist, you will find the __Service__ and __Pairing Tool__ executable files at the following address:

___"C:\Program Files (x86)\IDmelon\Pairing Tool\Service.exe"___
___"C:\Program Files (x86)\IDmelon\Pairing Tool\Pairing Tool.exe"___

## IDmelon Pairing Tool IP Addresses
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
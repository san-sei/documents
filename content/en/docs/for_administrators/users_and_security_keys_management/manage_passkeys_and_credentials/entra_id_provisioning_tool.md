---
title: "Entra ID Provisioning Tool"
description: ""
lead: ""
date: 2024-01-14T14:30:00+03:30
lastmod: 2024-01-14T14:30:00+03:30
draft: false
images: []
menu:
  docs:
    parent: "manage_passkeys_and_credentials"
weight: 34300
toc: true
---
 
## Introduction  

This user guide provides instructions for using the `provisioning.exe` tool designed to streamline the creation of security keys for users on the Microsoft Azure sign-in portal. This document covers the initial beta version of the tool, which will be continuously improved over time.  

## Initial Steps  

Before using the `provisioning.exe` tool, ensure the following:  

1. **Recommended Chrome Version:** Version 119.0.6045.200 (Official Build) (64-bit) or a more recent version is installed.  

2. **Download Lists of Users:**  
    - To download user data for provisioning, follow these steps:  
    - Go to the IDmelon panel.  
    - Navigate to the "Users" menu.  
    - Select the users for whom you want to perform the provisioning action.  
    - Once you have selected the users, click on the export users icon.  
    - From the dropdown, choose the "Export for Provisioning Tool" option.  
    - This action will initiate the download of a CSV file containing the information of the selected users.  

3. **Downloading and Preparing the Tool:**  
    - Download the `provisioning.exe` tool.  
    - Place both the `users.csv` and the `provisioning.exe` in the same directory.  

## Using the Tool  

To effectively utilize this tool, follow these steps:  

1. Ensure that you are logged into your workspace at the following address: <https://panel.idmelon.com>  

2. After logging in, execute the following command to retrieve credentials and initiate the tool's setup:  

```powershell
.\provisioning.exe --login
```

The tool will provide guidance throughout the setup process. Once ready, press Enter.  

Subsequently, the tool will open your web browser and redirect you to the Microsoft portal for authorization.  

Upon successfully granting access, you will be redirected back to the IDmelon panel, and a success message will be displayed in your CMD/PowerShell, confirming the successful login.  

Once you receive this success message, you may proceed to use the tool.  

> **CAUTION**: Please note that the credentials remain valid for 12 hours. After this duration, the tool will prompt you to perform the login procedure again, as described in this section.  

### Execution Steps  

1. Hold the Shift key and right-click in the directory where the `provisioning.exe` exists.  
2. Select "*Open PowerShell*" from the context menu.  
3. In the PowerShell window, use the following command to execute the script:  

```powershell
.\provisioning.exe --csv .\users.csv
```

This command will execute a silent version of the tool; however, it is recommended to execute the tool using the following command for visual monitoring:  

```powershell
.\provisioning.exe --csv .\users.csv --mode headful --verbose
```

### Options  

The following command will execute the tool with verbose output:  

```powershell
.\provisioning.exe --csv .\users.csv --verbose
```

If you prefer to monitor the process in a visible browser window (headful mode), you can use the following command. However, ensure not to interact with the opened browser window during the process, as it may disrupt the workflow:  

```powershell
.\provisioning.exe --csv .\users.csv --mode headful
```

**Note:** It is possible to chain options to have both a headful browser and verbosity:  

```powershell
.\provisioning.exe --csv .\users.csv --mode headful --verbose
```

**Version Information:** To print the version of the tool, use the `--version` flag:  

```powershell
.\provisioning.exe --version
```

### Logging and Issue Tracking  

We are tracking the tool's activity and collect logs in both visual and text formats. The tool takes screenshots and generates textual logs during its operation. The logs and screenshots directories are automatically created next to the `provisioning.exe` file.  

In case you encounter any issues or errors while using the tool, please consider sharing the logs and screenshots with us. This will help us diagnose and address the cause of any failures more effectively. Your cooperation in this regard is highly appreciated.  

**Note:** All logs are collected on your local computer. The tool does not collect any data on IDmelon servers.  

### Important Notes  

**Headful Mode Caution:** In headful mode, avoid any interaction with the open browser window, even if you believe it is stuck on an error. The script will detect errors and continue after a few seconds. If the page goes blank, it will be interrupted after 90 seconds, so do not interact with the browser.  

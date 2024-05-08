---
title: "Automation App"
description: ""
lead: ""
date: 2024-05-08T10:30:55+03:30
lastmod: 2024-05-08T10:30:55+03:30
draft: false
images: []
menu:
  docs:
    parent: "workflow_automation"
weight: 96100
toc: true
---

The Workflow Automation application is an extension that can be installed on PC along with IDmelon Accesskey to automate the user login and logout routine in kiosk environments (Windows Kiosk, KioWare, etc.). Therefore, the login (and logout) steps are done once by a system admin, and then by tapping the user's card on the reader, the login steps are done automatically, as well as for the user to exit the kiosk environment.

## Requirements

- [Card Reader Drivers](https://idmelon.com/docs/downloads)
- [Workflow Automation App](https://idmelon.com/docs/downloads)

## Installation

First, install the latest version of the desired reader (Accesskey) and then the latest version of IDmelon Workflow Automation.

## Enable Automation App

To switch to automation mode, you must first enter the following command in a PowerShell.

```shell
accesskeycli workflow-automation -s -t automation-app -a login-logout -p microsoft-login -e kiosk-interactive -u https://myapps.microsoft.com?login_hint=${UserId}
```

- `-s`: To activate automation and configure it.
- `-t automation-app`: This value is always fixed.
- `-a login-logout`: To set the automation actions. In this case, both the login and logout procedures can be automated. (Other possible actions: `-a login` , `-a logout`)
- `-p microsoft-login`: To set the target platform. In this case, our goal is Microsoft 365 login and logout automation.
- `-e kiosk-interactive`: To set the environment. In this case, we want to use the kiosk environment of Windows 10 and 11. (Other possible environments: `-e kioware`, `-e kiosk-browser`).
- `-u https://myapps.microsoft.com?login_hint=${UserId}`: To set the target URL. In this case, we set the Microsoft 365 URL.

## Disable Automation App

To disable the Workflow Automation, enter the following command in a PowerShell.

```shell
accesskeycli workflow-automation -r -t automation-app
```

## Automation Train

The training operation is performed only once by the admin.
In this example, we are going to go through the steps to train the login operation for Microsoft 365.

- Enter the following command in a PowerShell:

```shell
accesskeycli workflow-automation -c -a login
```

- After entering the above-mentioned command, a message will be displayed. (Image below).

![Automation Train](/images/vendor/workflow_automation/automation_app/train_start.png)

Please note that before confirming this message, you must open the kiosk environment in full screen and after the desired page is fully loaded, confirm the displayed message.

![Automation Train](/images/vendor/workflow_automation/automation_app/kiosk_env.png)

- From this moment on, each mouse click indicates the desired point for training.
Remember that if the input value is to be entered by you (e.g. email, etc.), first click on the desired field and then enter your value.

- Finally, when all the steps are taken correctly, by pressing the right mouse button (on any point of the screen), this training will end and a message (image below) will be displayed to you.

![Automation Train](/images/vendor/workflow_automation/automation_app/train_finish.png)

- To train the logout operation, first, enter the following command in a PowerShell. The rest of the steps are completely similar to login.

```shell
accesskeycli workflow-automation -c -a logout
```

**Notice: Currently, for the kiosk environment (kiosk-interactive, kiosk-browser), the logout operation does not need to be trained, and when the user's card is tapped to log out, the kiosk environment is automatically restarted.**

## KioWare

One of the software that has implemented the kiosk environment is KioWare, which is supported by the IDmelon Workflow Automation extension.
The only difference between KioWare and the Windows kiosk is the need to train the logout operation.

### Config KioWare

- Open `KioWare Config Tool` on your system.

- Select the option **Attract/Inactivity** from the left menu.

- From the **Session End Settings** section, set the **When the session ends, clear:** option as follows:

![Automation Train](/images/vendor/workflow_automation/automation_app/kioware_menu1.png)

- Select the option **General** from the left menu.

- From the **Exit Passcodes** section, click on **Add Exit Passcode** button.

![Automation Train](/images/vendor/workflow_automation/automation_app/kioware_menu2.png)

- From the new dialog that opens, set the **Exit Action** option to `Restart KioWare`.

- In the **Change Passcode** section, enter your desired passcode.

- Click on **Done** button.

![Automation Train](/images/vendor/workflow_automation/automation_app/kioware_menu3.png)

### Automation Train

Training the login steps is completely similar to the Windows kiosk. Follow the steps below to train logout steps.

- Enter the following command in a PowerShell

```shell
accesskeycli workflow-automation -c -a logout
```

- Wait for the start training alert to appear.

![Automation Train](/images/vendor/workflow_automation/automation_app/train_start2.png)

- Open **Kioware** software on your system.

- Click on the specified point (image below) **four** times until the message to enter the **passcode** appears.

![Automation Train](/images/vendor/workflow_automation/automation_app/kioware_env.png)

- Type the exit action code.

- Click on the **OK** button.

![Automation Train](/images/vendor/workflow_automation/automation_app/kioware_passcode.png)

- Press the right mouse button (on any point of the screen), this training will end, and a message (image below) will be displayed to you.

![Automation Train](/images/vendor/workflow_automation/automation_app/train_finish.png)

## Automation

After the training process is over, everything is ready to use.
When the user taps the card on the reader, if the login page is open in the kiosk environment, the automation will be started and clicks will be done automatically.
If the user has already logged in and the card is tapped again, the kiosk will automatically restart and be ready for the next user to log in.

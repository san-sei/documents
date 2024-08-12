---
title: "Automation App"
description: ""
lead: ""
date: 2024-05-08T10:30:55+03:30
lastmod: 2024-08-12T10:30:55+03:30
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

- [Card Reader Drivers](https://idmelon.com/docs/downloads) (3.4.0 and later)
- [Workflow Automation App](https://idmelon.com/docs/downloads) (1.1.0 and later)

## Installation

First, install the latest version of the desired reader (Accesskey) and then the latest version of IDmelon Workflow Automation.

## Enable Automation App

To switch to automation mode, you must first enter the following command in a PowerShell.

```shell
accesskeycli workflow-automation -s -t automation-app -a login-logout -e kiosk-interactive
```

- `-s`: To activate automation and configure it.
- `-t automation-app`: This value is always fixed.
- `-a login-logout`: To set the automation actions. In this case, both the login and logout procedures can be automated. (Other possible actions: `-a login` , `-a logout`)
- `-p microsoft-login` (Optional): To set the target platform. In this case, our goal is Microsoft 365 login and logout automation.
- `-e kiosk-interactive`: To set the environment. In this case, we want to use the kiosk environment of Windows 10 and 11. (Other possible environments: `kioware`, `kiosk-multiapps`, `-e kiosk-browser`).
- `-u https://myapps.microsoft.com?login_hint=${UserId}` (Optional): To set the target URL. In this case, we set the Microsoft 365 URL.

## Disable Automation App

To disable the Workflow Automation, enter the following command in a PowerShell.

```shell
accesskeycli workflow-automation -r -t automation-app
```

## Automation Training

The training operation is performed only once by the admin.
In this example, we are going to go through the steps to train the login process for Microsoft 365.

### Automatic Training

In this case, if no workflow is predefined for the target platform while tapping the card, the training hints window will be displayed and the training procedure will begin.

To enable automatic training, enter the following command in PowerShell.

```shell
accesskeycli workflow-automation -c enable-auto-capture
```

To disable automatic training, enter the following command in PowerShell.

```shell
accesskeycli workflow-automation -c disable-auto-capture
```

- Navigate to the website or application you need training for.
- Tap a card on the reader.
- Click the **Yes** button on the presented alert if you want to start the training.

![Automation Train](/images/vendor/workflow_automation/automation_app/no_workflow_found.png)

- The training hints window will appear as follows.

![Automation Train](/images/vendor/workflow_automation/automation_app/training_hints_window.png)

- Leave the toggle of the **Display Tap to Login Page** on to see the **Tap Your Card** alert on the top of the start page later for each login.

![Automation Train](/images/vendor/workflow_automation/automation_app/tap_card_alert.png)

- Toggle the **Enable Error Message for Unregistered Cards** on to display an error after tapping a card which is not enrolled yet.

![Automation Train](/images/vendor/workflow_automation/automation_app/card_unregistered_alert.png)

- Click the **Start** button to start the training.
- The recording icon will appear in the bottom right corner of the screen which means that each click will be captured as a step.

![Automation Train](/images/vendor/workflow_automation/automation_app/recording_icon.png)

- During the recording process, try to click only on the icons, buttons, or links, and not on the white spaces. After all the clicks are captured as all the necessary steps, click on the recording icon to stop training.

### Manual Training

In this scenario, admins are required to take all the similar steps except for the command that they need to enter in PowerShell. Enter the following command so that the training hints window will be displayed and the training will begin.

```shell
accesskeycli workflow-automation -c start -a login
```

**Notice: Currently, for the kiosk environment (kiosk-interactive, kiosk-browser, kiosk-multiapps), the logout operation does not need to be trained, and when the user's card is tapped to log out, the kiosk environment is automatically restarted.**

## Copying Workflows onto other Computers

Workflows created on a PC can be copied onto others PCs. That is, the training steps are performed only once on one PC by an administrator, and after copying the workflow files onto other PCs, there is no need to training on each PC separately.<br>

*Note: The **Monitor Dimensions**, **Scale** and **Display Resolution** of all systems must be the same.*

![Automation Train](/images/vendor/workflow_automation/automation_app/screen_resolution.png)

Copy the following folder to the same path in other PCs.

`C:\Program Files (x86)\IDmelon\Accesskey\Extensions\WorkflowAutomation\Actions`

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

### Automation Training

Training the login steps is completely similar to the Windows kiosk. Follow the steps below to train logout steps.

- Open **Kioware** software on your system.
- Enter the following command in a PowerShell.

```shell
accesskeycli workflow-automation -c start -a logout
```

- Wait for the training hints window to appear and click the **Start** button.

![Automation Train](/images/vendor/workflow_automation/automation_app/training_hints_window.png)

- Click on the specified point (image below) **four** times until the message to enter the **passcode** appears.

![Automation Train](/images/vendor/workflow_automation/automation_app/kioware_env.png)

- Type the exit action code.

- Click on the **OK** button.

![Automation Train](/images/vendor/workflow_automation/automation_app/kioware_passcode.png)

- Click on the recording icon in the bottom right corner of the screen, this training will end, and a message (image below) will be displayed to you.

![Automation Train](/images/vendor/workflow_automation/automation_app/train_finish.png)

## Automation

After the training process is over, everything is ready to use.
When the user taps the card on the reader, if the login page is open in the kiosk environment, the automation will be started and clicks will be done automatically.
If the user has already logged in and the card is tapped again, the kiosk will automatically restart and be ready for the next user to log in.

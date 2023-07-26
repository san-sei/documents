---
title: "Shared Accounts"
description: "How to share an account between multiple security keys"
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 6
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

Shared Accounts are a special type of users in {{< params "IDmelon Passwordless Orchestration Platform" >}} ({{< params "IPOP" >}}). Shared Accounts enables administrators to be able to grant access to any Contactless Card registerd in the panel (from any user) to be able to use credentials of specific user (the Shared Account) for logins. This powerful feature enhances access control and satisfies a common use case described later in this user guide. Let's delve deeper into the details of Shared Accounts and discover how they can enhance your user management capabilities within {{< params "IPOP" >}}.

## How to Create a Shared Account

<p class="note-body"><span style="font-weight:bold;">Note: </span>The remainder of the document assumes that you have already added multiple users and contactless cards to your workspace. Please refer to <a href="/docs/administration/enrollment/#contactless-card" style="font-size:16px;">this document</a> if you are unsure how to perform the aforementioned tasks.</p>

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Login to your workspace</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Under <i>Security Key Management</i>, navigate to <i>Users</i> menu</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Select an <span style="color: green">Active</span> user that you intend to designate as a Shared Account</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">4</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Click on the <i>Add Activated Security Key</i> button</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">5</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Choose the contactless cards to which you wish to grant access for login using the selected user's credentials</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">6</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Confirm your changes by clicking on the OK button</p>
      </div>
    </div>
  </div>
</div>

Following these simple steps you have successfully granted access to one or multiple contactless cards, allowing them to utilize the login credentials associated with the chosen user, thereby transforming the user into a Shared Account.

On the same page, you will notice that under the _Device Access_ column, the added devices are now labeled as _Multiple Account_. This designation indicates that these devices are employed by more than one user/account within the {{< params "IPOP" >}}. Conversely, devices exclusively owned by a single user/account are identified as _Single Account_. This classification enables convenient differentiation between devices utilized for multiple or singular purposes within the platform.

### Actions on Security Keys

Within the Security keys table, you will find an Action column that provides the ability to perform various actions on the Security keys. **It is important to note that actions will have a global impact on the selected Security key and its corresponding users**. We list the available actions below:

- **Suspend/Activate:** Suspend/Activate security keys
- **Edit:** Modify properties of security keys
- **Reset Pin:** Reset the pin of the contactless card and **sends a reset pin email to all of the users associated with the security key**.
- **Delete:** Deletes the Security key completely for all the users that are associated with it. This option is only available if you are on the contactless card’s owner page.

The following option only affects the shared account:

- **Revoke Access:** This removes the contactless card only from the shared account. The card is no longer able to login using the credentials of the shared account.

## Limitations on Shared Accounts

<hr class="hr-line">

- Only contactless cards can be used in shared accounts.
- It does not work when credentials are bound to a FIDO security key or platform.
- If you change the policies of a Contactless card, users will need to resync their PCs with our server to get the policy updates. We will do that periodically, but to get the updates quickly, **turning your device’s internet off and on will force the sync process**.

When attempting to log in to Windows using a contactless card that is linked to multiple users/accounts, Windows will not prompt you to select a specific user/credential, instead choosing a user/credential on its own accord.

To address this issue, you can employ policies to establish a default user/credential for Windows login. **The following section offers an illustrative example of associating a shared account with a computer through {{< params "IPOP" >}} policies**.

## Associate a Shared Account with a Computer

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Navigate to the <strong>Security > Security Key Policies</strong> menu and click on the <strong>New Policy</strong> button.</p>
      </div>
    </div>
  </div>
</div>

> We assume that the default policy of our workspace is Block, which blocks all user activities by default.

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">2</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Fill in the required information and proceed to step 2, which is <i>Set Conditions</i>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">3</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">In the <strong>Security Key Device Type</strong> section, select Contactless Card.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">4</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">In the <strong>Users and Groups</strong> section, select the user/shared account that you want to use as the default account for login.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">5</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">In the <strong>Access Restriction on PCs</strong> section, select the PCs on which you want this policy to take effect.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">6</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">In the third step, choose <i>Allow</i> as your policy's action. This way, the chose user/shared account will be the only account capable of logging into Windows on the selected computer.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">7</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p style="margin-bottom: 0">Submit your changes, and you will have a new policy in the policies table.</p>
      </div>
    </div>
  </div>
</div>

After implementing the policy, any attempts to log in to the specified computer using a contactless card that is not linked to the selected user/shared account will be denied or blocked. Using shared accounts, only contactless cards associated with the selected shared account are allowed to login to Windows on the specified computer.

> To further study about policies and how to use them, please refer to the <a href="http://idmelon.com/docs/administration/skpolicy/">policies section</a>.

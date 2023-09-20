---
title: "System Overview"
description: ""
lead: "This section will provide an overview of the system, the components that make up the system, and the key components for IT managers. It worth mentioning that the system is designed to be intuitive and user-friendly and can be tailored for any business with any size. IDmelon is built on a robust and scalable cloud infrastructure, using the latest security standards and technologies (such as Google HSM) to ensure the highest levels of data protection and privacy. IDmelon offers a wide range of services and integrations, including single sign-on, Azure AD integration, user management, and access control as well as its main service that enables FIDO in many environments; whether it is on-premise or cloud based. It is also designed to be highly scalable and customizable for enterprise organizations, allowing us to easily adapt it to their infrastructure and environments needs."
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "scrty"
weight: 900000
toc: true
---

## Abstracted System Overview

<hr class="hr-line">

<p>This abstracted system architecture overview outlines the components and services used to build and run IDmelon Passwordless Orchestration Platform (IPOP) on Google Cloud Platform (GCP). It explains how the components interact with each other to provide the application’s functionalities. It also provides an overview of how the application is deployed and configured on the Cloud.<p>

<div align="center">
    <img src="/images/vendor/Security/Security_5.png" class="doc-img-frame">
</div>

## System Security

<hr class="hr-line">

<p>
IPOP has a comprehensive security strategy that provides confidentiality, integrity, and availability; all designed by our security experts. <br></br>
On the layer of data security, we address latest security measures. Credentials are stored encrypted or in Google Hardware Security Module (HSM) and keys are securely managed by Google Secret Manager to ensure latest security measures are always applied. <br></br>
Concerning data transfer, we have made sure to implement best practices such as input validations, TLS, Cloudflare protections, data encryption, CORS, sanitization, and many more.
</p>

## Sync with Azure AD

<hr class="hr-line">

<p>
To sync groups, users, and devices with Microsoft Azure Active Directory, we safely follow the official Microsoft GraphAPI and documentation. The following diagram depicts an overview of the sync process:
</p>

<div align="center">
    <img src="/images/vendor/Security/Security_6.png" class="doc-img-frame">
</div>

<p>Briefly, the permissions and APIs are as follows:</p>

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p> <span style="font-weight:bold">Read all groups:</span> Permission: GroupMember.Read.All <br></br> URL: <a href="https://graph.microsoft.com/v1.0/groups" style="font-size:16px;">https://graph.microsoft.com/v1.0/groups</a>
        </p>
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
        <p> <span style="font-weight:bold">Read all groups members:</span> Permission: GroupMember.Read.All <br></br> URL: <a href="https://graph.microsoft.com/v1.0/groups/${GROUP_ID}/members" style="font-size:16px;">https://graph.microsoft.com/v1.0/groups/${GROUP_ID}/members</a>
        </p>
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
        <p> <span style="font-weight:bold">Read connected devices (Windows devices only):</span> Permissions: Directory.Read.All,Device.Read.All <br></br> URL: <a href="https://graph.microsoft.com/v1.0/devices?$filter=operatingSystem" style="font-size:16px;">https://graph.microsoft.com/v1.0/devices?$filter=operatingSystem eq 'Windows'</a>
        </p>
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
        <p> <span style="font-weight:bold">Get temporary access pass:</span> Permission: UserAuthenticationMethod.ReadWrite.All <br></br> URL: <a href="https://graph.microsoft.com/v1.0/users/${USER_GUID}/authentication/temporaryAccessPassMethods" style="font-size:16px;">https://graph.microsoft.com/v1.0/users/${USER_GUID}/authentication/temporaryAccessPass</a>
        </p>
      </div>
    </div>
  </div>
</div>

## System Updates

<hr class="hr-line">

<p>IDmelon leverages automation CI/CD and GCP tools to ensure that all components are updated in a coordinated and timely manner. To ensure that the system remains stable during the upgrade process, we will use backup and rollback strategies to ensure that any unexpected issues can be quickly addressed. Additionally, our rolling release strategy ensures that users always receive the latest updates as quickly as possible. Finally, we use monitoring tools to ensure that the system is performing as expected and that any potential problems are quickly identified and addressed.</p>

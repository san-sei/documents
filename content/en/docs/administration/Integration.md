---
title: "Integrations"
description: ""
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "administration"
weight: 13
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

Simple sign-on (SSO) is an authentication approach that grants users secure authentication with multiple applications and websites by using just one set of credentials (ID).
SSO works based upon a trust relationship set up between an application, known as the service provider (SP), and an identity provider (IDP). IDmelon admin panel also
provides the same services to its users. It operates as an IDP to provide passwordless authentication experiance for users. IDmelon SSO integration can be done through
services that support **SCIM (System for Cross-Domain Identity Management)**, some of them are directly supported by IDmelon and can be added automatically ,besides ,IDmelon
provides manual SSO integration. IDmelon uses **SAML (Security Assertion Markup Language)** for SSO integration. The services that are currently supported directly by
IDmelon are : Azure AD, Pingidentity, Duo, Okta, Onelogin, Cyberark, Google Workspace.

## Service Provider (SP)

<hr class="hr-line">

A service provider (SP) is a company that provides organizations with consulting, legal, real estate, education, communications, storage, processing, and many other
services. Although the term service provider can refer to organizational sub-units, it is more generally used to refer to third party or outsourced suppliers, including
communication service providers, application service providers,storage service providers, and Internet service providers. Service Provider (SP) initiated SSO involves the SP
creating a SAML request, forwarding the user and the request to the Identity Provider (IdP), and then, once the user has authenticated, receiving a SAML response & assertion
from the IdP. This flow would typically be initiated by a login button within the SP.

## Idnetity Provider (IDP)

<hr class="hr-line">

An identity provider (IdP) is a service that stores and manages digital identities. Companies use these services to allow their employees or users to connect with the
resources they need. They provide a way to manage access, adding or removing privileges, while security remains tight. Identity Provider (IdP) initiated SSO involves the
user clicking on a button in the IdP, and then being forwarded to an SP along with a SAML message containing an assertion. This flow would typically be initiated by a page
within the IdP that shows a list of all available SPs that a user can log into. IDmelon operates as a secure and trustworthy identity provider as it uses SAML and SCIM
Adminstrators can use this feature to login to different services that they need with a single IDmelon security key besides, giving opportunity to their emplyees to
experiance passwordless authentication to services that they need.

## SCIM

<hr class="hr-line">

SCIM stands for System for Cross-Domain Identity Management. SCIM links systems for the purpose of managing identities in applications and services which are cloud-based in
a more streamlined and secure way. It is a standard for automating the exchange of user identity information between identity domains, or IT systems. SCIM consists of
standardized HTTP points and a RESTful API to run CRUD operations on users and groups sources. Employees use SCIM for everything from customer relationship management to
team collaboration.

## JIT

<hr class="hr-line">

**JIT stands for Just in Time Provisioning**. It is a method for automating user account creation. It recieves information from IDPs and sends to SPs via SAML. This enables
adminstrators to create accounts for their users automatically. **Just in Time (JIT) Provisioning** is used to create users the first time they log in to an application via
a third-party identity provider JIT provisioning eliminates the need to provision users or create user accounts manually. JIT Provisioning is independent of the SSO protocol
used by service providers but it’s vital to note that for this approach to work, the web application must support Just in Time (JIT) Provisioning.

## Integration Process

<hr class="hr-line">

Adminstrators can **integrate with a new identity provider** using IDmelon administration panel in multiple ways that are provided
by IDmelon. They can add SSO configuration manually or automatically. In case of automatic SSO configuration, we will show
administrators a guide on how to configurate, however, **it has to be noted that automatic SSO configuration, can only be done forservices which are suported by IDmelon**.If they choose manual configuration, they have to visit the SP's documents to be
guided besides here in IDmelon administration panel, they will be shown a panel for posting SSO configuration.
The purpose of this doc is to help administrators to have an overview of Integration process.
This process can be started by simply clicking on **Integrate with a new Identity Provider(IdP)**.

<p align="center">
    <img src="/images/vendor/Panel/admin_integration_1.png" class="doc-img-frame">
</p>

### Select a Service

In this page, you can either select a new service or **Add a custome new service** depending on your needs.
Click **Next** when you are done.

<p align="center">
    <img src="/images/vendor/Panel/admin_integration_2.png" class="doc-img-frame">
</p>

### App Profile

Here, you have to insert necessary data into the fields. Pay attention to the URLs.
Click **Next** when you are done.

<p align="center">
    <img src="/images/vendor/Panel/admin_integration_3.png" class="doc-img-frame">
</p>

### App Settings

As you can see in the images below, you have to add all settings related to the service that you want to integrate.
Click **Next** when you are done.

<p align="center">
    <img src="/images/vendor/Panel/admin_integration_4.png" class="doc-img-frame">
</p>

<p align="center">
    <img src="/images/vendor/Panel/admin_integration_5.png" class="doc-img-frame">
</p>

### App Attributes Mapping

Here you can name the variables that you can map.
Click **Confirm** to finish the **Integration Process**.

<p align="center">
    <img src="/images/vendor/Panel/admin_integration_6.png" class="doc-img-frame">
</p>

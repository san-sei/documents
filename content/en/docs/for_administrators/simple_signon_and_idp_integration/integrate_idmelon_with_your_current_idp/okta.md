---
title: "Okta"
description: ""
lead: ""
date: 2023-09-13T00:58:15+03:30
lastmod: 2023-09-13T00:58:15+03:30
draft: false
images: []
menu:
  docs:
    parent: "integrate_idmelon_with_your_current_idp"
weight: 72600
toc: true
---

In this document you are going to set up ``IDmelon`` as an external IdP to the ``Okta``.

## Login to  Okta administration panel

<hr class="hr-line">

In order to set up the connection, you will need to log into to your ``Okta administration panel``.

To login to the ``Okta administration panel``, click the ``Admin`` button on the top right corner of OKTA user panel page.

<div align="center">
    <img src="/images/vendor/sso/okta_dashboard_01.png" class="doc-img-frame">
</div>

## Add Identity Provider

<hr class="hr-line">

In the ``Okta administration panel``, from the side menu, navigate to the ``Security`` menu.

<div align="center">
    <img src="/images/vendor/sso/okta_dashboard_02.png" class="doc-img-frame">
</div>

Then from the ``Security`` menu,  select the ``Identity Providers`` sub menu.

<div align="center">
    <img src="/images/vendor/sso/okta_dashboard_03.png" class="doc-img-frame">
</div>

Then press ``Add Identity Provider`` button from the main panel.

<div align="center">
    <img src="/images/vendor/sso/okta_dashboard_04.png" class="doc-img-frame">
</div>

Then select the ``SAML 2.0 IdP``, from available options, and then press ``Next`` button.

<div align="center">
    <img src="/images/vendor/sso/okta_dashboard_05.png" class="doc-img-frame">
</div>

## Configure SAML 2.0 IdP

<hr class="hr-line">

To configure SAML 2.0 IdP, fill the values of settings as below.

In the ``General settings`` section:

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Name</span> <span style="font-style:italic;">Your custom name</span>.</p>
      </div>
    </div>
  </div>
</div>

In the ``Authentication Settings`` section:

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IdP Usage</span> <span style="font-style:italic;">SSO Only</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IdP username</span> <span style="font-style:italic;">idpuser.subjectNameId</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/okta_sso_only.png" class="doc-img-frame">
</div>

In the ``SAML Protocol Settings`` section:

<p class="note-body">Get all values for <span class="code-back">{..}</span> from your IDmelon panel.<br>
If you are currently login here, you will see the replaced values instead.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IdP Issuer URI</span> idp_issuer_uri</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IdP Single Sign-On URL</span> idp_single_sign_on_url</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">IdP Signature Certificate</span> idp_certificate_download_url</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Request Binding</span> <code class="code-back">HTTP POST</code>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/okta_dashboard_08.png" class="doc-img-frame">
</div>

In the continuation of ``SAML Protocol Settings`` section:

<p class="note-body">Get all values for <span class="code-back">{..}</span> from your IDmelon panel.<br>
If you are currently login here, you will see the replaced values instead.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Request Signature | Sign SAML Authentication Requests:</span><code class="code-back">Should be selected</code>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Request Signature Algorithm:</span><code class="code-back">SHA-256</code>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Response Signature Verification:</span><code class="code-back">Response or Assertion</code>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Response Signature Algorithm:</span><code class="code-back">SHA-256</code>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Destination:</span> idp_destination</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Okta Assertion Consumer Service URL | Trust-specific:</span><code class="code-back">Should be selected</code>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Max Clock Skew:</span><code class="code-back">2 Minutes</code>.</p>
      </div>
    </div>
  </div>
</div>

And at the end click the ``Finish`` button.

<div align="center">
    <img src="/images/vendor/sso/okta_dashboard_09.png" class="doc-img-frame">
</div>

### Setup IdP Routing rules

<hr class="hr-line">

After completing ``Identity providers`` section, click on ``Routing rules`` and then Add new rule by clicking ``Add Routing Rule`` Button.

<div align="center">
    <img src="/images/vendor/sso/okta_rules_01.png" class="doc-img-frame">
</div>

Then configs are:

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">choose custom Rule Name</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Use This identity provider :</span><code class="code-back">Use specific IdP(s)</code>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Idp(s) :</span><code class="code-back">Enter your custom name of idp</code>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/okta_rules_02.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">click on Update rule</span>.</p>
      </div>
    </div>
  </div>
</div>

Activate your new idp rule by clicking on ``Active`` button.

## IDmelon SAML configuration

<hr class="hr-line">

After completing previous ``Setup Okta connection`` section and submitting the form, you can see a new IdP added to your list.

Expand the details by clicking on the small arrow left to the added record on the list.

You should copy values of below fields from the ``Okta`` panel to the ``IDmelon`` Panel:

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">SAML metadata</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Assertion Consumer Service URL</span>.</p>
      </div>
    </div>
  </div>
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Audience URI</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/okta_dashboard_10.png" class="doc-img-frame">
</div>

## Passwordless

<hr class="hr-line">

For active ``Passwordless`` or  ``one Factor access`` ,
from the side menu, navigate to the ``Security`` menu and select the ``Authentication Policies`` sub menu.

<div align="center">
    <img src="/images/vendor/sso/okta_passwordless_01.png" class="doc-img-frame">
</div>

Then click on  any application you wanted to use as ``one Factor access``.

<div align="center">
    <img src="/images/vendor/sso/okta_policy_01.png" class="doc-img-frame">
</div>

Then click on ``Actions`` button and then click  the ``Edit`` option.

<div align="center">
    <img src="/images/vendor/sso/okta_policy_03.png" class="doc-img-frame">
</div>

In the `THEN` section of `Edit Rule` set values as below:

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">AND User must authenticate:</span> <code class="code-back">Password / IdP</code>.</p>
      </div>
    </div>
  </div>
</div>

And then click `Save` button.

<div align="center">
    <img src="/images/vendor/sso/okta_policy_02.png" class="doc-img-frame">
</div>

## API Token

<hr class="hr-line">

From the side menu, navigate to the ``Security`` menu and select the ``API`` sub menu.

And then click the `Token` tab from main page, and then click the `Create token` button.

<div align="center">
    <img src="/images/vendor/sso/okta_api_01.png" class="doc-img-frame">
</div>

Enter the desired name for your API token.

<div align="center">
    <img src="/images/vendor/sso/okta_api_02.png" class="doc-img-frame">
</div>

And then copy The value of created API token.

<div align="center">
    <img src="/images/vendor/sso/okta_api_03.png" class="doc-img-frame">
</div>

<p class="note-body"><span style="font-weight:bold;">Note :</span> please paste this option to Idmelon okta Integration on <span class="code-back">Check Connection</span> field.<br></p>

The created ``Token`` will be shown in the token list.

<div align="center">
    <img src="/images/vendor/sso/okta_api_04.png" class="doc-img-frame">
</div>

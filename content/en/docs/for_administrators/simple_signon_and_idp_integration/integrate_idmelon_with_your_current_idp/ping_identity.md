---
title: "Ping Identity"
description: ""
lead: ""
date: 2023-09-13T00:58:44+03:30
lastmod: 2023-09-13T00:58:44+03:30
draft: false
images: []
menu:
  docs:
    parent: "integrate_idmelon_with_your_current_idp"
weight: 90
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

In this document you are going to set up ``IDmelon`` as an external IdP to the ``Ping Identity``.

## Login to  Ping Identity administration panel

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Login to</span> <a href="https://www.pingidentity.com/en/account/sign-on.html" style="font-size:16px;">Ping Identity</a>.</p>
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
        <p>Open Ping Identity dashboard.</p>
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
        <p>on the rightside hand of navbar Click on <span style="font-weight:bold;">Administrators</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_dashboard1.png" class="doc-img-frame">
</div>

## Add Identity Provider

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click <span style="font-weight:bold;">Connection</span></p>
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
        <p>Under IDENTITY PROVIDERS Click on <span style="font-weight:bold;">External IdPs</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_dashboard2.png" class="doc-img-frame">
</div>  

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold;">Add Provider</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_dashboard3.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold;">SAML</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_dashboard4.png" class="doc-img-frame">
</div>

## Configure SAML 2.0 IdP

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Configure SAML 2.0 IdP</p>
      </div>
    </div>
  </div>
</div>
<div class="mx-3">
    <div class="step-row-container">
        <div class="step-column bullet-container">
            <div class="bullet"></div>
        </div>
        <div class="card-column">
        <div class="step-text" >
            <div class="card-body">
                <p>Create IdP Profile</p>
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
                <p><span style="font-weight:bold;">NAME :</span> Custom_name</p>
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
                <p><span style="font-weight:bold;">DESCRIPTION :</span> Custom_description</p>
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
                <p><span style="font-weight:bold;">ICON :</span> Custom_icon</p>
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
                <p><span style="font-weight:bold;">LOGIN BUTTON :</span> Custom_login_button</p>
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
                <p><span style="font-weight:bold;">Continue</span></p>
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
                <p>Configure PingOne Connection then select <span style="font-weight:bold;">Continue</span></p>
            </div>
        </div>
        </div>
    </div>
    <div align="center">
        <img src="/images/vendor/sso/ping_dashboard5.png" class="doc-img-frame">
    </div>
    <div class="step-row-container">
        <div class="step-column bullet-container">
            <div class="bullet"></div>
        </div>
        <div class="card-column">
        <div class="step-text" >
            <div class="card-body">
                <p>Configure IdP Connection</p>
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
                <p>Choose : <span style="font-weight:bold;">Manually enter the following metadata information</span></p>
            </div>
        </div>
        </div>
    </div>
    <p class="note-body">Get all values for <span class="code-back">{..}</span> from your IDmelon panel.<br>
    If you are currently login here, you will see the replaced values instead.</p>
    <div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p><span style="font-weight:bold;">SSO endpoint :</span> idmelon single sign on url</p>
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
            <p><span style="font-weight:bold;">IdP entity ID :</span> idp_issuer_uri</p>
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
            <p><span style="font-weight:bold;">SSO binding :</span> Specifies the binding to use for the authentication request. Select HTTP Post or HTTP Redirect.</p>
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
            <p><span style="font-weight:bold;">VERIFICATION CERTIFICATE :</span> idp_certificate_download_url</p>
        </div>
        </div>
    </div>
    </div>
    <div align="center">
        <img src="/images/vendor/sso/ping_dashboard6.png" class="doc-img-frame">
    </div>
    <div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p><span style="font-weight:bold;">Save and Continue</span></p>
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
            <p>On the <span style="font-weight:bold;">Map Attributes</span> page, define how the PingOne user attributes are mapped to identity provider attributes. For more information, see <a href="https://docs.pingidentity.com/bundle/pingone/page/pwv1567784207915.html" style="font-size:16px;"> Mapping attributes</a></p>
        </div>
        </div>
    </div>
    </div>
    <div class="mx-5">
    <div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Enter the PingOne user profile attribute and the external IdP attribute. For more information about attribute syntax, see <a href="https://docs.pingidentity.com/bundle/pingone/page/qtp1647276356200.html" style="font-size:16px;"> Identity provider attributes</a></p>
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
            <p>To add an attribute, click<span style="font-weight:bold;"> \+ Add attribute</span></p>
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
            <p>To use the expression builder, click <span style="font-weight:bold;">Build and test</span> or <span style="font-weight:bold;">Advanced Expression</span>. See<a href="https://docs.pingidentity.com/bundle/pingone/page/hri1641569602468.html" style="font-size:16px;"> Using the expression builder</a></p>
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
            <p>Select the update condition, which determines how PingOne updates its user directory with the values from the identity provider. The options are:</p>
        </div>
        </div>
    </div>
    </div>
        <div class="mx-3">
        <div class="step-row-container">
        <div class="step-column bullet-container">
            <div class="bullet"></div>
        </div>
        <div class="card-column">
            <div class="step-text" >
            <div class="card-body">
                <p><span style="font-weight:bold;">Empty only</span>: Update the PingOne attribute only if the existing attribute is empty.</p>
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
                <p><span style="font-weight:bold;">Always</span>: Always update the PingOne directory attribute.</p>
            </div>
            </div>
        </div>
        </div>  
        </div>
    </div>  
    <div align="center">
        <img src="/images/vendor/sso/ping_dashboard8.png" class="doc-img-frame">
    </div>
    <div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p><span style="font-weight:bold;">Save & Finish</span></p>
        </div>
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
            <p>Enabling or disabling IDmelon as Identity Provider : <a href="https://docs.pingidentity.com/bundle/pingone/page/hvt1567784210895.html" style="font-size:16px;">Reference</a></p>
        </div>
    </div>
    </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_dashboard9.png" class="doc-img-frame">
</div>

<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
    <div class="step-text" >
        <div class="card-body">
            <p><span style="font-weight:bold;">Finish</span></p>
        </div>
    </div>
    </div>
</div>

## Setting idp-init for Ping Identity

<hr class="hr-line">

<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
    <div class="step-text" >
        <div class="card-body">
            <p>According to<a href="https://docs.pingidentity.com/bundle/pingone/page/wou1649186902011.html" style="font-size:16px;"> Ping Identity document</a></p>
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
            <p>Go to <span style="font-weight:bold;">Connections → Applications</span></p>
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
            <p>Add a <span style="font-weight:bold;">new Oidc Application</span></p>
        </div>
    </div>
    </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_idp_init1.png" class="doc-img-frame">
</div>  

<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
    <div class="step-text" >
        <div class="card-body">
            <p>Add Application</p>
        </div>
    </div>
    </div>
</div>
<div class="mx-3">
    <div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
    <div class="step-text" >
        <div class="card-body">
            <p>Choose a custom application Name</p>
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
            <p>Choose a custom application Description</p>
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
            <p>Choose a custom application ICON</p>
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
            <p>Choose OIDC Web App</p>
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
            <p>Save</p>
        </div>
    </div>
    </div>
    </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_idp_init2.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Go to <span style="font-weight:bold;">Oidc app </span>which created</p>
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
        <p>Activate <span style="font-weight:bold;">Oidc app </span>which on the rightside</p>
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
        <p>Go to <span style="font-weight:bold;">Configuration </span>then click on <span style="font-weight:bold;">Icon edit</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_idp_init3.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Go to <span style="font-weight:bold;">Connections → Applications</span></p>
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
        <p>for <span style="font-weight:bold;">Admins</span> IdP init Login</p>
      </div>
    </div>
  </div>
</div>
<div class="mx-3">
    <div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Click on <span style="font-weight:bold;">PingOne Admin Console</span></p>
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
            <p>Copy <span style="font-weight:bold;">Home Page URL</span></p>
        </div>
        </div>
    </div>
    </div>
<div align="center">
    <img src="/images/vendor/sso/ping_idp_init4.png" class="doc-img-frame">
</div>
<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Done</p>
        </div>
        </div>
    </div>
</div>

for **users** IdP init Login:

<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Click on <span style="font-weight:bold;">PingOne Application Portal</span></p>
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
            <p>Copy <span style="font-weight:bold;">Home Page URL</span></p>
        </div>
        </div>
    </div>
</div>
<div align="center">
    <img src="/images/vendor/sso/ping_idp_init5.png" class="doc-img-frame">
</div>
<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Done</p>
        </div>
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
            <p>Paste <span style="font-weight:bold;">Home Page URL</span> to Initiate Login URI field</p>
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
            <p>Paste <span style="font-weight:bold;">Home Page URL</span> to Target Link URI field</p>
        </div>
        </div>
    </div>
</div>
<div align="center">
    <img src="/images/vendor/sso/ping_idp_init6.png" class="doc-img-frame">
</div>  
<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Click the <span style="font-weight:bold;">Overview tab.</span></p>
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
            <p>Locate the <span style="font-weight:bold;">Client ID</span> and copy it to a relaystate field of IDmelon.</p>
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
            <p><span style="font-weight:bold;">Example :</span> Relaystate = applicationId=Custom Client ID</p>
        </div>
        </div>
    </div>
</div>
<div align="center">
    <img src="/images/vendor/sso/ping_idp_init7.png" class="doc-img-frame">
</div>

## IDmelon SAML configuration

<hr class="hr-line">

<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Go to<span style="font-weight:bold;">Connections → External IdPs</span></p>
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
            <p>Go to <span style="font-weight:bold;">IDmelon</span> IdP then click on <span style="font-weight:bold;">IdP Configuration</span> click <span style="font-weight:bold;">edit</span></p>
        </div>
        </div>
    </div>
</div>
<div align="center">
    <img src="/images/vendor/sso/ping_metadata.png" class="doc-img-frame">
</div>
<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Download -> <span style="font-weight:bold;">DOWNLOAD METADA</span> File</p>
        </div>
        </div>
    </div>
</div>
<div class="mx-3">
<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>You should upload <span style="font-weight:bold;">metadata</span> file and <span style="font-weight:bold;">copy values</span> of below fields from this <span style="font-weight:bold;">Ping Identity panel</span> to <span style="font-weight:bold;">IDmelon Panel</span>.</p>
        </div>
        </div>
    </div>
</div>
</div>
<div align="center">
    <img src="/images/vendor/sso/ping_metadata2.png" class="doc-img-frame">
</div>
<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Go to <span style="font-weight:bold;">IDmelon IdP</span> then click on <span style="font-weight:bold;">P1 Connection</span> click <span style="font-weight:bold;">edit</span></p>
        </div>
        </div>
    </div>
</div>
<div class="mx-3">
<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p>Copy -> <span style="font-weight:bold;">PINGONE (SP) ENTITY ID</span></p>
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
            <p>Select your <span style="font-weight:bold;">SIGNING CERTIFICATE</span></p>
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
            <p>select <span style="font-weight:bold;">RSA_SHA256</span> in <span style="font-weight:bold;">SIGNING ALGORITHM</span> field</p>
        </div>
        </div>
    </div>
</div>
<div class="mx-5">
<div class="step-row-container">
    <div class="step-column bullet-container">
        <div class="bullet"></div>
    </div>
    <div class="card-column">
        <div class="step-text" >
        <div class="card-body">
            <p> You should copy values of below fields from this <span style="font-weight:bold;">Ping Identity panel</span> to <span style="font-weight:bold;">IDmelon Panel</span>.</p>
        </div>
        </div>
    </div>
</div>
</div>
</div>
<div align="center">
    <img src="/images/vendor/sso/ping_dashboard_10.png" class="doc-img-frame">
</div>

## Passwordless

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column step-count-size">
    <p class="step-counter">1</p>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Open <span style="font-weight:bold">Admin dashboard</span> of Ping Identity</p>
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
        <p>Click on <span style="font-weight:bold">Experiences</span> then <span style="font-weight:bold">Authentication Admin dashboard</span> of Ping Identity</p>
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
        <p>Under <span style="font-weight:bold">Authentication Policies</span></p>
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
        <p><span style="font-weight:bold">Choose or Create</span>your custom Authentication</p>
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
        <p><span style="font-weight:bold">example :</span></p>
      </div>
    </div>
  </div>
</div>
<div class="mx-3">
<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold;">PRESENTED IDENTITY PROVIDERS</span></p>
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
        <p>Choose <span style="font-weight:bold;">Idmelon as Identity Provider</span></p>
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
        <p><span style="font-weight:bold;">Save</span></p>
      </div>
    </div>
  </div>
</div>
</div>
<div align="center">
    <img src="/images/vendor/sso/ping_dashboard7.png" class="doc-img-frame">
</div>

## API Token

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold;">Connections </span>then <span style="font-weight:bold;">Applications</span></p>
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
        <p>Click on <span style="font-weight:bold;">Add Applications </span>then <span style="font-weight:bold;">Choose Worker</span></p>
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
        <p>Choose <span style="font-weight:bold;">Custom name </span></p>
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
        <p>Optional : <span style="font-weight:bold;">Custom description</span></p>
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
        <p>Click on <span style="font-weight:bold;">Save</span></p>
      </div>
    </div>
  </div>
</div>
<div align="center">
    <img src="/images/vendor/sso/ping_api.png" class="doc-img-frame">
</div>  
<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Click on <span style="font-weight:bold;">Worker</span> hen Click on <span style="font-weight:bold;">Configuration</span></p>
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
        <p>Scroll down then Click on <span style="font-weight:bold;">Get Access Token</span></p>
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
        <p>Copy <span style="font-weight:bold;">Access Token</span> click on <span style="font-weight:bold;">Done</span></p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/ping_api1.png" class="doc-img-frame">
</div>

<p class="note-body"><span style="font-weight:bold;">Note :</span> Activate Worker Application</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Done</span></p>
      </div>
    </div>
  </div>
</div>

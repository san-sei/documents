---
title: "Office"
description: "This page is about integration IDmelon and Office."
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "ssoforsso"
weight: 29
toc: true
---

<div id="_modal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

<p>In this document you are going to set up <span class="code-back">IDmelon</span> as an external IdP to the <span class="code-back">Office</span>.</p>

## Execute these commands in the Windows Power Shell

<hr class="hr-line">

<p><span class="code-back">$cred = Get-Credential</span></p>

<p><span class="code-back">Connect-MsolService -Credential $cred</span></p>

<p>Get-MsolDomain</p>

<p class="note-body">Get all values for <span class="code-back">{..}</span> from your IDmelon panel.</br>
If you are currently login here, you will see the replaced values instead.</p>

<div>
<pre class="code-back">
$dom = {{ domain }} </br>
$uri = {{idp_issuer_uri}} <br>
$url = {{idp_single_sign_on_ur}} <br>
$logouturl = {{idp_single_sign_on_url}} <br>
$cert = {{idp_certificate_download_url}} <br>
</pre>
</div>

<div>
<pre class="code-back">
Set-MsolDomainAuthentication -DomainName $dom -FederationBrandName $dom -Authentication Federated
-PassiveLogOnUri $url -SigningCertificate $cert -IssuerUri $uri -LogOffUri $logouturl
-PreferredAuthenticationProtocol SAMLP</pre>
</div>

<p>Check your SAML configuration</p>

<p style="font-weight:bold;">the result is :</p>

<div>
<pre class="code-back">
$dom = {{ domain }}
Get-MSolDomainFederationSettings -DomainName $dom | Format-List *
</pre>
</div>

### You need to set Set ImmutableID for your current user

<hr class="hr-line">

<p>Example of users.csv csv file:</p>

UserPrincipalName
<div class="code-back">
<code>sample@vancosys.com; </code></br>
<code>example@vancosys.com; </code>
</div>

### Load CSV

<hr class="hr-line">

<div class="code-back">
<code>$csvFile = Import-Csv C:\\idmelon\\users.csv -Delimiter ";"</code>
</div>

### Create arrays for skipped and failed users

<div class="code-back">
<code>$SkippedUsers = @()</code></br>
<code>$FailedUsers = @()</code>
</div>

### Loop through CSV records

<hr class="hr-line">
<pre class="code-back">
    foreach ($item in $csvFile) {
        $upn = $item.UserPrincipalName
        $UserPrincipalName =  (Get-MsolUser -UserPrincipalName  $upn  | select UserPrincipalName).UserPrincipalName
        $objectID = (Get-MsolUser -UserPrincipalName  $upn  | select ObjectId).ObjectId.Guid
        if ($UserPrincipalName) {
            try{
            Set-MSOLuser -UserPrincipalName $UserPrincipalName -ImmutableID $objectID
            } catch {
            $FailedUsers += $upn
            Write-Warning "$upn user found, but FAILED to update."
            }
        }
        else {
            Write-Warning "$upn not found, skipped"
            $SkippedUsers += $upn
        }
    }
    foo()

</pre>

### Show result

<hr class="hr-line">

<pre class="code-back">
Get-MsolUser -all | Select-Object UserprincipalName,objectID,ImmutableID
</pre>

## Passwordless

<hr class="hr-line">

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Open</span> Azure directory admin.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/office_passless.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Click on</span> users.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/office_passless1.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p><span style="font-weight:bold;">Choose</span> a user.</p>
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
        <p><span style="font-weight:bold;">Click on</span> Authentication methods.</p>
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
        <p><span style="font-weight:bold;">Delete</span> Authentication method option.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/office_passless2.png" class="doc-img-frame">
</div>

## API Token

<p>From the side menu, navigate to the <span class="code-back">App registrations</span> menu and click <span class="code-back">New registrations</span>.</p>

<div align="center">
    <img src="/images/vendor/sso/office_token_01.png" class="doc-img-frame">
</div>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Enter the desired name for your Application.</p>
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
        <p>Then from <span class="code-back">Supported account types</span> select who can use your API.</p>
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
        <p><span style="font-weight:bold;">Tip :</span> for more information of the choices please select <span style="font-weight:bold;">Help me Choose...</span>.</p>
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
        <p>Click <span style="font-weight:bold;">Register</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/office_token_02.png" class="doc-img-frame">
</div>

<p>Then you can see your API information, which you have Copy and send these informations to idmelon.</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Copy <span style="font-weight:bold;">Application (client) ID</span>.</p>
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
        <p>Copy <span style="font-weight:bold;">Directory (tenant) ID</span>.</p>
      </div>
    </div>
  </div>
</div>

<p>Then please for accessing to <span style="font-weight:bold;">Client Secret</span> click <span style="font-weight:bold;">Add a certificate or secret</span> in Client credentials field.</p>

<div align="center">
    <img src="/images/vendor/sso/office_token_03.png" class="doc-img-frame">
</div>

<p>From <span style="font-weight:bold;">Certificate & secrets</span> panel please click on <span style="font-weight:bold;">New client secret</span> :</p>

<div class="step-row-container">
  <div class="step-column bullet-container">
    <div class="bullet"></div>
  </div>
  <div class="card-column">
    <div class="step-text" >
      <div class="card-body">
        <p>Enter the desired description for your client secret.</p>
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
        <p>Click <span class="code-back">Add</span>.</p>
      </div>
    </div>
  </div>
</div>

<div align="center">
    <img src="/images/vendor/sso/office_token_04.png" class="doc-img-frame">
</div>

<p>Finally you can Copy your <span style="font-weight:bold;">client secret</span> from Client credentials field.</p>

<div align="center">
    <img src="/images/vendor/sso/office_token_05.png" class="doc-img-frame">
</div>

<p class="code-back"><span style="font-weight:bold;">Please send these infromation to idmelon, in order to get your users from office panel.</span></p>

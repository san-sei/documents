---
title: "Which platform do you want to add your security key to?"
description: "Which platform do you want to add your security key to?"
date: 2022-02-22T15:33:45-08:00
lastmod: 2022-02-22T15:33:45-08:00
draft: false
images: []
---

<div class='d-flex flex-column mt-5'>

 <div id="windows" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='windows.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Windows Login</span>
  </div>
 </div>

 <div id="office" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='Office.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Office 365</span>
  </div>
 </div>

 <div id="hotmail" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='github.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>GitHub</span>
  </div>
 </div>

 <div id="twitter" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='twitter.png' class='rounded-btn_img' style='height: 40px;width: 50px;margin-left: 30px;'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Twitter</span>
  </div>
 </div>

<div id="facebook" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='fb.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Facebook</span>
  </div>
 </div>

<div id="aws" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='aws.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>AWS</span>
  </div>
 </div>

<div id="bitbucket" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='Bitbucket.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Bitbucket</span>
  </div>
 </div>

<div id="cloudflare" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='cloudflare.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Cloudflare</span>
  </div>
 </div>
 <div id="coinbase" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='coinbase.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Coinbase</span>
  </div>
 </div>
<div id="dropbox" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='Dropbox.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Dropbox</span>
  </div>
 </div>

 <div id="ebay" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='ebay.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>ebay</span>
  </div>
 </div>

<div id="salesforce" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='salesforce.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Salesforce</span>
  </div>
 </div>
<div id="shopify" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='shopify.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Shopify</span>
  </div>
 </div>

<div id="yahoo" class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='yahoo.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Yahoo</span>
  </div>
 </div>

</div>

<style>@media (max-width: 480px) {.navbar, .footer { display: none; }}
h1{
    color : #4395ec;
}
.rounded-btn{
    height: 80px;
    width: 100%;
    position: relative;
    border-radius: 50px;
    background-color: #c7eaff;
    align-items: center;
    align-content: space-around;
}
.rounded-btn_img{
    width: 70px;
    height: 70px;
    margin-left: 22px;
}

.rounded-btn_txt{
    font-size: 20px;
    color: #4395ec;
    margin-left: -50px;
}
</style>

<script>
function selectAndRedirect(element,URL){
   const windows = document.getElementById(element)
    windows.addEventListener('click', (ev) => {
      location.replace(URL);
    });
}
selectAndRedirect('windows',`http://docs.idmelon.com/pages/setupsecuritykeys/windows/`)
selectAndRedirect('office',`http://docs.idmelon.com/pages/setupsecuritykeys/office/`)
selectAndRedirect('hotmail',`http://docs.idmelon.com/pages/setupsecuritykeys/github/`)
selectAndRedirect('twitter',`http://docs.idmelon.com/pages/setupsecuritykeys/twitter/`)
selectAndRedirect('facebook',`http://docs.idmelon.com/pages/setupsecuritykeys/facebook/`)
selectAndRedirect('aws',`http://docs.idmelon.com/pages/setupsecuritykeys/aws/`)
selectAndRedirect('bitbucket',`http://docs.idmelon.com/pages/setupsecuritykeys/bitbucket/`)
selectAndRedirect('cloudflare',`http://docs.idmelon.com/pages/setupsecuritykeys/cloudflare/`)
selectAndRedirect('coinbase',`http://docs.idmelon.com/pages/setupsecuritykeys/coinbase/`)
selectAndRedirect('dropbox',`http://docs.idmelon.com/pages/setupsecuritykeys/dropbox/`)
selectAndRedirect('ebay',`http://docs.idmelon.com/pages/setupsecuritykeys/ebay/`)
selectAndRedirect('salesforce',`http://docs.idmelon.com/pages/setupsecuritykeys/salesforce/`)
selectAndRedirect('shopify',`http://docs.idmelon.com/pages/setupsecuritykeys/shopify/`)
selectAndRedirect('yahoo',`http://docs.idmelon.com/pages/setupsecuritykeys/yahoo/`)

</script>

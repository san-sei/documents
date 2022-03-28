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

 <div class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='Office.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt' style='color: #cc2433'>Office 365</span>
  </div>
 </div>

 <div class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='hotmail.png' class='rounded-btn_img'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Hotmail</span>
  </div>
 </div>

 <div class='d-flex flex-row rounded-btn mb-4'>
  <div style='width:27%;'>
   <img src='twitter.png' class='rounded-btn_img' style='height: 40px;width: 50px;margin-left: 30px;'>
  </div>

  <div style='width:73%;text-align: center;'>
  <span class='rounded-btn_txt'>Twitter</span>
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

const windows = document.getElementById('windows')
    windows.addEventListener('click', (ev) => {
      location.replace(`http://docs.idmelon.com/pages/setupsecuritykeys/`);
    });
</script>

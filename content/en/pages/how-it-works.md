---
title: "How It Works?"
description: "How to use IDmelon app"
date: 2022-02-22T15:33:45-08:00
lastmod: 2022-02-22T15:33:45-08:00
draft: false
images: []
---

To start using your smartphone as a security key on a computer, first you need to either pair your smartphone with that computer or have an IDmelon Reader.

Choose your status:

<a role="button" class="btn btn-outline-primary">I already paired with my PC.</a><br/><br/>
<a id="btn-scan-qr" role="button" class="btn btn-outline-primary">I want to pair with my PC.</a><br/><br/>
<a role="button" class="btn btn-outline-primary">I have an IDmelon Reader.</a><br/><br/>
<a role="button" class="btn btn-outline-primary">What is the IDmelon Reader?</a>

<style>@media (max-width: 480px) {.navbar, .footer { display: none; }}</style>

<script>
    const btnQRCodeScan = document.getElementById('btn-scan-qr')
    btnQRCodeScan.addEventListener('click', (ev) => {
      location.replace(`https://www.idmelon.com/open-qr`);
    });
</script>

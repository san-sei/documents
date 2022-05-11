---
title: "Pair smartphone with PC"
description: "Pair Smartphone with PC"
date: 2022-02-22T15:33:45-08:00
lastmod: 2022-02-22T15:33:45-08:00
draft: false
images: []
---

<p align="center">
<img src='/images/vendor/arts/ptsc2.png'>
</p></br>

After installing and running IDmelon Pairing Tool, the app will show you a Pairing QR code.
Scan the QR code with the smartphone.

To start scanning, follow one of the intsructions below:

- Open the IDmelon Authenticator app >> Open **Menu** >> **Pair with a New PC**
  or
- Use the QR code scanner on your smartphone.

<style>@media (max-width: 480px) {.navbar, .footer { display: none; }}
h1{
    color : #4395ec;
}
p{
    font-size:20px;
}
li{
    font-size:20px;
}
</style>

<script>
    const btnQRCodeScan = document.getElementById('btn-scan-qr')
    btnQRCodeScan.addEventListener('click', (ev) => {
      location.replace(`https://www.idmelon.com/open-qr`);
    });
</script>

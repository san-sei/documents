---
title: "IDmelon FOB"
description: ""
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: [ ]
menu:
  docs:
    parent: "readerguide"
weight: 60
toc: true
---

### IDmelon FOB

Skipping the blinking modes, it works exactly like IDmelon Security Key when plugged into an active USB port, but power
consumption optimizations are applied for when it is powered but not plugged into an active USB port which is the main
purpose of designing this device.
It performs a quick Green blink when powered ON or when its button is pushed.
It performs a light Green blink when the Bluetooth connection is established.
IDmelon fob can be powered with a coin battery and be used as a BLE FIDO security key which you can tap on IDmelon
Reader or pair with PC.
And as soon as you request access to an account, the Green blinking is not performed and pushing the button would not be
necessary unless for Security Key Reset, as it was for IDmelon Key.
When connected to a battery or plugged into an inactive USB port, it goes on standby mode after being unused for a while
to consume less power. Users would need to push the button to turn it back ON.

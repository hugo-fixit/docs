---
title: Class FixItDecryptor API
date: 2023-02-24T22:32:41+08:00
collections:
  - References
---

FixIt decryptor for encrypted pages

<!--more-->

## new FixItDecryptor(options)

| Name    | Type   | Description                                          |
| ------- | ------ | ---------------------------------------------------- |
| options | Object | The options of FixItDecryptor（[Options](#options)） |

### Options

| Name              | Type     | Attributes   | Default | Description                                               |
| ----------------- | -------- | ------------ | ------- | --------------------------------------------------------- |
| decrypted         | Function | \<optional\> |         | [Lifecycle Hooks] handler after decrypting                |
| partialDecrypted | Function | \<optional\> |         | [Lifecycle Hooks] handler after partially decrypting      |
| reset             | Function | \<optional\> |         | [Lifecycle Hooks] handler after encrypting again          |
| duration          | Number   | \<optional\> | 86400   | number of seconds to cache decryption statistics. unit: s |

## Methods

### init()

initialize FixIt decryptor

### initShortcodes()

initialize fixit-encryptor shortcodes

### validateCache()

validate the cached decryption statistics in localStorage

### addEventListener(event, listener)

add event listener for FixIt Decryptor

| Name     | Type     | Description   |
| -------- | -------- | ------------- |
| event    | String   | event name    |
| listener | Function | event handler |

### removeEventListener(event, listener)

remove event listener for FixIt Decryptor

| Name     | Type     | Description   |
| -------- | -------- | ------------- |
| event    | String   | event name    |
| listener | Function | event handler |

## Events

### decrypted

after decrypting

### partial-decrypted

after partially decrypting

### reset

after encrypting again

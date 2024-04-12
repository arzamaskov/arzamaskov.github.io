---
title: Отключение кодировки кириллических символов Git
pubDatetime: 2024-04-12T21:41:31+04:00
slug: git-disable-file-path-encoding
featured: false
draft: false
tags:
  - git
description: Отключение кодировки кириллических символов Git
---

По умолчанию, git в выводе путей файлов с кодом больше `0x80` заменяет их восьмиричными кодами, например: слово суперцветение[^1] будет представлено как %D0%A1%D1%83%D0%BF%D0%B5%D1%80%D1%86%D0%B2%D0%B5%D1%82%D0%B5%D0%BD%D0%B8%D0%B5.

Для отключения кодировки:

```sh
git config --global core.quotePath false
```

---

[^1]: [Суперцветение в википедии](https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D1%86%D0%B2%D0%B5%D1%82%D0%B5%D0%BD%D0%B8%D0%B5)

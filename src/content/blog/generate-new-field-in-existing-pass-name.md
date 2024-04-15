---
title: Генерация нового пароля pass в существующей записи
pubDatetime: 2024-04-15T18:12:31+04:00
slug: generate-new-field-in-existing-pass-name
featured: false
draft: false
tags:
  - pass
description: Генерация нового пароля pass в существующей записи
---

Pass при генерации затирает запись полностью. Для того, чтобы заменить только строку с паролем (первая строка считается паролем) используем параметр `--in-place` или короткую версию `-i`:

```shell
pass generate --in-place My/password 24
```

24 - длина генерируемого пароля, подробнее в `man pass`.

---
author: Андрей Арзамасков
title: Отмена закрытия Firefox после закрытия последней вкладки
pubDatetime: 2019-12-13T16:45:00Z
description: Как выключить опцию закрытия браузера по&nbsp;закрытию последней вкладки.
slug: how-to-forbid-firefox-to-quit-after-closing-last-tab
featured: false
draft: false
tags:
  - firefox
---

Как выключить опцию закрытия браузера по&nbsp;закрытию последней вкладки.

1. Набираем в&nbsp;адресной строке `about:config`, нажимаем Enter, соглашаемся.

2. Ищем в&nbsp;настройках опцию

   ```
   browser.tabs.closeWindewWithLastTab:    true
   ```

   Проще всего это сделать, набрав в&nbsp;поиске `lasttab`.

3. Меняем значение `true` на `false`:

   ```
   browser.tabs.closeWindewWithLastTab:    false
   ```

Готово!

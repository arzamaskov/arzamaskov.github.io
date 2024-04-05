---
title: Отмена закрытия Firefox после закрытия последней вкладки
pubDatetime: 2019-12-13T16:45:00Z
categories: notes
description: Как выключить опцию закрытия браузера по&nbsp;закрытию последней вкладки.
tag:
    - soft
---

Как выключить опцию закрытия браузера по&nbsp;закрытию последней вкладки.
<!--more-->

1. Набираем в&nbsp;адресной строке `about:config`, нажимаем Enter, соглашаемся.

2. Ищем в&nbsp;настройках опцию

    ``` configfile
    browser.tabs.closeWindewWithLastTab:    true
    ```
    Проще всего это сделать, набрав в&nbsp;поиске `lasttab`.

3. Меняем значение `true` на `false`:

    ``` configfile
    browser.tabs.closeWindewWithLastTab:    false
    ```

Готово!

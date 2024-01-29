---
layout: post
title: Отмена закрытия Firefox после закрытия последней вкладки
date: 2019-12-13 16:45
categories: notes
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

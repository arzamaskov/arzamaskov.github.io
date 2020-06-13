---
layout: post
title: Отмена закрытия Firefox после закрытия последней вкладки
date: 2019-12-13 16:45
summary: Инструкция, как выключить опцию закрытия браузера по закрытию последней вкладки
read_more: Картинки
categories: настройки
tag:
    - firefox
---

Инструкция, как выключить опцию закрытия браузера по&nbsp;закрытию последней вкладки.

1. Набрать в&nbsp;адресной строке `about:config`, нажать Enter, согласиться предупреждением.

2. Найти в&nbsp;настройках опцию

    ``` configfile
    browser.tabs.closeWindewWithLastTab:    true
    ```
    Проще всего это сделать, набрав в&nbsp;поиске `lasttab`.
    
3. Заменить значение `true` на `false`:

    ``` configfile
    browser.tabs.closeWindewWithLastTab:    false
    ```

Готово!
<!-- more -->
[![screenshot about:config](/assets/images/firefox-screenshot-01.png)](/assets/images/firefox-screenshot-01.png)

[![screenshot option with value: true](/assets/images/firefox-screenshot-02.png)](/assets/images/firefox-screenshot-02.png)

[![screenshot option with value: false](/assets/images/firefox-screenshot-03.png)](/assets/images/firefox-screenshot-03.png)

---
layout: post
title: Установка Apache на macOS Catalina
date: 2020-11-17 17:30
summary: Как установить веб-сервер Apache2 на macOS Catalina через пакетный менеджер Homebrew
read_more:
categories: настройки
tags:
    - mac os
    - apache
    - brew
---

Операционная система macOS уже содержит встроенный сервер Apache, но не самую последнюю его версию, поэтому лучше установить свежую версию из Brew.

## Установка Xcode Command Line Tools
Если установка производится на чистую ОС, то в первую очередь надо установить Xcode Command Line Tools для работы с командной строкой:
```sh
xcode-select --install
```

## Установка Homebrew
Следующим шагом устанавливаем Homebrew:
```sh
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Создаем директории для логов Apache
Apache сконфигурирован для записи логов, но лучше будет создать собственные директории, чтобы проще было их найти, и сразу дадим им нужные права.
```sh
sudo mkdir /usr/local/log

sudo mkdir /usr/local/log/httpd

sudo chgrp -R staff /usr/local/log/httpd

sudo chmod -R ug+w /usr/local/log/httpd/
```

## Установка и настройка Apache
Нужно отключить предустановленный Apache, установить Apache из Homebrew и настроить его на 80-й порт.

Если предуставновленный Apache запущен, его нужно остановить и удалить из автозагрузки:
```sh
sudo apachectl stop

sudo launchctl unload-w /System/Library/LaunchDaemons/org.apache.httpd.plist 2>/dev/null
```

Устанавливаем последнюю версию Apache из Homebrew:
```sh
brew install apache
```

Запускаем Apache и добавляем его в автозагрузку:
```sh
brew services start httpd
```

Для проверки работы веб-сервера можно пройти по адресу <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>, должна отобразиться страничка с текстом *It works*.

Теперь нужно сконфигурировать Apache через файл:
```sh
vim /usr/local/etc/httpd/httpd.conf
```

### Изменение порта сервера
В конфигурационном файле найти строку `Listen 8080` и меняем ее на `Listen 80`.

### Подключение необходимых модулей

<!-- more -->
### Скриншот
[![mac-apps-screenshot](/assets/images/mac-apps-screenshot.png)](/assets/images/mac-apps-screenshot.png)

---
layout: post
title: Настройка nginx на Mac с M1
date: 2023-10-28 16:35
categories: develop
tag:
    - nginx
    - 'web-server'
---

Логическое продолжение [поста]({% link _posts/2020-11-17-install-apache-on-macos-catalina.md %}). Для настройки nginx, его нужно сначала установить:

```shell
brew install nginx
```
После чего, запускаем его от `sudo`, так как слушать он будет 80 порт.
<!--more-->

Я обычно предпочитаю запускать его **не** через `brew services` а вручную:

```
sudo nginx
```

Далее нужно сконфигурировать файл `nginx.conf`:

```shell
vim /opt/homebrew/etc/nginx/nginx.conf
```

Добавляем пользователя и группу, чтобы избежать проблем с правами:

```
user <user> staff;
```

В блок `http {}` добавляем строку, для использования нескольких серверов:

```
server_names_hash_bucket_size 512;
```

В блоке `server {}` заменяем

```
listen 8080;
server_name  localhost;
index index.html;
```

на

```
listen 80;
server_name  localhost;
index index.html index.htm index.php;
```

и добавляем FastCGI gateway для php-fpm:

```
location ~ \.php$ {
  fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
  include fastcgi_params;
  fastcgi_pass 127.0.0.1:9074;
  fastcgi_split_path_info ^(.+\.php)(/.+)$;
}
```

## Создание виртуальных хостов

Виртуальные хосты добавлятся в директорию `servers`, каждый файл настроек подключается к `nginx.conf`.

Пример шаблона:

```
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    ssl_certificate      /opt/homebrew/etc/nginx/ssl/{{host}}.crt;
    ssl_certificate_key  /opt/homebrew/etc/nginx/ssl/{{host}}.key;
    ssl_ciphers          HIGH:!aNULL:!MD5;

    listen 80;
    server_name {{host}};
    root {{root}};

    index index.html index.htm index.php;

    charset utf-8;

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass 127.0.0.1:9074;
        fastcgi_index index.php;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Где плейсхолдеры {% raw %}`{{host}}`{% endraw %} и {% raw %}`{{root}}`{% endraw %} заменяются соответственно на имя виртульного хоста и путь к директории, например `test.local` и `/Users/user/sites/my-awesome-site/public`.

После всех изменений нужно перезагрузить конфиги nginx:

```
sudo nginx -s reload
```

Изменять плейсхолдеры можно вручную, но как по мне, лучше написать для этого простенький баш-скрипт.

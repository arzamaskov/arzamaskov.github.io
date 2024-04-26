---
title: Создание простого TODO-приложения на Symfony и React. Часть 1. Настройка проекта
pubDatetime: 2024-04-26T13:55:31+04:00
slug: create-todo-app-using-symfony-and-react
featured: false
draft: false
tags:
  - develop
  - symfony
  - react
  - todo-app
  - tutorial
description:
  Устанавливаем фреймворк Symfony, устанавливаем необходимые зависимости.
  Создаем новое пустое приложение на Symfony, подключаем React.
---

## Зависимости

Для работы нам поднадобятся:

- [Git](https://git-scm.com/downloads)
- [PHP](https://www.php.net/downloads.php) 8.1 и выше
- [Composer](https://getcomposer.org/download/)
- [Symfony](https://symfony.com/download)
- [MySQL](https://www.mysql.com/downloads/) или [MariaDB](https://mariadb.org/download/)
- [Node.js](https://nodejs.org/en/download)
- [Yarn](https://yarnpkg.com/getting-started)

## Создаем новое приложение на Symfony

```sh
symfony new TodoApp --webapp
```

Этой командой мы создаем новое веб-приложение в директории TodoApp.

Добавляем в наш проект библиотеку [Webpack Encore](https://symfony.ru/doc/current/frontend):

```sh
composer require encore
```

Эта библиотека на JavaScript - часть Symfony для удобной работы с JavaScript и CSS. Онa позволяет использовать современные инструменты разработки, такие как Webpack, для сборки и оптимизации ресурсов. Когда мы устанавливаем Encore через Composer, он добавляется в наш проект Symfony, готовый к использованию для разработки фронтенда.

В файле `webpack.config.js`, который лежит в корне проекта раскомментируем строку `.enableReactPreset()`. Это активирует пресет для работы с React в проекте, что позволяет использовать инструменты и настройки Webpack, предназначенные специально для разработки на React.js, такие как Babel, для транспиляции JavaScript кода, JSX и других.

Устанавливаем фронтенд-зависимости:

```sh
yarn install
```

После выполнения `yarn install`, Yarn загрузит все указанные зависимости и установит их в локальной директории проекта, готовые к использованию.

Устанавливаем необходимые фронтенд библиотеки:

```sh
yarn add react react-dom prop-types
yarn add @babel/preset-react@^7.0.0 --dev
```

Команда `yarn add react react-dom prop-types` добавляет три пакета в проект:

1. **react**: это основная библиотека React, которая содержит функции и компоненты для разработки пользовательского интерфейса.
2. **react-dom**: этот пакет содержит инструменты для работы с DOM веб-страницы, такие как рендеринг React-компонентов в DOM.
3. **prop-types**: это библиотека React, предоставляющая удобные средства для проверки типов свойств (props), передаваемых в React-компоненты, во время разработки. Она помогает обеспечить правильность передаваемых данных между компонентами и предотвращает ошибки во время выполнения.

Команда `yarn add @babel/preset-react@^7.0.0 --dev` добавляет пакет `@babel/preset-react` в проект в качестве зависимости разработки (devDependencies).

**@babel/preset-react**: это пресет Babel, предназначенный для компиляции JSX кода React в обычный JavaScript. Пресеты Babel используются для определения правил транспиляции кода из одной версии JavaScript в другую, и @babel/preset-react в частности позволяет Babel понимать JSX синтаксис, который используется в React.

## Создаем контроллер

Для создания контроллера воспользуюемся инструментами, предоставляемыми самим Symfony:

```sh
bin/console make:controller
```

После чего, Symfony спросит имя контроллера, укажем его: index

В результате будет создан файл IndexController.php в директории `src/Controller` вида:

```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
  #[Route('/index', name: 'app_index')]
  public function index(): Response
  {
    return $this->render('index/index.html.twig', [
      'controller_name' => 'IndexController',
    ]);
  }
}
```

Строчка `#[Route('/index', name: app_index')]` - аттибут нашего, только что созданного, контроллера, который определяет маршрут, по которому этот контроллер будет работать. Заменим его так, чтобы он работал на основном маршруте, при загрузке нашего приложения: `'/index'` -> `'/'`.

```php
<?php

...
class IndexController extends AbstractController
{
  #[Route('/', name: 'app_index')]
  public function index(): Response
  {
...
```

Одновременно с контроллером, Symfony создает и шаблон для этого контроллера: `templates/index/index.html.twig`, который наследуюет базовый шаблон `base.html.twig`.

```twig
{% extends 'base.html.twig' %}

{% block title %}Hello IndexController!{% endblock %}

{% block body %}
<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class="example-wrapper">
    <h1>Hello {{ controller_name }}! ✅</h1>

    This friendly message is coming from:
  ...
</div>
{% endblock %}
```

Удалим лишнее содержимое этого шаблона и оставим только код, позволяющий загружать наше фронтенд приложение:

```twig
{% extends 'base.html.twig' %}

{% block title %}TodoApp{% endblock %}

{% block body %}
  <div id="root"></div>
{% endblock %}
```

## Запуск и тестироание приложения

Запускаем бекенд:

```sh
symfony server:start
```

Запускаем фронтенд:

```sh
yarn encore dev --watch
```

Теперь приложение доступно по адресу: `http://127.0.0.1:8000`.

В результате в браузере должно открыться пустое окно, залитое светло-серым цветом и заголовком _TodoApp_.

![todo app screenshot](@assets/images/2024-04-26-todo-app.png)

Стили для заливки окна подгружаются из `assets/styles/app.css`:

```css
body {
  background-color: lightgray;
}
```

Если цвет фона страницы не светло-серый, нужно убедиться, что `app.js` и `app.css` подключены в файле `base.html.twig` при помощи функций `encore_entry_link_tags`[^1] и `encore_entry_script_tags`[^2]:

```twig
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>{% block title %}Welcome!{% endblock %}</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⚫️</text></svg>">

        {# Run `composer require symfony/webpack-encore-bundle` to start using Symfony UX #}
        {% block stylesheets %}
            {{ encore_entry_link_tags('app') }}
        {% endblock %}
    </head>
    <body>
        {% block body %}{% endblock %}

        {% block javascripts %}
            {{ encore_entry_script_tags('app') }}
        {% endblock %}
    </body>
</html>
```

[^1]: Функция `encore_entry_link_tags('app')`, предоставляемая Symfony Encore, которая генерирует теги <link> для всех ресурсов, связанных с точкой входа (entry point) с именем 'app'. Точка входа ('app' в данном случае) обычно представляет собой JavaScript-файл, который содержит основной код вашего веб-приложения, а также может включать ссылки на стили CSS или другие ресурсы.
[^2]: Аналогично `encore_entry_link_tags('app')`, функция `encore_entry_script_tags` также предоставляется Symfony Encore и генерирует теги <script> для всех ресурсов, связанных с точкой входа (entry point) с именем 'app'.

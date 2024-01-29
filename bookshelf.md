---
layout: page
title: Книжная полка
permalink: /bookshelf/
---

<div>
{% for category in site.categories %}
    {% if category[0] == "books" %}
        {% assign postsByYears = category[1] | group_by_exp: "post", "post.date | date: '%Y'" %}
        {% for year in postsByYears %}

        <table class="bookshelf">
          <thead>
            <tr>
              <th colspan="3" class="left">{{ year.name }}</th>
            </tr>
          </thead>
        <tbody>

        {% for post in year.items %}

        <tr>
          <td><a href="{{ post.url }}">{{ post.title }}</a></td>
          <td class="center">{{ post.author }}</td>
          <td class="center">{{ post.rating }}</td>
        </tr>

        {% endfor %}

          </tbody>
        </table>

        {% endfor %}
    {% endif %}
{% endfor %}
</div>

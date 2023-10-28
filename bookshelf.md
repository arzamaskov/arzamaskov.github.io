---
layout: page
title: Книжная полка
---

Книги, которые прочитал недавно

### 2023

1.  Прощайте вещи! Новый японский минимализм. Фумио Сасаки
2.  Анатомия заблуждений. Большая книга по критическому мышлению. Никита Непряхин


<div>
{% for category in site.categories %}
    {% if category[0] == "Книги" %}
        {% for post in category[1] %}
            {% capture year_of_current_post %}
                {{ post.date | date: "%Y" }}
            {% endcapture %}

            {% capture year_of_previous_post %}
                {{ post.previous.date | date: "%Y" }}
            {% endcapture %}

            {% if forloop.first %}
                <h3>{{ year_of_current_post }}</h3>
                <ol>
            {% endif %}

                    <li><a href="{{ post.url }}">{{ post.title }}</a></li>

            {% if forloop.last %}
                </ol>
            {% else %}
                {% if year_of_current_post != year_of_previous_post %}
                    </ol>

                    <h3>{{ year_of_previous_post }}</h3>
                    <ol>
                {% endif %}
            {% endif %}
        {% endfor %}
    {% endif %}
{% endfor %}
</div>

---
layout: null
---
{% assign page_number = site.posts.size | divided_by: 5.0 | ceil %}
{% assign filtered_archives = site.archives | sort: "title" %}
var CACHE_NAME = 'blog-cache-v1';
var urlsToCache = [
  "{{ '/' | relative_url }}",
  "{{ './about/' | relative_url }}",
  "{{ './archives/' | relative_url }}",
  {% for post in site.posts %}
  "{{ post.url | relative_url }}",
  {% endfor %}
  {% for i in (2..page_number) %}
      "./posts/{{ i }}/",
  {% endfor %}
  {% for archive in filtered_archives %}
  {% if archive.type == "category" or archive.type == "tag" %}"{{ archive.url | relative_url }}",{% endif %}
  {% endfor %}
  "{{ './assets/css/main.css' | relative_url }}?{{ site.time | date: '%Y%m%d%H%M' }}",
  "{{ './assets/css/bootstrap.min.css' | relative_url }}",
  "{{ './assets/js/bootstrap.bundle.min.js' | relative_url }}",
  "{{ './assets/js/jquery-3.4.1.slim.min.js' | relative_url }}",
  "{{ './favicon-16x16.png' | relative_url }}"
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function (event) {

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName != CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request).then(
        function (response) {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          var responseToCache = response.clone();
          var hosts = [
            "https://maxcdn.bootstrapcdn.com",
            "https://cdnjs.cloudflare.com",
            "https://stackpath.bootstrapcdn.com",
            "https://code.jquery.com",
            "https://cdn.jsdelivr.net"
          ];

          hosts.map(function (host) {
            if (event.request.url.indexOf(host) === 0) {
              caches.open(CACHE_NAME)
                .then(function (cache) {
                  cache.put(event.request, responseToCache);
              });
            }
          });

          return response;
        }
      );
    })
  );
});

---
layout: page
title: Portfolio
permalink: /portfolio/
description: Architecture case studies, platform modernization work, technical leadership initiatives, and strategic delivery outcomes.
hero_title: Architecture work with visible impact.
hero_kicker: Portfolio
hero_excerpt: >-
  A selection of architecture, cloud, AI, security, data, and leadership initiatives focused on measurable outcomes and stronger engineering capability.
---

{% assign categories = "Architecture|Cloud|AI Innovation|Secure Development|Big Data|Agile Leadership" | split: "|" %}

{% for category in categories %}
  {% assign category_slug = category | slugify %}
  <section class="section-block" id="{{ category_slug }}">
    <div class="section-heading compact">
      <p class="eyebrow">{{ category }}</p>
      <h2>{{ category }}</h2>
    </div>
    <div class="card-grid">
      {% assign items = site.portfolio | where: "category", category | sort: "date" | reverse %}
      {% for item in items %}
        {% include portfolio-card.html item=item %}
      {% endfor %}
    </div>
  </section>
{% endfor %}
# Architecture by Design

A complete GitHub Pages and Jekyll personal site for a senior Software Architect and transformational technology leader. The design is minimal, premium, responsive, and fully compatible with GitHub Pages-supported plugins.

## Features

- GitHub Pages-compatible Jekyll setup
- Home, About, Portfolio, Blog, Contact, and 404 pages
- `_portfolio` collection for architecture case studies and leadership work
- Paginated blog index with categories, tags, reading time, and code highlighting
- Reusable gallery grid and carousel includes for posts and portfolio items
- Formspree contact form integration
- SEO metadata, Open Graph, Twitter Cards, sitemap, robots.txt, and RSS feed
- Centralized design and content settings in `_data/settings.yml`
- Vanilla JavaScript Ajax navigation with graceful no-JavaScript fallback

## Local setup

1. Install Ruby and Bundler.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve`.
4. Open the local address shown by Jekyll, usually `http://127.0.0.1:4000`.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In the repository settings, open Pages.
3. Set the source to deploy from the `main` branch root.
4. If you use a project site instead of a user site, update `url` and `baseurl` in `_config.yml`.

The site uses only GitHub Pages-compatible plugins:

- `jekyll-feed`
- `jekyll-paginate`
- `jekyll-seo-tag`
- `jekyll-sitemap`

## Configure the site

Most site-wide settings live in `_data/settings.yml`.

You can change:

- site title, description, author name, and hero image
- colors, fonts, spacing, typography, and animation timing
- primary navigation and themed home links
- social profile links
- Formspree endpoint
- SEO defaults and social preview settings

Core Jekyll behavior lives in `_config.yml`.

## Configure Formspree

1. Create a form in Formspree.
2. Copy the endpoint URL, for example `https://formspree.io/f/abcd1234`.
3. Replace `contact.formspree_endpoint` in `_data/settings.yml`.

The contact form fields are already wired for name, email, subject, and message.

## Add portfolio items

1. Add a new Markdown file to `_portfolio`.
2. Use front matter like this:

```yaml
---
title: Example initiative
subtitle: Short summary
date: 2026-01-15
category: Architecture
technologies:
  - Kubernetes
  - Terraform
role: Lead Architect
impact: Reduced lead time and improved resilience.
featured_image: /assets/images/portfolio-example.svg
gallery_images:
  - src: /assets/images/example-grid.svg
    alt: Example image
    caption: Optional caption
carousel_images:
  - src: /assets/images/example-carousel.svg
    alt: Example slide
featured: true
---
```

Supported categories in the current structure:

- Architecture
- Cloud
- AI Innovation
- Secure Development
- Big Data
- Agile Leadership

## Add blog posts

1. Add a Markdown file to `_posts` using the format `YYYY-MM-DD-title.md`.
2. Use front matter like this:

```yaml
---
title: Example post
date: 2026-01-20 09:00:00 +0000
categories: [Architecture, Cloud]
tags: [platform, delivery]
excerpt: Short summary for cards and metadata.
featured_image: /assets/images/post-example.svg
---
```

Posts support standard Markdown, Rouge code highlighting, gallery grids, and carousels via front matter.

## Gallery usage

Grid include:

```liquid
{% raw %}{% include gallery-grid.html images=page.gallery_images %}{% endraw %}
```

Carousel include:

```liquid
{% raw %}{% include gallery-carousel.html images=page.carousel_images carousel_id=page.slug %}{% endraw %}
```

## Customize design

Design tokens are defined in `_data/settings.yml` and injected as CSS custom properties in the default layout. This keeps visual customization centralized while the SCSS partials in `_sass` remain maintainable.

Main structure:

- `_layouts` for page, blog, and portfolio layouts
- `_includes` for reusable components
- `_sass` and `assets/css/main.scss` for styling
- `assets/js/site.js` for navigation, transitions, and carousel behavior

## Notes

- Replace placeholder profile links, email address, author name, and Formspree endpoint before publishing.
- Replace or supplement the SVG artwork in `assets/images` with your own optimized images if desired.
- `assets/images/og-default.jpg` should be replaced with a real social preview image before production use.# GitHub Pages

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey TCLDK!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/TCLDK/skills-github-pages/issues/1)

---

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)


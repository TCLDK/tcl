# Thanh Cong Le Personal Website

This repository contains the source files for my personal website and portfolio. The site presents my background in software architecture, embedded systems, IoT, cloud platforms, data, agile delivery, and technology leadership.

The site is built with Jekyll and is intended to run on GitHub Pages.

## Site Content

Main content areas:

- `index.html` - home page
- `about.md` - personal and professional profile
- `portfolio.md` and `_portfolio/` - portfolio overview and case-study entries
- `blog/index.html` and `_posts/` - blog index and posts
- `contact.md` - contact page
- `_data/settings.yml` - site title, navigation, theme settings, social links, and contact configuration

## Local Setup

1. Install Ruby and Bundler.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve`.
4. Open the local address shown by Jekyll, usually `http://127.0.0.1:4000`.

## GitHub Pages Deployment

1. Push changes to GitHub.
2. In the repository settings, open Pages.
3. Set the source to deploy from the `main` branch root.
4. Confirm `url` and `baseurl` in `_config.yml` match the published GitHub Pages address.

Current project-site configuration:

```yaml
url: "https://tcldk.github.io"
baseurl: "/tcl"
```

## Editing Profile Information

The About page uses information from my CV, but it is written for a public website rather than as a full CV. Before publishing, review it for:

- role titles and company names
- technology lists
- education details
- language details
- anything private or too specific for public use

Contact details, private addresses, phone numbers, and personal identifiers should not be added unless they are intentionally public.

## Add Portfolio Items

Add a new Markdown file to `_portfolio` with front matter like this:

```yaml
---
title: Example initiative
subtitle: Short summary
date: 2026-01-15
category: Architecture
technologies:
  - Azure
  - Kafka
role: Lead Architect
impact: Short description of the outcome.
featured_image: /assets/images/portfolio-example.svg
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

## Add Blog Posts

Add a Markdown file to `_posts` using the format `YYYY-MM-DD-title.md`.

Example front matter:

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

Posts support standard Markdown, Rouge code highlighting, gallery grids, and carousels through the existing includes.

## Design And Configuration

Most site-wide settings live in `_data/settings.yml`, including:

- site title, tagline, description, author, and logo text
- theme colors, fonts, spacing, and typography
- navigation links
- social profile links
- Formspree contact endpoint
- SEO defaults

Core Jekyll behavior lives in `_config.yml`.

Main structure:

- `_layouts/` - page, blog, and portfolio layouts
- `_includes/` - reusable components
- `_sass/` and `assets/css/main.scss` - styling
- `assets/js/site.js` - navigation, transitions, and carousel behavior
- `assets/images/` - visual assets

## Before Publishing

- Replace placeholder values in `_data/settings.yml`, including author, email, social links, and Formspree endpoint.
- Review all profile text for public sharing.
- Review portfolio and blog content for confidential or company-sensitive information.
- Replace or supplement placeholder SVG artwork if needed.
- Run `bundle exec jekyll build` before publishing when Bundler is available.

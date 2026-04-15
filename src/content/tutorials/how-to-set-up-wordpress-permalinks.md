---
title: "What are WordPress permalinks and how to set them up correctly"
date: 2026-04-16
author: "Toni Q"
description: "A practical guide to WordPress permalinks. Learn what they are, which structure to choose, how to avoid 404 errors, and when to use redirects."
tags: ["wordpress", "permalinks", "seo", "beginners"]
slug: how-to-set-up-wordpress-permalinks
---

Your WordPress URLs say a lot about your site. They tell visitors what to expect. They tell search engines what the page is about. And if they are messy, they make your site look unprofessional.

## What are permalinks?

A permalink is the [web address (URL)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) of a specific page or post on your website. When you publish a post called "How to build a website," the permalink is what people type or click to visit that page.

Good permalinks are:

- **Descriptive**: Visitors know what the page is about before clicking
- **Readble**: Easy to read and remember
- **Short**: No unnecessary words or characters
- **SEO-friendly**: Include relevant keywords for search engines

For example:

- Good: `yoursite.com/how-to-build-a-website`
- Bad: `yoursite.com/?p=123`

The second one works but tells nobody anything. The first one looks professional and could help with SEO.

## Where to find permalink settings

In your WordPress dashboard, go to **Settings → Permalinks**.

You will see several options. The most common ones are:

- **Plain**: `yoursite.com/?p=123` — avoid this
- **Day and Name**: `yoursite.com/2026/04/16/how-to-build-a-website`
- **Month and Name**: `yoursite.com/2026/04/how-to-build-a-website`
- **Numeric**: `yoursite.com/archives/123`
- **Post name**: `yoursite.com/how-to-build-a-website`
- **Custom Structure**: Build your own using tags

Click Save Changes after selecting an option. WordPress automatically updates your URLs.

## Permalink structures explained

Let me break down each option so you can choose confidently.

### Plain

This is the default setting on a fresh WordPress install. It uses question marks and numbers. Do not use this. It looks unprofessional and provides no information to visitors or search engines.

### Day and Name

Example: `yoursite.com/2026/04/16/my-new-post`

This includes the full date. It works for news sites where publication date matters. For most other sites, it creates unnecessarily long URLs.

### Month and Name

Example: `yoursite.com/2026/04/my-new-post`

Similar to day and name, but less specific. Still longer than necessary for most sites.

### Numeric

Example: `yoursite.com/archives/123`

Uses a simple number. No context about the content. Not recommended.

### Post name

Example: `yoursite.com/my-new-post`

The post title becomes the URL. This is the most popular option for a reason. It is clean, descriptive, and short.

### Custom Structure

This is where you build your own using tags. WordPress provides several tags:

- **%postname%** — the post title (or slug)
- **%category%** — the post category
- **%year%** — the year (2026)
- **%monthnum%** — the month (04)
- **%day%** — the day (16)

Common custom structures:

- `/%category%/%postname%/` — adds the category to the URL
- `/blog/%postname%/` — prefixes all blog posts with "blog"
- `/%year%/%monthnum%/%postname%/` — like month and name but cleaner

## My recommendation

For most sites, **Post name** is the best choice. It produces URLs that are:

- Short and clean
- Easy to read
- Good for SEO
- Simple to remember

For blogs with frequent publishing, `/blog/%postname%/` adds a nice structure without adding complexity.

For portfolio or business sites, a simple post name structure is perfect. Your services page becomes `yoursite.com/web-design-services` instead of `yoursite.com/2026/04/web-design-services`.

## The 404 problem

After changing your permalink structure, you might see 404 errors. This happens because WordPress needs to update its internal URL rewriting rules.

The fix is simple. Go to **Settings → Permalinks** and click Save Changes again. This forces WordPress to flush and regenerate the rewrite rules. Your 404 errors should disappear.

If they do not, try:

- Deactivating and reactivating your theme
- Deactivating and reactivating your SEO plugin
- Checking your .htaccess file (for Apache servers)

## Changing URLs on existing sites

Here is something important: if your site has been live for a while and you change your permalink structure, your old URLs will stop working.

This matters because:

- Existing bookmarks will break
- Links from other websites will lead to 404 errors
- Search engines will have to re-index your content

The solution is a 301 redirect. This tells browsers and search engines that the old URL has moved permanently to the new one.

### How to set up redirects

**Option 1: SEO Plugin**

Most SEO plugins include redirect functionality. If you use Yoast SEO or RankMath, look for the redirect settings. Add your old URL and point it to the new one.

**Option 2: Redirection Plugin**

Install the free Redirection plugin. Go to Add New Redirect, enter your old URL and new URL, and save.

**Option 3: .htaccess**

For advanced users, you can add redirects directly to your .htaccess file. This is faster for large numbers of redirects but requires more caution.

## Should you include the category in URLs?

The structure `/%category%/%postname%/` is popular but has a downside: if you change a post's category, the URL changes. This defeats the purpose of permalinks being "permanent."

For most sites, I recommend:

- **Post name** structure for simplicity
- Use categories for organization, not in the URL
- Add "blog" prefix if you want structure: `/blog/%postname%/`

## Quick checklist

Before you publish your site:

- [ ] Choose your permalink structure in Settings → Permalinks
- [ ] Click Save Changes to flush rewrite rules
- [ ] Test a few URLs to make sure they work
- [ ] If changing an existing site, set up redirects for old URLs

Permalinks are one of those settings most people ignore, but they affect your site in ways that matter. A clean, descriptive URL structure looks professional, helps with SEO, and makes your site easier to navigate.

Set this up before you publish your first post. It is much easier to get it right from the start than to fix it later.

Still have questions? Send me an email and let's discuss.
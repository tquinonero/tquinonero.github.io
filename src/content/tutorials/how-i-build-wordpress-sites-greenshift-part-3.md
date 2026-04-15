---
title: "How I Build WordPress Sites with Greenshift (2026) — Part 3: Addons Deep Dive"
date: 2026-04-15
author: "Toni Q"
description: "Part 3 of my Greenshift tutorial series. A deep dive into the SEO & Marketing addon and Query addon."
tags: ["wordpress", "greenshift", "tutorial", "addons", "seo", "query"]
slug: how-i-build-wordpress-sites-greenshift-part-3
---

In [Part 2](/tutorials/how-i-build-wordpress-sites-greenshift-part-2/), we built the design system with Stylebook and Global Settings. Now let's talk about what makes Greenshift powerful beyond styling: the addons.

I'll cover two that I use on almost every site I build:

- **SEO & Marketing addon**: For on-page SEO and marketing features
- **Query addon**: For dynamic content and custom queries

Both are premium addons, but they're worth it if you're serious about your site.

## SEO & Marketing Addon

This addon adds blocks specifically designed for marketing and SEO features. Here's what I use most:

### How to Block

If you publish tutorials or how-to content, this block is invaluable. It automatically generates **FAQ schema** for SEO: your content gets that rich snippet treatment in Google search results.

It's not a generic "schema block." Instead, you structure your content as steps, and Greenshift handles the structured data automatically.

### Event Box

For events, workshops, or appointments. Similar to the How to block, it includes **Event schema** automatically. Set the event date, time, location, and ticket information and the structured data comes along for free.

### Comparison Builder

Create comparison tables for products, services, or tools. Useful for affiliate content or if you present multiple options to visitors.

### Review Box

Build review layouts with criteria, pros/cons, and scores. Also includes schema for review markup if you want that.

### How I Use It

For every site I build:

1. **Use How to blocks** for any tutorial or step-by-step content (auto-schema is huge)
2. **Use Event boxes** if the site has any events or appointments
3. **Use Comparison tables** for product comparisons or feature comparisons
4. **Use Offer boxes** for promoting products or services

## Query Addon

This is where Greenshift really separates itself from other page builders. The Query addon gives you power that typically requires custom code or third-party plugins.

### What It Does

The Query addon adds enhanced Query Loop blocks that let you:
- Query by post type, taxonomy, custom fields
- Control exactly what displays (title, excerpt, image, meta)
- Create advanced layouts
- Build custom pagination

### Breadcrumbs Block

Yes, it's here in the Query addon. Essential for site structure and user navigation. The breadcrumbs block is simple to configure:
- Separator style
- Link colors
- Current page styling

I add breadcrumbs to blog posts and archive pages on every site.

### Use Cases I Encounter Often

**Related Posts**

Display posts related to the current article. Query by:
- Same category (exclude current post)
- Or same tags
- Limit to 3-6 posts

**Featured Posts Section**

Create a "featured" section on your homepage:
- Query posts with a specific tag or meta field
- Display in a grid or carousel
- Highlight the first post differently

**Dynamic Archives**

Build custom archive pages:
- Filter by year, month, author
- Create category landing pages with custom layouts
- Display post counts

**Portfolio or Case Studies**

For custom post types:
- Filter by project type or client
- Display project details (client name, year, results)
- Link to case study pages

### Filter Block

One of the most powerful features in the Query addon. Add dynamic filters to any query: let users filter by category, tag, custom taxonomy, or meta fields without reloading the page.

### My Approach

I don't use the Query addon on every page. For simple blog listings, the built-in Query Loop is fine.

I reach for the Query addon when:
- Standard layouts don't work
- I need custom filtering
- I'm building a complex archive or index
- I want to display custom post types

### Performance Consideration

Query addon is powerful, but with power comes responsibility. Don't create queries that pull hundreds of posts. Use pagination. Test on mobile.

If your query is slow, simplify it. You don't need every field, just what you display.

## Combining Both Addons

Here's where it gets interesting.

Example: A blog archive page with:

- **Query addon**: Breadcrumbs at top, custom layout for posts, filtering by category, pagination
- **SEO & Marketing addon**: How to blocks in tutorials, Review boxes for product posts

The two work together seamlessly. Greenshift blocks inherit your design system from Part 2, so everything looks consistent.

## Common Mistakes

**Enabling every addon**

Don't install every Greenshift addon "just in case." Enable only what you need. Each addon adds block options you may not need.

**Not reading addon documentation**

These addons have settings and options that aren't obvious. Spend time exploring the block settings panel for each and the official documentation.

**Ignoring the free version first**

Start with the free Greenshift plugin. Add addons one at a time. Understand what each adds before moving to the next.

## What's Next

In the final part of this series, I'll cover performance optimization and the common mistakes I see people make when building with Greenshift. This is where many sites fail, and it's the easiest to fix if you know what to look for.

[Continue to Part 4: Performance & Common Mistakes →](/tutorials/how-i-build-wordpress-sites-greenshift-part-4/)

---

The addons are where Greenshift shines and becomes a complete site building system for me. But they're tools, not shortcuts. Use them intentionally.
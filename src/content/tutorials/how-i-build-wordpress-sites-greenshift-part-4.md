---
title: "How I Build WordPress Sites with Greenshift (2026) — Part 4: Performance & Common Mistakes"
date: 2026-04-15
author: "Toni Q"
description: "Part 4 of my Greenshift tutorial series. Learn about performance optimization and the common mistakes to avoid."
tags: ["wordpress", "greenshift", "tutorial", "performance", "best-practices"]
slug: how-i-build-wordpress-sites-greenshift-part-4
---

We've covered setup, design system, and addons. Now let's talk about what makes or breaks a site after you build it: performance and common mistakes.

I've seen plenty of Greenshift sites that load fast, and plenty that are slow. The difference isn't the tool, it's how it's used. Let's learn something, shall we?

## Performance Basics

Before diving into Greenshift specifics, the fundamentals still apply:

- **Good hosting**: Don't cheap out here. Your host sets the ceiling for performance.
- **Image optimization**: Use WebP, compress before uploading, use lazy loading (I wrote a guide on [optimizing images without plugins](/tutorials/optimise-images-wordpress-without-plugins/))
- **Caching**: Page caching, browser caching, object caching if your host supports it
- **Updates**: Keep WordPress, Greenshift, and plugins updated

None of this is Greenshift-specific, but it matters more than any individual optimization.

## Greenshift-Specific Optimizations

### Be Careful with Animations

Greenshift has powerful animation features. They're tempting, but each animation adds JavaScript.

My rule:
- Use entrance animations sparingly (fade-in, slide-up)
- Avoid scroll-triggered animations on mobile
- Test on actual devices, not just browser dev tools

### Clean Up Unused Blocks

In **Greenshift → Block Manager**, disable any blocks you don't use. Less clutter, faster editor, fewer options to accidentally use wrong.

## Common Mistakes

Here's what I see people do wrong with Greenshift:

### 1. Over-Using Extra Plugins

This is the biggest problem. They need some functionality and automatically think Greenshift can't do it so they search for plugins in the repo

Real talk: You probably need 2-3 extra plugins max, depending on your needs. Each plugin you install:

- Adds code to your site
- Adds blocks to your editor
- Potentially conflicts with others
- Requires updates

Only enable what you actually use. Review your plugins and addons every few months.

### 2. Ignoring Stylebook

I mentioned this in Part 2, but it bears repeating. People skip Stylebook because it feels like extra work.

Then they manually style everything. Six months later, they want to change their primary color and realize they have to update 47 different elements manually.

Use Stylebook. Define your tokens. Let the system work for you.

### 3. Not Testing Mobile

This should be obvious, but it isn't. Greenshift has responsive controls, but people still design on desktop and hope for the best.

My process:
- Design mobile first (smallest screen, most constraints)
- Check tablet
- Then desktop

Test on actual devices if possible. Browser dev tools help but aren't the same as real usage.

### 4. Not Using Variables and Classes Correctly

This is where Greenshift gets powerful but also where people get confused.

**Variables** (CSS custom properties): Set in Stylebook, used for values that might change. Example: `--gs-primary-color`.

**Classes**: Reusable style combinations. Example: `.button-outline` might set border, padding, and hover effects.

The mistake: People use inline styles for everything, or manually apply the same styles repeatedly instead of creating reusable classes.

Here's how I work:
1. Set up Design Tokens in Stylebook (colors, spacing, typography)
2. Use tokens in block settings (not custom values when possible)
3. Create classes for repeating patterns (specific layouts, button styles)
4. Apply classes to blocks, not manual styling

This makes updates easy. Change the token, every block using it updates. Create a new class, apply it anywhere.

### 5. Forgetting About Templates

Greenshift with an FSE theme lets you create templates. Use them.

Common templates to set up:
- Page (default)
- Single post
- Archive (blog listing)
- 404 page
- Search results

Create once, use everywhere. When you update the template, every page using it updates.

### 6. Not Backing Up Before Big Changes

This isn't Greenshift-specific, but it's crucial. Before you:

- Change your Stylebook settings
- Update your theme.json
- Switch templates

Back up your site. Mistakes happen. Reverting is easy when you have a backup.

## Wrapping Up

This series covered my complete workflow for building WordPress sites with Greenshift in 2026:

1. **Setup & Foundation**: Install theme and plugin, basic configuration
2. **Design System**: Stylebook and Global Settings for consistency
3. **Addons**: SEO & Marketing and Query addons for advanced features
4. **Performance**: Optimizations and common mistakes to avoid

The tools are only as good as how you use them. Greenshift is capable of building fast, beautiful sites. But you have to put in the work on the foundation.

[Back to Part 1: Setup & Foundation](/tutorials/how-i-build-wordpress-sites-greenshift-part-1/)

---

If you want to go deeper on any specific part, I have tutorials on [Greenshift Stylebook](/tutorials/greenshift-stylebook-explained/) and [Global Settings](/tutorials/greenshift-global-settings-explained/) that cover those topics in more detail and more tutorials in-depth tutorials are coming soon.
---
title: "Greenshift Global Settings Explained"
date: 2026-03-19
author: "Toni Q"
description: "A clear guide to Greenshift's global settings - fonts, breakpoints, CSS options, scripts, and more."
tags: ["greenshift", "wordpress", "gutenberg", "page-builder", "settings"]
slug: greenshift-global-settings-explained
---

If you're using Greenshift (the WordPress block theme and page builder), you'll find a Global Settings panel that controls how your entire site behaves. This guide breaks down each section. Let's get into it.

## Where to Find Global Settings

In your WordPress dashboard, go to **Greenshift → Settings**. You'll see several tabs along the top. Let's walk through each one.

---

## The Settings Tab

This is where most of the important configuration lives.

### Font Options

By default, WordPress might load Google Fonts from their servers. This section lets you upload **local fonts** directly to your site instead.

**Why does this matter?**
- GDPR compliance: local fonts don't send user data to third parties
- Privacy: no external requests to Google's servers
- Performance: sometimes faster than loading from Google's CDN

To add local fonts, upload your font files (usually .woff2 format) in this panel, then you can select them in any block's typography settings.

### Breakpoints

Breakpoints define when your design changes for different screen sizes. Greenshift uses standard breakpoints similar to Bootstrap:

- **Desktop** — usually 1200px+
- **Tablet** — around 768px to 1199px
- **Mobile** — below 768px

You can adjust these if your design requires it, but the defaults work for most sites. When editing any block, you'll see icons in the panel to switch between device views.

### CSS Options

Greenshift stores custom CSS in each post's meta data. If you ever see unstyled elements on your live site (but they look correct in the editor), changing this setting can help. It controls how Greenshift saves and outputs its CSS.

Usually, you won't need to touch this — but it's there if you encounter issues.

### Script Options

This is handy for performance. You can enable **script delay**, which pushes non-essential JavaScript to load later. This improves your PageSpeed score, especially on pages with lots of animations or third-party scripts.

**Use case:** A landing page with animations, embedded videos, and tracking scripts can become slow. Enabling script delay defers these so the page renders faster.

### Header / Footer

Need to add something to your site's `<head>` section (not the visible header — the HTML head)? Or inject code before the closing `</body>` tag?

This is where you add things like:
- Google Analytics tracking code
- Google AdSense scripts
- Custom meta tags
- Favicon links

Just paste your code in the appropriate box and it'll be added site-wide.

### API Keys

Some Greenshift blocks need external API connections. For example:
- **Map block** — requires a map API key
- **Smart Code AI block** — needs an AI service key

Enter your API keys here, and the relevant blocks will connect automatically. Easy, innit?

---

## Addons and Licenses Tab

Greenshift has a free core plugin, but additional features come via paid addons. This tab shows what's available:

- Download and activate addons
- Enter your license key to receive updates

I personally recommend trying the free core plugin and only buying the addons if that isn't enough. The free version will be enough for most brochure or informational sites.

**Important:** Simply downloading an addon isn't enough — you also need to activate your license for it to work properly.

---

## Import / Export Tab

This section lets you move your Greenshift setup between sites:

**What gets exported:**
- Reusable templates you've created
- FSE (Full Site Editing) templates
- Plugin settings, including:
  - Custom class system
  - Global variables
  - Global elements

This is incredibly useful if you're setting up multiple sites or need to back up your configuration before making big changes.

---

## Stylebook Tab

Stylebook deserves its own detailed guide (which we'll cover separately), but in short it's where you control the styles of global elements of your site such as headings, buttons, typography of the body, links and more. Greenshift allows you to use a class system approach, a variable system approach, both or none. Completely up to you.

---

## Quick Summary

| Setting | What It Does | When to Touch It |
|---------|--------------|------------------|
| Font Options | Upload local fonts | Always. Better for privacy and performance |
| Breakpoints | Define responsive sizes | Only if you need custom screen sizes |
| CSS Options | Control CSS output | If you see unstyled elements |
| Script Options | Delay JavaScript | To improve PageSpeed scores |
| Header/Footer | Inject code sitewide | When adding analytics or ads |
| API Keys | Connect external services | When using map or AI blocks |
| Addons/Licenses | Manage extensions | When installing premium features |
| Import/Export | Move settings between sites | When migrating or backing up |

---
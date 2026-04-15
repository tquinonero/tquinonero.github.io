---
title: "How I Build WordPress Sites with Greenshift (2026) — Part 1: Setup & Foundation"
date: 2026-04-15
author: "Toni Q"
description: "The first part of my detailed tutorial series on building WordPress sites with Greenshift FSE theme and plugin. This covers installation and initial setup."
tags: ["wordpress", "greenshift", "tutorial", "fse-theme", "page-builder"]
slug: how-i-build-wordpress-sites-greenshift-part-1
---

This is the first part of a series where I walk you through how I build WordPress sites using Greenshift. If you're an entrepreneur building your own site and want a modern, fast, flexible setup, this series is for you.

I'm assuming you already know the basics of WordPress. You know how to install plugins, navigate the admin, and create pages. What you want is a concrete workflow for using Greenshift effectively.

Let's start with the foundation.

## Installing Greenshift FSE Theme

Greenshift offers a Full Site Editing (FSE) theme that's designed to work seamlessly with the Greenshift plugin. Unlike traditional themes, FSE themes give you control over every part of your site through the Site Editor.

### Step 1: Install the Theme

1. Go to **Appearance → Themes** in your WordPress admin
2. Click **Add New Theme**
3. Search for "Greenshift" or browse the feature filter for "Full Site Editing"
4. Install and activate **Greenshift FSE**

### Step 2: Initial Theme Setup

Once activated, it will recommend you to install the Greenshift companion plugin. Install and activate it. Once both are activated, Greenshift will automatically redirect you to its **Theme Settings** where you can customise things such as: 

1. **Brand settings**: Here you can define your Site's title, description, logo and icon.
2. **Homepage settings**: Here you can define what your homepage displays. By default it's set to Homepage template. Leave it as is. We will customise the template later.
3. **Header pattern**: Here you define which header pattern you want to use from the predefined patterns or create a new Header template. You can also do this later.
4. **Footer pattern**: The same as the previous step, but for the footer pattern.
5. **Create Extra pages**: This helps you create a Blog page, Contact us, Price page, Team page, Product comparison page or Wishlist page quickly by using some predefined wireframes the Greenshift team created.

Next you can define a template for your posts, and another template for your archives. The single post template is used to display single individual posts and the post archives template is used for displaying post listings.

Next, we have the option to define our **Stylebook** I cover the Stylebook in depth in my tutorial on [Greenshift Stylebook explained](/tutorials/greenshift-stylebook-explained/), but here's the quick version:

1. **Colors**: Define your palette in the Colors section
2. **Typography**: Set your heading and body fonts
3. **Elements**: Customize buttons, links, form inputs
4. **Spacing**: Define your spacing scale

The theme gives you the foundation, but the Greenshift plugin adds the real power: custom blocks, advanced styling, animations, and more. Let's get into it!

### Step 1: Install the Plugin if you haven't

By now, Greenshift plugin should be already installed but if you haven't installed it yet, do this:

1. Go to **Plugins → Add New**
2. Search for "Greenshift"
3. Install and activate **Greenshift — animation and page building blocks**

There's also a premium version with more blocks and features. For most sites, the free version is a solid starting point.

### Step 2: Plugin Settings

After activation, you'll see a new menu item called **Greenshift** in your sidebar. Click on it and configure these key settings:

- **Global Settings**: Set things such as Fonts, Breakpoints, CSS Options (I leave this as is), Script delay for optimising performance, Add footer/header code such as Google analytics or search console verification codes, set Support for Core Framework Utility classes, Disable core Headings anchor generation, Disable default Column padding in Row block, Dark Accent UI for block panels, Dark Mode for Editor page, Priority for GreenLight Element Blocks in Inserter, Default unit for values, Close Local style option in Element block by default. In the API keys section you can also configure your Google, Cloudflare Turnstile API keys, and different AI providers in case you'd like to use Greenshift's AI features. I personally don't at the time of writing this post (15th april 2026).
- **Bock manager**: If it's only you creating the website, leave this section alone. Use this page to control which blocks and variations are available to different user roles in the block inserter. Simplified panel option allows you to hide the block manager panel for non editor user roles and lock position of blocks. I will explain this in greater detail later.
- **Addons Settings**: Here you can see which official addons you own, buy the ones you don't have and download them.
- **License Manager**: In case you bought some of the addons or the All in One access license, you can activate them here.
- **Import Export**: Don't worry about this section for now. You won't have any templates created so don't worry about it.
- **Demo Site Import**: Here you can import a demo site in case you'd like to start with something already done for you. I like to start from scratch.

Go through each tab and enable what you need. There's no right answer here. Enable what you'll actually use.

## What's Next

In the next part of this series, I'll cover how I use the Stylebook and Global Settings to build a consistent design system. I'll show you exactly how I set up colors, typography, and spacing — and why this matters for maintaining a cohesive site.

[Continue to Part 2: Design System with Stylebook and Global Settings →](/tutorials/how-i-build-wordpress-sites-greenshift-part-2/)

---

If you're just getting started with Greenshift, spend time on this foundation. It feels like extra work upfront, but it makes everything faster later.
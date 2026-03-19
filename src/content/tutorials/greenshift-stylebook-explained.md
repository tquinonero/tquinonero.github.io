---
title: "Greenshift Stylebook Explained"
date: 2026-03-19
author: "Toni Q"
description: "Learn how to use Greenshift's Stylebook to manage global styles, colors, typography, variables, and more."
tags: ["greenshift", "wordpress", "gutenberg", "stylebook", "design"]
slug: greenshift-stylebook-explained
---

Stylebook is Greenshift's central hub for managing your site's design system. Instead of setting the same styles on every block, you define them once in Stylebook and use them everywhere. Let's break it down.

## How to Open Stylebook

You can access Stylebook from two places:

1.  **WordPress Dashboard** — Go to **Greenshift → Stylebook**
2.  **Block Editor** — Click the **G icon** in the top toolbar when editing a post or page

Both open the same panel. Use whichever is more convenient at the moment.

---

## Stylebook Sections

Stylebook is divided into several sections. Here's what each one does.

### Elements

This is where you set default typography for your whole site. Specifically:

- **Headings** — H1 through H5 font sizes, families, weights, and line heights
- **Body text** — Default paragraph styling
- **Buttons** — Styles for the core Button block (also applies to Greenshift's Advanced Button and WooCommerce button blocks)

**How to edit:**
1. Click on a heading (like "H1") in the list
2. A dropdown appears with all the typography options
3. Adjust your settings
4. **Click the Save button** — this is important! Without saving, your changes disappear after refreshing the page

This means every H1 on your site will automatically use these styles, unless you override them on a specific block.

### Colors

Here you define your own color palette. Instead of picking random hex codes each time, you create a consistent set of colors that your whole team can use.

**What you can set:**
- Solid colors (e.g., your brand primary color)
- Gradients (e.g., a linear gradient from blue to purple)

Once saved, these colors appear in the color picker inside every block. No more hunting for the right hex code.

**Pro tip:** Set your colors here first, then use them throughout your site for consistency.

### Variables

Variables are reusable presets for block options. Think of them as shortcuts — instead of typing the same number over and over, you create a variable once and select it wherever needed.

**Common use cases:**
- Standard spacing between sections
- Border widths
- Animation durations
- Custom values that repeat across your design

Variables are especially powerful when combined with Greenshift's Dynamic CSS features. If you're comfortable with CSS, this opens up a lot of flexibility.

### Global Classes

Global classes let you create reusable style presets that you can apply to any block. Unlike the Elements section (which targets specific block types), global classes work on anything.

**Example use case:**
Say you want a specific button style that differs from the default button styles. You create a global class called "Primary Button" with your custom colors, border radius, and hover effects. Then you apply this class to any button, any time.

**The power of global classes:**
- Change the style in one place
- Every block using that class updates automatically
- Great for maintaining consistency across a large site

### Presets

Preset lets you save your entire Stylebook configuration as a "snapshot." This is useful if you want to:

- Create different Stylebook configurations for different projects
- Back up your current setup before experimenting
- Swap between design systems quickly

Think of it like a save/load feature for your entire design system.

### Figma Synchronization

If you design in Figma, this is a game-changer. Greenshift offers a free plugin that connects your Figma file to your WordPress site.

**How it works:**
1. Design your Stylebook in Figma (colors, typography, etc.)
2. Use the Figma plugin to push those styles to your Greenshift site
3. They sync automatically — no manual copying

This is especially useful for teams that design in Figma and then hand off to someone who builds in WordPress.

---

## Why Use Stylebook?

Without Stylebook, you end up setting fonts, colors, and spacing on every single block. That's:
- **Time-consuming** 
- **Inconsistent** 
- **Unmantainable** — 

Stylebook solves all three. Set it up once, use it everywhere.

---

## How It Fits With Other Options

Greenshift works alongside other ways to control global styles:

- **WordPress Full Site Editing (FSE)** — The built-in Style Editor in the Site Editor
- **Your theme's global elements** — If using a block theme
- **CSS frameworks** — Like ACSS (Atomic CSS) or Greenshift's Core Framework addon

There's no single "right way": it depends on your preference and workflow. Stylebook is perfect if you want everything contained within Greenshift, with Figma sync, import/export, and presets built in.

---

## Quick Recap

| Section | What It Does |
|---------|---------------|
| Elements | Default typography for headings, body, and buttons |
| Colors | Custom color palette and gradients |
| Variables | Reusable value presets for block options |
| Global Classes | Reusable style presets for any block |
| Presets | Save/load entire Stylebook configurations |
| Figma Sync | Import styles directly from Figma |

---

## Next Steps

Now that you understand Stylebook, you can build a consistent design system for your site. Pair this with the Global Settings (for fonts and breakpoints) and you'll have a tightly controlled, professional setup.

If you want to go deeper, look into Greenshift's Global Variable system and Global Class system for even more control over your designs.
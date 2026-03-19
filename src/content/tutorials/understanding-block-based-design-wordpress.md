---
title: "Understanding Block-Based Design in WordPress"
date: 2026-03-19
author: "Toni Q"
description: "Classic themes vs block themes, the Site Editor, and why block-based design is the future of WordPress development."
tags: ["wordpress", "block-editor", "gutenberg", "block-themes", "site-editor"]
slug: understanding-block-based-design-wordpress
---
If you've used WordPress in the past few years, you've probably heard about "blocks," "Gutenberg," and "Full Site Editing." But what does it actually mean and why should you care? Let's get into it.

## What Are Blocks?

Blocks are the fundamental building units of modern WordPress. Instead of writing content in a single blob of HTML, everything in WordPress — paragraphs, images, headings, buttons, quotes is now a separate **block**.

When the WordPress team introduced the Block Editor (codenamed Gutenberg) in WordPress 5.0 (2018), they fundamentally changed how we create content. Instead of a single WYSIWYG editor, you now stack, arrange, and style individual blocks.

### Examples of blocks:

-   Paragraph block
-   Heading block (H1–H6)
-   Image block
-   Button block
-   Columns block
-   Group block
-   Cover block
-   Video block
-   Embed blocks (YouTube, Twitter, etc.)
-   And hundreds more via plugins

Each block has its own settings — alignment, colours, typography, spacing — that you can adjust directly in the editor.

---

## Classic Themes vs Block Themes

Before we dive deeper, let's clear up the confusion between classic themes and block themes.

### Classic Themes

Classic themes use traditional PHP template files (`header.php`, `index.php`, `single.php`, etc.) to define how your site looks. They may use the block editor for content, but the overall site design — navigation, sidebar, footer, homepage layout — is controlled by PHP files and `style.css`.

Examples of classic themes:
-   Astra
-   GeneratePress
-   Hello Elementor
-   Twenty Twenty-Four (can work both ways)
-   Most themes before 2022

**With classic themes:**
-   You use the Customizer (Appearance → Customize) for site-wide settings
-   You use the block editor only for post/page content
-   You need a page builder (Elementor, Beaver Builder) or theme options for layouts
-   Theme developers write PHP to add features

### Block Themes

Block themes treat every part of your site as blocks. The entire theme is built using blocks, and you can edit **every part of your site** — header, footer, templates, archives, single posts — directly in the WordPress Site Editor.

Block themes store their templates as HTML files with block markup (not PHP), and use a `theme.json` file to control global styles, colours, typography, and spacing.

**With block themes:**
-   You use the Site Editor (Appearance → Editor) for everything
-   Every visual element is a block or block pattern
-   No need for a separate page builder
-   Global styles control the entire site from one place

Examples of block themes:
-   Greenshift
-   Twenty Twenty-Two
-   Twenty Twenty-Three
-   Twenty Twenty-Four
-   Twenty Twenty-Five

---

## The Site Editor

The biggest shift with block themes is the **Site Editor** — a visual, block-based editor that lets you design your entire site easily.

### What you can do in the Site Editor:

1.  **Edit templates** — Modify how posts, pages, archives, and the homepage look
2.  **Edit template parts** — Customize headers, footers, sidebars, navigation
3.  **Create block patterns** — Reusable layouts you can drop into any page
4.  **Set global styles** — Define your colour palette, typography, spacing, and borders in one place
5.  **Manage navigation menus** — Create and edit menus visually

Everything happens in a single interface. There is no need to switch between the customiser, the post editor, etc.

### How it works:

1.  Go to **Appearance → Editor**
2.  Click **Styles** to open the global style panel
3.  Click the **pages icon** to navigate between templates
4.  Click any element to edit it with block controls
5.  Click the **+** button to add new blocks or patterns

---

## Why Block-Based Design Is the Present

Here's the thing: block-based design in WordPress isn't some distant future. It's here now, and it's the direction the project has headed for many years already. Embrace it.

### 1. It's Built Into WordPress Core

Block themes and the Site Editor aren't plugins — they're part of WordPress core. Every new WordPress release improves them. The WordPress team has explicitly stated that block themes are the future of theming.

### 2. Zero Dependencies

With classic themes, you're often dependent on:
-   Theme frameworks (Elementor, Divi, Astra)
-   Customiser extensions
-   Third-party plugins

With block themes, everything you need is built into WordPress. No extra plugins required for basic site building.

### 3. Faster Performance

Block themes load faster because:
-   No PHP template processing
-   No page builder overhead (although you can use page builders with Gutenberg blocks for extra features)
-   Styles are enqueued properly via `theme.json`
-   Blocks render efficiently with React

Many block themes score 90–100 on PageSpeed Insights out of the box.

### 4. Future-Proof

When WordPress updates, block themes adapt automatically. Classic themes often break with major WordPress updates and require developer maintenance. Block themes are designed to be forward-compatible.

### 5. Simpler Workflow

For end users:
-   One editor for everything (no switching between Customizer, page builder, and block editor)
-   Visual editing for the entire site
-   Changes are previewed instantly
-   No code needed for most customisations

For developers:
-   JSON-based configuration instead of PHP spaghetti
-   Standardised block API
-   Easier to maintain and version control templates
-   Patterns can be shared across themes

---

## What About Page Builders?

You might be thinking: "But I like Elementor/Divi/Beaver Builder."

Here's the thing: page builders are very popular, and for good reason - they make site building more accessible. And you can still use them with block themes if you want. Totally up to you. I personally use both Greenshift block theme and Greenshift page builder to add different blocks the core block editor lacks.

---

## Getting Started with Block Themes

If you want to try block-based design, here's how:

### For users:

1.  Install a block theme (Greenshift, Twenty-Twentyfive or any theme marked as "Block theme")
2.  Go to **Appearance → Editor**
3.  Start editing — click around, add blocks, adjust styles
4.  Explore **Patterns** for pre-made layouts
5.  Check **Styles** to set your colour palette and typography

Note: Some themes improved the workflow in the site editor. It's always best to check their documentation to see what they recommend to get started editing their themes.

### For developers:

1.  Read the [Block Theme documentation](https://developer.wordpress.org/themes/block-themes/)
2.  Learn `theme.json` — it controls colours, typography, spacing, and more
3.  Understand block template hierarchy (same as classic themes, but HTML files)
4.  Build reusable patterns for clients
5.  Try creating a simple block theme from scratch

---

## The Bottom Line

The Block Editor replaced the classic editor. Block themes are replacing classic themes. The Site Editor is replacing the Customizer.

You don't have to switch today. Classic themes still work, and page builders still have their place. But understanding block-based design is essential because this is where WordPress is headed.

Now stop procrastinating and get to work!

---

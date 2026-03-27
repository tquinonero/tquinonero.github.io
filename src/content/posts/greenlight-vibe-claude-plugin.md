---
title: "GreenLight Vibe: Turn your HTML into WordPress blocks using Claude Code"
date: 2026-03-27
author: "Toni Q"
description: "GreenLight Vibe is a Claude Code plugin that converts any HTML into Greenlight blocks, making it easier to move designs into WordPress. Now with deconvert support and dynamic content generation."
tags: ["wordpress", "gutenberg", "greenshift", "claude", "ai", "tools"]
slug: greenlight-vibe-claude-plugin
---

GreenLight Vibe is a new Claude Code plugin by WPSoul that converts HTML into Greenlight blocks. It's now stable and ready to use with Claude, Codex, or any agent system.

The workflow is straightforward: build with clean HTML + CSS + JS, then convert to Greenlight block code. If you need to make bigger edits later, you can deconvert the blocks back to HTML, work on them, and convert again too.

## Installation

Inside Claude Code, you can install it a few ways:

**Via official marketplace:**
```
/plugin install greenlight-vibe@claude-plugins-official
```

**Via GitHub:**
```
/plugin marketplace add wpsoul/greenlight-vibe
/plugin install greenlight-vibe@wpsoul-greenlight-vibe
```

**As a project skill (without the plugin system):**
```
/plugin marketplace add ./greenlight-vibe
```

Or drop it directly into your agent and ask it to install from the GitHub repo.

## Commands

| Command | Description |
|---|---|
| `/greenlight-vibe:convert <file.html>` | Convert an HTML file to Greenlight blocks |
| `/greenlight-vibe:deconvert <file.txt>` | Convert Greenlight blocks back to HTML |

## How It Works

The skills activates automatically when you use keywords like **wordpress**, **gutenberg**, **greenshift**, **greenlight**, **convert to blocks**, or **chart**.

The workflow follows a simple pattern:

1. **Build HTML** — create clean vanilla HTML + CSS + JS following Greenshift conventions
2. **Convert** — the zero-dependency `scripts/convert.js` transforms HTML into block code, parsing CSS into local classes with `styleAttributes`, extracting JS, and mapping HTML attributes
3. **Deconvert when editing** — the `scripts/deconvert.js` turns Greenlight block code back into HTML/CSS/JS for larger edits
4. **Validate** — output is checked against block syntax rules
5. **Variable fitting** — hardcoded values get replaced with WordPress CSS variables

## Converter Scripts

The converter scripts are standalone Node.js scripts with zero npm dependencies:

```bash
node scripts/convert.js input.html                # stdout
node scripts/convert.js input.html -o output.txt    # file output
cat input.html | node scripts/convert.js           # stdin

node scripts/deconvert.js input.txt                # stdout
node scripts/deconvert.js input.txt -o output.html # file output
```

Features include:
- Custom HTML parser (no packages required)
- CSS parsed into `dynamicGClasses` with `styleAttributes`, hover/focus states, sub-selectors, media queries, and keyframes
- JS extracted into `customJs` / `customJsEnabled`
- Full element mapping: links, images, SVGs, videos, forms, tables

The skill fix also properly handles Width, preparing your HTML in the proper way so you can continue editing in WordPress without issues.

## Dynamic Content and Query Loops

Recent updates added support for **dynamic content** and **query loops** (currently in beta, requires WP 7.0+). This means you can generate more complex WordPress-native layouts directly from your HTML source.

## Comparison with Vibe Code Skills

There's also a similar skill from Vibe Code worth checking out. The difference: Vibe Code's skills build mainly Greenlight variants and elements directly, while GreenLight Vibe generates HTML first then converts to blocks. The author found this approach more stable.

## File Structure

```
greenlight-vibe/
├── .claude-plugin/
│   └── plugin.json                  # Plugin manifest
├── commands/
│   ├── convert.md                   # /greenlight-vibe:convert
│   └── deconvert.md                 # /greenlight-vibe:deconvert
├── skills/
│   └── greenlight-vibe/
│       ├── SKILL.md                 # Main skill (auto-invoked)
│       ├── scripts/
│       │   ├── convert.js           # HTML-to-blocks converter
│       │   └── deconvert.js         # Blocks-to-HTML converter
│       └── instructions/
│           ├── core-structure.md    # Block format, JSON parameters
│           ├── attributes.md        # HTML attributes, links, images, icons
│           ├── variables.md         # CSS variables (fonts, spacing, shadows)
│           ├── scripts.md           # Custom JavaScript
│           ├── charts.md            # ApexCharts integration
│           ├── dynamic-content.md   # Dynamic placeholders
│           └── dynamic-loops.md     # Query loop syntax
└── README.md
```

## Credits

GreenLight Vibe is made by **WPsoul** and MIT licensed.

Give it a try if you've been looking for a smoother way to get your HTML designs into WordPress using the Greenlight block system!

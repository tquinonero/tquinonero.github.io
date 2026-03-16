---
title: "GreenLight Visual Editor: The Future of In-Code Visual Design?"
date: 2026-03-16
author: "Toni Q"
description: "GreenShift just announced GreenLight Visual Editor, a live visual editor for HTML, Astro, and Markdown that runs directly inside VS Code. Is HTML becoming the new design medium?"
tags: ["ai", "web development", "vscode", "html", "wordpress", "greenshift", "visual editor"]
slug: greenlight-visual-editor-future-in-code-visual-design
---

Just discovered something interesting from the GreenShift ecosystem.

While a lot of the industry is busy building yet another AI wrapper, the team behind GreenShift just announced their first tool from an upcoming bundle of five: **GreenLight Visual Editor** for VS Code.

It's a live visual editor for HTML, Astro, and Markdown that runs directly inside VS Code (and compatible IDEs like Cursor, Windsurf, etc.). The idea is simple but powerful: design visually while working with real HTML files.

## Highlights

- **Visual editing for vanilla HTML** – build and adjust layouts visually without leaving your IDE
- **Works with Astro and Markdown** – making it useful for modern static and AI-driven workflows
- **Built for AI agents** – HTML is treated as the native design language that AI tools can generate and manipulate easily
- **No build step required** – HTML works instantly locally and can be deployed just by uploading the file
- **Convert HTML to frameworks** – AI can later transform the HTML into React, Vue, Astro, etc.
- **Visual Markdown editor** – makes content editing more enjoyable with easy image pasting
- **WordPress integration** – export HTML directly into WordPress with images moved to the media library, libraries localized, sections wrapped, classes converted, and variables exported.

One of the more interesting ideas from the announcement:

> HTML could become the primary environment for design, replacing traditional tools like Figma in many workflows — especially when AI agents are involved.

Whether that prediction comes true or not, the direction is clear: design, content, and development workflows are starting to merge directly inside the code editor.

You can try the extension for free by searching "GreenLight Visual Editor" in the VS Code marketplace.

## A Closer Look at the Features

The extension works with `.html`, `.astro`, `.md`, and `.mdx` files. You open any of these files in VS Code, right-click, and select "Open with GreenLight Visual Editor." This opens a dedicated visual panel where you can edit the document live.

### Two-Way Sync

One of the standout capabilities is the double synchronization between the visual editor and your source file. Changes you make visually update the HTML on disk, but here's the kicker — if you modify the file externally (or an AI agent does), those changes immediately appear in the visual canvas. It's a true bidirectional sync that keeps both views consistent at all times.

### Design Tools

The editor includes a full CSS inspector with panels for typography, colors, spacing, layout, positioning, borders, shadows, transforms, and effects. It features a color picker with HSV wheel, opacity slider, hex/RGB input, and even an eyedropper tool. What I find particularly useful is the ability to edit descendant colors from a parent element — instead of selecting each child individually, you can change text, background, and border colors across all nested elements in one go.

### Responsive Editing

GreenLight ships with built-in breakpoints for desktop, tablet, and mobile. You can switch between these viewports and apply style overrides per breakpoint, making responsive adjustments straightforward without constantly resizing your browser.

### Layout Controls

The layout tooling covers flexbox, grid, child placement, alignment, and gap controls. There's also a visual grid builder that lets you create responsive grid layouts interactively — drag, drop, and configure directly on the canvas.

### Animation Builder

For motion design, there's a dedicated animation system that lets you create reusable animation classes starting from presets like fade, slide, grow, spin, pulse, and bounce. You can set triggers (load, hover, in-view, scroll, or class-based), configure keyframes visually or as raw CSS, and adjust duration, easing (including spring curves), direction, iteration count, delay, and fill mode.

### Drag and Drop

Elements can be dragged directly on the canvas to reorder, reparent, or move them between containers. Visual drop indicators show exactly where the element will land, so there's no guessing involved.

### DOM Tree View

Alongside the canvas, there's a tree panel that provides a structural overview of your document. From here you can inspect, select, reorder, retag, hover-highlight, or delete nodes. The tree stays synchronized with what you see on the canvas.

### Markdown and Astro Support

The Markdown editor includes a formatting toolbar with actions for bold, italic, strikethrough, headings (H1–H6), ordered/unordered lists, tables, blockquotes, code blocks, links, and images. For Astro files, you can edit component markup directly while preserving the file format.

### WordPress Integration

The WordPress workflow is particularly well thought out. You can connect multiple sites using application passwords stored securely in VS Code's secret storage. When exporting, GreenLight uploads media to your site's media library, converts HTML into GreenShift-compatible block code, exports CSS variables as global variables, and creates or updates pages on your WordPress site. The export process shows progress, allows retries, and lets you copy the generated code or open the page directly.

## Current Limitations

The tool is relatively new (only 4 installs at the time of writing), so it's early days. It currently works only with local files — no remote URLs. The workflow is also focused on one document at a time. That said, given it's free, there's low barrier to trying it out and seeing if it fits your workflow.

## The Bigger Picture

What strikes me most about this launch isn't just the feature set. The team is positioning HTML as a first-class design medium. In an era where AI agents are increasingly involved in generating UI code, having a tool that treats HTML as the source of truth rather than something to be generated from a visual tool makes a lot of sense.

Curious to see how this evolves, especially as more tools from their bundle get released.

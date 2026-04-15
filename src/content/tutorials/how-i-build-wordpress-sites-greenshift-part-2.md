---
title: "How I Build WordPress Sites with Greenshift (2026) — Part 2: Design System"
date: 2026-04-15
author: "Toni Q"
description: "Part 2 of my Greenshift tutorial series. Learn how to build a consistent design system using Stylebook and Global Settings."
tags: ["wordpress", "greenshift", "tutorial", "design-system", "stylebook", "global-settings"]
slug: how-i-build-wordpress-sites-greenshift-part-2
---

In [Part 1](/tutorials/how-i-build-wordpress-sites-greenshift-part-1/), we set up the foundation: Greenshift theme and plugin installed, basic settings configured. Now let's build the design system that will make your site consistent and easy to maintain.

This is where many people go wrong. They skip the design system and jump straight to building pages. Then they wonder why their site looks inconsistent and takes forever to update.

## My Design System Approach

A design system is a set of reusable components, patterns, and rules that guide how your site looks and works. With Greenshift, you define this in two places:

- **Stylebook**: Your core design tokens (colors, typography, spacing)
- **Global Settings**: Advanced defaults for blocks and elements

Let me show you how I approach this.

## Stylebook: Your Design Foundation

Greenshift's Stylebook is where you define the building blocks of your site's design. Think of it as your single source of truth for how things should look.

I have a full tutorial on [Greenshift Stylebook explained](/tutorials/greenshift-stylebook-explained/), so I'll focus on how I actually use it in practice.

### My Process

**1. Define your color palette first**

Start with 3-5 colors maximum:
- Primary (your main brand color)
- Secondary (accent color)
- Background color
- Text color
- Maybe one extra for special cases

Don't just pick colors you like. Think about:
- What emotion do you want to convey?
- Who is your audience?
- What do competitors in your space use?

You can use my free [Custom Palette Generator](https://tquinonero.github.io/color-palette-generator/) tool to help you with this step. It's very easy to use.

**2. Set your typography scale**

Choose:
- One font for headings
- One font for body text

Set sizes using a scale and not random values. I use a modular scale:
- H1: 3rem (48px)
- H2: 2.25rem (36px)
- H3: 1.5rem (24px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

This creates visual rhythm that feels intentional.

**3. Define button styles**

This is often overlooked. Set up your default button in Stylebook:
- Padding (vertical and horizontal)
- Border radius
- Background color
- Text color
- Hover state (color change, maybe a subtle shadow)

Then, everywhere you add a button, it inherits these defaults. No more manually styling each button.

### Why You Should It

When you get Stylebook right:
- Every page automatically looks cohesive
- Changing one color updates your entire site
- You don't have to remember what font size H2 should be
- Making global changes takes seconds, not hours

## Global Settings: Block Defaults

Global Settings go deeper. They let you set default behaviors for specific blocks.

In my tutorial on [Greenshift Global Settings explained](/tutorials/greenshift-global-settings-explained/) I cover how this works.

## Building Your First Page with the System

Now here's where it all comes together.

When you create a new page:

1. **Start with containers, not random content blocks**: Use container blocks as your main structure
2. **Use the spacing scale**: If you defined 16px, 24px, 32px, 48px as your spacing, only use those values
3. **Apply classes for recurring patterns**: If you use a certain layout often, create a CSS class for it
4. **Test on mobile**: Greenshift makes this easy, but we'll cover this in Part 4

The first few pages take longer because you're establishing patterns. By page 5, you'll be flying because you're reusing everything.

## Common Mistakes to Avoid

Here's what I see people get wrong:

**Ignoring Stylebook entirely**

They skip the Stylebook setup and manually style every element. Then they spend hours trying to make updates. Don't do this.

**Inconsistent spacing**

Using random padding everywhere creates visual chaos. Stick to your defined spacing scale.

**Not using classes**

If you find yourself styling the same way repeatedly, create a CSS class. Greenshift makes this easy with its class system.

## What's Next

In Part 3, I'll dive into the addons — specifically the SEO & Marketing addon and the Query addon. These are where Greenshift really shines for dynamic content and site optimization.

[Continue to Part 3: Addons Deep Dive →](/tutorials/how-i-build-wordpress-sites-greenshift-part-3/)

---

The design system is the unsexy part of building a site. It's also the part that separates sites that are easy to maintain from sites that become a nightmare to update. Don't be a fool and spend the time now. Shortcuts taken in this stage will be paid later.
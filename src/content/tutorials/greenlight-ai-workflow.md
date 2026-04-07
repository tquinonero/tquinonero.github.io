---
title: "How to Build High-Quality AI Websites That Don't Look Like AI Slop"
date: 2026-03-26
author: "Toni Q"
description: "Igor Sunz's workflow for creating professional AI-generated websites using Greenlight. Learn how to build a design system, gather inspiration, and combine AI outputs into polished sites."
tags: ["greenlight", "ai", "web-design", "workflow", "greenshift"]
slug: greenlight-ai-workflow
---

If you have spent any time generating websites with AI tools, you have probably noticed the results often look suspiciously similar: purple gradients, generic card layouts, bland typography. Igor Sunz, creator of [Greenlight](https://greenlightbuilder.pro/), calls this "AI slop" and in a recent YouTube video, he shared the exact workflow he uses to produce results that look nothing like it.

The secret? It is not a single prompt. It is a system.

## The One-Click Myth

Igor opens the video with a sharp observation: every AI website builder promises you can "do everything with one click." But if that were true, why would you need a year-long subscription?

The reality is that one-click generation produces one-click quality. To get genuinely high-quality output from AI, you need the right workflow, the right tools, and a deep understanding of what you are doing. The good news: once that system is in place, what used to take months can be done in three days.

## Why HTML, Not React, Not WordPress

Before touching any AI model, Igor makes a fundamental choice: **HTML only**.

His reasoning is practical: HTML is the native language of the web. When you ask an AI to generate HTML, it does not waste tokens converting between formats or understanding framework abstractions. It just builds. No server required, no webpack, no dependencies, just a file that works.

For editing, he uses a combination of [Cursor](https://cursor.sh/), [Anti-Gravity](https://github.com/anncwb/anti-gravity), and [Visual Studio Code](https://code.visualstudio.com/) (all essentially VSCode forks), plus Greenlight as a visual editor extension.

## Step 1: Build a Proper Design System

This is the most important and most underestimated step.

Igor argues that most people think a design system is just colors and typography. It is not. A complete design system for AI-assisted development should include:

- Background styles
- Font families (headings, subheadings, body)
- Button styles (primary and secondary)
- Header/toolbar panels
- Secondary sections and labels
- Card components
- Icon styles

All of these elements serve as **instructions to your AI model** about what your brand looks and feels like. Without them, the model fills in the gaps with generic defaults, which is where the AI slop comes from.

In Greenlight, Igor imports a wireframe library and customizes the design system visually, then uses that file as a persistent reference in every subsequent prompt.

## Step 2: Test Before You Build

Once your design system is ready, do not jump straight into building pages. Instead, run a few test prompts, ask the model to generate a simple section like a testimonials block or a pricing table.

Compare two outputs: one without the design system attached, and one referencing it. The difference is dramatic. Without the design system, you get the violet gradients. With it, you get something that actually reflects your brand.

If the output still looks generic at this point, something needs to change, either the prompt or the design system itself.

## Step 3: Gather Inspiration (The Smart Way)

Before designing anything, Igor spends time collecting inspiration, not just random screenshots, but four specific types:

1. **Designs similar to your design system** - visual references that match your intended style
2. **Niche-specific sites** - what do competitors or leaders in your space look like? (He uses [Landbook](https://landbook.com/) to search by category)
3. **Interesting animations** - because a modern website without good motion feels flat
4. **Illustrations and icons** - 3D effects, custom graphics, unique visual elements

Instead of dumping these into folders or browser bookmarks, Igor uses the **Greenlight Board**, a unified creativity dashboard that accepts links, screenshots, and even content from Instagram, Twitter, and Behance. It also has a browser extension for capturing screenshots and recording video clips directly to the board.

One standout feature: connect the board to your project folder, and any image you add is automatically saved where your AI agent can read it.

## Step 4: Generate Sections, Informational First

With inspiration gathered, it is time to build. Igor recommends starting with informational sections: pricing tables, FAQ blocks, testimonials. These are where AI models perform best, and they provide a strong foundation.

The prompt pattern is consistent:
- Name the section type
- Reference the design system file for brand guidelines
- Specify the output file

Simple, structured, effective.

## Step 5: Sections With Images (The Harder Part)

Here is where most AI workflows break down. Code models are excellent at structure but struggle to incorporate images meaningfully. Image models do the opposite, great visuals, terrible at embedding them into HTML.

Igor separates the concerns.

Generate the visual (hero illustration, background, icon) using an image model. He highlights Nano Banana as currently the most capable for this use case, though Wave Speed and Cream are also tested in the video. Then extract the individual elements (characters, backgrounds) as separate assets with transparent backgrounds.

From there, the code agent can combine them cleanly because it is working with discrete files rather than trying to interpret a single complex image.

The Greenlight Board handles background removal natively, and you can connect it to your project folder so assets are instantly available to your agent.

## Step 6: Go Beyond Static, Add Animations

The final layer is motion. Igor uses two approaches.

**From existing tutorials:** Sites like [Codrops](https://tympanus.net/codrops/) publish animation demos with GitHub repositories. He pastes the GitHub link into his agent and asks it to generate an HTML version of the effect.

**From screen recordings:** When he sees an animation he likes anywhere on the web, he records a short clip using the Greenlight browser extension and asks the model to replicate the effect, attaching the video directly to the prompt. He also uses [Claude Code](https://www.anthropic.com/claude-code) for animation generation, finding it produces better results than Claude Code alone for complex motion effects.

The result: a library of animation files, each isolated, ready to be merged into the final page.

## Putting It All Together

At the end of the process, you feed all your component files, design system, sections, illustrations, animations, to the model and ask it to combine them into a single static HTML page using the design system as the master brand guideline.

Is it one prompt? No. Is it a lot of work? Compared to hiring a design agency for months, not really.

Igor summarizes the full workflow:

1. Build your design system with proper CSS variables
2. Generate informational sections and validate brand consistency
3. Create image-heavy sections by separating visual and code generation
4. Extract illustrations and backgrounds as standalone assets
5. Build animations from tutorials, GitHub repos, or screen recordings
6. Combine everything into one cohesive file

## About Greenlight

[Greenlight](https://greenlightbuilder.pro/) is a visual editor built by Igor Sunz, available as a VS Code extension and as a WordPress plugin. If you use Greenshift (a popular WordPress block theme), Greenlight integrates seamlessly with it. I have written tutorials on [Greenshift stylebook explained](/tutorials/greenshift-stylebook-explained/) and [Greenshift global settings explained](/tutorials/greenshift-global-settings-explained/) if you want to learn more about using Greenshift with WordPress.

Key features include:

- **Visual HTML editing** - see changes without leaving your code editor
- **Snapshots** - save design states and compare variants side by side
- **Greenlight Board** - a unified inspiration and asset management dashboard
- **Browser extension** - capture screenshots, record animations, and send them directly to your board
- **Image generation** - built-in support for multiple AI image models
- **Background removal** - clean up assets without switching tools
- **Mockup generator** - device frames with animation support

A free version is available. The Pro version unlocks snapshots, the board, and advanced generation features.

[Get Greenlight Pro](https://shop.greenshiftwp.com/downloads/greenlight-pro/)

## The Takeaway

The difference between AI slop and a website that earns trust comes down to one thing: **having a system**. Igor workflow is not magic, it is a disciplined approach to giving AI models the context they need to produce something genuinely unique.

Design system first. Inspiration second. Sections third. Images fourth. Animations last. Combine everything.

When everyone else is one-clicking their way to purple gradients, a workflow like this is a real competitive advantage.

Still have questions? Send me an email and let us discuss.
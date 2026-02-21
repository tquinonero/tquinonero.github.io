---
title: "First Experience with Astro.build"
date: 2026-02-20
author: "Toni Q."
description: "Discover how Astro's blazing-fast performance can transform your web development workflow."
tags: ["astro", "web development", "productivity"]
slug: first-experience-with-astro-build
---

# I Just Tried Astro and It's Way Easier Than I Expected

I've been meaning to try [Astro](https://astro.build) for a while, and I finally sat down and did it. If you're a complete beginner and have never set up a web project before, this post is for you. I'll walk you through everything — from installing the tools to understanding what all those folders actually mean.

---

## Step 1: Install Node.js

Astro runs on **Node.js**, which is basically a runtime that lets you run JavaScript outside of a browser. You need it installed before anything else.

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS version** (it stands for Long Term Support — it's the stable one)
3. Run the installer and follow the prompts

To confirm it worked, open your terminal (Command Prompt on Windows, Terminal on Mac) and type:

```bash
node -v
```

If you see a version number like `v20.11.0`, you're good to go. Node also installs **npm** (Node Package Manager) automatically — you'll use that to create and manage your project.

---

## Step 2: Install Visual Studio Code

You'll need a code editor. I use and recommend **Visual Studio Code** (VS Code) — it's free, lightweight, and has great support for Astro.

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Download it for your operating system
3. Install it like any other app

---

## Step 3: Install the Official Astro Extension

Once VS Code is open, you'll want to install the **official Astro extension**. It gives you syntax highlighting, autocompletion, and error checking inside `.astro` files — makes everything much nicer to work with.

1. Open VS Code
2. Click the **Extensions** icon on the left sidebar (it looks like four squares)
3. Search for **"Astro"**
4. Install the one published by **astro.build**

That's it. You only have to do this once.

---

## Step 4: Create Your First Astro Project

Now the fun part. Open your terminal and run:

```bash
npm create astro@latest
```

Astro's setup wizard (they call it "Houston" 🚀) will ask you a few questions:

- **Where to create the project** — pick a folder name, like `my-astro-site`
- **How to start** — I chose the "minimal" template to keep things simple
- **Install dependencies?** — say Yes
- **Initialize a git repo?** — up to you, but I said Yes

Once it's done, navigate into your project folder and start the dev server:

```bash
cd my-astro-site
npm run dev
```

Open your browser and go to `http://localhost:4321` — your site is live locally!

---

## Step 5: Understanding the Project Structure

When you open the folder in VS Code, you'll see something like this:

```
my-astro-site/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Here's what each piece does:

**`src/pages/`** — This is where your actual pages live. Every `.astro` file here becomes a route on your site. For example, `src/pages/about.astro` becomes `/about`.

**`src/components/`** — Reusable chunks of UI go here. Think of things like a navbar, a card, or a footer — stuff you'll use in multiple places.

**`src/layouts/`** — Layouts are wrapper templates. If you want every page to share the same header and footer, you define that once in a layout and apply it everywhere.

**`public/`** — Static files like images, fonts, or favicons go here. Anything in this folder gets served as-is.

**`astro.config.mjs`** — The main config file for your project. You'll touch this when you add integrations (like Tailwind or React).

**`package.json`** — Tracks your project's dependencies and scripts. You don't need to edit this by hand very often.

---

## Bonus: AI Is Surprisingly Good at Helping With Astro

One thing I noticed while getting started — AI assistants (like Claude) handle Astro really well. I asked questions about component syntax, how layouts work, and even got help debugging a routing issue, and the answers were accurate and useful. Astro is popular enough that AI has a solid understanding of its patterns and conventions, so don't hesitate to lean on it as you learn. It's like having a knowledgeable friend on call.

---

## Final Thoughts

Honestly, the setup took me less than 15 minutes. Astro's CLI is friendly, the project structure is clean and logical, and between the VS Code extension and AI assistance, you're never really stuck for long. If you've been curious about building fast, content-focused websites, this is a really approachable place to start.

Give it a shot — you might be surprised how quickly it clicks.

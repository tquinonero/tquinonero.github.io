---
title: "Astro 6.0 Released"
date: 2026-03-10
author: "Toni Q"
description: "Astro 6.0 brings major improvements including a redesigned dev server, built-in Fonts API, Live Content Collections, and Content Security Policy support. Here's what you need to know."
tags: ["astro", "release", "web development"]
slug: astro-6-0-released
---

Astro 6.0 has officially landed, and it's packed with some significant improvements that address long-standing pain points in the framework. Let's dive into what's new.

## A Redesigned Dev Experience

The biggest change in Astro 6 is a complete overhaul of how the development server works. Previously, Astro's dev server was built with Node.js in mind, which caused problems for anyone deploying to non-Node environments like Cloudflare Workers, Bun, or Deno. You'd often encounter the frustrating "works in dev, breaks in prod" scenario where your local development didn't match production behavior.

Astro 6 leverages Vite's new Environment API to run your actual production runtime during development. For Cloudflare users specifically, this is a game-changer. The rebuilt `@astrojs/cloudflare` adapter now runs the `workerd` runtime locally, giving you full access to bindings like KV, D1, and R2 directly in your dev environment. No more hoping it works after deployment.

## Built-in Fonts API

Custom fonts have always been one of those things that are "simple" until you actually implement them right. Performance tradeoffs, privacy concerns, fallbacks, preload hints — it adds up.

Astro 6 introduces a built-in Fonts API that handles all of this for you. Configure your fonts in `astro.config.mjs`, and Astro automatically downloads and caches them for self-hosting, generates optimized fallback fonts, and adds preload links. You just drop in a `<Font />` component wherever you need it.

## Live Content Collections

Content Collections have been a core feature since Astro 2.0, but they always required a rebuild when content changed. Live Content Collections change that by fetching content at request time instead.

Using `defineLiveCollection()`, you can connect to external content sources — CMS systems, APIs, anywhere — and your content updates the moment it's published. No build step, no waiting. The same familiar APIs you've always used (`getCollection()`, `getEntry()`, schemas, loaders) work exactly the same way, so there's no new mental model to learn.

## Content Security Policy

CSP is now stable in Astro 6, making it one of the first JavaScript meta-frameworks to offer built-in CSP configuration for both static and dynamic pages. This is trickier than it sounds because Astro needs to hash every script and style on a page. For static pages, this happens at build time. For dynamic pages, content can change per request, requiring runtime hashing.

The API is refreshingly simple. Enable it with a single flag and Astro handles the rest, or dive into the full configuration if you need custom directives.

## Dependency Upgrades

Astro 6 brings major upgrades to its core dependencies:

- **Vite 7** powers the build pipeline across Astro and all `@astrojs` packages
- **Shiki 4** handles code highlighting in the `<Code />` component and Markdown code blocks
- **Zod 4** powers content schema validation (import from `astro/zod` going forward)

One important note: Astro 6 now requires **Node 22 or later**. Node 18 and 20 have reached or are approaching end-of-life, so this change enables better performance and lets Astro drop polyfills for older Node versions.

## Experimental Features

Astro 6 also ships with some exciting experimental features worth exploring:

- **Rust Compiler** — A new experimental Rust-based `.astro` compiler as a successor to the Go compiler. Early results show it can be faster and produce better diagnostics.
- **Queued Rendering** — A new rendering strategy with early benchmarks showing up to 2x faster rendering. Plans to make it the default in v7.
- **Route Caching** — A platform-agnostic way to cache server-rendered responses using web standard cache semantics. Integrates directly with Live Content Collections for automatic cache invalidation.

## Upgrading

Upgrading is straightforward:

```bash
npx @astrojs/upgrade
```

Or manually:

```bash
npm install astro@latest
```

If you're on an older version, be sure to check the upgrade guide for any breaking changes, especially if you have a custom Vite version pinned — you'll need to update to Vite 7 or later.

## Wrapping Up

Astro 6 represents a significant step forward, particularly for teams deploying to edge runtimes and those who need fresh content without rebuilds. The Fonts API and CSP additions show the framework is maturing beyond just being a static site generator into a full-featured web framework.

If you've been holding off on Astro because of runtime concerns or content freshness, now might be the time to take another look.

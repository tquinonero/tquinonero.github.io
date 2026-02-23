---
title: "New Tools on the Site: A Quick Rundown"
date: 2026-02-22
author: "Toni Q."
description: "I've added six free browser-based tools to the site — a regex tester, cron builder, robots.txt generator, frontmatter generator, color palette generator, and a WordPress quiz. Here's what each one does."
tags: ["tools", "web development", "productivity", "wordpress", "design"]
---

Over the past few weeks I've been shipping a handful of small tools that I kept wishing existed somewhere on the web — or existed but were wrapped in ads, paywalls, or required an account to use. Everything here runs entirely in the browser, no sign-up required, no data sent anywhere.

Here's a quick overview of what's available.

---

## Regex Tester

You paste a pattern, paste some test text, and matches are highlighted in real time as you type. There's a flags row (global, case-insensitive, multiline, dotAll) so you can toggle behaviour without touching the pattern.

It also shows you the named capture groups and a match table below the input, which is handy when you're working with a complex pattern and need to see exactly what each group captured.

No distractions, no ads, just a clean interface that gets out of your way.

→ [Try the Regex Tester](/regex-tester)

---

## Cron Expression Builder

Cron syntax is one of those things that's simple in theory and infuriating in practice. `0 */3 * * 1-5` — fine, sure, but what does that actually run and when?

The Cron Expression Builder lets you build a schedule using sliders and checkboxes, and translates the result into plain English in real time. It also works in reverse: paste an existing expression and it will parse it and fill in the UI.

There's a section specifically for WordPress developers that generates the WP-Cron PHP snippet you can drop straight into a plugin — `wp_schedule_event`, recurrence registration, the whole thing. There are also one-click presets for the most common schedules (every 5 minutes, hourly, twice daily, weekly on Monday, etc.).

→ [Try the Cron Expression Builder](/cron-expression-builder)

---

## Robots.txt Generator

Writing a `robots.txt` file by hand is tedious and easy to get wrong — especially now that there are dozens of AI crawlers with different user-agent strings to block if you don't want your content scraped for training data.

The generator has a full list of known AI and LLM crawlers (GPTBot, ClaudeBot, Amazonbot, and many more) that you can block individually or all at once. It also has sections for common search engine rules, path-level disallows, and a sitemap field.

There are quick-start presets for WordPress sites, static blogs, and an aggressive "block all AI" configuration. The output updates live on the right side as you make changes, and there's a copy button to grab the finished file.

→ [Try the Robots.txt Generator](/robots-txt-generator)

---

## Frontmatter Generator

If you use Astro content collections, you've typed out the same frontmatter block enough times that it stops feeling productive. This tool generates it for you.

Pick a collection type — blog, docs, portfolio, changelog, authors, or custom — fill in the fields, and the YAML block appears on the right. Required fields are marked, optional ones are pre-populated with sensible defaults, and the output is always valid against the schema.

It's a small thing but it speeds up the "spin up a new post" step noticeably.

→ [Try the Frontmatter Generator](/frontmatter-generator)

---

## Color Palette Generator

Pick a base color, choose a harmony mode, click generate. That's basically it.

The harmony modes available are complementary, analogous, triadic, monochromatic, and split-complementary — the classic color theory relationships. Each generated palette shows the hex codes alongside the swatches, and you can copy any individual value with a click.

There's also a randomize button if you want to start from a random base color, which is surprisingly useful when you're in an early design phase and want to explore without committing to a direction.

→ [Try the Color Palette Generator](/color-palette-generator)

---

## WordPress Admin Quiz

This one is a bit different from the others — it's a reference tool rather than a generator.

The WordPress Admin Quiz is a set of questions organized into sections covering the WordPress admin interface: menus, settings, capabilities, hooks, and more. The idea is similar to flashcards: read the question, think through your answer, then reveal the explanation. There's a progress bar so you can track how many you've worked through in a session.

It's useful if you're onboarding someone onto a WordPress project, brushing up before a client handoff, or just want to make sure you actually know why certain settings are where they are rather than just knowing where they are.

→ [Try the WordPress Admin Quiz](/wordpress-quiz)

---

All six tools are free, open to anyone, and work without JavaScript frameworks — just plain browser APIs. If any of them are broken or missing something obvious, the best way to reach me is through the contact section on the homepage.

More tools are in the backlog. Next up is probably a `wp_query` args builder and something around Open Graph tag generation.

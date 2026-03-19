---
title: "Domain & Hosting Basics for WordPress Sites"
date: 2026-03-19
author: "Toni Q"
description: "What even is a domain? How does hosting work? This practical guide covers the essentials you need to know before launching a WordPress site."
tags: ["wordpress", "hosting", "domains", "beginners"]
slug: domain-hosting-basics-wordpress
---
So you want to build a WordPress website. You've probably heard you need a "domain" and "hosting". But what does that actually mean, and how do you get them? This guide covers the essentials without the fluff. Let's get into it.

## What is a Domain?

Think of a domain as your website's street address. Just like your home has a physical address, your website has a domain name. It looks like this: `example.com`.

When someone types `example.com` into their browser, the browser uses a system called DNS (Domain Name System) to find the actual server where your website lives. That server then sends the website files back to the visitor's browser.

### Domain structure explained:

-   **TLD (Top-Level Domain)** — the ending: `.com`, `.org`, `.net`, `.co.uk`, etc.
-   **Second-level domain** — the name you choose: `example`
-   **Full domain** — `example.com`

### Common TLDs and what they mean:

-   `.com` — commercial (most popular, most expensive)
-   `.org` — organisation (originally for nonprofits, now open)
-   `.net` — network (originally for tech companies)
-   Country codes (`.uk`, `.de`, `.es`) — location-specific
-   Newer options (`.io`, `.dev`, `.app`) — popular in tech/startups

Globally `.com` is still the most recognizable. If your chosen `.com` is taken, a `.org` or `.io` can work. Just avoid anything obscure that people will struggle to remember or spell.

---

## What is Hosting?

If the domain is your address, a server is the physical building where your website lives. Hosting is a service that stores your website files on a server and makes them accessible on the internet.

When you sign up for hosting, you're renting space on a server — either a shared server (your site shares resources with other sites) or a dedicated server (your site has its own resources).

### Types of hosting you'll encounter:

**Shared Hosting** — Multiple websites share the same server. Cheapest option, good for beginners. Think of it as an apartment building.

**VPS (Virtual Private Server)** — Your site still shares a server, but with dedicated resources. Better performance, costs more. Think of it as a condo.

**Dedicated Server** — You rent an entire server for yourself. Most expensive, full control. Think of it as a house.

**Managed WordPress Hosting** — Hosting specifically optimised for WordPress. The hosting provider handles updates, security, and performance for you. Worth the premium for serious sites. Examples: Siteground, WP Engine, Kinsta, Flywheel.

**Cloud Hosting** — Your site runs on a network of servers (the "cloud"). Scalable and reliable. Examples: AWS, Google Cloud, DigitalOcean.

---

## How to Buy a Domain

You can buy a domain from a **registrar** — a company authorised to sell domain names.

### Popular registrars:

-   **Namecheap** — Cheap, good interface, includes WHOIS privacy
-   **Cloudflare** — Cheap, simple, bundles well with their CDN
-   **Hover** — Clean interface, good support

### Tips for buying domains:

1.  **Use a reputable registrar** — Avoid obscure resellers
2.  **Enable auto-renewal** — Nothing worse than your domain expiring and someone else grabbing it
3.  **Buy WHOIS privacy** — Keeps your personal details out of the public database (most registrars include it free)
4.  **Don't buy from your host** — It's often good practice to keep domain and hosting separate
5.  **Get the common TLDs** — If you buy `example.com`, consider grabbing `.org` and `.net` too to prevent copycats

---

## How to Buy Hosting

### For a basic WordPress site, you have a few solid options:

**Budget shared hosting (~5€–10€/month):**
-   Hostinger
-   A2 Hosting
-   SiteGround (shared plans)
-   Bluehost
-   HostGator

**Managed WordPress (~15€–30€/month):**
-   WP Engine
-   Kinsta
-   Flywheel
-   SiteGround (managed)

**Self-managed cloud/VPS (~15€–50€/month):**
-   DigitalOcean
-   Linode
-   Hetzner
-   AWS / Google Cloud

### What to look for in hosting:

-   **WordPress support** — Do they actually know WordPress?
-   **Uptime guarantee** — Look for 99.9% or higher
-   **Backup frequency** — Daily automated backups at minimum
-   **SSL certificate** — Should be free (Let's Encrypt)
-   **PHP version support** — Must support PHP 8.4+
-   **Storage and bandwidth** — Unlimited is often marketing speak; check the fair use policy
-   **Location** — Closer to your visitors = faster load times

---

## Connecting Your Domain to Your Hosting

This is the part where most beginners get stuck. Here's how it works:

### Step 1: Point your domain to your host

Your host will give you **nameservers** — usually two or more addresses that look like this:

```
ns1.hostingcompany.com
ns2.hostingcompany.com
```

Go to your **domain registrar**, find the DNS settings, and replace the default nameservers with the ones from your host.

### Step 2: Wait for propagation

DNS changes can take **a few minutes to 48 hours** to propagate worldwide. Most of the time it's fast, but don't panic if your site doesn't appear immediately.

### Step 3: Install WordPress

Most hosts offer **one-click WordPress installation** — either through their control panel (cPanel) or a managed install. If your host doesn't, you can install it manually via FTP.

---

## Do You Need Both?

**Can you get hosting without buying a domain?**
Yes. Most hosts let you use a temporary domain (like `your-site.hostingcompany.com`) or will provide a free subdomain.

**Can you buy a domain without hosting?**
Yes. You can buy a domain and "park" it until you're ready to connect it to hosting.

**Should you buy them together?**
It's convenient but not always cheaper. Buying separately gives you more flexibility to switch hosts later.

---

## Common Mistakes to Avoid

1.  **Choosing the cheapest option** — Cheap hosting often means slow speeds, poor support, and downtime
2.  **Not enabling auto-renewal** — Let your domain expire and you lose it
3.  **Ignoring backups** — Your host's backups aren't always reliable; keep your own
4.  **Not reading the renewal price** — Introductory prices are cheap; renewals can double
5.  **Using the same password everywhere** — Use a password manager
6.  **Skipping SSL** — Get free HTTPS via Let's Encrypt (most hosts include it)

---

## The Bottom Line

For a typical WordPress site:

-   **Budget:** –10€/month for shared hosting + 10 to 15€/year for the domain
-   **Better:** ~20 to 30€ per month for managed hosting for WordPress
-   **Minimum:** You'll need around 40€ to get started the first year

If you're just starting out, go with managed WordPress hosting. The extra cost is worth it in my opinion and as your site grows you can always move to a self-managed hosting or just continue letting your hostingp provider take care of the server configuration.

Still have questions? Send me an email and let's discuss.

---
title: "How to submit your WordPress site to Google Search Console"
date: 2026-03-26
author: "Toni Q"
description: "A step-by-step guide to adding your WordPress site to Google Search Console. Learn how to verify ownership and submit your sitemap so Google can index your content."
tags: ["wordpress", "seo", "google-search-console", "beginners"]
slug: how-to-submit-wordpress-site-to-google-search-console
---

When you publish a new website, you want people to find it. Google Search Console is the free tool that tells Google about your site so your pages can appear in search results. Without it, you are relying on Google finding your site by chance.

This guide walks you through the entire process from creating your account to submitting your sitemap.

## What is Google Search Console?

Google Search Console is a free service from Google. It does three important things.

First, it lets you tell Google about your website. Second, it shows you how your site performs in Google search. Third, it alerts you when something is wrong, like pages that will not load or content Google cannot access.

Think of it as the bridge between your website and Google. The more effort you put into keeping that bridge in good shape, the more likely Google is to show your pages to people searching for topics like yours.

## Create your Google Search Console account

Open your browser and go to:

```
search.google.com/search-console
```

Sign in with your Google account. If you do not have one, you will need to create it first. A Google account is free and takes a few minutes to set up.

Once you are signed in, you will see a page asking you to add a property. A property is simply your website in Search Console terms.

You need to choose between two property types.

**URL prefix property** is the simpler option. You enter the exact URL of your site, including the https:// part. This is the right choice for most people.

**Domain property** is broader. It covers all variations of your domain, including www and non-www versions, and both http and https. It requires adding a DNS record to your domain settings, which is more technical.

For a new WordPress site, the URL prefix property is usually the best choice.

Enter your website URL in the box and click Continue.

## Verify your ownership

Google needs to confirm that you actually own the website you are claiming. This is an important security step. Without verification, anyone could claim someone else's website and cause problems.

For WordPress sites, the HTML meta tag method is the most reliable and straightforward.

### Method A: HTML meta tag

After choosing URL prefix property, Search Console will show you a meta tag that looks something like this:

```html
<meta name="google-site-verification" content="your_unique_code_here" />
```

You need to add this tag to your website. There are two safe ways to do this in WordPress.

**Option 1: Use your theme built-in settings**

Many modern themes, including block themes, have a dedicated section for adding custom code to your site header. This is the safest method because you do not touch any core files.

In your WordPress dashboard, look for this section depending on your theme:

- Go to Appearance, Customize and look for something like "Additional Code" or "Head Code"
- Or go to Appearance, Editor and check the Styles tab or patterns section
- Some themes have a dedicated settings page under Appearance

Greenshift, for example, includes a section where you can paste verification codes directly without editing any files. Check your theme documentation if you are not sure where this setting lives.

Paste your Google verification tag in the appropriate field and save. Then go back to Search Console and click Verify. If everything is correct, you will see a success message.

**Option 2: Use an SEO plugin**

If your theme does not have a built-in code injection section, you can use an SEO plugin instead. Most SEO plugins have a dedicated field for verification tags. Look in the plugin settings for something like "Site Verification," "Google Search Console," or "Webmaster Tools." Paste your verification tag there and save. Then verify in Search Console.

This method is also safe and does not require touching any theme files.

### Method B: HTML file upload

If you prefer not to add code to your site, you can upload a verification file instead.

In Search Console, choose the HTML file upload method. You will be asked to download a small HTML file. The file name looks something like google0123456789abcdef.html.

Upload this file to your website root. The root is the main folder where your site lives. You can upload it using FTP or through your hosting provider file manager. The file needs to be accessible at yourdomain.com/google0123456789abcdef.html.

Once uploaded, go back to Search Console and click Verify.

### DNS verification

If you chose a domain property, you will need to add a DNS record. This involves going to your domain registrar (the company where you bought your domain name) and adding a TXT record.

The process varies depending on who your registrar is. Most registrars have instructions in their help sections. Search Console will give you the exact record to add.

DNS changes can take up to 48 hours to propagate. Verification might not work immediately even after you save the record. Give it a day and try again if it fails at first.

## Submit your sitemap

Once your site is verified, the next step is to submit your sitemap. A sitemap is a file that lists all the important pages on your website. It helps Google discover your content faster, especially pages that are buried deep or not well linked from the homepage.

WordPress creates a sitemap automatically. You do not need to install anything. The sitemap is located at:

```
yoursite.com/wp-sitemap.xml
```

Replace yoursite.com with your actual domain name. Visit that URL in your browser to confirm it exists.

If you have an SEO plugin installed, it may generate a different sitemap URL. Many SEO plugins create enhanced sitemaps with more detail. Either option works fine.

To submit your sitemap in Search Console, look for the Sitemaps section in the left menu. Enter the sitemap URL in the Add a sitemap box and click Submit.

That's it! You do not need to submit every page individually. Google will follow the links on your site and discover your pages through the sitemap.

## What happens after you submit

Do not expect to see data immediately. It typically takes a few days (or even weeks) for Google to crawl your site and show information in Search Console. Don't panic, this is normal.

When data does appear, you will see it in the Overview section. The most useful reports for beginners are:

**Performance** shows how your pages appear in search results. You can see which queries bring visitors to your site, how many clicks you get, and your average position in search results.

**Coverage** shows which pages Google has indexed and whether there are any errors. If a page is missing from Google results, it often shows up here with an explanation.

**URL Inspection** lets you check any specific URL on your site. Paste a URL from your site and you can see whether Google has indexed it and when it was last crawled.

Check these reports regularly. If you see errors, click on them to learn what needs fixing.

## Troubleshooting common issues

**Verification fails.** The most common reason is that the meta tag was not placed correctly or was changed after you saved it. Go back to your header.php file and confirm the tag is still there and matches exactly what Search Console gave you. If you use a caching plugin, clear the cache after adding the tag.

**Sitemap shows errors.** First, make sure your site is set to be public in WordPress. Go to Settings, Reading in your dashboard and confirm you have not accidentally checked "Discourage search engines from indexing this site." If that is unchecked and your sitemap still errors, try submitting the default WordPress sitemap at wp-sitemap.xml instead.

**Your site is not appearing in search results yet.** This is normal for new sites. Google processes new websites in its own time. Keep publishing good content and check back in Search Console after a week or two. If your site has been around for a while and suddenly disappeared, check the Coverage report for sudden drops or manual actions.

**You changed your theme and lost the verification tag.**  If you lose your verification after a theme update, simply add the meta tag again following the same steps. For a more permanent solution, use an SEO plugin to hold the verification tag.

## Wrapping up

Getting your WordPress site into Google Search Console is one of the first things you should do after launching. It takes about fifteen minutes, and the insights you gain are worth far more than the time invested.

Verification does not need to be intimidating. The HTML meta tag method works on every WordPress site, and once it's in place, you are connected to Google for as long as you keep the tag.

Submit your sitemap, publish good content consistently, and check Search Console every week or so. Over time you will learn what your audience searches for and how Google sees your site. That knowledge helps you create content that actually reaches people.

Still have questions? Send me an email and let's chat about it.

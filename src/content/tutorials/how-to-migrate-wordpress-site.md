---
title: "How to migrate your WordPress site to a new host"
date: 2026-04-17
author: "Toni Q"
description: "A step-by-step guide to moving your WordPress site to a new hosting provider without losing data or downtime."
tags: ["wordpress", "migration", "hosting", "beginners"]
slug: how-to-migrate-wordpress-site
---

Moving your WordPress site to a new host can feel overwhelming. You might worry about losing content, breaking links, or having hours of downtime. I have made many mistakes throughout my career working with WordPress sites. Simple mistakes I wouldn't make now, and you won't make because I'm going to explain you bit by bit how to migrate WordPress sites correctly.

## What is a WordPress migration?

A WordPress migration is the process of moving your website from one hosting provider to another. This includes:

- All your posts and pages
- Media files (images, videos, documents)
- Plugins and themes
- Your database content
- Site settings
- Custom code, cron jobs, and server configurations

There are different ways to do this. Some are manual, and some use plugins. I'll show you both approaches.

## Before you begin: Preparation

Before starting the migration, gather some information:

**From your current host:**

- FTP or SSH credentials
- Database name, username, and password
- Control panel login

**From your new host:**

- New FTP or SSH credentials
- New database details (or create these in your control panel)
- Nameserver details (if you're changing domain DNS)

**Tools you'll need:**

- A backup plugin (like UpdraftPlus, All-in-One WP Migration, or Duplicator)
- FTP client (FileZilla is free)
- Access to your domain registrar (where you bought your domain)

### Are you running WordPress Multisite?

Before anything else, check whether your site is a standard WordPress install or a multisite network. Go to **Tools > Network Setup** in your WordPress admin — if this option exists, you're running multisite. Multisite migrations involve extra steps around subdomain/subdirectory configuration and are significantly more complex. If that's you, consider hiring a professional or following a dedicated multisite migration guide, as this tutorial covers single-site migrations only.

### Check your PHP version compatibility

Before migrating, verify what PHP version your current site uses and what versions your new host supports:

1. In your current WordPress admin, go to **Tools > Site Health > Info**
2. Look for the PHP version
3. Check your new host's supported PHP versions in their documentation

If your new host uses a significantly different PHP version, some plugins or themes may break. Update all plugins before migration, and use a staging environment to test (covered below).

### Set up a staging environment first

Before touching anything on your live site, set up a staging environment on your new host. This is the single best thing you can do to avoid downtime.

1. Create a subdomain like `staging.yourdomain.com` on your new host
2. Install a fresh WordPress there
3. Add these lines to the staging site's `wp-config.php` to lock it to the staging URL:
   ```php
   define('WP_HOME', 'https://staging.yourdomain.com');
   define('WP_SITEURL', 'https://staging.yourdomain.com');
   ```
4. Complete your migration to staging first, test everything (see the checklist below), and only then migrate to the live environment

### Set up SSL/HTTPS first

Set up SSL on your new host *before* you migrate or change your DNS. This ensures HTTPS is working from the moment visitors hit the new server.

1. Most hosts provide free SSL via Let's Encrypt — find it in your hosting control panel and enable it
2. Once enabled, update your site URL to use HTTPS:
   - Go to **Settings > General** in WordPress
   - Change WordPress Address and Site Address from `http://` to `https://`
3. Use WP-CLI or the "Better Search Replace" plugin to update all internal links from `http://` to `https://` in your database

---

## Method 1: Using a migration plugin

Migration plugins handle most of the heavy lifting. This is the easiest method for beginners.

### Step 1: Install a backup plugin

Install one of these popular plugins on your current site:

- **UpdraftPlus** (free and paid versions)
- **All-in-One WP Migration** (free, with paid extensions for larger sites)
- **Duplicator** (free and paid versions)

For this guide, I'll use UpdraftPlus since it has a free tier that handles most migrations.

### Step 2: Create a full backup

After installing UpdraftPlus:

1. Go to **UpdraftPlus**. It's on the sidebar.
2. In the first tab of UpdraftPlus settings, click **Backup Now**
3. Select all components (database and files)
4. Click **Backup Now** again

Wait for the backup to complete. This may take several minutes depending on your site size.

### Step 3: Download the backup files

Once complete, you'll see download links for:

- A zipped file containing your database
- A zipped file containing your files

Download all of these to your computer and keep them in one organized folder.

### Step 4: Set up your new host

Before restoring, prepare your new server:

1. Install a fresh WordPress site on your new host
2. Install the same backup plugin (UpdraftPlus)
3. Do NOT configure any settings yet

### Step 5: Restore on the new host

1. Go to **UpdraftPlus > Backup / Restore** on the new site
2. Upload your backup files to the new site. For this, scroll down and under Existing backups you will see a link **Upload backup files**. Click it.
3. Click **Restore** again
4. Select all components and confirm

The plugin will restore your database, files, plugins, themes, and settings.

### Step 6: Test on staging before going live

Restore your backup to your staging subdomain (set up above) before touching your live DNS. Run through the full post-migration checklist below. Only proceed to Step 7 once everything passes.

### Step 7: Test your new site using the hosts file

If you want to test the exact live domain on the new server before changing DNS publicly, you can edit your computer's local hosts file to point the domain to the new server — only on your machine.

On **Mac**: edit `/etc/hosts`  
On **Windows**: edit `C:\Windows\System32\drivers\etc\hosts`

Add a line like:

```
123.456.789.0 yourdomain.com
```

Replace `123.456.789.0` with your new server's IP address (find this in your new host's control panel). After saving, flush your DNS cache:

- **Mac:** `sudo dscacheutil -flushcache; sudo killall -HUP mDnsResponder`
- **Windows:** `ipconfig /flushdns`

Note that some browsers (especially Chrome) cache DNS independently. If the change isn't reflecting, try a different browser or an incognito window. Remove the hosts file entry once you're done testing.

---

## Method 2: Manual migration

For more control or larger sites, you can migrate manually.

### Step 1: Export your database

1. Log in to phpMyAdmin (usually in your hosting control panel)
2. Select your WordPress database
3. Click **Export** at the top
4. Choose **Quick** export method
5. Make sure format is **SQL**
6. Click **Go** and save the file

### Step 2: Download your files

1. Connect to your server via FTP or SFTP (prefer SFTP when available — it's encrypted)
2. Navigate to your WordPress directory (usually `public_html`)
3. Download all files to your computer

This may take a while for large sites.

### Step 3: Create your new database

On your new server:

1. Log in to your hosting control panel
2. Create a new MySQL database
3. Create a new database user
4. Assign the user to the database with all privileges

Note the database name, username, and password — you'll need them shortly.

**Note on database prefix:** If your new host uses a different database prefix (for example, `wp_` vs a custom prefix like `myprefix_`), you'll need to update your `wp-config.php` to match the new prefix. Update the `$table_prefix` variable in the config file to reflect whatever prefix your new database uses.

### Step 4: Import your database

1. Log in to phpMyAdmin on your new host
2. Select your new database
3. Click **Import**
4. Choose your exported SQL file
5. Click **Go**

If your database is large (over 50MB), phpMyAdmin may reject it. See the "Database too large to import" section under Common Problems below.

### Step 5: Upload your files

1. Connect to your new server via SFTP
2. Upload all your WordPress files to `public_html`

### Step 6: Update database connections

Your new server has different database credentials. Update these in your `wp-config.php` file:

```php
define( 'DB_NAME', 'your_new_database_name' );
define( 'DB_USER', 'your_new_database_user' );
define( 'DB_PASSWORD', 'your_new_password' );
define( 'DB_HOST', 'localhost' );
```

### Step 7: Update site URLs (if needed)

If your domain is changing, you'll need to update URLs stored in the database. The most reliable way to do this is with WP-CLI (a command-line tool available on most quality hosts):

```bash
wp search-replace 'https://olddomain.com' 'https://newdomain.com' --all-tables
```

This safely handles serialized data that would break if you edited the database directly. If WP-CLI isn't available, you can use the "Better Search Replace" plugin as an alternative, or edit the `wp_options` table in phpMyAdmin manually to update the `siteurl` and `home` rows.

If you're keeping the same domain but changing hosts, skip this step.

---

## Updating your domain DNS

Once everything is tested and working on the new server:

1. Log in to your domain registrar (where you bought your domain)
2. Find DNS settings or nameservers

**Important:** Before changing nameservers, write down your current DNS records — especially MX records (which handle email). If you change nameservers without preserving your MX records, your email will stop working. Your new host's nameservers may not carry over your existing mail settings automatically.

3. Update nameservers to point to your new hosting provider, and manually recreate any MX or other DNS records that need to carry over
4. Save changes

DNS changes typically propagate within a few hours, though in rare cases it can take up to 24 hours. During propagation, some visitors may briefly see the old site.

---

## Common problems and solutions

### Problem: Images not showing

**Cause:** Paths in your database still point to the old server or domain.

**Solution:** Use WP-CLI (`wp search-replace`) or the "Better Search Replace" plugin to update old URLs in your database.

### Problem: Redirect loop or 404 errors

**Cause:** The `.htaccess` file may have incorrect settings.

**Solution:** Regenerate your `.htaccess` by going to **Settings > Permalinks** and clicking Save.

### Problem: Database connection error

**Cause:** Wrong credentials in `wp-config.php`.

**Solution:** Double-check `DB_NAME`, `DB_USER`, `DB_PASSWORD`, and `DB_HOST` in your `wp-config.php` file.

### Problem: Site loads but looks broken

**Cause:** Missing files or incorrect paths.

**Solution:** Re-upload all files, making sure nothing was skipped during transfer.

### Problem: Plugin errors or white screen

**Cause:** PHP version incompatibility between old and new server.

**Solution:**
1. Enable `WP_DEBUG` in `wp-config.php` to see specific errors:
   ```php
   define( 'WP_DEBUG', true );
   define( 'WP_DEBUG_LOG', true );
   ```
2. Check your new host's PHP version matches your old host
3. Update outdated plugins before migration
4. Contact host support if the PHP version can't be changed

### Problem: Database too large to import

**Cause:** phpMyAdmin has an upload size limit (often 2MB–50MB).

**Solutions:**
- Use the command line: `mysql -u username -p database_name < file.sql`
- Split large SQL files using a tool like "BigDump"
- Ask your host to temporarily increase upload limits
- Use the plugin method instead (UpdraftPlus handles large files more gracefully)

### Problem: Email stopped working after migration

**Cause:** MX records were not preserved when nameservers were changed.

**Solution:** Log in to your domain registrar and add back your MX records. Check with your email provider (Google Workspace, Zoho, your old host, etc.) for the correct values. Email can take a few hours to restore once records are corrected.

### Problem: Site appears cached or stale after migration

**Cause:** Your new host, a CDN (like Cloudflare), or WordPress caching plugins may be serving old content.

**Solution:**
- Clear the cache in your hosting control panel
- If using Cloudflare, purge the cache from your Cloudflare dashboard
- Deactivate and reactivate caching plugins like WP Super Cache or W3 Total Cache after migration

---

## Post-migration checklist

Run through this before changing DNS and again after:

- [ ] All pages and posts load correctly
- [ ] Admin login works
- [ ] Contact forms submit and send email
- [ ] Images display properly
- [ ] Navigation and menu links work
- [ ] Site loads over HTTPS without certificate errors
- [ ] Sitemap is accessible (usually `yourdomain.com/sitemap.xml`)
- [ ] Google Search Console shows no crawl errors (check a few days after DNS change)
- [ ] Analytics is still firing (check your GA4 or equivalent dashboard)
- [ ] Any redirects (301s) are working as expected

---

## Keeping your site secure during migration

- Use SFTP (not plain FTP) whenever available
- Keep your backup files in a secure location (not a public folder)
- Delete temporary staging files and test accounts after migration is complete
- Update all passwords after moving — database, FTP, and WordPress admin

---

## Your rollback plan

Things can go wrong. Before you change your DNS, make sure you have a rollback path:

1. **Keep your old hosting account active** for at least 2–4 weeks after migration. Don't cancel it until you're confident the new site is stable.
2. **Keep copies of all backup files** downloaded during migration.
3. If the new site is broken after a DNS change: point your nameservers back to the old host while you diagnose the issue. Your old host should still have the site intact.
4. If you used a plugin migration, you can restore the backup to the old host in the same way you restored it to the new one.

---

## When to hire help

Consider professional help if:

- Your site is very large (multiple gigabytes of data)
- You have a WordPress multisite network
- The migration involves changing domains
- Your site generates critical revenue and you can't afford downtime

Professional developers can often complete the job faster and with less risk.

---

## Summary

Moving WordPress to a new host doesn't have to be stressful. Whether you use a plugin or do it manually, the key steps are:

1. Check for multisite and PHP version compatibility
2. Set up SSL on the new host before going live
3. Back up everything
4. Migrate to a staging environment and test thoroughly
5. Transfer files and database to the live environment
6. Preserve your MX records before changing DNS
7. Update DNS and monitor for a few days
8. Keep your old host active until you're sure everything is stable

Take your time with each step, test often, and keep backups of both sites until you're certain the migration is complete.
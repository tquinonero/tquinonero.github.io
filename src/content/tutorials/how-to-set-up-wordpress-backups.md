---
title: "How to set up WordPress backups (free solutions)"
date: 2026-03-26
author: "Toni Q"
description: "A practical guide to backing up your WordPress website. Learn about the 3-2-1 rule, how to set up free automated backups with UpdraftPlus, and what to do when disaster strikes."
tags: ["wordpress", "backups", "security", "maintenance"]
slug: how-to-set-up-wordpress-backups
---

Your WordPress site holds your content, your work, and potentially your business. What happens if all of it disappears overnight? A hacker could corrupt your files. A failed update could break your site. Your hosting company could lose your data. These things happen more often than people expect.

A backup is a copy of everything that matters, stored somewhere safe. Without one, you risk losing months or years of work in an instant. This guide shows you how to set up reliable free backups for your WordPress site.

## The 3-2-1 backup rule

Before diving into the technical steps, it helps to understand what a solid backup strategy looks like. The 3-2-1 rule is a widely accepted principle that works regardless of what platform or tools you use.

**You keep three copies of your data.** Your original site plus two backups.

**You store those backups on two different types of media.** For example, one copy on your web server and one copy in cloud storage.

**One copy is stored offsite.** Meaning it is kept somewhere physically separate from your server. If your server room floods, burns down, or gets wiped by a ransomware attack, your offsite backup survives.

Following this rule means a single disaster cannot destroy everything at once.

## Your hosting provider as a first line of defense

Many WordPress hosting companies advertise built-in backups. SiteGround, Bluehost, Kinsta, and others offer daily or weekly backups as part of their hosting packages. These are worth using, but they should not be your only backup strategy.

Hosting backups are convenient because they require no setup. However, they often come with limitations. Restoring from a host backup can be slow. Some hosts only keep backups for thirty days. In a worst-case scenario, if your hosting company itself has technical problems, you may not be able to access those backups when you need them.

Think of hosting backups as a helpful safety net, not your primary backup solution. The approach in this guide gives you more control and true offsite protection.

## Recommended free solution: UpdraftPlus

UpdraftPlus is the most popular free backup plugin for WordPress. It has over three million active installations and has been around since 2012. The free version is fully functional. You can schedule automatic backups, store them in cloud services like Google Drive and Dropbox, and restore your site in a few clicks. There is no artificial limit on backup file size in the free version.

Another popular option is All-in-One WP Migration. However, the free version limits the size of files you can export and requires a paid extension to restore to most real-world sites. UpdraftPlus does not have this limitation, which is why it is the recommended choice here.

## Installing UpdraftPlus

Log in to your WordPress dashboard. Go to Plugins on the left menu and click Add New. In the search box on the top right, type "UpdraftPlus." You should see the plugin appear in the results. Click Install Now, then Activate.

Once activated, you will see a new option in your left menu called UpdraftPlus Backups. Click it to open the plugin.

## Running your first manual backup

On the UpdraftPlus main page, click the blue "Backup Now" button. A dialog will appear asking what to include in the backup.

You will see checkboxes for different components:

- **Database** — this is your content, comments, user accounts, and site settings. Essential and should always be included.
- **Plugins** — your installed plugins. Recommended so you can restore your plugin setup quickly.
- **Themes** — your active theme and any themes you have installed. Recommended.
- **Uploads** — your images and media files. Important if your site has a lot of content. Can make the backup file large.
- **Other files** — any additional files in your wp-content folder that do not fit the above categories. Most sites can leave this unchecked.

For a typical site, check Database, Plugins, Themes, and Uploads. Click Backup Now to start the process. It may take a few minutes depending on the size of your site. Wait for the confirmation message before closing the page.

## Connecting remote storage

Your first backup lives on your server, which is only one copy. To follow the 3-2-1 rule properly, you need to send a copy to cloud storage.

UpdraftPlus supports several cloud services: Google Drive, Dropbox, Amazon S3, OneDrive, and others. For most beginners, Google Drive or Dropbox is the simplest choice because they are free and familiar.

To set up remote storage, click the Settings tab in UpdraftPlus. You will see a list of storage options. Click the one you want to use.

For Google Drive, click the link that says "Log into your Google account and get an authorization code." A new window will open asking you to authorize UpdraftPlus to access your Google Drive. Click Allow or Permit. You will receive a code to paste back into UpdraftPlus. Copy it, paste it, and click Save.

For Dropbox, click the link to connect and authorize through your Dropbox account in the same way.

Once connected, click Save Changes. You now have a place for your backups to go automatically.

UpdraftPlus also supports Amazon S3, FTP, SFTP, and email. These are useful if you prefer more control over where your files live, but Google Drive and Dropbox cover the needs of most people.

## Setting up scheduled backups

Automatic backups are better than manual ones because it is easy to forget to back up manually. UpdraftPlus lets you schedule backups to run on autopilot.

Go to the Settings tab in UpdraftPlus. Scroll to the schedule section.

For **Files** (themes, plugins, uploads), choose how often to back up. Weekly is sufficient for most sites. Monthly is fine if your content does not change often.

For **Database**, choose daily if you publish new content frequently, or weekly at minimum if your site is relatively static.

Below the schedule, set how many backup copies to keep. If you run weekly file backups and keep 2 copies, you always have the last two weeks covered. For the database, keeping 3 or 4 copies means you can go back several weeks if needed. More copies use more storage space in your cloud account.

Click Save Changes when done.

From now on, UpdraftPlus will automatically create backups on your chosen schedule and send them to your cloud storage. You do not need to do anything.

## Restoring from a backup

When something goes wrong, having a backup only helps if you know how to use it. The restore process in UpdraftPlus is straightforward.

Go to the Backup / Restore tab in UpdraftPlus. You will see a list of your existing backups, organized by date. Find the backup you want to restore. It is usually best to use the most recent one unless you know a specific problem started at a certain date.

Click Restore next to the backup you want to use. UpdraftPlus will ask which components to restore. Check the boxes for everything that is affected. If your whole site is broken, check all boxes: Database, Plugins, Themes, Uploads, and Other Files.

Click Restore. UpdraftPlus will download your backup files and put everything back in its place. This may take a few minutes. Wait for the process to complete before navigating away from the page.

## Testing your backups

A backup you never verify is a backup you cannot fully trust. Every few months, check that your backups are actually working.

Go to your cloud storage account (Google Drive or Dropbox) and look for a folder called UpdraftPlus. You should see backup archives there, organized by date. If your scheduled backups are running, you will see new files appearing according to your schedule.

Try downloading one of the backup files to confirm you can actually access it. If the file downloads successfully, your backup system is working.

## Common mistakes beginners make

**Backing up only to the server.** If your server fails or gets hacked, you lose the original and the backup at the same time. Always keep at least one copy offsite in cloud storage.

**Manual backups only.** It takes discipline to remember to back up regularly. Scheduling automatic backups removes the guesswork and the risk of forgetting.

**Keeping too few backup copies.** If you only keep one backup and it happens to be from a date when your site was already compromised, you restore a bad copy. Keep at least two or three backups so you have options.

**Never testing the restore process.** Download a backup and open it on your computer to confirm it contains what you expect. If you wait until disaster strikes to learn how to restore, you add stress to an already stressful situation.

## If disaster happens

When your site goes down, the restore process depends on how bad the damage is.

If your site is completely broken and you cannot access WordPress at all, you need to restore your hosting account first if your host provides that option. Once your site is accessible again, install UpdraftPlus, connect the same cloud storage, and restore from your latest good backup.

If your site is accessible but has problems, you can often restore directly from within WordPress without reinstalling anything. Go to UpdraftPlus, find your backup, and restore the components that are affected.

Keep calm. If your backups are working and you have tested the process, you can recover from almost anything.

## Wrapping up

Backups are not optional. They are the difference between a minor inconvenience and a catastrophe. Setting up UpdraftPlus takes about thirty minutes. After that, your backups run automatically and you never have to think about them again.

Start with a manual backup today. Connect cloud storage. Set your schedule. Check in a month to confirm the automated backups are appearing where they should. Once it is set up, it protects your site forever.

Still have questions? Send me an email and let's discuss.

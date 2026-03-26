---
title: "How to use DDEV for local WordPress development?"
date: 2026-03-26
author: "Toni Q"
description: "DDEV is an open source local development environment that makes setting up WordPress (and other) projects a breeze. This guide covers installation, everyday usage, and how to remove it when you no longer need it."
tags: ["wordpress", "ddev", "local-development", "development-tools"]
slug: local-development-with-ddev
---

I use DDEV every single day for my WordPress development work. After years of wrestling with MAMP, VVV, Local by Flywheel, and custom Docker setups, DDEV is the tool that finally made local development feel effortless. This is not a sponsored or affiliate post. I just genuinely love the tool and want to share how to get started with it.

DDEV is an open source local development environment that helps you spin up web projects in minutes. It uses Docker under the hood but abstracts away all the complexity. While this guide focuses on WordPress, DDEV supports PHP projects of all kinds, Node.js, and much more. Head over to [ddev.com](https://ddev.com/) or the [official docs](https://docs.ddev.com/en/stable/) if you want to dive deeper.

## What Problem Does DDEV Solve?

When you build websites, you need a local server running PHP and MySQL (or MariaDB). Setting this up manually means configuring Apache or Nginx, managing PHP versions, installing a database, and dealing with command line magic. It works, but it takes time and breaks in unexpected ways.

DDEV handles all of this for you. You get a fully configured environment with a single command. Different projects can use different PHP versions, different database types, and different web server configurations, all running at the same time without conflicts.

## System Requirements

Before installing DDEV, make sure your system has the basics:

-   **RAM:** 8GB minimum
-   **Storage:** 256GB minimum
-   **Docker:** DDEV requires Docker (or OrbStack on macOS, Colima, Rancher Desktop, Lima)

DDEV works on macOS, Windows (WSL2), and Linux. GitHub Codespaces is also supported if you prefer a browser-based setup.

## Installing DDEV

### Step 1: Install Docker

Like I mentioned DDEV runs on top of Docker, so you need Docker installed first. The installation process depends on your operating system.

**macOS:**

For macOS, you have several options. [OrbStack](https://orbstack.dev/) , [Docker Desktop](https://www.docker.com/products/docker-desktop/) , [Lima](https://github.com/lima-vm/lima) and [Colima](https://github.com/abiosoft/colima) or [Rancher Desktop](https://rancherdesktop.io/) . Pick your poison.

**Windows:**

On Windows, you need WSL2 with Docker inside it, or Docker Desktop with the WSL2 backend. Ubuntu is the recommended Linux distribution for WSL2, though others work too.

**Linux:**

Install Docker CE using the official Docker instructions for your distribution. Most package managers have Docker available, but the official installation guide ensures you get the latest version with proper configuration. I use Ubuntu and the installation was really quick using Docker's official installation guide.

### Step 2: Install DDEV

**macOS (Homebrew):**

```bash
brew install ddev
```

**Windows (Chocolatey or Scoop):**

```bash
choco install ddev
```

Or with Scoop:

```bash
scoop install ddev
```

**Linux (Homebrew or manual):**

```bash
brew install ddev
```

Or download the latest release from the [DDEV GitHub releases page](https://github.com/ddev/ddev/releases) and install it manually.

**Verify the installation:**

```bash
ddev version
```

You should see output showing the DDEV version and build information. If you get a command not found error, restart your terminal or source your shell configuration.

## Creating Your First WordPress Project

With DDEV installed, creating a new WordPress project takes minutes.

### Option 1: Start Fresh with WordPress

Navigate to your projects directory and run:

```bash
ddev poweroff
ddev config --project-type=wordpress --project-name=my-wordpress-site
ddev start
ddev wp core download
```

This creates a new WordPress installation. The `ddev wp` command gives you access to WP-CLI inside the container.

### Option 2: Import an Existing Project

If you have an existing WordPress site you want to work on locally:

```bash
cd /path/to/your/existing/project
ddev config --project-type=wordpress --project-name=my-existing-site
ddev start
ddev import-db --src=/path/to/database.sql
ddev import-files --src=/path/to/wp-content-uploads.tar.gz
```

The import commands load your existing database and media files into the DDEV environment.

### Access Your Site

Once your project is running, access it running this command:

```bash
ddev launch
```

This opens your browser to `https://my-wordpress-site.ddev.site`. The HTTPS is handled automatically by DDEV.

Alternatively, access it at `http://my-wordpress-site.ddev.local` or find the exact URL with:

```bash
ddev describe
```

## Everyday DDEV Commands

Here are the commands I use most frequently.

### Starting and Stopping Projects

```bash
ddev config       # Configures the project before starting it
ddev start        # Start the current project
ddev stop         # Stop the current project
```

### Accessing the Shell

```bash
ddev ssh          # Open a bash shell inside the web container
```

This drops you into the container where you have WP-CLI, Composer, Node.js, and other tools available.

### Running WP-CLI Commands

```bash
ddev wp plugin list                    # List installed plugins
ddev wp plugin install woocommerce     # Install a plugin
ddev wp theme list                     # List installed themes
ddev wp search-replace example.com new-site.ddev.site  # Update URLs in database
```

### Database Access

```bash
ddev sequelace                      # Open database GUI (if installed)
ddev mysql                          # Open MySQL CLI
ddev export-db --file=dump.sql      # Export database to a file
```

### Viewing Logs

```bash
ddev logs                            # View web server logs
ddev logs -f                         # Follow logs in real time
```

### Running PHP Commands

```bash
ddev php -v                           # Check PHP version
ddev exec phpunit                     # Run PHPUnit tests
```

## Configuring Your Project

DDEV creates a `.ddev` directory in your project with a `config.yaml` file. You can customize many settings here.

```yaml
name: my-wordpress-site
type: wordpress
php_version: "8.3"
webserver_type: nginx-fpm
database:
  type: mariadb
  version: "11.4"
```

Common configuration options:

-   **php_version:** "8.1", "8.2", "8.3", or "8.4"
-   **webserver_type:** nginx-fpm or apache-fpm
-   **database type:** mysql or mariadb
-   **router_http_port:** Change the HTTP port if you have conflicts
-   **router_https_port:** Change the HTTPS port if needed

After changing the config, run `ddev restart` for the changes to take effect.

## Sharing Your Local Site

DDEV makes it easy to share your local site with clients or colleagues using ngrok.

```bash
ddev share
```

This gives you a public URL that tunnels to your local environment. Useful for showing work in progress without deploying to a staging server.

## DDEV Is Not Just for WordPress

While this guide focuses on WordPress, DDEV supports many other project types out of the box:

-   **Drupal** with full quickstart commands
-   **TYPO3**
-   **Laravel** and PHP frameworks
-   **Plain PHP** projects
-   **Node.js** projects

You can also extend DDEV with custom Docker configurations for almost any stack. The [add-ons registry](https://addons.ddev.com) has pre-built configurations for services like Redis, Solr, Elasticsearch, and more.

## Troubleshooting Common Issues

### Port Conflicts

If DDEV fails to start because a port is already in use:

```bash
ddev describe
```

Look for the ports section and either stop the conflicting service or update your `.ddev/config.yaml` to use different ports.

### DNS Issues

If you cannot access `*.ddev.site` URLs:

```bash
ddev start --verbose
```

This gives you detailed output about what DDEV is doing. On macOS, restarting OrbStack or Docker Desktop often fixes DNS issues.

### Database Connection Problems

If WordPress cannot connect to the database:

```bash
ddev describe
```

Check the database credentials shown in the output. Your `wp-config.php` should use the defaults DDEV provides automatically. If you imported a database with hardcoded credentials, update them to match what DDEV expects.

## Removing a Project

When you finish working on a project and want to take it down without removing DDEV itself, you have a few options.

### Stop the Project

To stop a running project without deleting anything:

```bash
ddev stop
```

This stops the containers but keeps your data intact.

### Delete the Project Completely

If you want to remove the DDEV configuration and containers for a specific project:

```bash
ddev delete
```

You will be prompted to confirm. This removes the Docker containers, volumes, and networks associated with that project only. Your actual WordPress files, database exports, and wp-content remain untouched on your machine.

For a faster, non-interactive deletion:

```bash
ddev delete --yes
```

### Delete a Project and Its Database

If you also want to wipe the database:

```bash
ddev delete --yes && rm -rf .ddev
```

The `.ddev` directory contains your project configuration. Removing it takes the project back to a plain directory without DDEV settings.

## Uninstalling DDEV

When you no longer need DDEV, removing it is straightforward.

### Stop All Projects

```bash
ddev poweroff
```

### Remove DDEV Itself

**macOS (Homebrew):**

```bash
brew uninstall ddev
```

**Windows (Chocolatey):**

```bash
choco uninstall ddev
```

**Linux (Homebrew):**

```bash
brew uninstall ddev
```

Or manually remove the DDEV binary if you installed it that way.

### Clean Up Docker

DDEV creates Docker containers, volumes, and networks for each project. These are stored in Docker, not in the DDEV install directory. To remove them:

```bash
docker container prune
docker volume prune
docker network prune
```

This removes all stopped containers, unused volumes, and unused networks. Your actual project files remain untouched.

### Remove DDEV Configuration from Projects

Each project has a `.ddev` directory. Delete it to remove DDEV configuration from a specific project:

```bash
rm -rf .ddev
```

This does not affect your actual project code or content.

## Wrapping Up

DDEV transformed how I work locally. The ability to spin up a fresh WordPress environment in under a minute, switch between PHP versions effortlessly, and share work via tunnels has become essential to my workflow.

The installation takes a few minutes, and the learning curve is gentle. You do not need to understand Docker or server configuration to use it effectively. The official docs at [docs.ddev.com](https://docs.ddev.com/en/stable/) are excellent if you want to explore advanced features.

Give it a try. Your future self will thank you.

Still have questions? Send me an email and let's discuss.

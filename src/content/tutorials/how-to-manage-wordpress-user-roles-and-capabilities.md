---
title: "How to Manage WordPress User Roles and Capabilities"
date: 2026-06-02
author: "Toni Q"
description: "A practical guide to understanding, customizing, and safely managing user roles and capabilities in WordPress. From built‑in roles to custom creations, capability audits, and the safest plugin or code‑first approaches."
tags: ["wordpress", "roles", "capabilities", "users", "security", "beginners"]
slug: how-to-manage-wordpress-user-roles-and-capabilities
---

## Introduction

Managing who can do what on your WordPress site is one of the first things you as a site owner shoud learn. WordPress comes with a role‑capability system that lets you control everything from content creation to plugin installation. Getting it right means users have just enough access to do their jobs, and not enough to break or compromise your precious website.

This guide walks through the built‑in roles, how the capability system works, when and how to create custom roles, and the safest ways to make changes both using plugins or code.

---

## Built‑in Roles (single‑site)

WordPress ships with five default roles. Each role is a bundle of capabilities; you rarely need to assign individual capabilities to a user.

| Role | Typical capabilities |
|---|---|
| **Administrator** | Full access — all capabilities, including plugin/theme management, user management, core updates, site settings |
| **Editor** | Publish and manage posts (including others’), moderate comments, upload files, access some theme settings |
| **Author** | Publish and manage their own posts, upload files, view comments |
| **Contributor** | Write and manage their own posts (cannot publish), can preview own drafts, cannot upload files by default |
| **Subscriber** | Read content, manage their own profile (if membership plugins are active) |

> **Note** — WordPress Multisite adds a **Super Admin** role with network‑wide capabilities (manage networks, sites, users, themes, plugins). Never remove the Super Admin role on a Multisite network.

---

## The Capability System

A **capability** is a single permission (e.g., `edit_posts`, `delete_pages`, `moderate_comments`, `upload_files`, `switch_themes`). A **role** is a named collection of capabilities.

WordPress uses **`map_meta_cap`** internally to translate high‑level capabilities (like `edit_others_posts`) into specific, user‑‑ or post‑‑scoped actions. This means you usually don’t need to assign raw capabilities directly; instead, assign a role that already has the right bundle.

### Key functions

| Function | What it does |
|---|---|
| `user_can( $user, $capability )` | Returns `true` if the user has the capability (or a role that includes it). |
| `current_user_can( $capability )` | Wrapper for the current user. |
| `get_role( $role_name )` | Returns a role object with `add_cap()` and `remove_cap()` methods. |
| `add_role( $role_name, $display_name, $capabilities )` | Creates a new role (or overwrites if it already exists — **use `remove_role()` first** to be safe). |
| `remove_role( $role_name )` | Deletes a role from the database. |

---

## Creating Custom Roles

### Option A: Use a plugin (recommended for non‑devs)

Plugins such as **User Role Editor** or **Members** provide a dashboard UI to create new roles, add/remove capabilities, and assign roles to users — no code required.

#### Using *User Role Editor*

1. Install & activate the plugin from the WordPress.org repository.
2. Go to **Users → User Role Editor**.
3. Click **Add Role**, enter a **Role Name** (machine‑friendly, e.g., `contributor_plus`) and a **Role Label** (what users see, e.g., `Contributor Plus`).
4. Check/uncheck the capabilities you want this role to have. The plugin lists all built‑in capabilities plus any custom ones your theme or other plugins register.
5. Click **Add Role**. The new role now appears in the user edit screen, where you can assign it to anyone.

#### Using *Members*

1. Install & activate **Members**.
2. Navigate to **Members → Roles**.
3. Click **Add Role**, give it a name, and configure the desired capabilities.
4. The plugin also includes a **Front End UI** role selector you can add to your menu or widget area.

> **Why use a plugin?** Changes are persisted in the database, survive theme changes, and give you a visual map of what each role can do. Ideal for clients who may need to tweak roles later without touching code.

### Option B: Code‑first (`functions.php`)

Developers can register roles programmatically. This is handy when the site is built with a custom theme or when you want the role to be registered on every install.

```php
/**
 * Plugin or theme file: register a "Contributor Plus" role.
 * Give the ability to edit own posts, upload files, but not publish.
 */
add_action( 'init', 'wpb_create_contributor_plus_role', 11 );

function wpb_create_contributor_plus_role() {
    // Do nothing if the role already exists (safer).
    if ( ! role_exists( 'contributor_plus' ) ) {
        add_role(
            'contributor_plus',                                 // role name (DB key)
            'Contributor Plus',                                 // display name
            array(
                'read_post'         => true,
                'edit_posts'        => true,
                'upload_files'      => true,
                'publish_posts'     => false,
                'edit_published_posts' => false,
            )
        );
    }
}
```

**To remove a role later:**

```php
add_action( 'init', 'wpb_remove_contributor_plus_role' );

function wpb_remove_contributor_plus_role() {
    remove_role( 'contributor_plus' );
}
```

> **Safety tip** — Always check `role_exists()` before calling `add_role()`, because a second call with the same name **overwrites** the existing capabilities without merging, which can silently strip permissions.

---

## Modifying Existing Built‑in Roles

### Using a plugin (safest for most users)

- **User Role Editor**: select a built‑in role (Administrator, Editor, etc.), check/uncheck capabilities, and click **Update Role**.
- **Members**: similar UI, plus the ability to **duplicate** a role, give it a new name, and assign unique capabilities.

### Directly via code (developers only)

```php
add_action( 'init', 'wpb_editor_remove_unfiltered_html' );

function wpb_editor_remove_unfiltered_html() {
    $role = get_role( 'editor' );
    $role->remove_cap( 'unfiltered_html' );
}
```

> **Never remove** `unfiltered_html` from the **Administrator** role unless you have a very good reason — it’s needed for core customization tasks. Removing it from Editor or Author is usually safe if you don’t use the “Allow unfiltered HTML” feature.

---

## Capability Audit Checklist

Before changing any role, ask these questions:

1. **What does this user actually need to accomplish?** Write down the specific tasks.
2. **Is there a built‑in role that already covers those tasks?** If yes, assign that role instead of creating a custom one.
3. **Will granting this capability break anything?** Consider: could the user publish spam? delete critical content? change site settings?
4. **Is the capability over‑privileged for the role?** For example, giving `edit_themes` to an Editor is rarely needed.
5. **Should `unfiltered_html` be involved?** Only grant if the user truly needs to insert raw HTML/PHP (usually Admins only).
6. **Have you tested as that user?** Log in as the role (or use the “Switch Role” feature in Members) and perform the expected actions.
7. **Is the change documented?** Keep a simple note (or a readme in your repo) of why the role was modified, for future reference.

---

## Common Use‑Case Patterns

| Goal | Recommended approach |
|---|---|
| **Allow a writer to publish posts after review** | Give the **Contributor** role the `edit_published_posts` capability **or** create a custom `contributor_plus` role (see code snippet). |
| **Restrict a client to only their own content** | Use the **Author** role (they can publish their own posts) **or** a custom role with `edit_own_posts` + `upload_files` but not `edit_others_posts`. |
| **Give a designer access to theme customizer but not plugin settings** | Start from **Editor**, then remove `unfiltered_html`, `manage_options`, `activate_plugins`, `delete_plugins` via plugin or code. |
| **Multisite: give a lead agency access to all sites but not network settings** | Create a **Network Admin Lite** role via code, granting most capabilities except `manage_network_options`, `update_core`, `delete_plugins`. |
| **Front‑end content editor for a membership site** | Grant `edit_posts`, `upload_files`, `delete_own_posts`. Hide the admin bar with `show_admin_bar_option( false, 'editor' )` if needed. |

---

## Tools & Plugins Comparison

| Plugin | Best for | Key features | Cost |
|---|---|---|---|
| **User Role Editor** | Quick UI tweaks | Visual checklist of all capabilities, bulk edit, export/import role definitions | Free (pro version adds front‑end role selector) |
| **Members** | Advanced, granular control | Front‑end role selector, frontend UI, shortcode `[members_role]`, capability front‑end visibility, reports | Free + optional premium extensions |
| **Capabilities by Profile Builder** | Membership sites needing front‑end profile editing | Front‑end role assignment, profile fields, content restriction by role | Free / paid |
| **Code (`functions.php`)** | Developers, themes, or multisite custom roles | Full control, version‑controlled, no admin UI needed | N/A |

> **Rule of thumb** — If the person managing the site may need to make future role changes without code access, use a plugin. If the role is part of a custom build or multisite network setup, code is usually cleaner and more maintainable.

---

## WP-CLI Recipes (for the command‑line friendly)

| Command | What it does |
|---|---|
| `wp role list` | Show all existing roles. |
| `wp role exists editor` | Check if a role name is taken. |
| `wp role create approver Approver` | Create a new role. |
| `wp role delete approver` | Delete a role. |
| `wp cap add editor unfiltered_html` | Add a capability to a role. |
| `wp cap remove editor unfiltered_html` | Remove a capability from a role. |
| `wp cap list editor` | List all capabilities for a role. |
| `wp user list-caps 1` | Show all capabilities for user ID 1. |
| `wp role reset administrator` | Reset a role to its default capabilities. |

Example: create a role and assign a capability in one pipeline:

```bash
wp role create client_reviewer "Client Reviewer"
wp cap add client_reviewer edit_posts
wp user add-role 12 client_reviewer   # assign to user ID 12
```

---

## Further Reading

- [WordPress Codex: Roles and Capabilities](https://wordpress.org/documentation/article/roles-and-capabilities/) – the definitive reference.
- [WP-CLI role/commands handbook](https://developer.wordpress.org/cli/commands/role/) – command‑line role management.
- *User Role Editor* plugin page – UI‑based role management.
- *Members* plugin page – advanced role control with front‑end UI.

---
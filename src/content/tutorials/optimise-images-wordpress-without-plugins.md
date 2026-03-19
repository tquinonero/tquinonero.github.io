---
title: "How to Optimise Images for WordPress Without Plugins"
date: 2026-03-16
author: "Toni Q"
description: "Plugins aren't the only way to serve fast images in WordPress. Here's how to handle compression, modern formats, lazy loading, and responsive images using nothing but native tools."
tags: ["wordpress", "performance", "images", "web development"]
slug: optimise-images-wordpress-without-plugins
---
Most WordPress performance guides start with "install this plugin." But plugins add overhead, can conflict with each other, and often do things you could accomplish yourself with a bit of knowledge. Image optimisation is one of those areas where the native tools — both in WordPress core and in your server stack — are more capable than most people realise.

This tutorial covers everything you need to serve fast, well-sized images in WordPress without installing a single image optimisation plugin.

## 1\. Compress Before You Upload

The most effective step happens before WordPress even touches the file. Compress your images locally before uploading them.

**Tools for local compression:**

-   [TinyPNG](https://tinypng.com/) — browser-based, free, supports WebP and AVIF output
-   `cwebp` — command-line tool from Google for converting to WebP
-   `ffmpeg` — can batch convert and resize images via terminal
-   ImageMagick — powerful CLI tool available on most servers and local machines

A good rule of thumb: aim for images under 150KB for most content images, and under 50KB for thumbnails. Use your judgement based on image complexity.

**Quick ImageMagick one-liner to resize and compress:**

```bash
convert input.jpg -resize 1200x -quality 82 output.jpg
```

**Convert a folder to WebP with cwebp:**

```bash
for f in *.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done
```

## 2\. Use Modern Formats (WebP and AVIF)

WebP is now supported by all major browsers and typically saves 25–35% in file size compared to JPEG at equivalent quality. AVIF is even more efficient but slower to encode.

WordPress has supported WebP uploads natively since version 5.8. Simply convert your images to `.webp` before uploading and WordPress will handle them like any other image.

For AVIF, WordPress added experimental support in 6.5. Check your server's PHP has the required GD or Imagick extension with AVIF support:

```bash
php -r "print_r(gd_info());"
```

Look for `"AVIF Support" => true` in the output.

## 3\. Control WordPress's Generated Thumbnail Sizes

By default, WordPress generates multiple thumbnail sizes for every uploaded image: `thumbnail`, `medium`, `medium_large`, `large`, and `full` — plus any registered by your theme. This multiplies storage usage and slows uploads.

Audit which sizes your theme actually uses, then disable the ones it doesn't. Add this to your theme's `functions.php` (or a site-specific plugin):

```php
// Remove unneeded default sizes
add_filter( 'intermediate_image_sizes_advanced', function( $sizes ) {
    unset( $sizes['medium_large'] );
    // unset( $sizes['large'] ); // uncomment if your theme doesn't use it
    return $sizes;
} );
```

You can also change the pixel dimensions of existing sizes:

```php
update_option( 'thumbnail_size_w', 150 );
update_option( 'thumbnail_size_h', 150 );
update_option( 'medium_size_w', 600 );
update_option( 'medium_size_h', 0 ); // 0 = proportional
update_option( 'large_size_w', 1024 );
update_option( 'large_size_h', 0 );
```

After changing sizes, existing images won't be regenerated automatically — but you can do that via WP-CLI (no plugin needed):

```bash
wp media regenerate --yes
```

## 4\. Use Responsive Images Properly

WordPress automatically generates `srcset` and `sizes` attributes for images inserted via the block editor or classic editor. This means browsers download the appropriately sized version for the viewport — not just the full-size image every time.

Make sure your theme isn't stripping these attributes. If you're writing custom image output in a template, use `wp_get_attachment_image()` instead of hardcoding an `<img>` tag:

```php
echo wp_get_attachment_image( $attachment_id, 'large', false, [
    'class' => 'my-image',
    'alt'   => 'Description of image',
] );
```

This outputs the full `srcset`, `sizes`, `width`, and `height` attributes automatically.

## 5\. Enable Native Lazy Loading

Modern browsers support the `loading="lazy"` attribute natively. WordPress has added this to images and iframes by default since version 5.5 — so if you're on a recent version, images below the fold are already lazy loaded without any plugin.

To verify it's not being removed somewhere, inspect an image in your page source. You should see:

```html
<img src="..." loading="lazy" ...>
```

The hero image or first content image should use `loading="eager"` to avoid delaying the largest contentful paint (LCP). WordPress handles the first image in content automatically, but if you're outputting images manually in a template, be explicit:

```php
echo wp_get_attachment_image( $attachment_id, 'full', false, [
    'loading' => 'eager', // for above-the-fold images
] );
```

## 6\. Set Correct Image Dimensions

Always specify `width` and `height` on your `<img>` tags. This allows the browser to reserve space before the image loads, eliminating layout shift (CLS). `wp_get_attachment_image()` does this automatically.

If you're using the block editor, width and height are written into the post content. If your theme has custom image output without dimensions, add them explicitly or switch to using the WordPress helper functions.

## 7\. Serve Images from a CDN (Without a Plugin)

If your host supports it, you can point a subdomain or path to a CDN origin without a plugin. Many managed hosts (Cloudflare, Bunny.net, Kinsta, WP Engine) offer CDN integration at the infrastructure level.

The quickest no-plugin approach is to use **Cloudflare's free plan**. Once your domain's DNS is proxied through Cloudflare, it automatically caches and serves static assets including images from edge nodes — no configuration needed beyond adding your site.

For more control, Cloudflare's Image Resizing feature (paid plans) lets you resize and convert images on the fly via URL parameters, similar to what paid image CDN plugins offer.

## 8\. Optimise Via Server-Side Configuration

If you have server access, you can configure your web server to compress image delivery and set long cache headers.

**Nginx example — gzip and cache headers:**

```nginx
location ~* \.(jpg|jpeg|png|gif|webp|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    gzip_static on;
}
```

**Apache (.htaccess):**

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

Long cache lifetimes mean returning visitors load images from their browser cache instantly.

None of these require a plugin. Most of them are either already handled by WordPress core or take fewer than ten lines of code to implement. The result is faster page loads, better Core Web Vitals scores, and one less set of plugin dependencies to maintain.

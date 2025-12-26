# Favicon Assets - Upload Instructions

The favicon system has been configured. Please upload the following image files to this directory (`/public`):

## Required Files

### 1. favicon.ico
- **Size**: Multi-size (16x16, 32x32, 48x48 recommended)
- **Format**: ICO
- **Purpose**: Legacy browser support, shows in browser tabs

### 2. favicon-16x16.png
- **Size**: 16x16 pixels
- **Format**: PNG
- **Purpose**: Small favicon for browser tabs

### 3. favicon-32x32.png
- **Size**: 32x32 pixels
- **Format**: PNG
- **Purpose**: Standard favicon for browser tabs

### 4. apple-touch-icon.png
- **Size**: 180x180 pixels
- **Format**: PNG
- **Purpose**: iOS home screen icon (when users add site to home screen)

### 5. android-chrome-192x192.png
- **Size**: 192x192 pixels
- **Format**: PNG
- **Purpose**: Android home screen icon

### 6. android-chrome-512x512.png
- **Size**: 512x512 pixels
- **Format**: PNG
- **Purpose**: High-resolution Android icon, PWA splash screen

---

## What's Already Configured

✅ **site.webmanifest** - PWA configuration file (created)
✅ **app/layout.tsx** - Favicon metadata links (updated)
✅ **public/** directory - Ready for favicon files

## After Uploading

Once you've uploaded all the image files to this directory:
1. Restart the dev server if running (`npm run dev`)
2. Check browser tab - you should see the Chat360 icon
3. Test on mobile by adding to home screen

## Brand Colors

The favicon images you showed use:
- **Teal/Turquoise**: `#0F766E` (primary brand color)
- **Gray**: For device/chat bubble outlines
- **White**: Background

These match the Chat360 brand colors defined in `tailwind.config.ts`.

---

**Note**: You can delete this file after uploading all favicon assets.

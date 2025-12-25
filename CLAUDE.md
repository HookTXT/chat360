# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Chat360** - Landing page for an AI-powered chat solution for Quebec auto dealerships.

This is a Next.js-based marketing website showcasing Chat360, a 24/7 AI sales agent designed specifically for Quebec auto dealerships. The landing page features comprehensive copywriting, modern design, and responsive layouts.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Package Manager**: npm
- **Deployment**: Static site generation (SSG)

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```
   Opens at http://localhost:3000

## Commands

### Development Server
```bash
npm run dev
```
Starts the Next.js development server with hot reload.

### Build
```bash
npm run build
```
Creates an optimized production build. Outputs to `.next` directory.

### Production Server
```bash
npm start
```
Runs the production build locally (must run `npm run build` first).

### Lint
```bash
npm run lint
```
Runs ESLint on the codebase.

## Architecture

### Component Structure

This is a single-page application (SPA) with a modular component architecture:

- **Layout**: Root layout in `app/layout.tsx` provides metadata and global structure
- **Page**: Main page in `app/page.tsx` composes all sections
- **Components**: Individual sections in `/components` directory

### Design System

- **Colors**: Teal/turquoise primary color scheme (defined in `tailwind.config.ts`)
- **Typography**: System font stack for optimal performance
- **Spacing**: Consistent padding using `section-padding` utility class
- **Responsive**: Mobile-first design with Tailwind breakpoints

### Data Flow

- All content is static (no API calls or database)
- Components receive props where needed
- Client-side interactivity limited to FAQ accordion and mobile menu

## Project Structure

```
chat360/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page (composes all sections)
│   └── globals.css         # Global styles and Tailwind utilities
│
├── components/
│   ├── Header.tsx          # Navigation (sticky header)
│   ├── Hero.tsx            # Hero section with value prop
│   ├── Problem.tsx         # Problem/pain points section
│   ├── Solution.tsx        # Solution overview
│   ├── Features.tsx        # 6 key features grid
│   ├── HowItWorks.tsx      # Implementation timeline
│   ├── Results.tsx         # Metrics and statistics
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── Comparison.tsx      # Comparison table
│   ├── UseCases.tsx        # Real-world scenarios
│   ├── Pricing.tsx         # Pricing tiers
│   ├── FAQ.tsx             # FAQ accordion
│   ├── FinalCTA.tsx        # Final call-to-action
│   └── Footer.tsx          # Footer with links
│
├── public/                 # Static assets (empty for now)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## Making Changes

### Updating Copy

All copywriting is in the components. To update text:
1. Find the relevant component in `/components`
2. Edit the JSX content directly
3. Changes hot-reload in dev mode

### Styling

- Use Tailwind utility classes for styling
- Custom utilities defined in `app/globals.css`
- Color palette in `tailwind.config.ts`
- Follow existing patterns for consistency

### Adding Sections

1. Create new component in `/components`
2. Import and add to `app/page.tsx`
3. Follow existing component structure
4. Use TypeScript for props

### Links and CTAs

Main conversion points:
- Demo booking: `https://calendly.com/hooktxt`
- Email: `kevin@hooktxt.com`
- Website: `https://hooktxt.com`

Update these in:
- `components/Header.tsx` (nav)
- `components/FinalCTA.tsx` (main CTA)
- `components/Footer.tsx` (footer links)

## Key Features

### SEO
- Metadata in `app/layout.tsx`
- French language (`lang="fr"`)
- Semantic HTML structure
- Descriptive alt text (to be added for images)

### Performance
- Static site generation
- Optimized bundle size (~102 kB)
- No external font loading (system fonts)
- Minimal JavaScript

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## Deployment

### Recommended: Vercel
1. Push to GitHub
2. Import in Vercel
3. Auto-deploys on push

### Alternative Platforms
Works with any Next.js host:
- Netlify
- AWS Amplify
- DigitalOcean
- Self-hosted

## Common Tasks

### Change Primary Color
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#0F766E', // Change this
    // ... other shades
  }
}
```

### Add New Component
```bash
# Create component file
touch components/NewSection.tsx

# Add to page
# Edit app/page.tsx and import/use component
```

### Update Metadata
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  // ...
}
```

## Notes

- **No Backend**: This is a static marketing site with no server-side logic
- **French Content**: Primary language is French (Quebec)
- **Mobile-First**: Design prioritizes mobile experience
- **Conversion Focus**: Multiple CTAs throughout the page

---

For questions or issues, contact kevin@hooktxt.com

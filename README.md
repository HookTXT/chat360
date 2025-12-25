# Chat360 Landing Page

AI-powered chat solution for Quebec auto dealerships. Built with Next.js, TypeScript, and Tailwind CSS.

## Overview

Chat360 is a 24/7 AI sales agent designed specifically for Quebec auto dealerships. This landing page showcases the product's features, benefits, and pricing in a modern, responsive design.

## Features

- **Modern Design**: Clean, professional aesthetic inspired by contemporary SaaS landing pages
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **TypeScript**: Fully typed for better development experience and fewer bugs
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Static site generation for optimal loading speeds

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
chat360/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with main value prop
│   ├── Problem.tsx         # Problem section (pain points)
│   ├── Solution.tsx        # Solution overview
│   ├── Features.tsx        # Feature grid (6 features)
│   ├── HowItWorks.tsx      # 3-step implementation process
│   ├── Results.tsx         # Key metrics and statistics
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── Comparison.tsx      # Comparison table
│   ├── UseCases.tsx        # Real-world use cases
│   ├── Pricing.tsx         # Pricing plans
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── FinalCTA.tsx        # Final call-to-action
│   └── Footer.tsx          # Site footer
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts

```

## Landing Page Sections

1. **Hero**: Main value proposition with demo conversation
2. **Problem**: Statistics showing the pain points
3. **Solution**: How Chat360 solves the problems
4. **Features**: 6 key features with detailed descriptions
5. **How It Works**: 14-day implementation timeline
6. **Results**: Key performance metrics
7. **Testimonials**: Customer success stories
8. **Comparison**: Chat360 vs. competitors
9. **Use Cases**: Real-world scenarios
10. **Pricing**: Three pricing tiers
11. **FAQ**: Common questions and answers
12. **Final CTA**: Demo booking with contact info

## Customization

### Colors

The primary color scheme uses a teal/turquoise palette. To change colors, edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#0F766E',
    // ... other shades
  },
}
```

### Content

All copywriting is contained within the component files. To update text:

1. Navigate to the relevant component in `/components`
2. Edit the text content directly in the JSX
3. Save and the changes will hot-reload in development

### Links

Update demo booking and contact links in:
- `components/FinalCTA.tsx`: Main demo CTA
- `components/Header.tsx`: Navigation links
- `components/Footer.tsx`: Footer links

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure the build
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

Build command: `npm run build`
Output directory: `.next`
Install command: `npm install`

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Load JS**: ~102 kB (optimized bundle size)
- **Static Generation**: All pages pre-rendered at build time

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

The project uses:
- TypeScript for type safety
- ESLint for code quality
- Prettier (recommended) for code formatting

## Contributing

This is a proprietary project for HookTXT. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## License

© 2024 HookTXT. All rights reserved.

## Contact

- **Email**: kevin@hooktxt.com
- **Website**: [hooktxt.com](https://hooktxt.com)
- **Demo**: [calendly.com/hooktxt](https://calendly.com/hooktxt)

---

**Built with** ❤️ **by HookTXT**

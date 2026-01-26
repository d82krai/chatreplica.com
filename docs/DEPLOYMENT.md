# ChatReplica.com — Deployment & Build Guide

## Project Setup

### Prerequisites

- **Node.js:** v18.x or v20.x (LTS recommended)
- **npm:** v9+ (bundled with Node.js)
- **Git:** latest version

### Initial Setup

```bash
# Create the Next.js project
npx create-next-app@latest chatreplica --typescript --tailwind --app --src-dir --no-turbo

# Navigate into the project
cd chatreplica

# Install additional dependencies
npm install html2canvas lucide-react date-fns

# Install dev dependencies
npm install -D prettier prettier-plugin-tailwindcss

# Start development server
npm run dev
```

### Project Creation Options

When `create-next-app` prompts:

| Option | Selection |
|---|---|
| TypeScript | Yes |
| ESLint | Yes |
| Tailwind CSS | Yes |
| `src/` directory | Yes |
| App Router | Yes |
| Import alias | `@/*` (default) |

---

## Dependencies

### Production

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "html2canvas": "^1.4.0",
    "lucide-react": "^0.300.0",
    "date-fns": "^3.0.0"
  }
}
```

| Package | Purpose | Size (gzipped) |
|---|---|---|
| `next` | React framework with SSG, routing, SEO | ~90KB (shared runtime) |
| `react` / `react-dom` | UI library | ~42KB |
| `html2canvas` | Client-side screenshot capture | ~40KB |
| `lucide-react` | Icon library (tree-shakeable) | ~2KB per icon |
| `date-fns` | Date formatting utilities (tree-shakeable) | ~2KB per function |

### Development

```json
{
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## Configuration Files

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export if deploying to static hosting
  // output: 'export',

  images: {
    // For static export, use unoptimized images
    // unoptimized: true,

    // For Vercel deployment, use default optimization
    formats: ['image/avif', 'image/webp'],
  },

  // Strict mode for development
  reactStrictMode: true,

  // Compress output
  compress: true,

  // Powered by header (disable for security)
  poweredByHeader: false,
};

module.exports = nextConfig;
```

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // WhatsApp
        'wa-green': '#25D366',
        'wa-dark-green': '#075E54',
        'wa-teal': '#128C7E',
        'wa-light-green': '#DCF8C6',
        'wa-sent': '#D9FDD3',
        'wa-chat-bg': '#ECE5DD',
        'wa-blue-tick': '#53BDEB',

        // Facebook Messenger
        'fb-blue': '#0084FF',
        'fb-received': '#E4E6EB',
        'fb-active': '#31A24C',

        // Instagram
        'ig-blue': '#3797F0',
        'ig-received': '#EFEFEF',
        'ig-gradient-1': '#833AB4',
        'ig-gradient-2': '#FD1D1D',
        'ig-gradient-3': '#FCAF45',

        // X (Twitter)
        'x-blue': '#1D9BF0',
        'x-received': '#EFF3F4',
        'x-text': '#0F1419',
        'x-secondary': '#536471',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'phone': '375px',
      },
      borderRadius: {
        'bubble': '18px',
      },
    },
  },
  plugins: [],
};

export default config;
```

### .prettierrc

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}
```

---

## Build Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production build
npm run build            # Build optimized production bundle

# Production server
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint

# Type checking
npx tsc --noEmit         # Check TypeScript types without emitting

# Format code
npx prettier --write .   # Format all files

# Analyze bundle (optional)
# Add to package.json scripts: "analyze": "ANALYZE=true next build"
npm run analyze          # Visualize bundle sizes
```

---

## Deployment: Vercel (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit: ChatReplica project setup"

# Create GitHub repository and push
gh repo create chatreplica --public
git remote add origin https://github.com/YOUR_USERNAME/chatreplica.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import the GitHub repository
4. Vercel auto-detects Next.js — no config needed
5. Click "Deploy"

### Step 3: Custom Domain

1. In Vercel dashboard → Project → Settings → Domains
2. Add `chatreplica.com`
3. Update DNS records at your domain registrar:
   - **A Record:** `76.76.21.21` (Vercel)
   - **CNAME:** `cname.vercel-dns.com` (for www subdomain)
4. SSL is provisioned automatically

### Step 4: Environment Variables (Optional)

```
NEXT_PUBLIC_SITE_URL=https://chatreplica.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Set in Vercel dashboard → Project → Settings → Environment Variables.

### Vercel Configuration

Create `vercel.json` in project root (optional, for custom headers):

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/og/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Alternative Deployment: Static Export

If you want to deploy to any static hosting (Netlify, Cloudflare Pages, S3, etc.):

### Step 1: Configure Static Export

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

### Step 2: Build

```bash
npm run build
# Output goes to /out directory
```

### Step 3: Deploy

Upload the `/out` directory to your static hosting provider.

**Limitations of static export:**
- No server-side features (API routes, ISR, SSR)
- Image optimization disabled (use pre-optimized images)
- No middleware support
- sitemap.xml and robots.txt are generated at build time

---

## CI/CD Pipeline (Optional)

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npx tsc --noEmit

      - name: Build
        run: npm run build
```

---

## Performance Optimization Checklist

### Build-Time

- [ ] Enable compression in next.config.js (`compress: true`)
- [ ] Remove unused dependencies from package.json
- [ ] Use `next/dynamic` for lazy-loading platform preview components
- [ ] Use `next/font` for font loading (no FOUT/FOIT)
- [ ] Optimize images in `/public/og/` (compress to < 300KB each)
- [ ] Verify no large dependencies are included unnecessarily

### Runtime

- [ ] Images converted to base64 only when needed (on upload)
- [ ] Screenshot capture uses `scale: 2` (not higher, to balance quality/speed)
- [ ] State updates are batched where possible
- [ ] No memory leaks from URL.createObjectURL (revoke on cleanup)
- [ ] Debounce rapid state changes in editor (e.g., while typing)

### Monitoring

- [ ] Set up Vercel Analytics (free tier)
- [ ] Monitor Core Web Vitals in Vercel dashboard
- [ ] Run Lighthouse CI on each deploy (via GitHub Actions)
- [ ] Check bundle size doesn't grow unexpectedly

---

## Domain & DNS Setup

### Domain Registrar Settings

| Record Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | 76.76.21.21 | 300 |
| CNAME | www | cname.vercel-dns.com | 300 |

### SSL/TLS

- Automatic via Vercel (Let's Encrypt)
- HTTPS enforced (HTTP → HTTPS redirect)
- HSTS enabled automatically

### DNS Propagation

- Changes take 5 minutes to 48 hours to propagate
- Use [dnschecker.org](https://dnschecker.org) to verify propagation
- Vercel dashboard shows verification status

---

## Post-Deployment Checklist

- [ ] All 5 pages load correctly (/, /whatsapp, /facebook, /instagram, /twitter)
- [ ] Custom domain resolves with HTTPS
- [ ] OG images display correctly when shared on social media
- [ ] Screenshot download works on all pages
- [ ] Image upload works on all pages
- [ ] Mobile responsive layout works at all breakpoints
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS Safari and Android Chrome
- [ ] Verify canonical URLs are correct
- [ ] Verify no console errors in production

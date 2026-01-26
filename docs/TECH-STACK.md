# ChatReplica.com — Technology Stack

## Overview

ChatReplica is built as a fully client-side web application using modern React/Next.js technologies. No backend server is required — all processing happens in the user's browser.

---

## Core Technologies

### Framework: Next.js 14+ (App Router)

| Aspect | Detail |
|---|---|
| Version | 14.x or latest stable |
| Router | App Router (`/app` directory) |
| Rendering | Static Site Generation (SSG) for all pages |
| Language | TypeScript (strict mode) |

**Why Next.js?**
- App Router provides file-based routing with layout nesting
- Built-in SEO support via `metadata` API
- Static export capability for pure client-side deployment
- Image optimization with `next/image`
- Auto-generated sitemap and robots.txt
- Excellent Vercel deployment integration

### Styling: Tailwind CSS + CSS Modules

| Tool | Purpose |
|---|---|
| Tailwind CSS 3.x | Utility-first styling, responsive design, layout |
| CSS Modules | Platform-specific styles (`whatsapp.module.css`, etc.) |
| CSS Custom Properties | Theme colors per platform |

**Why this combination?**
- Tailwind handles layout, spacing, responsive breakpoints, and general UI
- CSS Modules handle pixel-perfect platform-specific styles that would be verbose in Tailwind
- CSS Custom Properties allow easy theme switching per platform

### State Management: React Built-in

| Tool | Purpose |
|---|---|
| `useState` | Simple component-level state |
| `useReducer` | Complex chat state with multiple actions |
| `useContext` | Share state between editor and preview panels |

**Why no external state library?**
- Each generator page is self-contained
- Chat state is local to each page (not shared across pages)
- React's built-in hooks are sufficient for this complexity level
- Reduces bundle size and complexity

---

## Key Libraries

### Screenshot Capture: html2canvas

```bash
npm install html2canvas
```

| Aspect | Detail |
|---|---|
| Purpose | Capture the preview panel as a PNG image |
| Version | 1.4.x or latest |
| Alternative | `dom-to-image-more` (if html2canvas has rendering issues) |

**Configuration:**
```typescript
import html2canvas from 'html2canvas';

const captureScreenshot = async (element: HTMLElement) => {
  const canvas = await html2canvas(element, {
    scale: 2,                    // 2x for retina quality
    useCORS: true,               // Handle cross-origin images
    allowTaint: false,
    backgroundColor: null,       // Transparent background
    logging: false,
  });

  const link = document.createElement('a');
  link.download = `chatreplica-whatsapp-${formatDate()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
};
```

**Known limitations:**
- Some CSS properties may not render perfectly (gradients, shadows)
- Cross-origin images must be converted to base64 before capture
- SVG rendering may need polyfills in older browsers

### Icons: Lucide React + Custom SVGs

```bash
npm install lucide-react
```

| Icon Source | Usage |
|---|---|
| Lucide React | General UI icons (arrows, download, settings, etc.) |
| Custom SVGs | Platform-specific icons (WhatsApp ticks, Messenger read receipt, etc.) |

**Platform-specific icons to create as custom SVGs:**
- WhatsApp: single tick, double tick, blue double tick, encryption lock
- Facebook: sent circle, delivered checkmark circle, seen avatar
- Instagram: seen eye, heart reaction
- X: sent checkmark, seen indicator

### Fonts: Google Fonts

| Platform | Font | Fallback |
|---|---|---|
| WhatsApp | Segoe UI | Helvetica Neue, system-ui, sans-serif |
| Facebook Messenger | Helvetica Neue | system-ui, sans-serif |
| Instagram | -apple-system | system-ui, sans-serif |
| X (Twitter) | Chirp (approximation) | -apple-system, Segoe UI, sans-serif |

Load fonts via `next/font/google` for optimal performance:
```typescript
import { Inter } from 'next/font/google';
```

### Date/Time Handling: Native + date-fns (optional)

```bash
npm install date-fns  # Optional, only if native Date formatting is insufficient
```

| Feature | Implementation |
|---|---|
| Auto-timestamp | `new Date()`, increment by 1-3 minutes per message |
| Time display | `Intl.DateTimeFormat` or `date-fns/format` |
| Date picker | Native `<input type="datetime-local">` |

---

## Development Tools

### Package Manager

```bash
npm  # Default with Next.js
```

### Linting & Formatting

| Tool | Config |
|---|---|
| ESLint | `next/core-web-vitals` + `@typescript-eslint` |
| Prettier | Default config with Tailwind plugin |

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Build & Bundle

### Build Command
```bash
npm run build    # Produces optimized production build
npm run start    # Starts production server
npm run dev      # Development server with hot reload
```

### Bundle Optimization
- **Code splitting:** Automatic per-page splitting by Next.js
- **Dynamic imports:** Lazy-load platform preview components
- **Tree shaking:** Automatic via webpack/turbopack
- **Image optimization:** `next/image` with WebP/AVIF conversion

```typescript
// Lazy load heavy preview components
import dynamic from 'next/dynamic';

const WhatsAppPreview = dynamic(() => import('@/components/previews/WhatsAppPreview'), {
  loading: () => <PreviewSkeleton />,
  ssr: false,
});
```

---

## Deployment

### Primary: Vercel

| Aspect | Detail |
|---|---|
| Platform | Vercel (free tier sufficient) |
| Domain | chatreplica.com (custom domain) |
| SSL | Automatic via Vercel |
| CDN | Vercel Edge Network (global) |
| Build | Automatic on git push |

### Alternative Deployments
- **Netlify:** Static export with `next export`
- **Cloudflare Pages:** Static export
- **Self-hosted:** Docker container with Node.js

### Environment Variables
```env
# .env.local (optional)
NEXT_PUBLIC_SITE_URL=https://chatreplica.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional Google Analytics
```

---

## Browser APIs Used

| API | Purpose |
|---|---|
| `FileReader` | Read uploaded profile photos as base64 |
| `URL.createObjectURL` | Create temporary URLs for uploaded images |
| `HTMLCanvasElement.toDataURL` | Convert canvas to downloadable PNG |
| `document.createElement('a').click()` | Trigger file download |
| `Intl.DateTimeFormat` | Format timestamps per locale |
| `navigator.clipboard` | Copy screenshot to clipboard (optional) |
| `matchMedia` | Detect system theme preference |

---

## Performance Targets

| Metric | Target | Tool |
|---|---|---|
| Lighthouse Performance | > 90 | Chrome DevTools |
| First Contentful Paint | < 1.5s | Web Vitals |
| Largest Contentful Paint | < 2.5s | Web Vitals |
| Cumulative Layout Shift | < 0.1 | Web Vitals |
| Total Bundle Size (gzipped) | < 200KB | Bundle Analyzer |

---

## Dependencies Summary

### Production Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "html2canvas": "^1.4.0",
  "lucide-react": "^0.300.0",
  "date-fns": "^3.0.0"
}
```

### Development Dependencies
```json
{
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
```

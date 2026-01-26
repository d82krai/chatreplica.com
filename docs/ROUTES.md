# ChatReplica.com — Routes & Navigation

## Route Map

```
chatreplica.com
├── /                    Landing Page
├── /whatsapp            WhatsApp Fake Chat Generator
├── /facebook            Facebook Messenger Fake Chat Generator
├── /instagram           Instagram DM Fake Chat Generator
├── /twitter             X (Twitter) DM Fake Chat Generator
├── /sitemap.xml         Auto-generated sitemap
└── /robots.txt          Auto-generated robots.txt
```

---

## Route Details

### `/` — Landing Page

| Attribute | Value |
|---|---|
| Page Type | Marketing / Landing |
| Component | `src/app/page.tsx` |
| Title | ChatReplica - Free Fake Chat Generator \| WhatsApp, Messenger, Instagram & X |
| H1 | Generate Realistic Fake Chat Screenshots |
| Content | Hero, Platform Cards, How It Works, Features, FAQ, Disclaimer, Footer |
| Internal Links | Links to `/whatsapp`, `/facebook`, `/instagram`, `/twitter` |
| Schema | WebApplication, FAQPage |
| Priority (sitemap) | 1.0 |

---

### `/whatsapp` — WhatsApp Generator

| Attribute | Value |
|---|---|
| Page Type | Tool / Generator |
| Component | `src/app/whatsapp/page.tsx` |
| Title | Free WhatsApp Fake Chat Generator - Create Realistic Screenshots \| ChatReplica |
| H1 | WhatsApp Fake Chat Generator |
| Content | Generator (Editor + Preview), SEO Content Section, Disclaimer |
| Internal Links | Navbar links to all pages, "Try other generators" section |
| Schema | WebApplication, BreadcrumbList |
| Priority (sitemap) | 0.9 |
| Canonical | `https://chatreplica.com/whatsapp` |

**Breadcrumb:** Home → WhatsApp Fake Chat Generator

---

### `/facebook` — Facebook Messenger Generator

| Attribute | Value |
|---|---|
| Page Type | Tool / Generator |
| Component | `src/app/facebook/page.tsx` |
| Title | Free Facebook Messenger Fake Chat Generator - Create Screenshots \| ChatReplica |
| H1 | Facebook Messenger Fake Chat Generator |
| Content | Generator (Editor + Preview), SEO Content Section, Disclaimer |
| Internal Links | Navbar links to all pages, "Try other generators" section |
| Schema | WebApplication, BreadcrumbList |
| Priority (sitemap) | 0.9 |
| Canonical | `https://chatreplica.com/facebook` |

**Breadcrumb:** Home → Facebook Messenger Fake Chat Generator

---

### `/instagram` — Instagram DM Generator

| Attribute | Value |
|---|---|
| Page Type | Tool / Generator |
| Component | `src/app/instagram/page.tsx` |
| Title | Free Instagram DM Fake Chat Generator - Create DM Screenshots \| ChatReplica |
| H1 | Instagram DM Fake Chat Generator |
| Content | Generator (Editor + Preview), SEO Content Section, Disclaimer |
| Internal Links | Navbar links to all pages, "Try other generators" section |
| Schema | WebApplication, BreadcrumbList |
| Priority (sitemap) | 0.9 |
| Canonical | `https://chatreplica.com/instagram` |

**Breadcrumb:** Home → Instagram DM Fake Chat Generator

---

### `/twitter` — X (Twitter) DM Generator

| Attribute | Value |
|---|---|
| Page Type | Tool / Generator |
| Component | `src/app/twitter/page.tsx` |
| Title | Free X (Twitter) DM Fake Chat Generator - Create DM Screenshots \| ChatReplica |
| H1 | X (Twitter) DM Fake Chat Generator |
| Content | Generator (Editor + Preview), SEO Content Section, Disclaimer |
| Internal Links | Navbar links to all pages, "Try other generators" section |
| Schema | WebApplication, BreadcrumbList |
| Priority (sitemap) | 0.9 |
| Canonical | `https://chatreplica.com/twitter` |

**Breadcrumb:** Home → X (Twitter) DM Fake Chat Generator

---

## Navigation Structure

### Primary Navigation (Navbar)

```
Desktop:
┌─────────────────────────────────────────────────────────────┐
│  ChatReplica    │  WhatsApp  │  Messenger  │  Instagram  │  X  │
└─────────────────────────────────────────────────────────────┘

Mobile:
┌─────────────────────────────────┐
│  ChatReplica           [☰]     │
└─────────────────────────────────┘
         ↓ (on click)
┌─────────────────────────────────┐
│  WhatsApp Generator        →   │
│  Messenger Generator       →   │
│  Instagram Generator       →   │
│  X (Twitter) Generator     →   │
└─────────────────────────────────┘
```

**Active State:**
- Current page link has: bold text, platform color underline (3px bottom border)
- Example: on `/whatsapp`, the "WhatsApp" link is bold with green underline

**Nav Items:**
| Label | Route | Icon | Color |
|---|---|---|---|
| WhatsApp | `/whatsapp` | WhatsApp icon | #25D366 |
| Messenger | `/facebook` | Messenger icon | #0084FF |
| Instagram | `/instagram` | Instagram icon | Gradient |
| X | `/twitter` | X icon | #000000 |

---

### Footer Navigation

```
┌──────────────────────────────────────────────────────┐
│                    ChatReplica                        │
│  Free Fake Chat Screenshot Generator                 │
│                                                      │
│  Generators             Company (Future)             │
│  ├── WhatsApp            ├── About                   │
│  ├── Facebook Messenger  ├── Privacy Policy           │
│  ├── Instagram DMs       ├── Terms of Service         │
│  └── X (Twitter) DMs     └── Contact                  │
│                                                      │
│  ────────────────────────────────────────────────     │
│  © 2025 ChatReplica.com. All rights reserved.        │
│  Not affiliated with WhatsApp, Meta, Instagram, or X.│
└──────────────────────────────────────────────────────┘
```

---

### Internal Linking Strategy

**From Landing Page:**
- Hero section: 4 CTA buttons → each generator page
- Platform Cards: 4 cards → each generator page
- How It Works: mentions all platforms
- Footer: links to all pages

**From Each Generator Page:**
- Navbar: links to all other pages
- "Try Other Generators" section (below SEO content):
  ```
  ┌──────────────────────────────────────────┐
  │  Try Our Other Generators                 │
  │  ┌──────┐ ┌──────┐ ┌──────┐             │
  │  │Msgr  │ │Insta │ │ X    │             │
  │  │      │ │      │ │      │             │
  │  └──────┘ └──────┘ └──────┘             │
  └──────────────────────────────────────────┘
  ```
  Shows 3 cards for the OTHER platforms (excludes current)
- Footer: links to all pages

---

## URL Design Principles

1. **Clean, readable URLs** — no query parameters, no hash fragments
2. **Lowercase only** — all routes are lowercase
3. **No trailing slashes** — Next.js handles this by default
4. **Descriptive** — URL clearly indicates the content (/whatsapp, not /gen?p=wa)
5. **Short** — one segment deep for all generator pages
6. **Canonical** — each page has exactly one canonical URL

---

## Future Routes (v2+)

```
/about                  About page
/privacy                Privacy Policy
/terms                  Terms of Service
/contact                Contact form
/blog                   Blog listing
/blog/[slug]            Individual blog post
/telegram               Telegram generator
/imessage               iMessage generator
/signal                 Signal generator
```

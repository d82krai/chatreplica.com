# ChatReplica.com — Architecture & Project Structure

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser (Client)                      │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                   Next.js App Router                  │    │
│  │                                                       │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐           │    │
│  │  │ Landing  │  │Generator │  │ Shared   │           │    │
│  │  │  Page    │  │  Pages   │  │Components│           │    │
│  │  └──────────┘  └────┬─────┘  └──────────┘           │    │
│  │                      │                                │    │
│  │              ┌───────┴───────┐                        │    │
│  │              │               │                        │    │
│  │        ┌─────┴─────┐  ┌─────┴─────┐                 │    │
│  │        │  Editor    │  │  Preview   │                 │    │
│  │        │  Panel     │  │  Panel     │                 │    │
│  │        └───────────┘  └─────┬─────┘                 │    │
│  │                              │                        │    │
│  │                       ┌──────┴──────┐                │    │
│  │                       │ html2canvas  │                │    │
│  │                       │ Screenshot   │                │    │
│  │                       └─────────────┘                │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │FileReader│  │URL.create│  │  Canvas   │                  │
│  │  API     │  │ObjectURL │  │  API      │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

**Key architectural principle:** Everything runs in the browser. No backend, no database, no API calls. User uploads and chat data exist only in browser memory and are lost on page refresh.

---

## Project Directory Structure

```
chatreplica.com/
├── docs/                              # Project documentation
│   ├── PRD.md                         # Product Requirements Document
│   ├── TECH-STACK.md                  # Technology stack details
│   ├── ARCHITECTURE.md                # This file
│   ├── UI-SPECIFICATIONS.md           # Platform-specific UI details
│   ├── SEO-STRATEGY.md                # SEO implementation guide
│   ├── FEATURES.md                    # Feature specifications
│   ├── ROUTES.md                      # Page routes and navigation
│   └── DEPLOYMENT.md                  # Build and deployment guide
│
├── src/
│   ├── app/                           # Next.js App Router pages
│   │   ├── layout.tsx                 # Root layout (nav, footer, disclaimer)
│   │   ├── page.tsx                   # Landing page (/)
│   │   ├── globals.css                # Global styles + Tailwind directives
│   │   ├── whatsapp/
│   │   │   └── page.tsx               # WhatsApp generator (/whatsapp)
│   │   ├── facebook/
│   │   │   └── page.tsx               # Facebook generator (/facebook)
│   │   ├── instagram/
│   │   │   └── page.tsx               # Instagram generator (/instagram)
│   │   ├── twitter/
│   │   │   └── page.tsx               # X/Twitter generator (/twitter)
│   │   ├── sitemap.ts                 # Auto-generated sitemap.xml
│   │   └── robots.ts                  # Auto-generated robots.txt
│   │
│   ├── components/
│   │   ├── landing/                   # Landing page sections
│   │   │   ├── Hero.tsx               # Hero section with CTAs
│   │   │   ├── PlatformCards.tsx       # 4 platform feature cards
│   │   │   ├── HowItWorks.tsx         # 3-step guide section
│   │   │   ├── Features.tsx           # Feature badges grid
│   │   │   └── FAQ.tsx                # FAQ accordion with schema
│   │   │
│   │   ├── chat/                      # Shared editor components
│   │   │   ├── ChatEditor.tsx         # Main editor panel container
│   │   │   ├── ProfileSetup.tsx       # Sender/receiver name + photo
│   │   │   ├── ProfileUploader.tsx    # Image upload with circular preview
│   │   │   ├── MessageComposer.tsx    # New message input form
│   │   │   ├── MessageList.tsx        # List of added messages (reorder/edit/delete)
│   │   │   ├── MessageItem.tsx        # Single message row in editor
│   │   │   ├── TimeEditor.tsx         # Date-time picker for messages
│   │   │   ├── StatusSelector.tsx     # Read receipt status dropdown
│   │   │   └── ScreenshotButton.tsx   # Download/capture trigger
│   │   │
│   │   ├── previews/                  # Platform-specific preview UIs
│   │   │   ├── WhatsAppPreview.tsx    # WhatsApp chat UI replica
│   │   │   ├── FacebookPreview.tsx    # Facebook Messenger UI replica
│   │   │   ├── InstagramPreview.tsx   # Instagram DM UI replica
│   │   │   ├── TwitterPreview.tsx     # X/Twitter DM UI replica
│   │   │   ├── PhoneFrame.tsx         # Optional iPhone-style frame wrapper
│   │   │   └── StatusBar.tsx          # Phone status bar (time, signal, battery)
│   │   │
│   │   ├── shared/                    # Shared layout components
│   │   │   ├── Navbar.tsx             # Top navigation bar
│   │   │   ├── Footer.tsx             # Site footer with links
│   │   │   ├── Disclaimer.tsx         # Disclaimer banner component
│   │   │   └── GeneratorLayout.tsx    # Two-panel layout wrapper
│   │   │
│   │   └── ui/                        # Reusable UI primitives
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       ├── Toggle.tsx
│   │       └── Card.tsx
│   │
│   ├── lib/                           # Utilities and types
│   │   ├── types.ts                   # Shared TypeScript interfaces
│   │   ├── utils.ts                   # Helper functions
│   │   ├── time.ts                    # Time formatting utilities
│   │   ├── screenshot.ts             # Screenshot capture logic
│   │   └── seo.ts                     # SEO metadata generators
│   │
│   ├── hooks/                         # Custom React hooks
│   │   ├── useChatState.ts           # Chat state management hook
│   │   ├── useImageUpload.ts         # Image upload handler hook
│   │   └── useScreenshot.ts          # Screenshot capture hook
│   │
│   └── styles/                        # Platform-specific CSS modules
│       ├── whatsapp.module.css        # WhatsApp-specific styles
│       ├── facebook.module.css        # Facebook-specific styles
│       ├── instagram.module.css       # Instagram-specific styles
│       └── twitter.module.css         # X/Twitter-specific styles
│
├── public/                            # Static assets
│   ├── og/                            # Open Graph images (1200x630)
│   │   ├── og-home.png
│   │   ├── og-whatsapp.png
│   │   ├── og-facebook.png
│   │   ├── og-instagram.png
│   │   └── og-twitter.png
│   ├── default-avatar.png            # Default user avatar placeholder
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── manifest.json                 # Web app manifest
│
├── .env.local                         # Environment variables (optional)
├── .eslintrc.json                     # ESLint configuration
├── .prettierrc                        # Prettier configuration
├── next.config.js                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript configuration
├── postcss.config.js                  # PostCSS configuration
├── package.json
└── README.md
```

---

## Component Architecture

### Component Hierarchy

```
RootLayout
├── Navbar
├── Page Content
│   ├── Landing Page (/)
│   │   ├── Hero
│   │   ├── PlatformCards
│   │   ├── HowItWorks
│   │   ├── Features
│   │   └── FAQ
│   │
│   └── Generator Page (/whatsapp, /facebook, /instagram, /twitter)
│       └── GeneratorLayout
│           ├── ChatEditor (Left Panel)
│           │   ├── ProfileSetup
│           │   │   ├── ProfileUploader (sender)
│           │   │   └── ProfileUploader (receiver)
│           │   ├── MessageComposer
│           │   │   ├── StatusSelector
│           │   │   └── TimeEditor
│           │   ├── MessageList
│           │   │   └── MessageItem (× n)
│           │   └── ScreenshotButton
│           │
│           └── Preview Panel (Right Panel)
│               └── PhoneFrame (optional)
│                   └── StatusBar
│                   └── [Platform]Preview
│                       ├── ChatHeader
│                       ├── MessagesArea
│                       │   ├── DateDivider
│                       │   ├── ReceivedBubble (× n)
│                       │   └── SentBubble (× n)
│                       └── InputBar
│
├── Disclaimer
└── Footer
```

---

## Data Flow

### State Management Pattern

Each generator page manages its own state using `useReducer`:

```
User Action → Dispatch Action → Reducer → New State → Re-render Preview
```

```typescript
// State flows from parent to children via props
GeneratorPage (owns state via useChatState hook)
├── ChatEditor   ← receives state + dispatch functions
└── Preview      ← receives state (read-only)
```

### Image Upload Flow

```
User clicks upload
  → <input type="file" accept="image/*">
  → FileReader.readAsDataURL(file)
  → base64 string stored in state
  → Rendered as <img src={base64}> in both editor and preview
  → Compatible with html2canvas (no CORS issues)
```

### Screenshot Capture Flow

```
User clicks "Download Screenshot"
  → Get reference to preview container (useRef)
  → html2canvas(previewRef.current, { scale: 2 })
  → Canvas.toDataURL('image/png')
  → Create <a> element with download attribute
  → Trigger click → File downloaded
```

---

## Key Design Decisions

### 1. No Backend Required
All features are achievable client-side. This eliminates hosting costs, data privacy concerns, and scaling issues.

### 2. CSS Modules for Platform Styles
Platform-specific styles are complex and deeply nested. CSS Modules provide scoping without the verbosity of Tailwind for complex selectors like `.bubble:last-child::after`.

### 3. Separate Pages per Platform
Each platform has its own route for SEO purposes. This allows unique titles, descriptions, and structured data per page, maximizing organic search potential.

### 4. `useReducer` over `useState`
Chat state involves multiple related operations (add, edit, delete, reorder messages, update profiles). `useReducer` centralizes this logic and makes state transitions predictable.

### 5. html2canvas over Server-Side Rendering
Client-side screenshot capture avoids the need for a headless browser server (Puppeteer/Playwright), keeping the architecture simple and free.

### 6. Base64 Images over Object URLs
While `URL.createObjectURL` is more performant, base64 strings are required for html2canvas compatibility. The small performance trade-off is acceptable for typical use (< 10 images per session).

---

## Module Dependencies

```
app/[platform]/page.tsx
  → components/shared/GeneratorLayout.tsx
    → components/chat/ChatEditor.tsx
      → components/chat/ProfileSetup.tsx
      → components/chat/MessageComposer.tsx
      → components/chat/MessageList.tsx
      → components/chat/ScreenshotButton.tsx
    → components/previews/[Platform]Preview.tsx
      → components/previews/PhoneFrame.tsx
      → components/previews/StatusBar.tsx
  → hooks/useChatState.ts
    → lib/types.ts
    → lib/time.ts
  → hooks/useScreenshot.ts
    → lib/screenshot.ts
  → lib/seo.ts
```

---

## Responsive Layout Strategy

### Desktop (≥1024px)
```
┌──────────────────────────────────────────┐
│ Navbar                                    │
├───────────────┬──────────────────────────┤
│ Editor (40%)  │ Preview (60%)            │
│ Scrollable    │ Centered, fixed aspect   │
├───────────────┴──────────────────────────┤
│ SEO Content                               │
├──────────────────────────────────────────┤
│ Disclaimer                                │
├──────────────────────────────────────────┤
│ Footer                                    │
└──────────────────────────────────────────┘
```

### Mobile (<768px)
```
┌──────────────────┐
│ Navbar            │
├──────────────────┤
│ [Edit] [Preview] │  ← Toggle tabs
├──────────────────┤
│                  │
│ Active Panel     │
│ (full width)     │
│                  │
├──────────────────┤
│ SEO Content      │
├──────────────────┤
│ Disclaimer       │
├──────────────────┤
│ Footer           │
└──────────────────┘
```

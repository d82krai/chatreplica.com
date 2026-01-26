# ChatReplica.com — UI Specifications

## Overview

Each platform generator must replicate the **exact visual appearance** of the target messaging platform. This document details the pixel-level specifications for each platform's chat UI.

---

## Common Elements (All Platforms)

### Phone Frame (Optional Toggle)

```
Dimensions: 375px × 812px (iPhone X/11/12 ratio)
Border radius: 40px
Border: 8px solid #1a1a1a
Background: #000
Inner border radius: 32px
Notch: centered, 150px × 30px, border-radius 15px (for iPhone style)
```

### Status Bar (Top of Phone)

```
Height: 44px
Background: matches platform header color
Content:
  Left: "9:41" (default time, editable)
  Center: notch area (if frame enabled)
  Right: signal bars (4 bars), WiFi icon, battery icon (with percentage)
Font: SF Pro / system-ui, 12px, semibold
Color: white or black (depends on platform header)
```

---

## WhatsApp UI Specification

### Reference: WhatsApp for iOS/Android (2024-2025 design)

### Color Palette
```css
--wa-dark-green: #075E54;       /* Header background */
--wa-teal: #128C7E;              /* Secondary green */
--wa-light-green: #25D366;       /* CTA / online indicator */
--wa-chat-bg: #ECE5DD;           /* Chat background (light mode) */
--wa-sent-bubble: #D9FDD3;       /* Sent message bubble */
--wa-received-bubble: #FFFFFF;   /* Received message bubble */
--wa-blue-tick: #53BDEB;         /* Read receipt blue */
--wa-text-primary: #111B21;      /* Primary text */
--wa-text-secondary: #667781;    /* Timestamp, secondary text */
--wa-divider-bg: rgba(225, 218, 208, 0.88); /* Date divider background */
```

### Chat Header
```
Height: 56px
Background: var(--wa-dark-green)
Padding: 0 16px

Layout (left to right):
  ← Back arrow: white, 24px
  Gap: 8px
  Receiver avatar: 40px circle, border: none
  Gap: 12px
  Name block:
    Name: white, 16px, semibold, single line, ellipsis overflow
    Status: #94CFC5 (light green-gray), 13px
      Options: "online" | "last seen today at HH:MM" | "typing..."
  Spacer (flex: 1)
  Video call icon: white, 22px
  Gap: 20px
  Phone call icon: white, 22px
  Gap: 20px
  Three-dot menu icon: white, 22px
```

### Chat Background
```
Background color: var(--wa-chat-bg) (#ECE5DD)
Background pattern: WhatsApp doodle pattern
  → Use a subtle repeating SVG or CSS background with chat-related icons
  → Opacity: 0.04 (very subtle)
  → Color: #8A7F72
Padding: 8px horizontal, 4px vertical
```

### Message Bubbles — Received (Left)
```
Max width: 75% of chat area
Background: var(--wa-received-bubble) (#FFFFFF)
Border radius: 0px 8px 8px 8px (tail on top-left for first message)
  → Subsequent messages in group: 8px all corners
Padding: 6px 8px 6px 9px
Margin: 2px 0 (within group), 8px 0 (between groups)
Box shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13)

Text:
  Font: 14.2px, normal weight
  Color: var(--wa-text-primary) (#111B21)
  Line height: 19px

Timestamp (bottom-right inside bubble):
  Font: 11px
  Color: var(--wa-text-secondary) (#667781)
  Margin-left: 12px (inline with last line of text)
  Format: "HH:MM" (24h) or "h:mm a" (12h)

Tail (first message in group):
  CSS pseudo-element, triangular shape on top-left
  Color matches bubble background
  Size: ~8px
```

### Message Bubbles — Sent (Right)
```
Max width: 75% of chat area
Background: var(--wa-sent-bubble) (#D9FDD3)
Border radius: 8px 0px 8px 8px (tail on top-right for first message)
  → Subsequent messages: 8px all corners
Padding: 6px 8px 6px 9px
Margin: same as received
Box shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13)
Alignment: flex-end (right-aligned)

Text: same as received

Timestamp + ticks (bottom-right inside bubble):
  Time: 11px, var(--wa-text-secondary)
  Gap: 3px
  Ticks:
    Single tick (sent): gray (#667781), ~15px wide
    Double tick (delivered): gray (#667781), ~18px wide
    Double tick (read): blue (#53BDEB), ~18px wide
  Ticks are inline SVG, positioned after timestamp
```

### Tick SVG Specifications
```
Single tick (✓):
  viewBox="0 0 16 11"
  Path: single checkmark stroke
  stroke-width: 1.5

Double tick (✓✓):
  viewBox="0 0 18 11"
  Path: two overlapping checkmarks
  stroke-width: 1.5

Colors:
  Sent/Delivered: #667781 (gray)
  Read: #53BDEB (blue)
```

### Date Divider
```
Container: centered, full width
Pill:
  Background: var(--wa-divider-bg)
  Padding: 5px 12px
  Border radius: 7px
  Font: 12.5px, normal
  Color: var(--wa-text-primary)
  Text: "TODAY" or "JANUARY 25, 2025" (uppercase)
  Box shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13)
Margin: 12px 0
```

### Input Bar (Bottom)
```
Height: 52px
Background: #F0F2F5
Padding: 5px 8px

Layout (left to right):
  Emoji icon: 😊 (#54656F), 24px
  Gap: 4px
  Attachment icon: 📎 (#54656F), 24px — rotated 45°
  Gap: 8px
  Text input:
    Background: white
    Border radius: 21px
    Padding: 9px 12px
    Placeholder: "Type a message"
    Font: 15px, #667781
    Flex: 1
  Gap: 8px
  Camera icon: 📷 (#54656F), 24px (shown when input empty)
  — OR —
  Send button: green circle (#00A884), 42px, white arrow icon
    (shown when input has text)
```

### Encryption Banner (Optional)
```
Centered text below date divider:
"🔒 Messages and calls are end-to-end encrypted. No one outside of this chat,
 not even WhatsApp, can read or listen to them. Tap to learn more."
Font: 12px, centered
Color: #8696A0
Background: rgba(255, 249, 195, 0.6)
Border radius: 6px
Padding: 6px 16px
Max width: 85%
```

---

## Facebook Messenger UI Specification

### Reference: Facebook Messenger iOS/Android (2024-2025 design)

### Color Palette
```css
--fb-blue: #0084FF;              /* Primary blue / sent bubble */
--fb-blue-gradient-start: #0084FF;
--fb-blue-gradient-end: #0099FF;
--fb-received-bubble: #E4E6EB;   /* Received message background */
--fb-background: #FFFFFF;         /* Chat background */
--fb-text-primary: #050505;       /* Primary text */
--fb-text-secondary: #65676B;     /* Secondary / timestamp text */
--fb-header-bg: #FFFFFF;          /* Header background */
--fb-active-green: #31A24C;       /* Online indicator */
--fb-input-bg: #F0F2F5;           /* Input field background */
```

### Chat Header
```
Height: 60px
Background: var(--fb-header-bg) (white)
Border bottom: 1px solid #E4E6EB
Padding: 0 16px

Layout (left to right):
  ← Back arrow: blue (#0084FF), 24px
  Gap: 12px
  Receiver avatar: 36px circle
    Online dot: 10px green circle, positioned bottom-right of avatar
      Border: 2px solid white
  Gap: 10px
  Name block:
    Name: black (#050505), 15px, bold (font-weight: 700)
    Status: gray (#65676B), 12px
      Options: "Active now" (with green dot) | "Active Xh ago" | "Offline"
  Spacer (flex: 1)
  Phone icon: blue (#0084FF), 22px
  Gap: 20px
  Video icon: blue (#0084FF), 22px
  Gap: 20px
  Info (i) icon: blue (#0084FF), 22px — circled
```

### Chat Background
```
Background: pure white (#FFFFFF)
No pattern, no texture
Padding: 8px 12px
```

### Message Bubbles — Received (Left)
```
Max width: 70% of chat area
Background: var(--fb-received-bubble) (#E4E6EB)
Border radius: 18px (all corners — pill shape)
  → First in group: 18px
  → Middle in group: 18px top-right/bottom-right, 4px top-left/bottom-left
  → Last in group: 18px top-right/bottom-right/bottom-left, 4px top-left
Padding: 8px 12px
Margin: 2px 0 (within group), 8px 0 (between groups)

Text:
  Font: 15px, normal weight
  Color: var(--fb-text-primary) (#050505)
  Line height: 20px

Avatar (receiver):
  28px circle, shown only at the bottom-left of last message in group
  Margin-right: 8px
  Vertical alignment: bottom of last bubble
```

### Message Bubbles — Sent (Right)
```
Max width: 70% of chat area
Background: linear-gradient(to bottom right, #0084FF, #0099FF)
Border radius: 18px (pill shape, mirrored from received)
  → First in group: 18px
  → Middle: 18px top-left/bottom-left, 4px top-right/bottom-right
  → Last: 18px top-left/bottom-left/bottom-right, 4px top-right
Padding: 8px 12px
Alignment: flex-end

Text:
  Font: 15px, normal weight
  Color: white (#FFFFFF)
  Line height: 20px
```

### Read Receipts (Below Last Sent Message)
```
Position: right-aligned, below bubble, margin-top: 2px

States:
  Sent: empty circle outline (⭕), gray, 12px
  Delivered: filled circle with white checkmark, gray (#65676B), 14px
  Seen: receiver's avatar (16px circle)

Font: 11px, gray (#65676B), if text-based
```

### Timestamps (Between Groups)
```
Position: centered
Font: 11px, gray (#65676B)
Format: "10:42 AM" or "Thu 10:42 AM"
Margin: 16px 0
```

### Input Bar (Bottom)
```
Height: 52px
Background: white
Border top: 1px solid #E4E6EB
Padding: 8px 12px

Layout (left to right):
  Grid/apps icon: blue (#0084FF), 24px (4-dot grid)
  Gap: 8px
  Camera icon: blue (#0084FF), 24px
  Gap: 8px
  Text input:
    Background: var(--fb-input-bg) (#F0F2F5)
    Border radius: 20px
    Padding: 8px 36px 8px 12px
    Placeholder: "Aa"
    Font: 15px
    Flex: 1
    Emoji icon inside input: right side, 22px
  Gap: 8px
  👍 Thumbs-up icon: blue (#0084FF), 24px (when input empty)
  — OR —
  Send icon: blue arrow (#0084FF), 24px (when input has text)
```

---

## Instagram DM UI Specification

### Reference: Instagram Direct Messages iOS/Android (2024-2025 design)

### Color Palette
```css
--ig-blue: #3797F0;              /* Sent bubble / primary action */
--ig-received-bubble: #EFEFEF;   /* Received message background */
--ig-background: #FFFFFF;         /* Chat background */
--ig-text-primary: #262626;       /* Primary text */
--ig-text-secondary: #8E8E8E;     /* Secondary / timestamp text */
--ig-border: #DBDBDB;             /* Border color */
--ig-gradient-1: #833AB4;         /* Story ring gradient */
--ig-gradient-2: #FD1D1D;
--ig-gradient-3: #FCAF45;
```

### Chat Header
```
Height: 54px
Background: white (#FFFFFF)
Border bottom: 1px solid var(--ig-border) (#DBDBDB)
Padding: 0 16px

Layout (left to right):
  ← Back arrow (chevron): black (#262626), 24px
  Gap: 12px
  Receiver avatar: 32px circle
    Optional: gradient story ring (3px, conic-gradient)
  Gap: 10px
  Name block:
    Name: black (#262626), 14px, font-weight: 600
    Status: gray (#8E8E8E), 12px
      Options: "Active now" (green dot) | "Active Xh ago"
  Spacer (flex: 1)
  Phone icon: black (#262626), 22px
  Gap: 20px
  Video icon: black (#262626), 22px
```

### Chat Background
```
Background: white (#FFFFFF)
No pattern
Padding: 8px 16px
```

### Message Bubbles — Received (Left)
```
Max width: 70% of chat area
Background: var(--ig-received-bubble) (#EFEFEF)
Border radius: 22px
  → Grouping: bottom-left adjusts to 4px for middle/first messages
Padding: 8px 16px
Margin: 2px 0 (within group), 8px 0 (between groups)

Text:
  Font: 14px, normal weight
  Color: var(--ig-text-primary) (#262626)
  Line height: 18px

Avatar:
  24px circle at bottom-left of last message in group
  Margin-right: 8px
```

### Message Bubbles — Sent (Right)
```
Max width: 70% of chat area
Background: var(--ig-blue) (#3797F0)
Border radius: 22px
  → Grouping: bottom-right adjusts to 4px for middle/first messages
Padding: 8px 16px
Alignment: flex-end

Text:
  Font: 14px, normal weight
  Color: white (#FFFFFF)
  Line height: 18px
```

### Read Receipts
```
Position: right-aligned, below last sent message
Font: 11px, gray (#8E8E8E)
Text: "Seen" (when read)
Margin-top: 4px
```

### Timestamps
```
Position: centered between message groups
Font: 11px, gray (#8E8E8E)
Format: "Today 10:42 AM" or "Jan 25, 10:42 AM"
Margin: 16px 0
```

### Reactions (Optional)
```
Position: below the bubble, overlapping slightly
Background: white, rounded pill
Border: 1px solid #EFEFEF
Padding: 2px 6px
Content: emoji (❤️, 😂, etc.)
Font: 14px
Box shadow: 0 1px 3px rgba(0,0,0,0.1)
```

### Input Bar (Bottom)
```
Height: 50px
Background: white
Border top: 1px solid var(--ig-border) (#DBDBDB)
Padding: 8px 16px

Layout (left to right):
  Camera icon: inside blue circle (bg: #3797F0, icon: white), 32px
  Gap: 12px
  Text input:
    Background: transparent
    Border: 1px solid var(--ig-border)
    Border radius: 22px
    Padding: 8px 16px
    Placeholder: "Message..."
    Font: 14px
    Flex: 1
    Right side inside input:
      Sticker icon, 20px, gap: 12px
      Emoji icon, 20px, gap: 12px
      GIF text badge, 12px
  Gap: 12px
  Microphone icon: black, 24px (when input empty)
```

---

## X (Twitter) DM UI Specification

### Reference: X (Twitter) Direct Messages iOS/Android (2024-2025 design)

### Color Palette
```css
--x-blue: #1D9BF0;              /* Sent bubble / primary blue */
--x-received-bubble: #EFF3F4;   /* Received message background */
--x-background: #FFFFFF;         /* Chat background */
--x-text-primary: #0F1419;       /* Primary text */
--x-text-secondary: #536471;     /* Secondary / timestamp text */
--x-border: #EFF3F4;             /* Border color */
--x-black: #000000;              /* Header icons */
```

### Chat Header
```
Height: 54px
Background: white (#FFFFFF)
Border bottom: 1px solid var(--x-border) (#EFF3F4)
Padding: 0 16px

Layout (left to right):
  ← Back arrow: black (#0F1419), 24px
  Gap: 16px
  Receiver avatar: 32px circle
  Gap: 10px
  Name block:
    Name: black (#0F1419), 15px, font-weight: 700
    Handle: gray (#536471), 13px, "@username"
  Spacer (flex: 1)
  Info (i) icon: black (#0F1419), 22px — circled
```

### Chat Background
```
Background: white (#FFFFFF)
No pattern
Padding: 8px 16px
```

### Message Bubbles — Received (Left)
```
Max width: 70% of chat area
Background: var(--x-received-bubble) (#EFF3F4)
Border radius: 16px 16px 16px 4px (first message)
  → Middle: 4px 16px 16px 4px
  → Last: 4px 16px 16px 16px
Padding: 12px 16px
Margin: 2px 0 (within group), 8px 0 (between groups)
No tail, no shadow

Text:
  Font: 15px, normal weight
  Color: var(--x-text-primary) (#0F1419)
  Line height: 20px
```

### Message Bubbles — Sent (Right)
```
Max width: 70% of chat area
Background: var(--x-blue) (#1D9BF0)
Border radius: 16px 16px 4px 16px (first message)
  → Middle: 16px 4px 4px 16px
  → Last: 16px 4px 16px 16px
Padding: 12px 16px
Alignment: flex-end
No tail, no shadow

Text:
  Font: 15px, normal weight
  Color: white (#FFFFFF)
  Line height: 20px
```

### Read Receipts
```
Position: right-aligned, below last sent message
States:
  Sent: small gray checkmark, 12px
  Seen: small receiver avatar (16px circle) + "Seen" text
Font: 12px, gray (#536471)
Margin-top: 4px
```

### Timestamps
```
Position: centered between message groups
Font: 13px, gray (#536471)
Format: "10:42 AM" or "Jan 25, 2025, 10:42 AM"
Margin: 16px 0
```

### Reactions (Optional)
```
Position: below bubble
Background: white, pill shape
Border: 1px solid #EFF3F4
Padding: 2px 8px
Content: emoji + count
Font: 13px
```

### Input Bar (Bottom)
```
Height: 52px
Background: white
Border top: 1px solid var(--x-border) (#EFF3F4)
Padding: 8px 16px

Layout (left to right):
  Image icon: (#536471), 22px
  Gap: 16px
  GIF icon: (#536471), 22px
  Gap: 16px
  Emoji icon: (#536471), 22px
  Gap: 12px
  Text input:
    Background: transparent
    Border: 1px solid #CFD9DE
    Border radius: 20px
    Padding: 8px 16px
    Placeholder: "Start a new message"
    Font: 15px
    Flex: 1
  Gap: 12px
  Send button: blue (#1D9BF0) arrow icon, 22px (visible when text entered)
```

---

## Editor Panel UI Specification

### Layout
```
Width: 40% (desktop), 100% (mobile)
Background: #F8FAFC (light gray)
Border-right: 1px solid #E2E8F0 (desktop only)
Padding: 24px
Overflow-y: auto
```

### Profile Setup Section
```
Section heading: "Profiles", 16px, font-weight: 600, margin-bottom: 16px

Two profile cards side by side:

  ┌─────────────────────┐  ┌─────────────────────┐
  │  Sender              │  │  Receiver            │
  │  ┌──────┐            │  │  ┌──────┐            │
  │  │Avatar│  [Upload]  │  │  │Avatar│  [Upload]  │
  │  │ 64px │            │  │  │ 64px │            │
  │  └──────┘            │  │  └──────┘            │
  │  [Name input]        │  │  [Name input]        │
  │                      │  │  [Status dropdown]   │
  └─────────────────────┘  └─────────────────────┘

Avatar preview: 64px circle, border: 2px dashed #CBD5E1
Upload button: "Upload Photo" text link below avatar
Name input: full-width, standard text input
Status dropdown (receiver only): Online / Last Seen / Offline
```

### Message Composer Section
```
Section heading: "Add Message", 16px, font-weight: 600

┌──────────────────────────────────────────┐
│  [Sender ▼ / Receiver ▼]  toggle/select │
│  ┌──────────────────────────────────────┐│
│  │  Type your message...                ││
│  │  (textarea, 3 rows)                  ││
│  └──────────────────────────────────────┘│
│  Time: [01/25/2025] [10:42 AM]          │
│  Status: [Sent ▼] (sender messages only)│
│  [+ Add Message]  (primary button)      │
└──────────────────────────────────────────┘
```

### Message List Section
```
Section heading: "Messages (X)", 16px, font-weight: 600

Each message row:
┌──────────────────────────────────────────┐
│  ⠿  │ "Hey, how are you?"  │ 10:42 AM  │
│ drag │  Receiver             │ [✏️] [🗑️] │
└──────────────────────────────────────────┘

Drag handle: ⠿ icon, gray, cursor: grab
Message text: truncated at 30 chars with ellipsis
Sender indicator: "Sender" or "Receiver" label, small, colored
Time: gray, 12px
Edit button: pencil icon, 16px
Delete button: trash icon, 16px, red on hover
```

### Action Buttons
```
[Download Screenshot]  — primary button (platform color)
[Clear All Messages]   — secondary/outline button, red text
[Toggle Phone Frame]   — toggle switch with label
```

---

## Landing Page UI Specification

### Hero Section
```
Background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)
  Alternative: dark mesh gradient with subtle animated dots
Min height: 80vh (desktop), 70vh (mobile)
Padding: 80px 24px
Text align: center

Heading (H1):
  "Generate Realistic Fake Chat Screenshots"
  Font: 48px (desktop), 32px (mobile), font-weight: 800
  Color: white
  Max width: 800px, centered

Subtitle:
  "Create pixel-perfect dummy conversations for WhatsApp, Messenger,
   Instagram & X — free, instant, no sign-up required."
  Font: 18px (desktop), 16px (mobile)
  Color: rgba(255, 255, 255, 0.8)
  Max width: 600px, centered
  Margin-top: 16px

CTA Buttons (4, horizontal row on desktop, 2×2 grid on mobile):
  Each button:
    Padding: 14px 28px
    Border radius: 12px
    Font: 16px, font-weight: 600
    Icon + text
    Hover: slight scale(1.05) + shadow

  WhatsApp: bg #25D366, text white, icon: WhatsApp
  Messenger: bg #0084FF, text white, icon: Messenger
  Instagram: bg gradient(#833AB4, #FD1D1D, #FCAF45), text white, icon: Instagram
  X: bg #000000, text white, icon: X

  Gap: 16px
  Margin-top: 40px
```

### Platform Cards Section
```
Background: white
Padding: 80px 24px
Max width: 1200px, centered

Section heading (H2): "Choose Your Platform", centered, 36px, font-weight: 700

4 cards in grid:
  Desktop: 4 columns
  Tablet: 2 columns
  Mobile: 1 column
  Gap: 24px

Each card:
  Background: white
  Border: 1px solid #E5E7EB
  Border radius: 16px
  Padding: 32px 24px
  Hover: shadow-lg, border-color: platform color, translateY(-4px)
  Transition: all 0.3s ease

  Icon: 48px platform icon (colored)
  Title: platform name, 20px, bold
  Features: 3 bullet points, 14px, gray
  CTA: "Generate →" link, platform color, 14px, semibold
```

### How It Works Section
```
Background: #F9FAFB
Padding: 80px 24px

Section heading (H2): "How It Works", centered

3 steps horizontal (desktop), vertical (mobile):
  Step 1: 🎯 "Choose a Platform" — "Select WhatsApp, Messenger, Instagram, or X"
  Step 2: ✍️ "Customize Your Chat" — "Add messages, photos, and timestamps"
  Step 3: 📥 "Download Screenshot" — "Get a pixel-perfect PNG instantly"

Each step:
  Number circle: 48px, platform gradient bg, white text, 24px bold
  Title: 18px, bold
  Description: 14px, gray
  Connector line between steps (desktop: horizontal, mobile: vertical)
```

### Features Grid Section
```
Background: white
Padding: 80px 24px

Grid: 4 columns desktop, 2 columns mobile
Gap: 16px

Each badge:
  Background: #F3F4F6
  Border radius: 12px
  Padding: 20px
  Icon: 24px, colored
  Text: 14px, semibold

Badges:
  ✅ "No Sign-up Required"
  ✅ "100% Free Forever"
  ✅ "Pixel-Perfect UI"
  ✅ "Custom Timestamps"
  ✅ "Read Receipts"
  ✅ "Instant Download"
  ✅ "Mobile Responsive"
  ✅ "No Watermark"
```

### FAQ Section
```
Background: #F9FAFB
Padding: 80px 24px
Max width: 768px, centered

Section heading (H2): "Frequently Asked Questions"

Accordion style:
  Each FAQ item:
    Border bottom: 1px solid #E5E7EB
    Question: 16px, font-weight: 600, padding: 20px 0
    Plus/minus toggle icon on right
    Answer: 14px, gray (#6B7280), padding: 0 0 20px 0
    Transition: max-height 0.3s ease

6-8 FAQ items (see PRD for content)
```

---

## Responsive Breakpoints Summary

| Breakpoint | Designation | Layout Changes |
|---|---|---|
| ≥1280px | xl (large desktop) | Full two-panel, spacious padding |
| ≥1024px | lg (desktop) | Two-panel, standard padding |
| ≥768px | md (tablet) | Narrower two-panel or stacked |
| ≥640px | sm (large mobile) | Stacked, wider inputs |
| <640px | xs (mobile) | Single column, compact controls, toggle tabs |

---

## Animation & Transitions

```
Hover transitions: 0.2s ease-in-out (buttons, cards, icons)
Panel toggle (mobile): 0.3s ease slide
FAQ accordion: 0.3s ease max-height
Card hover lift: transform translateY(-4px), 0.3s ease
Button press: scale(0.98), 0.1s
New message added: fadeIn + slideUp, 0.2s
Message deleted: fadeOut + slideDown, 0.2s
```

---

## Typography Scale

```
H1: 48px / 32px (mobile), weight: 800, line-height: 1.1
H2: 36px / 28px (mobile), weight: 700, line-height: 1.2
H3: 24px / 20px (mobile), weight: 600, line-height: 1.3
H4: 18px / 16px (mobile), weight: 600, line-height: 1.4
Body: 16px / 15px, weight: 400, line-height: 1.6
Small: 14px / 13px, weight: 400, line-height: 1.5
Caption: 12px / 11px, weight: 400, line-height: 1.4

Font family: Inter (primary), system-ui, sans-serif (fallback)
```

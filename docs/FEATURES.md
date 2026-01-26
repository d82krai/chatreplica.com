# ChatReplica.com — Feature Specifications

## Overview

This document details every feature of ChatReplica with implementation specifics, edge cases, and behavior descriptions.

---

## 1. Profile Management

### 1.1 Sender Profile

**Fields:**
| Field | Type | Required | Default | Validation |
|---|---|---|---|---|
| Name | Text input | Yes | "You" | 1-30 characters |
| Avatar | Image upload | No | Default gray avatar | JPEG/PNG/WebP, max 5MB |

**Behavior:**
- Name is displayed in the editor panel only (WhatsApp and X don't show sender name in chat)
- Avatar appears in sent message read receipts (Facebook Messenger "Seen")
- Default avatar is a generic gray silhouette circle
- Uploading a new photo replaces the current one
- Photo is converted to base64 on upload for html2canvas compatibility

### 1.2 Receiver Profile

**Fields:**
| Field | Type | Required | Default | Validation |
|---|---|---|---|---|
| Name | Text input | Yes | "Contact" | 1-30 characters |
| Avatar | Image upload | No | Default gray avatar | JPEG/PNG/WebP, max 5MB |
| Status | Dropdown | Yes | "online" | online / last seen / offline |
| Last Seen Time | Time input | Conditional | Current time - 30min | Only when status = "last seen" |

**Behavior:**
- Name is displayed in the chat header of the preview
- Avatar appears in the chat header and next to received messages (platform-dependent)
- Status affects the subtitle text in the chat header:
  - Online: "online" (green indicator where applicable)
  - Last Seen: "last seen today at HH:MM" (WhatsApp) / "Active Xh ago" (others)
  - Offline: no status text or generic "Offline"

### 1.3 Image Upload Flow

```
1. User clicks upload area or "Upload Photo" button
2. Native file picker opens (accept="image/jpeg,image/png,image/webp")
3. File selected → validate type and size (max 5MB)
4. FileReader.readAsDataURL(file) → base64 string
5. Store base64 in state
6. Display circular preview (64px in editor, platform-specific size in preview)
7. "Remove" button appears to revert to default avatar
```

**Edge Cases:**
- File too large (>5MB): show error toast "Image must be under 5MB"
- Invalid file type: show error toast "Please upload a JPEG, PNG, or WebP image"
- Very large dimensions: no explicit resize needed (browser handles display scaling)

---

## 2. Message Management

### 2.1 Adding Messages

**Input Fields:**
| Field | Type | Default | Description |
|---|---|---|---|
| Message text | Textarea (3 rows) | Empty | The message content |
| Sender | Toggle (Sender/Receiver) | Sender | Who sent this message |
| Timestamp | DateTime picker | Auto-generated | When the message was sent |
| Status | Dropdown | "read" | Read receipt status (sender only) |

**Auto-Timestamp Logic:**
```typescript
function getNextTimestamp(messages: Message[]): Date {
  if (messages.length === 0) {
    // First message: current time minus 30 minutes
    return new Date(Date.now() - 30 * 60 * 1000);
  }

  const lastMessage = messages[messages.length - 1];
  const lastTime = new Date(lastMessage.timestamp);

  // Add 1-3 minutes randomly
  const minutesToAdd = Math.floor(Math.random() * 3) + 1;
  return new Date(lastTime.getTime() + minutesToAdd * 60 * 1000);
}
```

**Behavior:**
- Clicking "Add Message" appends the message to the list
- The message immediately appears in the preview
- Input fields reset after adding (except sender toggle retains last selection)
- Empty message text: button is disabled, cannot add
- Maximum messages: 50 (soft limit, show warning after 50)

### 2.2 Editing Messages

**Inline Edit:**
- Click the edit (pencil) icon on any message in the message list
- Message text becomes an editable input field
- Press Enter or click outside to save
- Press Escape to cancel

**Editable Fields:**
- Message text (inline)
- Timestamp (opens date-time picker)
- Status/read receipt (dropdown, sender messages only)
- Sender assignment (toggle Sender ↔ Receiver)

### 2.3 Deleting Messages

- Click the delete (trash) icon on any message
- Message is removed immediately (no confirmation dialog)
- Preview updates in real-time
- If all messages are deleted, preview shows empty chat state

### 2.4 Reordering Messages

**Drag and Drop:**
- Each message row has a drag handle (⠿ icon) on the left
- User can drag to reorder messages in the list
- Preview updates to reflect new order
- Timestamps are NOT automatically adjusted on reorder (manual adjustment only)

**Implementation:**
- Use HTML5 Drag and Drop API or a lightweight library
- Visual feedback: dragged item has shadow/opacity, drop target has highlight
- On mobile: use touch events for drag-and-drop

### 2.5 Clear All Messages

- "Clear All" button at the bottom of the message list
- Confirmation: "Are you sure? This will remove all messages." with OK/Cancel
- Clears all messages, preview shows empty state
- Profile settings are preserved

---

## 3. Read Receipts & Status Indicators

### 3.1 WhatsApp Read Receipts

| Status | Visual | Description |
|---|---|---|
| `sent` | ✓ (single gray tick) | Message sent to server |
| `delivered` | ✓✓ (double gray tick) | Message delivered to recipient's device |
| `read` | ✓✓ (double blue tick) | Message read by recipient |

**Implementation:**
```typescript
// WhatsApp tick component
type WhatsAppStatus = 'sent' | 'delivered' | 'read';

// Sent: single checkmark, color: #667781
// Delivered: double checkmark, color: #667781
// Read: double checkmark, color: #53BDEB
```

**Placement:** Inside the sent message bubble, bottom-right, after the timestamp.

### 3.2 Facebook Messenger Read Receipts

| Status | Visual | Description |
|---|---|---|
| `sent` | ○ (empty blue circle) | Message sent |
| `delivered` | ● ✓ (filled circle with check) | Message delivered |
| `read` | (mini avatar) | Message seen by recipient |

**Implementation:**
```typescript
type MessengerStatus = 'sent' | 'delivered' | 'read';

// Sent: empty circle outline, blue (#0084FF), 14px
// Delivered: filled circle with white checkmark, blue, 14px
// Read: receiver's avatar photo, 16px circle
```

**Placement:** Below the last sent message in a group, right-aligned.

### 3.3 Instagram Read Receipts

| Status | Visual | Description |
|---|---|---|
| `sent` | (no indicator) | Message sent (no visual) |
| `read` | "Seen" text | Message seen by recipient |

**Implementation:**
```typescript
type InstagramStatus = 'sent' | 'read';

// Sent: no visual indicator
// Read: "Seen" text, gray (#8E8E8E), 11px, below last sent message
```

**Placement:** Below the last sent message, right-aligned.

### 3.4 X (Twitter) Read Receipts

| Status | Visual | Description |
|---|---|---|
| `sent` | ✓ (gray checkmark) | Message sent |
| `read` | "Seen" or mini avatar | Message seen by recipient |

**Implementation:**
```typescript
type TwitterStatus = 'sent' | 'read';

// Sent: small gray checkmark, 12px
// Read: "Seen" text or small receiver avatar (16px)
```

**Placement:** Below the last sent message, right-aligned.

---

## 4. Timestamp System

### 4.1 Auto-Generation

```
First message:  current time - ~30 minutes
Each subsequent: previous time + random(1, 3) minutes
```

### 4.2 Display Format

| Platform | Time Format | Date Format |
|---|---|---|
| WhatsApp | "10:42 AM" (12h) or "10:42" (24h) | "TODAY" or "JANUARY 25, 2025" |
| Facebook | "10:42 AM" | "Thu 10:42 AM" or "Jan 25, 10:42 AM" |
| Instagram | "10:42 AM" | "Today 10:42 AM" or "Jan 25, 10:42 AM" |
| X/Twitter | "10:42 AM" | "10:42 AM" or "Jan 25, 2025, 10:42 AM" |

### 4.3 Date Dividers

- Shown when messages span different dates
- Also shown as the first element in the chat (date of first message)
- Format varies by platform (see above)
- Centered in chat area with platform-specific styling

### 4.4 Manual Override

- Click on any timestamp in the editor message list
- Opens a `<input type="datetime-local">` picker
- User selects new date/time
- Preview updates immediately
- Changing a timestamp does NOT auto-adjust subsequent messages

---

## 5. Screenshot Capture

### 5.1 Capture Settings

```typescript
const screenshotOptions = {
  scale: 2,                      // 2x for retina quality
  useCORS: true,                 // Handle cross-origin images
  allowTaint: false,
  backgroundColor: null,         // Transparent (phone frame shows)
  logging: false,                // No console logs
  width: previewWidth,           // Match preview container width
  height: previewHeight,         // Match preview container height
  windowWidth: previewWidth,
  windowHeight: previewHeight,
};
```

### 5.2 Capture Area

- **With phone frame:** Captures the entire phone frame div (including bezel)
- **Without phone frame:** Captures only the chat area (header + messages + input bar)
- The editor panel is NEVER included in the capture

### 5.3 Download

```typescript
function downloadScreenshot(canvas: HTMLCanvasElement, platform: string) {
  const link = document.createElement('a');
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  link.download = `chatreplica-${platform}-${date}.png`;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

### 5.4 Known Limitations

- SVG icons may need to be inlined (not external references) for html2canvas
- CSS gradients render correctly in most cases
- Custom fonts must be fully loaded before capture
- Cross-origin images must be base64 (already handled by our upload flow)
- Very long conversations may produce very tall screenshots

---

## 6. Phone Frame Toggle

### 6.1 Frame Options

| Option | Description |
|---|---|
| Frame On | iPhone-style rounded rectangle with notch, status bar visible |
| Frame Off | Just the chat UI (header + messages + input), no phone chrome |

### 6.2 Frame Dimensions

```css
.phone-frame {
  width: 375px;
  min-height: 667px;
  max-height: 812px;
  border-radius: 40px;
  border: 8px solid #1a1a1a;
  overflow: hidden;
  position: relative;
  background: #000;
}

.phone-frame-inner {
  border-radius: 32px;
  overflow: hidden;
  height: 100%;
}

.phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 30px;
  background: #1a1a1a;
  border-radius: 0 0 15px 15px;
  z-index: 10;
}
```

---

## 7. Mobile Responsiveness

### 7.1 Panel Toggle (Mobile)

On screens < 768px:

```
┌──────────────────────┐
│  [Edit]  [Preview]   │  ← Tab bar (sticky top)
├──────────────────────┤
│                      │
│  Active panel content│
│  (full width)        │
│                      │
└──────────────────────┘
```

- Two tabs: "Edit" and "Preview"
- Default: "Edit" tab is active
- Switching tabs shows/hides panels with a smooth transition
- Preview tab shows the chat preview at ~375px width, centered
- Tab bar is sticky (position: sticky, top: 0, z-index: 50)

### 7.2 Editor Adaptations (Mobile)

- Profile cards stack vertically (sender above receiver)
- Full-width inputs
- Larger touch targets (44px minimum)
- Message list uses swipe gestures for edit/delete (optional)
- "Add Message" button is full-width

### 7.3 Preview Adaptations (Mobile)

- Preview container is scrollable
- Phone frame scales to fit screen (max-width: 100%)
- "Download Screenshot" button is sticky at the bottom of the preview view

---

## 8. Disclaimer Component

### 8.1 Content

```
⚠️ Disclaimer: ChatReplica is designed purely for entertainment, educational,
and creative purposes. Do not use generated screenshots to deceive, defame,
harass, or mislead anyone. Misuse of this tool may violate applicable laws.
We are not responsible for any misuse. By using this tool, you agree to use
it responsibly and ethically.
```

### 8.2 Styling

```css
.disclaimer {
  background: #FEF3C7;          /* Amber-50 */
  border-left: 4px solid #F59E0B; /* Amber-500 */
  padding: 16px 20px;
  margin: 32px 0;
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  line-height: 1.6;
  color: #92400E;               /* Amber-800 */
}

.disclaimer-icon {
  margin-right: 8px;
  font-size: 18px;
}
```

### 8.3 Placement

- On landing page: above the footer
- On generator pages: between the SEO content section and the footer
- Always visible in the normal page flow (not hidden or collapsible)

---

## 9. Navigation

### 9.1 Navbar

```
┌──────────────────────────────────────────────┐
│  🔀 ChatReplica  │ WhatsApp │ Messenger │    │
│                   │ Instagram│ X (Twitter)│   │
└──────────────────────────────────────────────┘
```

**Desktop:**
- Logo + brand name on the left
- Platform links on the right (horizontal)
- Active page is highlighted (underline or bold + color)

**Mobile:**
- Logo on the left
- Hamburger menu on the right
- Menu opens: vertical list of platform links

### 9.2 Footer

```
┌──────────────────────────────────────────────┐
│  ChatReplica                                  │
│                                               │
│  Generators:          Resources:              │
│  • WhatsApp           • About (future)        │
│  • Facebook Messenger • Privacy Policy (future)│
│  • Instagram DMs      • Terms of Service (future)│
│  • X (Twitter) DMs    • Contact (future)      │
│                                               │
│  © 2025 ChatReplica. All rights reserved.     │
│  Not affiliated with WhatsApp, Meta,          │
│  Instagram, or X.                             │
└──────────────────────────────────────────────┘
```

---

## 10. Error Handling

| Scenario | Handling |
|---|---|
| Image upload fails | Toast: "Failed to upload image. Please try again." |
| Image too large | Toast: "Image must be under 5MB." |
| Invalid file type | Toast: "Please upload a JPEG, PNG, or WebP image." |
| Screenshot capture fails | Toast: "Screenshot failed. Please try again." + fallback suggestion |
| Browser doesn't support FileReader | Show message: "Your browser doesn't support image upload." |
| JavaScript disabled | `<noscript>` tag: "This tool requires JavaScript to function." |

**Toast notifications:**
- Position: top-right
- Duration: 3 seconds auto-dismiss
- Style: colored left border (red for error, green for success)
- Dismissible with X button

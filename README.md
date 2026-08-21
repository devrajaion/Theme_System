# Theme Testing

Next.js (App Router) base UI with **Inter**, **Hugeicons**, and light/dark CSS design tokens.

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design tokens

Defined in `src/app/globals.css` as CSS variables, also mapped to Tailwind utilities.

Inspired by **Cursor Light** / **Cursor Dark** chrome (editor vs sidebar, ink mixes for type and states). Not an official Cursor theme.

| Token | Light | Dark | Utility |
| --- | --- | --- | --- |
| Surface | `#FCFCFC` | `#181818` | `bg-surface` |
| Secondary Surface | `#F3F3F3` | `#141414` | `bg-surface-secondary` |
| Border | `#141414` 8% | `#F0F0F0` 8% | `border-border` |
| Secondary Border | `#141414` 12% | `#F0F0F0` 12% | `border-border-secondary` |

**Rule:** `border-border` on primary surface · `border-border-secondary` on secondary surface.
| Primary Text | `#141414` | `#F0F0F0` | `text-text-primary` |
| Secondary Text | `#141414` 74% | `#F0F0F0` 74% | `text-text-secondary` |
| Muted Text | `#141414` 36% | `#F0F0F0` 36% | `text-text-muted` |
| Hover Background | `#141414` 4% | `#F0F0F0` 8% | `bg-hover-bg` |
| Active Background | `#141414` 6% | `#F0F0F0` 14% | `bg-active-bg` |
| Icon | `#141414` 50% | `#F0F0F0` 66% | `text-icon` |
| Active Icon | `#141414` | `#F0F0F0` | `text-icon-active` |
| Primary Theme | `#2778C1` | `#81A1C1` | `bg-primary` / `.ui-primary` |
| Focus Ring | `#141414` 20% | `#F0F0F0` 15% | `ring-ring` |

### Radius (shared)

| Token | Value | Utility |
| --- | --- | --- |
| Default | `6px` | `rounded-default` |
| Small | `4px` | `rounded-small` |
| Large | `999px` | `rounded-large` |

Use `.ui-interactive` and `.ui-icon` for hover/active/disabled icon button behavior. Use `.ui-primary` or `bg-primary` for primary action buttons.

Keyboard focus matches shared CN: soft **box-shadow glow** `0 0 0 3px` at **50% ring opacity** (no hard offset ring). Tab to preview.

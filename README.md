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

| Token | Light | Dark | Utility |
| --- | --- | --- | --- |
| Surface | `#ffffff` | `#1c1c1c` | `bg-surface` |
| Secondary Surface | `#fcfcfc` | `#1b1b1b` | `bg-surface-secondary` |
| Border | `#f5f5f5` | `#1e1e1e` | `border-border` |
| Secondary Border | `#f3f3f3` | `#242424` | `border-border-secondary` |

**Rule:** `border-border` on primary surface · `border-border-secondary` on secondary surface.
| Primary Text | `#404040` | `#e3e3e3` | `text-text-primary` |
| Secondary Text | `#7A7A7A` | `#A2A2A2` | `text-text-secondary` |
| Muted Text | `#DEDEDE` | `#4C4C4C` | `text-text-muted` |
| Hover Background | `#EFEFEF` 35% | `#616161` 20% | `bg-hover-bg` |
| Active Background | `#EFEFEF` 75% | `#616161` 30% | `bg-active-bg` |
| Icon | `#808080` | `#a3a3a3` | `text-icon` |
| Active Icon | `#414141` | `#e5e5e5` | `text-icon-active` |
| Primary Theme | `#3e63dd` | `#3e63dd` | `bg-primary` / `.ui-primary` |

### Radius (shared)

| Token | Value | Utility |
| --- | --- | --- |
| Default | `6px` | `rounded-default` |
| Small | `4px` | `rounded-small` |
| Large | `999px` | `rounded-large` |

Use `.ui-interactive` and `.ui-icon` for hover/active/disabled icon button behavior. Use `.ui-primary` or `bg-primary` for primary action buttons.

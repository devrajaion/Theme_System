export const DEFAULT_THEME_CSS = `:root {
  /* Surfaces */
  --surface: #ffffff;
  --surface-secondary: #fcfcfc;

  /* Borders */
  --border: #f5f5f5;
  --border-secondary: #f3f3f3;
  --input-fill: var(--surface-secondary);
  --input-border: var(--border-secondary);

  /* Text */
  --text-primary: #404040;
  --text-secondary: #7a7a7a;
  --text-muted: #dedede;

  /* Interaction states */
  --hover-bg: rgb(239 239 239 / 35%);
  --active-bg: rgb(239 239 239 / 45%);

  /* Icons */
  --icon: #808080;
  --icon-active: #414141;

  /* Actions */
  --primary: #3e63dd;
  --primary-foreground: oklch(0.97 0.014 254.604);
  --danger: oklch(0.6471 0.2288 22.47);
  --danger-foreground: #ffffff;

  /* Focus */
  --ring: oklch(0.708 0 0);

  /* Radius */
  --radius-default: 6px;
  --radius-small: 4px;
  --radius-large: 999px;

  /* Data */
  --chart-1: #d4d4d4;
  --chart-2: #7a7a7a;
  --chart-3: #5f5f5f;
  --chart-4: #494949;
  --chart-5: #343434;
}

.dark {
  /* Surfaces */
  --surface: #141414;
  --surface-secondary: #1b1b1b;

  /* Borders */
  --border: #1e1e1e;
  --border-secondary: #242424;
  --input-fill: var(--surface-secondary);
  --input-border: var(--border-secondary);

  /* Text */
  --text-primary: #e3e3e3;
  --text-secondary: #a2a2a2;
  --text-muted: #424242;

  /* Interaction states */
  --hover-bg: rgb(97 97 97 / 20%);
  --active-bg: rgb(97 97 97 / 26%);

  /* Icons */
  --icon: #a3a3a3;
  --icon-active: #e5e5e5;

  /* Actions */
  --primary: #3e63dd;
  --primary-foreground: oklch(0.97 0.014 254.604);
  --danger: oklch(0.6471 0.2288 22.47);
  --danger-foreground: #ffffff;

  /* Focus */
  --ring: oklch(0.556 0 0);

  /* Data */
  --chart-1: #d4d4d4;
  --chart-2: #7a7a7a;
  --chart-3: #5f5f5f;
  --chart-4: #494949;
  --chart-5: #343434;
}`;

export const TOKEN_GROUPS = [
  { label: "Surfaces", tokens: ["surface", "surface-secondary"] },
  { label: "Inputs", tokens: ["input-fill", "input-border"] },
  { label: "Text", tokens: ["text-primary", "text-secondary", "text-muted"] },
  { label: "States", tokens: ["hover-bg", "active-bg"] },
  { label: "Icons", tokens: ["icon", "icon-active"] },
  { label: "Actions", tokens: ["primary", "primary-foreground", "danger", "danger-foreground"] },
  { label: "Radius", tokens: ["radius-default", "radius-small", "radius-large"] },
] as const;

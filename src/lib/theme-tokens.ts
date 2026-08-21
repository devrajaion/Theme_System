export const DEFAULT_THEME_CSS = `:root {
  /* Surfaces */
  --surface: #fcfcfc;
  --surface-secondary: #f3f3f3;

  /* Borders */
  --border: color-mix(in srgb, #141414 8%, transparent);
  --border-secondary: color-mix(in srgb, #141414 12%, transparent);
  --input-fill: #fcfcfc;
  --input-border: color-mix(in srgb, #141414 20%, transparent);

  /* Text */
  --text-primary: #141414;
  --text-secondary: color-mix(in srgb, #141414 74%, transparent);
  --text-muted: color-mix(in srgb, #141414 36%, transparent);

  /* Interaction states */
  --hover-bg: color-mix(in srgb, #141414 4%, transparent);
  --active-bg: color-mix(in srgb, #141414 6%, transparent);

  /* Icons */
  --icon: color-mix(in srgb, #141414 50%, transparent);
  --icon-active: #141414;

  /* Actions */
  --primary: #3e63dd;
  --primary-foreground: oklch(0.97 0.014 254.604);
  --danger: oklch(0.6471 0.2288 22.47);
  --danger-foreground: #ffffff;

  /* Focus */
  --ring: color-mix(in srgb, #141414 20%, transparent);

  /* Radius */
  --radius-default: 6px;
  --radius-small: 4px;
  --radius-large: 999px;

  /* Chart */
  --bullish: #089981;
  --bearish: #f7525f;
}

.dark {
  /* Surfaces */
  --surface: #181818;
  --surface-secondary: #141414;

  /* Borders */
  --border: color-mix(in srgb, #f0f0f0 8%, transparent);
  --border-secondary: color-mix(in srgb, #f0f0f0 12%, transparent);
  --input-fill: color-mix(in srgb, #f0f0f0 4%, transparent);
  --input-border: color-mix(in srgb, #f0f0f0 8%, transparent);

  /* Text */
  --text-primary: #f0f0f0;
  --text-secondary: color-mix(in srgb, #f0f0f0 74%, transparent);
  --text-muted: color-mix(in srgb, #f0f0f0 36%, transparent);

  /* Interaction states */
  --hover-bg: color-mix(in srgb, #f0f0f0 8%, transparent);
  --active-bg: color-mix(in srgb, #f0f0f0 14%, transparent);

  /* Icons */
  --icon: color-mix(in srgb, #f0f0f0 66%, transparent);
  --icon-active: #f0f0f0;

  /* Actions */
  --primary: #3e63dd;
  --primary-foreground: oklch(0.97 0.014 254.604);
  --danger: oklch(0.6471 0.2288 22.47);
  --danger-foreground: #ffffff;

  /* Focus */
  --ring: color-mix(in srgb, #f0f0f0 15%, transparent);

  /* Chart */
  --bullish: #089981;
  --bearish: #f7525f;
}`;

export const TOKEN_GROUPS = [
  { label: "Surfaces", tokens: ["surface", "surface-secondary"] },
  { label: "Inputs", tokens: ["input-fill", "input-border"] },
  { label: "Text", tokens: ["text-primary", "text-secondary", "text-muted"] },
  { label: "States", tokens: ["hover-bg", "active-bg"] },
  { label: "Icons", tokens: ["icon", "icon-active"] },
  { label: "Actions", tokens: ["primary", "primary-foreground", "danger", "danger-foreground"] },
  { label: "Chart", tokens: ["bullish", "bearish"] },
  { label: "Radius", tokens: ["radius-default", "radius-small", "radius-large"] },
] as const;

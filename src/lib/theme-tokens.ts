export const DEFAULT_THEME_CSS = `:root {
  /* Surfaces — editor vs sidebar/chrome */
  --surface: #fcfcfc;
  --surface-secondary: #f3f3f3;

  /* Borders — ink @ 8% / 12% / 20% */
  --border: color-mix(in srgb, #141414 8%, transparent);
  --border-secondary: color-mix(in srgb, #141414 12%, transparent);
  --input-fill: #fcfcfc;
  --input-border: color-mix(in srgb, #141414 20%, transparent);

  /* Text — ink @ 100% / 74% / 36% */
  --text-primary: #141414;
  --text-secondary: color-mix(in srgb, #141414 74%, transparent);
  --text-muted: color-mix(in srgb, #141414 36%, transparent);

  /* Interaction states — ink @ 4% / 6% */
  --hover-bg: color-mix(in srgb, #141414 4%, transparent);
  --active-bg: color-mix(in srgb, #141414 6%, transparent);

  /* Icons — ink @ 50% / 100% */
  --icon: color-mix(in srgb, #141414 50%, transparent);
  --icon-active: #141414;

  /* Actions */
  --primary: #2778c1;
  --primary-foreground: #fcfcfc;
  --danger: #be1744;
  --danger-foreground: #fcfcfc;

  /* Focus — ink @ 20% */
  --ring: color-mix(in srgb, #141414 20%, transparent);

  /* Radius */
  --radius-default: 6px;
  --radius-small: 4px;
  --radius-large: 999px;
}

.dark {
  /* Surfaces — editor vs chrome */
  --surface: #181818;
  --surface-secondary: #141414;

  /* Borders — ink @ 8% / 12% */
  --border: color-mix(in srgb, #f0f0f0 8%, transparent);
  --border-secondary: color-mix(in srgb, #f0f0f0 12%, transparent);
  --input-fill: color-mix(in srgb, #f0f0f0 4%, transparent);
  --input-border: color-mix(in srgb, #f0f0f0 8%, transparent);

  /* Text — ink @ 100% / 74% / 36% */
  --text-primary: #f0f0f0;
  --text-secondary: color-mix(in srgb, #f0f0f0 74%, transparent);
  --text-muted: color-mix(in srgb, #f0f0f0 36%, transparent);

  /* Interaction states — ink @ 8% / 14% */
  --hover-bg: color-mix(in srgb, #f0f0f0 8%, transparent);
  --active-bg: color-mix(in srgb, #f0f0f0 14%, transparent);

  /* Icons — ink @ 66% / 100% */
  --icon: color-mix(in srgb, #f0f0f0 66%, transparent);
  --icon-active: #f0f0f0;

  /* Actions */
  --primary: #81a1c1;
  --primary-foreground: #191c22;
  --danger: #e34671;
  --danger-foreground: #f0f0f0;

  /* Focus — ink @ 15% */
  --ring: color-mix(in srgb, #f0f0f0 15%, transparent);
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

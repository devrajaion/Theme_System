export type ThemeMode = "light" | "dark";

export type SolidTokenKey =
  | "surface"
  | "surface-secondary"
  | "border"
  | "text-primary"
  | "text-secondary"
  | "text-muted"
  | "active-bg"
  | "icon"
  | "icon-active"
  | "primary"
  | "primary-foreground";

export type AlphaTokenKey = "hover-bg" | "active-bg-alpha";

/** Tokens stored as hex + optional alpha (0–1). */
export type TokenValue = {
  color: string;
  alpha?: number;
};

export type Palette = Record<string, TokenValue>;

export type TokenMeta = {
  key: string;
  cssVar: string;
  label: string;
  description?: string;
  hasAlpha?: boolean;
};

export const TOKEN_META: TokenMeta[] = [
  { key: "surface", cssVar: "--surface", label: "Surface" },
  { key: "surface-secondary", cssVar: "--surface-secondary", label: "Secondary Surface" },
  { key: "border", cssVar: "--border", label: "Border" },
  { key: "text-primary", cssVar: "--text-primary", label: "Primary Text" },
  { key: "text-secondary", cssVar: "--text-secondary", label: "Secondary Text" },
  { key: "text-muted", cssVar: "--text-muted", label: "Muted Text", description: "Disabled indication" },
  {
    key: "hover-bg",
    cssVar: "--hover-bg",
    label: "Hover Background",
    hasAlpha: true,
  },
  {
    key: "active-bg",
    cssVar: "--active-bg",
    label: "Active Background",
    hasAlpha: true,
  },
  { key: "icon", cssVar: "--icon", label: "Icon" },
  { key: "icon-active", cssVar: "--icon-active", label: "Active Icon" },
  { key: "primary", cssVar: "--primary", label: "Primary Theme" },
  {
    key: "primary-foreground",
    cssVar: "--primary-foreground",
    label: "Primary Foreground",
    description: "Text/icon on primary",
  },
];

export const DEFAULT_LIGHT: Palette = {
  surface: { color: "#ffffff" },
  "surface-secondary": { color: "#fafafa" },
  border: { color: "#f5f5f5" },
  "text-primary": { color: "#404040" },
  "text-secondary": { color: "#7a7a7a" },
  "text-muted": { color: "#dedede" },
  "hover-bg": { color: "#efefef", alpha: 0.35 },
  "active-bg": { color: "#efefef", alpha: 0.75 },
  icon: { color: "#808080" },
  "icon-active": { color: "#414141" },
  primary: { color: "#3e63dd" },
  "primary-foreground": { color: "#ffffff" },
};

export const DEFAULT_DARK: Palette = {
  surface: { color: "#141414" },
  "surface-secondary": { color: "#1f1f1f" },
  border: { color: "#1e1e1e" },
  "text-primary": { color: "#e3e3e3" },
  "text-secondary": { color: "#a2a2a2" },
  "text-muted": { color: "#4c4c4c" },
  "hover-bg": { color: "#616161", alpha: 0.2 },
  "active-bg": { color: "#616161", alpha: 0.3 },
  icon: { color: "#a3a3a3" },
  "icon-active": { color: "#e5e5e5" },
  primary: { color: "#3e63dd" },
  "primary-foreground": { color: "#ffffff" },
};

export function clonePalette(palette: Palette): Palette {
  return Object.fromEntries(
    Object.entries(palette).map(([key, value]) => [
      key,
      { color: value.color, alpha: value.alpha },
    ]),
  );
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const normalized = hex.replace("#", "").trim();
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;

  return {
    r: Number.parseInt(full.slice(0, 2), 16),
    g: Number.parseInt(full.slice(2, 4), 16),
    b: Number.parseInt(full.slice(4, 6), 16),
  };
}

export function formatCssValue(value: TokenValue, hasAlpha?: boolean): string {
  if (!hasAlpha || value.alpha === undefined || value.alpha >= 1) {
    return value.color.toLowerCase();
  }

  const rgb = hexToRgb(value.color);
  if (!rgb) return value.color.toLowerCase();

  const alphaPercent = Math.round(value.alpha * 100);
  return `rgb(${rgb.r} ${rgb.g} ${rgb.b} / ${alphaPercent}%)`;
}

export function paletteToCssBlock(selector: string, palette: Palette): string {
  const lines = TOKEN_META.map((token) => {
    const value = palette[token.key] ?? { color: "#000000" };
    return `  ${token.cssVar}: ${formatCssValue(value, token.hasAlpha)};`;
  });

  return `${selector} {\n${lines.join("\n")}\n}`;
}

export function normalizeHex(input: string): string | null {
  const trimmed = input.trim();
  const withHash = trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
  const body = withHash.slice(1);

  if (/^[0-9a-fA-F]{3}$/.test(body)) {
    return `#${body
      .split("")
      .map((char) => char + char)
      .join("")
      .toLowerCase()}`;
  }

  if (/^[0-9a-fA-F]{6}$/.test(body)) {
    return `#${body.toLowerCase()}`;
  }

  return null;
}

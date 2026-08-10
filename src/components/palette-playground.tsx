"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { RefreshIcon, UserIcon } from "@hugeicons/core-free-icons";
import { ColorPicker } from "@/components/color-picker";
import {
  clonePalette,
  cloneRadius,
  DEFAULT_DARK,
  DEFAULT_LIGHT,
  DEFAULT_RADIUS,
  paletteToCssBlock,
  RADIUS_META,
  radiusToCssBlock,
  TOKEN_META,
  type RadiusKey,
  type RadiusTokens,
  type ThemeMode,
  type TokenValue,
} from "@/lib/theme-tokens";

function TokenRow({
  label,
  description,
  value,
  hasAlpha,
  onChange,
}: {
  label: string;
  description?: string;
  value: TokenValue;
  hasAlpha?: boolean;
  onChange: (next: TokenValue) => void;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-default border border-border bg-surface-secondary p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="text-sm font-medium text-text-primary">{label}</p>
        {description ? (
          <p className="text-xs text-text-secondary">{description}</p>
        ) : null}
      </div>

      <ColorPicker
        label={label}
        color={value.color}
        alpha={value.alpha ?? 1}
        showAlpha={hasAlpha}
        onColorChange={(color) => onChange({ ...value, color })}
        onAlphaChange={(alpha) => onChange({ ...value, alpha })}
      />
    </div>
  );
}

function RadiusRow({
  label,
  description,
  value,
  min,
  max,
  previewClassName,
  onChange,
}: {
  label: string;
  description: string;
  value: number;
  min: number;
  max: number;
  previewClassName: string;
  onChange: (next: number) => void;
}) {
  const [draft, setDraft] = useState(String(value));

  useEffect(() => {
    setDraft(String(value));
  }, [value]);

  const commit = (raw: string) => {
    const parsed = Number.parseInt(raw, 10);
    if (Number.isNaN(parsed)) {
      setDraft(String(value));
      return;
    }
    const clamped = Math.min(max, Math.max(min, parsed));
    setDraft(String(clamped));
    onChange(clamped);
  };

  return (
    <div className="flex flex-col gap-3 rounded-default border border-border bg-surface-secondary p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-text-primary">{label}</p>
          <p className="text-xs text-text-secondary">{description}</p>
        </div>
        <div
          className={`shrink-0 border border-border bg-primary ${previewClassName}`}
          style={{ borderRadius: `${value}px` }}
          aria-hidden
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          aria-label={label}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="theme-opacity-slider min-w-[140px] flex-1"
        />
        <div className="flex items-center gap-1">
          <input
            type="text"
            inputMode="numeric"
            aria-label={`${label} value`}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={() => commit(draft)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                commit(draft);
                (event.target as HTMLInputElement).blur();
              }
            }}
            className="w-16 rounded-small border border-border bg-surface px-2 py-1.5 font-mono text-xs text-text-primary outline-none focus:border-primary"
          />
          <span className="text-xs text-text-secondary">px</span>
        </div>
      </div>
    </div>
  );
}

export function PalettePlayground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lightPalette, setLightPalette] = useState(() => clonePalette(DEFAULT_LIGHT));
  const [darkPalette, setDarkPalette] = useState(() => clonePalette(DEFAULT_DARK));
  const [radius, setRadius] = useState<RadiusTokens>(() => cloneRadius(DEFAULT_RADIUS));

  useEffect(() => {
    setMounted(true);
  }, []);

  const mode: ThemeMode = mounted && resolvedTheme === "dark" ? "dark" : "light";
  const palette = mode === "dark" ? darkPalette : lightPalette;
  const setPalette = mode === "dark" ? setDarkPalette : setLightPalette;

  const cssText = useMemo(
    () =>
      [
        paletteToCssBlock(":root", lightPalette),
        paletteToCssBlock(".dark", darkPalette),
        radiusToCssBlock(radius),
      ].join("\n\n"),
    [lightPalette, darkPalette, radius],
  );

  const updateToken = (key: string, next: TokenValue) => {
    setPalette((current) => ({ ...current, [key]: next }));
  };

  const updateRadius = (key: RadiusKey, next: number) => {
    setRadius((current) => ({ ...current, [key]: next }));
  };

  const resetCurrent = () => {
    if (mode === "dark") {
      setDarkPalette(clonePalette(DEFAULT_DARK));
    } else {
      setLightPalette(clonePalette(DEFAULT_LIGHT));
    }
  };

  const resetAll = () => {
    setLightPalette(clonePalette(DEFAULT_LIGHT));
    setDarkPalette(clonePalette(DEFAULT_DARK));
    setRadius(cloneRadius(DEFAULT_RADIUS));
  };

  return (
    <section className="rounded-default border border-border bg-surface p-6">
      <style dangerouslySetInnerHTML={{ __html: cssText }} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-sm font-medium text-text-primary">Palette playground</h2>
          <p className="mt-1 max-w-xl text-sm text-text-secondary">
            Pick any token to preview the theme live. Changes stay in memory only — reload
            restores the defaults.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={resetCurrent}
            className="ui-interactive inline-flex items-center gap-2 rounded-default border border-border px-3 py-2 text-sm font-medium"
          >
            <HugeiconsIcon
              icon={RefreshIcon}
              size={16}
              strokeWidth={1.75}
              className="ui-icon"
            />
            Reset {mode} colors
          </button>
          <button
            type="button"
            onClick={() => setRadius(cloneRadius(DEFAULT_RADIUS))}
            className="ui-interactive rounded-default border border-border px-3 py-2 text-sm font-medium"
          >
            Reset radius
          </button>
          <button
            type="button"
            onClick={resetAll}
            className="ui-interactive rounded-default border border-border px-3 py-2 text-sm font-medium"
          >
            Reset all
          </button>
        </div>
      </div>

      <div className="mt-4 inline-flex rounded-default border border-border bg-surface-secondary p-1 text-xs">
        <span
          className={`rounded-small px-2.5 py-1 ${
            mode === "light" ? "bg-active-bg font-medium text-text-primary" : "text-text-secondary"
          }`}
        >
          Editing light
        </span>
        <span
          className={`rounded-small px-2.5 py-1 ${
            mode === "dark" ? "bg-active-bg font-medium text-text-primary" : "text-text-secondary"
          }`}
        >
          Editing dark
        </span>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-text-primary">Radius</h3>
        <p className="mt-1 text-sm text-text-secondary">
          Shared across light and dark. Default is used for most UI; large is for avatars and
          photos.
        </p>
        <div className="mt-3 grid gap-2">
          {RADIUS_META.map((token) => (
            <RadiusRow
              key={token.key}
              label={token.label}
              description={token.description}
              value={radius[token.key]}
              min={token.min}
              max={token.max}
              previewClassName={
                token.key === "radius-large" ? "size-12" : "size-10"
              }
              onChange={(next) => updateRadius(token.key, next)}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-end gap-4 rounded-default border border-border bg-surface-secondary p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-14 items-center justify-center rounded-large bg-primary text-primary-foreground">
              <HugeiconsIcon icon={UserIcon} size={24} strokeWidth={1.75} />
            </div>
            <span className="text-[11px] text-text-secondary">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-10 w-24 rounded-default border border-border bg-surface" />
            <span className="text-[11px] text-text-secondary">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-16 rounded-small border border-border bg-surface" />
            <span className="text-[11px] text-text-secondary">Small</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-text-primary">Colors</h3>
        <div className="mt-3 grid gap-2">
          {TOKEN_META.map((token) => (
            <TokenRow
              key={token.key}
              label={token.label}
              description={token.description}
              value={palette[token.key] ?? { color: "#000000" }}
              hasAlpha={token.hasAlpha}
              onChange={(next) => updateToken(token.key, next)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

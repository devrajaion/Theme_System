"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { RefreshIcon } from "@hugeicons/core-free-icons";
import {
  clonePalette,
  DEFAULT_DARK,
  DEFAULT_LIGHT,
  normalizeHex,
  paletteToCssBlock,
  TOKEN_META,
  type Palette,
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
  const [hexDraft, setHexDraft] = useState(value.color);

  useEffect(() => {
    setHexDraft(value.color);
  }, [value.color]);

  const commitHex = (raw: string) => {
    const normalized = normalizeHex(raw);
    if (!normalized) {
      setHexDraft(value.color);
      return;
    }
    setHexDraft(normalized);
    onChange({ ...value, color: normalized });
  };

  const alphaPercent = Math.round((value.alpha ?? 1) * 100);

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface-secondary p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="text-sm font-medium text-text-primary">{label}</p>
        {description ? (
          <p className="text-xs text-text-secondary">{description}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label className="relative size-9 shrink-0 overflow-hidden rounded-md border border-border">
          <span
            className="absolute inset-0"
            style={{
              backgroundColor: value.color,
              opacity: hasAlpha ? (value.alpha ?? 1) : 1,
            }}
          />
          <input
            type="color"
            aria-label={`${label} color`}
            value={normalizeHex(value.color) ?? "#000000"}
            onChange={(event) => {
              const color = event.target.value.toLowerCase();
              setHexDraft(color);
              onChange({ ...value, color });
            }}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </label>

        <input
          type="text"
          spellCheck={false}
          aria-label={`${label} hex`}
          value={hexDraft}
          onChange={(event) => setHexDraft(event.target.value)}
          onBlur={() => commitHex(hexDraft)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              commitHex(hexDraft);
              (event.target as HTMLInputElement).blur();
            }
          }}
          className="w-[7.5rem] rounded-md border border-border bg-surface px-2 py-1.5 font-mono text-xs text-text-primary outline-none focus:border-primary"
        />

        {hasAlpha ? (
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              aria-label={`${label} opacity`}
              value={alphaPercent}
              onChange={(event) =>
                onChange({
                  ...value,
                  alpha: Number(event.target.value) / 100,
                })
              }
              className="w-24 accent-[var(--primary)]"
            />
            <span className="w-10 text-right font-mono text-xs text-text-secondary">
              {alphaPercent}%
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function PalettePlayground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lightPalette, setLightPalette] = useState(() => clonePalette(DEFAULT_LIGHT));
  const [darkPalette, setDarkPalette] = useState(() => clonePalette(DEFAULT_DARK));

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
      ].join("\n\n"),
    [lightPalette, darkPalette],
  );

  const updateToken = (key: string, next: TokenValue) => {
    setPalette((current) => ({ ...current, [key]: next }));
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
  };

  return (
    <section className="rounded-xl border border-border bg-surface p-6">
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
            className="ui-interactive inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium"
          >
            <HugeiconsIcon
              icon={RefreshIcon}
              size={16}
              strokeWidth={1.75}
              className="ui-icon"
            />
            Reset {mode}
          </button>
          <button
            type="button"
            onClick={resetAll}
            className="ui-interactive rounded-lg border border-border px-3 py-2 text-sm font-medium"
          >
            Reset all
          </button>
        </div>
      </div>

      <div className="mt-4 inline-flex rounded-lg border border-border bg-surface-secondary p-1 text-xs">
        <span
          className={`rounded-md px-2.5 py-1 ${
            mode === "light" ? "bg-active-bg font-medium text-text-primary" : "text-text-secondary"
          }`}
        >
          Editing light
        </span>
        <span
          className={`rounded-md px-2.5 py-1 ${
            mode === "dark" ? "bg-active-bg font-medium text-text-primary" : "text-text-secondary"
          }`}
        >
          Editing dark
        </span>
      </div>

      <div className="mt-4 grid gap-2">
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
    </section>
  );
}

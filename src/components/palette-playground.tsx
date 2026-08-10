"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { RefreshIcon } from "@hugeicons/core-free-icons";
import { ColorPicker } from "@/components/color-picker";
import {
  clonePalette,
  DEFAULT_DARK,
  DEFAULT_LIGHT,
  paletteToCssBlock,
  TOKEN_META,
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
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface-secondary p-3 sm:flex-row sm:items-center sm:justify-between">
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

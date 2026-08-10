"use client";

import { useEffect, useId, useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { normalizeHex } from "@/lib/theme-tokens";

type ColorPickerProps = {
  label: string;
  color: string;
  alpha?: number;
  showAlpha?: boolean;
  onColorChange: (color: string) => void;
  onAlphaChange?: (alpha: number) => void;
};

export function ColorPicker({
  label,
  color,
  alpha = 1,
  showAlpha = false,
  onColorChange,
  onAlphaChange,
}: ColorPickerProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const safeColor = normalizeHex(color) ?? "#000000";
  const alphaPercent = Math.round(alpha * 100);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={`Open ${label} color picker`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="ui-interactive flex items-center gap-2 rounded-default border border-border bg-surface px-2 py-1.5"
      >
        <span
          className="size-7 rounded-small border border-border shadow-[inset_0_0_0_1px_rgb(0_0_0_/_4%)]"
          style={{
            backgroundColor: safeColor,
            opacity: showAlpha ? alpha : 1,
          }}
        />
        <span className="font-mono text-xs text-text-primary">{safeColor}</span>
        {showAlpha ? (
          <span className="font-mono text-xs text-text-secondary">{alphaPercent}%</span>
        ) : null}
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label={`${label} color picker`}
          className="absolute right-0 z-50 mt-2 w-[240px] rounded-default border border-border bg-surface p-3 shadow-[0_12px_40px_rgb(0_0_0_/_12%)]"
        >
          <div className="theme-color-picker">
            <HexColorPicker
              color={safeColor}
              onChange={(next) => onColorChange(next.toLowerCase())}
            />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-text-secondary">Hex</span>
            <HexColorInput
              prefixed
              aria-label={`${label} hex`}
              color={safeColor}
              onChange={(next) => onColorChange(next.toLowerCase())}
              className="flex-1 rounded-small border border-border-secondary bg-surface-secondary px-2 py-1.5 font-mono text-xs text-text-primary outline-none focus:border-primary"
            />
          </div>

          {showAlpha ? (
            <div className="mt-3">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs text-text-secondary">Opacity</span>
                <span className="font-mono text-xs text-text-primary">{alphaPercent}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                aria-label={`${label} opacity`}
                value={alphaPercent}
                onChange={(event) => onAlphaChange?.(Number(event.target.value) / 100)}
                className="theme-opacity-slider w-full"
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

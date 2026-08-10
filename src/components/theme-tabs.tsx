"use client";

import { useState } from "react";

type ThemeTabsProps = {
  items: readonly string[];
  defaultValue?: string;
  className?: string;
};

export function ThemeTabs({ items, defaultValue, className = "" }: ThemeTabsProps) {
  const [active, setActive] = useState(defaultValue ?? items[0] ?? "");

  return (
    <div
      className={`inline-flex gap-1 rounded-large border border-border bg-surface-secondary p-1 ${className}`}
      role="tablist"
    >
      {items.map((item) => {
        const isActive = item === active;

        return (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(item)}
            className={`rounded-large px-3.5 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border border-border bg-surface text-text-primary"
                : "border border-transparent bg-transparent text-text-secondary hover:text-text-primary"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

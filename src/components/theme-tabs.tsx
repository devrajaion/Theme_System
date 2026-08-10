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
    <div className={`theme-tabs ${className}`} role="tablist">
      {items.map((item) => {
        const isActive = item === active;

        return (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(item)}
            className="theme-tab"
          >
            {isActive ? <span className="theme-tab-fill" aria-hidden /> : null}
            <span className="theme-tab-label">{item}</span>
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Home01Icon,
  Settings01Icon,
  Notification03Icon,
  Search01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { IconButton } from "@/components/icon-button";

const swatches = [
  { name: "Surface", token: "var(--surface)", className: "bg-surface border border-border" },
  {
    name: "Secondary Surface",
    token: "var(--surface-secondary)",
    className: "bg-surface-secondary border border-border",
  },
  { name: "Border", token: "var(--border)", className: "bg-border border border-border" },
  { name: "Hover Background", token: "var(--hover-bg)", className: "bg-hover-bg border border-border" },
  { name: "Active Background", token: "var(--active-bg)", className: "bg-active-bg border border-border" },
  { name: "Primary", token: "var(--primary)", className: "bg-primary border border-border" },
] as const;

export default function Home() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-screen bg-surface-secondary text-text-primary">
      <header className="sticky top-0 z-10 border-b border-border bg-surface">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-tight">Theme Testing</span>
            <span className="hidden text-sm text-text-secondary sm:inline">
              Design tokens · Hugeicons · Inter
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6">
        <section className="rounded-xl border border-border bg-surface p-6">
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
            Base UI tokens
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Light and dark themes are defined as CSS variables. Use Tailwind utilities like
            <code className="mx-1 rounded bg-surface-secondary px-1.5 py-0.5 text-text-primary">
              bg-surface
            </code>
            and
            <code className="mx-1 rounded bg-surface-secondary px-1.5 py-0.5 text-text-primary">
              text-text-secondary
            </code>
            or the raw variables directly.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Typography</h2>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-base text-text-primary">Primary text — #404040 / #e3e3e3</p>
            <p className="text-base text-text-secondary">Secondary text — #7A7A7A / #A2A2A2</p>
            <p className="text-base text-text-muted">Muted text — disabled indication</p>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Surfaces & states</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {swatches.map((swatch) => (
              <div key={swatch.name} className="flex flex-col gap-2">
                <div className={`h-16 rounded-lg ${swatch.className}`} />
                <div>
                  <p className="text-xs font-medium text-text-primary">{swatch.name}</p>
                  <p className="truncate text-[11px] text-text-secondary">{swatch.token}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Interactive icons</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Default icon #808080 / #a3a3a3 · active #414141 / #e5e5e5. Hover and press to preview
            state backgrounds.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <IconButton
              icon={Home01Icon}
              label="Home"
              active={activeNav === "home"}
              onClick={() => setActiveNav("home")}
            />
            <IconButton
              icon={Search01Icon}
              label="Search"
              active={activeNav === "search"}
              onClick={() => setActiveNav("search")}
            />
            <IconButton
              icon={Notification03Icon}
              label="Notifications"
              active={activeNav === "notifications"}
              onClick={() => setActiveNav("notifications")}
            />
            <IconButton
              icon={UserIcon}
              label="Profile"
              active={activeNav === "profile"}
              onClick={() => setActiveNav("profile")}
            />
            <IconButton
              icon={Settings01Icon}
              label="Settings"
              active={activeNav === "settings"}
              onClick={() => setActiveNav("settings")}
            />
            <IconButton icon={Settings01Icon} label="Disabled" disabled />
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Buttons</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="ui-primary rounded-lg px-4 py-2 text-sm font-medium"
            >
              Primary action
            </button>
            <button
              type="button"
              className="ui-interactive rounded-lg border border-border px-4 py-2 text-sm font-medium"
            >
              Secondary action
            </button>
            <button
              type="button"
              className="rounded-lg bg-active-bg px-4 py-2 text-sm font-medium text-text-primary"
            >
              Active surface
            </button>
            <button
              type="button"
              disabled
              className="ui-primary rounded-lg px-4 py-2 text-sm font-medium"
            >
              Primary disabled
            </button>
            <button
              type="button"
              disabled
              className="ui-interactive rounded-lg border border-border px-4 py-2 text-sm font-medium"
            >
              Disabled
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

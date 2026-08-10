"use client";

import { useState } from "react";
import {
  Home01Icon,
  Settings01Icon,
  Notification03Icon,
  Search01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { IconButton } from "@/components/icon-button";
import { PalettePlayground } from "@/components/palette-playground";

export default function Home() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-screen bg-surface-secondary text-text-primary">
      <header className="sticky top-0 z-10 border-b border-border bg-surface">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-tight">Theme Testing</span>
            <span className="hidden text-sm text-text-secondary sm:inline">
              Live palette playground
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6">
        <section className="rounded-default border border-border bg-surface p-6">
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
            Theme testing environment
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Adjust color and radius tokens, flip light/dark, and check how surfaces, type,
            icons, and buttons respond. Reload the page anytime to discard drafts and restore
            the shipped defaults.
          </p>
        </section>

        <PalettePlayground />

        <section className="rounded-default border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Typography</h2>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-base text-text-primary">Primary text</p>
            <p className="text-base text-text-secondary">Secondary text</p>
            <p className="text-base text-text-muted">Muted text — disabled indication</p>
          </div>
        </section>

        <section className="rounded-default border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Surfaces & states</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Surface", className: "bg-surface border border-border" },
              {
                name: "Secondary Surface",
                className: "bg-surface-secondary border border-border",
              },
              { name: "Border", className: "bg-border border border-border" },
              { name: "Hover", className: "bg-hover-bg border border-border" },
              { name: "Active", className: "bg-active-bg border border-border" },
              { name: "Primary", className: "bg-primary border border-border" },
            ].map((swatch) => (
              <div key={swatch.name} className="flex flex-col gap-2">
                <div className={`h-16 rounded-default ${swatch.className}`} />
                <p className="text-xs font-medium text-text-primary">{swatch.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-default border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Radius</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Default for UI chrome, small for compact chips, large for avatars and photos.
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-16 items-center justify-center rounded-large bg-primary text-primary-foreground">
                <HugeiconsIcon icon={UserIcon} size={28} strokeWidth={1.75} />
              </div>
              <span className="text-xs text-text-secondary">rounded-large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-28 rounded-default border border-border bg-surface-secondary" />
              <span className="text-xs text-text-secondary">rounded-default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-9 w-20 rounded-small border border-border bg-surface-secondary" />
              <span className="text-xs text-text-secondary">rounded-small</span>
            </div>
          </div>
        </section>

        <section className="rounded-default border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Interactive icons</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Hover and press to preview icon and background states against your palette.
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

        <section className="rounded-default border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Buttons</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="ui-primary rounded-default px-4 py-2 text-sm font-medium"
            >
              Primary action
            </button>
            <button
              type="button"
              className="ui-interactive rounded-default border border-border px-4 py-2 text-sm font-medium"
            >
              Secondary action
            </button>
            <button
              type="button"
              className="rounded-default bg-active-bg px-4 py-2 text-sm font-medium text-text-primary"
            >
              Active surface
            </button>
            <button
              type="button"
              disabled
              className="ui-primary rounded-default px-4 py-2 text-sm font-medium"
            >
              Primary disabled
            </button>
            <button
              type="button"
              disabled
              className="ui-interactive rounded-default border border-border px-4 py-2 text-sm font-medium"
            >
              Disabled
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

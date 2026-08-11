"use client";

import { useState } from "react";
import {
  Add01Icon,
  Bookmark02Icon,
  Calendar03Icon,
  Download01Icon,
  FavouriteIcon,
  Folder01Icon,
  Home01Icon,
  Mail01Icon,
  Message01Icon,
  Notification03Icon,
  Search01Icon,
  Settings01Icon,
  StarIcon as HugeStarIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BellIcon,
  BookmarkIcon,
  CalendarIcon,
  ChatRoundDotsIcon,
  DownloadIcon,
  FolderIcon,
  HeartIcon,
  HomeIcon,
  LetterIcon,
  MagnifierIcon,
  SettingsIcon,
  StarIcon,
  UserIcon as SolarUserIcon,
} from "@solar-icons/react/bold";
import { ThemeToggle } from "@/components/theme-toggle";
import { IconButton } from "@/components/icon-button";
import { PalettePlayground } from "@/components/palette-playground";
import { ThemeTabs } from "@/components/theme-tabs";

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
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Surface", className: "bg-surface border border-border" },
              {
                name: "Secondary Surface",
                className: "bg-surface-secondary border border-border-secondary",
              },
              { name: "Border", className: "bg-border border border-border" },
              {
                name: "Secondary Border",
                className: "bg-border-secondary border border-border",
              },
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
            Default for UI chrome, small for compact chips, large for avatars, photos, and
            pill tabs.
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-16 items-center justify-center rounded-large bg-primary text-primary-foreground">
                <HugeiconsIcon icon={UserIcon} size={28} strokeWidth={1.75} />
              </div>
              <span className="text-xs text-text-secondary">rounded-large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-28 rounded-default border border-border-secondary bg-surface-secondary" />
              <span className="text-xs text-text-secondary">rounded-default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-9 w-20 rounded-small border border-border-secondary bg-surface-secondary" />
              <span className="text-xs text-text-secondary">rounded-small</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-xs text-text-secondary">
              Tab · track surface + border · active secondary surface + secondary border · radius
              large
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ThemeTabs items={["Overview", "Tokens", "Preview"]} defaultValue="Overview" />
              <div
                className="h-9 w-16 rounded-large border border-border-secondary"
                style={{ backgroundColor: "var(--surface-secondary)" }}
                title="Secondary surface reference"
              />
              <span className="text-xs text-text-secondary">= secondary surface</span>
            </div>
          </div>
        </section>

        <section className="rounded-default border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Interactive icons</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Mixed set — Hugeicons (stroke) and Solar Bold (solid) side by side so you can
            compare how both styles read against the palette.
          </p>

          <p className="mt-4 text-xs font-medium text-text-secondary">Hugeicons · stroke</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <IconButton
              label="Home"
              active={activeNav === "home"}
              onClick={() => setActiveNav("home")}
            >
              <HugeiconsIcon icon={Home01Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Search"
              active={activeNav === "search"}
              onClick={() => setActiveNav("search")}
            >
              <HugeiconsIcon icon={Search01Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Notifications"
              active={activeNav === "notifications"}
              onClick={() => setActiveNav("notifications")}
            >
              <HugeiconsIcon icon={Notification03Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Messages"
              active={activeNav === "messages"}
              onClick={() => setActiveNav("messages")}
            >
              <HugeiconsIcon icon={Message01Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Mail"
              active={activeNav === "mail"}
              onClick={() => setActiveNav("mail")}
            >
              <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Calendar"
              active={activeNav === "calendar"}
              onClick={() => setActiveNav("calendar")}
            >
              <HugeiconsIcon icon={Calendar03Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Folder"
              active={activeNav === "folder"}
              onClick={() => setActiveNav("folder")}
            >
              <HugeiconsIcon icon={Folder01Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Bookmark"
              active={activeNav === "bookmark"}
              onClick={() => setActiveNav("bookmark")}
            >
              <HugeiconsIcon icon={Bookmark02Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Favorites"
              active={activeNav === "favorites"}
              onClick={() => setActiveNav("favorites")}
            >
              <HugeiconsIcon icon={FavouriteIcon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Starred"
              active={activeNav === "starred"}
              onClick={() => setActiveNav("starred")}
            >
              <HugeiconsIcon icon={HugeStarIcon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Profile"
              active={activeNav === "profile"}
              onClick={() => setActiveNav("profile")}
            >
              <HugeiconsIcon icon={UserIcon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton
              label="Settings"
              active={activeNav === "settings"}
              onClick={() => setActiveNav("settings")}
            >
              <HugeiconsIcon icon={Settings01Icon} size={20} strokeWidth={1.75} />
            </IconButton>
            <IconButton label="Disabled" disabled>
              <HugeiconsIcon icon={Settings01Icon} size={20} strokeWidth={1.75} />
            </IconButton>
          </div>

          <p className="mt-5 text-xs font-medium text-text-secondary">Solar Bold · solid</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <IconButton
              label="Home solid"
              active={activeNav === "home-solid"}
              onClick={() => setActiveNav("home-solid")}
            >
              <HomeIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Search solid"
              active={activeNav === "search-solid"}
              onClick={() => setActiveNav("search-solid")}
            >
              <MagnifierIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Notifications solid"
              active={activeNav === "notifications-solid"}
              onClick={() => setActiveNav("notifications-solid")}
            >
              <BellIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Messages solid"
              active={activeNav === "messages-solid"}
              onClick={() => setActiveNav("messages-solid")}
            >
              <ChatRoundDotsIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Mail solid"
              active={activeNav === "mail-solid"}
              onClick={() => setActiveNav("mail-solid")}
            >
              <LetterIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Calendar solid"
              active={activeNav === "calendar-solid"}
              onClick={() => setActiveNav("calendar-solid")}
            >
              <CalendarIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Folder solid"
              active={activeNav === "folder-solid"}
              onClick={() => setActiveNav("folder-solid")}
            >
              <FolderIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Bookmark solid"
              active={activeNav === "bookmark-solid"}
              onClick={() => setActiveNav("bookmark-solid")}
            >
              <BookmarkIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Favorites solid"
              active={activeNav === "favorites-solid"}
              onClick={() => setActiveNav("favorites-solid")}
            >
              <HeartIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Starred solid"
              active={activeNav === "starred-solid"}
              onClick={() => setActiveNav("starred-solid")}
            >
              <StarIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Profile solid"
              active={activeNav === "profile-solid"}
              onClick={() => setActiveNav("profile-solid")}
            >
              <SolarUserIcon color="currentColor" />
            </IconButton>
            <IconButton
              label="Settings solid"
              active={activeNav === "settings-solid"}
              onClick={() => setActiveNav("settings-solid")}
            >
              <SettingsIcon color="currentColor" />
            </IconButton>
            <IconButton label="Disabled solid" disabled>
              <SettingsIcon color="currentColor" />
            </IconButton>
          </div>
        </section>

        <section className="rounded-default border border-border bg-surface p-6">
          <h2 className="text-sm font-medium text-text-primary">Buttons</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Press Tab to move focus — soft background glow from{" "}
            <code className="rounded-small bg-surface-secondary px-1.5 py-0.5 text-text-primary">
              --ring
            </code>{" "}
            at 50% opacity (shared CN style), not a hard outline. Icon buttons mix Hugeicons and
            Solar Bold.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="ui-primary inline-flex items-center gap-2 rounded-default px-4 py-2 text-sm font-medium"
            >
              <HugeiconsIcon icon={Add01Icon} size={18} strokeWidth={1.75} />
              Primary action
            </button>
            <button
              type="button"
              className="ui-interactive inline-flex items-center gap-2 rounded-default border border-border px-4 py-2 text-sm font-medium"
            >
              <DownloadIcon color="currentColor" size={18} />
              Secondary action
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-default bg-active-bg px-4 py-2 text-sm font-medium text-text-primary"
            >
              <span className="ui-icon inline-flex">
                <HugeiconsIcon icon={Search01Icon} size={18} strokeWidth={1.75} />
              </span>
              Active surface
            </button>
            <button
              type="button"
              className="ui-interactive inline-flex items-center gap-2 rounded-default border border-border px-4 py-2 text-sm font-medium"
            >
              <HomeIcon color="currentColor" size={18} />
              Home
            </button>
            <button
              type="button"
              disabled
              className="ui-primary inline-flex items-center gap-2 rounded-default px-4 py-2 text-sm font-medium"
            >
              <HugeiconsIcon icon={Download01Icon} size={18} strokeWidth={1.75} />
              Primary disabled
            </button>
            <button
              type="button"
              disabled
              className="ui-interactive inline-flex items-center gap-2 rounded-default border border-border px-4 py-2 text-sm font-medium"
            >
              <SettingsIcon color="currentColor" size={18} />
              Disabled
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

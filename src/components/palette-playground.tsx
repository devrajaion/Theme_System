"use client";

import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, RefreshIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import { DEFAULT_THEME_CSS } from "@/lib/theme-tokens";
import { Button } from "@/components/ui/showcase";

export function PalettePlayground() {
  const [css, setCss] = useState(DEFAULT_THEME_CSS);
  const [copied, setCopied] = useState(false);
  const declarations = useMemo(() => (css.match(/--[\w-]+\s*:/g) ?? []).length, [css]);
  const copyCss = async () => { await navigator.clipboard.writeText(css); setCopied(true); window.setTimeout(() => setCopied(false), 1400); };

  return <section id="editor" className="section-enter overflow-hidden rounded-xl border bg-card">
    <style>{css}</style>
    <div className="flex flex-col gap-4 border-b p-5 sm:flex-row sm:items-center sm:justify-between">
      <div><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /><h2 className="font-semibold tracking-tight">Live CSS editor</h2></div><p className="mt-1 text-sm text-muted-foreground">Edit any token below. The entire preview updates as you type.</p></div>
      <div className="flex items-center gap-2"><span className="mr-1 hidden text-xs text-muted-foreground sm:inline">{declarations} declarations</span><Button variant="outline" size="sm" onClick={() => setCss(DEFAULT_THEME_CSS)}><HugeiconsIcon icon={RefreshIcon} size={15} /> Reset</Button><Button variant="secondary" size="sm" onClick={copyCss}><HugeiconsIcon icon={copied ? Tick02Icon : Copy01Icon} size={15} /> {copied ? "Copied" : "Copy CSS"}</Button></div>
    </div>
    <div className="grid lg:grid-cols-[minmax(0,1fr)_250px]">
      <div className="relative bg-muted/30"><div className="absolute left-0 top-0 flex h-full w-12 select-none flex-col items-end overflow-hidden border-r bg-muted/60 py-4 pr-3 font-mono text-[11px] leading-6 text-muted-foreground/60" aria-hidden>{Array.from({ length: Math.max(1, css.split("\n").length) }, (_, i) => <span key={i}>{i + 1}</span>)}</div><textarea aria-label="Theme CSS" spellCheck={false} value={css} onChange={(e) => setCss(e.target.value)} className="theme-scrollbar block h-[540px] w-full resize-y bg-transparent py-4 pl-16 pr-4 font-mono text-[12px] leading-6 text-foreground outline-none selection:bg-primary/20" /></div>
      <aside className="border-t bg-card p-5 lg:border-l lg:border-t-0"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Clean token map</p><div className="mt-4 space-y-5"><TokenFamily title="Surfaces" tokens={["surface","surface-secondary"]} /><TokenFamily title="Borders" tokens={["border","border-secondary"]} /><TokenFamily title="Inputs" tokens={["input-fill","input-border"]} /><TokenFamily title="Text" tokens={["text-primary","text-secondary","text-muted"]} /><TokenFamily title="States" tokens={["hover-bg","active-bg"]} /><TokenFamily title="Icons" tokens={["icon","icon-active"]} /><TokenFamily title="Actions" tokens={["primary","danger"]} /><TokenFamily title="Radius" tokens={["radius-small","radius-default","radius-large"]} /></div><div className="mt-6 rounded-lg border bg-muted/40 p-3 text-xs leading-5 text-muted-foreground">Inputs pair <code className="text-foreground">--input-fill</code> with <code className="text-foreground">--input-border</code> in both themes.</div></aside>
    </div>
  </section>;
}

function TokenFamily({ title, tokens }: { title: string; tokens: string[] }) { return <div><p className="mb-2 text-xs font-medium">{title}</p><div className="flex flex-wrap gap-1.5">{tokens.map((token) => <span key={token} className="rounded-md border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground">{token}</span>)}</div></div>; }

"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps, ButtonHTMLAttributes } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ComponentProps<typeof HugeiconsIcon>["icon"];
  label: string;
  active?: boolean;
};

export function IconButton({
  icon,
  label,
  active = false,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      data-active={active || undefined}
      className={`ui-interactive inline-flex size-10 items-center justify-center rounded-lg border border-border ${className}`}
      {...props}
    >
      <HugeiconsIcon
        icon={icon}
        size={20}
        strokeWidth={1.75}
        className="ui-icon"
      />
    </button>
  );
}

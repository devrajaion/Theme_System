"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  active?: boolean;
  children: ReactNode;
};

export function IconButton({
  label,
  active = false,
  className = "",
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      data-active={active || undefined}
      className={`ui-interactive inline-flex size-10 items-center justify-center rounded-default border border-border ${className}`}
      {...props}
    >
      <span className="ui-icon inline-flex items-center justify-center [&_svg]:size-5">
        {children}
      </span>
    </button>
  );
}

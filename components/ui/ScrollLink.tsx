"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { scrollToTarget } from "@/lib/scroll";
import { useLenis } from "@/lib/lenis-context";

type ScrollLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  offset?: number;
  duration?: number;
};

export function ScrollLink({
  href,
  children,
  offset,
  duration,
  onClick,
  ...props
}: ScrollLinkProps) {
  const { lenis } = useLenis();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (!href.startsWith("#")) return;

    event.preventDefault();
    scrollToTarget(lenis, href, { offset, duration });
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

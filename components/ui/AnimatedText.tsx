"use client";

export function AnimatedText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`section-body ${className}`.trim()}>{children}</div>;
}

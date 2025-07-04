"use client";

import { ReactNode } from "react";

export default function SliderSlide({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`snap-start shrink-0 flex items-center justify-center min-h-full ${className}`}
    >
      {children}
    </div>
  );
}

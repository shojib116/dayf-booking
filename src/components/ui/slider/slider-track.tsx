"use client";

import { ReactNode, useContext } from "react";
import { SliderContext } from "./slider";

export default function SliderTrack({
  children,
  className,
  hideScrollbar = true,
}: {
  children: ReactNode;
  className?: string;
  hideScrollbar?: boolean;
}) {
  const context = useContext(SliderContext);
  if (!context) return null;
  const { sliderRef } = context;
  return (
    <div
      ref={sliderRef}
      className={`overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 ${
        hideScrollbar ? "hide-scrollbar" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

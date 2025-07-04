"use client";

import { ReactNode, useContext } from "react";
import { SliderContext } from "./slider";

export default function SliderLeftButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(SliderContext);
  if (!context) return null;
  const { scroll, atStart } = context;
  return (
    <button
      onClick={() => scroll("left")}
      disabled={atStart}
      className={`${
        atStart ? "bg-grey-500/10 text-grey-500/50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

"use client";

import { ReactNode, useContext } from "react";
import { SliderContext } from "./slider";

export default function SliderRightButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(SliderContext);
  if (!context) return null;
  const { scroll, atEnd } = context;
  return (
    <button
      onClick={() => scroll("right")}
      disabled={atEnd}
      className={`${
        atEnd ? "bg-grey-500/10 text-grey-500/50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

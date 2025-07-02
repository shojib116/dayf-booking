"use client";

import { useContext } from "react";
import { TabsContext } from "./tabs";

export default function TabsContent({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  const { currentValue } = useContext(TabsContext);

  if (currentValue !== value) return;

  return <div className={`${className}`}>{children}</div>;
}

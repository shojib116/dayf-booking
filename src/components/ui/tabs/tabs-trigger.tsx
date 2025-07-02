"use client";

import { useContext } from "react";
import { TabsContext } from "./tabs";

export default function TabsTrigger({
  children,
  value,
  activeTabStyling = "",
  applyStyle = true,
  className,
}: {
  children: React.ReactNode;
  value: string;
  activeTabStyling?: string;
  applyStyle?: boolean;
  className?: string;
}) {
  const { currentValue, changeCurrentValue } = useContext(TabsContext);

  const activeTab = currentValue === value;

  return (
    <div
      onClick={() => changeCurrentValue(value)}
      className={`${className} ${activeTab && applyStyle && activeTabStyling}`}
    >
      {children}
    </div>
  );
}

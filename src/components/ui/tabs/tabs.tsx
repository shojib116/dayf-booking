"use client";

import React from "react";

const TabsContext = React.createContext({
  currentValue: "",
  changeCurrentValue: (value: string) => {},
});

export default function Tabs({
  children,
  defaultValue,
  className,
}: {
  children: React.ReactNode;
  defaultValue: string;
  className?: string;
}) {
  const [currentValue, setCurrentValue] = React.useState(defaultValue);

  function changeCurrentValue(value: string) {
    setCurrentValue(value);
  }

  return (
    <TabsContext.Provider value={{ currentValue, changeCurrentValue }}>
      <div className={`${className}`}>{children}</div>
    </TabsContext.Provider>
  );
}

export { TabsContext };

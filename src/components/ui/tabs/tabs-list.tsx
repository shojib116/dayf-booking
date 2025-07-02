import React, { ReactElement, isValidElement } from "react";
import TabsTrigger from "./tabs-trigger";

type TabsTriggerProps = React.ComponentProps<typeof TabsTrigger>;

export default function TabsList({
  children,
  activeTabStyling,
  className,
}: {
  children: React.ReactNode;
  activeTabStyling?: string;
  className?: string;
}) {
  if (!activeTabStyling) {
    activeTabStyling =
      "relative inline-block text-blue-500 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-2/6 after:h-[2px] after:bg-current";
  }

  const styledChildren = React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      return React.cloneElement(child as ReactElement<TabsTriggerProps>, {
        activeTabStyling,
      });
    }
    return child;
  });

  return <div className={className}>{styledChildren}</div>;
}

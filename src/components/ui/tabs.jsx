import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils";

export function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-4 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md",
        className
      )}
      {...props}
    />
  );
}

export function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-gray-100 dark:bg-gray-800 inline-flex h-10 rounded-lg p-[3px] space-x-2",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `cursor-pointer select-none rounded-md px-4 py-2 text-sm font-semibold
        text-gray-700 dark:text-gray-300
        border border-transparent
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
        data-[state=active]:bg-indigo-600 data-[state=active]:text-white
        data-[state=active]:shadow-lg
        hover:bg-indigo-100 dark:hover:bg-gray-700
        disabled:pointer-events-none disabled:opacity-50`,
        className
      )}
      {...props}
    />
  );
}


export function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "mt-4 outline-none focus:ring-0",
        className
      )}
      {...props}
    />
  );
}

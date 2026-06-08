"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

// Suppress the React 19 script tag warning from next-themes
// See: https://github.com/pacocoursey/next-themes/issues/374
const originalConsoleError = console.error;
if (typeof window !== "undefined") {
  console.error = (...args: Parameters<typeof console.error>) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag while rendering React component")
    ) {
      return;
    }
    originalConsoleError(...args);
  };
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

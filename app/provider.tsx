"use client";

import { ReactLenis } from "lenis/react";

export function DefaultProvider({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

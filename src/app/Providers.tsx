// app/Providers.tsx
"use client";

import React, { ReactNode } from "react";
import { SimulationProvider } from "./SimulationContext"; // Adjust the path if necessary

export function Providers({ children }: { children: ReactNode }) {
  return <SimulationProvider>{children}</SimulationProvider>;
}

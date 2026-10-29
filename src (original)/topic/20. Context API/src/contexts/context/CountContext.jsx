

import { createContext, useContext } from "react";

export const CountContext = createContext(null);

export function useCount() {
  const context = useContext(CountContext);

  if (context === null) {
    throw new Error("useCount must be used within CountProvider");
  }

  return context;
}



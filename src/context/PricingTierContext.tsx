// src/context/PricingTierContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type Tier = "Basic" | "Premium" | "Pro" | null;

const TierContext = createContext<{
  selectedTier: Tier;
  setSelectedTier: (tier: Tier) => void;
}>({
  selectedTier: null,
  setSelectedTier: () => {},
});

export const TierProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTier, setSelectedTier] = useState<Tier>(null);

  return (
    <TierContext.Provider value={{ selectedTier, setSelectedTier }}>
      {children}
    </TierContext.Provider>
  );
};

export const useTier = () => useContext(TierContext);

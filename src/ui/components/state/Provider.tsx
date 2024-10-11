import React from "react";
import { GlobalStateProvider } from "@redux";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <GlobalStateProvider>{children}</GlobalStateProvider>;
};

export default Provider;

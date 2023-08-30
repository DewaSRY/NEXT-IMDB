"use client";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }): JSX.Element => {
  return (
    <ThemeProvider enableSystem={false} attribute="data-theme">
      {children}
    </ThemeProvider>
  );
};

export default Provider;

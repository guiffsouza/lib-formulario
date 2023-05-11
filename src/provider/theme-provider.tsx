import React from "react";
import { ReactNode } from "react"
import { ThemeProvider as ThemeProviderStyled } from "styled-components"
import { themes } from "../services/themes";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProps){
  return <ThemeProviderStyled theme={themes}>{children}</ThemeProviderStyled>
}
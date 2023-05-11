import React from "react";
import { ThemeProvider } from "../../provider/theme-provider";
import { ButtonProps } from "./interface";
import { BoxBotao, Botao } from "./styled";

export function Button({ children, type, color, onclick }: ButtonProps) {
  return (
    <ThemeProvider>
      <BoxBotao>
        <Botao type={type} onClick={onclick} color={color}>
          {children}
        </Botao>
      </BoxBotao>
    </ThemeProvider>
  );
}
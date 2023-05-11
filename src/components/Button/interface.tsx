import React from "react";
import { ReactNode } from "react";

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: ReactNode;
  color?: string;
  onclick?: (e:  React.MouseEvent<HTMLButtonElement>) => void;
}
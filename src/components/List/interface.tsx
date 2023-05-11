import React from "react";

export interface InputListProps {
  label?: string;
  lista: string[];
  name: string;
  value?: string;
  border?: 'normal' | 'none';
  required?: boolean;
  onchange?: (e: React.ChangeEvent<HTMLElement>) => void
}

export interface InputListStyleProps {
  border: string
}
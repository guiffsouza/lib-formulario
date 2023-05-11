import React from "react";

export interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  name?: string;
  type?:'email' | 'text' | 'number' | 'tel' | 'password' | 'date' | 'datetime';
  value?: string | number;
  maxlength?: number;
  erro?: boolean;
  messageErro?: string;
  border: 'normal' | 'none';
  required: boolean;
  mask?: boolean;
  valueMask?: 'tel' | 'date' | 'dateFull';
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onblur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  oninvalid?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface CaixaTextoProps {
  border: string;
}

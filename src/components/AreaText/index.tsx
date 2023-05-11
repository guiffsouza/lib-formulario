import React from 'react';
import { ThemeProvider } from '../../provider/theme-provider';
import { InputProps } from './interface';
import {
  BoxErro,
  BoxInputText,
  BoxLabel,
  CaixaDeTexto,
  CaixaDeTextoMask,
  Error,
} from './styled';

export function Input({
  id,
  label,
  placeholder,
  name,
  type = 'text',
  value,
  maxlength,
  erro = false,
  messageErro,
  border,
  required = false,
  mask = false,
  valueMask = 'tel',
  onblur,
  onchange,
  oninvalid,
}: InputProps) {
  const mascara = {
    tel: '(99) 9 9999-9999',
    date: '99/99/99',
    dateFull: '99/99/9999',
  };

  const validaInput = () => {
    if (mask) {
      return (
        <CaixaDeTextoMask
          id={id}
          placeholder={placeholder}
          onChange={onchange}
          name={name}
          type="text"
          value={value}
          onBlur={onblur}
          maxLength={maxlength}
          required={required}
          border={border}
          mask={mascara[valueMask]}
        />
      );
    }
    return (
      <CaixaDeTexto
        border={border}
        id={id}
        placeholder={placeholder}
        onChange={onchange}
        name={name}
        type={type}
        value={value}
        onBlur={onblur}
        maxLength={maxlength}
        onInvalid={oninvalid}
        required={required}
      />
    );
  };

  return (
    <ThemeProvider>
      <BoxInputText>
        <BoxLabel>
          <label>{label}</label>
        </BoxLabel>
        {validaInput()}
        <BoxErro>
          <Error>{erro ? messageErro : ''}</Error>
        </BoxErro>
      </BoxInputText>
    </ThemeProvider>
  );
}

import React from "react";
import { ThemeProvider } from "../../provider/theme-provider";
import { BoxInputText, BoxLabel } from "../AreaText/styled";
import { Select } from "./styled";
import { InputListProps } from "./interface";

export function InputList({ label, lista, onchange, name, value, border='normal', required=false }: InputListProps) {
  return (
    <ThemeProvider>
      <BoxInputText>
        <BoxLabel>
          <label>{label}</label>
        </BoxLabel>
        <Select 
          border={border} 
          name={name} 
          onChange={onchange} 
          defaultValue={value} 
          required={required}>
          {lista.map((list, key) => {
            return (
              <option value={list} key={key}>
                {list}
              </option>
            );
          })}
        </Select>
      </BoxInputText>
    </ThemeProvider>
  );
}
import styled from "styled-components";
import { InputListStyleProps } from "./interface";

export const Select = styled.select<InputListStyleProps>`
  width: 100%;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  font-weight: 700;
  color: rgb(118, 118, 118);
  ${({theme, border}) => {
    return {
      border: theme.borda[border]
    }
  }}

  :active {
    background-color: ${({theme}) => theme.background.preto};
    color:rgb(118, 118, 118);
  }
  :focus {
    background-color: ${({theme}) => theme.background.branco};
    color: ${({theme}) => theme.background.branco};
    font-weight: 700;
  }
  :checked {
    background-color: ${({theme}) => theme.background.preto};
    color: ${({theme}) => theme.background.branco};
  }
`;
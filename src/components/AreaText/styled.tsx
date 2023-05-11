import styled from "styled-components";
import InputMask from "react-input-mask";
import { CaixaTextoProps } from "./interface";

export const BoxInputText = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  padding: 5px 0;
  font-family: "Roboto", sans-serif;

  :first-child {
    margin-right: 40px;
    @media screen and (max-width: 768px) {
      margin: 5px 0;
    }
  }

  label {
    font-family: "Roboto", sans-serif;
    color: ${({theme}) => theme.background.branco};
    font-weight: 400;
    width: 100%;
  }
`;

export const BoxLabel = styled.div`
  width: 100%;
  margin-bottom: 1px;
`;

export const CaixaDeTexto = styled.input<CaixaTextoProps>`
  display: flex;
  padding: 16.5px 14px;
  width: 100%;
  font-weight: 700;
  border-radius: 4px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  border-width: 1px;
  box-sizing: border-box;

  &::-webkit-datetime {
    color: rgb(118, 118, 118);
  }

  ${({theme, border}) => {
    return {
      border: theme.borda[border]
    }
  }}
`;

export const CaixaDeTextoMask = styled(InputMask)<{border: string}>`
  display: flex;
  padding: 16.5px 14px;
  width: 100%;
  font-weight: 700;
  border-width: 1px;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  ${({theme, border}) => {
    return {
      border: theme.borda[border]
    }
  }}
`;

export const BoxErro = styled.div`
  padding: 5px 0;
`;

export const Error = styled.span`
  font-weight: 700;
  color: ${({theme}) => theme.background.branco};
  font-size: 14px;
`;
import styled from "styled-components";

export const BoxBotao = styled.div`
  width: 100%;
`;

export const Botao = styled.button`
  width: 100%;
  color: ${({theme}) => theme.background.branco};
  font-weight: 700;
  border: none;
  cursor: pointer;
  padding: 10px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  ${({theme, color}) => {
    
    const validaCor = () => {
      if(color){
        return color
      }
      return theme.button.background
    }

    return {
      backgroundColor: validaCor(),
    }
  }}

  :hover {
    background-color: ${({theme}) => theme.button.hover};
    transition: all ease-in 0.3s;
  }
`;
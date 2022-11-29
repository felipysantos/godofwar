import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  width: 100vw;
  background-color: ${theme.colors.black};
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 213px;
  height: 24px;
  color: ${theme.colors.white};
  font-family: ${theme.font.fontFamily};
  font-size: ${theme.font.fontSizeRegular};
  font-weight: ${theme.font.fontWeightSubitle};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94px;
  height: 100%;
`;

export const Button = styled.button`
  background: none;
  color: ${theme.colors.white};
  font-family: "Archivo", sans-serif;
  font-size: ${theme.font.fontSizeRegular};
  font-weight: ${theme.font.fontWeightSubitle};
  border: 2px solid ${theme.colors.white};
  width: 43px;
  height: 100%;
`;

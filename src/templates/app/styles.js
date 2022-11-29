import styled from "styled-components";
import godOfWarBackgroundLauncSection from "../../assets/bg-hero.jpg";
import { theme } from "../../styles/theme";

export const AppTemplate = styled.section``;

export const launchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 800px;
  background-image: url(${godOfWarBackgroundLauncSection});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const articleSectionLeft = styled.article`
  display: flex;
  flex-direction: column;
  font-family: ${theme.font.fontFamily};
  color: ${theme.colors.white};
  max-width: 782px;
  h1 {
    font-size: ${theme.font.fontSizeTitle};
    font-weight: ${theme.font.fontWeightTitle};
    margin-top: 24px;
    margin-bottom: 18px;
  }
  p {
    font-size: ${theme.font.fontSizeMedium};
    img {
      margin-right: 15px;
    }
  }
`;

export const DivLaunchLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 451px;
  height: 58px;
  margin-top: 40px;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37.5%;
  max-width: 168px;
  height: 100%;
  font-family: ${theme.font.fontFamily};
  font-weight: 500;
  font-size: 20px;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
`;

export const Button = styled.button`
  width: 62.5%;
  height: 100%;
  border: none;
  font-family: ${theme.font.fontFamily};
  font-weight: 500;
  font-size: 20px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.blue};
  cursor: pointer;
`;

export const articleSectionRight = styled.article`
  display: flex;
  flex-direction: column;
  font-family: ${theme.font.fontFamily};
  color: ${theme.colors.white};
  max-width: 443px;
  h1 {
    font-size: ${theme.font.fontSizeTitle};
    font-weight: ${theme.font.fontWeightTitle};
    margin-top: 24px;
    margin-bottom: 18px;
  }
  p {
    font-size: ${theme.font.fontSizeMedium};
    img {
      margin-right: 15px;
    }
  }
`;

export const DivLaunchRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  p {
    font-size: ${theme.font.fontSizeMedium};
    img {
      margin-right: 15px;
    }
  }
`;

export const DivLaunchRightLegend = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  p {
    font-size: ${theme.font.fontSizeMedium};
    img {
      margin-right: 15px;
    }
  }
`;

export const ButtonTriller = styled.div`
  cursor: pointer;
  border: 4px solid ${theme.colors.blue};
`;

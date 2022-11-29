import { HeaderComponent } from "../../components/header";
import * as Styled from "./styles";
import bulletImage from "../../assets/bullets.svg";
import thumbGif from "../../assets/thumbnail.gif";
import play from "../../assets/play.svg";
import yearsOldLegend from "../../assets/faixa-etaria.png";

export const App = () => {
  return (
    <Styled.AppTemplate>
      <HeaderComponent />
      <Styled.launchSection>
        <Styled.articleSectionLeft>
          <p>
            <img src={bulletImage} /> Lançamento dia 09/11/2022
          </p>
          <h1>God of War Ragnarök</h1>
          <p>
            Os maiores heróis dos nove reinos, lutando por um futuro em que
            acreditam.
          </p>
          <Styled.DivLaunchLeft>
            <Styled.Value>R$ 349,00</Styled.Value>
            <Styled.Button>Comprar na pré-venda</Styled.Button>
          </Styled.DivLaunchLeft>
        </Styled.articleSectionLeft>

        <Styled.articleSectionRight>
          <p>Assista aos trailer</p>
          <Styled.DivLaunchRight>
            <Styled.ButtonTriller>
              <img src={thumbGif} alt={"Thumbnail image"} />
              <img src={play} alt={"Play image"} />
            </Styled.ButtonTriller>
            <Styled.DivLaunchRightLegend>
              <img src={yearsOldLegend} alt="Years old legend" />
              <p>Drogas Lícitas, Linguagem Imprópria, Violência Extrema</p>
            </Styled.DivLaunchRightLegend>
          </Styled.DivLaunchRight>
        </Styled.articleSectionRight>
      </Styled.launchSection>
    </Styled.AppTemplate>
  );
};

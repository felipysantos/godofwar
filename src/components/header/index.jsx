import { Button, ButtonContainer, HeaderDiv, HeaderStyle } from "./styles";
import sony from "../../assets/sony.svg";
import godOfWarLogo from "../../assets/logo.jpg";
export const HeaderComponent = () => {
  return (
    <HeaderStyle>
      <img src={sony} alt={"Logo Sony"} />
      <img src={godOfWarLogo} alt={"Logo God Of War: Ragnarok"} />
      <HeaderDiv>
        <p>Disponível para</p>
        <ButtonContainer>
          <Button>PS4</Button>
          <Button>PS5</Button>
        </ButtonContainer>
      </HeaderDiv>
    </HeaderStyle>
  );
};

import sony from "../../assets/sony.svg";
import godOfWarLogo from "../../assets/logo.jpg";
import { HStack, Image, Tag, Text } from "@chakra-ui/react";
export const HeaderComponent = () => {
  return (
    <HStack
      w={"100%"}
      minW={"375px"}
      h={"80px"}
      bgColor={"#000"}
      justifyContent={"space-around"}
    >
      <Image display={{ base: "none", md: "block" }} src={sony} />
      <Image src={godOfWarLogo} maxW={{ base: "8.75rem", lg: "12.0625rem" }} />
      <HStack spacing={"1.8rem"}>
        <Text
          display={{ base: "none", lg: "block" }}
          fontFamily={"Archivo, sans-serif"}
          color={"#fff"}
        >
          Disponível para
        </Text>

        <HStack spacing={"0.8rem"}>
          <Tag
            borderRadius={0}
            bg={"none"}
            color={"#fff"}
            border={"2px solid #fff"}
          >
            PS4
          </Tag>
          <Tag
            borderRadius={0}
            bg={"none"}
            color={"#fff"}
            border={"2px solid #fff"}
          >
            PS5
          </Tag>
        </HStack>
      </HStack>
    </HStack>
  );
};

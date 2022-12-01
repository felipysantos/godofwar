import sony from "../../assets/sony.svg";
import godOfWarLogo from "../../assets/logo.jpg";
import { HStack, Image, Tag, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
export const HeaderComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <HStack
      ref={ref}
      w={"100%"}
      minW={"375px"}
      h={"80px"}
      bgColor={"#000"}
      justifyContent={"space-around"}
      overflow={"hidden"}
    >
      <Image
        style={{
          transform: isInView ? "none" : "translateX(-60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        display={{ base: "none", md: "block" }}
        src={sony}
      />
      <Image
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        src={godOfWarLogo}
        maxW={{ base: "8.75rem", lg: "12.0625rem" }}
      />
      <HStack
        style={{
          transform: isInView ? "none" : "translateX(60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        spacing={"1.8rem"}
      >
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

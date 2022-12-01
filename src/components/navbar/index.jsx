import { Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

import { navbarArrButtons } from "./array";

export const NavbarComponent = () => {
  return (
    <Flex
      w={"100vw"}
      flexWrap={"wrap"}
      gap={{ base: "2rem", xl: "0" }}
      align={"center"}
      justifyContent={"space-around"}
      py={"5rem"}
    >
      {navbarArrButtons.map((element, index) => (
        <VStack
          color={"#fff"}
          fontSize={"14px"}
          w={{ base: "37%", md: "30%", lg: "10%" }}
          key={index}
        >
          <Image src={element.urlImage} maxW={"30px"} />
          <Text textAlign={{ base: "center" }}>{element.description}</Text>
        </VStack>
      ))}
    </Flex>
  );
};

import { Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { navbarArrButtons } from "./array";

export const DetailsComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex 
    ref={ref}
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
          style={{
            transform: isInView ? "none" : "translateY(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={element.urlImage} maxW={"30px"} />
          <Text textAlign={{ base: "center" }}>{element.description}</Text>
        </VStack>
      ))}
    </Flex>
  );
};

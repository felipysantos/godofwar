import bullets from "../../assets/bullets.svg";
import bgStory from "../../assets/bg-story.png";
import logo from "../../assets/logo-sta-monica-sony.png";
import kratosAtreus from "../../assets/kratos-atreus.png";

import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Stack
      flexDir={{ base: "column-reverse", lg: "row" }}
      alignItems={"center"}
      justifyContent={{ lg: "space-evenly" }}
      bgImage={bgStory}
      bgPos={"top center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      w={"100vw"}
      minW={"375px"}
      pt={"80px"}
      ref={ref}
    >
      {/* Left Div */}
      <Stack
        fontFamily={"Archivo, sans-serif"}
        color={"#fff"}
        maxW={{ base: "80vw", md: "560px", lg: "370px", xl: "699px" }}
        flexDir={{ base: "column" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        style={{
          transform: isInView ? "none" : "translateX(-60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Flex
          alignItems={{ base: "center" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
        >
          <Image src={bullets} marginRight={{ base: "0.4rem", lg: "0.5rem" }} />
          <Heading
            fontFamily={"Archivo, sans-serif"}
            fontSize={{
              base: "0.8rem",
              md: "1.2rem",
              lg: "0.8rem",
              xl: "1.125rem",
            }}
          >
            Sony Interactive Entertainment
          </Heading>
        </Flex>

        <Heading
          fontFamily={"Archivo, sans-serif"}
          fontSize={{ base: "32px", md: "3.6rem", lg: "1.8rem" }}
          textAlign={{ base: "center", lg: "left" }}
          lineHeight={"97.5%"}
          fontWeight={"700"}
          pt={"1.5rem"}
          maxW={{ xl: "450px" }}
        >
          Embarque com Kratos e Atreus em uma jornada épica
        </Heading>
        <Text
          maxW={{
            base: "18rem",
            md: "100%",
            lg: "35rem",
          }}
          fontSize={{ base: "0.875rem", lg: "0.8rem", xl: "1.125rem" }}
          textAlign={{ base: "center", lg: "left" }}
          pt={"24px"}
          pb={"42px"}
          lineHeight={"160%"}
          color={"#BDC2CB"}
        >
          O Fimbulwinter já começou. Kratos e Atreus devem viajar pelos Nove
          Reinos em busca de respostas enquanto as forças asgardianas se
          preparam para uma batalha profetizada que causará o fim do mundo.
          Nessa jornada, eles explorarão paisagens míticas impressionantes e
          enfrentarão inimigos aterradores: deuses nórdicos e monstros. A ameaça
          do Ragnarök se aproxima. Kratos e Atreus terão de escolher entre a
          segurança deles próprios e a dos reinos.
        </Text>

        {/* Corporation */}
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          justifyContent={{ lg: "center" }}
          py={4}
        >
          <Image
            mr={"13px"}
            maxW={{ base: "100px", lg: "90px" }}
            pb={4}
            src={logo}
          />
          <Text
            fontSize={{ base: "0.8rem", md: "1.2rem", lg: "0.8rem" }}
            w={{ base: "280px", md: "300px", lg: "280px" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Do Santa Monica Studio, esta é a sequência da aclamada versão de
            2018 de God of War.
          </Text>
        </Flex>
      </Stack>
      {/* Right div */}
      <Box
        pb={8}
        style={{
          transform: isInView ? "none" : "translateX(60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Image src={kratosAtreus} maxW={{ lg: "450px", xl: "600px" }} />
      </Box>
    </Stack>
  );
};

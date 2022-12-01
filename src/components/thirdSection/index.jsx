import bullets from "../../assets/bullets.svg";
import bgChar from "../../assets/bg-characters.png";
import godOfWarLogo from "../../assets/logo.jpg";
import battleAxe from "../../assets/axel.png";
import { Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Carousel } from "../carousel";

export const ThirdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Stack
      alignItems={"center"}
      justifyContent={{ lg: "space-evenly" }}
      bgImage={bgChar}
      bgPos={"top center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      w={"100vw"}
      minW={"375px"}
      pt={"80px"}
      ref={ref}
    >
      <Flex
        py={10}
        alignItems={"center"}
        justifyContent={{ lg: "space-evenly" }}
        flexDir={{ base: "column", lg: "row" }}
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
            <Image
              src={bullets}
              marginRight={{ base: "0.4rem", lg: "0.5rem" }}
            />
            <Heading
              fontFamily={"Archivo, sans-serif"}
              fontSize={{
                base: "0.8rem",
                md: "1.2rem",
                lg: "0.8rem",
                xl: "1.125rem",
              }}
            >
              Conheça os personsagens
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
            Toda grande aventura é uma história esperando para ser contada
          </Heading>
          <Text
            maxW={{
              base: "18rem",
              md: "100%",
              lg: "35rem",
              // xl: "100%",
            }}
            fontSize={{ base: "0.875rem", lg: "0.8rem", xl: "1.125rem" }}
            textAlign={{ base: "center", lg: "left" }}
            pt={"24px"}
            pb={"42px"}
            lineHeight={"160%"}
            color={"#BDC2CB"}
          >
            Reviva o começo da jornada nórdica épica de Kratos e Atreus em Mitos
            de Midgard. Um alerta para quem não está familiarizado com God of
            War: spoilers à frente.
          </Text>
        </Stack>

        {/* Right div */}
        <Flex
          pb={8}
          alignItems={"center"}
          flexDir={{ base: "column", lg: "row" }}
          style={{
            transform: isInView ? "none" : "translateX(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={battleAxe} maxW={{ lg: "450px", xl: "600px" }} />
          <VStack>
            <Image src={godOfWarLogo} />
            <Text
              w={"143px"}
              color={"#fff"}
              textAlign={{ base: "center", lg: "left" }}
            >
              Lançamento dia <br />
              <strong>09/11/2022</strong>
            </Text>
          </VStack>
        </Flex>
      </Flex>
      {/* Gallery */}

      <Carousel />
    </Stack>
  );
};

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HeaderComponent } from "../../components/header";
import bullets from "../../assets/bullets.svg";
import ageGroup from "../../assets/faixa-etaria.png";
import play from "../../assets/play.svg";
import thumbnail from "../../assets/thumbnail.gif";
import bgHero from "../../assets/bg-hero.jpg";
import bgStory from "../../assets/bg-story.png";
import bgChar from "../../assets/bg-characters.png";
import logo from "../../assets/logo-sta-monica-sony.png";
import godOfWarLogo from "../../assets/logo.jpg";
import kratosAtreus from "../../assets/kratos-atreus.png";
import battleAxe from "../../assets/axel.png";

import { NavbarComponent } from "../../components/navbar";
import { Carousel } from "../../components/carousel";
export const App = () => {
  return (
    <VStack bgColor={"black"} w={"100%"} minW={"375px"} overflow={"hidden"}>
      <HeaderComponent />

      {/* First Section */}
      <Stack
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "center" }}
        justifyContent={{ lg: "space-evenly" }}
        bgImage={bgHero}
        bgPos={"top center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        w={"100vw"}
        minW={"375px"}
        px={{ lg: 8 }}
        h={"800px"}
      >
        {/* Left Div */}
        <Stack
          fontFamily={"Archivo, sans-serif"}
          color={"#fff"}
          pt={{ base: "4rem", lg: "0" }}
          maxW={{ base: "80vw", md: "560px", lg: "420px", xl: "699px" }}
          flexDir={{ base: "column" }}
          alignItems={{ base: "center", lg: "flex-start" }}
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
                xl: "18px",
              }}
            >
              Lançamento dia 09/11/2022
            </Heading>
          </Flex>

          <Heading
            fontFamily={"Archivo, sans-serif"}
            fontSize={{ base: "3rem", md: "3.6rem", lg: "80px" }}
            textAlign={{ base: "center", lg: "left" }}
            lineHeight={"97.5%"}
            fontWeight={"700"}
            marginTop={"1.5rem"}
            marginBottom={"1.125rem"}
          >
            God of War Ragnarök
          </Heading>
          <Text
            maxW={{ base: "18.125rem", md: "100%", lg: "55%", xl: "100%" }}
            fontSize={{ base: "1rem", lg: "0.8rem", xl: "18px" }}
            textAlign={{ base: "center", lg: "left" }}
            pt={"18px"}
          >
            Os maiores heróis dos nove reinos, lutando por um futuro em que
            acreditam.
          </Text>

          {/* Value + Sale Button */}
          <Flex
            width={"100%"}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={{ md: "center", lg: "flex-start" }}
            py={{ base: "1.5rem" }}
          >
            <Tag
              borderRadius={"none"}
              w={"100%"}
              maxW={{ md: "9.875rem", lg: "100px", "2xl": "10.5rem" }}
              h={{ base: "3.5rem", lg: "2.5rem" }}
              bgColor={"#fff"}
              justifyContent={"center"}
            >
              R$ 349,00
            </Tag>
            <Button
              w={"100%"}
              maxW={{ md: "380px ", lg: "200px", xl: "262px" }}
              h={{ base: "3.5rem", lg: "2.5rem" }}
              borderRadius={"none"}
              bgColor={"#3164E9"}
              color={"#fff"}
            >
              Comprar na pré-venda
            </Button>
          </Flex>
        </Stack>

        {/* Right Div */}
        <Stack
          fontFamily={"Archivo, sans-serif"}
          color={"#fff"}
          maxW={{ base: "80vw", md: "560px" }}
          flexDir={{ base: "column" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          pt={{ xl: "220px" }}
        >
          <Text fontSize={{ base: "0.8rem", md: "1.2rem", lg: "1.125rem" }}>
            Assista ao trailer
          </Text>
          {/* Thumb group */}
          <Box
            display={"flex"}
            flexDir={"column-reverse"}
            position={"relative"}
            border={"4px solid #3265EA"}
          >
            <Image src={thumbnail} maxW={{ base: "18.75rem", xl: "24rem" }} />
            <Image
              src={play}
              position={"absolute"}
              marginLeft={"1rem"}
              marginBottom={"0.875rem"}
            />
          </Box>

          {/* Restrition */}
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            alignItems={"center"}
            py={4}
          >
            <Image
              src={ageGroup}
              alt={"Age group"}
              mr={"13px"}
              maxW={"40px"}
              pb={2}
            />
            <Text
              fontSize={{ base: "0.75rem", md: "1.2rem", lg: "0.875rem" }}
              w={{ base: "240px", md: "300px", lg: "280px" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Drogas Lícitas, Linguagem Imprópria, Violência Extrema
            </Text>
          </Flex>
        </Stack>
      </Stack>

      {/* Details section */}
      <NavbarComponent />

      {/* Second section */}
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
        // h={"899px"}
        pt={"80px"}
      >
        {/* Left Div */}
        <Stack
          fontFamily={"Archivo, sans-serif"}
          color={"#fff"}
          maxW={{ base: "80vw", md: "560px", lg: "370px", xl: "699px" }}
          flexDir={{ base: "column" }}
          alignItems={{ base: "center", lg: "flex-start" }}
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
            enfrentarão inimigos aterradores: deuses nórdicos e monstros. A
            ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher
            entre a segurança deles próprios e a dos reinos.
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
        <Box pb={8}>
          <Image src={kratosAtreus} maxW={{ lg: "450px", xl: "600px" }} />
        </Box>
      </Stack>

      {/* Third section */}
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
              Reviva o começo da jornada nórdica épica de Kratos e Atreus em
              Mitos de Midgard. Um alerta para quem não está familiarizado com
              God of War: spoilers à frente.
            </Text>
          </Stack>

          {/* Right div */}
          <Flex
            pb={8}
            alignItems={"center"}
            flexDir={{ base: "column", lg: "row" }}
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
        <Box w={"90vw"} h={"auto"} pb={"100px"} >
          <Carousel />
        </Box>
      </Stack>
    </VStack>
  );
};

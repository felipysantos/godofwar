import {
  Box,
  Button,
  Flex,
  Heading,
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
import { NavbarComponent } from "../../components/navbar";
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
            Assista aos trailer
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

      {/* Second section */}
      <NavbarComponent />
    </VStack>
  );
};

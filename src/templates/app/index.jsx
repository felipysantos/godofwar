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


import { DetailsComponent } from "../../components/details";
import { Carousel } from "../../components/carousel";
import { FirstSection } from "../../components/firstSection";
import { SecondSection } from "../../components/secondSection";
import { ThirdSection } from "../../components/thirdSection";

export const App = () => {
  return (
    <VStack bgColor={"black"} w={"100%"} minW={"375px"} overflow={"hidden"}>
      <HeaderComponent />
      <FirstSection />
      <DetailsComponent />
      <SecondSection />
      <ThirdSection />
    </VStack>
  );
};

import { Box, Button, Image, Stack, Text, VStack } from "@chakra-ui/react";

export const Card = ({ children }) => {
  return (
    <Stack
      spacing={0}
      w={"100%"}
      minH={{ base: "350px" }}
      overflow={"hidden"}
      _hover={{
        cursor: "pointer",
        img: {
          transform: "scale(1.1)",
          filter: "grayscale(0)",
        },
        button: {
          margin: "100% 50%",
          opacity:"1"
        },
      }}
      color={"#fff"}
    >
      <Box
        display={"flex"}
        overflow={"hidden"}
        w={"100%"}
        h={"100%"}
        position={"relative"}
      >
        <Image
          transition={"linear 0.3s"}
          filter={"grayscale(0.65)"}
          src={children.urlImage}
          alt={"Carousel Image"}
        />
        <Button
          position={"absolute"}
          m={"110% 50%"}
          transform={"translate(-50%)"}
          transition={"linear 0.3s"}
          opacity={0}
          borderRadius={"0"}
          bgColor={"#3265EA"}
          _hover={
            {
              filter:"brightness(1.1)",
            }
          }
        >
          Saiba mais
        </Button>
      </Box>
      <Text
        fontSize={"16px"}
        fontFamily={"Archivo, sans-serif"}
        fontWeight={"bold"}
        pt={"24px"}
        mb={"7px"}
      >
        {children.name}
      </Text>
      <Text fontSize={"14px"} fontFamily={"Archivo, sans-serif"}>
        {children.title}
      </Text>
    </Stack>
  );
};

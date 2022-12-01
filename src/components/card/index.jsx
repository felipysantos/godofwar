import { Image, Stack, Text, VStack } from "@chakra-ui/react";

export const Card = ({ children }) => {
  return (
    <Stack
      spacing={0}
      w={"100%"}
      max={{ base: "300px", lg: "384px" }}
      height={"500px"}
      overflow={"hidden"}
      _hover={{
          cursor: "pointer",
          img: {
              transform: "scale(1.1)",
            },
      }}
    >
      <Image transition={"linear 0.3s"} src={children.urlImage} alt={"Carousel Image"} />
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

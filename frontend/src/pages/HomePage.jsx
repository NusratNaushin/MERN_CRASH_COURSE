import { Container, VStack, Text } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="30px"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          textAlign="center"
        >
          Current Products 🚀
        </Text>

        <Text fontSize={'xl'} textAlign={"center"} fontWeight={'bold'} color = 'teal'>

          No Products found 😢 {" "}
          <Link to = {"/create"}></Link>

        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;

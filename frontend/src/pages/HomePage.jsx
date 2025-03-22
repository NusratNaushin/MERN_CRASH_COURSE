import { Container, VStack, Text } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  console.log("Initial products state:", products); // ✅ Check Zustand's initial state

  useEffect(() => {
    console.log("Fetching products...");
    fetchProducts(); // ✅ Call the function

    setTimeout(() => {
      console.log("Updated products state:", useProductStore.getState().products); // ✅ Check if Zustand updates state
    }, 2000); // Delay to allow async state update
  }, [fetchProducts]);

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

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product)=>(<ProductCard key = {product._id} product = {product}/>))}
        </SimpleGrid>

        {products.length === 0 && (<Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color="teal">
          No Products found 😢{" "}
          <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>)}
      </VStack>
    </Container>
  );
};

export default HomePage;

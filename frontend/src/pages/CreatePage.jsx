import { Container, Input, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { useProductStore } from '../store/product';
import { useToast } from "@chakra-ui/react"
const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        description: "",
        image: "" // Ensure image field exists
    });

    const toast = useToast()

    const bgColor = useColorModeValue("white", "gray.800"); // Store useColorModeValue in a variable
    const {createProduct} = useProductStore()

    
    const handleAddProduct =  async() => {
        const {success , message} = await createProduct(newProduct)
        // console.log("success " ,success)
        // console.log("message " ,message)

        if(!success){
            toast({
                title : "Error",
                description : message ,
                status : "error",
                isClosable : true 
            })
          }

          else {
            toast({
                title : "Success" ,
                description : message ,
                status : "success",
                isClosable : true 
            })
          }

          setNewProduct({name : "" , price : "" , image : ""})
    };

    return (
        <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as="h1" size="xl" textAlign="center" mb={8}>
                    Create New Product
                </Heading>

                <Box w="full" bg={bgColor} p={6} rounded="lg" shadow="md">
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            name="name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder="Price"
                            name="price"
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder="Image URL"
                            name="image"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button colorScheme="teal" onClick={handleAddProduct} w="full">
                            ADD PRODUCT
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default CreatePage;

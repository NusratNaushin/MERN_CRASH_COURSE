import { Container, Input, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Box, Button, Heading, VStack } from '@chakra-ui/react'

const CreatePage = () => {


    const [newProduct , setNewProduct] = useState({
        name : "",
        price : 0,
        description : ""})

    const handleAddProduct = () => {
        console.log(newProduct)
    }
    



      return <Container maxW={"container.sm"}>
        <VStack
        spacing = {8}>

            <Heading as={"h1"} size = {"xl"} textAlign = {"center"} mb = {8}>
                Create new Product 
            </Heading>

            <Box
            
            w = {"full"} bg = {useColorModeValue("white" ,"gray.800")} p = {6} rounded = {"lg"} shadow = {"md"}>
                <VStack spacing = {4}>
                    <Input 
                        placeholder = {"Product Name "}
                        name = 'name'
                        value = {newProdct.name}
                        onChange = { (e) => setNewProduct ({ ...newProduct , name : e.target.value})}
                    />
                    <Input
                    placeholder = {"Price "}
                    name = 'price'
                    type = 'number'
                    value = {newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct , price : e.target.value})}
                    />
                    <Input
                    placeholder = 'Image URL'
                    name = 'Image'
                    value = {newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct , image : e.target.value})}
                    />


                    <Button colorScheme = {"teal"} onClick = {handleAddProduct} w = 'full'>
                        ADD PRODUCT
                    </Button>
                </VStack>
            </Box>
        </VStack>
      </Container>
}

export default CreatePage
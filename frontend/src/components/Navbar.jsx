import { Container, useColorMode} from "@chakra-ui/react";
import React from "react";
import { Flex, HStack, Text, Button  } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { Sun as LuSun } from "react-feather";

const Navbar = () => {

    const {colorMode , toggleColorMode} = useColorMode();
  return (
    <Container maxW="1140px" px={4} > 
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l,rgb(40, 45, 202),rgb(0, 255, 55))"
          bgClip="text"
          fontSize={{ base : "22" , sm : "28" }}
          fontWeight="extrabold"
          textTransform = {"uppercase"}
          textAlign = {"center"}
        >
          <Link to = {"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing = {2} alignItems = {"center"}>
            <Link to= {"/create"}>
            <Button>
                <PlusSquareIcon fontSize={20}>

                </PlusSquareIcon>
            </Button>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon/>: <LuSun size = "20"/>}
            </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

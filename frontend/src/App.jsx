// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Box, Button, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar";
import React, { use } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { useProductStore } from "./store/product";
function App() {

  
  return (
    <Box minH={"100vh"} bg = {useColorModeValue("teal.50","gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;

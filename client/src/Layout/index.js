import React from 'react'

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import 
{ 
  Box,
  Drawer,
  DrawerContent,
  useDisclosure as UseDisclosure
  }
 from "@chakra-ui/react";

function index({ children }) {
  const { isOpen, onOpen, onClose } = UseDisclosure();
  return (
    <Box minH="100vh" >
    <Sidebar
      onClose={() => onClose}
      display={{ base: "none", md: "none" }}
    />
    <Drawer
      autoFocus={false}
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      size="full"
    >
      <DrawerContent>
        <Sidebar onClose={onClose} />
      </DrawerContent>
    </Drawer>

    {/*= Header =*/}
    <Header onOpen={onOpen} />
    <Box>
      {children}
    </Box>
  </Box>
  )
}

export default index
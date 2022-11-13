import React from 'react'
import {
  IconButton,
  Flex,
  Spacer,
  Box,
  useColorMode as UseColorMode,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";//BsMoon
import { BsMoon, BsSun } from "react-icons/bs"; //BsMoon

import { Link } from "react-router-dom";

function HeaderTop() {
  const { colorMode, toggleColorMode } = UseColorMode();
  return (
    <>
     <Flex
        direction={["row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        color="gray.500"
        fontSize={12}
      >
        <Box p="1">
          <Link href="#">user@domain.com</Link>
        </Box>

        <Spacer />

        <Box p="1">
          <Link href="#">Siparişim Nerede</Link>
        </Box>
        <Box p="1">
          <Link href="#">Kampanyalar</Link>
        </Box>
        <Box p="1">
          <Link href="#">Yardım</Link>
        </Box>
        <Box p="1">
          <Link href="#">Bize Ulaşın</Link>
        </Box>

        <IconButton
         color={UseColorModeValue('yellow', 'white')}
          bg={UseColorModeValue('white', 'gray.800')}
          onClick={toggleColorMode}
          ml={2}
          width={50}
          aria-label="Toggle light dark mode"
          icon={colorMode === "light" ? <BsMoon /> : <BsSun />}
          size="sm"
        />
      </Flex>
    </>
  )
}

export default HeaderTop 
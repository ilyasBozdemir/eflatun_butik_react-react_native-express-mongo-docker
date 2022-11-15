import React from "react";
import { FiMenu } from "react-icons/fi";
import {
  IconButton,
  Flex,
  Stack,
  Spacer,
  HStack,
  Text,
  Box,
  useColorModeValue as UseColorModeValue,
  Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Logo from "../Logo";

import HeaderTop from "./HeaderTop";
import HeaderBrand from "./HeaderBrand";
import HeaderMenu from "./HeaderMenu";

function index({ onOpen, ...rest }) {
  return (
    <>
    <Flex
      position="sticky"
      top="0"
      zIndex="10"
      alignItems="center"
      backdropFilter="blur(1.5rem)"
      justifyContent={{ base: "flex-start", md: "flex-end" }}
      {...rest}
    >

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        as="div"
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <Logo />
      </Text>

      <Stack 
       display={{ base: "none", md: "flex" }}
       w={'100%'}
       >
          <HeaderTop />
       
          <HeaderBrand />
       
          <HeaderMenu />
      
      </Stack>

    </Flex>
    </>
  );
}

export default React.memo(index);

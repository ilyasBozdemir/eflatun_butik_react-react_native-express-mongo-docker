import React, { useState } from "react";
import {
  Spacer,
  Box,
  Flex,
  useDisclosure as UseDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import SettingSidebar from "../SettingSidebar";
import SettingSidebarButton from "../SettingSidebar/SettingSidebarButton";

function HeaderTop() {
  const {
    isOpen: isOpenSettingSidebar,
    onOpen: onOpenSettingSidebar,
    onClose: onCloseSettingSidebar,
  } = UseDisclosure();

  const _hover = {
    color: "#fff",
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
  };

  return (
    <>
      <Flex
        justifyContent={"flex-start"}
        fontSize={"xs"}
        textAlign="center"
        justifyItems={"center"}
      >
        <Box
          _hover={_hover}
          mx={3}
        >
          <Link href="#">info@eflatunbutik.com</Link>
        </Box>

        <Box
         _hover={_hover}
          mx={3}
        >
          <Link href="#">S.S.S</Link>
        </Box>

        <Spacer />
        <Box
          _hover={_hover}
          mx={3}
        >
          <Link href="#">Siparişim Nerede</Link>
        </Box>

        <Box
          _hover={{
            color: "#fff",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          mx={3}
        >
          <Link href="#">Yardım</Link>
        </Box>
        <Box
           _hover={_hover}
          mx={3}
        >
          <Link href="#">Bize Ulaşın</Link>
        </Box>

        <Box>
          <SettingSidebarButton onOpen={onOpenSettingSidebar} />
        </Box>
      </Flex>

      <SettingSidebar
        onOpen={onOpenSettingSidebar}
        isOpen={isOpenSettingSidebar}
        onClose={onCloseSettingSidebar}
      />
    </>
  );
}

export default HeaderTop;

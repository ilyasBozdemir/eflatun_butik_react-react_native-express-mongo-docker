import React from "react";

import {
  Box,
  CloseButton,
  Flex,
  Text,
  useMediaQuery as UseMediaQuery,
} from "@chakra-ui/react";

import Logo from "../Logo";

import NavLink from "./NavLink";

import {LinkItems} from '../LinkItems'

function index({ onClose, ...rest }) {

  const [isDesktop] = UseMediaQuery("(min-width: 768px)");


  return (
    <>
      <Box
        transition={{base:"3s ease"}}
        bg="white"
        borderRight="1px"
        borderRightColor="gray.200"
        w={{ base: "full" }}
        pos="fixed"
        h="full"
        style={{ overflowY: "auto" }}
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            <Logo />
          </Text>
          <CloseButton
            display={{ base: "flex", md: "flex" }}
            onClick={onClose}
          />
        </Flex>
        <Text>
          test
        </Text>

        {LinkItems.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
      
      </Box>
      
      {isDesktop ? onClose() : ""}

    </>
  );
}

export default index;

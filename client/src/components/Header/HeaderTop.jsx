import React from "react";
import {
  IconButton,
  Spacer,
  Box,
  Flex,
  useColorMode as UseColorMode,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react"; //BsMoon
import { BsMoon, BsSun } from "react-icons/bs"; //BsMoon

import { Link } from "react-router-dom";

function HeaderTop() {
  const { colorMode, toggleColorMode } = UseColorMode();

  return (
    <Flex justifyContent={"flex-start"} fontSize={12}>
      <Box
        _hover={{ color: "#fff", bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
        mx={3}
      >
        <Link href="#">info@eflatunbutik.com</Link>
      </Box>

      <Box
        _hover={{ color: "#fff", bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
        mx={3}
      >
        <Link href="#">S.S.S</Link>
      </Box>

      <Spacer />
      <Box
        _hover={{ color: "#fff", bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
        mx={3}
      >
        <Link href="#">Siparişim Nerede</Link>
      </Box>
      <Box
        _hover={{ color: "#fff", bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
        mx={3}
      >
        <Link href="#">Kampanyalar</Link>
      </Box>
      <Box
        _hover={{ color: "#fff", bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
        mx={3}
      >
        <Link href="#">Yardım</Link>
      </Box>
      <Box
        _hover={{ color: "#fff", bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
        mx={3}
      >
        <Link href="#">Bize Ulaşın</Link>
      </Box>

      {/*
<IconButton
        color={UseColorModeValue("yellow", "white")}
        onClick={toggleColorMode}
        aria-label="Toggle light dark mode"
        icon={colorMode === "light" ? <BsSun /> : <BsMoon />}
        size="sm"
      />
 */}
    </Flex>
  );
}

export default HeaderTop;

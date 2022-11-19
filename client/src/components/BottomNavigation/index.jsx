import React from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  VStack,
  Text,
  Icon,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

function index() {
  const navs = [
    {
      to: "/",
      icon: AiOutlineHome,
    },
    {
      to: "/ara",
      icon: AiOutlineSearch,
    },
    {
      to: "/favorilerim",
      icon: AiOutlineStar,
    },
    {
      to: "/hesabim",
      icon: AiOutlineUser,
    },
  ];
  return (
    <>
      <Flex justifyContent={"center"} direction={"row"}>
        <Box
          color="white"
          zIndex={1000}
          height={50}
          minW="95%"
          position="fixed"
          bottom={1}
          borderRadius={"10px 10px 10px 10px"}
          bgGradient="linear(to-r, #3A1C71, #CB356B, #BD3F32)"
          textAlign={"center"}
        >
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
            textAlign={"center"}
            mx={5}
            my={2}
          >
            {navs.map((nav, i) => (
              <Text key={i}>
                <Link to={nav.to}>
                  <Icon as={nav.icon} w={8} h={8} />
                </Link>
              </Text>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default index;

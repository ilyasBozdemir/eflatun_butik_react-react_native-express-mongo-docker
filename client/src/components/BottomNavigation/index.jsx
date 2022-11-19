import React from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";

import { Box, Flex, HStack, IconButton, Stack, VStack } from "@chakra-ui/react";

function index() {
  const items = () => {};
  return (
    <>
      <Flex justifyContent={"center"} direction={'row'}>
        <HStack
          color="white"
          zIndex={1000}
          height={50}
          minW="95%"
          position="fixed"
          bottom={1}
          borderRadius={"10px 10px 10px 10px"}
          bgGradient="linear(to-r, #3A1C71, #CB356B, #BD3F32)"
        >
          1
        </HStack>
      </Flex>
    </>
  );
}

export default index;

import React from "react";
import { 
  Divider, Box, Flex, Stack, HStack, VStack,
  useColorModeValue as UseColorModeValue

 } from '@chakra-ui/react';

import HeaderTop from "./HeaderTop";
import HeaderBrand from "./HeaderBrand";
import HeaderMenu from "./HeaderMenu";

function index() {
  return (
    <Flex
      direction={["row"]}
      as="header"
      backdropFilter="saturate(180%) blur(16px)"
      width={{ base: '100%', sm: '50%', md: '25%' }}
      zIndex="100"
      pos={'sticky'}
      top={"0"}
    >
      <Stack>

        <HStack color={UseColorModeValue('gray.500','gray.50')} fontSize={12}>
            <HeaderTop />
        </HStack>

        <HStack>
          <Divider orientation="horizontal" />
        </HStack>

        <HStack>
          <HeaderBrand />
        </HStack>

        <HStack>
          <HeaderMenu />
        </HStack>

      </Stack>
    </Flex>
  );
}

export default React.memo(index);

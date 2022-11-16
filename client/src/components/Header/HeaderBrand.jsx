import React from "react";
import {
  HStack,
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue as UseColorModeValue,
  useDisclosure as UseDisclosure,
} from "@chakra-ui/react";

import Logo from "../Logo";

import { AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

function HeaderBrand() {
  const userRef = React.useRef();
  const { isOpen, onOpen, onClose } = UseDisclosure();

  return (
    <>
      <Flex justifyContent={"flex-start"} mt={5}>
        <Heading size="md">
          <Link to="/">
            <Logo />
          </Link>
        </Heading>

        <Spacer />

        <Box borderRadius={"50px 50px 50px 50px"}>
          <SearchBox />
        </Box>

        <Spacer />

        <ButtonGroup>
          <Menu isOpen={isOpen}>
            <MenuButton
              ref={userRef}
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              _hover={{ bg: UseColorModeValue("gray.100", "gray.700") }}
              aria-label={"user button"}
              fontWeight="normal"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <HStack>
                <AiOutlineUser />
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </HStack>
            </MenuButton>

            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              <MenuItem>Giriş Yap</MenuItem>
              <MenuItem>Üye Ol</MenuItem>
            </MenuList>
          </Menu>

          <Button bg={"transparent"} aria-label="product favorite">
            <GrFavorite />
          </Button>

          <Button bg={"transparent"} aria-label="product basket button">
            <AiOutlineShoppingCart />
          </Button>

        </ButtonGroup>
      </Flex>
    </>
  );
}

export default HeaderBrand;

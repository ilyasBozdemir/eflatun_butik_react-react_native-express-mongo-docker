import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  HStack,
  VStack,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";

import Logo from "../Logo";

import { AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";
import { BsBox } from "react-icons/bs";

function HeaderBrand() {
  return (
    <>
      <Flex justifyContent={'flex-start'}>
          <Heading size="md">
            <Link href="/">
              <Logo />
            </Link>
          </Heading>

          <Box borderRadius={"50px 50px 50px 50px"}  display={'none'}>
            <SearchBox/>
          </Box>

          <ButtonGroup display={'none'}>
            <Menu>
              <MenuButton as={Button}>
                <IconButton
                  aria-label="product favorite"
                  icon={<AiOutlineUser />}
                  size="md"
                  bg={"transparent"}
                ></IconButton>
              </MenuButton>
              <MenuList>
                <MenuItem>Giriş Yap</MenuItem>
                <MenuItem>Üye Ol</MenuItem>
              </MenuList>
            </Menu>

            <IconButton
              color={UseColorModeValue("yellow", "white")}
              width={50}
              aria-label="product favorite"
              icon={<GrFavorite />}
              size="md"
            />
            <IconButton
              width={50}
              aria-label="shopping cart button"
              icon={<AiOutlineShoppingCart />}
              size="md"
            />
          </ButtonGroup>
      </Flex>
    </>
  );
}

export default HeaderBrand;

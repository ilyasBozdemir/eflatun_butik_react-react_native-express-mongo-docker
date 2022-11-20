import React from "react";
import {
  HStack,
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue as UseColorModeValue,
  useDisclosure as UseDisclosure,
  Icon,
} from "@chakra-ui/react";

import Logo from "../Logo";

import { AiOutlineUser } from "react-icons/ai";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";

import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

function HeaderBrand() {
  const userRef = React.useRef();
  const { isOpen, onOpen, onClose } = UseDisclosure();
  const [isFavoriShown, setIsFavoriShown] = React.useState(false);
  const [shoppingCartisShown, setShoppingCartIsShown] = React.useState(false);
  const [userIsShown, setUserIsShown] = React.useState(false);
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
                <Icon as={AiOutlineUser} fontSize={25} />
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </HStack>
            </MenuButton>

            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              <Link to="/giris">
                <MenuItem>Giriş Yap</MenuItem>
              </Link>
              <Link to="/uyelik">
                <MenuItem>Üye Ol</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Button
            bg={"transparent"}
            aria-label="product favorite"
            onMouseEnter={() => setIsFavoriShown(true)}
            onMouseLeave={() => setIsFavoriShown(false)}
            className={"my-favorite-button"}
          >
            {isFavoriShown ? (
              <Icon as={MdFavorite} fontSize={25} />
            ) : (
              <Icon as={MdOutlineFavoriteBorder} fontSize={25} />
            )}
          </Button>

          <Button
            bg={"transparent"}
            aria-label="product basket button"
            onMouseEnter={() => setShoppingCartIsShown(true)}
            onMouseLeave={() => setShoppingCartIsShown(false)}
          >
            {shoppingCartisShown ? (
              <Icon as={MdShoppingCart} fontSize={25} />
            ) : (
              <Icon as={MdOutlineShoppingCart} fontSize={25} />
            )}
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default HeaderBrand;

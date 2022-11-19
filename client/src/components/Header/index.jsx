import React from "react";
import { FiMenu } from "react-icons/fi";
import {
  IconButton,
  Flex,
  Stack,
  Text,
  Box,
  Spacer,
  useDisclosure as UseDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Logo from "../Logo";

import HeaderTop from "./HeaderTop";
import HeaderBrand from "./HeaderBrand";
import HeaderMenu from "./HeaderMenu";

import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationIcon,
  BottomNavigationLabel,
} from "chakra-ui-bottom-navigation";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";

import SettingSidebar from "components/SettingSidebar";
import SettingSidebarButton from "components/SettingSidebar/SettingSidebarButton";

function index({ onOpen, ...rest }) {
  const {
    isOpen: isOpenSettingSidebar,
    onOpen: onOpenSettingSidebar,
    onClose: onCloseSettingSidebar,
  } = UseDisclosure();

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
          <Link to="/">
            <Logo />
          </Link>
        </Text>
        <Spacer />
        {/*settings component*/}
        <SettingSidebarButton onOpen={onOpenSettingSidebar} />

        <SettingSidebar
          onOpen={onOpenSettingSidebar}
          isOpen={isOpenSettingSidebar}
          onClose={onCloseSettingSidebar}
        />
        {/**/}

        <Stack display={{ base: "none", md: "flex" }} w={"100%"}>
          <HeaderTop />

          <HeaderBrand />

          <HeaderMenu />
        </Stack>
      </Flex>

      <Box display={{ base: "none", md: "none" }} z-index="500">
        <BottomNavigation
          colorScheme={{ bg: "white" }}
          value="/"
          showLabel="if-active"
        >
          <BottomNavigationItem value="/">
            <BottomNavigationIcon as={AiOutlineHome} />
            <BottomNavigationLabel>Home</BottomNavigationLabel>
          </BottomNavigationItem>

          <BottomNavigationItem value="/favorites">
            <BottomNavigationIcon as={AiOutlineStar} />
            <BottomNavigationLabel>Favorites</BottomNavigationLabel>
          </BottomNavigationItem>

          <BottomNavigationItem value="/search">
            <BottomNavigationIcon as={AiOutlineSearch} />
            <BottomNavigationLabel>Search</BottomNavigationLabel>
          </BottomNavigationItem>

          <BottomNavigationItem value="/user">
            <BottomNavigationIcon as={AiOutlineUser} />
            <BottomNavigationLabel>User</BottomNavigationLabel>
          </BottomNavigationItem>
        </BottomNavigation>
      </Box>
    </>
  );
}

export default React.memo(index);

import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  Input,
  IconButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode as UseColorMode
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai"; //

import styles from "./index.module.css";
import { Link } from "react-router-dom";


function index() {

  const { colorMode, toggleColorMode } = UseColorMode();

  return (
    <>
      <Flex
       direction={["row"]}
        justifyContent={"flex-end"}
         color='gray.500'
         fontSize={12}
         >
        <Box p="1">
          <Link href="#">Siparişim Nerede</Link>
        </Box>
        <Box p="1">
          <Link href="#">Kampanyalar</Link>
        </Box>
        <Box p="1">
          <Link href="#">Yardım</Link>
        </Box>
        <Box p="1">
          <Link href="#">Bize Ulaşın</Link>
        </Box>
        <Box>
        <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
        </Box>

      </Flex>

      <Flex alignItems="center">
        <Box p="2">
          <Heading size="md">
            <a href="/">
              <span id={styles.brand}>
                <Text
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
                >
                  EflatunButik
                </Text>
              </span>
            </a>
          </Heading>
        </Box>

        <Spacer />

        <Flex bgColor={"#ddd"} borderRadius={'50px 50px 50px 50px'}>
          <Input
            variant='none'
            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            maxLength={50}
            width={500}
            size='md'
            textAlign={'center'}
            bgColor={'#ddd'}
            color={'#000'}
          />

          <IconButton
            bgColor={"#ddd"}
            color={"#7928CA"}
            ml={2}
            width={50}
            aria-label="Search product"
            icon={<FiSearch />}
            size="md"
          />
        </Flex>

        <Spacer />

        <ButtonGroup>
          <Menu>
            <MenuButton as={Button}>
              <IconButton
                width={50}
                aria-label='product favorite'
                icon={<AiOutlineUser />}
                size="md"
              ></IconButton>
            </MenuButton>
            <MenuList>
              <MenuItem>Giriş Yap</MenuItem>
              <MenuItem>Üye Ol</MenuItem>
            </MenuList>
          </Menu>

          <IconButton
            width={50}
            aria-label="product favorite"
            icon={<GrFavorite />}
            size="md"
          />
          <IconButton
            width={50}
            aria-label="product favorite"
            icon={<AiOutlineShoppingCart />}
            size="md"
          />
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default index;

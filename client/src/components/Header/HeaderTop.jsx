import React, { useState } from "react";
import {
  IconButton,
  Spacer,
  Box,
  Flex,
  useColorMode as UseColorMode,
  useColorModeValue as UseColorModeValue,
  useDisclosure as useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  ButtonGroup,
  Text,
  HStack,
  Stack,
  VStack,
  Switch,
  CloseButton,
  Badge,
} from "@chakra-ui/react";
import { GrSystem } from "react-icons/gr";
import { BiArrowFromLeft, BiArrowToLeft } from "react-icons/bi";
import { MoonIcon, SunIcon, SettingsIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

function HeaderTop() {
  const { colorMode, toggleColorMode } = UseColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selected, setSelected] = useState("");
  const arrowFromLeft = () => {};
  const arrowToLeft = () => {};

  const setDarkMode = () => {
    if (colorMode !== "light") {
      toggleColorMode();
    }
  };
  const setLightMode = () => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  };

  const setSystemMode = () => {};
  return (
    <>
      <Flex
        justifyContent={"flex-start"}
        fontSize={"xs"}
        textAlign="center"
        justifyItems={"center"}
      >
        <Box
          _hover={{
            color: "#fff",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          mx={3}
        >
          <Link href="#">info@eflatunbutik.com</Link>
        </Box>

        <Box
          _hover={{
            color: "#fff",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          mx={3}
        >
          <Link href="#">S.S.S</Link>
        </Box>

        <Spacer />
        <Box
          _hover={{
            color: "#fff",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          mx={3}
        >
          <Link href="#">Siparişim Nerede</Link>
        </Box>

        <Box
          _hover={{
            color: "#fff",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          mx={3}
        >
          <Link href="#">Yardım</Link>
        </Box>
        <Box
          _hover={{
            color: "#fff",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          mx={3}
        >
          <Link href="#">Bize Ulaşın</Link>
        </Box>

        <IconButton
          onClick={onOpen}
          aria-label="settings button"
          icon={<SettingsIcon />}
          size="sm"
          bg="transparent"
        />
      </Flex>

      <Drawer placement={"right"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
            <Text fontWeight="bold" fontSize={25}> Ayarlar</Text>
            <CloseButton
              display={{ base: "flex", md: "flex" }}
              onClick={onClose}
            />
          </Flex>
          <DrawerBody  justifyContent='space-evenly'>
            <HStack textAlign={"center"}>
              <Stack direction="row">
                <Text fontWeight="semibold">
                  {"Tema : "}
                  <Badge colorScheme="purple">New</Badge>
                </Text>
              </Stack>
              <ButtonGroup size="xl" isAttached variant="outline" p="5">
                <IconButton
                  onClick={setDarkMode}
                  aria-label="set light mode"
                  icon={<SunIcon />}
                  size="md"
                  bg="transparent"
                />
                <IconButton
                  onClick={setSystemMode}
                  aria-label="set system mode"
                  icon={<GrSystem />}
                  size="md"
                  bg="transparent"
                />
                <IconButton
                  onClick={setLightMode}
                  aria-label="set light mode"
                  icon={<MoonIcon />}
                  size="md"
                  bg="transparent"
                />
              </ButtonGroup>
            </HStack>
            <HStack>
              <Text>
                <Stack direction="row">
                  <Text fontWeight="semibold">
                    {"Yön : "}
                    <Badge colorScheme="green">Yakında</Badge>
                  </Text>
                </Stack>
              </Text>
              <ButtonGroup size="xl" isAttached variant="outline" p="5">
                <IconButton
                  onClick={arrowToLeft}
                  aria-label="BiArrowToLeft"
                  icon={<BiArrowToLeft />}
                  size="md"
                  bg="transparent"
                  disabled
                />
                <IconButton
                  onClick={arrowFromLeft}
                  aria-label="BiArrowFromLeft"
                  icon={<BiArrowFromLeft />}
                  size="md"
                  bg="transparent"
                  disabled
                />
              </ButtonGroup>
            </HStack>
            <HStack>
              <Text fontWeight="semibold">
                {"Dil : "}
                <Badge colorScheme="purple">

                </Badge>
              </Text>
              <ReactFlagsSelect
                countries={["TR"]}
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HeaderTop;

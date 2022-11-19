import ReactFlagsSelect from "react-flags-select";
import { GrSystem } from "react-icons/gr";
import { BiArrowFromLeft, BiArrowToLeft } from "react-icons/bi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useState as UseState } from "react";
import {
  IconButton,
  Flex,
  useColorMode as UseColorMode,
  useDisclosure as UseDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  ButtonGroup,
  Text,
  HStack,
  Stack,
  CloseButton,
  Badge,
} from "@chakra-ui/react";
function index({ isOpen, onOpen, onClose }) {
  const { colorMode, toggleColorMode } = UseColorMode();
  const [selected, setSelected] = UseState("");
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
      <Drawer placement={"right"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
            <Text fontWeight="bold" fontSize={25}>
              {" "}
              Ayarlar
            </Text>
            <CloseButton
              display={{ base: "flex", md: "flex" }}
              onClick={onClose}
            />
          </Flex>
          <DrawerBody justifyContent="space-evenly">
            <HStack textAlign={"center"}>
              <Stack direction="row">
                <Text fontWeight="semibold">
                  {"Tema : "}
                  <Badge variant="outline" colorScheme="green">
                    Yeni
                  </Badge>
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
                    <Badge colorScheme="red">Yakında</Badge>
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
                <Badge colorScheme="purple"></Badge>
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

export default index;

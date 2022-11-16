import React from "react";
import {
  useDisclosure as UseDisclosure,
  useColorModeValue as UseColorModeValue,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

function index({ name, icon }) {
  const { isOpen, onOpen, onClose } = UseDisclosure();
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ bg: UseColorModeValue("gray.100", "gray.700") }}
          aria-label={name + " button"}
          fontWeight="normal"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {name} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default index;

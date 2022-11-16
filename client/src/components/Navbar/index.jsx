import React from "react";
import {
  useDisclosure as UseDisclosure,
  useColorModeValue as UseColorModeValue,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

function index({ link }) {
  const { isOpen, onOpen, onClose } = UseDisclosure();
  const { label, icon, href/*, childrens*/ } = link;

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ bg: UseColorModeValue("gray.100", "gray.700") }}
          aria-label={label + " button"}
          fontWeight="normal"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {label}
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem>link</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default index;

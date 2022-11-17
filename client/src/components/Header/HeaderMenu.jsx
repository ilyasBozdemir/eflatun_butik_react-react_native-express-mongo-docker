import React from "react";
import Navbar from "../Navbar";
import { Flex } from "@chakra-ui/react";

import { linkItems } from "../linkItems";

function HeaderMenu() {
  return (
    <Flex>
      {linkItems.map((link, i) => (
        <Navbar key={i} link={link} />
      ))}
    </Flex>
  );
}

export default HeaderMenu;

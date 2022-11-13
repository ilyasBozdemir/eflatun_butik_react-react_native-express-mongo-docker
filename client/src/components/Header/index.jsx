import React from "react";
import { Divider, Box } from "@chakra-ui/react";

import HeaderTop from "./HeaderTop";
import HeaderBrand from "./HeaderBrand";
import HeaderMenu from "./HeaderMenu";

function index() {
  return (
    <>
      <HeaderTop />
      <Divider orientation="horizontal" />
      <Box>
        <HeaderBrand />
        <HeaderMenu />
      </Box>
    </>
  );
}

export default index;

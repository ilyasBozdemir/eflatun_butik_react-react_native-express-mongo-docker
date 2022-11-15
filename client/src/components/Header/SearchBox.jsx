import React from "react";
import { Input, IconButton } from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";

function SearchBox() {
  return (
    <>
      <Input
        variant="none"
        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        maxLength={30}
        width={400}
        size="md"
        textAlign={"center"}
        bgColor={"#ddd"}
        color={"#000"}
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
    </>
  );
}

export default SearchBox;

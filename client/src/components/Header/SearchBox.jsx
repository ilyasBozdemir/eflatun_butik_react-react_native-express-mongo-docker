import React, { useEffect, useState } from "react";
import { Input, Button, HStack } from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";

function SearchBox() {
  const [placeHolder, setPlaceHolder] = useState("Aradığınız ürünü yazınız.");

  const texts=[
    '',
    '',
    '',
    ''
  ];

 

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaceHolder(placeHolder.slice(0, placeHolder.length + 1));
      

    }, 100);

    return () => clearTimeout(timer);
  }, [placeHolder]);

  return (
    <>
      <HStack>
        <Input
          placeholder={placeHolder}
          maxLength={30}
          width={{
            sm: "300px",
            md: "300px",
            lg: "350px",
            xl: "350px",
            "2xl": "400px",
          }}
          size="md"
          color={"#000"}
        />

        <Button bg={"transparent"} aria-label="Search product">
          <FiSearch />
        </Button>
      </HStack>
    </>
  );
}

export default SearchBox;

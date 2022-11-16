import React from "react";
import Navbar from "../Navbar";
import { Flex } from "@chakra-ui/react";



import linkItems from '../linkItems';

function HeaderMenu() {
  return (

    <Flex>
      {/*
       linkItems.map((link, i) => (
            <Navbar key={i} link={link}>
              1
            </Navbar>
          ))*/
      }
      <Navbar pName="Yeni Gelenler" childrens={{}} />
      <Navbar pName="Elbise" childrens={{}} />
      <Navbar pName="Triko" childrens={{}} />
      <Navbar pName="testmenu" childrens={{}} />
    </Flex>

  );
}

export default HeaderMenu;

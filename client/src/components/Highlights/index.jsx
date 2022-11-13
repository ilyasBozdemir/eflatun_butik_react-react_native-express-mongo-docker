import React from "react";
import { Text, Box, Button, ButtonGroup } from "@chakra-ui/react";

function index() {
  return (
    <>
      <Box mt={4} display="flex" alignItems="center" justifyContent="space-around">

          <Button>
            <Text
              bgGradient="linear(to-l, #f64f59, #ACB6E5)"
              bgClip="text"
              fontSize="xl"
            >
              Sepete En Çok Eklenenler
            </Text>
          </Button>
          <Button>
            <Text
              bgGradient="linear(to-l, #59C173, #a17fe0 ,#f64f59)"
              bgClip="text"
              fontSize="xl"
            >
              En Çok Öne Çıkanlar
            </Text>

          </Button>
          <Button>
            <Text
              bgGradient="linear(to-l, #12c2e9 , #c471ed , #f64f59)"
              bgClip="text"
              fontSize="xl"
            >
             İndirimdekiler
            </Text>
            </Button>
      </Box>
    </>
  );
}

export default index;

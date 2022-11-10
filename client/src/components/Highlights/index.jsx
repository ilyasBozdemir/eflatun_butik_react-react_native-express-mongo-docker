import React from "react";
import { AspectRatio, Stack, Button, ButtonGroup } from "@chakra-ui/react";

function index() {
  return (
    <AspectRatio>
      <Stack direction="column">
        <ButtonGroup>
          <Button colorScheme="teal" size="xmds">
            Sepete En Çok Eklenenler
          </Button>
          <Button colorScheme="teal" size="md">
            En Çok Öne Çıkanlar
          </Button>
          <Button colorScheme="teal" size="md">
            İndirimdekiler
          </Button>
        </ButtonGroup>
      </Stack>
    </AspectRatio>
  );
}

export default index;

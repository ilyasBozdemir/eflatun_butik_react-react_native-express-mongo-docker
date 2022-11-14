import React from "react";

import MySlider from "../components/MySlider";
import IGStory from "../components/IGStory";
import Highlights from "../components/Highlights";
import Showcase from "../components/Showcase";
import { Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Flex w="100%">
      <MySlider />
      <IGStory />
      <Highlights />
      <Showcase />
    </Flex>
  );
}

export default Home;

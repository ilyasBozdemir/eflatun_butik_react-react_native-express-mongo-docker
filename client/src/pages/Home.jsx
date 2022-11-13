import React from "react";

import MySlider from "../components/MySlider";
import IGStory from "../components/IGStory";
import Highlights from "../components/Highlights";
import Showcase from "../components/Showcase";
import { Container } from "@chakra-ui/react";

function Home() {
  return (
    <Container maxW='container.xl'>
      <MySlider />
      <IGStory />
      <Highlights />
      <Showcase />
    </Container>
  );
}

export default Home;

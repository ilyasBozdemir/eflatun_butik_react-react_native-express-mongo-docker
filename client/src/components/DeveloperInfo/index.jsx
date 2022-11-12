import React from "react";
import { Link,Text } from "@chakra-ui/react";
function index() {
  return (
    <>
      <Text textAlign='center'>
        Bu websitesi  &nbsp;
        <Link
          href="https://www.instagram.com/bozdemirilyas1/"
          isExternal
        >
          İlyas Bozdemir
        </Link> tarafından geliştirilmiştir.
      </Text>
    </>
  );
}
export default index;

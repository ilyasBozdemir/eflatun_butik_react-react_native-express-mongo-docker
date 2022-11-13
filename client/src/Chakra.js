import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";

import { RtlProvider } from "@/components/rtl-provider";

import theme from "./theme";

export function Chakra({ cookies, startAppName }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <RtlProvider>{startAppName}</RtlProvider>
      
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}

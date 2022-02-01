import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import useSystemTheme from "../hooks/useSystemTheme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={useSystemTheme()}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

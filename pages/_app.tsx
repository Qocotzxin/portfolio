import { ChakraProvider } from "@chakra-ui/react";
import theme from "@theme";
import Layout from "@ui/Layout";
import type { AppProps } from "next/app";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout hygraphData={pageProps.hygraphData}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

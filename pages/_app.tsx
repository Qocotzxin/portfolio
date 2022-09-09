import { ChakraProvider } from "@chakra-ui/react";
import { HygraphModel } from "@models/hygraph";
import "@styles/globals.css";
import theme from "@theme";
import Layout from "@ui/Layout";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps<HygraphModel>): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Layout hygraphData={pageProps.hygraphData}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

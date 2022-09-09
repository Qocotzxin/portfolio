import { Box } from "@chakra-ui/react";
import { HygraphModel } from "@models/hygraph";
import Navbar from "@ui/NavBar";
import { HygraphProvider } from "contexts/hygraphContext";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren & HygraphModel> = ({
  children,
  hygraphData,
}) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      className="w-screen h-screen bg-slate-50 dark:bg-gray-900"
      data-testid="Layout"
    >
      <Head>
        <title>Cristian Etchebarne</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Cristian Etchebarne resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HygraphProvider hygraphData={hygraphData}>
        <header>
          <Navbar />
        </header>

        <main id="main">{children}</main>

        <footer></footer>
      </HygraphProvider>
    </Box>
  );
};

export default Layout;

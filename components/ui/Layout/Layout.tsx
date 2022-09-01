import { Box } from "@chakra-ui/react";
import Navbar from "@ui/Navbar";
import { HygraphProvider } from "@context/hygraphContext";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { HygraphData } from "@model/hygraph";

interface LayoutProps {
  hygraphData: Partial<HygraphData>;
}

const Layout: FC<PropsWithChildren & LayoutProps> = ({
  children,
  hygraphData,
}) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      className="w-screen h-screen bg-slate-50 dark:bg-gray-900"
    >
      <Head>
        <title>Cristian Etchebarne</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Cristian Etchebarne resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HygraphProvider hygraphData={hygraphData || {}}>
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

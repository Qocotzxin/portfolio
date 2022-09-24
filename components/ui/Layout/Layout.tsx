import { Box } from "@chakra-ui/react";
import { HygraphModel } from "@models/hygraph";
import Footer from "@ui/Footer";
import NavBar from "@ui/NavBar";
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
        {hygraphData.metaTags?.map((mt, index) => (
          <meta key={index} name={mt.name} content={mt.content} />
        ))}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HygraphProvider hygraphData={hygraphData}>
        <header>
          <NavBar />
        </header>

        <Box as="main" id="main" h="100%" position="relative" zIndex={-1}>
          <Box py="16" h="100%">
            {children}
          </Box>
        </Box>

        <footer>
          <Footer />
        </footer>
      </HygraphProvider>
    </Box>
  );
};

export default Layout;

import Navbar from "@ui/Navbar";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Box, ColorModeScript } from "@chakra-ui/react";

const Home: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg="gray.50"
      _dark={{ bg: "gray.800" }}
      className="w-screen h-screen bg-slate-50 dark:bg-gray-900"
    >
      <Head>
        <title>Cristian Etchebarne</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Cristian Etchebarne resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <footer></footer>
    </Box>
  );
};

export default Home;

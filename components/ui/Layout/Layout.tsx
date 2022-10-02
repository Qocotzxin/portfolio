import { Box } from "@chakra-ui/react";
import { HygraphModel } from "@models/hygraph";
import Footer from "@ui/Footer";
import NavBar from "@ui/NavBar";
import { HygraphProvider } from "contexts/hygraphContext";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0 },
};

const Layout: FC<PropsWithChildren & HygraphModel> = ({
  children,
  hygraphData,
}) => {
  const router = useRouter();

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

        <Box id="main" as="main" h="100%" position="relative" zIndex={-1}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              style={{
                paddingTop: "4rem",
                paddingBottom: "4rem",
                height: "100%",
              }}
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ type: "linear" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Box>

        <footer>
          <Footer />
        </footer>
      </HygraphProvider>
    </Box>
  );
};

export default Layout;

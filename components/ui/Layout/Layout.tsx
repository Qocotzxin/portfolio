import { HygraphModel } from "@models/hygraph";
import Footer from "@ui/Footer";
import NavBar from "@ui/NavBar";
import { HygraphProvider } from "contexts/hygraphContext";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Classes } from "./styles";

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
    <div className={Classes.base} data-testid="Layout">
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

        <main id="main">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              className={Classes.transitionWrapper}
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ type: "linear" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer>
          <Footer />
        </footer>
      </HygraphProvider>
    </div>
  );
};

export default Layout;

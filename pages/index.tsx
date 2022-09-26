import { VStack } from "@chakra-ui/react";
import { getHygraphData } from "@services/hygraphClient";
import Hero from "@ui/Hero";
import type { GetStaticPropsContext, NextPage } from "next";

const Home: NextPage = () => {
  return (
    <VStack data-testid="Home" h="100%" justifyContent="center">
      <Hero />
    </VStack>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      hygraphData: await getHygraphData(locale),
    },
  };
}

export default Home;

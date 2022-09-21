import hygraphClient from "@services/hygraphClient";
import { Box, VStack } from "@chakra-ui/react";
import type { GetStaticPropsContext, NextPage } from "next";

const Home: NextPage = () => {
  return (
    <VStack data-testid="Home">
      {/* <Box bg="crimson" h="50vh" w="100%">
        Test 1
      </Box> */}
    </VStack>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      hygraphData: await hygraphClient.getData(locale),
    },
  };
}

export default Home;

import hygraphClient from "@services/hygraphClient";
import type { GetStaticPropsContext, NextPage } from "next";

const Home: NextPage = () => {
  return <div data-testid="Home">Home</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      hygraphData: await hygraphClient.getData(locale),
    },
  };
}

export default Home;

import { getHygraphData } from "@services/hygraphClient";
import Home from "@scenes/Home";
import type { GetStaticPropsContext, NextPage } from "next";

const HomePage: NextPage = () => {
  return <Home />;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      hygraphData: await getHygraphData(locale),
    },
  };
}

export default HomePage;

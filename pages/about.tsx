import { getHygraphData } from "@services/hygraphClient";
import type { GetStaticPropsContext, NextPage } from "next";

const AboutPage: NextPage = () => {
  return <div data-testid="About">ABOUT</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      hygraphData: await getHygraphData(locale),
    },
  };
}

export default AboutPage;

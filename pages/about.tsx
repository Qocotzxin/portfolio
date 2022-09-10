import hygraphClient from "@services/hygraphClient";
import type { GetStaticPropsContext, NextPage } from "next";

const About: NextPage = () => {
  return <div data-testid="About">ABOUT</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      hygraphData: await hygraphClient.getData(locale),
    },
  };
}

export default About;

import hygraphClient from "@services/hygraphClient";
import type { GetStaticPropsContext, NextPage } from "next";

const Error: NextPage = () => {
  return <div data-testid="Error">Error</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      hygraphData: await hygraphClient.getData(locale),
    },
  };
}

export default Error;

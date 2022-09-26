import { getHygraphData } from "@services/hygraphClient";
import type { GetStaticPropsContext, NextPage } from "next";

const NotFound: NextPage = () => {
  return <div data-testid="NotFound">Page not found</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      hygraphData: await getHygraphData(locale),
    },
  };
}

export default NotFound;

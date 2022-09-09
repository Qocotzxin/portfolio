import { ApiResponse } from "@models/api";
import { HygraphData } from "@models/hygraph";
import { getHygraphUrl } from "@utils/hygraph-url";
import axios from "axios";
import type { GetStaticPropsContext, NextPage } from "next";

const Home: NextPage = () => {
  return <div data-testid="Home">Home</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  let response;
  try {
    response = await axios.get<ApiResponse<HygraphData>>(getHygraphUrl(locale));
  } catch (e: unknown) {
    // Call logging service.
  }

  const data = response ? response.data : null;

  return {
    props: {
      hygraphData: data?.data,
    },
  };
}

export default Home;

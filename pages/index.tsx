import { ApiResponse } from "@models/api";
import { HygraphData } from "@models/hygraph";
import axios from "axios";
import type { GetStaticPropsContext, NextPage } from "next";

const Home: NextPage = () => {
  return <div data-testid="Home">Home</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  let data;
  try {
    data = await axios.get<ApiResponse<HygraphData>>(
      `${process.env.ORIGIN_URL}/api/hygraph?locale=${locale}`
    );
  } catch (e: unknown) {
    // Call logging service.
  }

  return {
    props: {
      hygraphData: data ? data.data : null,
    },
  };
}

export default Home;

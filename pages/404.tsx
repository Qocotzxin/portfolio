import { ApiResponse } from "@models/api";
import { HygraphData } from "@models/hygraph";
import axios from "axios";
import type { GetStaticPropsContext, NextPage } from "next";

const NotFound: NextPage = () => {
  return <div data-testid="NotFound">Page not found</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  console.log(process.env.VERCEL_URL);
  let response;
  try {
    response = await axios.get<ApiResponse<HygraphData>>(
      `${process.env.VERCEL_URL}/api/hygraph?locale=${locale}`
    );
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

export default NotFound;

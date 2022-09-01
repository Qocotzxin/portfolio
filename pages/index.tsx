import { gql } from "@apollo/client";
import type { GetStaticPropsContext, NextPage } from "next";
import client from "../apollo-client";

const Home: NextPage = () => {
  return <div>HOME</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { data } = await client.query({
    query: gql`
      query HygraphData {
        ariaLabels(locales: ${locale || "en"}) {
          component
          content
          metadata
        }
        navLinks(locales: ${locale || "en"}) {
          text
          url
          order
        }
        skipLinks(locales: ${locale || "en"}) {
          text
        }
      }
    `,
  });

  return {
    props: {
      hygraphData: data,
    },
  };
}

export default Home;

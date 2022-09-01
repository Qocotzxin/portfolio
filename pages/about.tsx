import { gql } from "@apollo/client";
import type { GetStaticPropsContext, NextPage } from "next";
import client from "../apollo-client";

const About: NextPage = () => {
  return <div>ABOUT</div>;
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
      }
    `,
  });

  return {
    props: {
      hygraphData: data,
    },
  };
}

export default About;

import { HygraphData } from "@models/hygraph";
import { gql, GraphQLClient } from "graphql-request";

export const hygraphClient = new GraphQLClient(process.env.HYGRAPH_API!, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
  },
});

export async function getHygraphData(locale = "en") {
  return await hygraphClient.request<HygraphData>(gql`{
    ariaLabels(locales: ${locale}) {
      component
      content
      metadata
    }
    navLinks(locales: ${locale}) {
      text
      url
      order
    }
    skipLinks(locales: ${locale}) {
      text
    }
    metaTags(locales: ${locale}) {
      name
      content
    }
    languages(locales: ${locale}) {
      code
      displayName
      isActive
    }
    footerLinks(locales: ${locale}) {
      url
      icon
      isActive
      ariaLabel
    }
    heroes(locales: ${locale}) {
      title
      subtitle
    }
  }
  `);
}

import { HygraphData } from "@models/hygraph";
import { gql, GraphQLClient } from "graphql-request";

export class HygraphClient {
  client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(process.env.HYGRAPH_API!, {
      headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
      },
    });
  }

  async getData(locale?: string) {
    const defaultLocale = locale || "en";
    const data = await this.client.request<HygraphData>(gql`{
      ariaLabels(locales: ${defaultLocale}) {
        component
        content
        metadata
      }
      navLinks(locales: ${defaultLocale}) {
        text
        url
        order
      }
      skipLinks(locales: ${defaultLocale}) {
        text
      }
      metaTags(locales: ${defaultLocale}) {
        name
        content
      }
      languages(locales: ${defaultLocale}) {
        code
        displayName
        isActive
      }
      footerLinks(locales: ${defaultLocale}) {
        url
        icon
        isActive
        ariaLabel
      }
    }
    `);

    return data;
  }
}

export default new HygraphClient();

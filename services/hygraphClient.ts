import { GraphQLClient } from "graphql-request";

export const createInstance = () =>
  new GraphQLClient(process.env.HYGRAPH_API!, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
    },
  });

const client = createInstance();

export default client;

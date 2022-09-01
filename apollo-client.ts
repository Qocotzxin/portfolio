import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.HYGRAPH_API,
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;

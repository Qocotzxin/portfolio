import { GraphQLClient, gql } from "graphql-request";
import { HygraphClient } from "@services/hygraphClient";

const ORIGINAL_ENV_VARS = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...ORIGINAL_ENV_VARS };
});

afterAll(() => {
  process.env = ORIGINAL_ENV_VARS;
});

describe("HygraphClient.", () => {
  it("Should create an instance of GraphQLClient using HYGRAPH_API and HYGRAPH_AUTH_TOKEN env vars.", () => {
    process.env.HYGRAPH_API = "https://test-api";
    process.env.HYGRAPH_AUTH_TOKEN = "1234";
    new HygraphClient();
    expect(GraphQLClient).toHaveBeenCalledWith("https://test-api", {
      headers: {
        Authorization: `Bearer 1234`,
      },
    });
  });

  it("Should call request method from GraphQLClient and gql function when calling getData method.", () => {
    process.env.HYGRAPH_API = "https://test-api";
    process.env.HYGRAPH_AUTH_TOKEN = "1234";
    const instance = new HygraphClient();
    instance.getData();
    expect(instance.client.request).toHaveBeenCalled();
    expect(gql).toHaveBeenCalled();
  });
});

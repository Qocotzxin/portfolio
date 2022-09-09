import { createInstance } from "@services/hygraphClient";
import { GraphQLClient } from "graphql-request";

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
    createInstance();
    expect(GraphQLClient).toHaveBeenCalledWith("https://test-api", {
      headers: {
        Authorization: `Bearer 1234`,
      },
    });
  });
});

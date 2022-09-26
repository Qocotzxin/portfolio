import { getHygraphData, hygraphClient } from "@services/hygraphClient";
import { gql } from "graphql-request";

const ORIGINAL_ENV_VARS = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...ORIGINAL_ENV_VARS };
});

afterAll(() => {
  process.env = ORIGINAL_ENV_VARS;
});

describe("HygraphClient.", () => {
  it("Should call request method from GraphQLClient and gql function when calling getData method.", () => {
    process.env.HYGRAPH_API = "https://test-api";
    process.env.HYGRAPH_AUTH_TOKEN = "1234";
    getHygraphData();
    expect(hygraphClient.request).toHaveBeenCalled();
    expect(gql).toHaveBeenCalled();
  });
});

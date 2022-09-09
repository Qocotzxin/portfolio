import { getHygraphUrl } from "@utils/hygraph-url";

const ORIGINAL_ENV_VARS = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...ORIGINAL_ENV_VARS };
});

afterAll(() => {
  process.env = ORIGINAL_ENV_VARS;
});

describe("getHygraphUrl", () => {
  it("Should define the protocol to http on local env.", () => {
    process.env.VERCEL_ENV = "local";
    process.env.VERCEL_URL = "test.com";
    expect(getHygraphUrl("en")).toBe("http://test.com/api/hygraph?locale=en");
  });

  it("Should define the protocol to https on prod env.", () => {
    process.env.VERCEL_ENV = "production";
    process.env.VERCEL_URL = "test.com";
    expect(getHygraphUrl("en")).toBe("https://test.com/api/hygraph?locale=en");
  });
});

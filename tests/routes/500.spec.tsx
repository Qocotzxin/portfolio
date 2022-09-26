import ErrorPage, { getStaticProps } from "@pages/500";
import { getHygraphData } from "@services/hygraphClient";
import { render, screen } from "@utils/test-utils";

jest.mock("@services/hygraphClient", () => ({
  getHygraphData: jest.fn(() => ({ test: "test" })),
}));

const ORIGINAL_ENV_VARS = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...ORIGINAL_ENV_VARS };
});

afterAll(() => {
  process.env = ORIGINAL_ENV_VARS;
});

describe("About", () => {
  it("Should render Error page.", () => {
    render(<ErrorPage />);
    expect(screen.getByTestId("Error")).toBeInTheDocument();
  });

  it("Should call hygraph endpoint with the correct parameters and return the result when executing getStaticProps.", async () => {
    process.env.VERCEL_URL = "test-api";
    const result = await getStaticProps({ locale: "en" });
    expect(getHygraphData).toHaveBeenCalledWith("en");
    expect(result).toEqual({
      props: {
        hygraphData: { test: "test" },
      },
    });
  });
});

import NotFound, { getStaticProps } from "@pages/404";
import { render, screen } from "@utils/test-utils";
import { getHygraphData } from "@services/hygraphClient";

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
  it("Should render About page.", () => {
    render(<NotFound />);
    expect(screen.getByTestId("NotFound")).toBeInTheDocument();
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

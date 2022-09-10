import Home, { getStaticProps } from "@pages/index";
import hygraphClient from "@services/hygraphClient";
import { render, screen } from "@utils/test-utils";

jest.mock("@services/hygraphClient", () => ({
  getData: jest.fn(() => ({ test: "test" })),
}));

const ORIGINAL_ENV_VARS = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...ORIGINAL_ENV_VARS };
});

afterAll(() => {
  process.env = ORIGINAL_ENV_VARS;
});

describe("Home", () => {
  it("Should render Home page.", () => {
    render(<Home />);
    expect(screen.getByTestId("Home")).toBeInTheDocument();
  });

  // TODO: Duplicated getStaticProps tests on other pages need refactor.
  it("Should call hygraph endpoint with the correct parameters and return the result when executing getStaticProps.", async () => {
    process.env.VERCEL_URL = "test-api";
    const result = await getStaticProps({ locale: "en" });
    expect(hygraphClient.getData).toHaveBeenCalledWith("en");
    expect(result).toEqual({
      props: {
        hygraphData: { test: "test" },
      },
    });
  });
});

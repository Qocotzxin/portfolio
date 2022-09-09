import Home, { getStaticProps } from "@pages/index";
import { render, screen } from "@utils/test-utils";
import axios from "axios";

jest.mock("axios", () => ({
  get: jest.fn(() => ({ data: { data: { test: "test" } } })),
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

  // Duplicated getStaticProps tests on other pages need refactor.
  it("Should call hygraph endpoint with the correct parameters and return the result when executing getStaticProps.", async () => {
    process.env.NEXT_PUBLIC_VERCEL_URL = "https://test-api";
    const result = await getStaticProps({ locale: "en" });
    expect(axios.get).toHaveBeenCalledWith(
      "https://test-api/api/hygraph?locale=en"
    );
    expect(result).toEqual({
      props: {
        hygraphData: { test: "test" },
      },
    });
  });

  it("Should return data as null when getStaticProps is called but there is an error.", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(
      () => {
        throw new Error("Error");
      }
    );
    const result = await getStaticProps({ locale: "en" });
    expect(result).toEqual({
      props: {
        hygraphData: undefined,
      },
    });
  });
});

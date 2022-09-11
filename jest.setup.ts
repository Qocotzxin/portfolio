import "@testing-library/jest-dom/extend-expect";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    pathname: "/",
  })),
}));

jest.mock("graphql-request", () => {
  const actual = jest.requireActual("graphql-request");
  return {
    ...actual,
    GraphQLClient: jest.fn(() => ({
      request: jest.fn(() => ({ test: "test" })),
    })),
    gql: jest.fn((query) => query),
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

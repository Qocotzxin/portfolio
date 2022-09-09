import App from "@pages/_app";
import { render, screen } from "@testing-library/react";

describe("_app", () => {
  it("Should match snapshot.", () => {
    const { container } = render(
      <App
        Component={() => <div>Test component</div>}
        pageProps={{ hygraphData: { skipLinks: [] } }}
        // @ts-ignore - Not needed for the test, just to make TS happy.
        router={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("Should render Layout and any provided child.", () => {
    render(
      <App
        Component={() => <div>Test component</div>}
        pageProps={{ hygraphData: { skipLinks: [] } }}
        // @ts-ignore - Not needed for the test, just to make TS happy.
        router={jest.fn()}
      />
    );

    expect(screen.getByText(/Test component/)).toBeInTheDocument();
    expect(screen.getByTestId("Layout")).toBeInTheDocument();
  });
});

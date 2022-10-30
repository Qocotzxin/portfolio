import Hero from "@scenes/Home";
import { render, screen } from "@utils/test-utils";

describe("Hero.", () => {
  it("Should not render the component when hero is not provided through Hygraph.", () => {
    render(<Hero />, {}, { hygraphData: { heroes: undefined } });

    expect(screen.queryByTestId("Hero")).not.toBeInTheDocument();
  });

  it("Should not render the component when heroes data is present but empty.", () => {
    render(<Hero />, {}, { hygraphData: { heroes: [] } });

    expect(screen.queryByTestId("Hero")).not.toBeInTheDocument();
  });

  it("Should render Hero and match snapshot when heroes ndata is available.", () => {
    const { container } = render(<Hero />);

    expect(screen.getByTestId("Hero")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("Should render Hero even when subtitle is not present.", () => {
    render(<Hero />);

    expect(screen.getByTestId("Hero")).toBeInTheDocument();
  });
});

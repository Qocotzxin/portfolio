import { render } from "@testing-library/react";
import Disk from "@ui/Disk";

describe("Disk.", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<Disk />);

    expect(container).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import Button from "@ui/Button";

describe("Button", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<Button>Test</Button>);
    expect(container).toMatchSnapshot();
  });
});

import Button from "@ui/Button";
import { render } from "@utils/test-utils";

describe("Button", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<Button>Test</Button>);
    expect(container).toMatchSnapshot();
  });
});

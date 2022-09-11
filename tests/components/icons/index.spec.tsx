import { Languages, Clouds, Stars, Hamburger } from "@icons";
import { render } from "@testing-library/react";

describe("Icons.", () => {
  it("Should match snapshot.", () => {
    const { container } = render(
      <>
        <Languages /> <Clouds /> <Stars /> <Hamburger />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});

import NavLogo from "./NavLogo";
import { render, screen } from "@testing-library/react";

describe("NavLogo", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<NavLogo withAnimation />);
    expect(container).toMatchSnapshot();
  });

  it("Should have animation related classes when withAnimation is true.", () => {
    render(<NavLogo withAnimation />);

    expect(screen.getByTestId("NavLogo-outter-circle")).toHaveClass(
      "_outterCircle_1ouxi_1"
    );

    expect(screen.getByTestId("NavLogo-inner-circle")).toHaveClass(
      "_innerCircle_1ouxi_5"
    );

    expect(screen.getByTestId("NavLogo-text")).toHaveClass(
      "_textAnimation_1ouxi_16"
    );
  });

  it("Should NOT have animation related classes when withAnimation is false or undefined.", () => {
    render(<NavLogo />);

    expect(screen.queryByTestId("NavLogo-outter-circle")).not.toHaveClass(
      "_outterCircle_1ouxi_1"
    );

    expect(screen.queryByTestId("NavLogo-inner-circle")).not.toHaveClass(
      "_innerCircle_1ouxi_5"
    );

    expect(screen.queryByTestId("NavLogo-text")).not.toHaveClass(
      "_textAnimation_1ouxi_16"
    );
  });
});

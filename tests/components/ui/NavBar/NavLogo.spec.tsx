import NavLogo from "@ui/NavBar/NavLogo";
import { render, screen } from "@utils/test-utils";

describe("NavLogo", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<NavLogo withAnimation />);
    expect(container).toMatchSnapshot();
  });

  it("Should have animation related classes when withAnimation is true.", () => {
    render(<NavLogo withAnimation />);

    expect(screen.getByTestId("NavLogo-outter-circle")).toHaveClass(
      "NavLogo__outterCircle"
    );

    expect(screen.getByTestId("NavLogo-inner-circle")).toHaveClass(
      "NavLogo__innerCircle"
    );

    expect(screen.getByTestId("NavLogo-text")).toHaveClass("fadeIn-regular");
  });

  it("Should NOT have animation related classes when withAnimation is false or undefined.", () => {
    render(<NavLogo />);

    expect(screen.queryByTestId("NavLogo-outter-circle")).not.toHaveClass(
      "NavLogo__outterCircle"
    );

    expect(screen.queryByTestId("NavLogo-inner-circle")).not.toHaveClass(
      "NavLogo__innerCircle"
    );

    expect(screen.queryByTestId("NavLogo-text")).not.toHaveClass(
      "fadeIn-regular"
    );
  });
});

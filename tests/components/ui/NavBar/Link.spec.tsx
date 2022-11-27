import Link from "@ui/Link";
import { render, screen } from "@utils/test-utils";

const mockProps = {
  activeRoute: "test",
  link: { url: "test", order: 1, text: "Test link" },
  isMenuItem: false,
};

describe("Link", () => {
  it("Should render a MenuItem (link with menuitem role) when isMenuItem is true.", () => {
    render(<Link {...mockProps} isMenuItem />);

    expect(screen.getByRole("menuitem")).toBeInTheDocument();
  });

  it("Should render a normal Link when isMenuItem is false.", () => {
    render(<Link {...mockProps} />);

    expect(screen.queryByRole("menuitem")).not.toBeInTheDocument();
  });

  it("Should set href attribute to #main and aria-current to true when the active route is the same as the link original path.", () => {
    render(<Link {...mockProps} />);

    expect(screen.getByText(/Test link/)).toHaveAttribute("href", "/#main");
    expect(screen.getByText(/Test link/)).toHaveAttribute(
      "aria-current",
      "true"
    );
  });

  it("Should set href attribute back to the original value and aria-current to false when the active route is a different one.", () => {
    render(<Link {...mockProps} activeRoute="/other" />);

    expect(screen.getByText(/Test link/)).toHaveAttribute("href", "/test");
    expect(screen.getByText(/Test link/)).toHaveAttribute(
      "aria-current",
      "false"
    );
  });
});

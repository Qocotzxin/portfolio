import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import BaseLink from "@ui/Link";
import { fireEvent, render, screen } from "@utils/test-utils";

const mockProps = {
  activeRoute: "test",
  link: { url: "test", order: 1, text: "Test link" },
  isMenuItem: false,
};

describe("BaseLink", () => {
  it("Should render a MenuItem (link with menuitem role) when isMenuItem is true.", async () => {
    render(
      <Menu>
        <MenuButton as="button">Trigger</MenuButton>
        <MenuList>
          <BaseLink {...mockProps} isMenuItem />
        </MenuList>
      </Menu>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(await screen.findByRole("menuitem")).toBeInTheDocument();
  });

  it("Should render a normal Link when isMenuItem is false.", () => {
    render(<BaseLink {...mockProps} />);

    expect(screen.queryByRole("menuitem")).not.toBeInTheDocument();
  });

  it("Should set href attribute to #main and aria-current to true when the active route is the same as the link original path.", () => {
    render(<BaseLink {...mockProps} />);

    expect(screen.getByText(/Test link/)).toHaveAttribute("href", "/#main");
    expect(screen.getByText(/Test link/)).toHaveAttribute(
      "aria-current",
      "true"
    );
  });

  it("Should set href attribute back to the original value and aria-current to false when the active route is a different one.", () => {
    render(<BaseLink {...mockProps} activeRoute="/other" />);

    expect(screen.getByText(/Test link/)).toHaveAttribute("href", "/test");
    expect(screen.getByText(/Test link/)).toHaveAttribute(
      "aria-current",
      "false"
    );
  });
});

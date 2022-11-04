import LanguageSelector from "@ui/Footer/LanguageSelector";
import { fireEvent, render, screen } from "@utils/test-utils";
import { floatingMenuFns } from "@ui/FloatingMenu/functions";
import FloatingMenu from "@ui/FloatingMenu";
import { MdLanguage } from "react-icons/md";

/**
 * FloatingMenu tests uses LanguageSelector in most of them just for simplicity.
 */

describe("FloatingMenu", () => {
  it("Should open the menu when clicking the trigger button.", () => {
    render(<LanguageSelector />);
    const menu = screen.getByRole("menu");

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(screen.getByTestId("LanguageSelector"));
    expect(menu).toHaveClass("FloatingMenu__list--visible");
  });

  it("Should close the menu when pressing Escape key.", () => {
    render(<LanguageSelector />);
    const menu = screen.getByRole("menu");

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(screen.getByTestId("LanguageSelector"));
    expect(menu).toHaveClass("FloatingMenu__list--visible");
    fireEvent.keyDown(menu, { code: "Escape" });

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
  });

  it("Should close the menu when clicking it.", () => {
    render(<LanguageSelector />);
    const menu = screen.getByRole("menu");

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(screen.getByTestId("LanguageSelector"));
    expect(menu).toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(menu);

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
  });

  it("Should close the menu when clicking the trigger button and the menu is already opened.", () => {
    render(<LanguageSelector />);
    const menu = screen.getByRole("menu");

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(screen.getByTestId("LanguageSelector"));
    expect(menu).toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(screen.getByTestId("LanguageSelector"));

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
  });

  it("Should call onArrowUp when pressing the ArrowUp key and there are elements in the menu.", () => {
    const spy = jest.spyOn(floatingMenuFns, "onArrowUp");
    render(<LanguageSelector />);
    const menu = screen.getByRole("menu");

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(screen.getByTestId("LanguageSelector"));
    expect(menu).toHaveClass("FloatingMenu__list--visible");
    fireEvent.keyDown(menu, { code: "ArrowUp" });
    const items = menu.querySelectorAll('[role="menuitem"');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(0, items);
  });

  it("Should call onArrowDown when pressing the ArrowUp key and there are elements in the menu.", () => {
    const spy = jest.spyOn(floatingMenuFns, "onArrowDown");
    render(<LanguageSelector />);
    const menu = screen.getByRole("menu");

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(screen.getByTestId("LanguageSelector"));
    expect(menu).toHaveClass("FloatingMenu__list--visible");
    fireEvent.keyDown(menu, { code: "ArrowDown" });
    const items = menu.querySelectorAll('[role="menuitem"');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(0, items);
  });

  it("Should not call onArrowUp nor onArrowDown when there are no menu items even if an arrow key is pressed.", () => {
    const spyOnArrowUp = jest.spyOn(floatingMenuFns, "onArrowUp");
    const spyOnArrowDown = jest.spyOn(floatingMenuFns, "onArrowDown");
    render(<FloatingMenu icon={<MdLanguage />} />);
    const menu = screen.getByRole("menu");

    expect(menu).not.toHaveClass("FloatingMenu__list--visible");
    fireEvent.click(screen.getByTestId("FloatingMenu-trigger"));
    expect(menu).toHaveClass("FloatingMenu__list--visible");
    fireEvent.keyDown(menu, { code: "ArrowDown" });
    fireEvent.keyDown(menu, { code: "ArrowUp" });

    expect(spyOnArrowUp).not.toHaveBeenCalled();
    expect(spyOnArrowDown).not.toHaveBeenCalled();
  });
});

import LanguageSelector from "@ui/Footer/LanguageSelector";
import { fireEvent, render, screen } from "@utils/test-utils";

describe("LanguageSelector.", () => {
  it("Should render inside a Floating menu every active language.", async () => {
    render(<LanguageSelector />);

    fireEvent.click(screen.getByTestId("FloatingMenu"));

    expect(screen.getByTestId("FloatingMenu")).toBeInTheDocument();
    const menuItems = await screen.findAllByRole("menuitem");
    expect(menuItems.length).toBe(2);
  });
});

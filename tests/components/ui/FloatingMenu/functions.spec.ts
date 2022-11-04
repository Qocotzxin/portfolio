import { floatingMenuFns } from "@ui/FloatingMenu/functions";

const menuItems = (() => {
  const container = document.createElement("div");
  Array.from([1, 2, 3, 4], () => {
    const anchor = document.createElement("a");
    anchor.focus = jest.fn();
    container.appendChild(anchor);
  });

  return container.querySelectorAll("a");
})();

describe("FloatingMenu functions.", () => {
  describe("onArrowUp", () => {
    it("Should call focus on the previous element when there is one.", () => {
      floatingMenuFns.onArrowUp(1, menuItems);
      expect(menuItems[0].focus).toHaveBeenCalledTimes(1);
    });

    it("Should call focus on the last element when there is no previous element.", () => {
      floatingMenuFns.onArrowUp(0, menuItems);
      expect(menuItems[3].focus).toHaveBeenCalledTimes(1);
    });
  });

  describe("onArrowDown", () => {
    it("Should call focus on the next element when there is one.", () => {
      floatingMenuFns.onArrowDown(1, menuItems);
      expect(menuItems[2].focus).toHaveBeenCalledTimes(1);
    });

    it("Should call focus on the first element when there is no upcoming element.", () => {
      floatingMenuFns.onArrowDown(3, menuItems);
      expect(menuItems[0].focus).toHaveBeenCalledTimes(1);
    });
  });

  describe("getFocusedItemIndex", () => {
    it("Should return the index of the element that is currently being focused.", () => {
      expect(floatingMenuFns.getFocusedItemIndex(menuItems, menuItems[3])).toBe(
        3
      );
    });

    it("Should return 0 if there is no focused element within the provided list.", () => {
      expect(floatingMenuFns.getFocusedItemIndex(menuItems, null)).toBe(0);
    });
  });
});

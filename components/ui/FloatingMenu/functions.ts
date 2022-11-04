export const floatingMenuFns = {
  onArrowUp: (
    focusedItemIndex: number,
    menuItems: NodeListOf<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const previousIndex = focusedItemIndex - 1;
    menuItems[previousIndex]
      ? menuItems[previousIndex].focus()
      : menuItems[menuItems.length - 1].focus();
  },

  onArrowDown: (
    focusedItemIndex: number,
    menuItems: NodeListOf<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const nextIndex = focusedItemIndex + 1;
    menuItems[nextIndex] ? menuItems[nextIndex].focus() : menuItems[0].focus();
  },

  getFocusedItemIndex: (
    menuItems: NodeListOf<HTMLAnchorElement | HTMLButtonElement>,
    activeElement: Element | null
  ) => {
    let focusedItemIndex = 0;

    menuItems.forEach((node, key) => {
      if (activeElement === node) {
        focusedItemIndex = key;
      }
    });

    return focusedItemIndex;
  },
};

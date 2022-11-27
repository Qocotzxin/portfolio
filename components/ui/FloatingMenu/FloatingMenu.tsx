import { useIsDarkMode } from "@hooks/useIsDarkMode";
import { useOutsideClick } from "@hooks/useOutsideClick";
import Button from "@ui/Button";
import { applyConditionalClass, concatClassNames } from "@utils/classnames";
import {
  ComponentPropsWithoutRef,
  FC,
  KeyboardEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { floatingMenuFns } from "./functions";
import { Classes } from "./styles";

enum MenuActionKeys {
  escape = "Escape",
  arrowDown = "ArrowDown",
  arrowUp = "ArrowUp",
}

interface FloatingMenuProps {
  icon: JSX.Element;
  position?: "top" | "bottom";
}

/**
 * This component functionality is based on MDN a11y recommendations for menus
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role
 */
const FloatingMenu: FC<
  PropsWithChildren<FloatingMenuProps & ComponentPropsWithoutRef<"button">>
> = ({ icon, position = "top", children, ...buttonProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<
    NodeListOf<HTMLAnchorElement | HTMLButtonElement> | undefined
  >(undefined);
  const isDark = useIsDarkMode();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onClickMenu = () => {
    setIsOpen((open) => !open);
    menuItems?.[0]?.focus();
  };

  const onEscape = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const onKeyDownMenu: KeyboardEventHandler = (e) => {
    if (e.code === MenuActionKeys.escape) {
      return onEscape();
    }

    if (
      menuItems &&
      menuItems[0] &&
      (e.code === MenuActionKeys.arrowDown || e.code === MenuActionKeys.arrowUp)
    ) {
      const focusedItemIndex = floatingMenuFns.getFocusedItemIndex(
        menuItems,
        document.activeElement
      );

      return e.code === MenuActionKeys.arrowUp
        ? floatingMenuFns.onArrowUp(focusedItemIndex, menuItems)
        : floatingMenuFns.onArrowDown(focusedItemIndex, menuItems);
    }
  };

  useOutsideClick(menuRef, closeMenu);

  useEffect(() => {
    setMenuItems(menuRef.current?.querySelectorAll('[role="menuitem"'));
  }, [menuRef]);

  return (
    <div
      className={Classes.base}
      data-testid="FloatingMenu"
      onKeyDown={onKeyDownMenu}
      ref={menuRef}
    >
      <Button
        data-testid="FloatingMenu-trigger"
        {...buttonProps}
        onClick={onClickMenu}
        ref={triggerRef}
        id="FloatingMenu-trigger"
      >
        {icon}
      </Button>
      <div
        className={concatClassNames(
          Classes.list,
          applyConditionalClass(isOpen, Classes.listVisible),
          applyConditionalClass(isDark, Classes.listDark),
          applyConditionalClass(position === "bottom", Classes.listBottom)
        )}
        onClick={closeMenu}
        role="menu"
        aria-labelledby="FloatingMenu-trigger"
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
};

export default FloatingMenu;

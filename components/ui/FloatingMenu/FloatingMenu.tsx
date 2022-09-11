import { Box, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

interface FloatingMenuProps {
  ariaLabel: string | undefined;
  ButtonIcon: JSX.Element;
}
const FloatingMenu: FC<PropsWithChildren & FloatingMenuProps> = ({
  ariaLabel,
  ButtonIcon,
  children,
  ...wrapperProps
}) => {
  return (
    <Box data-testid="FloatingMenu" {...wrapperProps}>
      <Menu>
        <MenuButton
          data-testid="FloatingMenu-button"
          as={IconButton}
          variant="ghost"
          colorScheme="blue"
          aria-label={ariaLabel}
          icon={ButtonIcon}
          size="sm"
        />
        <MenuList py="2" px="4">
          {children}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default FloatingMenu;

import {
  Box,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { useHygraphContext } from "@contexts/hygraphContext";
import { useAriaLabel } from "@hooks/useAriaLabel";
import { Components } from "@models/hygraph";
import { useRouter } from "next/router";
import { FC } from "react";
import { BiMenu } from "react-icons/bi";
import BaseLink from "./BaseLink";

const NavLinks: FC = () => {
  const router = useRouter();
  const { navLinks } = useHygraphContext();
  const ariaLabel = useAriaLabel({ component: Components.NavLinks });

  return (
    <>
      {/* Desktop */}
      <Show above="md">
        <List
          display="flex"
          alignItems="center"
          justifyContent="center"
          data-testid="NavLinks-desktop"
        >
          {navLinks?.map((link) => (
            <ListItem key={link.url} mx="2">
              <BaseLink activeRoute={router.pathname} link={link} />
            </ListItem>
          ))}
        </List>
      </Show>
      {/* Mobile */}
      <Show breakpoint="(max-width: 767px)">
        <Box data-testid="NavLinks-mobile">
          <Menu>
            <MenuButton
              as={IconButton}
              variant="outline"
              aria-label={ariaLabel?.content}
              icon={<BiMenu />}
              size="sm"
            />
            <MenuList display="flex" flexDir="column" py="2" px="4">
              {navLinks?.map((link) => (
                <BaseLink
                  key={link.url}
                  isMenuItem
                  activeRoute={router.pathname}
                  link={link}
                />
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Show>
    </>
  );
};

export default NavLinks;
